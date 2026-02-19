// app/api/score/route.ts
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const audioFile = formData.get('audio') as File;
    const correctAyah = formData.get('correctAyah') as string;

    if (!audioFile || !correctAyah) {
      return NextResponse.json({ error: "Missing audio or Ayah" }, { status: 400 });
    }

    // Convert the audio file to Base64
    const arrayBuffer = await audioFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const audioBase64 = buffer.toString('base64');

    // Initialize Gemini 1.5 Flash
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite-preview-09-2025' });

    const prompt = `
      You are an expert Quran recitation evaluator. 
      The user is trying to recite the following Ayah: "${correctAyah}"
      
      Listen to the provided audio.
      1. Transcribe exactly what the user said in Arabic text.
      2. Compare their recitation to the correct Ayah.
      3. Give them a score from 0 to 100 based strictly on word-for-word accuracy.
      
      Respond ONLY with a valid JSON object in this exact format, do not use markdown code blocks like \`\`\`json:
      {
        "userRecitation": "The arabic text of what they said",
        "score": 95
      }
    `;

    const audioPart = {
      inlineData: {
        data: audioBase64,
        mimeType: audioFile.type, // Usually 'audio/webm' or 'audio/mp4'
      },
    };

    // Call Gemini
    const result = await model.generateContent([prompt, audioPart]);
    const responseText = result.response.text();

    // Clean and Parse JSON
    const cleanJson = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
    const parsedData = JSON.parse(cleanJson);

    return NextResponse.json(parsedData);

  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ error: "Failed to process audio" }, { status: 500 });
  }
}
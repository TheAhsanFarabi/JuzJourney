'use client';

import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, PDFDownloadLink } from '@react-pdf/renderer';
import { Download } from 'lucide-react';

// 1. Define Styles for the PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    width: '100%',
    height: '100%',
    border: '5pt solid #10B981', // Emerald border
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    marginBottom: 10,
    color: '#334155',
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontFamily: 'Helvetica-Bold',
  },
  subHeader: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 30,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  presentedTo: {
    fontSize: 12,
    color: '#94a3b8',
    marginBottom: 10,
  },
  name: {
    fontSize: 40,
    color: '#059669', // Emerald 600
    fontFamily: 'Helvetica-Bold',
    marginBottom: 20,
    borderBottom: '1pt solid #cbd5e1',
    paddingBottom: 5,
  },
  body: {
    fontSize: 14,
    textAlign: 'center',
    color: '#475569',
    marginBottom: 40,
    lineHeight: 1.5,
    maxWidth: 400,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 40,
  },
  signatureLine: {
    borderTop: '1pt solid #334155',
    width: 150,
    textAlign: 'center',
    paddingTop: 5,
    fontSize: 10,
    color: '#334155',
  },
  date: {
    fontSize: 10,
    color: '#64748b',
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 20,
    backgroundColor: '#10B981',
    borderRadius: 30,
  }
});

// 2. The PDF Document Definition
const CertificateDocument = ({ name, date }: { name: string, date: string }) => (
  <Document>
    <Page size="A4" orientation="landscape" style={styles.page}>
      <View style={styles.border}>
        {/* Abstract Logo Representation */}
        <View style={{ marginBottom: 20, alignItems: 'center' }}>
            <Text style={{ fontSize: 24, color: '#10B981' }}>★</Text>
        </View>

        <Text style={styles.header}>Certificate of Completion</Text>
        <Text style={styles.subHeader}>JuzJourney • Juz 30 Memorization</Text>
        
        <Text style={styles.presentedTo}>This certificate is proudly presented to</Text>
        
        <Text style={styles.name}>{name}</Text>
        
        <Text style={styles.body}>
          For successfully completing the memorization and understanding of the selected Surahs. 
          Your dedication to learning the Quran is an inspiration.
        </Text>

        <View style={styles.footer}>
          <View>
             <Text style={styles.signatureLine}>JuzJourney Team</Text>
          </View>
          <View>
             <Text style={styles.date}>{date}</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

// 3. The Download Button Component (Client Side)
export const DownloadCertificate = ({ userName }: { userName: string }) => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const dateStr = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', month: 'long', day: 'numeric' 
  });

  return (
    <PDFDownloadLink
      document={<CertificateDocument name={userName} date={dateStr} />}
      fileName={`JuzJourney_Certificate_${userName}.pdf`}
      className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all active:scale-95"
    >
      {/* @ts-ignore - render prop type mismatch in library versions sometimes */}
      {({ blob, url, loading, error }) => (
        <>
          <Download className="w-5 h-5" />
          {loading ? 'Generating PDF...' : 'Download Certificate'}
        </>
      )}
    </PDFDownloadLink>
  );
};
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Preloader from './../Preloader';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Rokosz Limited | Your Trusted IT Farm Agency',
  description:
    'Rokosz Limited is a top-tier IT farm agency delivering tailored software solutions, IT consulting, and digital transformation services for businesses worldwide.',
  keywords: [
    'Rokosz Limited',
    'IT farm agency',
    'software development',
    'IT consulting',
    'digital solutions',
    'web development',
    'cloud services',
    'technology partner'
  ],
  authors: [{ name: 'Rokosz Limited', url: 'https://rokoszlimited.com' }],
  creator: 'Rokosz Limited',
  publisher: 'Rokosz Limited',
  metadataBase: new URL('https://rokoszlimited.com'),
  openGraph: {
    title: 'Rokosz Limited | IT Solutions That Drive Results',
    description:
      'We offer innovative IT services, scalable software, and expert consulting for startups to enterprises.',
    url: 'https://rokoszlimited.com',
    siteName: 'Rokosz Limited',
    images: [
      {
        url: 'https://rokoszlimited.com/logo.png', // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: 'Rokosz Limited Banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rokosz Limited | Your Trusted IT Partner',
    description:
      'Explore cutting-edge IT services, expert consulting, and scalable digital solutions with Rokosz Limited.',
    images: ['https://rokoszlimited.com/twitter-card.jpg'], // Replace with your actual Twitter card image
    site: '@RokoszLimited', // Optional, if you have a Twitter account
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-b`}
      >
       <div className="bg-black text-white flex-col flex overflow-x-auto space-x-4"> 

       
        <Preloader/>
        
        
        <Navbar />
   
        {children}
       
        <Footer />
  
        </div>
      </body>
    </html>
  );
}

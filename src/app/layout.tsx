import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavigationBar from './components/user/navigation_bar';
import Footer from './components/user/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Valorem',
    description: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="bg-[#161C28]">
            <body className={inter.className}>
                <NavigationBar></NavigationBar>
                <div>{children}</div>
                <Footer></Footer>
            </body>
        </html>
    );
}

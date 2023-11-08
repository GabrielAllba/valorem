import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Valorem | Valuasi Kekayaan Intelektual',
    description: 'Solusi mudah, aman dan terpercaya untuk valuasi kekayaan intelektual Anda',
    icons: 'valorem.jpeg',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="bg-white">
            <body>
                <div>{children}</div>
            </body>
        </html>
    );
}

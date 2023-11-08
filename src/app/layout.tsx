import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '...',
    description: '...',
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

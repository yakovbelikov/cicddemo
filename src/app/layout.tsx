import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
    title: 'CI/CD Demo',
    description: 'Minimal Next.js stub for CI/CD learning',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
    <html lang="ru">
        <body>{children}</body>
    </html>
);

export default RootLayout;

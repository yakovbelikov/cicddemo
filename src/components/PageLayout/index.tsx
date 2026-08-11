import type { ReactNode } from 'react';

type PageLayoutProps = {
    children: ReactNode;
};

export const PageLayout = ({ children }: PageLayoutProps) => (
    <div className="page">
        <header className="page__header">
            <span className="page__logo">cicddemo</span>
        </header>
        <main>{children}</main>
        <footer className="page__footer">Stub app for CI/CD practice</footer>
    </div>
);

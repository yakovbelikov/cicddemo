import { render, screen } from '@testing-library/react';

import { PageLayout } from '@/components/PageLayout';

describe('PageLayout', () => {
    it('renders children and footer', () => {
        render(
            <PageLayout>
                <p>Test content</p>
            </PageLayout>,
        );

        expect(screen.getByText('Test content')).toBeInTheDocument();
        expect(screen.getByText('Stub app for CI/CD practice')).toBeInTheDocument();
    });
});

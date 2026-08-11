import Link from 'next/link';

import { PageLayout } from '@/components/PageLayout';

const HomePage = () => (
    <PageLayout>
        <section className="hero">
            <p className="badge">CI/CD Demo</p>
            <h1>Заглушка для обучения пайплайнам</h1>
            <p className="lead">
                Минимальный Next.js-проект: здесь можно отрабатывать build, lint, test, Docker и деплой на
                Render.
            </p>
            <div className="actions">
                <Link className="button button--primary" href="/health">
                    Health check
                </Link>
                <Link className="button button--ghost" href="/missing-page">
                    Открыть 404
                </Link>
            </div>
        </section>
    </PageLayout>
);

export default HomePage;

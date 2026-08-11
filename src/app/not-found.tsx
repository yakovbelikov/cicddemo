import Link from 'next/link';

import { PageLayout } from '@/components/PageLayout';

const NotFound = () => (
    <PageLayout>
        <section className="not-found">
            <p className="code">404</p>
            <h1>Страница не найдена</h1>
            <p className="lead">Такой маршрут не существует. Проверь URL или вернись на главную.</p>
            <Link className="button button--primary" href="/">
                На главную
            </Link>
        </section>
    </PageLayout>
);

export default NotFound;

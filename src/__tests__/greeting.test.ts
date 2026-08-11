import { greeting } from '@/libs/utils/greeting';

describe('greeting', () => {
    it('returns a personalized message', () => {
        expect(greeting('CI/CD')).toBe('Hello, CI/CD!');
    });
});

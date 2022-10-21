import { classNames } from 'shared/lib/classNames/classNames';

describe('className helper', () => {
    test('default', () => {
        expect(classNames('default')).toBe('default');
    });
    test('default with additional classes', () => {
        expect(classNames('default', {}, ['adClass'])).toBe('default adClass');
    });
    test('default with mods true', () => {
        expect(classNames('default', { hovered: true, scroll: true }, ['adClass']))
            .toBe('default hovered scroll adClass');
    });
    test('default with mods false', () => {
        expect(classNames('default', { hovered: true, scroll: false }, ['adClass']))
            .toBe('default hovered adClass');
    });
});
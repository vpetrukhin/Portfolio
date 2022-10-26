import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextSize {
    'S' = 'small',
    'M' = 'medium',
    'L' = 'large',
    'XL' = 'extralarge',
}

export enum TextColor {
    'PRIMARY' = 'primary',
    'SECONDARY'= 'secondary',
    'ASCENT' = 'ascent',
}
interface TextProps {
    className?: string;
    text: string;
    size?: TextSize;
    color?: TextColor;
}

export const Text = (props: TextProps) => {
    const { className, text, size = TextSize.S, color = TextColor.SECONDARY } = props;

    return (
        <p className={classNames(cls.Text, {}, [cls[size], cls[color], className])}>{text}</p>
    );
};
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';


export enum TextTagPosition {
    VERTICAL = 'vertical',
    HORIZONTAL = 'horizontal',
}

interface TextProps {
    className?: string;
    text?: string;
    position?: TextTagPosition;
    isGreen?: boolean;
}

export const Text = (props: TextProps) => {
    const { className, text, position = TextTagPosition.HORIZONTAL, isGreen } = props;

    return (
        <div className={classNames(cls.Text, {}, [className, cls[position]])}>
            <span className={classNames(cls.tag, {}, [cls[position], cls.top])}>{'<p>'}</span>
            <p className={classNames(cls.content, {[cls.isGreen]: isGreen}, [])}>{text}</p>
            <span className={classNames(cls.tag, {}, [cls[position], cls.bottom])}>{'</p>'}</span>
        </div>
    );
};
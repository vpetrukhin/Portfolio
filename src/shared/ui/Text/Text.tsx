import { ReactNode } from 'react';
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
}

export const Text = (props: TextProps) => {
    const { className, text, position = TextTagPosition.HORIZONTAL } = props;

    return (
        <div className={classNames(cls.Text, {}, [className, cls[position]])}>
            <span className={classNames(cls.tag, {}, [cls[position], cls.top])}>{'<p>'}</span>
            {text}
            <span className={classNames(cls.tag, {}, [cls[position], cls.bottom])}>{'</p>'}</span>
        </div>
    );
};
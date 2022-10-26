import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Title.module.scss';

type TagNames = 'h1' | 'h2';

export enum TitleTheme {
    'SECTION' = 'section',
    'SMALL' = 'small',
}

interface TitleProps {
    className?: string;
    tagName?: TagNames;
    text: string;
    theme?: TitleTheme;
}

export const Title = (props: TitleProps) => {
    const { className, tagName = 'h1', text, theme = TitleTheme.SMALL } = props;

    const generatedTitle = (tagName: TagNames): JSX.Element => {
        switch (tagName) {
            case 'h1': {
                return <h1 className={classNames(cls.Title, {}, [cls[theme], className])}>{text}</h1>
            }
            case 'h2': {
                return <h2 className={classNames(cls.Title, {}, [cls[theme], className])}>{text}</h2>
            }
            default: {
                return <h1 className={classNames(cls.Title, {}, [cls[theme], className])}>{text}</h1>
            }
        }
    }

    return generatedTitle(tagName);
};
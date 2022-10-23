import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Title.module.scss';

type TagNames = 'h1' | 'h2' | 'h3' | 'h4';

interface TitleProps {
    className?: string;
    tagName?: TagNames;
    isBottomTagLeft?: boolean;
    text: string;
}

export const Title = (props: TitleProps) => {
    const { className, tagName = 'h1', text, isBottomTagLeft } = props;

    const getTitleByTagname = (tagName: TagNames): JSX.Element => {
        switch (tagName) {
            case 'h1': {
                return (
                    <h1 className={classNames(cls.Title, {}, [className])}>
                        <span className={classNames(cls.tag, {}, [cls.tag_top])}>{`<${tagName}>`}</span>
                        {`${text}`}
                        <span className={classNames(cls.tag, { [cls.tag_left]: isBottomTagLeft }, [cls.tag_bottom])}>{`</${tagName}>`}</span>
                    </h1>
                )
            }
            case 'h2': {
                return (
                    <h2 className={classNames(cls.Title, {}, [className])}>
                        <span className={classNames(cls.tag, {}, [cls.tag_top])}>{`<${tagName}>`}</span>
                        {`${text}`}
                        <span className={classNames(cls.tag, { [cls.tag_left]: isBottomTagLeft }, [cls.tag_bottom])}>{`</${tagName}>`}</span>
                    </h2>
                )
            }
            case 'h3': {
                return (
                    <h3 className={classNames(cls.Title, {}, [className])}>
                        <span className={classNames(cls.tag, {}, [cls.tag_top])}>{`<${tagName}>`}</span>
                        {`${text}`}
                        <span className={classNames(cls.tag, { [cls.tag_left]: isBottomTagLeft }, [cls.tag_bottom])}>{`</${tagName}>`}</span>
                    </h3>
                )
            }
            case 'h4': {
                return (
                    <h4 className={classNames(cls.Title, {}, [className])}>
                        <span className={classNames(cls.tag, {}, [cls.tag_top])}>{`<${tagName}>`}</span>
                        {`${text}`}
                        <span className={classNames(cls.tag, { [cls.tag_left]: isBottomTagLeft }, [cls.tag_bottom])}>{`</${tagName}>`}</span>
                    </h4>
                )
            }
        }
    }

    return getTitleByTagname(tagName);
};
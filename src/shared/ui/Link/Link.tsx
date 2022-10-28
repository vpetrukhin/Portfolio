import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Link.module.scss';

interface LinkProps {
    href: string;
    text: string;
    className?: string;
}

export const Link = (props: LinkProps) => {
    const { className, href, text } = props;
    
    return (
        <a href={href} className={classNames(cls.Link, {}, [className])}>{text}</a>
    );
};
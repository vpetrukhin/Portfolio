import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Link.module.scss';

interface LinkProps {
    href: string;
    text: string;
    className?: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
}

export const Link = (props: LinkProps) => {
    const { className, href, text, target = '_self' } = props;
    
    return (
        <a target={target} href={href} className={classNames(cls.Link, {}, [className])}>{text}</a>
    );
};
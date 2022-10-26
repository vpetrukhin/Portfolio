import { classNames } from 'shared/lib/classNames/classNames';
import { NavItem } from '../../types/NavBar.types';
import cls from './NavBarItem.module.scss';

interface NavBarItemProps {
    className?: string;
    item: NavItem;
}

export const NavBarItem = (props: NavBarItemProps) => {
    const { className, item } = props;

    return (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a href={`#${item.link}` || '#anchor'} className={classNames(cls.NavBarItem, {}, [className])}>
            {item.text}
        </a>
    );
};
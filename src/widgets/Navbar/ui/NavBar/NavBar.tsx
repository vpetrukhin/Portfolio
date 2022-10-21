import { classNames } from '../../../../shared/lib/classNames/classNames';
import { items } from '../../model/items';
import { NavBarItem } from '../NavBarItem/NavBarItem';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}

export const NavBar = (props: NavBarProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            {items.map(item => <NavBarItem key={item.id} item={item} />)}
        </div>
    );
};
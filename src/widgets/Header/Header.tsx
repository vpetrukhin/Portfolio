import { useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { NavBar } from 'widgets/Navbar';
import { SocialLinks } from 'widgets/SocialLinks/SocialLinks';
import cls from './Header.module.scss';
import close from 'assets/close.svg';

interface HeaderProps {
    className?: string;
}

export const Header = (props: HeaderProps) => {
    const { className } = props;

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('hashchange', onMenuClose);

        return () => {
            window.removeEventListener('hashchange', onMenuClose);
        }
    }, [])

    const onBurgerClick = () => {
        setIsMenuOpen(true);
    };

    const onMenuClose = () => {
        setIsMenuOpen(false);
    };


    return (
        <header className={classNames(cls.header, {}, [className])}>
            <div className={cls.logo}>VP</div>
            <div className={classNames(cls.menu, {
                [cls.menuActive]: isMenuOpen
            }, [])}>
                <Button className={cls.closeBtn} theme={ButtonTheme.clear} onClick={onMenuClose}>
                    <img src={close} alt="close" />
                </Button>
                <NavBar className={cls.navbar} />
                <SocialLinks className={cls.sidebar} />
            </div>
            
            <Button onClick={onBurgerClick} className={cls.burger} theme={ButtonTheme.clear}>
                <span className={cls.burger_line} />
                <span className={cls.burger_line} />
                <span className={cls.burger_line} />
            </Button>
        </header>
    );
};
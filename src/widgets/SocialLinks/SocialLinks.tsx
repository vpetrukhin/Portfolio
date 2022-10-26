import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SocialLinks.module.scss';
import github from 'assets/github.svg';
import telegram from 'assets/telegram.svg';

interface SocialLinksProps {
    className?: string;
}

export const SocialLinks = (props: SocialLinksProps) => {
    const { className } = props;

    return (
        <ul className={classNames(cls.SocialLinks, {}, [className])}>
            <li className={cls.link}>
                <a href="https://github.com/vpetrukhin">
                    <img src={github} alt="github" />
                </a>
            </li>
            <li className={cls.link}>
                <a href="https://github.com/vpetrukhin">
                    <img src={telegram} alt="github" />
                </a>
            </li>
        </ul>
    );
};
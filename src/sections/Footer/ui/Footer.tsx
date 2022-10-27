import { Sections } from 'shared/config/nav/items';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextColor, TextSize } from 'shared/ui/Text/Text';
import { SocialLinks } from 'widgets/SocialLinks/SocialLinks';
import cls from './Footer.module.scss';

interface FooterProps {
    className?: string;
}

export const Footer = (props: FooterProps) => {
    const { className } = props;

    return (
        <section id={Sections.CONTACS} className={classNames(cls.Footer, {}, [className])}>
            <SocialLinks />
            <ul className={cls.contacs}>
                <li className={cls.contact}>
                    <Text text="Почта: vpetruin16@gmail.com" color={TextColor.PRIMARY} size={TextSize.M} />
                </li>
            </ul>
        </section>
    );
};
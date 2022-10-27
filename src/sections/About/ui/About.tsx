import { Sections } from 'shared/config/nav/items';
import { classNames } from 'shared/lib/classNames/classNames';
import { Title, TitleTheme } from 'shared/ui/Title/Title';
import cls from './About.module.scss';
import avatarImage from 'assets/avatar.jpg'
import { Text, TextSize } from 'shared/ui/Text/Text';

interface AboutProps {
    className?: string;
}

export const About = (props: AboutProps) => {
    const { className } = props;

    return (
        <section id={`#${Sections.ABOUT}`} className={classNames(cls.About, {}, [className])}>
            <Title className={cls.title} text="ОБО МНЕ" theme={TitleTheme.SECTION} />
            <div className={cls.content}>
                <div className={cls.avatar}>
                    <img className={cls.avatarImg} src={avatarImage} alt="avatar" />
                </div>
                <div className={cls.description}>
                    {/* Переписать */}
                    <Text size={TextSize.M} text="Я родился и живу в Москве. Закончил Московский автодорожный институт по професии 'Инженер по автоматизиции'. Люблю активно проводить время. В конце 4 курса начал кодить. После окончания курса по веб-разработке занялся поиском работы." />
                </div>
            </div>
        </section>
    );
};
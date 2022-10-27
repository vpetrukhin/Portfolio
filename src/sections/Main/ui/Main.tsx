import { Header } from 'widgets/Header/Header';
import { classNames } from 'shared/lib/classNames/classNames';
import {Sections} from 'shared/config/nav/items'
import cls from './Main.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { Title, TitleTheme } from 'shared/ui/Title/Title';

interface MainProps {
    className?: string;
}

export const Main = (props: MainProps) => {
    const { className } = props;

    return (
        <section id={Sections.MAIN} className={classNames(cls.Main, {}, [className])}>
            <Header />
            <div className={cls.content}>
                <div className={cls.offer}>
                    <Title className={cls.title} text="Василий Петрухин" theme={TitleTheme.SMALL} />
                    <div className={cls.line} />
                    <Text
                        className={cls.subTitle}
                        text="Frontend-Разработчик"
                    />
                    <Button>Скачать резюме</Button>
                </div>
            </div>
        </section>
    );
};
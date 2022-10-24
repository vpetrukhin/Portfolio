import { classNames } from 'shared/lib/classNames/classNames';
import { Title } from 'shared/ui/Title/Title';
import { Text } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button/Button';
import {Sections} from 'shared/config/nav/items'
import cls from './Main.module.scss';

interface MainProps {
    className?: string;
}

export const Main = (props: MainProps) => {
    const { className } = props;

    return (
        <section id={`#${Sections.MAIN}`} className={classNames(cls.Main, {}, [className])}>
            <div className={cls.offer}>
                <Text className={cls.text} text="Это" isGreen />
                <Title className={cls.title} text="Петрухин Василий" isBottomTagLeft />
                <Text className={cls.text} text="Фронтенд-разработчик" isGreen />
            </div>
            <Button>
                <a
                    href="https://hh.ru/resume/dd24b4cfff08ebf33f0039ed1f6a7377315058"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cls.link}
                >
                    {'<Моё резюме/>'}
                </a>
            </Button>
        </section>
    );
};
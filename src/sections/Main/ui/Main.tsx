import { classNames } from 'shared/lib/classNames/classNames';
import { Title } from 'shared/ui/Title/Title';
import { Text } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button/Button';
import cls from './Main.module.scss';

interface MainProps {
    className?: string;
}

export const Main = (props: MainProps) => {
    const { className } = props;

    return (
        <section className={classNames(cls.Main, {}, [className])}>
            <div className={cls.offer}>
                <Text className={cls.text} text="Это" isGreen />
                <Title className={cls.title} text="Петрухин Василий" isBottomTagLeft />
                <Text className={cls.text} text="Фронтенд-разработчик" isGreen />
            </div>
            <Button>{'<Download CV/>'}</Button>
        </section>
    );
};
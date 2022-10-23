import { classNames } from 'shared/lib/classNames/classNames';
import { Title } from 'shared/ui/Title/Title';
import cls from './Main.module.scss';

interface MainProps {
    className?: string;
}

export const Main = (props: MainProps) => {
    const { className } = props;

    return (
        <section className={classNames(cls.Main, {}, [className])}>
            <Title text="Петрухин Василий" isBottomTagLeft />
        </section>
    );
};
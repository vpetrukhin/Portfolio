import { Sections } from 'shared/config/nav/items';
import { classNames } from 'shared/lib/classNames/classNames';
import { Title, TitleTheme } from 'shared/ui/Title/Title';
import cls from './Project.module.scss';

interface ProjectProps {
    className?: string;
}

export const Project = (props: ProjectProps) => {
    const { className } = props;

    return (
        <section id={`#${Sections.PORTFOLIO}`} className={classNames(cls.Project, {}, [className])}>
            <Title className={cls.title} text="ПРОЕКТЫ" theme={TitleTheme.SECTION} />
            <ul className={cls.projects}>
                <li className={cls.project}>Проект</li>
                <li className={cls.project}>Проект</li>
                <li className={cls.project}>Проект</li>
                <li className={cls.project}>Проект</li>
            </ul>
        </section>
    );
};
import { Sections } from 'shared/config/nav/items';
import { classNames } from 'shared/lib/classNames/classNames';
import { Title, TitleTheme } from 'shared/ui/Title/Title';
import { ProjectInfo } from '../model/types/project';
import { Project } from './Project/Project';
import cls from './Projects.module.scss';

interface ProjectsProps {
    className?: string;
}

const projects: Array<ProjectInfo> = [
    {
        title: 'Shortly',
        description: 'Веб-сервис для сокращения ссылок. Для сокращения ссылок используется GoTiny-Api.',
        link: 'https://url-shortener-xi-five.vercel.app/'
    }
]

export const Projects = (props: ProjectsProps) => {
    const { className } = props;

    return (
        <section id={Sections.PORTFOLIO} className={classNames(cls.Project, {}, [className])}>
            <Title className={cls.title} text="ПРОЕКТЫ" theme={TitleTheme.SECTION} />
            <ul className={cls.projects}>
                {projects.map(project => (
                    <Project key={project.link} project={project} />
                ))}
            </ul>
        </section>
    );
};
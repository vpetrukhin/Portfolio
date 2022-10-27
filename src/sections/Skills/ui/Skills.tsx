import { Sections } from 'shared/config/nav/items';
import { classNames } from 'shared/lib/classNames/classNames';
import { Title, TitleTheme } from 'shared/ui/Title/Title';
import { Skill } from './Skill/Skill';
import cls from './Skills.module.scss';

interface SkillsProps {
    className?: string;
}

export const Skills = (props: SkillsProps) => {
    const { className } = props;

    return (
        <section id={`#${Sections.SKILLS}`} className={classNames(cls.Skills, {}, [className])}>
            <Title className={cls.title} text="НАВЫКИ" theme={TitleTheme.SECTION} />
            <div className={cls.content}>
                <Skill item={{
                    label: 'HTML5 CSS3',
                    capacity: 9,
                }}/>
                <Skill item={{
                    label: 'React',
                    capacity: 9,
                }}/>
                <Skill item={{
                    label: 'JavaScript',
                    capacity: 8,
                }}/>
                <Skill item={{
                    label: 'TypeScript',
                    capacity: 8,
                }}/>
                <Skill item={{
                    label: 'Redux',
                    capacity: 8,
                }}/>
                <Skill item={{
                    label: 'NodeJS',
                    capacity: 7,
                }}/>
                <Skill item={{
                    label: 'MongoDB',
                    capacity: 7,
                }}/>
            </div>
        </section>
    );
};
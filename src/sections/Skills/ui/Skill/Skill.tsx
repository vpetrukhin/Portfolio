import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextColor, TextSize } from 'shared/ui/Text/Text';
import { Round, SkillItem } from '../../model/types/skills';
import cls from './Skill.module.scss';

interface SkillProps {
    className?: string;
    item: SkillItem;
}

export const Skill = (props: SkillProps) => {
    const { className, item } = props;

    const rounds: Array<Round> = new Array(10).fill({}).map((_, index) => ({
            isActive: index < item.capacity,
            text: index === item.capacity - 1 ? `${item.capacity}0%` : ''
    }));

    return (
        <div className={classNames(cls.Skill, {}, [className])}>
            <Text text={item.label} size={TextSize.M} color={TextColor.PRIMARY} />
            <ul className={cls.rounds}>
                {rounds.map((round, index) => (
                    <li
                        key={`${index}-${round}`}
                        className={classNames(cls.round, { [cls.active]: round.isActive })}
                    >
                        {round.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};
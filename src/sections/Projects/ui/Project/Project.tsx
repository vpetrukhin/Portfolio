import { useState } from 'react';
import { ProjectInfo } from '../../model/types/project';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { ProjectModal } from '../ProjectModal/ProjectModal';
import cls from './Project.module.scss';

interface ProjectProps {
    className?: string;
    project: ProjectInfo;
}

export const Project = (props: ProjectProps) => {
    const { className, project } = props;

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false)
    };

    return (
        <>
            <li className={classNames(cls.Project, {}, [className])}>
                <Button className={cls.button} theme={ButtonTheme.clear} onClick={handleModalOpen}>
                    Проект
                </Button>
            </li>
            <ProjectModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                projectInfo={project}
            />
        </>
    );
};
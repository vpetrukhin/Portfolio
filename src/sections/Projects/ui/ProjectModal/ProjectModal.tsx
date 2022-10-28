import { ProjectInfo } from '../../model/types/project';
import { Modal } from 'shared/ui/Modal/Modal';
import { Text, TextColor, TextSize } from 'shared/ui/Text/Text';
import { Link } from 'shared/ui/Link/Link';
import cls from './ProjectModal.module.scss';

interface ProjectModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    projectInfo: ProjectInfo;
}

export const ProjectModal = (props: ProjectModalProps) => {
    const { isOpen, onClose, projectInfo } = props;

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <Text className={cls.title} color={TextColor.PRIMARY} size={TextSize.L} text={projectInfo.title || 'Project title'} />
            <Text className={cls.description} color={TextColor.PRIMARY} size={TextSize.M} text={projectInfo.description || ''} />
            <Link className={cls.link} text="Ссылка на проект" href={projectInfo.link} />
        </Modal>
    );
};
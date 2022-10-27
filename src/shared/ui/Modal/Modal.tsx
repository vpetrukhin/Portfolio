import { ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '../Button/Button';
import cls from './Modal.module.scss';
import close from 'assets/close.svg';

interface ModalProps {
    className?: string;
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose } = props;

    const handleClose = () => {
        onClose();
    };

    return (
        <div className={classNames(cls.Modal, {}, [className])}>
            <div className={classNames(cls.overlay, {
                [cls.overlayActive]: isOpen
            }, [])} />
            <div className={classNames(cls.content, {
                [cls.contentActive]: isOpen
            }, [])}>
                <Button className={cls.closeBtn} theme={ButtonTheme.clear} onClick={handleClose}>
                    <img src={close} alt="Close" />
                </Button>
                {children}
            </div>
        </div>
    );
};
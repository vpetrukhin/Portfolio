import { ReactNode, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '../Button/Button';
import cls from './Modal.module.scss';
import close from 'assets/close.svg';
import { Portal } from '../Portal/Portal';

interface ModalProps {
    className?: string;
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose } = props;

    const handleKeyPressClose = useCallback((e: KeyboardEvent) => {
        if (e.code === 'Escape' && isOpen) {
            onClose();
        }
    }, [isOpen, onClose]);

    const handleOutsideClose = useCallback(() => {
        if (isOpen) {
            onClose();
        }
    }, [isOpen, onClose]);

    const handleClose = () => {
        onClose();
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPressClose);

        return () => {
            window.removeEventListener('keydown', handleKeyPressClose);
        }
    }, [handleKeyPressClose]);

    if (!isOpen) return null;

    return (
        <Portal>
            <div className={classNames(cls.Modal, {}, [className])}>
                <div className={classNames(cls.overlay, {
                    [cls.overlayActive]: isOpen
                }, [])} onClick={handleOutsideClose} />
                <div className={classNames(cls.content, {
                    [cls.contentActive]: isOpen
                }, [])}>
                    <Button className={cls.closeBtn} theme={ButtonTheme.clear} onClick={handleClose}>
                        <img src={close} alt="Close" />
                    </Button>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
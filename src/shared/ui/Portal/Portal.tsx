import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

export const Portal = (children: ReactNode, container: Element = document.documentElement) => {
    return (<>{createPortal(children, container)}</>)
}
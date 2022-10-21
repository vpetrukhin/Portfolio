import { NavItem } from '../types/NavBar.types';

export enum Sections {
    'MAIN' = 'main',
    'PORTFOLIO' = 'portfolio',
    'ABOUT' = 'about',
    'CONTACS' = 'contacts',
}

export const items: Array<NavItem> = [
    {
        id: "01",
        link: Sections.MAIN,
        text: 'Начало'
    },
    {
        id: "02",
        link: Sections.PORTFOLIO,
        text: 'Мои работы'
    },
    {
        id: "03",
        link: Sections.ABOUT,
        text: 'Обо мне'
    },
    {
        id: "04",
        link: Sections.CONTACS,
        text: 'Связаться со мной'
    },
];
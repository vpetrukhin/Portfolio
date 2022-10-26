import { NavItem } from 'widgets/Navbar/types/NavBar.types';

export enum Sections {
    'MAIN' = 'main',
    'PORTFOLIO' = 'portfolio',
    'ABOUT' = 'about',
    'CONTACS' = 'contacts',
    'SKILLS' = 'skills'
}

export const items: Array<NavItem> = [
    {
        id: "01",
        link: Sections.MAIN,
        text: 'Главное'
    },
    {
        id: "02",
        link: Sections.ABOUT,
        text: 'Обо мне'
    },
    {
        id: "03",
        link: Sections.SKILLS,
        text: 'Навыки'
    },
    {
        id: "04",
        link: Sections.PORTFOLIO,
        text: 'Мои работы'
    },
    {
        id: "05",
        link: Sections.CONTACS,
        text: 'Связаться'
    },
];
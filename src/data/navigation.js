import { v4 as createId } from 'uuid';

export const navigation = [
    {
        name: "Home",
        scrollTo: "sectionHero",
        id: createId(),
    },
    {
        name:"About",
        scrollTo: "sectionAbout",
        id: createId(),
    },
    {
        name: "Projects",
        scrollTo: "sectionProjects",
        id: createId(),

    },
    {
        name: "Contacts",
        scrollTo: "sectionContacts",
        id: createId(),
    }
];

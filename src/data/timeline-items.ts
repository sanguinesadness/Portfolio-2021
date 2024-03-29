import { ITimelineItem } from "../types/timeline";
import uniqid from "uniqid";

import lyceum from "../images/story/lyceum.jpg";
import phys_math from "../images/story/phys-math.jpg";
import hseLogo from "../images/story/hse_logo_transparent.png";
import it from "../images/story/it.png";
import webdev from "../images/story/webdev.jpg";
import csharp from "../images/story/csharp.png";
import porfolio from "../images/story/portfolio.png";
import nikifilini from "../images/story/nikifilini.png";
import hivex from "../images/story/hivex.png";
import tochka from "../images/story/tochka.png";

export const timelineItems: ITimelineItem[] = [
    {
        id: uniqid(),
        image: lyceum,
        year: 2012,
        paragraphs: ["Поступил в Лицей №1 города Кунгура."],
    },
    {
        id: uniqid(),
        image: phys_math,
        year: 2017,
        paragraphs: ["Пошел в физико-математический класс."],
    },
    {
        id: uniqid(),
        image: it,
        year: 2018,
        paragraphs: [
            "Начал интересоваться программированием.",
            "Выбрал информатику в качестве доп. предмета по ЕГЭ.",
        ],
    },
    {
        id: uniqid(),
        image: hseLogo,
        year: 2019,
        paragraphs: [
            "Сдал ЕГЭ на высокий балл.",
            "Поступил в НИУ ВШЭ Пермь на специальность “Программная инженерия”.",
        ],
    },
    {
        id: uniqid(),
        image: csharp,
        year: "2019-2020",
        paragraphs: [
            "Программировал на C#, создавал приложения на WinForms и WPF под Windows.",
        ],
    },
    {
        id: uniqid(),
        image: webdev,
        year: "01/2021",
        paragraphs: [
            "Начал создавать веб-приложения, заинтересовался дизайном интерфейсов.",
        ],
    },
    {
        id: uniqid(),
        image: porfolio,
        year: "10/2021",
        paragraphs: ["Создал сайт-портфолио для демонстрации своих работ и предоставления информации о себе."],
    },
    {
        id: uniqid(),
        image: nikifilini,
        year: "06/2021 – 09/2021",
        paragraphs: [
            "Работал Full-stack разработчиком в Московской компании NIKIFILINI.",
            "Бренд занимается продажей одежды собственного производства.",
            "Технологии: React, MobX, TypeScript, Nest.js, Prisma, Postgres.",
        ],
    },
    {
        id: uniqid(),
        image: hivex,
        year: "09/2021 – 03/2022",
        paragraphs: [
            "Работаю Front-end разработчиком в международной компании Hivex.",
            "Технологии: React, Redux, MobX, TypeScript.",
        ],
    },
    {
        id: uniqid(),
        image: tochka,
        year: "03/2022 – Now",
        paragraphs: [
            "Работаю Front-end разработчиком в банке для предпринимателей Точка.",
            "Технологии: React, Typescript, RxJS, Effector, Angular."
        ]
    },
    {
        id: uniqid(),
        image: hseLogo,
        year: "06/2023",
        paragraphs: ["Закончил бакалавриат НИУ ВШЭ Пермь по направлению 'Программная инженерия'."]
    },
    {
        id: uniqid(),
        image: hseLogo,
        year: "08/2023",
        paragraphs: ["Поступил в магистратуру НИУ ВШЭ Пермь на направление 'Финансовые стратегии и аналитика'."]
    }
];

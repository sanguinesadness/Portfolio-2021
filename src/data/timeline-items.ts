import { ITimelineItem } from "../types/timeline";
import uniqid from 'uniqid';

import lyceum from '../images/story/lyceum.jpg';
import phys_math from '../images/story/phys-math.jpg';
import hse from '../images/story/hse.jpg';
import it from '../images/story/it.png';
import webdev from '../images/story/webdev.jpg';
import csharp from '../images/story/csharp.png';
import porfolio from '../images/story/portfolio.png';

export const timelineItems: ITimelineItem[] = [
    {
        id: uniqid(),
        image: lyceum,
        year: 2012,
        paragraphs: ["Поступил в Лицей №1 города Кунгура."]
    },
    {
        id: uniqid(),
        image: phys_math,
        year: 2017,
        paragraphs: ["Пошел в физико-математический класс."]
    },
    {
        id: uniqid(),
        image: it,
        year: 2018,
        paragraphs: [
            "Начал интересоваться программированием.",
            "Выбрал информатику в качестве доп. предмета по ЕГЭ."
        ]
    },
    {
        id: uniqid(),
        image: hse,
        year: 2019,
        paragraphs: [
            "Сдал ЕГЭ на высокий балл.",
            "Поступил в Высшую Школу Экономики в Перми на специальность “Программная инженерия”."
        ]
    },
    {
        id: uniqid(),
        image: csharp,
        year: "2019-2020",
        paragraphs: ["Программировал на C#, создавал приложения на WinForms и WPF под Windows."]
    },
    {
        id: uniqid(),
        image: webdev,
        year: "01/2021",
        paragraphs: ["Начал создавать веб-приложения, заинтересовался дизайном интерфейсов."]
    },
    {
        id: uniqid(),
        image: porfolio,
        year: "10/2021",
        paragraphs: ["Создал сайт-портфолио для демонстрации своих работ."]
    }
];
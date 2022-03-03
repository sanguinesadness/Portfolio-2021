import { IWork, PlatformTypes, WorkTypes } from "../types/work";
import uniqid from "uniqid";
import gms_web from "../images/projects/GMS-web.png";
import gms_desktop from "../images/projects/GMS-desktop.png";
import fake_store from "../images/projects/fake-store.png";
import weather_app from "../images/projects/weather-app.png";
import area17 from "../images/projects/area17.png";
import gamerly from "../images/projects/gamerly.png";
import my_little_paint from "../images/projects/my-little-paint.png";
import sendsay_console from "../images/projects/sendsay-api-console.png";

export const works: IWork[] = [
    {
        id: uniqid(),
        name: "Game Management System",
        shortName: "Game Manager",
        type: WorkTypes.FULL_STACK,
        titlePicture: gms_web,
        pictures: [],
        platform: PlatformTypes.WEB,
        techTags: [
            "ASP.NET Core",
            "C#",
            "Entity Framework",
            "Razor HTML",
            "jQuery",
            "Pure JS",
            "MySql",
            "SCSS",
            "MVC",
            "GSAP",
        ],
        link: "https://github.com/sanguinesadness/GameManager-Web",
    },
    {
        id: uniqid(),
        name: "Game Management System",
        shortName: "Game Manager",
        type: WorkTypes.DESKTOP,
        titlePicture: gms_desktop,
        pictures: [],
        platform: PlatformTypes.WINDOWS,
        techTags: [
            ".NET Framework",
            "WPF",
            "C#",
            "MS SQL Server",
            "Material UI",
        ],
        link: "https://github.com/sanguinesadness/GameManager-Desktop",
    },
    {
        id: uniqid(),
        name: "fake store",
        type: WorkTypes.FRONT_END,
        titlePicture: fake_store,
        pictures: [],
        platform: PlatformTypes.WEB,
        techTags: [
            "React.js",
            "Redux",
            "TypeScript",
            "SCSS",
            "Commerce.js",
            "GSAP",
        ],
        link: "https://github.com/sanguinesadness/Store-App-React",
    },
    {
        id: uniqid(),
        name: "10 day forecast",
        type: WorkTypes.FRONT_END,
        titlePicture: weather_app,
        pictures: [],
        platform: PlatformTypes.WEB,
        techTags: ["React.js", "SCSS", "Openweathermap API"],
        link: "https://github.com/sanguinesadness/Weather-App-React",
    },
    {
        id: uniqid(),
        name: "AREA17",
        type: WorkTypes.FRONT_END,
        titlePicture: area17,
        pictures: [],
        platform: PlatformTypes.WEB,
        techTags: ["HTML", "CSS", "Pure JS", "GSAP"],
        link: "https://github.com/sanguinesadness/AREA17",
    },
    {
        id: uniqid(),
        name: "gamerly.",
        type: WorkTypes.FRONT_END,
        titlePicture: gamerly,
        pictures: [],
        platform: PlatformTypes.WEB,
        techTags: ["HTML", "CSS", "Pure JS", "GSAP"],
        link: "https://github.com/sanguinesadness/gmrly.",
    },
    {
        id: uniqid(),
        name: "My Little Paint",
        type: WorkTypes.DESKTOP,
        titlePicture: my_little_paint,
        pictures: [],
        platform: PlatformTypes.WINDOWS,
        techTags: ["C#", "WinForms", "OpenStreetMap API"],
        link: "https://github.com/sanguinesadness/PaintMDI",
    },
    {
        id: uniqid(),
        name: "Sendsay API Console",
        type: WorkTypes.FRONT_END,
        titlePicture: sendsay_console,
        pictures: [],
        platform: PlatformTypes.WEB,
        techTags: ["React", "Redux", "TypeScript", "MobX", "SCSS", "BEM"],
        link: "https://github.com/sanguinesadness/sendsay-api-console",
    },
];

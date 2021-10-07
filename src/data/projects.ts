import { IProject, PlatformTypes, ProjectTypes } from '../types/project';
import uniqid from 'uniqid';
import gms_web from '../images/projects/GMS-web.png';
import gms_desktop from '../images/projects/GMS-desktop.png';
import fake_store from '../images/projects/fake-store.png';
import weather_app from '../images/projects/weather-app.png';
import area17 from '../images/projects/area17.png';
import gamerly from '../images/projects/gamerly.png';
import my_little_paint from '../images/projects/my-little-paint.png';

export const myProjects: IProject[] = [
    {
        id: uniqid(),
        name: "Game Management System",
        type: ProjectTypes.FULL_STACK,
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
            "GSAP"
        ]
    },
    {
        id: uniqid(),
        name: "Game Management System",
        type: ProjectTypes.DESKTOP,
        titlePicture: gms_desktop,
        pictures: [],
        platform: PlatformTypes.WINDOWS,
        techTags: [
            ".NET Framework",
            "WPF",
            "C#",
            "MS SQL Server",
            "Material UI"
        ]
    },
    {
        id: uniqid(),
        name: "fake store",
        type: ProjectTypes.FRONT_END,
        titlePicture: fake_store,
        pictures: [],
        platform: PlatformTypes.WEB,
        techTags: [
            "React.js",
            "Redux",
            "TypeScript",
            "SCSS",
            "Commerce.js",
            "GSAP"
        ]
    },
    {
        id: uniqid(),
        name: "10 day forecast",
        type: ProjectTypes.FRONT_END,
        titlePicture: weather_app,
        pictures: [],
        platform: PlatformTypes.WEB,
        techTags: [
            "React.js",
            "SCSS",
            "Openweathermap API"
        ]
    },
    {
        id: uniqid(),
        name: "AREA17",
        type: ProjectTypes.FRONT_END,
        titlePicture: area17,
        pictures: [],
        platform: PlatformTypes.WEB,
        techTags: [
            "HTML",
            "CSS",
            "Pure JS",
            "GSAP"
        ]
    },
    {
        id: uniqid(),
        name: "gamerly.",
        type: ProjectTypes.FRONT_END,
        titlePicture: gamerly,
        pictures: [],
        platform: PlatformTypes.WEB,
        techTags: [
            "HTML",
            "CSS",
            "Pure JS",
            "GSAP"
        ]
    },
    {
        id: uniqid(),
        name: "My Little Paint",
        type: ProjectTypes.DESKTOP,
        titlePicture: my_little_paint,
        pictures: [],
        platform: PlatformTypes.WINDOWS,
        techTags: [
            "C#",
            "WinForms",
            "OpenStreetMap API"
        ]
    }
]
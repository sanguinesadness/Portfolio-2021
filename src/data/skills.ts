import { ISkillCategory } from "../types/skill";
import microsoft from "../images/icons/logos/microsoft.svg";
import electron from "../images/icons/logos/electron.png";
import nodejs from "../images/icons/logos/nodejs.svg";
import netcore from "../images/icons/logos/netcore.svg";
import mysql from "../images/icons/logos/mysql.svg";
import csharp from "../images/icons/logos/csharp.svg";
import vs from "../images/icons/logos/vs.svg";
import rider from "../images/icons/logos/rider.png";
import mysqlworkbench from "../images/icons/logos/mysql-workbench.png";
import sqlserver from "../images/icons/logos/sql-server.svg";
import ssms from "../images/icons/logos/ssms.png";
import fiddler from "../images/icons/logos/fiddler.png";
import postman from "../images/icons/logos/postman.png";
import terminal from "../images/icons/logos/terminal.png";
import html from "../images/icons/logos/html.svg";
import css from "../images/icons/logos/css.svg";
import js from "../images/icons/logos/js.svg";
import scss from "../images/icons/logos/scss.svg";
import react from "../images/icons/logos/react.svg";
import ts from "../images/icons/logos/typescript.svg";
import vscode from "../images/icons/logos/vscode.svg";
import chrome from "../images/icons/logos/chrome.svg";
import figma from "../images/icons/logos/figma.png";
import github from "../images/icons/logos/github.svg";
import nestjs from "../images/icons/logos/nestjs.svg";
import postgres from "../images/icons/logos/postgres.png";
import docker from "../images/icons/logos/docker.png";
import datagrip from "../images/icons/logos/datagrip.png";
import android from "../images/icons/logos/android-studio.svg";
import webstorm from "../images/icons/logos/webstorm.png";
import mobx from "../images/icons/logos/mobx.png";
import rxjs from "../images/icons/logos/rxjs.png";
import redux from "../images/icons/logos/redux.png";
import effector from "../images/icons/logos/effector.svg";
import angular from "../images/icons/logos/angular.png";
import gitlab from "../images/icons/logos/gitlab.png";
import bitbucket from "../images/icons/logos/bitbucket.png";

export const frontendCategories: ISkillCategory[] = [
    {
        name: "Технологии",
        items: [
            {
                logo: html,
                name: "HTML",
                progress: 95,
            },
            {
                logo: css,
                name: "CSS",
                progress: 95,
            },
            {
                logo: js,
                name: "JavaScript",
                progress: 95,
            },
            {
                logo: scss,
                name: "SCSS",
                progress: 95,
            },
            {
                logo: react,
                name: "React.js",
                progress: 90,
            },
            {
                logo: ts,
                name: "TypeScript",
                progress: 90,
            },
            {
                logo: rxjs,
                name: 'RxJs',
                progress: 60
            },
            {
                logo: mobx,
                name: 'MobX',
                progress: 70
            },
            {
                logo: redux,
                name: 'Redux',
                progress: 30
            },
            {
                logo: effector,
                name: 'Effector',
                progress: 20
            },
            {
                logo: angular,
                name: 'Angular',
                progress: 20
            },
        ],
    },
    {
        name: "Инструменты",
        items: [
            {
                logo: webstorm,
                name: "WebStorm",
                progress: 95
            },
            {
                logo: vscode,
                name: "Visual Studio Code",
                progress: 90,
            },
            {
                logo: chrome,
                name: "Chrome Developer Tools",
                progress: 80,
            },
            {
                logo: figma,
                name: "Figma",
                progress: 80,
            },
            {
                logo: github,
                name: "GitHub",
                progress: 75,
            },
            {
                logo: gitlab,
                name: "GitLab",
                progress: 85
            },
            {
                logo: bitbucket,
                name: "Bitbucket",
                progress: 80
            }
        ],
    },
];

export const backendCategories: ISkillCategory[] = [
    {
        name: "Технологии",
        items: [
            {
                logo: nodejs,
                name: "Node.js",
                progress: 80,
            },
            {
                logo: nestjs,
                name: "Nest.js",
                progress: 80,
            },
            {
                logo: netcore,
                name: "ASP.NET Core MVC",
                progress: 50,
            },
            {
                logo: postgres,
                name: "PostgreSQL",
                progress: 70,
            },
            {
                logo: mysql,
                name: "MySql",
                progress: 60,
            },
            {
                logo: sqlserver,
                name: "MS SQL Server",
                progress: 65,
            },
            {
                logo: csharp,
                name: "C#",
                progress: 60,
            },
        ],
    },
    {
        name: "Инструменты",
        items: [
            {
                logo: vscode,
                name: "Visual Studio Code",
                progress: 95,
            },
            {
                logo: vs,
                name: "Visual Studio",
                progress: 90,
            },
            {
                logo: docker,
                name: "Docker",
                progress: 50,
            },
            {
                logo: datagrip,
                name: "Datagrip",
                progress: 60,
            },
            {
                logo: rider,
                name: "Rider",
                progress: 50,
            },
            {
                logo: mysqlworkbench,
                name: "MySql Workbench",
                progress: 60,
            },
            {
                logo: ssms,
                name: "MS SQL Management Studio",
                progress: 70,
            },
            {
                logo: fiddler,
                name: "Fiddler Everywhere",
                progress: 60,
            },
            {
                logo: postman,
                name: "Postman",
                progress: 70,
            },
            {
                logo: terminal,
                name: "Terminal",
                progress: 80,
            },
        ],
    },
];

export const desktopCategories: ISkillCategory[] = [
    {
        name: "Технологии",
        items: [
            {
                logo: csharp,
                name: "C#",
                progress: 90,
            },
            {
                logo: microsoft,
                name: "WPF",
                progress: 80,
            },
            {
                logo: microsoft,
                name: "WinForms",
                progress: 80,
            },
            {
                logo: electron,
                name: "Electron.js",
                progress: 50,
            }
        ],
    },
    {
        name: "Инструменты",
        items: [
            {
                logo: vs,
                name: "Visual Studio",
                progress: 90,
            },
            {
                logo: mysqlworkbench,
                name: "MySql Workbench",
                progress: 60,
            },
            {
                logo: ssms,
                name: "MS SQL Management Studio",
                progress: 70,
            },
        ],
    },
];

export const mobileCategories: ISkillCategory[] = [
    {
        name: "Технологии",
        items: [
            {
                logo: react,
                name: "React Native",
                progress: 40,
            },
        ],
    },
    {
        name: "Инструменты",
        items: [
            {
                logo: webstorm,
                name: "Webstorm",
                progress: 95,
            },
            {
                logo: android,
                name: "Android Studio",
                progress: 30,
            },
        ],
    },
];

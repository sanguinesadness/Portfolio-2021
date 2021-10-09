import { ISkillCategory } from "../types/skill";
import microsoft from '../images/icons/logos/microsoft.svg';
import electron from '../images/icons/logos/electron.png';
import nodejs from '../images/icons/logos/nodejs.svg';
import netcore from '../images/icons/logos/netcore.svg';
import mysql from '../images/icons/logos/mysql.svg';
import csharp from '../images/icons/logos/csharp.svg';
import vs from '../images/icons/logos/vs.svg';
import rider from '../images/icons/logos/rider.png';
import mysqlworkbench from '../images/icons/logos/mysql-workbench.png';
import sqlserver from '../images/icons/logos/sql-server.svg';
import ssms from '../images/icons/logos/ssms.png';
import fiddler from '../images/icons/logos/fiddler.png';
import postman from '../images/icons/logos/postman.png';
import terminal from '../images/icons/logos/terminal.png';
import html from '../images/icons/logos/html.svg';
import css from '../images/icons/logos/css.svg';
import js from '../images/icons/logos/js.svg';
import scss from '../images/icons/logos/scss.svg';
import react from '../images/icons/logos/react.svg';
import ts from '../images/icons/logos/typescript.svg';
import vscode from '../images/icons/logos/vscode.svg';
import chrome from '../images/icons/logos/chrome.svg';
import figma from '../images/icons/logos/figma.png';
import github from '../images/icons/logos/github.svg';

export const frontendCategories: ISkillCategory[] = [
    {
        name: "Технологии",
        items: [
            {
                logo: html,
                name: "HTML",
                progress: 95
            },
            {
                logo: css,
                name: "CSS",
                progress: 95
            },
            {
                logo: js,
                name: "JavaScript",
                progress: 85
            },
            {
                logo: scss,
                name: "SCSS",
                progress: 90
            },
            {
                logo: react,
                name: "React.js",
                progress: 85
            },
            {
                logo: ts,
                name: "TypeScript",
                progress: 85
            }
        ]
    },
    {
        name: "Инструменты",
        items: [
            {
                logo: vscode,
                name: "Visual Studio Code",
                progress: 90
            },
            {
                logo: chrome,
                name: "Chrome Developer Tools",
                progress: 80
            },
            {
                logo: figma,
                name: "Figma",
                progress: 80
            },
            {
                logo: github,
                name: "GitHub",
                progress: 75
            }
        ]
    }
];

export const backendCategories: ISkillCategory[] = [
    {
        name: "Технологии",
        items: [
            {
                logo: nodejs,
                name: "Node.js",
                progress: 50
            },
            {
                logo: netcore,
                name: "ASP.NET Core MVC",
                progress: 70
            },
            {
                logo: mysql,
                name: "MySql",
                progress: 70
            },
            {
                logo: sqlserver,
                name: "MS SQL Server",
                progress: 70
            },
            {
                logo: csharp,
                name: "C#",
                progress: 90
            }
        ]
    },
    {
        name: "Инструменты",
        items: [
            {
                logo: vscode,
                name: "Visual Studio Code",
                progress: 90
            },
            {
                logo: vs,
                name: "Visual Studio",
                progress: 90
            },
            {
                logo: rider,
                name: "Rider",
                progress: 50
            },
            {
                logo: mysqlworkbench,
                name: "MySql Workbench",
                progress: 60
            },
            {
                logo: ssms,
                name: "MS SQL Management Studio",
                progress: 70
            },
            {
                logo: fiddler,
                name: "Fiddler Everywhere",
                progress: 60
            },
            {
                logo: postman,
                name: "Postman",
                progress: 40
            },
            {
                logo: terminal,
                name: "Terminal",
                progress: 50
            },
        ]
    }
];

export const desktopCategories: ISkillCategory[] = [
    {
        name: "Технологии",
        items: [
            {
                logo: csharp,
                name: "C#",
                progress: 90
            },
            {
                logo: microsoft,
                name: "WPF",
                progress: 80
            },
            {
                logo: microsoft,
                name: "WinForms",
                progress: 80
            },
            {
                logo: electron,
                name: "Electron.js",
                progress: 50
            }
        ]
    },
    {
        name: "Инструменты",
        items: [
            {
                logo: vs,
                name: "Visual Studio",
                progress: 90
            },
            {
                logo: mysqlworkbench,
                name: "MySql Workbench",
                progress: 60
            },
            {
                logo: ssms,
                name: "MS SQL Management Studio",
                progress: 70
            }
        ]
    }
];
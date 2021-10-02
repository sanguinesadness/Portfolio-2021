import React, { FC } from 'react';
import Shape from './Shape';
import shape_3 from '../images/shapes/shape-3.svg';
import shape_4 from '../images/shapes/shape-4.svg';
import SkillBlock, { ISkillCategory } from './SkillBlock';

import browser from '../images/icons/browser.svg';
import html from '../images/icons/logos/html.png';
import css from '../images/icons/logos/css.png';
import js from '../images/icons/logos/js.png';
import scss from '../images/icons/logos/scss.png';
import react from '../images/icons/logos/react.png';
import ts from '../images/icons/logos/typescript.png';
import vscode from '../images/icons/logos/vscode.png';
import chrome from '../images/icons/logos/chrome.png';
import figma from '../images/icons/logos/figma.png';
import github from '../images/icons/logos/github.png';

import database from '../images/icons/database.svg';
import nodejs from '../images/icons/logos/nodejs.png';
import netcore from '../images/icons/logos/netcore.png';
import mysql from '../images/icons/logos/mysql.png';
import csharp from '../images/icons/logos/csharp.png';
import vs from '../images/icons/logos/vs.png';
import rider from '../images/icons/logos/rider.png';
import mysqlworkbench from '../images/icons/logos/mysql-workbench.png';
import sqlserver from '../images/icons/logos/sql-server.png';
import ssms from '../images/icons/logos/ssms.png';
import fiddler from '../images/icons/logos/fiddler.png';
import postman from '../images/icons/logos/postman.png';
import terminal from '../images/icons/logos/terminal.png';

import computer from '../images/icons/computer.svg';
import windows from '../images/icons/logos/windows.png';
import electron from '../images/icons/logos/electron.png';

const frontendCategories: ISkillCategory[] = [
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

const backendCategories: ISkillCategory[] = [
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

const desktopCategories: ISkillCategory[] = [
    {
        name: "Технологии",
        items: [
            {
                logo: csharp,
                name: "C#",
                progress: 90
            },
            {
                logo: windows,
                name: "WPF",
                progress: 80
            },
            {
                logo: windows,
                name: "WinForms",
                progress: 80
            },
            {
                logo: electron,
                name: "Electron.js",
                progress: 70
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

const Skills: FC = () => {
    return (
        <section className="skills-section">
            <div className="content">
                <h2 className="title">Мои навыки</h2>
                <div className="skill-blocks">
                    <SkillBlock captionLogoSrc={browser}
                                captionText="Front-end"
                                categories={frontendCategories}/>
                    <SkillBlock captionLogoSrc={database}
                                captionText="Back-end"
                                categories={backendCategories}/>
                    <SkillBlock captionLogoSrc={computer}
                                captionText="Desktop"
                                categories={desktopCategories}/>
                </div>
            </div>
        </section>
    )
}

export default Skills;

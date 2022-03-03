import React, { FC } from "react";
import SkillBlock from "../other/SkillBlock";
import browser from "../../images/icons/browser.svg";
import server from "../../images/icons/server.svg";
import computer from "../../images/icons/computer.svg";
import mobile from "../../images/icons/mobile.svg";
import {
    backendCategories,
    desktopCategories,
    frontendCategories,
    mobileCategories,
} from "../../data/skills";
import { Element } from "react-scroll";

const Skills: FC = () => {
    return (
        <Element name="skills" className="skills section">
            <div className="content-block">
                <h2 className="title">Мои навыки</h2>
                <div className="skill-blocks">
                    <SkillBlock
                        captionLogoSrc={browser}
                        captionText="Front-end"
                        categories={frontendCategories}
                    />
                    <SkillBlock
                        captionLogoSrc={server}
                        captionText="Back-end"
                        categories={backendCategories}
                    />
                    <SkillBlock
                        captionLogoSrc={computer}
                        captionText="Desktop"
                        categories={desktopCategories}
                    />
                    <SkillBlock
                        captionLogoSrc={mobile}
                        captionText="Mobile"
                        categories={mobileCategories}
                    />
                </div>
            </div>
        </Element>
    );
};

export default Skills;

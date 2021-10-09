export interface ISkillItem {
    logo: string;
    name: string;
    progress: number;
}

export interface ISkillCategory {
    name: string;
    items: ISkillItem[];
}
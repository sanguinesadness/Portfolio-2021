export enum ProjectTypes {
    FULL_STACK = "full-stack",
    FRONT_END = "front-end",
    BACK_END = "back-end",
    DESKTOP = "desktop"
};

export enum PlatformTypes {
    WINDOWS = "Windows",
    MAC_OS_X = "Mac OS X",
    LINUX = "Linux",
    WEB = "Web",
    ANDROID = "Android",
    IOS = "IOS"
}

export interface IProject {
    id: string | number;
    name: string;
    type: ProjectTypes;
    platform: PlatformTypes;
    titlePicture: string;
    pictures: string[];
    techTags: string[];
}
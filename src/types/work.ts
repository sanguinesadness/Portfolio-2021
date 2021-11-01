export enum WorkTypes {
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

export interface IWork {
    id: string | number;
    name: string;
    shortName?: string;
    type: WorkTypes;
    platform: PlatformTypes;
    titlePicture: string;
    pictures: string[];
    techTags: string[];
    link: string;
}
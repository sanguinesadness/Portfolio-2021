import { Orientations, OrientationType, Sides, SideType } from "../types/side";

export const getSideOrientation = (side: SideType): OrientationType => {
    if (side === Sides.RIGHT || side === Sides.LEFT) {
        return Orientations.HORIZONTAL;
    }
    else {
        return Orientations.VERTICAL;
    }
}
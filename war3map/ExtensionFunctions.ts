import {Point} from "./Generic/Point";

export function GetRandomLocInRectUnitSafe(endRect: rect) {
    return Location(
        GetRandomReal(GetRectMinX(endRect) + 32, GetRectMaxX(endRect) - 32),
        GetRandomReal(GetRectMinY(endRect) + 32, GetRectMaxY(endRect) - 32),
    );
}

export function GetTerrainHeight(x: number, y: number) {
    let loc = Location(x, y);
    let retvar = GetLocationZ(loc);
    RemoveLocation(loc);
    return retvar;
}

export function IsPointWalkable(p: Point) {
    return IsWalkable(p.x, p.y);
}
export function IsWalkable(x: number, y: number) {
    return !(IsTerrainPathable(x, y, PATHING_TYPE_WALKABILITY))
}
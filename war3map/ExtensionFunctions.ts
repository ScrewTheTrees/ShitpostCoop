export function GetRandomLocInRectUnitSafe(endRect: rect) {
    return Location(
        GetRandomReal(GetRectMinX(endRect) + 32, GetRectMaxX(endRect) - 32),
        GetRandomReal(GetRectMinY(endRect) + 32, GetRectMaxY(endRect) - 32),
    );
}
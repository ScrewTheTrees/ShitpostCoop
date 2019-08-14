export function GetRandomLocInRectUnitSafe(endRect: rect) {
    return Location(
        GetRandomReal(GetRectMinX(endRect) + 24, GetRectMaxX(endRect) - 24),
        GetRandomReal(GetRectMinY(endRect) + 24, GetRectMaxY(endRect) - 24),
    );
}
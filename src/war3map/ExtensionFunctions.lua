local ____exports = {}
function ____exports.GetRandomLocInRectUnitSafe(self, endRect)
    return Location(GetRandomReal(GetRectMinX(endRect) + 32, GetRectMaxX(endRect) - 32), GetRandomReal(GetRectMinY(endRect) + 32, GetRectMaxY(endRect) - 32))
end
return ____exports

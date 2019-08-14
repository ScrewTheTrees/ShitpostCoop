local ____exports = {}
function ____exports.GetRandomLocInRectUnitSafe(self, endRect)
    return Location(GetRandomReal(GetRectMinX(endRect) + 16, GetRectMaxX(endRect) - 16), GetRandomReal(GetRectMinY(endRect) + 16, GetRectMaxY(endRect) - 16))
end
return ____exports

local ____exports = {}
function ____exports.IsWalkable(self, x, y)
    return not IsTerrainPathable(x, y, PATHING_TYPE_WALKABILITY)
end
function ____exports.GetRandomLocInRectUnitSafe(self, endRect)
    return Location(GetRandomReal(GetRectMinX(endRect) + 32, GetRectMaxX(endRect) - 32), GetRandomReal(GetRectMinY(endRect) + 32, GetRectMaxY(endRect) - 32))
end
function ____exports.GetTerrainHeight(self, x, y)
    local loc = Location(x, y)
    local retvar = GetLocationZ(loc)
    RemoveLocation(loc)
    return retvar
end
function ____exports.IsPointWalkable(self, p)
    return ____exports.IsWalkable(nil, p.x, p.y)
end
return ____exports

local ____exports = {}
local __TSTL_GetRandomDefenseType = require("war3map.GetRandomDefenseType")
local GetRandomDefenseType = __TSTL_GetRandomDefenseType.GetRandomDefenseType
____exports.Wave = {}
local Wave = ____exports.Wave
Wave.name = "Wave"
Wave.__index = Wave
Wave.prototype = {}
Wave.prototype.__index = Wave.prototype
Wave.prototype.constructor = Wave
function Wave.new(...)
    local self = setmetatable({}, Wave.prototype)
    self:____constructor(...)
    return self
end
function Wave.prototype.____constructor(self, unitType, defenseType)
    self.unitType = unitType
    if defenseType then
        self.defenseType = defenseType
    else
        self.defenseType = GetRandomDefenseType(nil)
    end
end
return ____exports

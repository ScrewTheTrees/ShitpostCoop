local ____exports = {}
____exports.WaveUnitTypes = {}
local WaveUnitTypes = ____exports.WaveUnitTypes
WaveUnitTypes.name = "WaveUnitTypes"
WaveUnitTypes.__index = WaveUnitTypes
WaveUnitTypes.prototype = {}
WaveUnitTypes.prototype.__index = WaveUnitTypes.prototype
WaveUnitTypes.prototype.constructor = WaveUnitTypes
function WaveUnitTypes.new(...)
    local self = setmetatable({}, WaveUnitTypes.prototype)
    self:____constructor(...)
    return self
end
function WaveUnitTypes.prototype.____constructor(self)
end
function WaveUnitTypes.init(self)
    self.unitTypes[2] = FourCC("h000")
end
function WaveUnitTypes.get(self, index)
    local ret = self.unitTypes[index + 1]
    if not ret then
        ret = self.unitTypes[GetRandomInt(1, #self.unitTypes - 1) + 1]
    end
    return ret
end
WaveUnitTypes.unitTypes = {}
____exports.WaveUnitTypes:init()
return ____exports

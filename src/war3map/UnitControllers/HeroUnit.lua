local ____exports = {}
____exports.HeroUnit = {}
local HeroUnit = ____exports.HeroUnit
HeroUnit.name = "HeroUnit"
HeroUnit.__index = HeroUnit
HeroUnit.prototype = {}
HeroUnit.prototype.__index = HeroUnit.prototype
HeroUnit.prototype.constructor = HeroUnit
function HeroUnit.new(...)
    local self = setmetatable({}, HeroUnit.prototype)
    self:____constructor(...)
    return self
end
function HeroUnit.prototype.____constructor(self, unitType, walkAnimationIndex)
    self.unitType = FourCC(unitType)
    self.walkAnimationIndex = walkAnimationIndex
end
HeroUnit.HERO_POTM = ____exports.HeroUnit.new("E000", 6)
return ____exports

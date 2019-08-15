local ____exports = {}
____exports.HeroAttack = {}
local HeroAttack = ____exports.HeroAttack
HeroAttack.name = "HeroAttack"
HeroAttack.__index = HeroAttack
HeroAttack.prototype = {}
HeroAttack.prototype.__index = HeroAttack.prototype
HeroAttack.prototype.constructor = HeroAttack
function HeroAttack.new(...)
    local self = setmetatable({}, HeroAttack.prototype)
    self:____constructor(...)
    return self
end
function HeroAttack.prototype.____constructor(self, castTime)
    self.castTime = castTime
end
return ____exports

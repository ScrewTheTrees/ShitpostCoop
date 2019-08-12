local ____exports = {}
____exports.Globals = {}
local Globals = ____exports.Globals
Globals.name = "Globals"
Globals.__index = Globals
Globals.prototype = {}
Globals.prototype.__index = Globals.prototype
Globals.prototype.constructor = Globals
function Globals.new(...)
    local self = setmetatable({}, Globals.prototype)
    self:____constructor(...)
    return self
end
function Globals.prototype.____constructor(self)
end
Globals.MaxPlayerSlots = 4
Globals.ActivePlayers = {}
Globals.CreepPlayers = {}
Globals.AllRegions = {}
return ____exports

local ____exports = {}
local __TSTL_GlobalGenerator = require("war3map.GlobalGenerator")
local GlobalGenerator = __TSTL_GlobalGenerator.GlobalGenerator
local __TSTL_CreepRoute = require("war3map.CreepRoute")
local CreepRoute = __TSTL_CreepRoute.CreepRoute
____exports.Game = {}
local Game = ____exports.Game
Game.name = "Game"
Game.__index = Game
Game.prototype = {}
Game.prototype.__index = Game.prototype
Game.prototype.constructor = Game
function Game.new(...)
    local self = setmetatable({}, Game.prototype)
    self:____constructor(...)
    return self
end
function Game.prototype.____constructor(self)
    GlobalGenerator:run()
    FogEnableOff()
    FogMaskEnableOff()
    local route1 = CreepRoute.new(1)
end
return ____exports

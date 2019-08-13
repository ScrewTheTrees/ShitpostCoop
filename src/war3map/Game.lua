local ____exports = {}
local __TSTL_GlobalGenerator = require("war3map.GlobalGenerator")
local GlobalGenerator = __TSTL_GlobalGenerator.GlobalGenerator
local __TSTL_CreepRoute = require("war3map.CreepRoute")
local CreepRoute = __TSTL_CreepRoute.CreepRoute
local __TSTL_Globals = require("war3map.Globals")
local Globals = __TSTL_Globals.Globals
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
    self.routes = {}
    GlobalGenerator:run()
    FogEnableOff()
    FogMaskEnableOff()
    self.routes[2] = CreepRoute.new(1, Globals.CreepPlayers[2])
    self.routes[3] = CreepRoute.new(2, Globals.CreepPlayers[3])
    local route = self.routes[2]
    local route2 = self.routes[3]
    CreateUnit(route.creepPlayer, FourCC("hfoo"), GetRectCenterX(route.startPoint), GetRectCenterY(route.startPoint), bj_UNIT_FACING)
    CreateUnit(route2.creepPlayer, FourCC("hfoo"), GetRectCenterX(route2.startPoint), GetRectCenterY(route2.startPoint), bj_UNIT_FACING)
end
return ____exports

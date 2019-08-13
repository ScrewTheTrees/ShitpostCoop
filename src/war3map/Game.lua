local ____exports = {}
local __TSTL_GlobalGenerator = require("war3map.GlobalGenerator")
local GlobalGenerator = __TSTL_GlobalGenerator.GlobalGenerator
local __TSTL_CreepRoute = require("war3map.CreepRoute")
local CreepRoute = __TSTL_CreepRoute.CreepRoute
local __TSTL_Globals = require("war3map.Globals")
local Globals = __TSTL_Globals.Globals
local __TSTL_ProgressTracker = require("war3map.ProgressTracker")
local ProgressTracker = __TSTL_ProgressTracker.ProgressTracker
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
    self.routes[4] = CreepRoute.new(3, Globals.CreepPlayers[4])
    local route = self.routes[2]
    local route2 = self.routes[3]
    local route3 = self.routes[4]
    local doSpawn = true
    local clock = CreateTrigger()
    TriggerRegisterTimerEvent(clock, 1, true)
    TriggerAddAction(clock, function()
        if doSpawn then
            CreateUnit(route.creepPlayer, FourCC("h000"), GetRectCenterX(route.startPoint), GetRectCenterY(route.startPoint), bj_UNIT_FACING)
            CreateUnit(route2.creepPlayer, FourCC("h000"), GetRectCenterX(route2.startPoint), GetRectCenterY(route2.startPoint), bj_UNIT_FACING)
            CreateUnit(route3.creepPlayer, FourCC("h000"), GetRectCenterX(route3.startPoint), GetRectCenterY(route3.startPoint), bj_UNIT_FACING)
        end
        doSpawn = (____exports.Game:GetNumOfPlayerUnits(route.creepPlayer) + ____exports.Game:GetNumOfPlayerUnits(route2.creepPlayer) + ____exports.Game:GetNumOfPlayerUnits(route3.creepPlayer) < 60)
    end)
    ProgressTracker:AddCreepExitRegion(route.endPoint, route.creepPlayer)
    ProgressTracker:AddCreepExitRegion(route2.endPoint, route2.creepPlayer)
    ProgressTracker:AddCreepExitRegion(route3.endPoint, route3.creepPlayer)
end
function Game.GetNumOfPlayerUnits(self, target)
    local units = CreateGroup()
    GroupEnumUnitsOfPlayer(units, target, nil)
    local foundUnit = FirstOfGroup(units)
    local count = 0
    while foundUnit ~= nil do
        foundUnit = FirstOfGroup(units)
        GroupRemoveUnit(units, foundUnit)
        count = count + 1
    end
    return count
end
return ____exports

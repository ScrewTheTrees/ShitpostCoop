-- Lua Library inline imports
--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
function __TS__ArrayPush(arr, ...)
    local items = ({...})
    for ____, item in ipairs(items) do
        arr[#arr + 1] = item
    end
    return #arr
end

local ____exports = {}
local __TSTL_GlobalGenerator = require("war3map.GlobalGenerator")
local GlobalGenerator = __TSTL_GlobalGenerator.GlobalGenerator
local __TSTL_CreepRoute = require("war3map.CreepRoute")
local CreepRoute = __TSTL_CreepRoute.CreepRoute
local __TSTL_Globals = require("war3map.Globals")
local Globals = __TSTL_Globals.Globals
local __TSTL_ProgressTracker = require("war3map.ProgressTracker")
local ProgressTracker = __TSTL_ProgressTracker.ProgressTracker
local __TSTL_WaveHandler = require("war3map.WaveHandler")
local WaveHandler = __TSTL_WaveHandler.WaveHandler
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
    local waveHandler = WaveHandler.new()
    __TS__ArrayPush(waveHandler.sendSpawnSignal, function(____, wave)
        route:spawnUnit(wave.unitType)
    end)
    __TS__ArrayPush(waveHandler.sendSpawnSignal, function(____, wave)
        route2:spawnUnit(wave.unitType)
    end)
    __TS__ArrayPush(waveHandler.sendSpawnSignal, function(____, wave)
        route3:spawnUnit(wave.unitType)
    end)
    waveHandler:startWaveTimer()
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

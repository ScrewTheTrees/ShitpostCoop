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
local __TSTL_PlayerController = require("war3map.Player.PlayerController")
local PlayerController = __TSTL_PlayerController.PlayerController
local __TSTL_BasicUnitController = require("war3map.UnitControllers.BasicUnitController")
local BasicUnitController = __TSTL_BasicUnitController.BasicUnitController
local __TSTL_HeroUnit = require("war3map.UnitControllers.HeroUnit")
local HeroUnit = __TSTL_HeroUnit.HeroUnit
local __TSTL_MapTimers = require("war3map.MapTimers")
local MapTimers = __TSTL_MapTimers.MapTimers
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
    self.playerController = {}
    GlobalGenerator:run()
    self.mapTimers = MapTimers.new()
    self.mapTimers:init()
    self.routes[2] = CreepRoute.new(1, Globals.CreepPlayers[2])
    self.routes[3] = CreepRoute.new(2, Globals.CreepPlayers[3])
    self.routes[4] = CreepRoute.new(3, Globals.CreepPlayers[4])
    local route = self.routes[2]
    local route2 = self.routes[3]
    local route3 = self.routes[4]
    self.waveHandler = WaveHandler.new()
    __TS__ArrayPush(self.waveHandler.sendSpawnSignal, function(____, wave)
        route:spawnUnit(wave.unitType)
    end)
    __TS__ArrayPush(self.waveHandler.sendSpawnSignal, function(____, wave)
        route2:spawnUnit(wave.unitType)
    end)
    __TS__ArrayPush(self.waveHandler.sendSpawnSignal, function(____, wave)
        route3:spawnUnit(wave.unitType)
    end)
    self.waveHandler:startWaveTimer()
    self:createPlayers()
    ProgressTracker:AddCreepExitRegion(route.endPoint, route.creepPlayer)
    ProgressTracker:AddCreepExitRegion(route2.endPoint, route2.creepPlayer)
    ProgressTracker:AddCreepExitRegion(route3.endPoint, route3.creepPlayer)
end
function Game.prototype.GetNumOfPlayerUnits(self, target)
    local units = CreateGroup()
    GroupEnumUnitsOfPlayer(units, target, nil)
    local foundUnit = FirstOfGroup(units)
    local count = 0
    while foundUnit ~= nil do
        foundUnit = FirstOfGroup(units)
        GroupRemoveUnit(units, foundUnit)
        count = count + 1
    end
    DestroyGroup(units)
    return count
end
function Game.prototype.createPlayers(self)
    do
        local i = 0
        while i < #Globals.ActivePlayers do
            local targetPlayer = Globals.ActivePlayers[i + 1]
            print(targetPlayer)
            local fogMod = CreateFogModifierRect(targetPlayer, FOG_OF_WAR_VISIBLE, GetEntireMapRect(), false, false)
            FogModifierStart(fogMod)
            local pc = PlayerController.new(targetPlayer)
            __TS__ArrayPush(self.playerController, pc)
            local hero = HeroUnit.HERO_POTM
            local u = CreateUnitAtLoc(targetPlayer, hero.unitType, GetPlayerStartLocationLoc(targetPlayer), bj_UNIT_FACING)
            pc:addControlledUnit(u, BasicUnitController.new(u, hero))
            i = i + 1
        end
    end
end
return ____exports

-- Lua Library inline imports
--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
function __TS__StringStartsWith(self, searchString, position)
    if position == nil or position < 0 then
        position = 0
    end
    return string.sub(self, position + 1, #searchString + position) == searchString
end

--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
function __TS__ObjectEntries(obj)
    local result = {}
    for key in pairs(obj) do
        result[#result + 1] = {
            key,
            obj[key],
        }
    end
    return result
end

--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
function __TS__ArrayForEach(arr, callbackFn)
    do
        local i = 0
        while i < #arr do
            callbackFn(_G, arr[i + 1], i, arr)
            i = i + 1
        end
    end
end

--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
function __TS__ArrayPush(arr, ...)
    local items = ({...})
    for ____, item in ipairs(items) do
        arr[#arr + 1] = item
    end
    return #arr
end

local ____exports = {}
local __TSTL_Globals = require("war3map.Globals")
local Globals = __TSTL_Globals.Globals
local __TSTL_Logger = require("war3map.Logger")
local Logger = __TSTL_Logger.Logger
____exports.GlobalGenerator = {}
local GlobalGenerator = ____exports.GlobalGenerator
GlobalGenerator.name = "GlobalGenerator"
GlobalGenerator.__index = GlobalGenerator
GlobalGenerator.prototype = {}
GlobalGenerator.prototype.__index = GlobalGenerator.prototype
GlobalGenerator.prototype.constructor = GlobalGenerator
function GlobalGenerator.new(...)
    local self = setmetatable({}, GlobalGenerator.prototype)
    self:____constructor(...)
    return self
end
function GlobalGenerator.prototype.____constructor(self)
end
function GlobalGenerator.run(self)
    __TS__ArrayForEach(__TS__ObjectEntries(_G), function(____, data)
        local key = data[1]
        local value = data[2]
        if __TS__StringStartsWith(key, "gg_rct") then
            self:handleRegion(key, value)
        end
    end)
    self:generatePlayers()
end
function GlobalGenerator.handleRegion(self, key, value)
    Globals.AllRegions[key] = value
    Logger:LogVerbose(Globals.AllRegions[key])
end
function GlobalGenerator.generatePlayers(self)
    local computerPlayers = 0
    do
        local i = 0
        while i < Globals.MaxPlayerSlots do
            local targetPlayer = Player(i)
            if true then
                if true then
                    __TS__ArrayPush(Globals.ActivePlayers, targetPlayer)
                    print(tostring(GetPlayerName(targetPlayer)) .. " is up for the task.")
                else
                    computerPlayers = computerPlayers + 1
                    Logger:LogDebug("Cpu player found: ", i)
                end
            else
                Logger:LogDebug("Empty slot found: ", i)
            end
            i = i + 1
        end
    end
    if computerPlayers > 0 then
        print("I know friends are hard to find, but the " .. tostring(computerPlayers) .. " computer/s is no substitute.")
    end
    Globals.CreepPlayers[2] = Player(12)
    Globals.CreepPlayers[3] = Player(13)
    Globals.CreepPlayers[4] = Player(14)
    Globals.CreepPlayers[5] = Player(15)
    Logger:LogDebug("Num of Creep players: ", #Globals.CreepPlayers)
end
return ____exports

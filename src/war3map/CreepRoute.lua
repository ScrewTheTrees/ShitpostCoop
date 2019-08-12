-- Lua Library inline imports
--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
function __TS__StringStartsWith(self, searchString, position)
    if position == nil or position < 0 then
        position = 0
    end
    return string.sub(self, position + 1, #searchString + position) == searchString
end

--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
function __TS__Number(value)
    local valueType = type(value)
    if valueType == "number" then
        return value
    elseif valueType == "string" then
        local numberValue = tonumber(value)
        if numberValue then
            return numberValue
        end
        if value == "Infinity" then
            return math.huge
        end
        if value == "-Infinity" then
            return -math.huge
        end
        local stringWithoutSpaces = string.gsub(value, "%s", "")
        if stringWithoutSpaces == "" then
            return 0
        end
        return (0 / 0)
    elseif valueType == "boolean" then
        return value and 1 or 0
    else
        return (0 / 0)
    end
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

local ____exports = {}
local __TSTL_Globals = require("war3map.Globals")
local Globals = __TSTL_Globals.Globals
local __TSTL_ShitEx = require("war3map.ShitEx")
local ShitEx = __TSTL_ShitEx.ShitEx
local __TSTL_Logger = require("war3map.Logger")
local Logger = __TSTL_Logger.Logger
____exports.CreepRoute = {}
local CreepRoute = ____exports.CreepRoute
CreepRoute.name = "CreepRoute"
CreepRoute.__index = CreepRoute
CreepRoute.prototype = {}
CreepRoute.prototype.__index = CreepRoute.prototype
CreepRoute.prototype.constructor = CreepRoute
function CreepRoute.new(...)
    local self = setmetatable({}, CreepRoute.prototype)
    self:____constructor(...)
    return self
end
function CreepRoute.prototype.____constructor(self, index)
    self.waypoints = {}
    self.myIndex = 0
    self.myIndex = index
    __TS__ArrayForEach(__TS__ObjectEntries(Globals.AllRegions), function(____, ____TS_bindingPattern0)
        local key = ____TS_bindingPattern0[1]
        local value = ____TS_bindingPattern0[2]
        if __TS__StringStartsWith(key, "gg_rct_route") then
            local result = ShitEx:seperateNumbers(key)
            if result[3] == "waypoint" then
                self.waypoints[__TS__Number(result[4]) + 1] = value
                Logger:LogDebug("Added waypoint " .. tostring(result[4]) .. " to route " .. tostring(result[2]))
            end
        end
    end)
    Logger:LogDebug("Total waypoints " .. tostring(#self.waypoints) .. " in route " .. tostring(self.myIndex))
end
return ____exports

-- Lua Library inline imports
--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____symbolMetatable = {__tostring = function(self)
    if self.description == nil then
        return "Symbol()"
    else
        return "Symbol(" .. tostring(self.description) .. ")"
    end
end}
function __TS__Symbol(description)
    return setmetatable({description = description}, ____symbolMetatable)
end
Symbol = {
    iterator = __TS__Symbol("Symbol.iterator"),
    hasInstance = __TS__Symbol("Symbol.hasInstance"),
    species = __TS__Symbol("Symbol.species"),
    toStringTag = __TS__Symbol("Symbol.toStringTag"),
}

--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
function __TS__InstanceOf(obj, classTbl)
    if (type(classTbl) == "table" and "object" or type(classTbl)) ~= "object" then
        error("Right-hand side of \'instanceof\' is not an object")
    end
    if classTbl[Symbol.hasInstance] ~= nil then
        return not not classTbl[Symbol.hasInstance](classTbl, obj)
    end
    if obj ~= nil then
        local luaClass = obj.constructor
        while luaClass ~= nil do
            if luaClass == classTbl then
                return true
            end
            luaClass = luaClass.____super
        end
    end
    return false
end

--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
function __TS__Iterator(iterable)
    if iterable[Symbol.iterator] then
        local iterator = iterable[Symbol.iterator](iterable)
        return function()
            local result = iterator:next()
            if not result.done then
                return result.value
            else
                return nil
            end
        end
    else
        local i = 0
        return function()
            i = i + 1
            return iterable[i]
        end
    end
end

--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
Map = (function()
    Map = {}
    Map.name = "Map"
    Map.__index = Map
    Map.prototype = {}
    Map.prototype.__index = Map.prototype
    Map.prototype.constructor = Map
    function Map.new(...)
        local self = setmetatable({}, Map.prototype)
        self:____constructor(...)
        return self
    end
    function Map.prototype.____constructor(self, entries)
        self[Symbol.toStringTag] = "Map"
        self.items = {}
        self.size = 0
        if entries == nil then
            return
        end
        local iterable = entries
        if iterable[Symbol.iterator] then
            local iterator = iterable[Symbol.iterator](iterable)
            while true do
                local result = iterator:next()
                if result.done then
                    break
                end
                local value = result.value
                self:set(value[1], value[2])
            end
        else
            local array = entries
            self.size = #array
            for ____, kvp in ipairs(array) do
                self.items[kvp[1]] = kvp[2]
            end
        end
    end
    function Map.prototype.clear(self)
        self.items = {}
        self.size = 0
        return
    end
    function Map.prototype.delete(self, key)
        local contains = self:has(key)
        if contains then
            self.size = self.size - 1
        end
        self.items[key] = nil
        return contains
    end
    function Map.prototype.forEach(self, callback)
        for key in pairs(self.items) do
            callback(_G, self.items[key], key, self)
        end
        return
    end
    function Map.prototype.get(self, key)
        return self.items[key]
    end
    function Map.prototype.has(self, key)
        return self.items[key] ~= nil
    end
    function Map.prototype.set(self, key, value)
        if not self:has(key) then
            self.size = self.size + 1
        end
        self.items[key] = value
        return self
    end
    Map.prototype[Symbol.iterator] = function(self)
        return self:entries()
    end
    function Map.prototype.entries(self)
        local items = self.items
        local key
        local value
        return {
            [Symbol.iterator] = function(self)
                return self
            end,
            next = function(self)
                key, value = next(items, key)
                return {
                    done = not key,
                    value = {
                        key,
                        value,
                    },
                }
            end,
        }
    end
    function Map.prototype.keys(self)
        local items = self.items
        local key
        return {
            [Symbol.iterator] = function(self)
                return self
            end,
            next = function(self)
                key = next(items, key)
                return {
                    done = not key,
                    value = key,
                }
            end,
        }
    end
    function Map.prototype.values(self)
        local items = self.items
        local key
        local value
        return {
            [Symbol.iterator] = function(self)
                return self
            end,
            next = function(self)
                key, value = next(items, key)
                return {
                    done = not key,
                    value = value,
                }
            end,
        }
    end
    Map[Symbol.species] = Map
    return Map
end)()

local ____exports = {}
local __TSTL_Hooks = require("war3map.Generic.Hooks")
local Hooks = __TSTL_Hooks.Hooks
____exports.Timers = {}
local Timers = ____exports.Timers
Timers.name = "Timers"
Timers.__index = Timers
Timers.prototype = {}
Timers.prototype.__index = Timers.prototype
Timers.prototype.constructor = Timers
function Timers.new(...)
    local self = setmetatable({}, Timers.prototype)
    self:____constructor(...)
    return self
end
function Timers.prototype.____constructor(self)
end
function Timers.prototype.init(self)
    ____exports.Timers.fastTimer = CreateTrigger()
    TriggerRegisterTimerEvent(____exports.Timers.fastTimer, 0.01, true)
    TriggerAddAction(____exports.Timers.fastTimer, function()
        ____exports.Timers.fastTimerCallbacks:forEach(function(____, callback)
            callback(nil)
        end)
    end)
end
function Timers.addFastTimerCallback(self, name, func)
    if not Hooks:get("mapTimerHook") then
        local timer = ____exports.Timers.new()
        timer:init()
        Hooks:set("mapTimerHook", timer)
    end
    self.fastTimerCallbacks:set(name, func)
end
Timers.fastTimerCallbacks = Map.new()
return ____exports

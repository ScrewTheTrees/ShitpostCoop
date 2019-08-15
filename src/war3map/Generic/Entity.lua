-- Lua Library inline imports
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
local __TSTL_MapTimers = require("war3map.MapTimers")
local MapTimers = __TSTL_MapTimers.MapTimers
____exports.Entity = {}
local Entity = ____exports.Entity
Entity.name = "Entity"
Entity.__index = Entity
Entity.prototype = {}
Entity.prototype.__index = Entity.prototype
Entity.prototype.constructor = Entity
function Entity.new(...)
    local self = setmetatable({}, Entity.prototype)
    self:____constructor(...)
    return self
end
function Entity.prototype.____constructor(self)
    self.entityComponents = {}
    if ____exports.Entity.entityLoop == nil then
        ____exports.Entity.entityLoop = function()
            __TS__ArrayForEach(____exports.Entity.entities, function(____, entity)
                entity:_updateEntity()
            end)
        end
        MapTimers:addFastTimerCallback(____exports.Entity.entityLoop)
    end
    __TS__ArrayPush(____exports.Entity.entities, self)
end
function Entity.prototype._updateEntity(self)
    self.step(self)
    __TS__ArrayForEach(self.entityComponents, function(____, component)
        component:step()
    end)
end
function Entity.prototype.addComponent(self, component)
    __TS__ArrayPush(self.entityComponents, component)
end
Entity.entities = {}
return ____exports

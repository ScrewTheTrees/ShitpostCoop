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
____exports.MapTimers = {}
local MapTimers = ____exports.MapTimers
MapTimers.name = "MapTimers"
MapTimers.__index = MapTimers
MapTimers.prototype = {}
MapTimers.prototype.__index = MapTimers.prototype
MapTimers.prototype.constructor = MapTimers
function MapTimers.new(...)
    local self = setmetatable({}, MapTimers.prototype)
    self:____constructor(...)
    return self
end
function MapTimers.prototype.____constructor(self)
end
function MapTimers.prototype.init(self)
    ____exports.MapTimers.fastTimer = CreateTrigger()
    TriggerRegisterTimerEvent(____exports.MapTimers.fastTimer, 0.01, true)
    TriggerAddAction(____exports.MapTimers.fastTimer, function()
        __TS__ArrayForEach(____exports.MapTimers.fastTimerCallbacks, function(____, callback)
            callback(nil)
        end)
    end)
end
function MapTimers.addFastTimerCallback(self, func)
    __TS__ArrayPush(self.fastTimerCallbacks, func)
end
MapTimers.fastTimerCallbacks = {}
return ____exports

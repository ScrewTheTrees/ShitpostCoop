local ____exports = {}
local __TSTL_Wave = require("war3map.Wave")
local Wave = __TSTL_Wave.Wave
local __TSTL_WaveUnitTypes = require("war3map.WaveUnitTypes")
local WaveUnitTypes = __TSTL_WaveUnitTypes.WaveUnitTypes
____exports.WaveHandler = {}
local WaveHandler = ____exports.WaveHandler
WaveHandler.name = "WaveHandler"
WaveHandler.__index = WaveHandler
WaveHandler.prototype = {}
WaveHandler.prototype.__index = WaveHandler.prototype
WaveHandler.prototype.constructor = WaveHandler
function WaveHandler.new(...)
    local self = setmetatable({}, WaveHandler.prototype)
    self:____constructor(...)
    return self
end
function WaveHandler.prototype.____constructor(self)
    self:createWaves()
end
function WaveHandler.prototype.createWaves(self)
    ____exports.WaveHandler.allWaves[2] = Wave.new(WaveUnitTypes:get(1), DEFENSE_TYPE_MEDIUM)
    ____exports.WaveHandler.allWaves[2] = Wave.new(WaveUnitTypes:get(2), DEFENSE_TYPE_LIGHT)
end
WaveHandler.currentWave = 0
WaveHandler.allWaves = {}
WaveHandler.waveTimer = 0
WaveHandler.timeBetweenWaves = 0
return ____exports

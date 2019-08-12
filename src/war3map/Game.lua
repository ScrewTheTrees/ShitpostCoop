local ____exports = {}
local __TSTL_Constants = require("war3map.Constants")
local Constants = __TSTL_Constants.Constants
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
    MeleeStartingResources()
    MeleeStartingHeroLimit()
    MeleeGrantHeroItems()
    MeleeClearExcessUnits()
    do
        local i = 0
        while i <= Constants.MaxPlayerSlots do
            MeleeStartingUnitsForPlayer(RACE_NIGHTELF, Player(i), GetPlayerStartLocationLoc(Player(i)), true)
            if i % 2 == 1 then
                print(i + 1)
                StartMeleeAI(Player(i), "war3mapImported/ai/triggerAi.ai")
            end
            i = i + 1
        end
    end
end
return ____exports

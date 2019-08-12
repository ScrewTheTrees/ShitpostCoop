local ____exports = {}
local __TSTL_Globals = require("war3map.Globals")
local Globals = __TSTL_Globals.Globals
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
    do
        local i = 0
        while i < Globals.MaxPlayerSlots do
            CreateUnitAtLoc(Player(i), FourCC("hpea"), GetPlayerStartLocationLoc(Player(i)), bj_UNIT_FACING)
            print(i + 1)
            i = i + 1
        end
    end
end
return ____exports

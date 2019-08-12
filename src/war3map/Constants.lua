local ____exports = {}
____exports.Constants = {}
local Constants = ____exports.Constants
Constants.name = "Constants"
Constants.__index = Constants
Constants.prototype = {}
Constants.prototype.__index = Constants.prototype
Constants.prototype.constructor = Constants
function Constants.new(...)
    local self = setmetatable({}, Constants.prototype)
    self:____constructor(...)
    return self
end
function Constants.prototype.____constructor(self)
end
Constants.MaxPlayerSlots = 11
return ____exports

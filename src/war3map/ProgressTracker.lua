local ____exports = {}
____exports.ProgressTracker = {}
local ProgressTracker = ____exports.ProgressTracker
ProgressTracker.name = "ProgressTracker"
ProgressTracker.__index = ProgressTracker
ProgressTracker.prototype = {}
ProgressTracker.prototype.__index = ProgressTracker.prototype
ProgressTracker.prototype.constructor = ProgressTracker
function ProgressTracker.new(...)
    local self = setmetatable({}, ProgressTracker.prototype)
    self:____constructor(...)
    return self
end
function ProgressTracker.prototype.____constructor(self)
end
function ProgressTracker.initialize(self)
    TriggerAddAction(self.onExitRegion, function()
        RemoveUnit(GetEnteringUnit())
        self.lives = self.lives - 1
    end)
end
function ProgressTracker.AddCreepExitRegion(self, enter, creepPlayer)
    local reg = CreateRegion()
    RegionAddRect(reg, enter)
    TriggerRegisterEnterRegion(self.onExitRegion, reg, Filter(function()
        return (GetOwningPlayer(GetFilterUnit()) == creepPlayer)
    end))
end
ProgressTracker.lives = 30
ProgressTracker.onExitRegion = CreateTrigger()
____exports.ProgressTracker:initialize()
return ____exports

local ____exports = {}
____exports.BasicUnitController = {}
local BasicUnitController = ____exports.BasicUnitController
BasicUnitController.name = "BasicUnitController"
BasicUnitController.__index = BasicUnitController
BasicUnitController.prototype = {}
BasicUnitController.prototype.__index = BasicUnitController.prototype
BasicUnitController.prototype.constructor = BasicUnitController
function BasicUnitController.new(...)
    local self = setmetatable({}, BasicUnitController.prototype)
    self:____constructor(...)
    return self
end
function BasicUnitController.prototype.____constructor(self, targetUnit, heroUnit)
    self.currentDirection = bj_UNIT_FACING
    self.targetUnit = targetUnit
    self.walkAnimationIndex = heroUnit.walkAnimationIndex
end
function BasicUnitController.prototype.moveUnit(self, toDirection)
    local speed = GetUnitMoveSpeed(self.targetUnit) / 100
    self.currentDirection = self:rotateToPoint(self.currentDirection, toDirection, GetUnitTurnSpeed(self.targetUnit) * 10)
    local currLoc = GetUnitLoc(self.targetUnit)
    currLoc = PolarProjectionBJ(currLoc, speed, self.currentDirection)
    SetUnitPositionLoc(self.targetUnit, currLoc)
    SetUnitFacing(self.targetUnit, self.currentDirection)
    RemoveLocation(currLoc)
end
function BasicUnitController.prototype.getWalkAnimationIndex(self)
    return self.walkAnimationIndex
end
function BasicUnitController.prototype.rotateToPoint(self, fromDir, toDir, turnSpeed)
    local result = toDir - fromDir
    while result > 180 do
        result = result - 360
    end
    while result < -180 do
        result = result + 360
    end
    local turnDir = result
    if turnDir < -turnSpeed then
        turnDir = -turnSpeed
    end
    if turnDir > turnSpeed then
        turnDir = turnSpeed
    end
    return (fromDir + turnDir) % 360
end
return ____exports

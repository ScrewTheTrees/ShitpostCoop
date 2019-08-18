local ____exports = {}
local __TSTL_PlayerInput = require("war3map.Player.PlayerInput")
local PlayerInput = __TSTL_PlayerInput.PlayerInput
local __TSTL_Orders = require("war3map.Orders")
local Orders = __TSTL_Orders.Orders
local __TSTL_Entity = require("war3map.Generic.Entity")
local Entity = __TSTL_Entity.Entity
local __TSTL_PlayerCastDto = require("war3map.Player.PlayerCastDto")
local PlayerCastDto = __TSTL_PlayerCastDto.PlayerCastDto
____exports.PlayerController = {}
local PlayerController = ____exports.PlayerController
PlayerController.name = "PlayerController"
PlayerController.__index = PlayerController
PlayerController.prototype = {}
PlayerController.prototype.__index = PlayerController.prototype
PlayerController.prototype.constructor = PlayerController
PlayerController.____super = Entity
setmetatable(PlayerController, PlayerController.____super)
setmetatable(PlayerController.prototype, PlayerController.____super.prototype)
function PlayerController.new(...)
    local self = setmetatable({}, PlayerController.prototype)
    self:____constructor(...)
    return self
end
function PlayerController.prototype.____constructor(self, controllingPlayer)
    Entity.prototype.____constructor(self)
    self.controlledUnit = nil
    self.unitController = nil
    self.input = PlayerInput.new()
    self.wasInputActive = false
    self.isCasting = false
    self.castingTimer = 0
    self.nextCast = nil
    self.controllingPlayer = controllingPlayer
    self.pressKey = CreateTrigger()
    self.pressMouseButton = CreateTrigger()
    self:createTriggers()
end
function PlayerController.prototype.step(self)
    if self.controlledUnit and self.unitController then
        if self.nextCast then
            IssuePointOrder(self.controlledUnit, self.unitController.heroUnit.attackSpellOrderString, GetLocationX(self.nextCast.castLoc), GetLocationY(self.nextCast.castLoc))
            self.isCasting = true
            self.castingTimer = self.unitController.heroUnit.heroAttack.castTime
            self.nextCast:destruct()
            self.nextCast = nil
        end
        if not self.isCasting then
            IssueImmediateOrder(self.controlledUnit, Orders.stop)
        end
        SetCameraPositionForPlayer(self.controllingPlayer, GetUnitX(self.controlledUnit), GetUnitY(self.controlledUnit))
        if not self.isCasting then
            if self.input:isInputActive() then
                if self.wasInputActive ~= self.input:isInputActive() then
                    SetUnitAnimationByIndex(self.controlledUnit, self.unitController:getWalkAnimationIndex())
                end
                self.unitController:moveUnit(self.input:getInputDirection())
            else
                if self.wasInputActive ~= self.input:isInputActive() then
                    SetUnitAnimation(self.controlledUnit, "stand")
                end
            end
        end
        self.wasInputActive = self.input:isInputActive()
    end
    if self.isCasting then
        self.castingTimer = self.castingTimer - 0.01
        if self.castingTimer <= 0 then
            self.isCasting = false
            self.castingTimer = 0
        end
        self.wasInputActive = not self.input:isInputActive()
    end
end
function PlayerController.prototype.createTriggers(self)
    do
        local i = 0
        while i <= 4 do
            BlzTriggerRegisterPlayerKeyEvent(self.pressKey, self.controllingPlayer, OSKEY_W, i, false)
            BlzTriggerRegisterPlayerKeyEvent(self.pressKey, self.controllingPlayer, OSKEY_W, i, true)
            BlzTriggerRegisterPlayerKeyEvent(self.pressKey, self.controllingPlayer, OSKEY_A, i, false)
            BlzTriggerRegisterPlayerKeyEvent(self.pressKey, self.controllingPlayer, OSKEY_A, i, true)
            BlzTriggerRegisterPlayerKeyEvent(self.pressKey, self.controllingPlayer, OSKEY_S, i, false)
            BlzTriggerRegisterPlayerKeyEvent(self.pressKey, self.controllingPlayer, OSKEY_S, i, true)
            BlzTriggerRegisterPlayerKeyEvent(self.pressKey, self.controllingPlayer, OSKEY_D, i, false)
            BlzTriggerRegisterPlayerKeyEvent(self.pressKey, self.controllingPlayer, OSKEY_D, i, true)
            i = i + 1
        end
    end
    TriggerRegisterPlayerEvent(self.pressMouseButton, self.controllingPlayer, EVENT_PLAYER_MOUSE_DOWN)
    TriggerAddAction(self.pressKey, function()
        local ____TS_switch16 = BlzGetTriggerPlayerKey()
        if ____TS_switch16 == OSKEY_W then
            goto ____TS_switch16_case_0
        end
        if ____TS_switch16 == OSKEY_A then
            goto ____TS_switch16_case_1
        end
        if ____TS_switch16 == OSKEY_S then
            goto ____TS_switch16_case_2
        end
        if ____TS_switch16 == OSKEY_D then
            goto ____TS_switch16_case_3
        end
        goto ____TS_switch16_end
        ::____TS_switch16_case_0::
        do
            return (function(o, i, v)
                o[i] = v
                return v
            end)(self.input, "up", BlzGetTriggerPlayerIsKeyDown())
        end
        ::____TS_switch16_case_1::
        do
            return (function(o, i, v)
                o[i] = v
                return v
            end)(self.input, "left", BlzGetTriggerPlayerIsKeyDown())
        end
        ::____TS_switch16_case_2::
        do
            return (function(o, i, v)
                o[i] = v
                return v
            end)(self.input, "down", BlzGetTriggerPlayerIsKeyDown())
        end
        ::____TS_switch16_case_3::
        do
            return (function(o, i, v)
                o[i] = v
                return v
            end)(self.input, "right", BlzGetTriggerPlayerIsKeyDown())
        end
        ::____TS_switch16_end::
    end)
    TriggerAddAction(self.pressMouseButton, function()
        local button = BlzGetTriggerPlayerMouseButton()
        local loc = BlzGetTriggerPlayerMousePosition()
        if self.controlledUnit and self.unitController then
            if button == MOUSE_BUTTON_TYPE_RIGHT then
                self.nextCast = PlayerCastDto.new(loc)
            end
        end
    end)
end
function PlayerController.prototype.addControlledUnit(self, controlledUnit, unitController)
    self.controlledUnit = controlledUnit
    self.unitController = unitController
end
return ____exports

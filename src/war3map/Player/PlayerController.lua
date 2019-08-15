local ____exports = {}
local __TSTL_MapTimers = require("war3map.MapTimers")
local MapTimers = __TSTL_MapTimers.MapTimers
local __TSTL_PlayerInput = require("war3map.Player.PlayerInput")
local PlayerInput = __TSTL_PlayerInput.PlayerInput
local __TSTL_Orders = require("war3map.Orders")
local Orders = __TSTL_Orders.Orders
____exports.PlayerController = {}
local PlayerController = ____exports.PlayerController
PlayerController.name = "PlayerController"
PlayerController.__index = PlayerController
PlayerController.prototype = {}
PlayerController.prototype.__index = PlayerController.prototype
PlayerController.prototype.constructor = PlayerController
function PlayerController.new(...)
    local self = setmetatable({}, PlayerController.prototype)
    self:____constructor(...)
    return self
end
function PlayerController.prototype.____constructor(self, controllingPlayer)
    self.controlledUnit = nil
    self.unitController = nil
    self.input = PlayerInput.new()
    self.wasInputActive = false
    self.controllingPlayer = controllingPlayer
    MapTimers:addFastTimerCallback(function()
        if self.controlledUnit and self.unitController then
            IssueImmediateOrder(self.controlledUnit, Orders.stop)
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
            self.wasInputActive = self.input:isInputActive()
        end
    end)
    self.pressKey = CreateTrigger()
    do
        local i = 0
        while i <= 3 do
            BlzTriggerRegisterPlayerKeyEvent(self.pressKey, controllingPlayer, OSKEY_W, i, false)
            BlzTriggerRegisterPlayerKeyEvent(self.pressKey, controllingPlayer, OSKEY_W, i, true)
            BlzTriggerRegisterPlayerKeyEvent(self.pressKey, controllingPlayer, OSKEY_A, i, false)
            BlzTriggerRegisterPlayerKeyEvent(self.pressKey, controllingPlayer, OSKEY_A, i, true)
            BlzTriggerRegisterPlayerKeyEvent(self.pressKey, controllingPlayer, OSKEY_S, i, false)
            BlzTriggerRegisterPlayerKeyEvent(self.pressKey, controllingPlayer, OSKEY_S, i, true)
            BlzTriggerRegisterPlayerKeyEvent(self.pressKey, controllingPlayer, OSKEY_D, i, false)
            BlzTriggerRegisterPlayerKeyEvent(self.pressKey, controllingPlayer, OSKEY_D, i, true)
            i = i + 1
        end
    end
    TriggerAddAction(self.pressKey, function()
        local ____TS_switch10 = BlzGetTriggerPlayerKey()
        if ____TS_switch10 == OSKEY_W then
            goto ____TS_switch10_case_0
        end
        if ____TS_switch10 == OSKEY_A then
            goto ____TS_switch10_case_1
        end
        if ____TS_switch10 == OSKEY_S then
            goto ____TS_switch10_case_2
        end
        if ____TS_switch10 == OSKEY_D then
            goto ____TS_switch10_case_3
        end
        goto ____TS_switch10_end
        ::____TS_switch10_case_0::
        do
            return (function(o, i, v)
                o[i] = v
                return v
            end)(self.input, "up", BlzGetTriggerPlayerIsKeyDown())
        end
        ::____TS_switch10_case_1::
        do
            return (function(o, i, v)
                o[i] = v
                return v
            end)(self.input, "left", BlzGetTriggerPlayerIsKeyDown())
        end
        ::____TS_switch10_case_2::
        do
            return (function(o, i, v)
                o[i] = v
                return v
            end)(self.input, "down", BlzGetTriggerPlayerIsKeyDown())
        end
        ::____TS_switch10_case_3::
        do
            return (function(o, i, v)
                o[i] = v
                return v
            end)(self.input, "right", BlzGetTriggerPlayerIsKeyDown())
        end
        ::____TS_switch10_end::
    end)
end
function PlayerController.prototype.addControlledUnit(self, controlledUnit, unitController)
    self.controlledUnit = controlledUnit
    self.unitController = unitController
end
return ____exports

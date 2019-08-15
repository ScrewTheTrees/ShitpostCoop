import {IUnitController} from "../UnitControllers/IUnitController";
import {PlayerInput} from "./PlayerInput";
import {Orders} from "../Orders";
import {Entity} from "../Generic/Entity";

export class PlayerController extends Entity {
    public controllingPlayer: player;
    private controlledUnit: unit | null = null;
    private unitController: IUnitController | null = null;
    private input: PlayerInput = new PlayerInput();
    private wasInputActive: boolean = false;
    private readonly pressKey: trigger;

    constructor(controllingPlayer: player) {
        super();
        this.controllingPlayer = controllingPlayer;
        this.pressKey = CreateTrigger();
        this.createTriggers();
    }

    step() {
        if (this.controlledUnit && this.unitController) {
            IssueImmediateOrder(this.controlledUnit, Orders.stop);

            if (this.input.isInputActive()) {
                if (this.wasInputActive != this.input.isInputActive()) {
                    SetUnitAnimationByIndex(this.controlledUnit, this.unitController.getWalkAnimationIndex())
                }
                this.unitController.moveUnit(this.input.getInputDirection());
            } else {
                if (this.wasInputActive != this.input.isInputActive()) {
                    SetUnitAnimation(this.controlledUnit, "stand");
                }
            }

            this.wasInputActive = this.input.isInputActive();
        }
    }

    private createTriggers() {
        for (let i = 0; i <= 3; i++) {
            BlzTriggerRegisterPlayerKeyEvent(this.pressKey, this.controllingPlayer, OSKEY_W, i, false);
            BlzTriggerRegisterPlayerKeyEvent(this.pressKey, this.controllingPlayer, OSKEY_W, i, true);
            BlzTriggerRegisterPlayerKeyEvent(this.pressKey, this.controllingPlayer, OSKEY_A, i, false);
            BlzTriggerRegisterPlayerKeyEvent(this.pressKey, this.controllingPlayer, OSKEY_A, i, true);
            BlzTriggerRegisterPlayerKeyEvent(this.pressKey, this.controllingPlayer, OSKEY_S, i, false);
            BlzTriggerRegisterPlayerKeyEvent(this.pressKey, this.controllingPlayer, OSKEY_S, i, true);
            BlzTriggerRegisterPlayerKeyEvent(this.pressKey, this.controllingPlayer, OSKEY_D, i, false);
            BlzTriggerRegisterPlayerKeyEvent(this.pressKey, this.controllingPlayer, OSKEY_D, i, true);
        }

        TriggerAddAction(this.pressKey, () => {
            switch (BlzGetTriggerPlayerKey()) {
                case OSKEY_W:
                    return this.input.up = BlzGetTriggerPlayerIsKeyDown();
                case OSKEY_A:
                    return this.input.left = BlzGetTriggerPlayerIsKeyDown();
                case OSKEY_S:
                    return this.input.down = BlzGetTriggerPlayerIsKeyDown();
                case OSKEY_D:
                    return this.input.right = BlzGetTriggerPlayerIsKeyDown();
            }
        });
    }


    public addControlledUnit(controlledUnit: unit, unitController: IUnitController) {
        this.controlledUnit = controlledUnit;
        this.unitController = unitController;
    }
}
import {IUnitController} from "./IUnitController";
import {HeroUnit} from "./HeroUnit";

export class BasicUnitController implements IUnitController {
    private readonly targetUnit: unit;
    private readonly walkAnimationIndex: number;
    private currentDirection: number = bj_UNIT_FACING;
    public heroUnit: HeroUnit;


    constructor(targetUnit: unit, heroUnit: HeroUnit) {
        this.targetUnit = targetUnit;
        this.walkAnimationIndex = heroUnit.walkAnimationIndex;
        this.heroUnit = heroUnit;

    }

    moveUnit(toDirection: number) {
        let speed = GetUnitMoveSpeed(this.targetUnit) / 100;
        this.currentDirection = this.rotateToPoint(this.currentDirection, toDirection, 180);
        let currLoc = GetUnitLoc(this.targetUnit);
        currLoc = PolarProjectionBJ(currLoc, speed, this.currentDirection);
        SetUnitPositionLoc(this.targetUnit, currLoc);
        SetUnitFacing(this.targetUnit, this.currentDirection);
        RemoveLocation(currLoc);
    }

    getWalkAnimationIndex(): number {
        return this.walkAnimationIndex;
    }


    private rotateToPoint(fromDir: number, toDir: number, turnSpeed: number) {
        let result = toDir - fromDir;
        while (result > 180) {
            result -= 360
        }
        while (result < -180) {
            result += 360
        }
        let turnDir = result;

        if (turnDir < -turnSpeed) {
            turnDir = -turnSpeed
        }
        if (turnDir > turnSpeed) {
            turnDir = turnSpeed
        }

        return (fromDir + turnDir) % 360;
    }
}
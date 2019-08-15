export interface IUnitController {
    moveUnit(direction: number): void;

    getWalkAnimationIndex(): number;
}
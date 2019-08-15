export class HeroUnit {
    public static HERO_POTM: HeroUnit = new HeroUnit("E000", 6);

    public readonly unitType: number;
    public readonly walkAnimationIndex: number;

    constructor(unitType: string, walkAnimationIndex: number) {
        this.unitType = FourCC(unitType);
        this.walkAnimationIndex = walkAnimationIndex;
    }
}
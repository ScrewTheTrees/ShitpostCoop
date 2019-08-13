export class WaveUnitTypes {
    public static unitTypes: number[] = [];

    public static init() {
        this.unitTypes[1] = FourCC("h000");
    }

    public static get(index: number) {
        let ret = this.unitTypes[index];
        if (!ret) {
            ret = this.unitTypes[GetRandomInt(1, this.unitTypes.length - 1)]
        }

        return ret;
    }
}

WaveUnitTypes.init();
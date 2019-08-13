import {Wave} from "./Wave";
import {WaveUnitTypes} from "./WaveUnitTypes";

export class WaveHandler {
    public static currentWave: number = 0;
    public static allWaves: Wave[] = [];
    public static waveTimer: number = 0;
    public static timeBetweenWaves: number = 0;

    constructor() {
        this.createWaves();
    }

    public createWaves() {
        WaveHandler.allWaves[1] = new Wave(WaveUnitTypes.get(1), DEFENSE_TYPE_MEDIUM);
        WaveHandler.allWaves[1] = new Wave(WaveUnitTypes.get(2), DEFENSE_TYPE_LIGHT);
    }

}
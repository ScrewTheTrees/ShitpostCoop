import {GlobalGenerator} from "./GlobalGenerator";
import {CreepRoute} from "./CreepRoute";

export class Game {
    public route1 : CreepRoute;

    constructor() {
        GlobalGenerator.run();

        FogEnableOff();
        FogMaskEnableOff();


        this.route1 = new CreepRoute(1);
    }


}
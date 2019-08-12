import {GlobalGenerator} from "./GlobalGenerator";
import {CreepRoute} from "./CreepRoute";
import {Globals} from "./Globals";

export class Game {
    public routes: CreepRoute[] = [];

    constructor() {
        GlobalGenerator.run();

        FogEnableOff();
        FogMaskEnableOff();


        this.routes.push(new CreepRoute(1, Globals.CreepPlayers[1]));
    }


}
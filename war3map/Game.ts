import {GlobalGenerator} from "./GlobalGenerator";
import {CreepRoute} from "./CreepRoute";
import {Globals} from "./Globals";

export class Game {
    public routes: CreepRoute[] = [];

    constructor() {
        GlobalGenerator.run();

        FogEnableOff();
        FogMaskEnableOff();


        this.routes[1] = (new CreepRoute(1, Globals.CreepPlayers[1]));
        this.routes[2] = (new CreepRoute(2, Globals.CreepPlayers[2]));

        const route = this.routes[1];
        const route2 = this.routes[2];
        CreateUnit(route.creepPlayer, FourCC('hfoo'), GetRectCenterX(route.startPoint), GetRectCenterY(route.startPoint), bj_UNIT_FACING);
        CreateUnit(route2.creepPlayer, FourCC('hfoo'), GetRectCenterX(route2.startPoint), GetRectCenterY(route2.startPoint), bj_UNIT_FACING);
    }


}
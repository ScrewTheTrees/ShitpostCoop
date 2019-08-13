import {GlobalGenerator} from "./GlobalGenerator";
import {CreepRoute} from "./CreepRoute";
import {Globals} from "./Globals";
import {ProgressTracker} from "./ProgressTracker";

export class Game {
    public routes: CreepRoute[] = [];

    constructor() {
        GlobalGenerator.run();

        FogEnableOff();
        FogMaskEnableOff();


        this.routes[1] = (new CreepRoute(1, Globals.CreepPlayers[1]));
        this.routes[2] = (new CreepRoute(2, Globals.CreepPlayers[2]));
        this.routes[3] = (new CreepRoute(3, Globals.CreepPlayers[3]));

        const route = this.routes[1];
        const route2 = this.routes[2];
        const route3 = this.routes[3];
        let doSpawn = true;

        const clock = CreateTrigger();
        TriggerRegisterTimerEvent(clock, 1, true);
        TriggerAddAction(clock, () => {
            if (doSpawn) {
                CreateUnit(route.creepPlayer, FourCC('h000'), GetRectCenterX(route.startPoint), GetRectCenterY(route.startPoint), bj_UNIT_FACING);
                CreateUnit(route2.creepPlayer, FourCC('h000'), GetRectCenterX(route2.startPoint), GetRectCenterY(route2.startPoint), bj_UNIT_FACING);
                CreateUnit(route3.creepPlayer, FourCC('h000'), GetRectCenterX(route3.startPoint), GetRectCenterY(route3.startPoint), bj_UNIT_FACING);
            }

            doSpawn = (Game.GetNumOfPlayerUnits(route.creepPlayer)
                + Game.GetNumOfPlayerUnits(route2.creepPlayer)
                + Game.GetNumOfPlayerUnits(route3.creepPlayer)
                < 60);
        });


        ProgressTracker.AddCreepExitRegion(route.endPoint, route.creepPlayer);
        ProgressTracker.AddCreepExitRegion(route2.endPoint, route2.creepPlayer);
        ProgressTracker.AddCreepExitRegion(route3.endPoint, route3.creepPlayer);
    }


    private static GetNumOfPlayerUnits(target:player): number {
        const units = CreateGroup();
        GroupEnumUnitsOfPlayer(units, target, null);
        let foundUnit = FirstOfGroup(units);
        let count = 0;

        while (foundUnit != null) {
            foundUnit = FirstOfGroup(units);
            GroupRemoveUnit(units, foundUnit);
            count += 1;
        }

        return count;
    }


}
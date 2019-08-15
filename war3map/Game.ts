import {GlobalGenerator} from "./GlobalGenerator";
import {CreepRoute} from "./CreepRoute";
import {Globals} from "./Globals";
import {ProgressTracker} from "./ProgressTracker";
import {WaveHandler} from "./WaveHandler";
import {Wave} from "./Wave";
import {PlayerController} from "./Player/PlayerController";
import {BasicUnitController} from "./UnitControllers/BasicUnitController";
import {HeroUnit} from "./UnitControllers/HeroUnit";
import {MapTimers} from "./MapTimers";

export class Game {
    public routes: CreepRoute[] = [];
    private waveHandler: WaveHandler;
    private playerController: any[] = [];
    private mapTimers: MapTimers;

    constructor() {
        GlobalGenerator.run();
        this.mapTimers = new MapTimers();
        this.mapTimers.init();

        this.routes[1] = (new CreepRoute(1, Globals.CreepPlayers[1]));
        this.routes[2] = (new CreepRoute(2, Globals.CreepPlayers[2]));
        this.routes[3] = (new CreepRoute(3, Globals.CreepPlayers[3]));

        const route = this.routes[1];
        const route2 = this.routes[2];
        const route3 = this.routes[3];

        this.waveHandler = new WaveHandler();
        this.waveHandler.sendSpawnSignal.push((wave: Wave) => {
            route.spawnUnit(wave.unitType);
        });
        this.waveHandler.sendSpawnSignal.push((wave: Wave) => {
            route2.spawnUnit(wave.unitType);
        });
        this.waveHandler.sendSpawnSignal.push((wave: Wave) => {
            route3.spawnUnit(wave.unitType);
        });
        this.waveHandler.startWaveTimer();

        this.createPlayers()

        ProgressTracker.AddCreepExitRegion(route.endPoint, route.creepPlayer);
        ProgressTracker.AddCreepExitRegion(route2.endPoint, route2.creepPlayer);
        ProgressTracker.AddCreepExitRegion(route3.endPoint, route3.creepPlayer);
    }


    private GetNumOfPlayerUnits(target: player): number {
        const units = CreateGroup();
        GroupEnumUnitsOfPlayer(units, target, null);
        let foundUnit = FirstOfGroup(units);
        let count = 0;

        while (foundUnit != null) {
            foundUnit = FirstOfGroup(units);
            GroupRemoveUnit(units, foundUnit);
            count += 1;
        }
        DestroyGroup(units);
        return count;
    }

    private createPlayers() {
        for (let i = 0; i < Globals.ActivePlayers.length; i++) {
            const targetPlayer: player = Globals.ActivePlayers[i];
            const fogMod = CreateFogModifierRect(targetPlayer, FOG_OF_WAR_VISIBLE, GetEntireMapRect(), false, false);
            FogModifierStart(fogMod);

            const pc = new PlayerController(targetPlayer);
            this.playerController.push(pc);

            const hero = HeroUnit.HERO_POTM;
            let u = CreateUnitAtLoc(targetPlayer, hero.unitType, GetPlayerStartLocationLoc(targetPlayer), bj_UNIT_FACING);

            pc.addControlledUnit(u, new BasicUnitController(u, hero));
        }
    }


}
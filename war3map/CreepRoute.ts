import {Globals} from "./Globals";
import {ShitEx} from "./ShitEx";
import {Logger} from "./Logger";

export class CreepRoute {
    public waypoints: rect[] = [];
    public myIndex : number = 0;

    constructor(index: number) {
        this.myIndex = index;
        Object.entries(Globals.AllRegions).forEach(([key, value]) => {
            if (key.startsWith("gg_rct_route")) {
                const result = ShitEx.seperateNumbers(key);
                if (result[2] == "waypoint") {
                    this.waypoints[Number(result[3])] = value;
                    Logger.LogDebug(`Added waypoint ${result[3]} to route ${result[1]}`);
                }

            }
        });

        Logger.LogDebug(`Total waypoints ${this.waypoints.length} in route ${this.myIndex}`);

    }
}
import {Globals} from "./Globals";
import {ShitEx} from "./ShitEx";
import {Logger} from "./Logger";

export class CreepRoute {
    public wayPoints: rect[] = [];
    public startPoint: rect;
    public endPoint: rect;
    public myIndex: number;
    public creepPlayer: player;

    constructor(index: number, creepPlayer: player) {
        this.myIndex = index;
        this.creepPlayer = creepPlayer;
        this.startPoint = Globals.AllRegions["gg_rct_route" + this.myIndex + "spawn"];
        this.endPoint = Globals.AllRegions["gg_rct_route" + this.myIndex + "end"];

        this.createWaypointList();
        Logger.LogDebug(`Total wayPoints ${this.wayPoints.length} in route ${this.myIndex}`);

    }


    private createWaypointList() {
        Object.entries(Globals.AllRegions).forEach(([key, value]) => {
            if (key.startsWith("gg_rct_route" + this.myIndex)) {
                const result = ShitEx.seperateNumbers(key);
                if (result[2] == "waypoint") {
                    this.wayPoints[Number(result[3])] = value;
                    Logger.LogVerbose(`Added waypoint ${result[3]} to route ${result[1]}`);
                }
            }

        });


    }

    private generateWaypoints() {

    }
}
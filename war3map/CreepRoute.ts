import {Globals} from "./Globals";
import {ShitEx} from "./ShitEx";
import {Logger} from "./Logger";
import {Orders} from "./Orders";

export class CreepRoute {
    public wayPoints: rect[] = [];
    public startPoint: rect;
    public endPoint: rect;
    public myIndex: number;
    public creepPlayer: player;
    private wayPointTriggers: trigger[] = [];

    constructor(index: number, creepPlayer: player) {
        this.myIndex = index;
        this.creepPlayer = creepPlayer;
        this.startPoint = Globals.AllRegions["gg_rct_route" + this.myIndex + "spawn"];
        this.endPoint = Globals.AllRegions["gg_rct_route" + this.myIndex + "end"];

        RemoveAllGuardPositions(this.creepPlayer);

        this.createWaypointList();
        this.generateWaypoints();
        Logger.LogVerbose(`startPoint in route ${this.myIndex}  -  ${this.startPoint}`);
        Logger.LogVerbose(`endPoint in route ${this.myIndex}  -  ${this.endPoint}`);
        Logger.LogDebug(`Total wayPoints ${this.wayPoints.length} in route ${this.myIndex}`);
        Logger.LogDebug(`Total triggers ${this.wayPointTriggers.length} in route ${this.myIndex}`);

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
        if (this.wayPoints.length > 0) {
            this.wayPointTriggers.push(this.createWaypointTrigger(this.startPoint, this.wayPoints[1]));

            for (let i = 1; i < this.wayPoints.length - 1; i++) {
                const start = this.wayPoints[i];
                const end = this.wayPoints[i + 1];
                this.wayPointTriggers.push(this.createWaypointTrigger(start, end));
            }

            this.wayPointTriggers.push(this.createWaypointTrigger(this.wayPoints[this.wayPoints.length - 1], this.endPoint));

        } else {
            this.wayPointTriggers.push(this.createWaypointTrigger(this.startPoint, this.endPoint));
        }


    }

    private createWaypointTrigger(beginRect: rect, endRect: rect): trigger {
        const newTrigger = CreateTrigger();
        const reg = CreateRegion();
        RegionAddRect(reg, beginRect);
        TriggerRegisterEnterRegion(newTrigger, reg, Filter(() => {
            return (GetOwningPlayer(GetFilterUnit()) == this.creepPlayer)
        }));
        TriggerAddAction(newTrigger, () => {
            const loc = GetRectCenter(endRect);
            IssuePointOrderLoc(GetEnteringUnit(), Orders.move, loc);
            RemoveLocation(loc);
        });

        return newTrigger;
    }
}
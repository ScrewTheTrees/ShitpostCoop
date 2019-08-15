export class MapTimers {
    public static fastTimerCallbacks: Function[] = [];
    public static fastTimer: trigger;

    public init() {
        MapTimers.fastTimer = CreateTrigger();
        TriggerRegisterTimerEvent(MapTimers.fastTimer, 0.01, true);
        TriggerAddAction(MapTimers.fastTimer, () => {
            MapTimers.fastTimerCallbacks.forEach((callback) => {
                callback();
            })
        });
    }
    public static addFastTimerCallback(func: Function){
        this.fastTimerCallbacks.push(func);
    }
}
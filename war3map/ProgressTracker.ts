export class ProgressTracker {
    public static lives: number = 30;
    public static wave: number = 0;

    private static onExitRegion: trigger = CreateTrigger();

    public static initialize() {
        TriggerAddAction(this.onExitRegion, () => {
            RemoveUnit(GetEnteringUnit());
            this.lives -= 1;
        });
    }


    public static AddCreepExitRegion(enter: rect, creepPlayer: player) {
        const reg = CreateRegion();
        RegionAddRect(reg, enter);
        TriggerRegisterEnterRegion(this.onExitRegion, reg, Filter(() => {
            return (GetOwningPlayer(GetFilterUnit()) == creepPlayer);
        }));

    }
}
ProgressTracker.initialize();
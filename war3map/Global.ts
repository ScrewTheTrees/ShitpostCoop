export class Global {
    static MaxPlayerSlots = 4;
    static ActivePlayers: player[] = [];
    static CreepPlayers: player[] = [];
    static AllRegions: { [id: string]: rect; } = {};
    public static DegToRad = 0.0174533;


}
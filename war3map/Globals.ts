export class Globals{
    static MaxPlayerSlots = 4;
    static ActivePlayers : player[] = [];
    static CreepPlayers : player[] = [];
    static AllRegions : { [id: string] : rect; } = {};
}
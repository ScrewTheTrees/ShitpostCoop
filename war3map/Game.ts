import {Globals} from "./Globals";

export class Game {
    constructor() {
        for (let i = 0; i < Globals.MaxPlayerSlots; i++) {
            CreateUnitAtLoc(Player(i), FourCC("hpea"), GetPlayerStartLocationLoc(Player(i)), bj_UNIT_FACING);
            print(i + 1);
        }
    }
}
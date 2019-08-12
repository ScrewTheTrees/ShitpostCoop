import {Constants} from "./Constants";

export class Game {
    constructor() {
        MeleeStartingResources();
        MeleeStartingHeroLimit();
        MeleeGrantHeroItems();
        MeleeClearExcessUnits();

        for (let i = 0; i <= Constants.MaxPlayerSlots; i++) {
            MeleeStartingUnitsForPlayer(RACE_NIGHTELF, Player(i), GetPlayerStartLocationLoc(Player(i)), true);
            if (i % 2 == 1) {
                print(i + 1);
                StartMeleeAI(Player(i), "war3mapImported/ai/triggerAi.ai");
            }
        }
    }
}
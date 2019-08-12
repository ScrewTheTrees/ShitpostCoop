import {Globals} from "./Globals";
import {Logger} from "./Logger";

export class GlobalGenerator {
    public static run() {
        Object.entries(_G).forEach((data) => {
            const key = data[0];
            const value = data[1];
            if (key.startsWith("gg_rct")) {
                this.handleRegion(key, value);
            }
        });

        this.generatePlayers();
    }

    private static handleRegion(key : string, value : rect) {
        Globals.AllRegions[key] = value;
        Logger.LogVerbose(Globals.AllRegions[key]);
    }

    private static generatePlayers() {
        let computerPlayers = 0;

        for (let i = 0; i < Globals.MaxPlayerSlots; i++) {
            const targetPlayer = Player(i);
            if (GetPlayerSlotState(targetPlayer) == PLAYER_SLOT_STATE_PLAYING) {
                if (GetPlayerController(targetPlayer) == MAP_CONTROL_USER) {
                    Globals.ActivePlayers.push(targetPlayer);
                    print(GetPlayerName(targetPlayer) + " is up for the task.");
                } else {
                    computerPlayers += 1;
                    Logger.LogDebug("Cpu player found: ", i)
                }
            } else {
                Logger.LogDebug("Empty slot found: ", i)
            }
        }

        if (computerPlayers > 0) {
            print("I know friends are hard to find, but the " + computerPlayers + " computer/s is no substitute.");
        }

        Globals.CreepPlayers[1] = Player(12);
        Globals.CreepPlayers[2] = Player(13);
        Globals.CreepPlayers[3] = Player(14);
        Globals.CreepPlayers[4] = Player(15);
        Logger.LogDebug("Num of Creep players: ", Globals.CreepPlayers.length)

    }
}
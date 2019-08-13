import {GetRandomDefenseType} from "./GetRandomDefenseType";

export class Wave {
    public unitType : number;
    public defenseType : defensetype;

    constructor(unitType: number, defenseType?: defensetype) {
        this.unitType = unitType;
        if (defenseType) {
            this.defenseType = defenseType;
        } else {
            this.defenseType = GetRandomDefenseType();
        }
    }

}



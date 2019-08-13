export function GetRandomDefenseType(): defensetype {
    const num = GetRandomInt(1, 5);
    switch (num) {
        case 2: return DEFENSE_TYPE_NONE;
        case 3: return DEFENSE_TYPE_LIGHT;
        case 4: return DEFENSE_TYPE_LARGE;
        case 5: return DEFENSE_TYPE_FORT;
        default: return DEFENSE_TYPE_MEDIUM;
    }
}
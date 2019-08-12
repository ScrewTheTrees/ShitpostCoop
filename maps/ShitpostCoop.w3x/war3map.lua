gg_rct_spawn1 = nil
gg_rct_route1waypoint1 = nil
gg_rct_route1waypoint2 = nil
gg_rct_route1waypoint3 = nil
gg_rct_route1waypoint4 = nil
gg_rct_route1waypoint5 = nil
gg_rct_route1waypoint6 = nil
gg_rct_route1waypoint7 = nil
gg_rct_end1 = nil
function InitGlobals()
end

function CreateRegions()
    local we
    gg_rct_spawn1 = Rect(-3520.0, 1984.0, -3136.0, 2368.0)
    gg_rct_route1waypoint1 = Rect(-3520.0, 576.0, -3136.0, 960.0)
    gg_rct_route1waypoint2 = Rect(1472.0, 576.0, 1856.0, 960.0)
    gg_rct_route1waypoint3 = Rect(1472.0, -3264.0, 1856.0, -2880.0)
    gg_rct_route1waypoint4 = Rect(704.0, -3264.0, 1088.0, -2880.0)
    gg_rct_route1waypoint5 = Rect(704.0, -2496.0, 1088.0, -2112.0)
    gg_rct_route1waypoint6 = Rect(-448.0, -2496.0, -64.0, -2112.0)
    gg_rct_route1waypoint7 = Rect(-448.0, -960.0, -64.0, -576.0)
    gg_rct_end1 = Rect(-3008.0, -960.0, -2624.0, -576.0)
end

function InitCustomPlayerSlots()
    SetPlayerStartLocation(Player(0), 0)
    ForcePlayerStartLocation(Player(0), 0)
    SetPlayerColor(Player(0), ConvertPlayerColor(0))
    SetPlayerRacePreference(Player(0), RACE_PREF_RANDOM)
    SetPlayerRaceSelectable(Player(0), true)
    SetPlayerController(Player(0), MAP_CONTROL_USER)
    SetPlayerStartLocation(Player(1), 1)
    ForcePlayerStartLocation(Player(1), 1)
    SetPlayerColor(Player(1), ConvertPlayerColor(1))
    SetPlayerRacePreference(Player(1), RACE_PREF_RANDOM)
    SetPlayerRaceSelectable(Player(1), true)
    SetPlayerController(Player(1), MAP_CONTROL_USER)
    SetPlayerStartLocation(Player(2), 2)
    ForcePlayerStartLocation(Player(2), 2)
    SetPlayerColor(Player(2), ConvertPlayerColor(2))
    SetPlayerRacePreference(Player(2), RACE_PREF_RANDOM)
    SetPlayerRaceSelectable(Player(2), true)
    SetPlayerController(Player(2), MAP_CONTROL_USER)
    SetPlayerStartLocation(Player(3), 3)
    ForcePlayerStartLocation(Player(3), 3)
    SetPlayerColor(Player(3), ConvertPlayerColor(3))
    SetPlayerRacePreference(Player(3), RACE_PREF_RANDOM)
    SetPlayerRaceSelectable(Player(3), true)
    SetPlayerController(Player(3), MAP_CONTROL_USER)
    SetPlayerStartLocation(Player(12), 4)
    ForcePlayerStartLocation(Player(12), 4)
    SetPlayerColor(Player(12), ConvertPlayerColor(12))
    SetPlayerRacePreference(Player(12), RACE_PREF_UNDEAD)
    SetPlayerRaceSelectable(Player(12), false)
    SetPlayerController(Player(12), MAP_CONTROL_COMPUTER)
    SetPlayerStartLocation(Player(13), 5)
    ForcePlayerStartLocation(Player(13), 5)
    SetPlayerColor(Player(13), ConvertPlayerColor(13))
    SetPlayerRacePreference(Player(13), RACE_PREF_UNDEAD)
    SetPlayerRaceSelectable(Player(13), false)
    SetPlayerController(Player(13), MAP_CONTROL_COMPUTER)
    SetPlayerStartLocation(Player(14), 6)
    ForcePlayerStartLocation(Player(14), 6)
    SetPlayerColor(Player(14), ConvertPlayerColor(14))
    SetPlayerRacePreference(Player(14), RACE_PREF_UNDEAD)
    SetPlayerRaceSelectable(Player(14), false)
    SetPlayerController(Player(14), MAP_CONTROL_COMPUTER)
    SetPlayerStartLocation(Player(15), 7)
    ForcePlayerStartLocation(Player(15), 7)
    SetPlayerColor(Player(15), ConvertPlayerColor(15))
    SetPlayerRacePreference(Player(15), RACE_PREF_UNDEAD)
    SetPlayerRaceSelectable(Player(15), false)
    SetPlayerController(Player(15), MAP_CONTROL_COMPUTER)
end

function InitCustomTeams()
    SetPlayerTeam(Player(0), 0)
    SetPlayerTeam(Player(1), 0)
    SetPlayerTeam(Player(2), 0)
    SetPlayerTeam(Player(3), 0)
    SetPlayerTeam(Player(12), 0)
    SetPlayerTeam(Player(13), 0)
    SetPlayerTeam(Player(14), 0)
    SetPlayerTeam(Player(15), 0)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(12), true)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(13), true)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(14), true)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(15), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(12), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(13), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(14), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(15), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(12), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(13), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(14), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(15), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(12), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(13), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(14), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(15), true)
    SetPlayerAllianceStateAllyBJ(Player(12), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(12), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(12), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(12), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(12), Player(13), true)
    SetPlayerAllianceStateAllyBJ(Player(12), Player(14), true)
    SetPlayerAllianceStateAllyBJ(Player(12), Player(15), true)
    SetPlayerAllianceStateAllyBJ(Player(13), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(13), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(13), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(13), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(13), Player(12), true)
    SetPlayerAllianceStateAllyBJ(Player(13), Player(14), true)
    SetPlayerAllianceStateAllyBJ(Player(13), Player(15), true)
    SetPlayerAllianceStateAllyBJ(Player(14), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(14), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(14), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(14), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(14), Player(12), true)
    SetPlayerAllianceStateAllyBJ(Player(14), Player(13), true)
    SetPlayerAllianceStateAllyBJ(Player(14), Player(15), true)
    SetPlayerAllianceStateAllyBJ(Player(15), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(15), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(15), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(15), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(15), Player(12), true)
    SetPlayerAllianceStateAllyBJ(Player(15), Player(13), true)
    SetPlayerAllianceStateAllyBJ(Player(15), Player(14), true)
    SetPlayerAllianceStateVisionBJ(Player(0), Player(1), true)
    SetPlayerAllianceStateVisionBJ(Player(0), Player(2), true)
    SetPlayerAllianceStateVisionBJ(Player(0), Player(3), true)
    SetPlayerAllianceStateVisionBJ(Player(0), Player(12), true)
    SetPlayerAllianceStateVisionBJ(Player(0), Player(13), true)
    SetPlayerAllianceStateVisionBJ(Player(0), Player(14), true)
    SetPlayerAllianceStateVisionBJ(Player(0), Player(15), true)
    SetPlayerAllianceStateVisionBJ(Player(1), Player(0), true)
    SetPlayerAllianceStateVisionBJ(Player(1), Player(2), true)
    SetPlayerAllianceStateVisionBJ(Player(1), Player(3), true)
    SetPlayerAllianceStateVisionBJ(Player(1), Player(12), true)
    SetPlayerAllianceStateVisionBJ(Player(1), Player(13), true)
    SetPlayerAllianceStateVisionBJ(Player(1), Player(14), true)
    SetPlayerAllianceStateVisionBJ(Player(1), Player(15), true)
    SetPlayerAllianceStateVisionBJ(Player(2), Player(0), true)
    SetPlayerAllianceStateVisionBJ(Player(2), Player(1), true)
    SetPlayerAllianceStateVisionBJ(Player(2), Player(3), true)
    SetPlayerAllianceStateVisionBJ(Player(2), Player(12), true)
    SetPlayerAllianceStateVisionBJ(Player(2), Player(13), true)
    SetPlayerAllianceStateVisionBJ(Player(2), Player(14), true)
    SetPlayerAllianceStateVisionBJ(Player(2), Player(15), true)
    SetPlayerAllianceStateVisionBJ(Player(3), Player(0), true)
    SetPlayerAllianceStateVisionBJ(Player(3), Player(1), true)
    SetPlayerAllianceStateVisionBJ(Player(3), Player(2), true)
    SetPlayerAllianceStateVisionBJ(Player(3), Player(12), true)
    SetPlayerAllianceStateVisionBJ(Player(3), Player(13), true)
    SetPlayerAllianceStateVisionBJ(Player(3), Player(14), true)
    SetPlayerAllianceStateVisionBJ(Player(3), Player(15), true)
    SetPlayerAllianceStateVisionBJ(Player(12), Player(0), true)
    SetPlayerAllianceStateVisionBJ(Player(12), Player(1), true)
    SetPlayerAllianceStateVisionBJ(Player(12), Player(2), true)
    SetPlayerAllianceStateVisionBJ(Player(12), Player(3), true)
    SetPlayerAllianceStateVisionBJ(Player(12), Player(13), true)
    SetPlayerAllianceStateVisionBJ(Player(12), Player(14), true)
    SetPlayerAllianceStateVisionBJ(Player(12), Player(15), true)
    SetPlayerAllianceStateVisionBJ(Player(13), Player(0), true)
    SetPlayerAllianceStateVisionBJ(Player(13), Player(1), true)
    SetPlayerAllianceStateVisionBJ(Player(13), Player(2), true)
    SetPlayerAllianceStateVisionBJ(Player(13), Player(3), true)
    SetPlayerAllianceStateVisionBJ(Player(13), Player(12), true)
    SetPlayerAllianceStateVisionBJ(Player(13), Player(14), true)
    SetPlayerAllianceStateVisionBJ(Player(13), Player(15), true)
    SetPlayerAllianceStateVisionBJ(Player(14), Player(0), true)
    SetPlayerAllianceStateVisionBJ(Player(14), Player(1), true)
    SetPlayerAllianceStateVisionBJ(Player(14), Player(2), true)
    SetPlayerAllianceStateVisionBJ(Player(14), Player(3), true)
    SetPlayerAllianceStateVisionBJ(Player(14), Player(12), true)
    SetPlayerAllianceStateVisionBJ(Player(14), Player(13), true)
    SetPlayerAllianceStateVisionBJ(Player(14), Player(15), true)
    SetPlayerAllianceStateVisionBJ(Player(15), Player(0), true)
    SetPlayerAllianceStateVisionBJ(Player(15), Player(1), true)
    SetPlayerAllianceStateVisionBJ(Player(15), Player(2), true)
    SetPlayerAllianceStateVisionBJ(Player(15), Player(3), true)
    SetPlayerAllianceStateVisionBJ(Player(15), Player(12), true)
    SetPlayerAllianceStateVisionBJ(Player(15), Player(13), true)
    SetPlayerAllianceStateVisionBJ(Player(15), Player(14), true)
end

function InitAllyPriorities()
    SetStartLocPrioCount(0, 3)
    SetStartLocPrio(0, 0, 1, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(0, 1, 2, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(0, 2, 3, MAP_LOC_PRIO_LOW)
    SetStartLocPrioCount(1, 3)
    SetStartLocPrio(1, 0, 0, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(1, 1, 2, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(1, 2, 3, MAP_LOC_PRIO_HIGH)
    SetStartLocPrioCount(2, 3)
    SetStartLocPrio(2, 0, 0, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(2, 1, 1, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(2, 2, 3, MAP_LOC_PRIO_HIGH)
    SetStartLocPrioCount(3, 3)
    SetStartLocPrio(3, 0, 0, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(3, 1, 1, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(3, 2, 2, MAP_LOC_PRIO_HIGH)
    SetStartLocPrioCount(4, 8)
    SetStartLocPrio(4, 0, 0, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(4, 1, 1, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(4, 2, 2, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(4, 3, 3, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(4, 4, 5, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(4, 5, 6, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(4, 6, 7, MAP_LOC_PRIO_HIGH)
    SetStartLocPrioCount(5, 5)
    SetStartLocPrio(5, 0, 2, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(5, 1, 3, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(5, 2, 4, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(5, 3, 6, MAP_LOC_PRIO_LOW)
    SetStartLocPrioCount(6, 5)
    SetStartLocPrio(6, 0, 1, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(6, 1, 2, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(6, 2, 3, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(6, 3, 5, MAP_LOC_PRIO_LOW)
    SetStartLocPrioCount(7, 6)
    SetStartLocPrio(7, 0, 1, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(7, 1, 2, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(7, 2, 4, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(7, 3, 5, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(7, 4, 6, MAP_LOC_PRIO_LOW)
end

function main()
    SetCameraBounds(-7424.0 + GetCameraMargin(CAMERA_MARGIN_LEFT), -7680.0 + GetCameraMargin(CAMERA_MARGIN_BOTTOM), 7424.0 - GetCameraMargin(CAMERA_MARGIN_RIGHT), 7168.0 - GetCameraMargin(CAMERA_MARGIN_TOP), -7424.0 + GetCameraMargin(CAMERA_MARGIN_LEFT), 7168.0 - GetCameraMargin(CAMERA_MARGIN_TOP), 7424.0 - GetCameraMargin(CAMERA_MARGIN_RIGHT), -7680.0 + GetCameraMargin(CAMERA_MARGIN_BOTTOM))
    SetDayNightModels("Environment\\DNC\\DNCLordaeron\\DNCLordaeronTerrain\\DNCLordaeronTerrain.mdl", "Environment\\DNC\\DNCLordaeron\\DNCLordaeronUnit\\DNCLordaeronUnit.mdl")
    NewSoundEnvironment("Default")
    SetAmbientDaySound("LordaeronSummerDay")
    SetAmbientNightSound("LordaeronSummerNight")
    SetMapMusic("Music", true, 0)
    CreateRegions()
    InitBlizzard()
    InitGlobals()
end

function config()
    SetMapName("TRIGSTR_003")
    SetMapDescription("TRIGSTR_005")
    SetPlayers(8)
    SetTeams(8)
    SetGamePlacement(MAP_PLACEMENT_TEAMS_TOGETHER)
    DefineStartLocation(0, 320.0, -512.0)
    DefineStartLocation(1, 768.0, -512.0)
    DefineStartLocation(2, 320.0, -960.0)
    DefineStartLocation(3, 768.0, -960.0)
    DefineStartLocation(4, 5440.0, -1344.0)
    DefineStartLocation(5, 2752.0, 6784.0)
    DefineStartLocation(6, 2944.0, -896.0)
    DefineStartLocation(7, 5760.0, -4672.0)
    InitCustomPlayerSlots()
    InitCustomTeams()
    InitAllyPriorities()
end


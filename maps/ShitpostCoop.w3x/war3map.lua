gg_rct_route1spawn = nil
gg_rct_route1waypoint1 = nil
gg_rct_route1waypoint2 = nil
gg_rct_route1waypoint3 = nil
gg_rct_route1waypoint4 = nil
gg_rct_route1waypoint5 = nil
gg_rct_route1waypoint6 = nil
gg_rct_route1waypoint7 = nil
gg_rct_route1end = nil
gg_rct_route2spawn = nil
gg_rct_route2waypoint1 = nil
gg_rct_route2waypoint2 = nil
gg_rct_route2waypoint3 = nil
gg_rct_route2waypoint4 = nil
gg_rct_route2waypoint5 = nil
gg_rct_route2end = nil
gg_rct_route3spawn = nil
gg_rct_route3end = nil
gg_rct_route3waypoint1 = nil
gg_rct_route3waypoint2 = nil
gg_rct_route3waypoint3 = nil
gg_rct_route3waypoint4 = nil
gg_rct_route3waypoint5 = nil
gg_rct_route3waypoint6 = nil
gg_rct_route3waypoint7 = nil
gg_rct_route1waypoint8 = nil
gg_rct_route1waypoint9 = nil
gg_rct_route2waypoint6 = nil
gg_rct_route2waypoint7 = nil
gg_rct_route2waypoint8 = nil
gg_rct_route2waypoint9 = nil
gg_rct_route3waypoint8 = nil
gg_rct_route3waypoint9 = nil
gg_rct_route3waypoint10 = nil
function InitGlobals()
end

function CreateRegions()
    local we
    gg_rct_route1spawn = Rect(-3456.0, 2176.0, -3200.0, 2304.0)
    we = AddWeatherEffect(gg_rct_route1spawn, FourCC("MEds"))
    EnableWeatherEffect(we, true)
    gg_rct_route1waypoint1 = Rect(-3392.0, 672.0, -3264.0, 800.0)
    gg_rct_route1waypoint2 = Rect(-1344.0, 704.0, -1216.0, 832.0)
    gg_rct_route1waypoint3 = Rect(1600.0, 704.0, 1728.0, 832.0)
    gg_rct_route1waypoint4 = Rect(1600.0, -1216.0, 1728.0, -1088.0)
    gg_rct_route1waypoint5 = Rect(1568.0, -3200.0, 1696.0, -3072.0)
    gg_rct_route1waypoint6 = Rect(864.0, -3168.0, 992.0, -3040.0)
    gg_rct_route1waypoint7 = Rect(928.0, -2304.0, 1056.0, -2176.0)
    gg_rct_route1end = Rect(-2944.0, -896.0, -2688.0, -640.0)
    we = AddWeatherEffect(gg_rct_route1end, FourCC("FDrh"))
    EnableWeatherEffect(we, true)
    gg_rct_route2spawn = Rect(-1408.0, 2304.0, -1152.0, 2432.0)
    we = AddWeatherEffect(gg_rct_route2spawn, FourCC("MEds"))
    EnableWeatherEffect(we, true)
    gg_rct_route2waypoint1 = Rect(-1408.0, -128.0, -1152.0, 0.0)
    gg_rct_route2waypoint2 = Rect(512.0, -64.0, 608.0, 96.0)
    gg_rct_route2waypoint3 = Rect(2400.0, -96.0, 2528.0, 32.0)
    gg_rct_route2waypoint4 = Rect(2368.0, -1984.0, 2496.0, -1856.0)
    gg_rct_route2waypoint5 = Rect(2368.0, -3936.0, 2496.0, -3808.0)
    gg_rct_route2end = Rect(-2944.0, -1664.0, -2688.0, -1408.0)
    we = AddWeatherEffect(gg_rct_route2end, FourCC("FDrh"))
    EnableWeatherEffect(we, true)
    gg_rct_route3spawn = Rect(768.0, 2304.0, 1024.0, 2432.0)
    we = AddWeatherEffect(gg_rct_route3spawn, FourCC("MEds"))
    EnableWeatherEffect(we, true)
    gg_rct_route3end = Rect(-2944.0, -1280.0, -2688.0, -1024.0)
    we = AddWeatherEffect(gg_rct_route3end, FourCC("FDrh"))
    EnableWeatherEffect(we, true)
    gg_rct_route3waypoint1 = Rect(832.0, 448.0, 960.0, 576.0)
    gg_rct_route3waypoint2 = Rect(832.0, -864.0, 960.0, -736.0)
    gg_rct_route3waypoint3 = Rect(1984.0, -832.0, 2112.0, -704.0)
    gg_rct_route3waypoint4 = Rect(3200.0, -832.0, 3328.0, -704.0)
    gg_rct_route3waypoint5 = Rect(3104.0, -1664.0, 3264.0, -1536.0)
    gg_rct_route3waypoint6 = Rect(1984.0, -1600.0, 2112.0, -1472.0)
    gg_rct_route3waypoint7 = Rect(704.0, -1504.0, 832.0, -1376.0)
    gg_rct_route1waypoint8 = Rect(-352.0, -2336.0, -224.0, -2208.0)
    gg_rct_route1waypoint9 = Rect(-320.0, -768.0, -192.0, -640.0)
    gg_rct_route2waypoint6 = Rect(768.0, -3904.0, 896.0, -3776.0)
    gg_rct_route2waypoint7 = Rect(832.0, -2688.0, 960.0, -2560.0)
    gg_rct_route2waypoint8 = Rect(832.0, -1632.0, 960.0, -1504.0)
    gg_rct_route2waypoint9 = Rect(-1024.0, -1600.0, -896.0, -1472.0)
    gg_rct_route3waypoint8 = Rect(704.0, -3200.0, 832.0, -3072.0)
    gg_rct_route3waypoint9 = Rect(-1504.0, -3104.0, -1376.0, -2976.0)
    gg_rct_route3waypoint10 = Rect(-1472.0, -1152.0, -1344.0, -1024.0)
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
    SetPlayerAllianceStateAllyBJ(Player(0), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(2), true)
    SetPlayerAllianceStateVisionBJ(Player(0), Player(1), true)
    SetPlayerAllianceStateVisionBJ(Player(0), Player(2), true)
    SetPlayerAllianceStateVisionBJ(Player(0), Player(3), true)
    SetPlayerAllianceStateVisionBJ(Player(1), Player(0), true)
    SetPlayerAllianceStateVisionBJ(Player(1), Player(2), true)
    SetPlayerAllianceStateVisionBJ(Player(1), Player(3), true)
    SetPlayerAllianceStateVisionBJ(Player(2), Player(0), true)
    SetPlayerAllianceStateVisionBJ(Player(2), Player(1), true)
    SetPlayerAllianceStateVisionBJ(Player(2), Player(3), true)
    SetPlayerAllianceStateVisionBJ(Player(3), Player(0), true)
    SetPlayerAllianceStateVisionBJ(Player(3), Player(1), true)
    SetPlayerAllianceStateVisionBJ(Player(3), Player(2), true)
    SetPlayerTeam(Player(12), 1)
    SetPlayerTeam(Player(13), 1)
    SetPlayerTeam(Player(14), 1)
    SetPlayerTeam(Player(15), 1)
    SetPlayerAllianceStateAllyBJ(Player(12), Player(13), true)
    SetPlayerAllianceStateAllyBJ(Player(12), Player(14), true)
    SetPlayerAllianceStateAllyBJ(Player(12), Player(15), true)
    SetPlayerAllianceStateAllyBJ(Player(13), Player(12), true)
    SetPlayerAllianceStateAllyBJ(Player(13), Player(14), true)
    SetPlayerAllianceStateAllyBJ(Player(13), Player(15), true)
    SetPlayerAllianceStateAllyBJ(Player(14), Player(12), true)
    SetPlayerAllianceStateAllyBJ(Player(14), Player(13), true)
    SetPlayerAllianceStateAllyBJ(Player(14), Player(15), true)
    SetPlayerAllianceStateAllyBJ(Player(15), Player(12), true)
    SetPlayerAllianceStateAllyBJ(Player(15), Player(13), true)
    SetPlayerAllianceStateAllyBJ(Player(15), Player(14), true)
    SetPlayerAllianceStateVisionBJ(Player(12), Player(13), true)
    SetPlayerAllianceStateVisionBJ(Player(12), Player(14), true)
    SetPlayerAllianceStateVisionBJ(Player(12), Player(15), true)
    SetPlayerAllianceStateVisionBJ(Player(13), Player(12), true)
    SetPlayerAllianceStateVisionBJ(Player(13), Player(14), true)
    SetPlayerAllianceStateVisionBJ(Player(13), Player(15), true)
    SetPlayerAllianceStateVisionBJ(Player(14), Player(12), true)
    SetPlayerAllianceStateVisionBJ(Player(14), Player(13), true)
    SetPlayerAllianceStateVisionBJ(Player(14), Player(15), true)
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
    DefineStartLocation(0, 576.0, 128.0)
    DefineStartLocation(1, 1088.0, 128.0)
    DefineStartLocation(2, 576.0, -384.0)
    DefineStartLocation(3, 1088.0, -384.0)
    DefineStartLocation(4, -3648.0, 3200.0)
    DefineStartLocation(5, -3136.0, 3200.0)
    DefineStartLocation(6, -3648.0, 2688.0)
    DefineStartLocation(7, -3136.0, 2688.0)
    InitCustomPlayerSlots()
    InitCustomTeams()
    InitAllyPriorities()
end


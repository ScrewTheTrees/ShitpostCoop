-- ceres header start

local ceres = {
}

local __ceres_hooks = {
    ["main::before"] = {},
    ["main::after"] = {},
    ["config::before"] = {},
    ["config::after"] = {}
}

local function __ceres_hookCall(hookName)
    for _, callback in pairs(__ceres_hooks[hookName]) do
        callback()
    end
end

local __ceres_customMain = nil
local __ceres_customConfig = nil

local function __ceresMain()
    __ceres_hookCall("main::before")
    if __ceres_customMain ~= nil then
        __ceres_customMain()
    else
        ceres.__oldMain()
    end
    __ceres_hookCall("main::after")
end

local function __ceresConfig()
    __ceres_hookCall("config::before")
    if __ceres_customConfig ~= nil then
        __ceres_customConfig()
    else
        ceres.__oldConfig()
    end
    __ceres_hookCall("config::after")
end

function ceres.addHook(hookName, callback)
    table.insert(__ceres_hooks[hookName], ceres.wrapCatch(callback))
end

function ceres.setMain(callback)
    __ceres_customMain = callback
end

function ceres.setConfig(callback)
    __ceres_customConfig = callback
end

function ceres.catch(callback, ...)
    local success, err = pcall(callback, ...)

    if not success then
        print(err)
    end
end

function ceres.wrapCatch(callback)
    return function(...)
        ceres.catch(callback, ...)
    end
end

local __modules = {}

require = function(name)
    local module = __modules[name]

    if module ~= nil then
        if module.initialized then
            return module.cached
        else
            module.initialized = true
            module.cached = module.loader()
            return module.cached
        end
    else
        error("module not found")
    end
end

-- ceres header end
function InitGlobals()
end

function CreateBuildingsForPlayer1()
    local p = Player(1)
    local u
    local unitID
    local t
    local life
    u = CreateUnit(p, FourCC("htow"), -18688.0, 27776.0, 270.000)
end

function CreateNeutralHostile()
    local p = Player(PLAYER_NEUTRAL_AGGRESSIVE)
    local u
    local unitID
    local t
    local life
    u = CreateUnit(p, FourCC("nmrl"), -19340.3, 25763.1, 197.694)
    SetUnitAcquireRange(u, 200.0)
    u = CreateUnit(p, FourCC("nmrl"), -19322.9, 25504.1, 154.312)
    SetUnitAcquireRange(u, 200.0)
    u = CreateUnit(p, FourCC("nmrm"), -19201.0, 25644.8, 177.670)
    SetUnitAcquireRange(u, 200.0)
    u = CreateUnit(p, FourCC("nmrl"), -28132.4, 25844.4, 342.306)
    SetUnitAcquireRange(u, 200.0)
    u = CreateUnit(p, FourCC("nmrl"), -28149.8, 25585.4, 25.688)
    SetUnitAcquireRange(u, 200.0)
    u = CreateUnit(p, FourCC("nmrm"), -28271.7, 25726.1, 2.330)
    SetUnitAcquireRange(u, 200.0)
    u = CreateUnit(p, FourCC("nfsh"), -25084.8, 27234.1, 182.500)
    SetUnitAcquireRange(u, 200.0)
    u = CreateUnit(p, FourCC("nftb"), -25056.2, 26983.8, 169.220)
    SetUnitAcquireRange(u, 200.0)
    u = CreateUnit(p, FourCC("nftt"), -25211.5, 27131.7, 176.470)
    SetUnitAcquireRange(u, 200.0)
    u = CreateUnit(p, FourCC("nftr"), -25247.3, 27370.9, 191.672)
    SetUnitAcquireRange(u, 200.0)
    u = CreateUnit(p, FourCC("nftr"), -25261.6, 26897.0, 161.467)
    SetUnitAcquireRange(u, 200.0)
    u = CreateUnit(p, FourCC("nfsh"), -22609.7, 27269.6, 357.500)
    SetUnitAcquireRange(u, 200.0)
    u = CreateUnit(p, FourCC("nftb"), -22638.3, 27019.3, 10.780)
    SetUnitAcquireRange(u, 200.0)
    u = CreateUnit(p, FourCC("nftt"), -22483.0, 27167.3, 3.530)
    SetUnitAcquireRange(u, 200.0)
    u = CreateUnit(p, FourCC("nftr"), -22447.2, 27406.5, 348.328)
    SetUnitAcquireRange(u, 200.0)
    u = CreateUnit(p, FourCC("nftr"), -22432.9, 26932.6, 18.533)
    SetUnitAcquireRange(u, 200.0)
    u = CreateUnit(p, FourCC("nrwm"), -23881.1, 26208.7, 272.140)
    SetUnitAcquireRange(u, 200.0)
    u = CreateUnit(p, FourCC("nogm"), -24031.9, 25970.8, 287.220)
    SetUnitAcquireRange(u, 200.0)
    u = CreateUnit(p, FourCC("nomg"), -23710.7, 26129.3, 259.379)
    SetUnitAcquireRange(u, 200.0)
    u = CreateUnit(p, FourCC("ngnv"), -23804.2, 28338.5, 90.833)
    u = CreateUnit(p, FourCC("ngnw"), -23656.4, 28228.9, 107.492)
    u = CreateUnit(p, FourCC("ngns"), -23918.1, 28216.0, 114.118)
    u = CreateUnit(p, FourCC("ngna"), -23997.6, 28355.8, 82.109)
end

function CreateNeutralPassiveBuildings()
    local p = Player(PLAYER_NEUTRAL_PASSIVE)
    local u
    local unitID
    local t
    local life
    u = CreateUnit(p, FourCC("ngol"), -28608.0, 27456.0, 270.000)
    SetResourceAmount(u, 12500)
    u = CreateUnit(p, FourCC("ngol"), -18240.0, 27136.0, 270.000)
    SetResourceAmount(u, 12500)
    u = CreateUnit(p, FourCC("ngol"), -18304.0, 13952.0, 270.000)
    SetResourceAmount(u, 12500)
    u = CreateUnit(p, FourCC("ngol"), -28608.0, 20864.0, 270.000)
    SetResourceAmount(u, 12500)
    u = CreateUnit(p, FourCC("ngol"), -18240.0, 20544.0, 270.000)
    SetResourceAmount(u, 12500)
    u = CreateUnit(p, FourCC("ngol"), -28672.0, 14272.0, 270.000)
    SetResourceAmount(u, 12500)
    u = CreateUnit(p, FourCC("ngol"), -18304.0, 7232.0, 270.000)
    SetResourceAmount(u, 12500)
    u = CreateUnit(p, FourCC("ngol"), -28672.0, 7552.0, 270.000)
    SetResourceAmount(u, 12500)
    u = CreateUnit(p, FourCC("ngol"), -18304.0, 128.0, 270.000)
    SetResourceAmount(u, 12500)
    u = CreateUnit(p, FourCC("ngol"), -28672.0, 448.0, 270.000)
    SetResourceAmount(u, 12500)
    u = CreateUnit(p, FourCC("ngol"), -18240.0, -6400.0, 270.000)
    SetResourceAmount(u, 12500)
    u = CreateUnit(p, FourCC("ngol"), -28608.0, -6080.0, 270.000)
    SetResourceAmount(u, 12500)
    u = CreateUnit(p, FourCC("ngol"), -23808.0, 27968.0, 270.000)
    SetResourceAmount(u, 12500)
end

function CreatePlayerBuildings()
    CreateBuildingsForPlayer1()
end

function CreatePlayerUnits()
end

function CreateAllUnits()
    CreateNeutralPassiveBuildings()
    CreatePlayerBuildings()
    CreateNeutralHostile()
    CreatePlayerUnits()
end

function InitCustomPlayerSlots()
    SetPlayerStartLocation(Player(0), 0)
    ForcePlayerStartLocation(Player(0), 0)
    SetPlayerColor(Player(0), ConvertPlayerColor(0))
    SetPlayerRacePreference(Player(0), RACE_PREF_NIGHTELF)
    SetPlayerRaceSelectable(Player(0), false)
    SetPlayerController(Player(0), MAP_CONTROL_USER)
    SetPlayerStartLocation(Player(1), 1)
    ForcePlayerStartLocation(Player(1), 1)
    SetPlayerColor(Player(1), ConvertPlayerColor(1))
    SetPlayerRacePreference(Player(1), RACE_PREF_NIGHTELF)
    SetPlayerRaceSelectable(Player(1), false)
    SetPlayerController(Player(1), MAP_CONTROL_COMPUTER)
    SetPlayerStartLocation(Player(2), 2)
    ForcePlayerStartLocation(Player(2), 2)
    SetPlayerColor(Player(2), ConvertPlayerColor(2))
    SetPlayerRacePreference(Player(2), RACE_PREF_NIGHTELF)
    SetPlayerRaceSelectable(Player(2), false)
    SetPlayerController(Player(2), MAP_CONTROL_USER)
    SetPlayerStartLocation(Player(3), 3)
    ForcePlayerStartLocation(Player(3), 3)
    SetPlayerColor(Player(3), ConvertPlayerColor(3))
    SetPlayerRacePreference(Player(3), RACE_PREF_NIGHTELF)
    SetPlayerRaceSelectable(Player(3), false)
    SetPlayerController(Player(3), MAP_CONTROL_COMPUTER)
    SetPlayerStartLocation(Player(4), 4)
    ForcePlayerStartLocation(Player(4), 4)
    SetPlayerColor(Player(4), ConvertPlayerColor(4))
    SetPlayerRacePreference(Player(4), RACE_PREF_NIGHTELF)
    SetPlayerRaceSelectable(Player(4), false)
    SetPlayerController(Player(4), MAP_CONTROL_USER)
    SetPlayerStartLocation(Player(5), 5)
    ForcePlayerStartLocation(Player(5), 5)
    SetPlayerColor(Player(5), ConvertPlayerColor(5))
    SetPlayerRacePreference(Player(5), RACE_PREF_NIGHTELF)
    SetPlayerRaceSelectable(Player(5), false)
    SetPlayerController(Player(5), MAP_CONTROL_COMPUTER)
    SetPlayerStartLocation(Player(6), 6)
    ForcePlayerStartLocation(Player(6), 6)
    SetPlayerColor(Player(6), ConvertPlayerColor(6))
    SetPlayerRacePreference(Player(6), RACE_PREF_NIGHTELF)
    SetPlayerRaceSelectable(Player(6), false)
    SetPlayerController(Player(6), MAP_CONTROL_USER)
    SetPlayerStartLocation(Player(7), 7)
    ForcePlayerStartLocation(Player(7), 7)
    SetPlayerColor(Player(7), ConvertPlayerColor(7))
    SetPlayerRacePreference(Player(7), RACE_PREF_NIGHTELF)
    SetPlayerRaceSelectable(Player(7), false)
    SetPlayerController(Player(7), MAP_CONTROL_COMPUTER)
    SetPlayerStartLocation(Player(8), 8)
    ForcePlayerStartLocation(Player(8), 8)
    SetPlayerColor(Player(8), ConvertPlayerColor(8))
    SetPlayerRacePreference(Player(8), RACE_PREF_NIGHTELF)
    SetPlayerRaceSelectable(Player(8), false)
    SetPlayerController(Player(8), MAP_CONTROL_USER)
    SetPlayerStartLocation(Player(9), 9)
    ForcePlayerStartLocation(Player(9), 9)
    SetPlayerColor(Player(9), ConvertPlayerColor(9))
    SetPlayerRacePreference(Player(9), RACE_PREF_NIGHTELF)
    SetPlayerRaceSelectable(Player(9), false)
    SetPlayerController(Player(9), MAP_CONTROL_COMPUTER)
    SetPlayerStartLocation(Player(10), 10)
    ForcePlayerStartLocation(Player(10), 10)
    SetPlayerColor(Player(10), ConvertPlayerColor(10))
    SetPlayerRacePreference(Player(10), RACE_PREF_NIGHTELF)
    SetPlayerRaceSelectable(Player(10), false)
    SetPlayerController(Player(10), MAP_CONTROL_USER)
    SetPlayerStartLocation(Player(11), 11)
    ForcePlayerStartLocation(Player(11), 11)
    SetPlayerColor(Player(11), ConvertPlayerColor(11))
    SetPlayerRacePreference(Player(11), RACE_PREF_NIGHTELF)
    SetPlayerRaceSelectable(Player(11), false)
    SetPlayerController(Player(11), MAP_CONTROL_COMPUTER)
end

function InitCustomTeams()
    SetPlayerTeam(Player(0), 0)
    SetPlayerTeam(Player(1), 0)
    SetPlayerTeam(Player(2), 0)
    SetPlayerTeam(Player(3), 0)
    SetPlayerTeam(Player(4), 0)
    SetPlayerTeam(Player(5), 0)
    SetPlayerTeam(Player(6), 0)
    SetPlayerTeam(Player(7), 0)
    SetPlayerTeam(Player(8), 0)
    SetPlayerTeam(Player(9), 0)
    SetPlayerTeam(Player(10), 0)
    SetPlayerTeam(Player(11), 0)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(4), true)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(5), true)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(6), true)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(7), true)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(8), true)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(9), true)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(10), true)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(11), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(4), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(5), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(6), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(7), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(8), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(9), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(10), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(11), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(4), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(5), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(6), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(7), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(8), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(9), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(10), true)
    SetPlayerAllianceStateAllyBJ(Player(2), Player(11), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(4), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(5), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(6), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(7), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(8), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(9), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(10), true)
    SetPlayerAllianceStateAllyBJ(Player(3), Player(11), true)
    SetPlayerAllianceStateAllyBJ(Player(4), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(4), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(4), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(4), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(4), Player(5), true)
    SetPlayerAllianceStateAllyBJ(Player(4), Player(6), true)
    SetPlayerAllianceStateAllyBJ(Player(4), Player(7), true)
    SetPlayerAllianceStateAllyBJ(Player(4), Player(8), true)
    SetPlayerAllianceStateAllyBJ(Player(4), Player(9), true)
    SetPlayerAllianceStateAllyBJ(Player(4), Player(10), true)
    SetPlayerAllianceStateAllyBJ(Player(4), Player(11), true)
    SetPlayerAllianceStateAllyBJ(Player(5), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(5), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(5), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(5), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(5), Player(4), true)
    SetPlayerAllianceStateAllyBJ(Player(5), Player(6), true)
    SetPlayerAllianceStateAllyBJ(Player(5), Player(7), true)
    SetPlayerAllianceStateAllyBJ(Player(5), Player(8), true)
    SetPlayerAllianceStateAllyBJ(Player(5), Player(9), true)
    SetPlayerAllianceStateAllyBJ(Player(5), Player(10), true)
    SetPlayerAllianceStateAllyBJ(Player(5), Player(11), true)
    SetPlayerAllianceStateAllyBJ(Player(6), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(6), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(6), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(6), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(6), Player(4), true)
    SetPlayerAllianceStateAllyBJ(Player(6), Player(5), true)
    SetPlayerAllianceStateAllyBJ(Player(6), Player(7), true)
    SetPlayerAllianceStateAllyBJ(Player(6), Player(8), true)
    SetPlayerAllianceStateAllyBJ(Player(6), Player(9), true)
    SetPlayerAllianceStateAllyBJ(Player(6), Player(10), true)
    SetPlayerAllianceStateAllyBJ(Player(6), Player(11), true)
    SetPlayerAllianceStateAllyBJ(Player(7), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(7), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(7), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(7), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(7), Player(4), true)
    SetPlayerAllianceStateAllyBJ(Player(7), Player(5), true)
    SetPlayerAllianceStateAllyBJ(Player(7), Player(6), true)
    SetPlayerAllianceStateAllyBJ(Player(7), Player(8), true)
    SetPlayerAllianceStateAllyBJ(Player(7), Player(9), true)
    SetPlayerAllianceStateAllyBJ(Player(7), Player(10), true)
    SetPlayerAllianceStateAllyBJ(Player(7), Player(11), true)
    SetPlayerAllianceStateAllyBJ(Player(8), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(8), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(8), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(8), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(8), Player(4), true)
    SetPlayerAllianceStateAllyBJ(Player(8), Player(5), true)
    SetPlayerAllianceStateAllyBJ(Player(8), Player(6), true)
    SetPlayerAllianceStateAllyBJ(Player(8), Player(7), true)
    SetPlayerAllianceStateAllyBJ(Player(8), Player(9), true)
    SetPlayerAllianceStateAllyBJ(Player(8), Player(10), true)
    SetPlayerAllianceStateAllyBJ(Player(8), Player(11), true)
    SetPlayerAllianceStateAllyBJ(Player(9), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(9), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(9), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(9), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(9), Player(4), true)
    SetPlayerAllianceStateAllyBJ(Player(9), Player(5), true)
    SetPlayerAllianceStateAllyBJ(Player(9), Player(6), true)
    SetPlayerAllianceStateAllyBJ(Player(9), Player(7), true)
    SetPlayerAllianceStateAllyBJ(Player(9), Player(8), true)
    SetPlayerAllianceStateAllyBJ(Player(9), Player(10), true)
    SetPlayerAllianceStateAllyBJ(Player(9), Player(11), true)
    SetPlayerAllianceStateAllyBJ(Player(10), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(10), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(10), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(10), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(10), Player(4), true)
    SetPlayerAllianceStateAllyBJ(Player(10), Player(5), true)
    SetPlayerAllianceStateAllyBJ(Player(10), Player(6), true)
    SetPlayerAllianceStateAllyBJ(Player(10), Player(7), true)
    SetPlayerAllianceStateAllyBJ(Player(10), Player(8), true)
    SetPlayerAllianceStateAllyBJ(Player(10), Player(9), true)
    SetPlayerAllianceStateAllyBJ(Player(10), Player(11), true)
    SetPlayerAllianceStateAllyBJ(Player(11), Player(0), true)
    SetPlayerAllianceStateAllyBJ(Player(11), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(11), Player(2), true)
    SetPlayerAllianceStateAllyBJ(Player(11), Player(3), true)
    SetPlayerAllianceStateAllyBJ(Player(11), Player(4), true)
    SetPlayerAllianceStateAllyBJ(Player(11), Player(5), true)
    SetPlayerAllianceStateAllyBJ(Player(11), Player(6), true)
    SetPlayerAllianceStateAllyBJ(Player(11), Player(7), true)
    SetPlayerAllianceStateAllyBJ(Player(11), Player(8), true)
    SetPlayerAllianceStateAllyBJ(Player(11), Player(9), true)
    SetPlayerAllianceStateAllyBJ(Player(11), Player(10), true)
end

function InitAllyPriorities()
    SetStartLocPrioCount(0, 1)
    SetStartLocPrio(0, 0, 2, MAP_LOC_PRIO_HIGH)
    SetStartLocPrioCount(1, 1)
    SetStartLocPrioCount(2, 2)
    SetStartLocPrio(2, 0, 0, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(2, 1, 4, MAP_LOC_PRIO_HIGH)
    SetStartLocPrioCount(3, 11)
    SetStartLocPrio(3, 0, 0, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(3, 1, 1, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(3, 2, 2, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(3, 3, 5, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(3, 4, 6, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(3, 5, 7, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(3, 6, 8, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(3, 7, 9, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(3, 8, 10, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(3, 9, 11, MAP_LOC_PRIO_LOW)
    SetStartLocPrioCount(4, 2)
    SetStartLocPrio(4, 0, 2, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(4, 1, 6, MAP_LOC_PRIO_HIGH)
    SetStartLocPrioCount(5, 8)
    SetStartLocPrio(5, 0, 1, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(5, 1, 2, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(5, 2, 3, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(5, 3, 4, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(5, 4, 6, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(5, 5, 7, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(5, 6, 8, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(5, 7, 9, MAP_LOC_PRIO_LOW)
    SetStartLocPrioCount(6, 2)
    SetStartLocPrio(6, 0, 4, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(6, 1, 8, MAP_LOC_PRIO_HIGH)
    SetStartLocPrioCount(7, 7)
    SetStartLocPrio(7, 0, 0, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(7, 1, 2, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(7, 2, 4, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(7, 3, 5, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(7, 4, 8, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(7, 5, 9, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(7, 6, 11, MAP_LOC_PRIO_HIGH)
    SetStartLocPrioCount(8, 2)
    SetStartLocPrio(8, 0, 6, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(8, 1, 10, MAP_LOC_PRIO_HIGH)
    SetStartLocPrioCount(9, 8)
    SetStartLocPrio(9, 0, 0, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(9, 1, 3, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(9, 2, 5, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(9, 3, 6, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(9, 4, 7, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(9, 5, 8, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(9, 6, 11, MAP_LOC_PRIO_LOW)
    SetStartLocPrioCount(10, 1)
    SetStartLocPrio(10, 0, 8, MAP_LOC_PRIO_HIGH)
    SetStartLocPrioCount(11, 10)
    SetStartLocPrio(11, 0, 0, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(11, 1, 1, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(11, 2, 2, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(11, 3, 3, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(11, 4, 4, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(11, 5, 6, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(11, 6, 7, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(11, 7, 9, MAP_LOC_PRIO_LOW)
    SetStartLocPrio(11, 8, 10, MAP_LOC_PRIO_LOW)
end

function main()
    SetCameraBounds(-29952.0 + GetCameraMargin(CAMERA_MARGIN_LEFT), -30208.0 + GetCameraMargin(CAMERA_MARGIN_BOTTOM), 29952.0 - GetCameraMargin(CAMERA_MARGIN_RIGHT), 29696.0 - GetCameraMargin(CAMERA_MARGIN_TOP), -29952.0 + GetCameraMargin(CAMERA_MARGIN_LEFT), 29696.0 - GetCameraMargin(CAMERA_MARGIN_TOP), 29952.0 - GetCameraMargin(CAMERA_MARGIN_RIGHT), -30208.0 + GetCameraMargin(CAMERA_MARGIN_BOTTOM))
    SetDayNightModels("Environment\\DNC\\DNCLordaeron\\DNCLordaeronTerrain\\DNCLordaeronTerrain.mdl", "Environment\\DNC\\DNCLordaeron\\DNCLordaeronUnit\\DNCLordaeronUnit.mdl")
    NewSoundEnvironment("Default")
    SetAmbientDaySound("LordaeronSummerDay")
    SetAmbientNightSound("LordaeronSummerNight")
    SetMapMusic("Music", true, 0)
    CreateAllUnits()
    InitBlizzard()
    InitGlobals()
end

function config()
    SetMapName("TRIGSTR_015")
    SetMapDescription("TRIGSTR_017")
    SetPlayers(12)
    SetTeams(12)
    SetGamePlacement(MAP_PLACEMENT_TEAMS_TOGETHER)
    DefineStartLocation(0, -27840.0, 27456.0)
    DefineStartLocation(1, -19008.0, 27136.0)
    DefineStartLocation(2, -27840.0, 20800.0)
    DefineStartLocation(3, -19008.0, 20544.0)
    DefineStartLocation(4, -27904.0, 14208.0)
    DefineStartLocation(5, -19072.0, 13888.0)
    DefineStartLocation(6, -27904.0, 7488.0)
    DefineStartLocation(7, -19072.0, 7232.0)
    DefineStartLocation(8, -27904.0, 384.0)
    DefineStartLocation(9, -19072.0, 64.0)
    DefineStartLocation(10, -27840.0, -6144.0)
    DefineStartLocation(11, -19008.0, -6400.0)
    InitCustomPlayerSlots()
    InitCustomTeams()
    InitAllyPriorities()
end


local function __module_0()
    local ____exports = {}
    ____exports.Constants = {}
    local Constants = ____exports.Constants
    Constants.name = "Constants"
    Constants.__index = Constants
    Constants.prototype = {}
    Constants.prototype.__index = Constants.prototype
    Constants.prototype.constructor = Constants
    function Constants.new(...)
        local self = setmetatable({}, Constants.prototype)
        self:____constructor(...)
        return self
    end
    function Constants.prototype.____constructor(self)
    end
    Constants.MaxPlayerSlots = 11
    return ____exports
    
end
__modules["war3map.Constants"] = {initialized = false, cached = nil, loader = __module_0}
local function __module_1()
    local ____exports = {}
    local __TSTL_Constants = require("war3map.Constants")
    local Constants = __TSTL_Constants.Constants
    ____exports.Game = {}
    local Game = ____exports.Game
    Game.name = "Game"
    Game.__index = Game
    Game.prototype = {}
    Game.prototype.__index = Game.prototype
    Game.prototype.constructor = Game
    function Game.new(...)
        local self = setmetatable({}, Game.prototype)
        self:____constructor(...)
        return self
    end
    function Game.prototype.____constructor(self)
        MeleeStartingResources()
        MeleeStartingHeroLimit()
        MeleeGrantHeroItems()
        MeleeClearExcessUnits()
        do
            local i = 0
            while i <= Constants.MaxPlayerSlots do
                MeleeStartingUnitsForPlayer(RACE_NIGHTELF, Player(i), GetPlayerStartLocationLoc(Player(i)), true)
                if i % 2 == 1 then
                    print(i + 1)
                    StartMeleeAI(Player(i), "war3mapImported/ai/triggerAi.ai")
                end
                i = i + 1
            end
        end
    end
    return ____exports
    
end
__modules["war3map.Game"] = {initialized = false, cached = nil, loader = __module_1}
local function __module_2()
    local __TSTL_Game = require("war3map.Game")
    local Game = __TSTL_Game.Game
    local gg_trg_Start
    local gameInstance
    function MapStart(self)
        xpcall(function()
            gameInstance = Game.new()
        end, print)
        DestroyTrigger(gg_trg_Start)
    end
    function NewMain(self)
        gg_trg_Start = CreateTrigger()
        TriggerRegisterTimerEvent(gg_trg_Start, 0, false)
        TriggerAddAction(gg_trg_Start, function() return MapStart(nil) end)
    end
    ceres.addHook("main::after", NewMain)
    
end
__modules["main"] = {initialized = false, cached = nil, loader = __module_2}

-- ceres post-script start

ceres.__oldMain = main
ceres.__oldConfig = config

function main()
    __ceresMain()
end

function config()
    __ceresConfig()
end

ceres.catch(require("main"))

-- ceres post-script end

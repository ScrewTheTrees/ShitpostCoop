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
gg_trg_Melee_Initialization = nil
function InitGlobals()
end

function CreateUnitsForPlayer0()
    local p = Player(0)
    local u
    local unitID
    local t
    local life
    u = CreateUnit(p, FourCC("hdhw"), -60.4, -1222.0, 112.459)
end

function CreatePlayerBuildings()
end

function CreatePlayerUnits()
    CreateUnitsForPlayer0()
end

function CreateAllUnits()
    CreatePlayerBuildings()
    CreatePlayerUnits()
end

function Trig_Melee_Initialization_Actions()
    MeleeStartingVisibility()
    MeleeStartingHeroLimit()
    MeleeGrantHeroItems()
    MeleeStartingResources()
    MeleeClearExcessUnits()
    MeleeStartingUnits()
    MeleeStartingAI()
    MeleeInitVictoryDefeat()
end

function InitTrig_Melee_Initialization()
    gg_trg_Melee_Initialization = CreateTrigger()
    TriggerAddAction(gg_trg_Melee_Initialization, Trig_Melee_Initialization_Actions)
end

function InitCustomTriggers()
    InitTrig_Melee_Initialization()
end

function RunInitializationTriggers()
    ConditionalTriggerExecute(gg_trg_Melee_Initialization)
end

function InitCustomPlayerSlots()
    SetPlayerStartLocation(Player(0), 0)
    SetPlayerColor(Player(0), ConvertPlayerColor(0))
    SetPlayerRacePreference(Player(0), RACE_PREF_HUMAN)
    SetPlayerRaceSelectable(Player(0), true)
    SetPlayerController(Player(0), MAP_CONTROL_USER)
end

function InitCustomTeams()
    SetPlayerTeam(Player(0), 0)
end

function main()
    SetCameraBounds(-7424.0 + GetCameraMargin(CAMERA_MARGIN_LEFT), -7680.0 + GetCameraMargin(CAMERA_MARGIN_BOTTOM), 7424.0 - GetCameraMargin(CAMERA_MARGIN_RIGHT), 7168.0 - GetCameraMargin(CAMERA_MARGIN_TOP), -7424.0 + GetCameraMargin(CAMERA_MARGIN_LEFT), 7168.0 - GetCameraMargin(CAMERA_MARGIN_TOP), 7424.0 - GetCameraMargin(CAMERA_MARGIN_RIGHT), -7680.0 + GetCameraMargin(CAMERA_MARGIN_BOTTOM))
    SetDayNightModels("Environment\\DNC\\DNCLordaeron\\DNCLordaeronTerrain\\DNCLordaeronTerrain.mdl", "Environment\\DNC\\DNCLordaeron\\DNCLordaeronUnit\\DNCLordaeronUnit.mdl")
    NewSoundEnvironment("Default")
    SetAmbientDaySound("LordaeronSummerDay")
    SetAmbientNightSound("LordaeronSummerNight")
    SetMapMusic("Music", true, 0)
    CreateAllUnits()
    InitBlizzard()
    InitGlobals()
    InitCustomTriggers()
    RunInitializationTriggers()
end

function config()
    SetMapName("TRIGSTR_003")
    SetMapDescription("TRIGSTR_005")
    SetPlayers(1)
    SetTeams(1)
    SetGamePlacement(MAP_PLACEMENT_USE_MAP_SETTINGS)
    DefineStartLocation(0, 5760.0, -4096.0)
    InitCustomPlayerSlots()
    SetPlayerSlotAvailable(Player(0), MAP_CONTROL_USER)
    InitGenericPlayerSlots()
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

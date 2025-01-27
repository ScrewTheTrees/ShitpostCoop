/** @noSelfInFile **/

declare interface agent extends handle { __agent: never; }
declare interface event extends agent { __event: never; }
declare interface player extends agent { __player: never; }
declare interface widget extends agent { __widget: never; }
declare interface unit extends widget { __unit: never; }
declare interface destructable extends widget { __destructable: never; }
declare interface item extends widget { __item: never; }
declare interface ability extends agent { __ability: never; }
declare interface buff extends ability { __buff: never; }
declare interface force extends agent { __force: never; }
declare interface group extends agent { __group: never; }
declare interface trigger extends agent { __trigger: never; }
declare interface triggercondition extends agent { __triggercondition: never; }
declare interface triggeraction extends handle { __triggeraction: never; }
declare interface timer extends agent { __timer: never; }
declare interface location extends agent { __location: never; }
declare interface region extends agent { __region: never; }
declare interface rect extends agent { __rect: never; }
declare interface boolexpr extends agent { __boolexpr: never; }
declare interface sound extends agent { __sound: never; }
declare interface conditionfunc extends boolexpr { __conditionfunc: never; }
declare interface filterfunc extends boolexpr { __filterfunc: never; }
declare interface unitpool extends handle { __unitpool: never; }
declare interface itempool extends handle { __itempool: never; }
declare interface race extends handle { __race: never; }
declare interface alliancetype extends handle { __alliancetype: never; }
declare interface racepreference extends handle { __racepreference: never; }
declare interface gamestate extends handle { __gamestate: never; }
declare interface igamestate extends gamestate { __igamestate: never; }
declare interface fgamestate extends gamestate { __fgamestate: never; }
declare interface playerstate extends handle { __playerstate: never; }
declare interface playerscore extends handle { __playerscore: never; }
declare interface playergameresult extends handle { __playergameresult: never; }
declare interface unitstate extends handle { __unitstate: never; }
declare interface aidifficulty extends handle { __aidifficulty: never; }
declare interface eventid extends handle { __eventid: never; }
declare interface gameevent extends eventid { __gameevent: never; }
declare interface playerevent extends eventid { __playerevent: never; }
declare interface playerunitevent extends eventid { __playerunitevent: never; }
declare interface unitevent extends eventid { __unitevent: never; }
declare interface limitop extends eventid { __limitop: never; }
declare interface widgetevent extends eventid { __widgetevent: never; }
declare interface dialogevent extends eventid { __dialogevent: never; }
declare interface unittype extends handle { __unittype: never; }
declare interface gamespeed extends handle { __gamespeed: never; }
declare interface gamedifficulty extends handle { __gamedifficulty: never; }
declare interface gametype extends handle { __gametype: never; }
declare interface mapflag extends handle { __mapflag: never; }
declare interface mapvisibility extends handle { __mapvisibility: never; }
declare interface mapsetting extends handle { __mapsetting: never; }
declare interface mapdensity extends handle { __mapdensity: never; }
declare interface mapcontrol extends handle { __mapcontrol: never; }
declare interface playerslotstate extends handle { __playerslotstate: never; }
declare interface volumegroup extends handle { __volumegroup: never; }
declare interface camerafield extends handle { __camerafield: never; }
declare interface camerasetup extends handle { __camerasetup: never; }
declare interface playercolor extends handle { __playercolor: never; }
declare interface placement extends handle { __placement: never; }
declare interface startlocprio extends handle { __startlocprio: never; }
declare interface raritycontrol extends handle { __raritycontrol: never; }
declare interface blendmode extends handle { __blendmode: never; }
declare interface texmapflags extends handle { __texmapflags: never; }
declare interface effect extends agent { __effect: never; }
declare interface effecttype extends handle { __effecttype: never; }
declare interface weathereffect extends handle { __weathereffect: never; }
declare interface terraindeformation extends handle { __terraindeformation: never; }
declare interface fogstate extends handle { __fogstate: never; }
declare interface fogmodifier extends agent { __fogmodifier: never; }
declare interface dialog extends agent { __dialog: never; }
declare interface button extends agent { __button: never; }
declare interface quest extends agent { __quest: never; }
declare interface questitem extends agent { __questitem: never; }
declare interface defeatcondition extends agent { __defeatcondition: never; }
declare interface timerdialog extends agent { __timerdialog: never; }
declare interface leaderboard extends agent { __leaderboard: never; }
declare interface multiboard extends agent { __multiboard: never; }
declare interface multiboarditem extends agent { __multiboarditem: never; }
declare interface trackable extends agent { __trackable: never; }
declare interface gamecache extends agent { __gamecache: never; }
declare interface version extends handle { __version: never; }
declare interface itemtype extends handle { __itemtype: never; }
declare interface texttag extends handle { __texttag: never; }
declare interface attacktype extends handle { __attacktype: never; }
declare interface damagetype extends handle { __damagetype: never; }
declare interface weapontype extends handle { __weapontype: never; }
declare interface soundtype extends handle { __soundtype: never; }
declare interface lightning extends handle { __lightning: never; }
declare interface pathingtype extends handle { __pathingtype: never; }
declare interface mousebuttontype extends handle { __mousebuttontype: never; }
declare interface animtype extends handle { __animtype: never; }
declare interface subanimtype extends handle { __subanimtype: never; }
declare interface image extends handle { __image: never; }
declare interface ubersplat extends handle { __ubersplat: never; }
declare interface hashtable extends agent { __hashtable: never; }
declare interface framehandle extends handle { __framehandle: never; }
declare interface originframetype extends handle { __originframetype: never; }
declare interface framepointtype extends handle { __framepointtype: never; }
declare interface textaligntype extends handle { __textaligntype: never; }
declare interface frameeventtype extends handle { __frameeventtype: never; }
declare interface oskeytype extends handle { __oskeytype: never; }
declare interface abilityintegerfield extends handle { __abilityintegerfield: never; }
declare interface abilityrealfield extends handle { __abilityrealfield: never; }
declare interface abilitybooleanfield extends handle { __abilitybooleanfield: never; }
declare interface abilitystringfield extends handle { __abilitystringfield: never; }
declare interface abilityintegerlevelfield extends handle { __abilityintegerlevelfield: never; }
declare interface abilityreallevelfield extends handle { __abilityreallevelfield: never; }
declare interface abilitybooleanlevelfield extends handle { __abilitybooleanlevelfield: never; }
declare interface abilitystringlevelfield extends handle { __abilitystringlevelfield: never; }
declare interface abilityintegerlevelarrayfield extends handle { __abilityintegerlevelarrayfield: never; }
declare interface abilityreallevelarrayfield extends handle { __abilityreallevelarrayfield: never; }
declare interface abilitybooleanlevelarrayfield extends handle { __abilitybooleanlevelarrayfield: never; }
declare interface abilitystringlevelarrayfield extends handle { __abilitystringlevelarrayfield: never; }
declare interface unitintegerfield extends handle { __unitintegerfield: never; }
declare interface unitrealfield extends handle { __unitrealfield: never; }
declare interface unitbooleanfield extends handle { __unitbooleanfield: never; }
declare interface unitstringfield extends handle { __unitstringfield: never; }
declare interface unitweaponintegerfield extends handle { __unitweaponintegerfield: never; }
declare interface unitweaponrealfield extends handle { __unitweaponrealfield: never; }
declare interface unitweaponbooleanfield extends handle { __unitweaponbooleanfield: never; }
declare interface unitweaponstringfield extends handle { __unitweaponstringfield: never; }
declare interface itemintegerfield extends handle { __itemintegerfield: never; }
declare interface itemrealfield extends handle { __itemrealfield: never; }
declare interface itembooleanfield extends handle { __itembooleanfield: never; }
declare interface itemstringfield extends handle { __itemstringfield: never; }
declare interface movetype extends handle { __movetype: never; }
declare interface targetflag extends handle { __targetflag: never; }
declare interface armortype extends handle { __armortype: never; }
declare interface heroattribute extends handle { __heroattribute: never; }
declare interface defensetype extends handle { __defensetype: never; }
declare interface regentype extends handle { __regentype: never; }
declare interface unitcategory extends handle { __unitcategory: never; }
declare interface pathingflag extends handle { __pathingflag: never; }

declare function ConvertRace(i: number): race
declare function ConvertAllianceType(i: number): alliancetype
declare function ConvertRacePref(i: number): racepreference
declare function ConvertIGameState(i: number): igamestate
declare function ConvertFGameState(i: number): fgamestate
declare function ConvertPlayerState(i: number): playerstate
declare function ConvertPlayerScore(i: number): playerscore
declare function ConvertPlayerGameResult(i: number): playergameresult
declare function ConvertUnitState(i: number): unitstate
declare function ConvertAIDifficulty(i: number): aidifficulty
declare function ConvertGameEvent(i: number): gameevent
declare function ConvertPlayerEvent(i: number): playerevent
declare function ConvertPlayerUnitEvent(i: number): playerunitevent
declare function ConvertWidgetEvent(i: number): widgetevent
declare function ConvertDialogEvent(i: number): dialogevent
declare function ConvertUnitEvent(i: number): unitevent
declare function ConvertLimitOp(i: number): limitop
declare function ConvertUnitType(i: number): unittype
declare function ConvertGameSpeed(i: number): gamespeed
declare function ConvertPlacement(i: number): placement
declare function ConvertStartLocPrio(i: number): startlocprio
declare function ConvertGameDifficulty(i: number): gamedifficulty
declare function ConvertGameType(i: number): gametype
declare function ConvertMapFlag(i: number): mapflag
declare function ConvertMapVisibility(i: number): mapvisibility
declare function ConvertMapSetting(i: number): mapsetting
declare function ConvertMapDensity(i: number): mapdensity
declare function ConvertMapControl(i: number): mapcontrol
declare function ConvertPlayerColor(i: number): playercolor
declare function ConvertPlayerSlotState(i: number): playerslotstate
declare function ConvertVolumeGroup(i: number): volumegroup
declare function ConvertCameraField(i: number): camerafield
declare function ConvertBlendMode(i: number): blendmode
declare function ConvertRarityControl(i: number): raritycontrol
declare function ConvertTexMapFlags(i: number): texmapflags
declare function ConvertFogState(i: number): fogstate
declare function ConvertEffectType(i: number): effecttype
declare function ConvertVersion(i: number): version
declare function ConvertItemType(i: number): itemtype
declare function ConvertAttackType(i: number): attacktype
declare function ConvertDamageType(i: number): damagetype
declare function ConvertWeaponType(i: number): weapontype
declare function ConvertSoundType(i: number): soundtype
declare function ConvertPathingType(i: number): pathingtype
declare function ConvertMouseButtonType(i: number): mousebuttontype
declare function ConvertAnimType(i: number): animtype
declare function ConvertSubAnimType(i: number): subanimtype
declare function ConvertOriginFrameType(i: number): originframetype
declare function ConvertFramePointType(i: number): framepointtype
declare function ConvertTextAlignType(i: number): textaligntype
declare function ConvertFrameEventType(i: number): frameeventtype
declare function ConvertOsKeyType(i: number): oskeytype
declare function ConvertAbilityIntegerField(i: number): abilityintegerfield
declare function ConvertAbilityRealField(i: number): abilityrealfield
declare function ConvertAbilityBooleanField(i: number): abilitybooleanfield
declare function ConvertAbilityStringField(i: number): abilitystringfield
declare function ConvertAbilityIntegerLevelField(i: number): abilityintegerlevelfield
declare function ConvertAbilityRealLevelField(i: number): abilityreallevelfield
declare function ConvertAbilityBooleanLevelField(i: number): abilitybooleanlevelfield
declare function ConvertAbilityStringLevelField(i: number): abilitystringlevelfield
declare function ConvertAbilityIntegerLevelArrayField(i: number): abilityintegerlevelarrayfield
declare function ConvertAbilityRealLevelArrayField(i: number): abilityreallevelarrayfield
declare function ConvertAbilityBooleanLevelArrayField(i: number): abilitybooleanlevelarrayfield
declare function ConvertAbilityStringLevelArrayField(i: number): abilitystringlevelarrayfield
declare function ConvertUnitIntegerField(i: number): unitintegerfield
declare function ConvertUnitRealField(i: number): unitrealfield
declare function ConvertUnitBooleanField(i: number): unitbooleanfield
declare function ConvertUnitStringField(i: number): unitstringfield
declare function ConvertUnitWeaponIntegerField(i: number): unitweaponintegerfield
declare function ConvertUnitWeaponRealField(i: number): unitweaponrealfield
declare function ConvertUnitWeaponBooleanField(i: number): unitweaponbooleanfield
declare function ConvertUnitWeaponStringField(i: number): unitweaponstringfield
declare function ConvertItemIntegerField(i: number): itemintegerfield
declare function ConvertItemRealField(i: number): itemrealfield
declare function ConvertItemBooleanField(i: number): itembooleanfield
declare function ConvertItemStringField(i: number): itemstringfield
declare function ConvertMoveType(i: number): movetype
declare function ConvertTargetFlag(i: number): targetflag
declare function ConvertArmorType(i: number): armortype
declare function ConvertHeroAttribute(i: number): heroattribute
declare function ConvertDefenseType(i: number): defensetype
declare function ConvertRegenType(i: number): regentype
declare function ConvertUnitCategory(i: number): unitcategory
declare function ConvertPathingFlag(i: number): pathingflag
declare function OrderId(orderIdString: string): number
declare function OrderId2String(orderId: number): string
declare function UnitId(unitIdString: string): number
declare function UnitId2String(unitId: number): string
declare function AbilityId(abilityIdString: string): number
declare function AbilityId2String(abilityId: number): string
declare function GetObjectName(objectId: number): string
declare function GetBJMaxPlayers(): number
declare function GetBJPlayerNeutralVictim(): number
declare function GetBJPlayerNeutralExtra(): number
declare function GetBJMaxPlayerSlots(): number
declare function GetPlayerNeutralPassive(): number
declare function GetPlayerNeutralAggressive(): number
declare function Deg2Rad(degrees: number): number
declare function Rad2Deg(radians: number): number
declare function Sin(radians: number): number
declare function Cos(radians: number): number
declare function Tan(radians: number): number
declare function Asin(y: number): number
declare function Acos(x: number): number
declare function Atan(x: number): number
declare function Atan2(y: number, x: number): number
declare function SquareRoot(x: number): number
declare function Pow(x: number, power: number): number
declare function I2R(i: number): number
declare function R2I(r: number): number
declare function I2S(i: number): string
declare function R2S(r: number): string
declare function R2SW(r: number, width: number, precision: number): string
declare function S2I(s: string): number
declare function S2R(s: string): number
declare function GetHandleId(h: handle): number
declare function SubString(source: string, start: number, end: number): string
declare function StringLength(s: string): number
declare function StringCase(source: string, upper: boolean): string
declare function StringHash(s: string): number
declare function GetLocalizedString(source: string): string
declare function GetLocalizedHotkey(source: string): number
declare function SetMapName(name: string): void
declare function SetMapDescription(description: string): void
declare function SetTeams(teamcount: number): void
declare function SetPlayers(playercount: number): void
declare function DefineStartLocation(whichStartLoc: number, x: number, y: number): void
declare function DefineStartLocationLoc(whichStartLoc: number, whichLocation: location): void
declare function SetStartLocPrioCount(whichStartLoc: number, prioSlotCount: number): void
declare function SetStartLocPrio(whichStartLoc: number, prioSlotIndex: number, otherStartLocIndex: number, priority: startlocprio): void
declare function GetStartLocPrioSlot(whichStartLoc: number, prioSlotIndex: number): number
declare function GetStartLocPrio(whichStartLoc: number, prioSlotIndex: number): startlocprio
declare function SetGameTypeSupported(whichGameType: gametype, value: boolean): void
declare function SetMapFlag(whichMapFlag: mapflag, value: boolean): void
declare function SetGamePlacement(whichPlacementType: placement): void
declare function SetGameSpeed(whichspeed: gamespeed): void
declare function SetGameDifficulty(whichdifficulty: gamedifficulty): void
declare function SetResourceDensity(whichdensity: mapdensity): void
declare function SetCreatureDensity(whichdensity: mapdensity): void
declare function GetTeams(): number
declare function GetPlayers(): number
declare function IsGameTypeSupported(whichGameType: gametype): boolean
declare function GetGameTypeSelected(): gametype
declare function IsMapFlagSet(whichMapFlag: mapflag): boolean
declare function GetGamePlacement(): placement
declare function GetGameSpeed(): gamespeed
declare function GetGameDifficulty(): gamedifficulty
declare function GetResourceDensity(): mapdensity
declare function GetCreatureDensity(): mapdensity
declare function GetStartLocationX(whichStartLocation: number): number
declare function GetStartLocationY(whichStartLocation: number): number
declare function GetStartLocationLoc(whichStartLocation: number): location
declare function SetPlayerTeam(whichPlayer: player, whichTeam: number): void
declare function SetPlayerStartLocation(whichPlayer: player, startLocIndex: number): void
declare function ForcePlayerStartLocation(whichPlayer: player, startLocIndex: number): void
declare function SetPlayerColor(whichPlayer: player, color: playercolor): void
declare function SetPlayerAlliance(sourcePlayer: player, otherPlayer: player, whichAllianceSetting: alliancetype, value: boolean): void
declare function SetPlayerTaxRate(sourcePlayer: player, otherPlayer: player, whichResource: playerstate, rate: number): void
declare function SetPlayerRacePreference(whichPlayer: player, whichRacePreference: racepreference): void
declare function SetPlayerRaceSelectable(whichPlayer: player, value: boolean): void
declare function SetPlayerController(whichPlayer: player, controlType: mapcontrol): void
declare function SetPlayerName(whichPlayer: player, name: string): void
declare function SetPlayerOnScoreScreen(whichPlayer: player, flag: boolean): void
declare function GetPlayerTeam(whichPlayer: player): number
declare function GetPlayerStartLocation(whichPlayer: player): number
declare function GetPlayerColor(whichPlayer: player): playercolor
declare function GetPlayerSelectable(whichPlayer: player): boolean
declare function GetPlayerController(whichPlayer: player): mapcontrol
declare function GetPlayerSlotState(whichPlayer: player): playerslotstate
declare function GetPlayerTaxRate(sourcePlayer: player, otherPlayer: player, whichResource: playerstate): number
declare function IsPlayerRacePrefSet(whichPlayer: player, pref: racepreference): boolean
declare function GetPlayerName(whichPlayer: player): string
declare function CreateTimer(): timer
declare function DestroyTimer(whichTimer: timer): void
declare function TimerStart(whichTimer: timer, timeout: number, periodic: boolean, handlerFunc: undefined): void
declare function TimerGetElapsed(whichTimer: timer): number
declare function TimerGetRemaining(whichTimer: timer): number
declare function TimerGetTimeout(whichTimer: timer): number
declare function PauseTimer(whichTimer: timer): void
declare function ResumeTimer(whichTimer: timer): void
declare function GetExpiredTimer(): timer
declare function CreateGroup(): group
declare function DestroyGroup(whichGroup: group): void
declare function GroupAddUnit(whichGroup: group, whichUnit: unit): boolean
declare function GroupRemoveUnit(whichGroup: group, whichUnit: unit): boolean
declare function BlzGroupAddGroupFast(whichGroup: group, addGroup: group): number
declare function BlzGroupRemoveGroupFast(whichGroup: group, removeGroup: group): number
declare function GroupClear(whichGroup: group): void
declare function BlzGroupGetSize(whichGroup: group): number
declare function BlzGroupUnitAt(whichGroup: group, index: number): unit
declare function GroupEnumUnitsOfType(whichGroup: group, unitname: string, filter: boolexpr): void
declare function GroupEnumUnitsOfPlayer(whichGroup: group, whichPlayer: player, filter: boolexpr | null): void
declare function GroupEnumUnitsOfTypeCounted(whichGroup: group, unitname: string, filter: boolexpr, countLimit: number): void
declare function GroupEnumUnitsInRect(whichGroup: group, r: rect, filter: boolexpr): void
declare function GroupEnumUnitsInRectCounted(whichGroup: group, r: rect, filter: boolexpr, countLimit: number): void
declare function GroupEnumUnitsInRange(whichGroup: group, x: number, y: number, radius: number, filter: boolexpr): void
declare function GroupEnumUnitsInRangeOfLoc(whichGroup: group, whichLocation: location, radius: number, filter: boolexpr): void
declare function GroupEnumUnitsInRangeCounted(whichGroup: group, x: number, y: number, radius: number, filter: boolexpr, countLimit: number): void
declare function GroupEnumUnitsInRangeOfLocCounted(whichGroup: group, whichLocation: location, radius: number, filter: boolexpr, countLimit: number): void
declare function GroupEnumUnitsSelected(whichGroup: group, whichPlayer: player, filter: boolexpr): void
declare function GroupImmediateOrder(whichGroup: group, order: string): boolean
declare function GroupImmediateOrderById(whichGroup: group, order: number): boolean
declare function GroupPointOrder(whichGroup: group, order: string, x: number, y: number): boolean
declare function GroupPointOrderLoc(whichGroup: group, order: string, whichLocation: location): boolean
declare function GroupPointOrderById(whichGroup: group, order: number, x: number, y: number): boolean
declare function GroupPointOrderByIdLoc(whichGroup: group, order: number, whichLocation: location): boolean
declare function GroupTargetOrder(whichGroup: group, order: string, targetWidget: widget): boolean
declare function GroupTargetOrderById(whichGroup: group, order: number, targetWidget: widget): boolean
declare function ForGroup(whichGroup: group, callback: () => void): void
declare function FirstOfGroup(whichGroup: group): unit
declare function CreateForce(): force
declare function DestroyForce(whichForce: force): void
declare function ForceAddPlayer(whichForce: force, whichPlayer: player): void
declare function ForceRemovePlayer(whichForce: force, whichPlayer: player): void
declare function BlzForceHasPlayer(whichForce: force, whichPlayer: player): boolean
declare function ForceClear(whichForce: force): void
declare function ForceEnumPlayers(whichForce: force, filter: boolexpr): void
declare function ForceEnumPlayersCounted(whichForce: force, filter: boolexpr, countLimit: number): void
declare function ForceEnumAllies(whichForce: force, whichPlayer: player, filter: boolexpr): void
declare function ForceEnumEnemies(whichForce: force, whichPlayer: player, filter: boolexpr): void
declare function ForForce(whichForce: force, callback: () => void): void
declare function Rect(minx: number, miny: number, maxx: number, maxy: number): rect
declare function RectFromLoc(min: location, max: location): rect
declare function RemoveRect(whichRect: rect): void
declare function SetRect(whichRect: rect, minx: number, miny: number, maxx: number, maxy: number): void
declare function SetRectFromLoc(whichRect: rect, min: location, max: location): void
declare function MoveRectTo(whichRect: rect, newCenterX: number, newCenterY: number): void
declare function MoveRectToLoc(whichRect: rect, newCenterLoc: location): void
declare function GetRectCenterX(whichRect: rect): number
declare function GetRectCenterY(whichRect: rect): number
declare function GetRectMinX(whichRect: rect): number
declare function GetRectMinY(whichRect: rect): number
declare function GetRectMaxX(whichRect: rect): number
declare function GetRectMaxY(whichRect: rect): number
declare function CreateRegion(): region
declare function RemoveRegion(whichRegion: region): void
declare function RegionAddRect(whichRegion: region, r: rect): void
declare function RegionClearRect(whichRegion: region, r: rect): void
declare function RegionAddCell(whichRegion: region, x: number, y: number): void
declare function RegionAddCellAtLoc(whichRegion: region, whichLocation: location): void
declare function RegionClearCell(whichRegion: region, x: number, y: number): void
declare function RegionClearCellAtLoc(whichRegion: region, whichLocation: location): void
declare function Location(x: number, y: number): location
declare function RemoveLocation(whichLocation: location): void
declare function MoveLocation(whichLocation: location, newX: number, newY: number): void
declare function GetLocationX(whichLocation: location): number
declare function GetLocationY(whichLocation: location): number
declare function GetLocationZ(whichLocation: location): number
declare function IsUnitInRegion(whichRegion: region, whichUnit: unit): boolean
declare function IsPointInRegion(whichRegion: region, x: number, y: number): boolean
declare function IsLocationInRegion(whichRegion: region, whichLocation: location): boolean
declare function GetWorldBounds(): rect
declare function CreateTrigger(): trigger
declare function DestroyTrigger(whichTrigger: trigger): void
declare function ResetTrigger(whichTrigger: trigger): void
declare function EnableTrigger(whichTrigger: trigger): void
declare function DisableTrigger(whichTrigger: trigger): void
declare function IsTriggerEnabled(whichTrigger: trigger): boolean
declare function TriggerWaitOnSleeps(whichTrigger: trigger, flag: boolean): void
declare function IsTriggerWaitOnSleeps(whichTrigger: trigger): boolean
declare function GetFilterUnit(): unit
declare function GetEnumUnit(): unit
declare function GetFilterDestructable(): destructable
declare function GetEnumDestructable(): destructable
declare function GetFilterItem(): item
declare function GetEnumItem(): item
declare function GetFilterPlayer(): player
declare function GetEnumPlayer(): player
declare function GetTriggeringTrigger(): trigger
declare function GetTriggerEventId(): eventid
declare function GetTriggerEvalCount(whichTrigger: trigger): number
declare function GetTriggerExecCount(whichTrigger: trigger): number
declare function ExecuteFunc(funcName: string): void
declare function And(operandA: boolexpr, operandB: boolexpr): boolexpr
declare function Or(operandA: boolexpr, operandB: boolexpr): boolexpr
declare function Not(operand: boolexpr): boolexpr
declare function Condition(func: () => boolean): conditionfunc
declare function DestroyCondition(c: conditionfunc): void
declare function Filter(func: () => boolean): filterfunc
declare function DestroyFilter(f: filterfunc): void
declare function DestroyBoolExpr(e: boolexpr): void
declare function TriggerRegisterVariableEvent(whichTrigger: trigger, varName: string, opcode: limitop, limitval: number): event
declare function TriggerRegisterTimerEvent(whichTrigger: trigger, timeout: number, periodic: boolean): event
declare function TriggerRegisterTimerExpireEvent(whichTrigger: trigger, t: timer): event
declare function TriggerRegisterGameStateEvent(whichTrigger: trigger, whichState: gamestate, opcode: limitop, limitval: number): event
declare function TriggerRegisterDialogEvent(whichTrigger: trigger, whichDialog: dialog): event
declare function TriggerRegisterDialogButtonEvent(whichTrigger: trigger, whichButton: button): event
declare function GetEventGameState(): gamestate
declare function TriggerRegisterGameEvent(whichTrigger: trigger, whichGameEvent: gameevent): event
declare function GetWinningPlayer(): player
declare function TriggerRegisterEnterRegion(whichTrigger: trigger, whichRegion: region, filter: boolexpr | null): event
declare function GetTriggeringRegion(): region
declare function GetEnteringUnit(): unit
declare function TriggerRegisterLeaveRegion(whichTrigger: trigger, whichRegion: region, filter: boolexpr): event
declare function GetLeavingUnit(): unit
declare function TriggerRegisterTrackableHitEvent(whichTrigger: trigger, t: trackable): event
declare function TriggerRegisterTrackableTrackEvent(whichTrigger: trigger, t: trackable): event
declare function GetTriggeringTrackable(): trackable
declare function GetClickedButton(): button
declare function GetClickedDialog(): dialog
declare function GetTournamentFinishSoonTimeRemaining(): number
declare function GetTournamentFinishNowRule(): number
declare function GetTournamentFinishNowPlayer(): player
declare function GetTournamentScore(whichPlayer: player): number
declare function GetSaveBasicFilename(): string
declare function TriggerRegisterPlayerEvent(whichTrigger: trigger, whichPlayer: player, whichPlayerEvent: playerevent): event
declare function GetTriggerPlayer(): player
declare function TriggerRegisterPlayerUnitEvent(whichTrigger: trigger, whichPlayer: player, whichPlayerUnitEvent: playerunitevent, filter: boolexpr | null): event
declare function GetLevelingUnit(): unit
declare function GetLearningUnit(): unit
declare function GetLearnedSkill(): number
declare function GetLearnedSkillLevel(): number
declare function GetRevivableUnit(): unit
declare function GetRevivingUnit(): unit
declare function GetAttacker(): unit
declare function GetRescuer(): unit
declare function GetDyingUnit(): unit
declare function GetKillingUnit(): unit
declare function GetDecayingUnit(): unit
declare function GetConstructingStructure(): unit
declare function GetCancelledStructure(): unit
declare function GetConstructedStructure(): unit
declare function GetResearchingUnit(): unit
declare function GetResearched(): number
declare function GetTrainedUnitType(): number
declare function GetTrainedUnit(): unit
declare function GetDetectedUnit(): unit
declare function GetSummoningUnit(): unit
declare function GetSummonedUnit(): unit
declare function GetTransportUnit(): unit
declare function GetLoadedUnit(): unit
declare function GetSellingUnit(): unit
declare function GetSoldUnit(): unit
declare function GetBuyingUnit(): unit
declare function GetSoldItem(): item
declare function GetChangingUnit(): unit
declare function GetChangingUnitPrevOwner(): player
declare function GetManipulatingUnit(): unit
declare function GetManipulatedItem(): item
declare function GetOrderedUnit(): unit
declare function GetIssuedOrderId(): number
declare function GetOrderPointX(): number
declare function GetOrderPointY(): number
declare function GetOrderPointLoc(): location
declare function GetOrderTarget(): widget
declare function GetOrderTargetDestructable(): destructable
declare function GetOrderTargetItem(): item
declare function GetOrderTargetUnit(): unit
declare function GetSpellAbilityUnit(): unit
declare function GetSpellAbilityId(): number
declare function GetSpellAbility(): ability
declare function GetSpellTargetLoc(): location
declare function GetSpellTargetX(): number
declare function GetSpellTargetY(): number
declare function GetSpellTargetDestructable(): destructable
declare function GetSpellTargetItem(): item
declare function GetSpellTargetUnit(): unit
declare function TriggerRegisterPlayerAllianceChange(whichTrigger: trigger, whichPlayer: player, whichAlliance: alliancetype): event
declare function TriggerRegisterPlayerStateEvent(whichTrigger: trigger, whichPlayer: player, whichState: playerstate, opcode: limitop, limitval: number): event
declare function GetEventPlayerState(): playerstate
declare function TriggerRegisterPlayerChatEvent(whichTrigger: trigger, whichPlayer: player, chatMessageToDetect: string, exactMatchOnly: boolean): event
declare function GetEventPlayerChatString(): string
declare function GetEventPlayerChatStringMatched(): string
declare function TriggerRegisterDeathEvent(whichTrigger: trigger, whichWidget: widget): event
declare function GetTriggerUnit(): unit | null
declare function TriggerRegisterUnitStateEvent(whichTrigger: trigger, whichUnit: unit, whichState: unitstate, opcode: limitop, limitval: number): event
declare function GetEventUnitState(): unitstate
declare function TriggerRegisterUnitEvent(whichTrigger: trigger, whichUnit: unit, whichEvent: unitevent): event
declare function GetEventDamage(): number
declare function GetEventDamageSource(): unit
declare function GetEventDetectingPlayer(): player
declare function TriggerRegisterFilterUnitEvent(whichTrigger: trigger, whichUnit: unit, whichEvent: unitevent, filter: boolexpr): event
declare function GetEventTargetUnit(): unit
declare function TriggerRegisterUnitInRange(whichTrigger: trigger, whichUnit: unit, range: number, filter: boolexpr): event
declare function TriggerAddCondition(whichTrigger: trigger, condition: boolexpr): triggercondition
declare function TriggerRemoveCondition(whichTrigger: trigger, whichCondition: triggercondition): void
declare function TriggerClearConditions(whichTrigger: trigger): void
declare function TriggerAddAction(whichTrigger: trigger, actionFunc: () => void): triggeraction
declare function TriggerRemoveAction(whichTrigger: trigger, whichAction: triggeraction): void
declare function TriggerClearActions(whichTrigger: trigger): void
declare function TriggerSleepAction(timeout: number): void
declare function TriggerWaitForSound(s: sound, offset: number): void
declare function TriggerEvaluate(whichTrigger: trigger): boolean
declare function TriggerExecute(whichTrigger: trigger): void
declare function TriggerExecuteWait(whichTrigger: trigger): void
declare function TriggerSyncStart(): void
declare function TriggerSyncReady(): void
declare function GetWidgetLife(whichWidget: widget): number
declare function SetWidgetLife(whichWidget: widget, newLife: number): void
declare function GetWidgetX(whichWidget: widget): number
declare function GetWidgetY(whichWidget: widget): number
declare function GetTriggerWidget(): widget
declare function CreateDestructable(objectid: number, x: number, y: number, face: number, scale: number, variation: number): destructable
declare function CreateDestructableZ(objectid: number, x: number, y: number, z: number, face: number, scale: number, variation: number): destructable
declare function CreateDeadDestructable(objectid: number, x: number, y: number, face: number, scale: number, variation: number): destructable
declare function CreateDeadDestructableZ(objectid: number, x: number, y: number, z: number, face: number, scale: number, variation: number): destructable
declare function RemoveDestructable(d: destructable): void
declare function KillDestructable(d: destructable): void
declare function SetDestructableInvulnerable(d: destructable, flag: boolean): void
declare function IsDestructableInvulnerable(d: destructable): boolean
declare function EnumDestructablesInRect(r: rect, filter: boolexpr, actionFunc: () => void): void
declare function GetDestructableTypeId(d: destructable): number
declare function GetDestructableX(d: destructable): number
declare function GetDestructableY(d: destructable): number
declare function SetDestructableLife(d: destructable, life: number): void
declare function GetDestructableLife(d: destructable): number
declare function SetDestructableMaxLife(d: destructable, max: number): void
declare function GetDestructableMaxLife(d: destructable): number
declare function DestructableRestoreLife(d: destructable, life: number, birth: boolean): void
declare function QueueDestructableAnimation(d: destructable, whichAnimation: string): void
declare function SetDestructableAnimation(d: destructable, whichAnimation: string): void
declare function SetDestructableAnimationSpeed(d: destructable, speedFactor: number): void
declare function ShowDestructable(d: destructable, flag: boolean): void
declare function GetDestructableOccluderHeight(d: destructable): number
declare function SetDestructableOccluderHeight(d: destructable, height: number): void
declare function GetDestructableName(d: destructable): string
declare function GetTriggerDestructable(): destructable
declare function CreateItem(itemid: number, x: number, y: number): item
declare function RemoveItem(whichItem: item): void
declare function GetItemPlayer(whichItem: item): player
declare function GetItemTypeId(i: item): number
declare function GetItemX(i: item): number
declare function GetItemY(i: item): number
declare function SetItemPosition(i: item, x: number, y: number): void
declare function SetItemDropOnDeath(whichItem: item, flag: boolean): void
declare function SetItemDroppable(i: item, flag: boolean): void
declare function SetItemPawnable(i: item, flag: boolean): void
declare function SetItemPlayer(whichItem: item, whichPlayer: player, changeColor: boolean): void
declare function SetItemInvulnerable(whichItem: item, flag: boolean): void
declare function IsItemInvulnerable(whichItem: item): boolean
declare function SetItemVisible(whichItem: item, show: boolean): void
declare function IsItemVisible(whichItem: item): boolean
declare function IsItemOwned(whichItem: item): boolean
declare function IsItemPowerup(whichItem: item): boolean
declare function IsItemSellable(whichItem: item): boolean
declare function IsItemPawnable(whichItem: item): boolean
declare function IsItemIdPowerup(itemId: number): boolean
declare function IsItemIdSellable(itemId: number): boolean
declare function IsItemIdPawnable(itemId: number): boolean
declare function EnumItemsInRect(r: rect, filter: boolexpr, actionFunc: () => void): void
declare function GetItemLevel(whichItem: item): number
declare function GetItemType(whichItem: item): itemtype
declare function SetItemDropID(whichItem: item, unitId: number): void
declare function GetItemName(whichItem: item): string
declare function GetItemCharges(whichItem: item): number
declare function SetItemCharges(whichItem: item, charges: number): void
declare function GetItemUserData(whichItem: item): number
declare function SetItemUserData(whichItem: item, data: number): void
declare function CreateUnit(id: player, unitid: number, x: number, y: number, face: number): unit
declare function CreateUnitByName(whichPlayer: player, unitname: string, x: number, y: number, face: number): unit
declare function CreateUnitAtLoc(id: player, unitid: number, whichLocation: location, face: number): unit
declare function CreateUnitAtLocByName(id: player, unitname: string, whichLocation: location, face: number): unit
declare function CreateCorpse(whichPlayer: player, unitid: number, x: number, y: number, face: number): unit
declare function KillUnit(whichUnit: unit): void
declare function RemoveUnit(whichUnit: unit): void
declare function ShowUnit(whichUnit: unit, show: boolean): void
declare function SetUnitState(whichUnit: unit, whichUnitState: unitstate, newVal: number): void
declare function SetUnitX(whichUnit: unit, newX: number): void
declare function SetUnitY(whichUnit: unit, newY: number): void
declare function SetUnitPosition(whichUnit: unit, newX: number, newY: number): void
declare function SetUnitPositionLoc(whichUnit: unit, whichLocation: location): void
declare function SetUnitFacing(whichUnit: unit, facingAngle: number): void
declare function SetUnitFacingTimed(whichUnit: unit, facingAngle: number, duration: number): void
declare function SetUnitMoveSpeed(whichUnit: unit, newSpeed: number): void
declare function SetUnitFlyHeight(whichUnit: unit, newHeight: number, rate: number): void
declare function SetUnitTurnSpeed(whichUnit: unit, newTurnSpeed: number): void
declare function SetUnitPropWindow(whichUnit: unit, newPropWindowAngle: number): void
declare function SetUnitAcquireRange(whichUnit: unit, newAcquireRange: number): void
declare function SetUnitCreepGuard(whichUnit: unit, creepGuard: boolean): void
declare function GetUnitAcquireRange(whichUnit: unit): number
declare function GetUnitTurnSpeed(whichUnit: unit): number
declare function GetUnitPropWindow(whichUnit: unit): number
declare function GetUnitFlyHeight(whichUnit: unit): number
declare function GetUnitDefaultAcquireRange(whichUnit: unit): number
declare function GetUnitDefaultTurnSpeed(whichUnit: unit): number
declare function GetUnitDefaultPropWindow(whichUnit: unit): number
declare function GetUnitDefaultFlyHeight(whichUnit: unit): number
declare function SetUnitOwner(whichUnit: unit, whichPlayer: player, changeColor: boolean): void
declare function SetUnitColor(whichUnit: unit, whichColor: playercolor): void
declare function SetUnitScale(whichUnit: unit, scaleX: number, scaleY: number, scaleZ: number): void
declare function SetUnitTimeScale(whichUnit: unit, timeScale: number): void
declare function SetUnitBlendTime(whichUnit: unit, blendTime: number): void
declare function SetUnitVertexColor(whichUnit: unit, red: number, green: number, blue: number, alpha: number): void
declare function QueueUnitAnimation(whichUnit: unit, whichAnimation: string): void
declare function SetUnitAnimation(whichUnit: unit, whichAnimation: string): void
declare function SetUnitAnimationByIndex(whichUnit: unit, whichAnimation: number): void
declare function SetUnitAnimationWithRarity(whichUnit: unit, whichAnimation: string, rarity: raritycontrol): void
declare function AddUnitAnimationProperties(whichUnit: unit, animProperties: string, add: boolean): void
declare function SetUnitLookAt(whichUnit: unit, whichBone: string, lookAtTarget: unit, offsetX: number, offsetY: number, offsetZ: number): void
declare function ResetUnitLookAt(whichUnit: unit): void
declare function SetUnitRescuable(whichUnit: unit, byWhichPlayer: player, flag: boolean): void
declare function SetUnitRescueRange(whichUnit: unit, range: number): void
declare function SetHeroStr(whichHero: unit, newStr: number, permanent: boolean): void
declare function SetHeroAgi(whichHero: unit, newAgi: number, permanent: boolean): void
declare function SetHeroInt(whichHero: unit, newInt: number, permanent: boolean): void
declare function GetHeroStr(whichHero: unit, includeBonuses: boolean): number
declare function GetHeroAgi(whichHero: unit, includeBonuses: boolean): number
declare function GetHeroInt(whichHero: unit, includeBonuses: boolean): number
declare function UnitStripHeroLevel(whichHero: unit, howManyLevels: number): boolean
declare function GetHeroXP(whichHero: unit): number
declare function SetHeroXP(whichHero: unit, newXpVal: number, showEyeCandy: boolean): void
declare function GetHeroSkillPoints(whichHero: unit): number
declare function UnitModifySkillPoints(whichHero: unit, skillPointDelta: number): boolean
declare function AddHeroXP(whichHero: unit, xpToAdd: number, showEyeCandy: boolean): void
declare function SetHeroLevel(whichHero: unit, level: number, showEyeCandy: boolean): void
declare function GetHeroLevel(whichHero: unit): number
declare function GetUnitLevel(whichUnit: unit): number
declare function GetHeroProperName(whichHero: unit): string
declare function SuspendHeroXP(whichHero: unit, flag: boolean): void
declare function IsSuspendedXP(whichHero: unit): boolean
declare function SelectHeroSkill(whichHero: unit, abilcode: number): void
declare function GetUnitAbilityLevel(whichUnit: unit, abilcode: number): number
declare function DecUnitAbilityLevel(whichUnit: unit, abilcode: number): number
declare function IncUnitAbilityLevel(whichUnit: unit, abilcode: number): number
declare function SetUnitAbilityLevel(whichUnit: unit, abilcode: number, level: number): number
declare function ReviveHero(whichHero: unit, x: number, y: number, doEyecandy: boolean): boolean
declare function ReviveHeroLoc(whichHero: unit, loc: location, doEyecandy: boolean): boolean
declare function SetUnitExploded(whichUnit: unit, exploded: boolean): void
declare function SetUnitInvulnerable(whichUnit: unit, flag: boolean): void
declare function PauseUnit(whichUnit: unit, flag: boolean): void
declare function IsUnitPaused(whichHero: unit): boolean
declare function SetUnitPathing(whichUnit: unit, flag: boolean): void
declare function ClearSelection(): void
declare function SelectUnit(whichUnit: unit, flag: boolean): void
declare function GetUnitPointValue(whichUnit: unit): number
declare function GetUnitPointValueByType(unitType: number): number
declare function UnitAddItem(whichUnit: unit, whichItem: item): boolean
declare function UnitAddItemById(whichUnit: unit, itemId: number): item
declare function UnitAddItemToSlotById(whichUnit: unit, itemId: number, itemSlot: number): boolean
declare function UnitRemoveItem(whichUnit: unit, whichItem: item): void
declare function UnitRemoveItemFromSlot(whichUnit: unit, itemSlot: number): item
declare function UnitHasItem(whichUnit: unit, whichItem: item): boolean
declare function UnitItemInSlot(whichUnit: unit, itemSlot: number): item
declare function UnitInventorySize(whichUnit: unit): number
declare function UnitDropItemPoint(whichUnit: unit, whichItem: item, x: number, y: number): boolean
declare function UnitDropItemSlot(whichUnit: unit, whichItem: item, slot: number): boolean
declare function UnitDropItemTarget(whichUnit: unit, whichItem: item, target: widget): boolean
declare function UnitUseItem(whichUnit: unit, whichItem: item): boolean
declare function UnitUseItemPoint(whichUnit: unit, whichItem: item, x: number, y: number): boolean
declare function UnitUseItemTarget(whichUnit: unit, whichItem: item, target: widget): boolean
declare function GetUnitX(whichUnit: unit): number
declare function GetUnitY(whichUnit: unit): number
declare function GetUnitLoc(whichUnit: unit): location
declare function GetUnitFacing(whichUnit: unit): number
declare function GetUnitMoveSpeed(whichUnit: unit): number
declare function GetUnitDefaultMoveSpeed(whichUnit: unit): number
declare function GetUnitState(whichUnit: unit, whichUnitState: unitstate): number
declare function GetOwningPlayer(whichUnit: unit): player
declare function GetUnitTypeId(whichUnit: unit): number
declare function GetUnitRace(whichUnit: unit): race
declare function GetUnitName(whichUnit: unit): string
declare function GetUnitFoodUsed(whichUnit: unit): number
declare function GetUnitFoodMade(whichUnit: unit): number
declare function GetFoodMade(unitId: number): number
declare function GetFoodUsed(unitId: number): number
declare function SetUnitUseFood(whichUnit: unit, useFood: boolean): void
declare function GetUnitRallyPoint(whichUnit: unit): location
declare function GetUnitRallyUnit(whichUnit: unit): unit
declare function GetUnitRallyDestructable(whichUnit: unit): destructable
declare function IsUnitInGroup(whichUnit: unit, whichGroup: group): boolean
declare function IsUnitInForce(whichUnit: unit, whichForce: force): boolean
declare function IsUnitOwnedByPlayer(whichUnit: unit, whichPlayer: player): boolean
declare function IsUnitAlly(whichUnit: unit, whichPlayer: player): boolean
declare function IsUnitEnemy(whichUnit: unit, whichPlayer: player): boolean
declare function IsUnitVisible(whichUnit: unit, whichPlayer: player): boolean
declare function IsUnitDetected(whichUnit: unit, whichPlayer: player): boolean
declare function IsUnitInvisible(whichUnit: unit, whichPlayer: player): boolean
declare function IsUnitFogged(whichUnit: unit, whichPlayer: player): boolean
declare function IsUnitMasked(whichUnit: unit, whichPlayer: player): boolean
declare function IsUnitSelected(whichUnit: unit, whichPlayer: player): boolean
declare function IsUnitRace(whichUnit: unit, whichRace: race): boolean
declare function IsUnitType(whichUnit: unit, whichUnitType: unittype): boolean
declare function IsUnit(whichUnit: unit, whichSpecifiedUnit: unit): boolean
declare function IsUnitInRange(whichUnit: unit, otherUnit: unit, distance: number): boolean
declare function IsUnitInRangeXY(whichUnit: unit, x: number, y: number, distance: number): boolean
declare function IsUnitInRangeLoc(whichUnit: unit, whichLocation: location, distance: number): boolean
declare function IsUnitHidden(whichUnit: unit): boolean
declare function IsUnitIllusion(whichUnit: unit): boolean
declare function IsUnitInTransport(whichUnit: unit, whichTransport: unit): boolean
declare function IsUnitLoaded(whichUnit: unit): boolean
declare function IsHeroUnitId(unitId: number): boolean
declare function IsUnitIdType(unitId: number, whichUnitType: unittype): boolean
declare function UnitShareVision(whichUnit: unit, whichPlayer: player, share: boolean): void
declare function UnitSuspendDecay(whichUnit: unit, suspend: boolean): void
declare function UnitAddType(whichUnit: unit, whichUnitType: unittype): boolean
declare function UnitRemoveType(whichUnit: unit, whichUnitType: unittype): boolean
declare function UnitAddAbility(whichUnit: unit, abilityId: number): boolean
declare function UnitRemoveAbility(whichUnit: unit, abilityId: number): boolean
declare function UnitMakeAbilityPermanent(whichUnit: unit, permanent: boolean, abilityId: number): boolean
declare function UnitRemoveBuffs(whichUnit: unit, removePositive: boolean, removeNegative: boolean): void
declare function UnitRemoveBuffsEx(whichUnit: unit, removePositive: boolean, removeNegative: boolean, magic: boolean, physical: boolean, timedLife: boolean, aura: boolean, autoDispel: boolean): void
declare function UnitHasBuffsEx(whichUnit: unit, removePositive: boolean, removeNegative: boolean, magic: boolean, physical: boolean, timedLife: boolean, aura: boolean, autoDispel: boolean): boolean
declare function UnitCountBuffsEx(whichUnit: unit, removePositive: boolean, removeNegative: boolean, magic: boolean, physical: boolean, timedLife: boolean, aura: boolean, autoDispel: boolean): number
declare function UnitAddSleep(whichUnit: unit, add: boolean): void
declare function UnitCanSleep(whichUnit: unit): boolean
declare function UnitAddSleepPerm(whichUnit: unit, add: boolean): void
declare function UnitCanSleepPerm(whichUnit: unit): boolean
declare function UnitIsSleeping(whichUnit: unit): boolean
declare function UnitWakeUp(whichUnit: unit): void
declare function UnitApplyTimedLife(whichUnit: unit, buffId: number, duration: number): void
declare function UnitIgnoreAlarm(whichUnit: unit, flag: boolean): boolean
declare function UnitIgnoreAlarmToggled(whichUnit: unit): boolean
declare function UnitResetCooldown(whichUnit: unit): void
declare function UnitSetConstructionProgress(whichUnit: unit, constructionPercentage: number): void
declare function UnitSetUpgradeProgress(whichUnit: unit, upgradePercentage: number): void
declare function UnitPauseTimedLife(whichUnit: unit, flag: boolean): void
declare function UnitSetUsesAltIcon(whichUnit: unit, flag: boolean): void
declare function UnitDamagePoint(whichUnit: unit, delay: number, radius: number, x: number, y: number, amount: number, attack: boolean, ranged: boolean, attackType: attacktype, damageType: damagetype, weaponType: weapontype): boolean
declare function UnitDamageTarget(whichUnit: unit, target: widget, amount: number, attack: boolean, ranged: boolean, attackType: attacktype, damageType: damagetype, weaponType: weapontype): boolean
declare function IssueImmediateOrder(whichUnit: unit, order: string): boolean
declare function IssueImmediateOrderById(whichUnit: unit, order: number): boolean
declare function IssuePointOrder(whichUnit: unit, order: string, x: number, y: number): boolean
declare function IssuePointOrderLoc(whichUnit: unit, order: string, whichLocation: location): boolean
declare function IssuePointOrderById(whichUnit: unit, order: number, x: number, y: number): boolean
declare function IssuePointOrderByIdLoc(whichUnit: unit, order: number, whichLocation: location): boolean
declare function IssueTargetOrder(whichUnit: unit, order: string, targetWidget: widget): boolean
declare function IssueTargetOrderById(whichUnit: unit, order: number, targetWidget: widget): boolean
declare function IssueInstantPointOrder(whichUnit: unit, order: string, x: number, y: number, instantTargetWidget: widget): boolean
declare function IssueInstantPointOrderById(whichUnit: unit, order: number, x: number, y: number, instantTargetWidget: widget): boolean
declare function IssueInstantTargetOrder(whichUnit: unit, order: string, targetWidget: widget, instantTargetWidget: widget): boolean
declare function IssueInstantTargetOrderById(whichUnit: unit, order: number, targetWidget: widget, instantTargetWidget: widget): boolean
declare function IssueBuildOrder(whichPeon: unit, unitToBuild: string, x: number, y: number): boolean
declare function IssueBuildOrderById(whichPeon: unit, unitId: number, x: number, y: number): boolean
declare function IssueNeutralImmediateOrder(forWhichPlayer: player, neutralStructure: unit, unitToBuild: string): boolean
declare function IssueNeutralImmediateOrderById(forWhichPlayer: player, neutralStructure: unit, unitId: number): boolean
declare function IssueNeutralPointOrder(forWhichPlayer: player, neutralStructure: unit, unitToBuild: string, x: number, y: number): boolean
declare function IssueNeutralPointOrderById(forWhichPlayer: player, neutralStructure: unit, unitId: number, x: number, y: number): boolean
declare function IssueNeutralTargetOrder(forWhichPlayer: player, neutralStructure: unit, unitToBuild: string, target: widget): boolean
declare function IssueNeutralTargetOrderById(forWhichPlayer: player, neutralStructure: unit, unitId: number, target: widget): boolean
declare function GetUnitCurrentOrder(whichUnit: unit): number
declare function SetResourceAmount(whichUnit: unit, amount: number): void
declare function AddResourceAmount(whichUnit: unit, amount: number): void
declare function GetResourceAmount(whichUnit: unit): number
declare function WaygateGetDestinationX(waygate: unit): number
declare function WaygateGetDestinationY(waygate: unit): number
declare function WaygateSetDestination(waygate: unit, x: number, y: number): void
declare function WaygateActivate(waygate: unit, activate: boolean): void
declare function WaygateIsActive(waygate: unit): boolean
declare function AddItemToAllStock(itemId: number, currentStock: number, stockMax: number): void
declare function AddItemToStock(whichUnit: unit, itemId: number, currentStock: number, stockMax: number): void
declare function AddUnitToAllStock(unitId: number, currentStock: number, stockMax: number): void
declare function AddUnitToStock(whichUnit: unit, unitId: number, currentStock: number, stockMax: number): void
declare function RemoveItemFromAllStock(itemId: number): void
declare function RemoveItemFromStock(whichUnit: unit, itemId: number): void
declare function RemoveUnitFromAllStock(unitId: number): void
declare function RemoveUnitFromStock(whichUnit: unit, unitId: number): void
declare function SetAllItemTypeSlots(slots: number): void
declare function SetAllUnitTypeSlots(slots: number): void
declare function SetItemTypeSlots(whichUnit: unit, slots: number): void
declare function SetUnitTypeSlots(whichUnit: unit, slots: number): void
declare function GetUnitUserData(whichUnit: unit): number
declare function SetUnitUserData(whichUnit: unit, data: number): void
declare function Player(number: number): player
declare function GetLocalPlayer(): player
declare function IsPlayerAlly(whichPlayer: player, otherPlayer: player): boolean
declare function IsPlayerEnemy(whichPlayer: player, otherPlayer: player): boolean
declare function IsPlayerInForce(whichPlayer: player, whichForce: force): boolean
declare function IsPlayerObserver(whichPlayer: player): boolean
declare function IsVisibleToPlayer(x: number, y: number, whichPlayer: player): boolean
declare function IsLocationVisibleToPlayer(whichLocation: location, whichPlayer: player): boolean
declare function IsFoggedToPlayer(x: number, y: number, whichPlayer: player): boolean
declare function IsLocationFoggedToPlayer(whichLocation: location, whichPlayer: player): boolean
declare function IsMaskedToPlayer(x: number, y: number, whichPlayer: player): boolean
declare function IsLocationMaskedToPlayer(whichLocation: location, whichPlayer: player): boolean
declare function GetPlayerRace(whichPlayer: player): race
declare function GetPlayerId(whichPlayer: player): number
declare function GetPlayerUnitCount(whichPlayer: player, includeIncomplete: boolean): number
declare function GetPlayerTypedUnitCount(whichPlayer: player, unitName: string, includeIncomplete: boolean, includeUpgrades: boolean): number
declare function GetPlayerStructureCount(whichPlayer: player, includeIncomplete: boolean): number
declare function GetPlayerState(whichPlayer: player, whichPlayerState: playerstate): number
declare function GetPlayerScore(whichPlayer: player, whichPlayerScore: playerscore): number
declare function GetPlayerAlliance(sourcePlayer: player, otherPlayer: player, whichAllianceSetting: alliancetype): boolean
declare function GetPlayerHandicap(whichPlayer: player): number
declare function GetPlayerHandicapXP(whichPlayer: player): number
declare function SetPlayerHandicap(whichPlayer: player, handicap: number): void
declare function SetPlayerHandicapXP(whichPlayer: player, handicap: number): void
declare function SetPlayerTechMaxAllowed(whichPlayer: player, techid: number, maximum: number): void
declare function GetPlayerTechMaxAllowed(whichPlayer: player, techid: number): number
declare function AddPlayerTechResearched(whichPlayer: player, techid: number, levels: number): void
declare function SetPlayerTechResearched(whichPlayer: player, techid: number, setToLevel: number): void
declare function GetPlayerTechResearched(whichPlayer: player, techid: number, specificonly: boolean): boolean
declare function GetPlayerTechCount(whichPlayer: player, techid: number, specificonly: boolean): number
declare function SetPlayerUnitsOwner(whichPlayer: player, newOwner: number): void
declare function CripplePlayer(whichPlayer: player, toWhichPlayers: force, flag: boolean): void
declare function SetPlayerAbilityAvailable(whichPlayer: player, abilid: number, avail: boolean): void
declare function SetPlayerState(whichPlayer: player, whichPlayerState: playerstate, value: number): void
declare function RemovePlayer(whichPlayer: player, gameResult: playergameresult): void
declare function CachePlayerHeroData(whichPlayer: player): void
declare function SetFogStateRect(forWhichPlayer: player, whichState: fogstate, where: rect, useSharedVision: boolean): void
declare function SetFogStateRadius(forWhichPlayer: player, whichState: fogstate, centerx: number, centerY: number, radius: number, useSharedVision: boolean): void
declare function SetFogStateRadiusLoc(forWhichPlayer: player, whichState: fogstate, center: location, radius: number, useSharedVision: boolean): void
declare function FogMaskEnable(enable: boolean): void
declare function IsFogMaskEnabled(): boolean
declare function FogEnable(enable: boolean): void
declare function IsFogEnabled(): boolean
declare function CreateFogModifierRect(forWhichPlayer: player, whichState: fogstate, where: rect, useSharedVision: boolean, afterUnits: boolean): fogmodifier
declare function CreateFogModifierRadius(forWhichPlayer: player, whichState: fogstate, centerx: number, centerY: number, radius: number, useSharedVision: boolean, afterUnits: boolean): fogmodifier
declare function CreateFogModifierRadiusLoc(forWhichPlayer: player, whichState: fogstate, center: location, radius: number, useSharedVision: boolean, afterUnits: boolean): fogmodifier
declare function DestroyFogModifier(whichFogModifier: fogmodifier): void
declare function FogModifierStart(whichFogModifier: fogmodifier): void
declare function FogModifierStop(whichFogModifier: fogmodifier): void
declare function VersionGet(): version
declare function VersionCompatible(whichVersion: version): boolean
declare function VersionSupported(whichVersion: version): boolean
declare function EndGame(doScoreScreen: boolean): void
declare function ChangeLevel(newLevel: string, doScoreScreen: boolean): void
declare function RestartGame(doScoreScreen: boolean): void
declare function ReloadGame(): void
declare function SetCampaignMenuRace(r: race): void
declare function SetCampaignMenuRaceEx(campaignIndex: number): void
declare function ForceCampaignSelectScreen(): void
declare function LoadGame(saveFileName: string, doScoreScreen: boolean): void
declare function SaveGame(saveFileName: string): void
declare function RenameSaveDirectory(sourceDirName: string, destDirName: string): boolean
declare function RemoveSaveDirectory(sourceDirName: string): boolean
declare function CopySaveGame(sourceSaveName: string, destSaveName: string): boolean
declare function SaveGameExists(saveName: string): boolean
declare function SyncSelections(): void
declare function SetFloatGameState(whichFloatGameState: fgamestate, value: number): void
declare function GetFloatGameState(whichFloatGameState: fgamestate): number
declare function SetIntegerGameState(whichIntegerGameState: igamestate, value: number): void
declare function GetIntegerGameState(whichIntegerGameState: igamestate): number
declare function SetTutorialCleared(cleared: boolean): void
declare function SetMissionAvailable(campaignNumber: number, missionNumber: number, available: boolean): void
declare function SetCampaignAvailable(campaignNumber: number, available: boolean): void
declare function SetOpCinematicAvailable(campaignNumber: number, available: boolean): void
declare function SetEdCinematicAvailable(campaignNumber: number, available: boolean): void
declare function GetDefaultDifficulty(): gamedifficulty
declare function SetDefaultDifficulty(g: gamedifficulty): void
declare function SetCustomCampaignButtonVisible(whichButton: number, visible: boolean): void
declare function GetCustomCampaignButtonVisible(whichButton: number): boolean
declare function DoNotSaveReplay(): void
declare function DialogCreate(): dialog
declare function DialogDestroy(whichDialog: dialog): void
declare function DialogClear(whichDialog: dialog): void
declare function DialogSetMessage(whichDialog: dialog, messageText: string): void
declare function DialogAddButton(whichDialog: dialog, buttonText: string, hotkey: number): button
declare function DialogAddQuitButton(whichDialog: dialog, doScoreScreen: boolean, buttonText: string, hotkey: number): button
declare function DialogDisplay(whichPlayer: player, whichDialog: dialog, flag: boolean): void
declare function ReloadGameCachesFromDisk(): boolean
declare function InitGameCache(campaignFile: string): gamecache
declare function SaveGameCache(whichCache: gamecache): boolean
declare function StoreInteger(cache: gamecache, missionKey: string, key: string, value: number): void
declare function StoreReal(cache: gamecache, missionKey: string, key: string, value: number): void
declare function StoreBoolean(cache: gamecache, missionKey: string, key: string, value: boolean): void
declare function StoreUnit(cache: gamecache, missionKey: string, key: string, whichUnit: unit): boolean
declare function StoreString(cache: gamecache, missionKey: string, key: string, value: string): boolean
declare function SyncStoredInteger(cache: gamecache, missionKey: string, key: string): void
declare function SyncStoredReal(cache: gamecache, missionKey: string, key: string): void
declare function SyncStoredBoolean(cache: gamecache, missionKey: string, key: string): void
declare function SyncStoredUnit(cache: gamecache, missionKey: string, key: string): void
declare function SyncStoredString(cache: gamecache, missionKey: string, key: string): void
declare function HaveStoredInteger(cache: gamecache, missionKey: string, key: string): boolean
declare function HaveStoredReal(cache: gamecache, missionKey: string, key: string): boolean
declare function HaveStoredBoolean(cache: gamecache, missionKey: string, key: string): boolean
declare function HaveStoredUnit(cache: gamecache, missionKey: string, key: string): boolean
declare function HaveStoredString(cache: gamecache, missionKey: string, key: string): boolean
declare function FlushGameCache(cache: gamecache): void
declare function FlushStoredMission(cache: gamecache, missionKey: string): void
declare function FlushStoredInteger(cache: gamecache, missionKey: string, key: string): void
declare function FlushStoredReal(cache: gamecache, missionKey: string, key: string): void
declare function FlushStoredBoolean(cache: gamecache, missionKey: string, key: string): void
declare function FlushStoredUnit(cache: gamecache, missionKey: string, key: string): void
declare function FlushStoredString(cache: gamecache, missionKey: string, key: string): void
declare function GetStoredInteger(cache: gamecache, missionKey: string, key: string): number
declare function GetStoredReal(cache: gamecache, missionKey: string, key: string): number
declare function GetStoredBoolean(cache: gamecache, missionKey: string, key: string): boolean
declare function GetStoredString(cache: gamecache, missionKey: string, key: string): string
declare function RestoreUnit(cache: gamecache, missionKey: string, key: string, forWhichPlayer: player, x: number, y: number, facing: number): unit
declare function InitHashtable(): hashtable
declare function SaveInteger(table: hashtable, parentKey: number, childKey: number, value: number): void
declare function SaveReal(table: hashtable, parentKey: number, childKey: number, value: number): void
declare function SaveBoolean(table: hashtable, parentKey: number, childKey: number, value: boolean): void
declare function SaveStr(table: hashtable, parentKey: number, childKey: number, value: string): boolean
declare function SavePlayerHandle(table: hashtable, parentKey: number, childKey: number, whichPlayer: player): boolean
declare function SaveWidgetHandle(table: hashtable, parentKey: number, childKey: number, whichWidget: widget): boolean
declare function SaveDestructableHandle(table: hashtable, parentKey: number, childKey: number, whichDestructable: destructable): boolean
declare function SaveItemHandle(table: hashtable, parentKey: number, childKey: number, whichItem: item): boolean
declare function SaveUnitHandle(table: hashtable, parentKey: number, childKey: number, whichUnit: unit): boolean
declare function SaveAbilityHandle(table: hashtable, parentKey: number, childKey: number, whichAbility: ability): boolean
declare function SaveTimerHandle(table: hashtable, parentKey: number, childKey: number, whichTimer: timer): boolean
declare function SaveTriggerHandle(table: hashtable, parentKey: number, childKey: number, whichTrigger: trigger): boolean
declare function SaveTriggerConditionHandle(table: hashtable, parentKey: number, childKey: number, whichTriggercondition: triggercondition): boolean
declare function SaveTriggerActionHandle(table: hashtable, parentKey: number, childKey: number, whichTriggeraction: triggeraction): boolean
declare function SaveTriggerEventHandle(table: hashtable, parentKey: number, childKey: number, whichEvent: event): boolean
declare function SaveForceHandle(table: hashtable, parentKey: number, childKey: number, whichForce: force): boolean
declare function SaveGroupHandle(table: hashtable, parentKey: number, childKey: number, whichGroup: group): boolean
declare function SaveLocationHandle(table: hashtable, parentKey: number, childKey: number, whichLocation: location): boolean
declare function SaveRectHandle(table: hashtable, parentKey: number, childKey: number, whichRect: rect): boolean
declare function SaveBooleanExprHandle(table: hashtable, parentKey: number, childKey: number, whichBoolexpr: boolexpr): boolean
declare function SaveSoundHandle(table: hashtable, parentKey: number, childKey: number, whichSound: sound): boolean
declare function SaveEffectHandle(table: hashtable, parentKey: number, childKey: number, whichEffect: effect): boolean
declare function SaveUnitPoolHandle(table: hashtable, parentKey: number, childKey: number, whichUnitpool: unitpool): boolean
declare function SaveItemPoolHandle(table: hashtable, parentKey: number, childKey: number, whichItempool: itempool): boolean
declare function SaveQuestHandle(table: hashtable, parentKey: number, childKey: number, whichQuest: quest): boolean
declare function SaveQuestItemHandle(table: hashtable, parentKey: number, childKey: number, whichQuestitem: questitem): boolean
declare function SaveDefeatConditionHandle(table: hashtable, parentKey: number, childKey: number, whichDefeatcondition: defeatcondition): boolean
declare function SaveTimerDialogHandle(table: hashtable, parentKey: number, childKey: number, whichTimerdialog: timerdialog): boolean
declare function SaveLeaderboardHandle(table: hashtable, parentKey: number, childKey: number, whichLeaderboard: leaderboard): boolean
declare function SaveMultiboardHandle(table: hashtable, parentKey: number, childKey: number, whichMultiboard: multiboard): boolean
declare function SaveMultiboardItemHandle(table: hashtable, parentKey: number, childKey: number, whichMultiboarditem: multiboarditem): boolean
declare function SaveTrackableHandle(table: hashtable, parentKey: number, childKey: number, whichTrackable: trackable): boolean
declare function SaveDialogHandle(table: hashtable, parentKey: number, childKey: number, whichDialog: dialog): boolean
declare function SaveButtonHandle(table: hashtable, parentKey: number, childKey: number, whichButton: button): boolean
declare function SaveTextTagHandle(table: hashtable, parentKey: number, childKey: number, whichTexttag: texttag): boolean
declare function SaveLightningHandle(table: hashtable, parentKey: number, childKey: number, whichLightning: lightning): boolean
declare function SaveImageHandle(table: hashtable, parentKey: number, childKey: number, whichImage: image): boolean
declare function SaveUbersplatHandle(table: hashtable, parentKey: number, childKey: number, whichUbersplat: ubersplat): boolean
declare function SaveRegionHandle(table: hashtable, parentKey: number, childKey: number, whichRegion: region): boolean
declare function SaveFogStateHandle(table: hashtable, parentKey: number, childKey: number, whichFogState: fogstate): boolean
declare function SaveFogModifierHandle(table: hashtable, parentKey: number, childKey: number, whichFogModifier: fogmodifier): boolean
declare function SaveAgentHandle(table: hashtable, parentKey: number, childKey: number, whichAgent: agent): boolean
declare function SaveHashtableHandle(table: hashtable, parentKey: number, childKey: number, whichHashtable: hashtable): boolean
declare function SaveFrameHandle(table: hashtable, parentKey: number, childKey: number, whichFrameHandle: framehandle): boolean
declare function LoadInteger(table: hashtable, parentKey: number, childKey: number): number
declare function LoadReal(table: hashtable, parentKey: number, childKey: number): number
declare function LoadBoolean(table: hashtable, parentKey: number, childKey: number): boolean
declare function LoadStr(table: hashtable, parentKey: number, childKey: number): string
declare function LoadPlayerHandle(table: hashtable, parentKey: number, childKey: number): player
declare function LoadWidgetHandle(table: hashtable, parentKey: number, childKey: number): widget
declare function LoadDestructableHandle(table: hashtable, parentKey: number, childKey: number): destructable
declare function LoadItemHandle(table: hashtable, parentKey: number, childKey: number): item
declare function LoadUnitHandle(table: hashtable, parentKey: number, childKey: number): unit
declare function LoadAbilityHandle(table: hashtable, parentKey: number, childKey: number): ability
declare function LoadTimerHandle(table: hashtable, parentKey: number, childKey: number): timer
declare function LoadTriggerHandle(table: hashtable, parentKey: number, childKey: number): trigger
declare function LoadTriggerConditionHandle(table: hashtable, parentKey: number, childKey: number): triggercondition
declare function LoadTriggerActionHandle(table: hashtable, parentKey: number, childKey: number): triggeraction
declare function LoadTriggerEventHandle(table: hashtable, parentKey: number, childKey: number): event
declare function LoadForceHandle(table: hashtable, parentKey: number, childKey: number): force
declare function LoadGroupHandle(table: hashtable, parentKey: number, childKey: number): group
declare function LoadLocationHandle(table: hashtable, parentKey: number, childKey: number): location
declare function LoadRectHandle(table: hashtable, parentKey: number, childKey: number): rect
declare function LoadBooleanExprHandle(table: hashtable, parentKey: number, childKey: number): boolexpr
declare function LoadSoundHandle(table: hashtable, parentKey: number, childKey: number): sound
declare function LoadEffectHandle(table: hashtable, parentKey: number, childKey: number): effect
declare function LoadUnitPoolHandle(table: hashtable, parentKey: number, childKey: number): unitpool
declare function LoadItemPoolHandle(table: hashtable, parentKey: number, childKey: number): itempool
declare function LoadQuestHandle(table: hashtable, parentKey: number, childKey: number): quest
declare function LoadQuestItemHandle(table: hashtable, parentKey: number, childKey: number): questitem
declare function LoadDefeatConditionHandle(table: hashtable, parentKey: number, childKey: number): defeatcondition
declare function LoadTimerDialogHandle(table: hashtable, parentKey: number, childKey: number): timerdialog
declare function LoadLeaderboardHandle(table: hashtable, parentKey: number, childKey: number): leaderboard
declare function LoadMultiboardHandle(table: hashtable, parentKey: number, childKey: number): multiboard
declare function LoadMultiboardItemHandle(table: hashtable, parentKey: number, childKey: number): multiboarditem
declare function LoadTrackableHandle(table: hashtable, parentKey: number, childKey: number): trackable
declare function LoadDialogHandle(table: hashtable, parentKey: number, childKey: number): dialog
declare function LoadButtonHandle(table: hashtable, parentKey: number, childKey: number): button
declare function LoadTextTagHandle(table: hashtable, parentKey: number, childKey: number): texttag
declare function LoadLightningHandle(table: hashtable, parentKey: number, childKey: number): lightning
declare function LoadImageHandle(table: hashtable, parentKey: number, childKey: number): image
declare function LoadUbersplatHandle(table: hashtable, parentKey: number, childKey: number): ubersplat
declare function LoadRegionHandle(table: hashtable, parentKey: number, childKey: number): region
declare function LoadFogStateHandle(table: hashtable, parentKey: number, childKey: number): fogstate
declare function LoadFogModifierHandle(table: hashtable, parentKey: number, childKey: number): fogmodifier
declare function LoadHashtableHandle(table: hashtable, parentKey: number, childKey: number): hashtable
declare function LoadFrameHandle(table: hashtable, parentKey: number, childKey: number): framehandle
declare function HaveSavedInteger(table: hashtable, parentKey: number, childKey: number): boolean
declare function HaveSavedReal(table: hashtable, parentKey: number, childKey: number): boolean
declare function HaveSavedBoolean(table: hashtable, parentKey: number, childKey: number): boolean
declare function HaveSavedString(table: hashtable, parentKey: number, childKey: number): boolean
declare function HaveSavedHandle(table: hashtable, parentKey: number, childKey: number): boolean
declare function RemoveSavedInteger(table: hashtable, parentKey: number, childKey: number): void
declare function RemoveSavedReal(table: hashtable, parentKey: number, childKey: number): void
declare function RemoveSavedBoolean(table: hashtable, parentKey: number, childKey: number): void
declare function RemoveSavedString(table: hashtable, parentKey: number, childKey: number): void
declare function RemoveSavedHandle(table: hashtable, parentKey: number, childKey: number): void
declare function FlushParentHashtable(table: hashtable): void
declare function FlushChildHashtable(table: hashtable, parentKey: number): void
declare function GetRandomInt(lowBound: number, highBound: number): number
declare function GetRandomReal(lowBound: number, highBound: number): number
declare function CreateUnitPool(): unitpool
declare function DestroyUnitPool(whichPool: unitpool): void
declare function UnitPoolAddUnitType(whichPool: unitpool, unitId: number, weight: number): void
declare function UnitPoolRemoveUnitType(whichPool: unitpool, unitId: number): void
declare function PlaceRandomUnit(whichPool: unitpool, forWhichPlayer: player, x: number, y: number, facing: number): unit
declare function CreateItemPool(): itempool
declare function DestroyItemPool(whichItemPool: itempool): void
declare function ItemPoolAddItemType(whichItemPool: itempool, itemId: number, weight: number): void
declare function ItemPoolRemoveItemType(whichItemPool: itempool, itemId: number): void
declare function PlaceRandomItem(whichItemPool: itempool, x: number, y: number): item
declare function ChooseRandomCreep(level: number): number
declare function ChooseRandomNPBuilding(): number
declare function ChooseRandomItem(level: number): number
declare function ChooseRandomItemEx(whichType: itemtype, level: number): number
declare function SetRandomSeed(seed: number): void
declare function SetTerrainFog(a: number, b: number, c: number, d: number, e: number): void
declare function ResetTerrainFog(): void
declare function SetUnitFog(a: number, b: number, c: number, d: number, e: number): void
declare function SetTerrainFogEx(style: number, zstart: number, zend: number, density: number, red: number, green: number, blue: number): void
declare function DisplayTextToPlayer(toPlayer: player, x: number, y: number, message: string): void
declare function DisplayTimedTextToPlayer(toPlayer: player, x: number, y: number, duration: number, message: string): void
declare function DisplayTimedTextFromPlayer(toPlayer: player, x: number, y: number, duration: number, message: string): void
declare function ClearTextMessages(): void
declare function SetDayNightModels(terrainDNCFile: string, unitDNCFile: string): void
declare function SetSkyModel(skyModelFile: string): void
declare function EnableUserControl(b: boolean): void
declare function EnableUserUI(b: boolean): void
declare function SuspendTimeOfDay(b: boolean): void
declare function SetTimeOfDayScale(r: number): void
declare function GetTimeOfDayScale(): number
declare function ShowInterface(flag: boolean, fadeDuration: number): void
declare function PauseGame(flag: boolean): void
declare function UnitAddIndicator(whichUnit: unit, red: number, green: number, blue: number, alpha: number): void
declare function AddIndicator(whichWidget: widget, red: number, green: number, blue: number, alpha: number): void
declare function PingMinimap(x: number, y: number, duration: number): void
declare function PingMinimapEx(x: number, y: number, duration: number, red: number, green: number, blue: number, extraEffects: boolean): void
declare function EnableOcclusion(flag: boolean): void
declare function SetIntroShotText(introText: string): void
declare function SetIntroShotModel(introModelPath: string): void
declare function EnableWorldFogBoundary(b: boolean): void
declare function PlayModelCinematic(modelName: string): void
declare function PlayCinematic(movieName: string): void
declare function ForceUIKey(key: string): void
declare function ForceUICancel(): void
declare function DisplayLoadDialog(): void
declare function SetAltMinimapIcon(iconPath: string): void
declare function DisableRestartMission(flag: boolean): void
declare function CreateTextTag(): texttag
declare function DestroyTextTag(t: texttag): void
declare function SetTextTagText(t: texttag, s: string, height: number): void
declare function SetTextTagPos(t: texttag, x: number, y: number, heightOffset: number): void
declare function SetTextTagPosUnit(t: texttag, whichUnit: unit, heightOffset: number): void
declare function SetTextTagColor(t: texttag, red: number, green: number, blue: number, alpha: number): void
declare function SetTextTagVelocity(t: texttag, xvel: number, yvel: number): void
declare function SetTextTagVisibility(t: texttag, flag: boolean): void
declare function SetTextTagSuspended(t: texttag, flag: boolean): void
declare function SetTextTagPermanent(t: texttag, flag: boolean): void
declare function SetTextTagAge(t: texttag, age: number): void
declare function SetTextTagLifespan(t: texttag, lifespan: number): void
declare function SetTextTagFadepoint(t: texttag, fadepoint: number): void
declare function SetReservedLocalHeroButtons(reserved: number): void
declare function GetAllyColorFilterState(): number
declare function SetAllyColorFilterState(state: number): void
declare function GetCreepCampFilterState(): boolean
declare function SetCreepCampFilterState(state: boolean): void
declare function EnableMinimapFilterButtons(enableAlly: boolean, enableCreep: boolean): void
declare function EnableDragSelect(state: boolean, ui: boolean): void
declare function EnablePreSelect(state: boolean, ui: boolean): void
declare function EnableSelect(state: boolean, ui: boolean): void
declare function CreateTrackable(trackableModelPath: string, x: number, y: number, facing: number): trackable
declare function CreateQuest(): quest
declare function DestroyQuest(whichQuest: quest): void
declare function QuestSetTitle(whichQuest: quest, title: string): void
declare function QuestSetDescription(whichQuest: quest, description: string): void
declare function QuestSetIconPath(whichQuest: quest, iconPath: string): void
declare function QuestSetRequired(whichQuest: quest, required: boolean): void
declare function QuestSetCompleted(whichQuest: quest, completed: boolean): void
declare function QuestSetDiscovered(whichQuest: quest, discovered: boolean): void
declare function QuestSetFailed(whichQuest: quest, failed: boolean): void
declare function QuestSetEnabled(whichQuest: quest, enabled: boolean): void
declare function IsQuestRequired(whichQuest: quest): boolean
declare function IsQuestCompleted(whichQuest: quest): boolean
declare function IsQuestDiscovered(whichQuest: quest): boolean
declare function IsQuestFailed(whichQuest: quest): boolean
declare function IsQuestEnabled(whichQuest: quest): boolean
declare function QuestCreateItem(whichQuest: quest): questitem
declare function QuestItemSetDescription(whichQuestItem: questitem, description: string): void
declare function QuestItemSetCompleted(whichQuestItem: questitem, completed: boolean): void
declare function IsQuestItemCompleted(whichQuestItem: questitem): boolean
declare function CreateDefeatCondition(): defeatcondition
declare function DestroyDefeatCondition(whichCondition: defeatcondition): void
declare function DefeatConditionSetDescription(whichCondition: defeatcondition, description: string): void
declare function FlashQuestDialogButton(): void
declare function ForceQuestDialogUpdate(): void
declare function CreateTimerDialog(t: timer): timerdialog
declare function DestroyTimerDialog(whichDialog: timerdialog): void
declare function TimerDialogSetTitle(whichDialog: timerdialog, title: string): void
declare function TimerDialogSetTitleColor(whichDialog: timerdialog, red: number, green: number, blue: number, alpha: number): void
declare function TimerDialogSetTimeColor(whichDialog: timerdialog, red: number, green: number, blue: number, alpha: number): void
declare function TimerDialogSetSpeed(whichDialog: timerdialog, speedMultFactor: number): void
declare function TimerDialogDisplay(whichDialog: timerdialog, display: boolean): void
declare function IsTimerDialogDisplayed(whichDialog: timerdialog): boolean
declare function TimerDialogSetRealTimeRemaining(whichDialog: timerdialog, timeRemaining: number): void
declare function CreateLeaderboard(): leaderboard
declare function DestroyLeaderboard(lb: leaderboard): void
declare function LeaderboardDisplay(lb: leaderboard, show: boolean): void
declare function IsLeaderboardDisplayed(lb: leaderboard): boolean
declare function LeaderboardGetItemCount(lb: leaderboard): number
declare function LeaderboardSetSizeByItemCount(lb: leaderboard, count: number): void
declare function LeaderboardAddItem(lb: leaderboard, label: string, value: number, p: player): void
declare function LeaderboardRemoveItem(lb: leaderboard, index: number): void
declare function LeaderboardRemovePlayerItem(lb: leaderboard, p: player): void
declare function LeaderboardClear(lb: leaderboard): void
declare function LeaderboardSortItemsByValue(lb: leaderboard, ascending: boolean): void
declare function LeaderboardSortItemsByPlayer(lb: leaderboard, ascending: boolean): void
declare function LeaderboardSortItemsByLabel(lb: leaderboard, ascending: boolean): void
declare function LeaderboardHasPlayerItem(lb: leaderboard, p: player): boolean
declare function LeaderboardGetPlayerIndex(lb: leaderboard, p: player): number
declare function LeaderboardSetLabel(lb: leaderboard, label: string): void
declare function LeaderboardGetLabelText(lb: leaderboard): string
declare function PlayerSetLeaderboard(toPlayer: player, lb: leaderboard): void
declare function PlayerGetLeaderboard(toPlayer: player): leaderboard
declare function LeaderboardSetLabelColor(lb: leaderboard, red: number, green: number, blue: number, alpha: number): void
declare function LeaderboardSetValueColor(lb: leaderboard, red: number, green: number, blue: number, alpha: number): void
declare function LeaderboardSetStyle(lb: leaderboard, showLabel: boolean, showNames: boolean, showValues: boolean, showIcons: boolean): void
declare function LeaderboardSetItemValue(lb: leaderboard, whichItem: number, val: number): void
declare function LeaderboardSetItemLabel(lb: leaderboard, whichItem: number, val: string): void
declare function LeaderboardSetItemStyle(lb: leaderboard, whichItem: number, showLabel: boolean, showValue: boolean, showIcon: boolean): void
declare function LeaderboardSetItemLabelColor(lb: leaderboard, whichItem: number, red: number, green: number, blue: number, alpha: number): void
declare function LeaderboardSetItemValueColor(lb: leaderboard, whichItem: number, red: number, green: number, blue: number, alpha: number): void
declare function CreateMultiboard(): multiboard
declare function DestroyMultiboard(lb: multiboard): void
declare function MultiboardDisplay(lb: multiboard, show: boolean): void
declare function IsMultiboardDisplayed(lb: multiboard): boolean
declare function MultiboardMinimize(lb: multiboard, minimize: boolean): void
declare function IsMultiboardMinimized(lb: multiboard): boolean
declare function MultiboardClear(lb: multiboard): void
declare function MultiboardSetTitleText(lb: multiboard, label: string): void
declare function MultiboardGetTitleText(lb: multiboard): string
declare function MultiboardSetTitleTextColor(lb: multiboard, red: number, green: number, blue: number, alpha: number): void
declare function MultiboardGetRowCount(lb: multiboard): number
declare function MultiboardGetColumnCount(lb: multiboard): number
declare function MultiboardSetColumnCount(lb: multiboard, count: number): void
declare function MultiboardSetRowCount(lb: multiboard, count: number): void
declare function MultiboardSetItemsStyle(lb: multiboard, showValues: boolean, showIcons: boolean): void
declare function MultiboardSetItemsValue(lb: multiboard, value: string): void
declare function MultiboardSetItemsValueColor(lb: multiboard, red: number, green: number, blue: number, alpha: number): void
declare function MultiboardSetItemsWidth(lb: multiboard, width: number): void
declare function MultiboardSetItemsIcon(lb: multiboard, iconPath: string): void
declare function MultiboardGetItem(lb: multiboard, row: number, column: number): multiboarditem
declare function MultiboardReleaseItem(mbi: multiboarditem): void
declare function MultiboardSetItemStyle(mbi: multiboarditem, showValue: boolean, showIcon: boolean): void
declare function MultiboardSetItemValue(mbi: multiboarditem, val: string): void
declare function MultiboardSetItemValueColor(mbi: multiboarditem, red: number, green: number, blue: number, alpha: number): void
declare function MultiboardSetItemWidth(mbi: multiboarditem, width: number): void
declare function MultiboardSetItemIcon(mbi: multiboarditem, iconFileName: string): void
declare function MultiboardSuppressDisplay(flag: boolean): void
declare function SetCameraPosition(x: number, y: number): void
declare function SetCameraQuickPosition(x: number, y: number): void
declare function SetCameraBounds(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): void
declare function StopCamera(): void
declare function ResetToGameCamera(duration: number): void
declare function PanCameraTo(x: number, y: number): void
declare function PanCameraToTimed(x: number, y: number, duration: number): void
declare function PanCameraToWithZ(x: number, y: number, zOffsetDest: number): void
declare function PanCameraToTimedWithZ(x: number, y: number, zOffsetDest: number, duration: number): void
declare function SetCinematicCamera(cameraModelFile: string): void
declare function SetCameraRotateMode(x: number, y: number, radiansToSweep: number, duration: number): void
declare function SetCameraField(whichField: camerafield, value: number, duration: number): void
declare function AdjustCameraField(whichField: camerafield, offset: number, duration: number): void
declare function SetCameraTargetController(whichUnit: unit, xoffset: number, yoffset: number, inheritOrientation: boolean): void
declare function SetCameraOrientController(whichUnit: unit, xoffset: number, yoffset: number): void
declare function CreateCameraSetup(): camerasetup
declare function CameraSetupSetField(whichSetup: camerasetup, whichField: camerafield, value: number, duration: number): void
declare function CameraSetupGetField(whichSetup: camerasetup, whichField: camerafield): number
declare function CameraSetupSetDestPosition(whichSetup: camerasetup, x: number, y: number, duration: number): void
declare function CameraSetupGetDestPositionLoc(whichSetup: camerasetup): location
declare function CameraSetupGetDestPositionX(whichSetup: camerasetup): number
declare function CameraSetupGetDestPositionY(whichSetup: camerasetup): number
declare function CameraSetupApply(whichSetup: camerasetup, doPan: boolean, panTimed: boolean): void
declare function CameraSetupApplyWithZ(whichSetup: camerasetup, zDestOffset: number): void
declare function CameraSetupApplyForceDuration(whichSetup: camerasetup, doPan: boolean, forceDuration: number): void
declare function CameraSetupApplyForceDurationWithZ(whichSetup: camerasetup, zDestOffset: number, forceDuration: number): void
declare function CameraSetTargetNoise(mag: number, velocity: number): void
declare function CameraSetSourceNoise(mag: number, velocity: number): void
declare function CameraSetTargetNoiseEx(mag: number, velocity: number, vertOnly: boolean): void
declare function CameraSetSourceNoiseEx(mag: number, velocity: number, vertOnly: boolean): void
declare function CameraSetSmoothingFactor(factor: number): void
declare function SetCineFilterTexture(filename: string): void
declare function SetCineFilterBlendMode(whichMode: blendmode): void
declare function SetCineFilterTexMapFlags(whichFlags: texmapflags): void
declare function SetCineFilterStartUV(minu: number, minv: number, maxu: number, maxv: number): void
declare function SetCineFilterEndUV(minu: number, minv: number, maxu: number, maxv: number): void
declare function SetCineFilterStartColor(red: number, green: number, blue: number, alpha: number): void
declare function SetCineFilterEndColor(red: number, green: number, blue: number, alpha: number): void
declare function SetCineFilterDuration(duration: number): void
declare function DisplayCineFilter(flag: boolean): void
declare function IsCineFilterDisplayed(): boolean
declare function SetCinematicScene(portraitUnitId: number, color: playercolor, speakerTitle: string, text: string, sceneDuration: number, voiceoverDuration: number): void
declare function EndCinematicScene(): void
declare function ForceCinematicSubtitles(flag: boolean): void
declare function GetCameraMargin(whichMargin: number): number
declare function GetCameraBoundMinX(): number
declare function GetCameraBoundMinY(): number
declare function GetCameraBoundMaxX(): number
declare function GetCameraBoundMaxY(): number
declare function GetCameraField(whichField: camerafield): number
declare function GetCameraTargetPositionX(): number
declare function GetCameraTargetPositionY(): number
declare function GetCameraTargetPositionZ(): number
declare function GetCameraTargetPositionLoc(): location
declare function GetCameraEyePositionX(): number
declare function GetCameraEyePositionY(): number
declare function GetCameraEyePositionZ(): number
declare function GetCameraEyePositionLoc(): location
declare function NewSoundEnvironment(environmentName: string): void
declare function CreateSound(fileName: string, looping: boolean, is3D: boolean, stopwhenoutofrange: boolean, fadeInRate: number, fadeOutRate: number, eaxSetting: string): sound
declare function CreateSoundFilenameWithLabel(fileName: string, looping: boolean, is3D: boolean, stopwhenoutofrange: boolean, fadeInRate: number, fadeOutRate: number, SLKEntryName: string): sound
declare function CreateSoundFromLabel(soundLabel: string, looping: boolean, is3D: boolean, stopwhenoutofrange: boolean, fadeInRate: number, fadeOutRate: number): sound
declare function CreateMIDISound(soundLabel: string, fadeInRate: number, fadeOutRate: number): sound
declare function SetSoundParamsFromLabel(soundHandle: sound, soundLabel: string): void
declare function SetSoundDistanceCutoff(soundHandle: sound, cutoff: number): void
declare function SetSoundChannel(soundHandle: sound, channel: number): void
declare function SetSoundVolume(soundHandle: sound, volume: number): void
declare function SetSoundPitch(soundHandle: sound, pitch: number): void
declare function SetSoundPlayPosition(soundHandle: sound, millisecs: number): void
declare function SetSoundDistances(soundHandle: sound, minDist: number, maxDist: number): void
declare function SetSoundConeAngles(soundHandle: sound, inside: number, outside: number, outsideVolume: number): void
declare function SetSoundConeOrientation(soundHandle: sound, x: number, y: number, z: number): void
declare function SetSoundPosition(soundHandle: sound, x: number, y: number, z: number): void
declare function SetSoundVelocity(soundHandle: sound, x: number, y: number, z: number): void
declare function AttachSoundToUnit(soundHandle: sound, whichUnit: unit): void
declare function StartSound(soundHandle: sound): void
declare function StopSound(soundHandle: sound, killWhenDone: boolean, fadeOut: boolean): void
declare function KillSoundWhenDone(soundHandle: sound): void
declare function SetMapMusic(musicName: string, random: boolean, index: number): void
declare function ClearMapMusic(): void
declare function PlayMusic(musicName: string): void
declare function PlayMusicEx(musicName: string, frommsecs: number, fadeinmsecs: number): void
declare function StopMusic(fadeOut: boolean): void
declare function ResumeMusic(): void
declare function PlayThematicMusic(musicFileName: string): void
declare function PlayThematicMusicEx(musicFileName: string, frommsecs: number): void
declare function EndThematicMusic(): void
declare function SetMusicVolume(volume: number): void
declare function SetMusicPlayPosition(millisecs: number): void
declare function SetThematicMusicPlayPosition(millisecs: number): void
declare function SetSoundDuration(soundHandle: sound, duration: number): void
declare function GetSoundDuration(soundHandle: sound): number
declare function GetSoundFileDuration(musicFileName: string): number
declare function VolumeGroupSetVolume(vgroup: volumegroup, scale: number): void
declare function VolumeGroupReset(): void
declare function GetSoundIsPlaying(soundHandle: sound): boolean
declare function GetSoundIsLoading(soundHandle: sound): boolean
declare function RegisterStackedSound(soundHandle: sound, byPosition: boolean, rectwidth: number, rectheight: number): void
declare function UnregisterStackedSound(soundHandle: sound, byPosition: boolean, rectwidth: number, rectheight: number): void
declare function AddWeatherEffect(where: rect, effectID: number): weathereffect
declare function RemoveWeatherEffect(whichEffect: weathereffect): void
declare function EnableWeatherEffect(whichEffect: weathereffect, enable: boolean): void
declare function TerrainDeformCrater(x: number, y: number, radius: number, depth: number, duration: number, permanent: boolean): terraindeformation
declare function TerrainDeformRipple(x: number, y: number, radius: number, depth: number, duration: number, count: number, spaceWaves: number, timeWaves: number, radiusStartPct: number, limitNeg: boolean): terraindeformation
declare function TerrainDeformWave(x: number, y: number, dirX: number, dirY: number, distance: number, speed: number, radius: number, depth: number, trailTime: number, count: number): terraindeformation
declare function TerrainDeformRandom(x: number, y: number, radius: number, minDelta: number, maxDelta: number, duration: number, updateInterval: number): terraindeformation
declare function TerrainDeformStop(deformation: terraindeformation, duration: number): void
declare function TerrainDeformStopAll(): void
declare function AddSpecialEffect(modelName: string, x: number, y: number): effect
declare function AddSpecialEffectLoc(modelName: string, where: location): effect
declare function AddSpecialEffectTarget(modelName: string, targetWidget: widget, attachPointName: string): effect
declare function DestroyEffect(whichEffect: effect): void
declare function AddSpellEffect(abilityString: string, t: effecttype, x: number, y: number): effect
declare function AddSpellEffectLoc(abilityString: string, t: effecttype, where: location): effect
declare function AddSpellEffectById(abilityId: number, t: effecttype, x: number, y: number): effect
declare function AddSpellEffectByIdLoc(abilityId: number, t: effecttype, where: location): effect
declare function AddSpellEffectTarget(modelName: string, t: effecttype, targetWidget: widget, attachPoint: string): effect
declare function AddSpellEffectTargetById(abilityId: number, t: effecttype, targetWidget: widget, attachPoint: string): effect
declare function AddLightning(codeName: string, checkVisibility: boolean, x1: number, y1: number, x2: number, y2: number): lightning
declare function AddLightningEx(codeName: string, checkVisibility: boolean, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): lightning
declare function DestroyLightning(whichBolt: lightning): boolean
declare function MoveLightning(whichBolt: lightning, checkVisibility: boolean, x1: number, y1: number, x2: number, y2: number): boolean
declare function MoveLightningEx(whichBolt: lightning, checkVisibility: boolean, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean
declare function GetLightningColorA(whichBolt: lightning): number
declare function GetLightningColorR(whichBolt: lightning): number
declare function GetLightningColorG(whichBolt: lightning): number
declare function GetLightningColorB(whichBolt: lightning): number
declare function SetLightningColor(whichBolt: lightning, r: number, g: number, b: number, a: number): boolean
declare function GetAbilityEffect(abilityString: string, t: effecttype, index: number): string
declare function GetAbilityEffectById(abilityId: number, t: effecttype, index: number): string
declare function GetAbilitySound(abilityString: string, t: soundtype): string
declare function GetAbilitySoundById(abilityId: number, t: soundtype): string
declare function GetTerrainCliffLevel(x: number, y: number): number
declare function SetWaterBaseColor(red: number, green: number, blue: number, alpha: number): void
declare function SetWaterDeforms(val: boolean): void
declare function GetTerrainType(x: number, y: number): number
declare function GetTerrainVariance(x: number, y: number): number
declare function SetTerrainType(x: number, y: number, terrainType: number, variation: number, area: number, shape: number): void
declare function IsTerrainPathable(x: number, y: number, t: pathingtype): boolean
declare function SetTerrainPathable(x: number, y: number, t: pathingtype, flag: boolean): void
declare function CreateImage(file: string, sizeX: number, sizeY: number, sizeZ: number, posX: number, posY: number, posZ: number, originX: number, originY: number, originZ: number, imageType: number): image
declare function DestroyImage(whichImage: image): void
declare function ShowImage(whichImage: image, flag: boolean): void
declare function SetImageConstantHeight(whichImage: image, flag: boolean, height: number): void
declare function SetImagePosition(whichImage: image, x: number, y: number, z: number): void
declare function SetImageColor(whichImage: image, red: number, green: number, blue: number, alpha: number): void
declare function SetImageRender(whichImage: image, flag: boolean): void
declare function SetImageRenderAlways(whichImage: image, flag: boolean): void
declare function SetImageAboveWater(whichImage: image, flag: boolean, useWaterAlpha: boolean): void
declare function SetImageType(whichImage: image, imageType: number): void
declare function CreateUbersplat(x: number, y: number, name: string, red: number, green: number, blue: number, alpha: number, forcePaused: boolean, noBirthTime: boolean): ubersplat
declare function DestroyUbersplat(whichSplat: ubersplat): void
declare function ResetUbersplat(whichSplat: ubersplat): void
declare function FinishUbersplat(whichSplat: ubersplat): void
declare function ShowUbersplat(whichSplat: ubersplat, flag: boolean): void
declare function SetUbersplatRender(whichSplat: ubersplat, flag: boolean): void
declare function SetUbersplatRenderAlways(whichSplat: ubersplat, flag: boolean): void
declare function SetBlight(whichPlayer: player, x: number, y: number, radius: number, addBlight: boolean): void
declare function SetBlightRect(whichPlayer: player, r: rect, addBlight: boolean): void
declare function SetBlightPoint(whichPlayer: player, x: number, y: number, addBlight: boolean): void
declare function SetBlightLoc(whichPlayer: player, whichLocation: location, radius: number, addBlight: boolean): void
declare function CreateBlightedGoldmine(id: player, x: number, y: number, face: number): unit
declare function IsPointBlighted(x: number, y: number): boolean
declare function SetDoodadAnimation(x: number, y: number, radius: number, doodadID: number, nearestOnly: boolean, animName: string, animRandom: boolean): void
declare function SetDoodadAnimationRect(r: rect, doodadID: number, animName: string, animRandom: boolean): void
declare function StartMeleeAI(num: player, script: string): void
declare function StartCampaignAI(num: player, script: string): void
declare function CommandAI(num: player, command: number, data: number): void
declare function PauseCompAI(p: player, pause: boolean): void
declare function GetAIDifficulty(num: player): aidifficulty
declare function RemoveGuardPosition(hUnit: unit): void
declare function RecycleGuardPosition(hUnit: unit): void
declare function RemoveAllGuardPositions(num: player): void
declare function Cheat(cheatStr: string): void
declare function IsNoVictoryCheat(): boolean
declare function IsNoDefeatCheat(): boolean
declare function Preload(filename: string): void
declare function PreloadEnd(timeout: number): void
declare function PreloadStart(): void
declare function PreloadRefresh(): void
declare function PreloadEndEx(): void
declare function PreloadGenClear(): void
declare function PreloadGenStart(): void
declare function PreloadGenEnd(filename: string): void
declare function Preloader(filename: string): void
declare function AutomationSetTestType(testType: string): void
declare function AutomationTestStart(testName: string): void
declare function AutomationTestEnd(): void
declare function AutomationTestingFinished(): void
declare function BlzGetTriggerPlayerMouseX(): number
declare function BlzGetTriggerPlayerMouseY(): number
declare function BlzGetTriggerPlayerMousePosition(): location
declare function BlzGetTriggerPlayerMouseButton(): mousebuttontype
declare function BlzSetAbilityTooltip(abilCode: number, tooltip: string, level: number): void
declare function BlzSetAbilityActivatedTooltip(abilCode: number, tooltip: string, level: number): void
declare function BlzSetAbilityExtendedTooltip(abilCode: number, extendedTooltip: string, level: number): void
declare function BlzSetAbilityActivatedExtendedTooltip(abilCode: number, extendedTooltip: string, level: number): void
declare function BlzSetAbilityResearchTooltip(abilCode: number, researchTooltip: string, level: number): void
declare function BlzSetAbilityResearchExtendedTooltip(abilCode: number, researchExtendedTooltip: string, level: number): void
declare function BlzGetAbilityTooltip(abilCode: number, level: number): string
declare function BlzGetAbilityActivatedTooltip(abilCode: number, level: number): string
declare function BlzGetAbilityExtendedTooltip(abilCode: number, level: number): string
declare function BlzGetAbilityActivatedExtendedTooltip(abilCode: number, level: number): string
declare function BlzGetAbilityResearchTooltip(abilCode: number, level: number): string
declare function BlzGetAbilityResearchExtendedTooltip(abilCode: number, level: number): string
declare function BlzSetAbilityIcon(abilCode: number, iconPath: string): void
declare function BlzGetAbilityIcon(abilCode: number): string
declare function BlzSetAbilityActivatedIcon(abilCode: number, iconPath: string): void
declare function BlzGetAbilityActivatedIcon(abilCode: number): string
declare function BlzGetAbilityPosX(abilCode: number): number
declare function BlzGetAbilityPosY(abilCode: number): number
declare function BlzSetAbilityPosX(abilCode: number, x: number): void
declare function BlzSetAbilityPosY(abilCode: number, y: number): void
declare function BlzGetAbilityActivatedPosX(abilCode: number): number
declare function BlzGetAbilityActivatedPosY(abilCode: number): number
declare function BlzSetAbilityActivatedPosX(abilCode: number, x: number): void
declare function BlzSetAbilityActivatedPosY(abilCode: number, y: number): void
declare function BlzGetUnitMaxHP(whichUnit: unit): number
declare function BlzSetUnitMaxHP(whichUnit: unit, hp: number): void
declare function BlzGetUnitMaxMana(whichUnit: unit): number
declare function BlzSetUnitMaxMana(whichUnit: unit, mana: number): void
declare function BlzSetItemName(whichItem: item, name: string): void
declare function BlzSetItemDescription(whichItem: item, description: string): void
declare function BlzGetItemDescription(whichItem: item): string
declare function BlzSetItemTooltip(whichItem: item, tooltip: string): void
declare function BlzGetItemTooltip(whichItem: item): string
declare function BlzSetItemExtendedTooltip(whichItem: item, extendedTooltip: string): void
declare function BlzGetItemExtendedTooltip(whichItem: item): string
declare function BlzSetItemIconPath(whichItem: item, iconPath: string): void
declare function BlzGetItemIconPath(whichItem: item): string
declare function BlzSetUnitName(whichUnit: unit, name: string): void
declare function BlzSetHeroProperName(whichUnit: unit, heroProperName: string): void
declare function BlzGetUnitBaseDamage(whichUnit: unit, weaponIndex: number): number
declare function BlzSetUnitBaseDamage(whichUnit: unit, baseDamage: number, weaponIndex: number): void
declare function BlzGetUnitDiceNumber(whichUnit: unit, weaponIndex: number): number
declare function BlzSetUnitDiceNumber(whichUnit: unit, diceNumber: number, weaponIndex: number): void
declare function BlzGetUnitDiceSides(whichUnit: unit, weaponIndex: number): number
declare function BlzSetUnitDiceSides(whichUnit: unit, diceSides: number, weaponIndex: number): void
declare function BlzGetUnitAttackCooldown(whichUnit: unit, weaponIndex: number): number
declare function BlzSetUnitAttackCooldown(whichUnit: unit, cooldown: number, weaponIndex: number): void
declare function BlzSetSpecialEffectColorByPlayer(whichEffect: effect, whichPlayer: player): void
declare function BlzSetSpecialEffectColor(whichEffect: effect, r: number, g: number, b: number): void
declare function BlzSetSpecialEffectAlpha(whichEffect: effect, alpha: number): void
declare function BlzSetSpecialEffectScale(whichEffect: effect, scale: number): void
declare function BlzSetSpecialEffectPosition(whichEffect: effect, x: number, y: number, z: number): void
declare function BlzSetSpecialEffectHeight(whichEffect: effect, height: number): void
declare function BlzSetSpecialEffectTimeScale(whichEffect: effect, timeScale: number): void
declare function BlzSetSpecialEffectTime(whichEffect: effect, time: number): void
declare function BlzSetSpecialEffectOrientation(whichEffect: effect, yaw: number, pitch: number, roll: number): void
declare function BlzSetSpecialEffectYaw(whichEffect: effect, yaw: number): void
declare function BlzSetSpecialEffectPitch(whichEffect: effect, pitch: number): void
declare function BlzSetSpecialEffectRoll(whichEffect: effect, roll: number): void
declare function BlzSetSpecialEffectX(whichEffect: effect, x: number): void
declare function BlzSetSpecialEffectY(whichEffect: effect, y: number): void
declare function BlzSetSpecialEffectZ(whichEffect: effect, z: number): void
declare function BlzSetSpecialEffectPositionLoc(whichEffect: effect, loc: location): void
declare function BlzGetLocalSpecialEffectX(whichEffect: effect): number
declare function BlzGetLocalSpecialEffectY(whichEffect: effect): number
declare function BlzGetLocalSpecialEffectZ(whichEffect: effect): number
declare function BlzSpecialEffectClearSubAnimations(whichEffect: effect): void
declare function BlzSpecialEffectRemoveSubAnimation(whichEffect: effect, whichSubAnim: subanimtype): void
declare function BlzSpecialEffectAddSubAnimation(whichEffect: effect, whichSubAnim: subanimtype): void
declare function BlzPlaySpecialEffect(whichEffect: effect, whichAnim: animtype): void
declare function BlzPlaySpecialEffectWithTimeScale(whichEffect: effect, whichAnim: animtype, timeScale: number): void
declare function BlzGetAnimName(whichAnim: animtype): string
declare function BlzGetUnitArmor(whichUnit: unit): number
declare function BlzSetUnitArmor(whichUnit: unit, armorAmount: number): void
declare function BlzUnitHideAbility(whichUnit: unit, abilId: number, flag: boolean): void
declare function BlzUnitDisableAbility(whichUnit: unit, abilId: number, flag: boolean, hideUI: boolean): void
declare function BlzUnitCancelTimedLife(whichUnit: unit): void
declare function BlzIsUnitSelectable(whichUnit: unit): boolean
declare function BlzIsUnitInvulnerable(whichUnit: unit): boolean
declare function BlzUnitInterruptAttack(whichUnit: unit): void
declare function BlzGetUnitCollisionSize(whichUnit: unit): number
declare function BlzGetAbilityManaCost(abilId: number, level: number): number
declare function BlzGetAbilityCooldown(abilId: number, level: number): number
declare function BlzSetUnitAbilityCooldown(whichUnit: unit, abilId: number, level: number, cooldown: number): void
declare function BlzGetUnitAbilityCooldown(whichUnit: unit, abilId: number, level: number): number
declare function BlzGetUnitAbilityCooldownRemaining(whichUnit: unit, abilId: number): number
declare function BlzEndUnitAbilityCooldown(whichUnit: unit, abilCode: number): void
declare function BlzGetUnitAbilityManaCost(whichUnit: unit, abilId: number, level: number): number
declare function BlzSetUnitAbilityManaCost(whichUnit: unit, abilId: number, level: number, manaCost: number): void
declare function BlzGetLocalUnitZ(whichUnit: unit): number
declare function BlzDecPlayerTechResearched(whichPlayer: player, techid: number, levels: number): void
declare function BlzSetEventDamage(damage: number): void
declare function BlzGetEventDamageTarget(): unit
declare function BlzGetEventAttackType(): attacktype
declare function BlzGetEventDamageType(): damagetype
declare function BlzGetEventWeaponType(): weapontype
declare function BlzSetEventAttackType(attackType: attacktype): boolean
declare function BlzSetEventDamageType(damageType: damagetype): boolean
declare function BlzSetEventWeaponType(weaponType: weapontype): boolean
declare function RequestExtraIntegerData(dataType: number, whichPlayer: player, param1: string, param2: string, param3: boolean, param4: number, param5: number, param6: number): number
declare function RequestExtraBooleanData(dataType: number, whichPlayer: player, param1: string, param2: string, param3: boolean, param4: number, param5: number, param6: number): boolean
declare function RequestExtraStringData(dataType: number, whichPlayer: player, param1: string, param2: string, param3: boolean, param4: number, param5: number, param6: number): string
declare function RequestExtraRealData(dataType: number, whichPlayer: player, param1: string, param2: string, param3: boolean, param4: number, param5: number, param6: number): number
declare function BlzGetUnitZ(whichUnit: unit): number
declare function BlzEnableSelections(enableSelection: boolean, enableSelectionCircle: boolean): void
declare function BlzIsSelectionEnabled(): boolean
declare function BlzIsSelectionCircleEnabled(): boolean
declare function BlzCameraSetupApplyForceDurationSmooth(whichSetup: camerasetup, doPan: boolean, forcedDuration: number, easeInDuration: number, easeOutDuration: number, smoothFactor: number): void
declare function BlzEnableTargetIndicator(enable: boolean): void
declare function BlzIsTargetIndicatorEnabled(): boolean
declare function BlzGetOriginFrame(frameType: originframetype, index: number): framehandle
declare function BlzEnableUIAutoPosition(enable: boolean): void
declare function BlzHideOriginFrames(enable: boolean): void
declare function BlzConvertColor(a: number, r: number, g: number, b: number): number
declare function BlzLoadTOCFile(TOCFile: string): boolean
declare function BlzCreateFrame(name: string, owner: framehandle, priority: number, createContext: number): framehandle
declare function BlzCreateSimpleFrame(name: string, owner: framehandle, createContext: number): framehandle
declare function BlzCreateFrameByType(typeName: string, name: string, owner: framehandle, inherits: string, createContext: number): framehandle
declare function BlzDestroyFrame(frame: framehandle): void
declare function BlzFrameSetPoint(frame: framehandle, point: framepointtype, relative: framehandle, relativePoint: framepointtype, x: number, y: number): void
declare function BlzFrameSetAbsPoint(frame: framehandle, point: framepointtype, x: number, y: number): void
declare function BlzFrameClearAllPoints(frame: framehandle): void
declare function BlzFrameSetAllPoints(frame: framehandle, relative: framehandle): void
declare function BlzFrameSetVisible(frame: framehandle, visible: boolean): void
declare function BlzFrameIsVisible(frame: framehandle): boolean
declare function BlzGetFrameByName(name: string, createContext: number): framehandle
declare function BlzFrameGetName(frame: framehandle): string
declare function BlzFrameClick(frame: framehandle): void
declare function BlzFrameSetText(frame: framehandle, text: string): void
declare function BlzFrameGetText(frame: framehandle): string
declare function BlzFrameSetTextSizeLimit(frame: framehandle, size: number): void
declare function BlzFrameGetTextSizeLimit(frame: framehandle): number
declare function BlzFrameSetTextColor(frame: framehandle, color: number): void
declare function BlzFrameSetFocus(frame: framehandle, flag: boolean): void
declare function BlzFrameSetModel(frame: framehandle, modelFile: string, cameraIndex: number): void
declare function BlzFrameSetEnable(frame: framehandle, enabled: boolean): void
declare function BlzFrameGetEnable(frame: framehandle): boolean
declare function BlzFrameSetAlpha(frame: framehandle, alpha: number): void
declare function BlzFrameGetAlpha(frame: framehandle): number
declare function BlzFrameSetSpriteAnimate(frame: framehandle, primaryProp: number, flags: number): void
declare function BlzFrameSetTexture(frame: framehandle, texFile: string, flag: number, blend: boolean): void
declare function BlzFrameSetScale(frame: framehandle, scale: number): void
declare function BlzFrameSetTooltip(frame: framehandle, tooltip: framehandle): void
declare function BlzFrameCageMouse(frame: framehandle, enable: boolean): void
declare function BlzFrameSetValue(frame: framehandle, value: number): void
declare function BlzFrameGetValue(frame: framehandle): number
declare function BlzFrameSetMinMaxValue(frame: framehandle, minValue: number, maxValue: number): void
declare function BlzFrameSetStepSize(frame: framehandle, stepSize: number): void
declare function BlzFrameSetSize(frame: framehandle, width: number, height: number): void
declare function BlzFrameSetVertexColor(frame: framehandle, color: number): void
declare function BlzFrameSetLevel(frame: framehandle, level: number): void
declare function BlzFrameSetParent(frame: framehandle, parent: framehandle): void
declare function BlzFrameGetParent(frame: framehandle): framehandle
declare function BlzFrameGetHeight(frame: framehandle): number
declare function BlzFrameGetWidth(frame: framehandle): number
declare function BlzFrameSetFont(frame: framehandle, fileName: string, height: number, flags: number): void
declare function BlzFrameSetTextAlignment(frame: framehandle, vert: textaligntype, horz: textaligntype): void
declare function BlzTriggerRegisterFrameEvent(whichTrigger: trigger, frame: framehandle, eventId: frameeventtype): event
declare function BlzGetTriggerFrame(): framehandle
declare function BlzGetTriggerFrameEvent(): frameeventtype
declare function BlzTriggerRegisterPlayerSyncEvent(whichTrigger: trigger, whichPlayer: player, prefix: string, fromServer: boolean): event
declare function BlzSendSyncData(prefix: string, data: string): boolean
declare function BlzGetTriggerSyncPrefix(): string
declare function BlzGetTriggerSyncData(): string
declare function BlzTriggerRegisterPlayerKeyEvent(whichTrigger: trigger, whichPlayer: player, key: oskeytype, metaKey: number, keyDown: boolean): event
declare function BlzGetTriggerPlayerKey(): oskeytype
declare function BlzGetTriggerPlayerMetaKey(): number
declare function BlzGetTriggerPlayerIsKeyDown(): boolean
declare function BlzEnableCursor(enable: boolean): void
declare function BlzSetMousePos(x: number, y: number): void
declare function BlzGetLocalClientWidth(): number
declare function BlzGetLocalClientHeight(): number
declare function BlzIsLocalClientActive(): boolean
declare function BlzGetMouseFocusUnit(): unit
declare function BlzChangeMinimapTerrainTex(texFile: string): boolean
declare function BlzGetLocale(): string
declare function BlzGetSpecialEffectScale(whichEffect: effect): number
declare function BlzSetSpecialEffectMatrixScale(whichEffect: effect, x: number, y: number, z: number): void
declare function BlzResetSpecialEffectMatrix(whichEffect: effect): void
declare function BlzGetUnitAbility(whichUnit: unit, abilId: number): ability
declare function BlzGetUnitAbilityByIndex(whichUnit: unit, index: number): ability
declare function BlzDisplayChatMessage(whichPlayer: player, recipient: number, message: string): void
declare function BlzPauseUnitEx(whichUnit: unit, flag: boolean): void
declare function BlzBitOr(x: number, y: number): number
declare function BlzBitAnd(x: number, y: number): number
declare function BlzBitXor(x: number, y: number): number
declare function BlzGetAbilityBooleanField(whichAbility: ability, whichField: abilitybooleanfield): boolean
declare function BlzGetAbilityIntegerField(whichAbility: ability, whichField: abilityintegerfield): number
declare function BlzGetAbilityRealField(whichAbility: ability, whichField: abilityrealfield): number
declare function BlzGetAbilityStringField(whichAbility: ability, whichField: abilitystringfield): string
declare function BlzGetAbilityBooleanLevelField(whichAbility: ability, whichField: abilitybooleanlevelfield, level: number): boolean
declare function BlzGetAbilityIntegerLevelField(whichAbility: ability, whichField: abilityintegerlevelfield, level: number): number
declare function BlzGetAbilityRealLevelField(whichAbility: ability, whichField: abilityreallevelfield, level: number): number
declare function BlzGetAbilityStringLevelField(whichAbility: ability, whichField: abilitystringlevelfield, level: number): string
declare function BlzGetAbilityBooleanLevelArrayField(whichAbility: ability, whichField: abilitybooleanlevelarrayfield, level: number, index: number): boolean
declare function BlzGetAbilityIntegerLevelArrayField(whichAbility: ability, whichField: abilityintegerlevelarrayfield, level: number, index: number): number
declare function BlzGetAbilityRealLevelArrayField(whichAbility: ability, whichField: abilityreallevelarrayfield, level: number, index: number): number
declare function BlzGetAbilityStringLevelArrayField(whichAbility: ability, whichField: abilitystringlevelarrayfield, level: number, index: number): string
declare function BlzSetAbilityBooleanField(whichAbility: ability, whichField: abilitybooleanfield, value: boolean): boolean
declare function BlzSetAbilityIntegerField(whichAbility: ability, whichField: abilityintegerfield, value: number): boolean
declare function BlzSetAbilityRealField(whichAbility: ability, whichField: abilityrealfield, value: number): boolean
declare function BlzSetAbilityStringField(whichAbility: ability, whichField: abilitystringfield, value: string): boolean
declare function BlzSetAbilityBooleanLevelField(whichAbility: ability, whichField: abilitybooleanlevelfield, level: number, value: boolean): boolean
declare function BlzSetAbilityIntegerLevelField(whichAbility: ability, whichField: abilityintegerlevelfield, level: number, value: number): boolean
declare function BlzSetAbilityRealLevelField(whichAbility: ability, whichField: abilityreallevelfield, level: number, value: number): boolean
declare function BlzSetAbilityStringLevelField(whichAbility: ability, whichField: abilitystringlevelfield, level: number, value: string): boolean
declare function BlzSetAbilityBooleanLevelArrayField(whichAbility: ability, whichField: abilitybooleanlevelarrayfield, level: number, index: number, value: boolean): boolean
declare function BlzSetAbilityIntegerLevelArrayField(whichAbility: ability, whichField: abilityintegerlevelarrayfield, level: number, index: number, value: number): boolean
declare function BlzSetAbilityRealLevelArrayField(whichAbility: ability, whichField: abilityreallevelarrayfield, level: number, index: number, value: number): boolean
declare function BlzSetAbilityStringLevelArrayField(whichAbility: ability, whichField: abilitystringlevelarrayfield, level: number, index: number, value: string): boolean
declare function BlzAddAbilityBooleanLevelArrayField(whichAbility: ability, whichField: abilitybooleanlevelarrayfield, level: number, value: boolean): boolean
declare function BlzAddAbilityIntegerLevelArrayField(whichAbility: ability, whichField: abilityintegerlevelarrayfield, level: number, value: number): boolean
declare function BlzAddAbilityRealLevelArrayField(whichAbility: ability, whichField: abilityreallevelarrayfield, level: number, value: number): boolean
declare function BlzAddAbilityStringLevelArrayField(whichAbility: ability, whichField: abilitystringlevelarrayfield, level: number, value: string): boolean
declare function BlzRemoveAbilityBooleanLevelArrayField(whichAbility: ability, whichField: abilitybooleanlevelarrayfield, level: number, value: boolean): boolean
declare function BlzRemoveAbilityIntegerLevelArrayField(whichAbility: ability, whichField: abilityintegerlevelarrayfield, level: number, value: number): boolean
declare function BlzRemoveAbilityRealLevelArrayField(whichAbility: ability, whichField: abilityreallevelarrayfield, level: number, value: number): boolean
declare function BlzRemoveAbilityStringLevelArrayField(whichAbility: ability, whichField: abilitystringlevelarrayfield, level: number, value: string): boolean
declare function BlzGetItemAbilityByIndex(whichItem: item, index: number): ability
declare function BlzGetItemAbility(whichItem: item, abilCode: number): ability
declare function BlzItemAddAbility(whichItem: item, abilCode: number): boolean
declare function BlzGetItemBooleanField(whichItem: item, whichField: itembooleanfield): boolean
declare function BlzGetItemIntegerField(whichItem: item, whichField: itemintegerfield): number
declare function BlzGetItemRealField(whichItem: item, whichField: itemrealfield): number
declare function BlzGetItemStringField(whichItem: item, whichField: itemstringfield): string
declare function BlzSetItemBooleanField(whichItem: item, whichField: itembooleanfield, value: boolean): boolean
declare function BlzSetItemIntegerField(whichItem: item, whichField: itemintegerfield, value: number): boolean
declare function BlzSetItemRealField(whichItem: item, whichField: itemrealfield, value: number): boolean
declare function BlzSetItemStringField(whichItem: item, whichField: itemstringfield, value: string): boolean
declare function BlzItemRemoveAbility(whichItem: item, abilCode: number): boolean
declare function BlzGetUnitBooleanField(whichUnit: unit, whichField: unitbooleanfield): boolean
declare function BlzGetUnitIntegerField(whichUnit: unit, whichField: unitintegerfield): number
declare function BlzGetUnitRealField(whichUnit: unit, whichField: unitrealfield): number
declare function BlzGetUnitStringField(whichUnit: unit, whichField: unitstringfield): string
declare function BlzSetUnitBooleanField(whichUnit: unit, whichField: unitbooleanfield, value: boolean): boolean
declare function BlzSetUnitIntegerField(whichUnit: unit, whichField: unitintegerfield, value: number): boolean
declare function BlzSetUnitRealField(whichUnit: unit, whichField: unitrealfield, value: number): boolean
declare function BlzSetUnitStringField(whichUnit: unit, whichField: unitstringfield, value: string): boolean
declare function BlzGetUnitWeaponBooleanField(whichUnit: unit, whichField: unitweaponbooleanfield, index: number): boolean
declare function BlzGetUnitWeaponIntegerField(whichUnit: unit, whichField: unitweaponintegerfield, index: number): number
declare function BlzGetUnitWeaponRealField(whichUnit: unit, whichField: unitweaponrealfield, index: number): number
declare function BlzGetUnitWeaponStringField(whichUnit: unit, whichField: unitweaponstringfield, index: number): string
declare function BlzSetUnitWeaponBooleanField(whichUnit: unit, whichField: unitweaponbooleanfield, index: number, value: boolean): boolean
declare function BlzSetUnitWeaponIntegerField(whichUnit: unit, whichField: unitweaponintegerfield, index: number, value: number): boolean
declare function BlzSetUnitWeaponRealField(whichUnit: unit, whichField: unitweaponrealfield, index: number, value: number): boolean
declare function BlzSetUnitWeaponStringField(whichUnit: unit, whichField: unitweaponstringfield, index: number, value: string): boolean

declare const FALSE: boolean
declare const TRUE: boolean
declare const JASS_MAX_ARRAY_SIZE: number
declare const PLAYER_NEUTRAL_PASSIVE: number
declare const PLAYER_NEUTRAL_AGGRESSIVE: number
declare const PLAYER_COLOR_RED: playercolor
declare const PLAYER_COLOR_BLUE: playercolor
declare const PLAYER_COLOR_CYAN: playercolor
declare const PLAYER_COLOR_PURPLE: playercolor
declare const PLAYER_COLOR_YELLOW: playercolor
declare const PLAYER_COLOR_ORANGE: playercolor
declare const PLAYER_COLOR_GREEN: playercolor
declare const PLAYER_COLOR_PINK: playercolor
declare const PLAYER_COLOR_LIGHT_GRAY: playercolor
declare const PLAYER_COLOR_LIGHT_BLUE: playercolor
declare const PLAYER_COLOR_AQUA: playercolor
declare const PLAYER_COLOR_BROWN: playercolor
declare const PLAYER_COLOR_MAROON: playercolor
declare const PLAYER_COLOR_NAVY: playercolor
declare const PLAYER_COLOR_TURQUOISE: playercolor
declare const PLAYER_COLOR_VIOLET: playercolor
declare const PLAYER_COLOR_WHEAT: playercolor
declare const PLAYER_COLOR_PEACH: playercolor
declare const PLAYER_COLOR_MINT: playercolor
declare const PLAYER_COLOR_LAVENDER: playercolor
declare const PLAYER_COLOR_COAL: playercolor
declare const PLAYER_COLOR_SNOW: playercolor
declare const PLAYER_COLOR_EMERALD: playercolor
declare const PLAYER_COLOR_PEANUT: playercolor
declare const RACE_HUMAN: race
declare const RACE_ORC: race
declare const RACE_UNDEAD: race
declare const RACE_NIGHTELF: race
declare const RACE_DEMON: race
declare const RACE_OTHER: race
declare const PLAYER_GAME_RESULT_VICTORY: playergameresult
declare const PLAYER_GAME_RESULT_DEFEAT: playergameresult
declare const PLAYER_GAME_RESULT_TIE: playergameresult
declare const PLAYER_GAME_RESULT_NEUTRAL: playergameresult
declare const ALLIANCE_PASSIVE: alliancetype
declare const ALLIANCE_HELP_REQUEST: alliancetype
declare const ALLIANCE_HELP_RESPONSE: alliancetype
declare const ALLIANCE_SHARED_XP: alliancetype
declare const ALLIANCE_SHARED_SPELLS: alliancetype
declare const ALLIANCE_SHARED_VISION: alliancetype
declare const ALLIANCE_SHARED_CONTROL: alliancetype
declare const ALLIANCE_SHARED_ADVANCED_CONTROL: alliancetype
declare const ALLIANCE_RESCUABLE: alliancetype
declare const ALLIANCE_SHARED_VISION_FORCED: alliancetype
declare const VERSION_REIGN_OF_CHAOS: version
declare const VERSION_FROZEN_THRONE: version
declare const ATTACK_TYPE_NORMAL: attacktype
declare const ATTACK_TYPE_MELEE: attacktype
declare const ATTACK_TYPE_PIERCE: attacktype
declare const ATTACK_TYPE_SIEGE: attacktype
declare const ATTACK_TYPE_MAGIC: attacktype
declare const ATTACK_TYPE_CHAOS: attacktype
declare const ATTACK_TYPE_HERO: attacktype
declare const DAMAGE_TYPE_UNKNOWN: damagetype
declare const DAMAGE_TYPE_NORMAL: damagetype
declare const DAMAGE_TYPE_ENHANCED: damagetype
declare const DAMAGE_TYPE_FIRE: damagetype
declare const DAMAGE_TYPE_COLD: damagetype
declare const DAMAGE_TYPE_LIGHTNING: damagetype
declare const DAMAGE_TYPE_POISON: damagetype
declare const DAMAGE_TYPE_DISEASE: damagetype
declare const DAMAGE_TYPE_DIVINE: damagetype
declare const DAMAGE_TYPE_MAGIC: damagetype
declare const DAMAGE_TYPE_SONIC: damagetype
declare const DAMAGE_TYPE_ACID: damagetype
declare const DAMAGE_TYPE_FORCE: damagetype
declare const DAMAGE_TYPE_DEATH: damagetype
declare const DAMAGE_TYPE_MIND: damagetype
declare const DAMAGE_TYPE_PLANT: damagetype
declare const DAMAGE_TYPE_DEFENSIVE: damagetype
declare const DAMAGE_TYPE_DEMOLITION: damagetype
declare const DAMAGE_TYPE_SLOW_POISON: damagetype
declare const DAMAGE_TYPE_SPIRIT_LINK: damagetype
declare const DAMAGE_TYPE_SHADOW_STRIKE: damagetype
declare const DAMAGE_TYPE_UNIVERSAL: damagetype
declare const WEAPON_TYPE_WHOKNOWS: weapontype
declare const WEAPON_TYPE_METAL_LIGHT_CHOP: weapontype
declare const WEAPON_TYPE_METAL_MEDIUM_CHOP: weapontype
declare const WEAPON_TYPE_METAL_HEAVY_CHOP: weapontype
declare const WEAPON_TYPE_METAL_LIGHT_SLICE: weapontype
declare const WEAPON_TYPE_METAL_MEDIUM_SLICE: weapontype
declare const WEAPON_TYPE_METAL_HEAVY_SLICE: weapontype
declare const WEAPON_TYPE_METAL_MEDIUM_BASH: weapontype
declare const WEAPON_TYPE_METAL_HEAVY_BASH: weapontype
declare const WEAPON_TYPE_METAL_MEDIUM_STAB: weapontype
declare const WEAPON_TYPE_METAL_HEAVY_STAB: weapontype
declare const WEAPON_TYPE_WOOD_LIGHT_SLICE: weapontype
declare const WEAPON_TYPE_WOOD_MEDIUM_SLICE: weapontype
declare const WEAPON_TYPE_WOOD_HEAVY_SLICE: weapontype
declare const WEAPON_TYPE_WOOD_LIGHT_BASH: weapontype
declare const WEAPON_TYPE_WOOD_MEDIUM_BASH: weapontype
declare const WEAPON_TYPE_WOOD_HEAVY_BASH: weapontype
declare const WEAPON_TYPE_WOOD_LIGHT_STAB: weapontype
declare const WEAPON_TYPE_WOOD_MEDIUM_STAB: weapontype
declare const WEAPON_TYPE_CLAW_LIGHT_SLICE: weapontype
declare const WEAPON_TYPE_CLAW_MEDIUM_SLICE: weapontype
declare const WEAPON_TYPE_CLAW_HEAVY_SLICE: weapontype
declare const WEAPON_TYPE_AXE_MEDIUM_CHOP: weapontype
declare const WEAPON_TYPE_ROCK_HEAVY_BASH: weapontype
declare const PATHING_TYPE_ANY: pathingtype
declare const PATHING_TYPE_WALKABILITY: pathingtype
declare const PATHING_TYPE_FLYABILITY: pathingtype
declare const PATHING_TYPE_BUILDABILITY: pathingtype
declare const PATHING_TYPE_PEONHARVESTPATHING: pathingtype
declare const PATHING_TYPE_BLIGHTPATHING: pathingtype
declare const PATHING_TYPE_FLOATABILITY: pathingtype
declare const PATHING_TYPE_AMPHIBIOUSPATHING: pathingtype
declare const MOUSE_BUTTON_TYPE_LEFT: mousebuttontype
declare const MOUSE_BUTTON_TYPE_MIDDLE: mousebuttontype
declare const MOUSE_BUTTON_TYPE_RIGHT: mousebuttontype
declare const ANIM_TYPE_BIRTH: animtype
declare const ANIM_TYPE_DEATH: animtype
declare const ANIM_TYPE_DECAY: animtype
declare const ANIM_TYPE_DISSIPATE: animtype
declare const ANIM_TYPE_STAND: animtype
declare const ANIM_TYPE_WALK: animtype
declare const ANIM_TYPE_ATTACK: animtype
declare const ANIM_TYPE_MORPH: animtype
declare const ANIM_TYPE_SLEEP: animtype
declare const ANIM_TYPE_SPELL: animtype
declare const ANIM_TYPE_PORTRAIT: animtype
declare const SUBANIM_TYPE_ROOTED: subanimtype
declare const SUBANIM_TYPE_ALTERNATE_EX: subanimtype
declare const SUBANIM_TYPE_LOOPING: subanimtype
declare const SUBANIM_TYPE_SLAM: subanimtype
declare const SUBANIM_TYPE_THROW: subanimtype
declare const SUBANIM_TYPE_SPIKED: subanimtype
declare const SUBANIM_TYPE_FAST: subanimtype
declare const SUBANIM_TYPE_SPIN: subanimtype
declare const SUBANIM_TYPE_READY: subanimtype
declare const SUBANIM_TYPE_CHANNEL: subanimtype
declare const SUBANIM_TYPE_DEFEND: subanimtype
declare const SUBANIM_TYPE_VICTORY: subanimtype
declare const SUBANIM_TYPE_TURN: subanimtype
declare const SUBANIM_TYPE_LEFT: subanimtype
declare const SUBANIM_TYPE_RIGHT: subanimtype
declare const SUBANIM_TYPE_FIRE: subanimtype
declare const SUBANIM_TYPE_FLESH: subanimtype
declare const SUBANIM_TYPE_HIT: subanimtype
declare const SUBANIM_TYPE_WOUNDED: subanimtype
declare const SUBANIM_TYPE_LIGHT: subanimtype
declare const SUBANIM_TYPE_MODERATE: subanimtype
declare const SUBANIM_TYPE_SEVERE: subanimtype
declare const SUBANIM_TYPE_CRITICAL: subanimtype
declare const SUBANIM_TYPE_COMPLETE: subanimtype
declare const SUBANIM_TYPE_GOLD: subanimtype
declare const SUBANIM_TYPE_LUMBER: subanimtype
declare const SUBANIM_TYPE_WORK: subanimtype
declare const SUBANIM_TYPE_TALK: subanimtype
declare const SUBANIM_TYPE_FIRST: subanimtype
declare const SUBANIM_TYPE_SECOND: subanimtype
declare const SUBANIM_TYPE_THIRD: subanimtype
declare const SUBANIM_TYPE_FOURTH: subanimtype
declare const SUBANIM_TYPE_FIFTH: subanimtype
declare const SUBANIM_TYPE_ONE: subanimtype
declare const SUBANIM_TYPE_TWO: subanimtype
declare const SUBANIM_TYPE_THREE: subanimtype
declare const SUBANIM_TYPE_FOUR: subanimtype
declare const SUBANIM_TYPE_FIVE: subanimtype
declare const SUBANIM_TYPE_SMALL: subanimtype
declare const SUBANIM_TYPE_MEDIUM: subanimtype
declare const SUBANIM_TYPE_LARGE: subanimtype
declare const SUBANIM_TYPE_UPGRADE: subanimtype
declare const SUBANIM_TYPE_DRAIN: subanimtype
declare const SUBANIM_TYPE_FILL: subanimtype
declare const SUBANIM_TYPE_CHAINLIGHTNING: subanimtype
declare const SUBANIM_TYPE_EATTREE: subanimtype
declare const SUBANIM_TYPE_PUKE: subanimtype
declare const SUBANIM_TYPE_FLAIL: subanimtype
declare const SUBANIM_TYPE_OFF: subanimtype
declare const SUBANIM_TYPE_SWIM: subanimtype
declare const SUBANIM_TYPE_ENTANGLE: subanimtype
declare const SUBANIM_TYPE_BERSERK: subanimtype
declare const RACE_PREF_HUMAN: racepreference
declare const RACE_PREF_ORC: racepreference
declare const RACE_PREF_NIGHTELF: racepreference
declare const RACE_PREF_UNDEAD: racepreference
declare const RACE_PREF_DEMON: racepreference
declare const RACE_PREF_RANDOM: racepreference
declare const RACE_PREF_USER_SELECTABLE: racepreference
declare const MAP_CONTROL_USER: mapcontrol
declare const MAP_CONTROL_COMPUTER: mapcontrol
declare const MAP_CONTROL_RESCUABLE: mapcontrol
declare const MAP_CONTROL_NEUTRAL: mapcontrol
declare const MAP_CONTROL_CREEP: mapcontrol
declare const MAP_CONTROL_NONE: mapcontrol
declare const GAME_TYPE_MELEE: gametype
declare const GAME_TYPE_FFA: gametype
declare const GAME_TYPE_USE_MAP_SETTINGS: gametype
declare const GAME_TYPE_BLIZ: gametype
declare const GAME_TYPE_ONE_ON_ONE: gametype
declare const GAME_TYPE_TWO_TEAM_PLAY: gametype
declare const GAME_TYPE_THREE_TEAM_PLAY: gametype
declare const GAME_TYPE_FOUR_TEAM_PLAY: gametype
declare const MAP_FOG_HIDE_TERRAIN: mapflag
declare const MAP_FOG_MAP_EXPLORED: mapflag
declare const MAP_FOG_ALWAYS_VISIBLE: mapflag
declare const MAP_USE_HANDICAPS: mapflag
declare const MAP_OBSERVERS: mapflag
declare const MAP_OBSERVERS_ON_DEATH: mapflag
declare const MAP_FIXED_COLORS: mapflag
declare const MAP_LOCK_RESOURCE_TRADING: mapflag
declare const MAP_RESOURCE_TRADING_ALLIES_ONLY: mapflag
declare const MAP_LOCK_ALLIANCE_CHANGES: mapflag
declare const MAP_ALLIANCE_CHANGES_HIDDEN: mapflag
declare const MAP_CHEATS: mapflag
declare const MAP_CHEATS_HIDDEN: mapflag
declare const MAP_LOCK_SPEED: mapflag
declare const MAP_LOCK_RANDOM_SEED: mapflag
declare const MAP_SHARED_ADVANCED_CONTROL: mapflag
declare const MAP_RANDOM_HERO: mapflag
declare const MAP_RANDOM_RACES: mapflag
declare const MAP_RELOADED: mapflag
declare const MAP_PLACEMENT_RANDOM: placement
declare const MAP_PLACEMENT_FIXED: placement
declare const MAP_PLACEMENT_USE_MAP_SETTINGS: placement
declare const MAP_PLACEMENT_TEAMS_TOGETHER: placement
declare const MAP_LOC_PRIO_LOW: startlocprio
declare const MAP_LOC_PRIO_HIGH: startlocprio
declare const MAP_LOC_PRIO_NOT: startlocprio
declare const MAP_DENSITY_NONE: mapdensity
declare const MAP_DENSITY_LIGHT: mapdensity
declare const MAP_DENSITY_MEDIUM: mapdensity
declare const MAP_DENSITY_HEAVY: mapdensity
declare const MAP_DIFFICULTY_EASY: gamedifficulty
declare const MAP_DIFFICULTY_NORMAL: gamedifficulty
declare const MAP_DIFFICULTY_HARD: gamedifficulty
declare const MAP_DIFFICULTY_INSANE: gamedifficulty
declare const MAP_SPEED_SLOWEST: gamespeed
declare const MAP_SPEED_SLOW: gamespeed
declare const MAP_SPEED_NORMAL: gamespeed
declare const MAP_SPEED_FAST: gamespeed
declare const MAP_SPEED_FASTEST: gamespeed
declare const PLAYER_SLOT_STATE_EMPTY: playerslotstate
declare const PLAYER_SLOT_STATE_PLAYING: playerslotstate
declare const PLAYER_SLOT_STATE_LEFT: playerslotstate
declare const SOUND_VOLUMEGROUP_UNITMOVEMENT: volumegroup
declare const SOUND_VOLUMEGROUP_UNITSOUNDS: volumegroup
declare const SOUND_VOLUMEGROUP_COMBAT: volumegroup
declare const SOUND_VOLUMEGROUP_SPELLS: volumegroup
declare const SOUND_VOLUMEGROUP_UI: volumegroup
declare const SOUND_VOLUMEGROUP_MUSIC: volumegroup
declare const SOUND_VOLUMEGROUP_AMBIENTSOUNDS: volumegroup
declare const SOUND_VOLUMEGROUP_FIRE: volumegroup
declare const GAME_STATE_DIVINE_INTERVENTION: igamestate
declare const GAME_STATE_DISCONNECTED: igamestate
declare const GAME_STATE_TIME_OF_DAY: fgamestate
declare const PLAYER_STATE_GAME_RESULT: playerstate
declare const PLAYER_STATE_RESOURCE_GOLD: playerstate
declare const PLAYER_STATE_RESOURCE_LUMBER: playerstate
declare const PLAYER_STATE_RESOURCE_HERO_TOKENS: playerstate
declare const PLAYER_STATE_RESOURCE_FOOD_CAP: playerstate
declare const PLAYER_STATE_RESOURCE_FOOD_USED: playerstate
declare const PLAYER_STATE_FOOD_CAP_CEILING: playerstate
declare const PLAYER_STATE_GIVES_BOUNTY: playerstate
declare const PLAYER_STATE_ALLIED_VICTORY: playerstate
declare const PLAYER_STATE_PLACED: playerstate
declare const PLAYER_STATE_OBSERVER_ON_DEATH: playerstate
declare const PLAYER_STATE_OBSERVER: playerstate
declare const PLAYER_STATE_UNFOLLOWABLE: playerstate
declare const PLAYER_STATE_GOLD_UPKEEP_RATE: playerstate
declare const PLAYER_STATE_LUMBER_UPKEEP_RATE: playerstate
declare const PLAYER_STATE_GOLD_GATHERED: playerstate
declare const PLAYER_STATE_LUMBER_GATHERED: playerstate
declare const PLAYER_STATE_NO_CREEP_SLEEP: playerstate
declare const UNIT_STATE_LIFE: unitstate
declare const UNIT_STATE_MAX_LIFE: unitstate
declare const UNIT_STATE_MANA: unitstate
declare const UNIT_STATE_MAX_MANA: unitstate
declare const AI_DIFFICULTY_NEWBIE: aidifficulty
declare const AI_DIFFICULTY_NORMAL: aidifficulty
declare const AI_DIFFICULTY_INSANE: aidifficulty
declare const PLAYER_SCORE_UNITS_TRAINED: playerscore
declare const PLAYER_SCORE_UNITS_KILLED: playerscore
declare const PLAYER_SCORE_STRUCT_BUILT: playerscore
declare const PLAYER_SCORE_STRUCT_RAZED: playerscore
declare const PLAYER_SCORE_TECH_PERCENT: playerscore
declare const PLAYER_SCORE_FOOD_MAXPROD: playerscore
declare const PLAYER_SCORE_FOOD_MAXUSED: playerscore
declare const PLAYER_SCORE_HEROES_KILLED: playerscore
declare const PLAYER_SCORE_ITEMS_GAINED: playerscore
declare const PLAYER_SCORE_MERCS_HIRED: playerscore
declare const PLAYER_SCORE_GOLD_MINED_TOTAL: playerscore
declare const PLAYER_SCORE_GOLD_MINED_UPKEEP: playerscore
declare const PLAYER_SCORE_GOLD_LOST_UPKEEP: playerscore
declare const PLAYER_SCORE_GOLD_LOST_TAX: playerscore
declare const PLAYER_SCORE_GOLD_GIVEN: playerscore
declare const PLAYER_SCORE_GOLD_RECEIVED: playerscore
declare const PLAYER_SCORE_LUMBER_TOTAL: playerscore
declare const PLAYER_SCORE_LUMBER_LOST_UPKEEP: playerscore
declare const PLAYER_SCORE_LUMBER_LOST_TAX: playerscore
declare const PLAYER_SCORE_LUMBER_GIVEN: playerscore
declare const PLAYER_SCORE_LUMBER_RECEIVED: playerscore
declare const PLAYER_SCORE_UNIT_TOTAL: playerscore
declare const PLAYER_SCORE_HERO_TOTAL: playerscore
declare const PLAYER_SCORE_RESOURCE_TOTAL: playerscore
declare const PLAYER_SCORE_TOTAL: playerscore
declare const EVENT_GAME_VICTORY: gameevent
declare const EVENT_GAME_END_LEVEL: gameevent
declare const EVENT_GAME_VARIABLE_LIMIT: gameevent
declare const EVENT_GAME_STATE_LIMIT: gameevent
declare const EVENT_GAME_TIMER_EXPIRED: gameevent
declare const EVENT_GAME_ENTER_REGION: gameevent
declare const EVENT_GAME_LEAVE_REGION: gameevent
declare const EVENT_GAME_TRACKABLE_HIT: gameevent
declare const EVENT_GAME_TRACKABLE_TRACK: gameevent
declare const EVENT_GAME_SHOW_SKILL: gameevent
declare const EVENT_GAME_BUILD_SUBMENU: gameevent
declare const EVENT_PLAYER_STATE_LIMIT: playerevent
declare const EVENT_PLAYER_ALLIANCE_CHANGED: playerevent
declare const EVENT_PLAYER_DEFEAT: playerevent
declare const EVENT_PLAYER_VICTORY: playerevent
declare const EVENT_PLAYER_LEAVE: playerevent
declare const EVENT_PLAYER_CHAT: playerevent
declare const EVENT_PLAYER_END_CINEMATIC: playerevent
declare const EVENT_PLAYER_UNIT_ATTACKED: playerunitevent
declare const EVENT_PLAYER_UNIT_RESCUED: playerunitevent
declare const EVENT_PLAYER_UNIT_DEATH: playerunitevent
declare const EVENT_PLAYER_UNIT_DECAY: playerunitevent
declare const EVENT_PLAYER_UNIT_DETECTED: playerunitevent
declare const EVENT_PLAYER_UNIT_HIDDEN: playerunitevent
declare const EVENT_PLAYER_UNIT_SELECTED: playerunitevent
declare const EVENT_PLAYER_UNIT_DESELECTED: playerunitevent
declare const EVENT_PLAYER_UNIT_CONSTRUCT_START: playerunitevent
declare const EVENT_PLAYER_UNIT_CONSTRUCT_CANCEL: playerunitevent
declare const EVENT_PLAYER_UNIT_CONSTRUCT_FINISH: playerunitevent
declare const EVENT_PLAYER_UNIT_UPGRADE_START: playerunitevent
declare const EVENT_PLAYER_UNIT_UPGRADE_CANCEL: playerunitevent
declare const EVENT_PLAYER_UNIT_UPGRADE_FINISH: playerunitevent
declare const EVENT_PLAYER_UNIT_TRAIN_START: playerunitevent
declare const EVENT_PLAYER_UNIT_TRAIN_CANCEL: playerunitevent
declare const EVENT_PLAYER_UNIT_TRAIN_FINISH: playerunitevent
declare const EVENT_PLAYER_UNIT_RESEARCH_START: playerunitevent
declare const EVENT_PLAYER_UNIT_RESEARCH_CANCEL: playerunitevent
declare const EVENT_PLAYER_UNIT_RESEARCH_FINISH: playerunitevent
declare const EVENT_PLAYER_UNIT_ISSUED_ORDER: playerunitevent
declare const EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER: playerunitevent
declare const EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER: playerunitevent
declare const EVENT_PLAYER_UNIT_ISSUED_UNIT_ORDER: playerunitevent
declare const EVENT_PLAYER_HERO_LEVEL: playerunitevent
declare const EVENT_PLAYER_HERO_SKILL: playerunitevent
declare const EVENT_PLAYER_HERO_REVIVABLE: playerunitevent
declare const EVENT_PLAYER_HERO_REVIVE_START: playerunitevent
declare const EVENT_PLAYER_HERO_REVIVE_CANCEL: playerunitevent
declare const EVENT_PLAYER_HERO_REVIVE_FINISH: playerunitevent
declare const EVENT_PLAYER_UNIT_SUMMON: playerunitevent
declare const EVENT_PLAYER_UNIT_DROP_ITEM: playerunitevent
declare const EVENT_PLAYER_UNIT_PICKUP_ITEM: playerunitevent
declare const EVENT_PLAYER_UNIT_USE_ITEM: playerunitevent
declare const EVENT_PLAYER_UNIT_LOADED: playerunitevent
declare const EVENT_PLAYER_UNIT_DAMAGED: playerunitevent
declare const EVENT_PLAYER_UNIT_DAMAGING: playerunitevent
declare const EVENT_UNIT_DAMAGED: unitevent
declare const EVENT_UNIT_DAMAGING: unitevent
declare const EVENT_UNIT_DEATH: unitevent
declare const EVENT_UNIT_DECAY: unitevent
declare const EVENT_UNIT_DETECTED: unitevent
declare const EVENT_UNIT_HIDDEN: unitevent
declare const EVENT_UNIT_SELECTED: unitevent
declare const EVENT_UNIT_DESELECTED: unitevent
declare const EVENT_UNIT_STATE_LIMIT: unitevent
declare const EVENT_UNIT_ACQUIRED_TARGET: unitevent
declare const EVENT_UNIT_TARGET_IN_RANGE: unitevent
declare const EVENT_UNIT_ATTACKED: unitevent
declare const EVENT_UNIT_RESCUED: unitevent
declare const EVENT_UNIT_CONSTRUCT_CANCEL: unitevent
declare const EVENT_UNIT_CONSTRUCT_FINISH: unitevent
declare const EVENT_UNIT_UPGRADE_START: unitevent
declare const EVENT_UNIT_UPGRADE_CANCEL: unitevent
declare const EVENT_UNIT_UPGRADE_FINISH: unitevent
declare const EVENT_UNIT_TRAIN_START: unitevent
declare const EVENT_UNIT_TRAIN_CANCEL: unitevent
declare const EVENT_UNIT_TRAIN_FINISH: unitevent
declare const EVENT_UNIT_RESEARCH_START: unitevent
declare const EVENT_UNIT_RESEARCH_CANCEL: unitevent
declare const EVENT_UNIT_RESEARCH_FINISH: unitevent
declare const EVENT_UNIT_ISSUED_ORDER: unitevent
declare const EVENT_UNIT_ISSUED_POINT_ORDER: unitevent
declare const EVENT_UNIT_ISSUED_TARGET_ORDER: unitevent
declare const EVENT_UNIT_HERO_LEVEL: unitevent
declare const EVENT_UNIT_HERO_SKILL: unitevent
declare const EVENT_UNIT_HERO_REVIVABLE: unitevent
declare const EVENT_UNIT_HERO_REVIVE_START: unitevent
declare const EVENT_UNIT_HERO_REVIVE_CANCEL: unitevent
declare const EVENT_UNIT_HERO_REVIVE_FINISH: unitevent
declare const EVENT_UNIT_SUMMON: unitevent
declare const EVENT_UNIT_DROP_ITEM: unitevent
declare const EVENT_UNIT_PICKUP_ITEM: unitevent
declare const EVENT_UNIT_USE_ITEM: unitevent
declare const EVENT_UNIT_LOADED: unitevent
declare const EVENT_WIDGET_DEATH: widgetevent
declare const EVENT_DIALOG_BUTTON_CLICK: dialogevent
declare const EVENT_DIALOG_CLICK: dialogevent
declare const EVENT_GAME_LOADED: gameevent
declare const EVENT_GAME_TOURNAMENT_FINISH_SOON: gameevent
declare const EVENT_GAME_TOURNAMENT_FINISH_NOW: gameevent
declare const EVENT_GAME_SAVE: gameevent
declare const EVENT_GAME_CUSTOM_UI_FRAME: gameevent
declare const EVENT_PLAYER_ARROW_LEFT_DOWN: playerevent
declare const EVENT_PLAYER_ARROW_LEFT_UP: playerevent
declare const EVENT_PLAYER_ARROW_RIGHT_DOWN: playerevent
declare const EVENT_PLAYER_ARROW_RIGHT_UP: playerevent
declare const EVENT_PLAYER_ARROW_DOWN_DOWN: playerevent
declare const EVENT_PLAYER_ARROW_DOWN_UP: playerevent
declare const EVENT_PLAYER_ARROW_UP_DOWN: playerevent
declare const EVENT_PLAYER_ARROW_UP_UP: playerevent
declare const EVENT_PLAYER_MOUSE_DOWN: playerevent
declare const EVENT_PLAYER_MOUSE_UP: playerevent
declare const EVENT_PLAYER_MOUSE_MOVE: playerevent
declare const EVENT_PLAYER_SYNC_DATA: playerevent
declare const EVENT_PLAYER_KEY: playerevent
declare const EVENT_PLAYER_KEY_DOWN: playerevent
declare const EVENT_PLAYER_KEY_UP: playerevent
declare const EVENT_PLAYER_UNIT_SELL: playerunitevent
declare const EVENT_PLAYER_UNIT_CHANGE_OWNER: playerunitevent
declare const EVENT_PLAYER_UNIT_SELL_ITEM: playerunitevent
declare const EVENT_PLAYER_UNIT_SPELL_CHANNEL: playerunitevent
declare const EVENT_PLAYER_UNIT_SPELL_CAST: playerunitevent
declare const EVENT_PLAYER_UNIT_SPELL_EFFECT: playerunitevent
declare const EVENT_PLAYER_UNIT_SPELL_FINISH: playerunitevent
declare const EVENT_PLAYER_UNIT_SPELL_ENDCAST: playerunitevent
declare const EVENT_PLAYER_UNIT_PAWN_ITEM: playerunitevent
declare const EVENT_UNIT_SELL: unitevent
declare const EVENT_UNIT_CHANGE_OWNER: unitevent
declare const EVENT_UNIT_SELL_ITEM: unitevent
declare const EVENT_UNIT_SPELL_CHANNEL: unitevent
declare const EVENT_UNIT_SPELL_CAST: unitevent
declare const EVENT_UNIT_SPELL_EFFECT: unitevent
declare const EVENT_UNIT_SPELL_FINISH: unitevent
declare const EVENT_UNIT_SPELL_ENDCAST: unitevent
declare const EVENT_UNIT_PAWN_ITEM: unitevent
declare const LESS_THAN: limitop
declare const LESS_THAN_OR_EQUAL: limitop
declare const EQUAL: limitop
declare const GREATER_THAN_OR_EQUAL: limitop
declare const GREATER_THAN: limitop
declare const NOT_EQUAL: limitop
declare const UNIT_TYPE_HERO: unittype
declare const UNIT_TYPE_DEAD: unittype
declare const UNIT_TYPE_STRUCTURE: unittype
declare const UNIT_TYPE_FLYING: unittype
declare const UNIT_TYPE_GROUND: unittype
declare const UNIT_TYPE_ATTACKS_FLYING: unittype
declare const UNIT_TYPE_ATTACKS_GROUND: unittype
declare const UNIT_TYPE_MELEE_ATTACKER: unittype
declare const UNIT_TYPE_RANGED_ATTACKER: unittype
declare const UNIT_TYPE_GIANT: unittype
declare const UNIT_TYPE_SUMMONED: unittype
declare const UNIT_TYPE_STUNNED: unittype
declare const UNIT_TYPE_PLAGUED: unittype
declare const UNIT_TYPE_SNARED: unittype
declare const UNIT_TYPE_UNDEAD: unittype
declare const UNIT_TYPE_MECHANICAL: unittype
declare const UNIT_TYPE_PEON: unittype
declare const UNIT_TYPE_SAPPER: unittype
declare const UNIT_TYPE_TOWNHALL: unittype
declare const UNIT_TYPE_ANCIENT: unittype
declare const UNIT_TYPE_TAUREN: unittype
declare const UNIT_TYPE_POISONED: unittype
declare const UNIT_TYPE_POLYMORPHED: unittype
declare const UNIT_TYPE_SLEEPING: unittype
declare const UNIT_TYPE_RESISTANT: unittype
declare const UNIT_TYPE_ETHEREAL: unittype
declare const UNIT_TYPE_MAGIC_IMMUNE: unittype
declare const ITEM_TYPE_PERMANENT: itemtype
declare const ITEM_TYPE_CHARGED: itemtype
declare const ITEM_TYPE_POWERUP: itemtype
declare const ITEM_TYPE_ARTIFACT: itemtype
declare const ITEM_TYPE_PURCHASABLE: itemtype
declare const ITEM_TYPE_CAMPAIGN: itemtype
declare const ITEM_TYPE_MISCELLANEOUS: itemtype
declare const ITEM_TYPE_UNKNOWN: itemtype
declare const ITEM_TYPE_ANY: itemtype
declare const ITEM_TYPE_TOME: itemtype
declare const CAMERA_FIELD_TARGET_DISTANCE: camerafield
declare const CAMERA_FIELD_FARZ: camerafield
declare const CAMERA_FIELD_ANGLE_OF_ATTACK: camerafield
declare const CAMERA_FIELD_FIELD_OF_VIEW: camerafield
declare const CAMERA_FIELD_ROLL: camerafield
declare const CAMERA_FIELD_ROTATION: camerafield
declare const CAMERA_FIELD_ZOFFSET: camerafield
declare const CAMERA_FIELD_NEARZ: camerafield
declare const CAMERA_FIELD_LOCAL_PITCH: camerafield
declare const CAMERA_FIELD_LOCAL_YAW: camerafield
declare const CAMERA_FIELD_LOCAL_ROLL: camerafield
declare const BLEND_MODE_NONE: blendmode
declare const BLEND_MODE_DONT_CARE: blendmode
declare const BLEND_MODE_KEYALPHA: blendmode
declare const BLEND_MODE_BLEND: blendmode
declare const BLEND_MODE_ADDITIVE: blendmode
declare const BLEND_MODE_MODULATE: blendmode
declare const BLEND_MODE_MODULATE_2X: blendmode
declare const RARITY_FREQUENT: raritycontrol
declare const RARITY_RARE: raritycontrol
declare const TEXMAP_FLAG_NONE: texmapflags
declare const TEXMAP_FLAG_WRAP_U: texmapflags
declare const TEXMAP_FLAG_WRAP_V: texmapflags
declare const TEXMAP_FLAG_WRAP_UV: texmapflags
declare const FOG_OF_WAR_MASKED: fogstate
declare const FOG_OF_WAR_FOGGED: fogstate
declare const FOG_OF_WAR_VISIBLE: fogstate
declare const CAMERA_MARGIN_LEFT: number
declare const CAMERA_MARGIN_RIGHT: number
declare const CAMERA_MARGIN_TOP: number
declare const CAMERA_MARGIN_BOTTOM: number
declare const EFFECT_TYPE_EFFECT: effecttype
declare const EFFECT_TYPE_TARGET: effecttype
declare const EFFECT_TYPE_CASTER: effecttype
declare const EFFECT_TYPE_SPECIAL: effecttype
declare const EFFECT_TYPE_AREA_EFFECT: effecttype
declare const EFFECT_TYPE_MISSILE: effecttype
declare const EFFECT_TYPE_LIGHTNING: effecttype
declare const SOUND_TYPE_EFFECT: soundtype
declare const SOUND_TYPE_EFFECT_LOOPED: soundtype
declare const ORIGIN_FRAME_GAME_UI: originframetype
declare const ORIGIN_FRAME_COMMAND_BUTTON: originframetype
declare const ORIGIN_FRAME_HERO_BAR: originframetype
declare const ORIGIN_FRAME_HERO_BUTTON: originframetype
declare const ORIGIN_FRAME_HERO_HP_BAR: originframetype
declare const ORIGIN_FRAME_HERO_MANA_BAR: originframetype
declare const ORIGIN_FRAME_HERO_BUTTON_INDICATOR: originframetype
declare const ORIGIN_FRAME_ITEM_BUTTON: originframetype
declare const ORIGIN_FRAME_MINIMAP: originframetype
declare const ORIGIN_FRAME_MINIMAP_BUTTON: originframetype
declare const ORIGIN_FRAME_SYSTEM_BUTTON: originframetype
declare const ORIGIN_FRAME_TOOLTIP: originframetype
declare const ORIGIN_FRAME_UBERTOOLTIP: originframetype
declare const ORIGIN_FRAME_CHAT_MSG: originframetype
declare const ORIGIN_FRAME_UNIT_MSG: originframetype
declare const ORIGIN_FRAME_TOP_MSG: originframetype
declare const ORIGIN_FRAME_PORTRAIT: originframetype
declare const ORIGIN_FRAME_WORLD_FRAME: originframetype
declare const FRAMEPOINT_TOPLEFT: framepointtype
declare const FRAMEPOINT_TOP: framepointtype
declare const FRAMEPOINT_TOPRIGHT: framepointtype
declare const FRAMEPOINT_LEFT: framepointtype
declare const FRAMEPOINT_CENTER: framepointtype
declare const FRAMEPOINT_RIGHT: framepointtype
declare const FRAMEPOINT_BOTTOMLEFT: framepointtype
declare const FRAMEPOINT_BOTTOM: framepointtype
declare const FRAMEPOINT_BOTTOMRIGHT: framepointtype
declare const TEXT_JUSTIFY_TOP: textaligntype
declare const TEXT_JUSTIFY_MIDDLE: textaligntype
declare const TEXT_JUSTIFY_BOTTOM: textaligntype
declare const TEXT_JUSTIFY_LEFT: textaligntype
declare const TEXT_JUSTIFY_CENTER: textaligntype
declare const TEXT_JUSTIFY_RIGHT: textaligntype
declare const FRAMEEVENT_CONTROL_CLICK: frameeventtype
declare const FRAMEEVENT_MOUSE_ENTER: frameeventtype
declare const FRAMEEVENT_MOUSE_LEAVE: frameeventtype
declare const FRAMEEVENT_MOUSE_UP: frameeventtype
declare const FRAMEEVENT_MOUSE_DOWN: frameeventtype
declare const FRAMEEVENT_MOUSE_WHEEL: frameeventtype
declare const FRAMEEVENT_CHECKBOX_CHECKED: frameeventtype
declare const FRAMEEVENT_CHECKBOX_UNCHECKED: frameeventtype
declare const FRAMEEVENT_EDITBOX_TEXT_CHANGED: frameeventtype
declare const FRAMEEVENT_POPUPMENU_ITEM_CHANGED: frameeventtype
declare const FRAMEEVENT_MOUSE_DOUBLECLICK: frameeventtype
declare const FRAMEEVENT_SPRITE_ANIM_UPDATE: frameeventtype
declare const FRAMEEVENT_SLIDER_VALUE_CHANGED: frameeventtype
declare const FRAMEEVENT_DIALOG_CANCEL: frameeventtype
declare const FRAMEEVENT_DIALOG_ACCEPT: frameeventtype
declare const FRAMEEVENT_EDITBOX_ENTER: frameeventtype
declare const OSKEY_BACKSPACE: oskeytype
declare const OSKEY_TAB: oskeytype
declare const OSKEY_CLEAR: oskeytype
declare const OSKEY_RETURN: oskeytype
declare const OSKEY_SHIFT: oskeytype
declare const OSKEY_CONTROL: oskeytype
declare const OSKEY_ALT: oskeytype
declare const OSKEY_PAUSE: oskeytype
declare const OSKEY_CAPSLOCK: oskeytype
declare const OSKEY_KANA: oskeytype
declare const OSKEY_HANGUL: oskeytype
declare const OSKEY_JUNJA: oskeytype
declare const OSKEY_FINAL: oskeytype
declare const OSKEY_HANJA: oskeytype
declare const OSKEY_KANJI: oskeytype
declare const OSKEY_ESCAPE: oskeytype
declare const OSKEY_CONVERT: oskeytype
declare const OSKEY_NONCONVERT: oskeytype
declare const OSKEY_ACCEPT: oskeytype
declare const OSKEY_MODECHANGE: oskeytype
declare const OSKEY_SPACE: oskeytype
declare const OSKEY_PAGEUP: oskeytype
declare const OSKEY_PAGEDOWN: oskeytype
declare const OSKEY_END: oskeytype
declare const OSKEY_HOME: oskeytype
declare const OSKEY_LEFT: oskeytype
declare const OSKEY_UP: oskeytype
declare const OSKEY_RIGHT: oskeytype
declare const OSKEY_DOWN: oskeytype
declare const OSKEY_SELECT: oskeytype
declare const OSKEY_PRINT: oskeytype
declare const OSKEY_EXECUTE: oskeytype
declare const OSKEY_PRINTSCREEN: oskeytype
declare const OSKEY_INSERT: oskeytype
declare const OSKEY_DELETE: oskeytype
declare const OSKEY_HELP: oskeytype
declare const OSKEY_0: oskeytype
declare const OSKEY_1: oskeytype
declare const OSKEY_2: oskeytype
declare const OSKEY_3: oskeytype
declare const OSKEY_4: oskeytype
declare const OSKEY_5: oskeytype
declare const OSKEY_6: oskeytype
declare const OSKEY_7: oskeytype
declare const OSKEY_8: oskeytype
declare const OSKEY_9: oskeytype
declare const OSKEY_A: oskeytype
declare const OSKEY_B: oskeytype
declare const OSKEY_C: oskeytype
declare const OSKEY_D: oskeytype
declare const OSKEY_E: oskeytype
declare const OSKEY_F: oskeytype
declare const OSKEY_G: oskeytype
declare const OSKEY_H: oskeytype
declare const OSKEY_I: oskeytype
declare const OSKEY_J: oskeytype
declare const OSKEY_K: oskeytype
declare const OSKEY_L: oskeytype
declare const OSKEY_M: oskeytype
declare const OSKEY_N: oskeytype
declare const OSKEY_O: oskeytype
declare const OSKEY_P: oskeytype
declare const OSKEY_Q: oskeytype
declare const OSKEY_R: oskeytype
declare const OSKEY_S: oskeytype
declare const OSKEY_T: oskeytype
declare const OSKEY_U: oskeytype
declare const OSKEY_V: oskeytype
declare const OSKEY_W: oskeytype
declare const OSKEY_X: oskeytype
declare const OSKEY_Y: oskeytype
declare const OSKEY_Z: oskeytype
declare const OSKEY_LMETA: oskeytype
declare const OSKEY_RMETA: oskeytype
declare const OSKEY_APPS: oskeytype
declare const OSKEY_SLEEP: oskeytype
declare const OSKEY_NUMPAD0: oskeytype
declare const OSKEY_NUMPAD1: oskeytype
declare const OSKEY_NUMPAD2: oskeytype
declare const OSKEY_NUMPAD3: oskeytype
declare const OSKEY_NUMPAD4: oskeytype
declare const OSKEY_NUMPAD5: oskeytype
declare const OSKEY_NUMPAD6: oskeytype
declare const OSKEY_NUMPAD7: oskeytype
declare const OSKEY_NUMPAD8: oskeytype
declare const OSKEY_NUMPAD9: oskeytype
declare const OSKEY_MULTIPLY: oskeytype
declare const OSKEY_ADD: oskeytype
declare const OSKEY_SEPARATOR: oskeytype
declare const OSKEY_SUBTRACT: oskeytype
declare const OSKEY_DECIMAL: oskeytype
declare const OSKEY_DIVIDE: oskeytype
declare const OSKEY_F1: oskeytype
declare const OSKEY_F2: oskeytype
declare const OSKEY_F3: oskeytype
declare const OSKEY_F4: oskeytype
declare const OSKEY_F5: oskeytype
declare const OSKEY_F6: oskeytype
declare const OSKEY_F7: oskeytype
declare const OSKEY_F8: oskeytype
declare const OSKEY_F9: oskeytype
declare const OSKEY_F10: oskeytype
declare const OSKEY_F11: oskeytype
declare const OSKEY_F12: oskeytype
declare const OSKEY_F13: oskeytype
declare const OSKEY_F14: oskeytype
declare const OSKEY_F15: oskeytype
declare const OSKEY_F16: oskeytype
declare const OSKEY_F17: oskeytype
declare const OSKEY_F18: oskeytype
declare const OSKEY_F19: oskeytype
declare const OSKEY_F20: oskeytype
declare const OSKEY_F21: oskeytype
declare const OSKEY_F22: oskeytype
declare const OSKEY_F23: oskeytype
declare const OSKEY_F24: oskeytype
declare const OSKEY_NUMLOCK: oskeytype
declare const OSKEY_SCROLLLOCK: oskeytype
declare const OSKEY_OEM_NEC_EQUAL: oskeytype
declare const OSKEY_OEM_FJ_JISHO: oskeytype
declare const OSKEY_OEM_FJ_MASSHOU: oskeytype
declare const OSKEY_OEM_FJ_TOUROKU: oskeytype
declare const OSKEY_OEM_FJ_LOYA: oskeytype
declare const OSKEY_OEM_FJ_ROYA: oskeytype
declare const OSKEY_LSHIFT: oskeytype
declare const OSKEY_RSHIFT: oskeytype
declare const OSKEY_LCONTROL: oskeytype
declare const OSKEY_RCONTROL: oskeytype
declare const OSKEY_LALT: oskeytype
declare const OSKEY_RALT: oskeytype
declare const OSKEY_BROWSER_BACK: oskeytype
declare const OSKEY_BROWSER_FORWARD: oskeytype
declare const OSKEY_BROWSER_REFRESH: oskeytype
declare const OSKEY_BROWSER_STOP: oskeytype
declare const OSKEY_BROWSER_SEARCH: oskeytype
declare const OSKEY_BROWSER_FAVORITES: oskeytype
declare const OSKEY_BROWSER_HOME: oskeytype
declare const OSKEY_VOLUME_MUTE: oskeytype
declare const OSKEY_VOLUME_DOWN: oskeytype
declare const OSKEY_VOLUME_UP: oskeytype
declare const OSKEY_MEDIA_NEXT_TRACK: oskeytype
declare const OSKEY_MEDIA_PREV_TRACK: oskeytype
declare const OSKEY_MEDIA_STOP: oskeytype
declare const OSKEY_MEDIA_PLAY_PAUSE: oskeytype
declare const OSKEY_LAUNCH_MAIL: oskeytype
declare const OSKEY_LAUNCH_MEDIA_SELECT: oskeytype
declare const OSKEY_LAUNCH_APP1: oskeytype
declare const OSKEY_LAUNCH_APP2: oskeytype
declare const OSKEY_OEM_1: oskeytype
declare const OSKEY_OEM_PLUS: oskeytype
declare const OSKEY_OEM_COMMA: oskeytype
declare const OSKEY_OEM_MINUS: oskeytype
declare const OSKEY_OEM_PERIOD: oskeytype
declare const OSKEY_OEM_2: oskeytype
declare const OSKEY_OEM_3: oskeytype
declare const OSKEY_OEM_4: oskeytype
declare const OSKEY_OEM_5: oskeytype
declare const OSKEY_OEM_6: oskeytype
declare const OSKEY_OEM_7: oskeytype
declare const OSKEY_OEM_8: oskeytype
declare const OSKEY_OEM_AX: oskeytype
declare const OSKEY_OEM_102: oskeytype
declare const OSKEY_ICO_HELP: oskeytype
declare const OSKEY_ICO_00: oskeytype
declare const OSKEY_PROCESSKEY: oskeytype
declare const OSKEY_ICO_CLEAR: oskeytype
declare const OSKEY_PACKET: oskeytype
declare const OSKEY_OEM_RESET: oskeytype
declare const OSKEY_OEM_JUMP: oskeytype
declare const OSKEY_OEM_PA1: oskeytype
declare const OSKEY_OEM_PA2: oskeytype
declare const OSKEY_OEM_PA3: oskeytype
declare const OSKEY_OEM_WSCTRL: oskeytype
declare const OSKEY_OEM_CUSEL: oskeytype
declare const OSKEY_OEM_ATTN: oskeytype
declare const OSKEY_OEM_FINISH: oskeytype
declare const OSKEY_OEM_COPY: oskeytype
declare const OSKEY_OEM_AUTO: oskeytype
declare const OSKEY_OEM_ENLW: oskeytype
declare const OSKEY_OEM_BACKTAB: oskeytype
declare const OSKEY_ATTN: oskeytype
declare const OSKEY_CRSEL: oskeytype
declare const OSKEY_EXSEL: oskeytype
declare const OSKEY_EREOF: oskeytype
declare const OSKEY_PLAY: oskeytype
declare const OSKEY_ZOOM: oskeytype
declare const OSKEY_NONAME: oskeytype
declare const OSKEY_PA1: oskeytype
declare const OSKEY_OEM_CLEAR: oskeytype
declare const ABILITY_IF_BUTTON_POSITION_NORMAL_X: abilityintegerfield
declare const ABILITY_IF_BUTTON_POSITION_NORMAL_Y: abilityintegerfield
declare const ABILITY_IF_BUTTON_POSITION_ACTIVATED_X: abilityintegerfield
declare const ABILITY_IF_BUTTON_POSITION_ACTIVATED_Y: abilityintegerfield
declare const ABILITY_IF_BUTTON_POSITION_RESEARCH_X: abilityintegerfield
declare const ABILITY_IF_BUTTON_POSITION_RESEARCH_Y: abilityintegerfield
declare const ABILITY_IF_MISSILE_SPEED: abilityintegerfield
declare const ABILITY_IF_TARGET_ATTACHMENTS: abilityintegerfield
declare const ABILITY_IF_CASTER_ATTACHMENTS: abilityintegerfield
declare const ABILITY_IF_PRIORITY: abilityintegerfield
declare const ABILITY_IF_LEVELS: abilityintegerfield
declare const ABILITY_IF_REQUIRED_LEVEL: abilityintegerfield
declare const ABILITY_IF_LEVEL_SKIP_REQUIREMENT: abilityintegerfield
declare const ABILITY_BF_HERO_ABILITY: abilitybooleanfield
declare const ABILITY_BF_ITEM_ABILITY: abilitybooleanfield
declare const ABILITY_BF_CHECK_DEPENDENCIES: abilitybooleanfield
declare const ABILITY_RF_ARF_MISSILE_ARC: abilityrealfield
declare const ABILITY_SF_NAME: abilitystringfield
declare const ABILITY_SF_ICON_ACTIVATED: abilitystringfield
declare const ABILITY_SF_ICON_RESEARCH: abilitystringfield
declare const ABILITY_SF_EFFECT_SOUND: abilitystringfield
declare const ABILITY_SF_EFFECT_SOUND_LOOPING: abilitystringfield
declare const ABILITY_ILF_MANA_COST: abilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_WAVES: abilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_SHARDS: abilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_UNITS_TELEPORTED: abilityintegerlevelfield
declare const ABILITY_ILF_SUMMONED_UNIT_COUNT_HWE2: abilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_IMAGES: abilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_CORPSES_RAISED_UAN1: abilityintegerlevelfield
declare const ABILITY_ILF_MORPHING_FLAGS: abilityintegerlevelfield
declare const ABILITY_ILF_STRENGTH_BONUS_NRG5: abilityintegerlevelfield
declare const ABILITY_ILF_DEFENSE_BONUS_NRG6: abilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_TARGETS_HIT: abilityintegerlevelfield
declare const ABILITY_ILF_DETECTION_TYPE_OFS1: abilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_SUMMONED_UNITS_OSF2: abilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_SUMMONED_UNITS_EFN1: abilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_CORPSES_RAISED_HRE1: abilityintegerlevelfield
declare const ABILITY_ILF_STACK_FLAGS: abilityintegerlevelfield
declare const ABILITY_ILF_MINIMUM_NUMBER_OF_UNITS: abilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_NUMBER_OF_UNITS_NDP3: abilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_UNITS_CREATED_NRC2: abilityintegerlevelfield
declare const ABILITY_ILF_SHIELD_LIFE: abilityintegerlevelfield
declare const ABILITY_ILF_MANA_LOSS_AMS4: abilityintegerlevelfield
declare const ABILITY_ILF_GOLD_PER_INTERVAL_BGM1: abilityintegerlevelfield
declare const ABILITY_ILF_MAX_NUMBER_OF_MINERS: abilityintegerlevelfield
declare const ABILITY_ILF_CARGO_CAPACITY: abilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_CREEP_LEVEL_DEV3: abilityintegerlevelfield
declare const ABILITY_ILF_MAX_CREEP_LEVEL_DEV1: abilityintegerlevelfield
declare const ABILITY_ILF_GOLD_PER_INTERVAL_EGM1: abilityintegerlevelfield
declare const ABILITY_ILF_DEFENSE_REDUCTION: abilityintegerlevelfield
declare const ABILITY_ILF_DETECTION_TYPE_FLA1: abilityintegerlevelfield
declare const ABILITY_ILF_FLARE_COUNT: abilityintegerlevelfield
declare const ABILITY_ILF_MAX_GOLD: abilityintegerlevelfield
declare const ABILITY_ILF_MINING_CAPACITY: abilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_NUMBER_OF_CORPSES_GYD1: abilityintegerlevelfield
declare const ABILITY_ILF_DAMAGE_TO_TREE: abilityintegerlevelfield
declare const ABILITY_ILF_LUMBER_CAPACITY: abilityintegerlevelfield
declare const ABILITY_ILF_GOLD_CAPACITY: abilityintegerlevelfield
declare const ABILITY_ILF_DEFENSE_INCREASE_INF2: abilityintegerlevelfield
declare const ABILITY_ILF_INTERACTION_TYPE: abilityintegerlevelfield
declare const ABILITY_ILF_GOLD_COST_NDT1: abilityintegerlevelfield
declare const ABILITY_ILF_LUMBER_COST_NDT2: abilityintegerlevelfield
declare const ABILITY_ILF_DETECTION_TYPE_NDT3: abilityintegerlevelfield
declare const ABILITY_ILF_STACKING_TYPE_POI4: abilityintegerlevelfield
declare const ABILITY_ILF_STACKING_TYPE_POA5: abilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_CREEP_LEVEL_PLY1: abilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_CREEP_LEVEL_POS1: abilityintegerlevelfield
declare const ABILITY_ILF_MOVEMENT_UPDATE_FREQUENCY_PRG1: abilityintegerlevelfield
declare const ABILITY_ILF_ATTACK_UPDATE_FREQUENCY_PRG2: abilityintegerlevelfield
declare const ABILITY_ILF_MANA_LOSS_PRG6: abilityintegerlevelfield
declare const ABILITY_ILF_UNITS_SUMMONED_TYPE_ONE: abilityintegerlevelfield
declare const ABILITY_ILF_UNITS_SUMMONED_TYPE_TWO: abilityintegerlevelfield
declare const ABILITY_ILF_MAX_UNITS_SUMMONED: abilityintegerlevelfield
declare const ABILITY_ILF_ALLOW_WHEN_FULL_REJ3: abilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_UNITS_CHARGED_TO_CASTER: abilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_UNITS_AFFECTED: abilityintegerlevelfield
declare const ABILITY_ILF_DEFENSE_INCREASE_ROA2: abilityintegerlevelfield
declare const ABILITY_ILF_MAX_UNITS_ROA7: abilityintegerlevelfield
declare const ABILITY_ILF_ROOTED_WEAPONS: abilityintegerlevelfield
declare const ABILITY_ILF_UPROOTED_WEAPONS: abilityintegerlevelfield
declare const ABILITY_ILF_UPROOTED_DEFENSE_TYPE: abilityintegerlevelfield
declare const ABILITY_ILF_ACCUMULATION_STEP: abilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_OWLS: abilityintegerlevelfield
declare const ABILITY_ILF_STACKING_TYPE_SPO4: abilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_UNITS: abilityintegerlevelfield
declare const ABILITY_ILF_SPIDER_CAPACITY: abilityintegerlevelfield
declare const ABILITY_ILF_INTERVALS_BEFORE_CHANGING_TREES: abilityintegerlevelfield
declare const ABILITY_ILF_AGILITY_BONUS: abilityintegerlevelfield
declare const ABILITY_ILF_INTELLIGENCE_BONUS: abilityintegerlevelfield
declare const ABILITY_ILF_STRENGTH_BONUS_ISTR: abilityintegerlevelfield
declare const ABILITY_ILF_ATTACK_BONUS: abilityintegerlevelfield
declare const ABILITY_ILF_DEFENSE_BONUS_IDEF: abilityintegerlevelfield
declare const ABILITY_ILF_SUMMON_1_AMOUNT: abilityintegerlevelfield
declare const ABILITY_ILF_SUMMON_2_AMOUNT: abilityintegerlevelfield
declare const ABILITY_ILF_EXPERIENCE_GAINED: abilityintegerlevelfield
declare const ABILITY_ILF_HIT_POINTS_GAINED_IHPG: abilityintegerlevelfield
declare const ABILITY_ILF_MANA_POINTS_GAINED_IMPG: abilityintegerlevelfield
declare const ABILITY_ILF_HIT_POINTS_GAINED_IHP2: abilityintegerlevelfield
declare const ABILITY_ILF_MANA_POINTS_GAINED_IMP2: abilityintegerlevelfield
declare const ABILITY_ILF_DAMAGE_BONUS_DICE: abilityintegerlevelfield
declare const ABILITY_ILF_ARMOR_PENALTY_IARP: abilityintegerlevelfield
declare const ABILITY_ILF_ENABLED_ATTACK_INDEX_IOB5: abilityintegerlevelfield
declare const ABILITY_ILF_LEVELS_GAINED: abilityintegerlevelfield
declare const ABILITY_ILF_MAX_LIFE_GAINED: abilityintegerlevelfield
declare const ABILITY_ILF_MAX_MANA_GAINED: abilityintegerlevelfield
declare const ABILITY_ILF_GOLD_GIVEN: abilityintegerlevelfield
declare const ABILITY_ILF_LUMBER_GIVEN: abilityintegerlevelfield
declare const ABILITY_ILF_DETECTION_TYPE_IFA1: abilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_CREEP_LEVEL_ICRE: abilityintegerlevelfield
declare const ABILITY_ILF_MOVEMENT_SPEED_BONUS: abilityintegerlevelfield
declare const ABILITY_ILF_HIT_POINTS_REGENERATED_PER_SECOND: abilityintegerlevelfield
declare const ABILITY_ILF_SIGHT_RANGE_BONUS: abilityintegerlevelfield
declare const ABILITY_ILF_DAMAGE_PER_DURATION: abilityintegerlevelfield
declare const ABILITY_ILF_MANA_USED_PER_SECOND: abilityintegerlevelfield
declare const ABILITY_ILF_EXTRA_MANA_REQUIRED: abilityintegerlevelfield
declare const ABILITY_ILF_DETECTION_RADIUS_IDET: abilityintegerlevelfield
declare const ABILITY_ILF_MANA_LOSS_PER_UNIT_IDIM: abilityintegerlevelfield
declare const ABILITY_ILF_DAMAGE_TO_SUMMONED_UNITS_IDID: abilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_NUMBER_OF_UNITS_IREC: abilityintegerlevelfield
declare const ABILITY_ILF_DELAY_AFTER_DEATH_SECONDS: abilityintegerlevelfield
declare const ABILITY_ILF_RESTORED_LIFE: abilityintegerlevelfield
declare const ABILITY_ILF_RESTORED_MANA__1_FOR_CURRENT: abilityintegerlevelfield
declare const ABILITY_ILF_HIT_POINTS_RESTORED: abilityintegerlevelfield
declare const ABILITY_ILF_MANA_POINTS_RESTORED: abilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_NUMBER_OF_UNITS_ITPM: abilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_CORPSES_RAISED_CAD1: abilityintegerlevelfield
declare const ABILITY_ILF_TERRAIN_DEFORMATION_DURATION_MS: abilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_UNITS: abilityintegerlevelfield
declare const ABILITY_ILF_DETECTION_TYPE_DET1: abilityintegerlevelfield
declare const ABILITY_ILF_GOLD_COST_PER_STRUCTURE: abilityintegerlevelfield
declare const ABILITY_ILF_LUMBER_COST_PER_USE: abilityintegerlevelfield
declare const ABILITY_ILF_DETECTION_TYPE_NSP3: abilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_SWARM_UNITS: abilityintegerlevelfield
declare const ABILITY_ILF_MAX_SWARM_UNITS_PER_TARGET: abilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_SUMMONED_UNITS_NBA2: abilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_CREEP_LEVEL_NCH1: abilityintegerlevelfield
declare const ABILITY_ILF_ATTACKS_PREVENTED: abilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_NUMBER_OF_TARGETS_EFK3: abilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_SUMMONED_UNITS_ESV1: abilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_NUMBER_OF_CORPSES_EXH1: abilityintegerlevelfield
declare const ABILITY_ILF_ITEM_CAPACITY: abilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_NUMBER_OF_TARGETS_SPL2: abilityintegerlevelfield
declare const ABILITY_ILF_ALLOW_WHEN_FULL_IRL3: abilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_DISPELLED_UNITS: abilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_LURES: abilityintegerlevelfield
declare const ABILITY_ILF_NEW_TIME_OF_DAY_HOUR: abilityintegerlevelfield
declare const ABILITY_ILF_NEW_TIME_OF_DAY_MINUTE: abilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_UNITS_CREATED_MEC1: abilityintegerlevelfield
declare const ABILITY_ILF_MINIMUM_SPELLS: abilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_SPELLS: abilityintegerlevelfield
declare const ABILITY_ILF_DISABLED_ATTACK_INDEX: abilityintegerlevelfield
declare const ABILITY_ILF_ENABLED_ATTACK_INDEX_GRA4: abilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_ATTACKS: abilityintegerlevelfield
declare const ABILITY_ILF_BUILDING_TYPES_ALLOWED_NPR1: abilityintegerlevelfield
declare const ABILITY_ILF_BUILDING_TYPES_ALLOWED_NSA1: abilityintegerlevelfield
declare const ABILITY_ILF_ATTACK_MODIFICATION: abilityintegerlevelfield
declare const ABILITY_ILF_SUMMONED_UNIT_COUNT_NPA5: abilityintegerlevelfield
declare const ABILITY_ILF_UPGRADE_LEVELS: abilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_SUMMONED_UNITS_NDO2: abilityintegerlevelfield
declare const ABILITY_ILF_BEASTS_PER_SECOND: abilityintegerlevelfield
declare const ABILITY_ILF_TARGET_TYPE: abilityintegerlevelfield
declare const ABILITY_ILF_OPTIONS: abilityintegerlevelfield
declare const ABILITY_ILF_ARMOR_PENALTY_NAB3: abilityintegerlevelfield
declare const ABILITY_ILF_WAVE_COUNT_NHS6: abilityintegerlevelfield
declare const ABILITY_ILF_MAX_CREEP_LEVEL_NTM3: abilityintegerlevelfield
declare const ABILITY_ILF_MISSILE_COUNT: abilityintegerlevelfield
declare const ABILITY_ILF_SPLIT_ATTACK_COUNT: abilityintegerlevelfield
declare const ABILITY_ILF_GENERATION_COUNT: abilityintegerlevelfield
declare const ABILITY_ILF_ROCK_RING_COUNT: abilityintegerlevelfield
declare const ABILITY_ILF_WAVE_COUNT_NVC2: abilityintegerlevelfield
declare const ABILITY_ILF_PREFER_HOSTILES_TAU1: abilityintegerlevelfield
declare const ABILITY_ILF_PREFER_FRIENDLIES_TAU2: abilityintegerlevelfield
declare const ABILITY_ILF_MAX_UNITS_TAU3: abilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_PULSES: abilityintegerlevelfield
declare const ABILITY_ILF_SUMMONED_UNIT_TYPE_HWE1: abilityintegerlevelfield
declare const ABILITY_ILF_SUMMONED_UNIT_UIN4: abilityintegerlevelfield
declare const ABILITY_ILF_SUMMONED_UNIT_OSF1: abilityintegerlevelfield
declare const ABILITY_ILF_SUMMONED_UNIT_TYPE_EFNU: abilityintegerlevelfield
declare const ABILITY_ILF_SUMMONED_UNIT_TYPE_NBAU: abilityintegerlevelfield
declare const ABILITY_ILF_SUMMONED_UNIT_TYPE_NTOU: abilityintegerlevelfield
declare const ABILITY_ILF_SUMMONED_UNIT_TYPE_ESVU: abilityintegerlevelfield
declare const ABILITY_ILF_SUMMONED_UNIT_TYPES: abilityintegerlevelfield
declare const ABILITY_ILF_SUMMONED_UNIT_TYPE_NDOU: abilityintegerlevelfield
declare const ABILITY_ILF_ALTERNATE_FORM_UNIT_EMEU: abilityintegerlevelfield
declare const ABILITY_ILF_PLAGUE_WARD_UNIT_TYPE: abilityintegerlevelfield
declare const ABILITY_ILF_ALLOWED_UNIT_TYPE_BTL1: abilityintegerlevelfield
declare const ABILITY_ILF_NEW_UNIT_TYPE: abilityintegerlevelfield
declare const ABILITY_ILF_RESULTING_UNIT_TYPE_ENT1: abilityintegerlevelfield
declare const ABILITY_ILF_CORPSE_UNIT_TYPE: abilityintegerlevelfield
declare const ABILITY_ILF_ALLOWED_UNIT_TYPE_LOA1: abilityintegerlevelfield
declare const ABILITY_ILF_UNIT_TYPE_FOR_LIMIT_CHECK: abilityintegerlevelfield
declare const ABILITY_ILF_WARD_UNIT_TYPE_STAU: abilityintegerlevelfield
declare const ABILITY_ILF_EFFECT_ABILITY: abilityintegerlevelfield
declare const ABILITY_ILF_CONVERSION_UNIT: abilityintegerlevelfield
declare const ABILITY_ILF_UNIT_TO_PRESERVE: abilityintegerlevelfield
declare const ABILITY_ILF_UNIT_TYPE_ALLOWED: abilityintegerlevelfield
declare const ABILITY_ILF_SWARM_UNIT_TYPE: abilityintegerlevelfield
declare const ABILITY_ILF_RESULTING_UNIT_TYPE_COAU: abilityintegerlevelfield
declare const ABILITY_ILF_UNIT_TYPE_EXHU: abilityintegerlevelfield
declare const ABILITY_ILF_WARD_UNIT_TYPE_HWDU: abilityintegerlevelfield
declare const ABILITY_ILF_LURE_UNIT_TYPE: abilityintegerlevelfield
declare const ABILITY_ILF_UNIT_TYPE_IPMU: abilityintegerlevelfield
declare const ABILITY_ILF_FACTORY_UNIT_ID: abilityintegerlevelfield
declare const ABILITY_ILF_SPAWN_UNIT_ID_NFYU: abilityintegerlevelfield
declare const ABILITY_ILF_DESTRUCTIBLE_ID: abilityintegerlevelfield
declare const ABILITY_ILF_UPGRADE_TYPE: abilityintegerlevelfield
declare const ABILITY_RLF_CASTING_TIME: abilityreallevelfield
declare const ABILITY_RLF_DURATION_NORMAL: abilityreallevelfield
declare const ABILITY_RLF_DURATION_HERO: abilityreallevelfield
declare const ABILITY_RLF_COOLDOWN: abilityreallevelfield
declare const ABILITY_RLF_AREA_OF_EFFECT: abilityreallevelfield
declare const ABILITY_RLF_CAST_RANGE: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_HBZ2: abilityreallevelfield
declare const ABILITY_RLF_BUILDING_REDUCTION_HBZ4: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_HBZ5: abilityreallevelfield
declare const ABILITY_RLF_MAXIMUM_DAMAGE_PER_WAVE: abilityreallevelfield
declare const ABILITY_RLF_MANA_REGENERATION_INCREASE: abilityreallevelfield
declare const ABILITY_RLF_CASTING_DELAY: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_OWW1: abilityreallevelfield
declare const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_OWW2: abilityreallevelfield
declare const ABILITY_RLF_CHANCE_TO_CRITICAL_STRIKE: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_MULTIPLIER_OCR2: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_BONUS_OCR3: abilityreallevelfield
declare const ABILITY_RLF_CHANCE_TO_EVADE_OCR4: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_DEALT_PERCENT_OMI2: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_TAKEN_PERCENT_OMI3: abilityreallevelfield
declare const ABILITY_RLF_ANIMATION_DELAY: abilityreallevelfield
declare const ABILITY_RLF_TRANSITION_TIME: abilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_PERCENT_OWK2: abilityreallevelfield
declare const ABILITY_RLF_BACKSTAB_DAMAGE: abilityreallevelfield
declare const ABILITY_RLF_AMOUNT_HEALED_DAMAGED_UDC1: abilityreallevelfield
declare const ABILITY_RLF_LIFE_CONVERTED_TO_MANA: abilityreallevelfield
declare const ABILITY_RLF_LIFE_CONVERTED_TO_LIFE: abilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_PERCENT_UAU1: abilityreallevelfield
declare const ABILITY_RLF_LIFE_REGENERATION_INCREASE_PERCENT: abilityreallevelfield
declare const ABILITY_RLF_CHANCE_TO_EVADE_EEV1: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_INTERVAL: abilityreallevelfield
declare const ABILITY_RLF_MANA_DRAINED_PER_SECOND_EIM2: abilityreallevelfield
declare const ABILITY_RLF_BUFFER_MANA_REQUIRED: abilityreallevelfield
declare const ABILITY_RLF_MAX_MANA_DRAINED: abilityreallevelfield
declare const ABILITY_RLF_BOLT_DELAY: abilityreallevelfield
declare const ABILITY_RLF_BOLT_LIFETIME: abilityreallevelfield
declare const ABILITY_RLF_ALTITUDE_ADJUSTMENT_DURATION: abilityreallevelfield
declare const ABILITY_RLF_LANDING_DELAY_TIME: abilityreallevelfield
declare const ABILITY_RLF_ALTERNATE_FORM_HIT_POINT_BONUS: abilityreallevelfield
declare const ABILITY_RLF_MOVE_SPEED_BONUS_INFO_PANEL_ONLY: abilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_BONUS_INFO_PANEL_ONLY: abilityreallevelfield
declare const ABILITY_RLF_LIFE_REGENERATION_RATE_PER_SECOND: abilityreallevelfield
declare const ABILITY_RLF_STUN_DURATION_USL1: abilityreallevelfield
declare const ABILITY_RLF_ATTACK_DAMAGE_STOLEN_PERCENT: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_UCS1: abilityreallevelfield
declare const ABILITY_RLF_MAX_DAMAGE_UCS2: abilityreallevelfield
declare const ABILITY_RLF_DISTANCE_UCS3: abilityreallevelfield
declare const ABILITY_RLF_FINAL_AREA_UCS4: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_UIN1: abilityreallevelfield
declare const ABILITY_RLF_DURATION: abilityreallevelfield
declare const ABILITY_RLF_IMPACT_DELAY: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_TARGET_OCL1: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_REDUCTION_PER_TARGET: abilityreallevelfield
declare const ABILITY_RLF_EFFECT_DELAY_OEQ1: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_TO_BUILDINGS: abilityreallevelfield
declare const ABILITY_RLF_UNITS_SLOWED_PERCENT: abilityreallevelfield
declare const ABILITY_RLF_FINAL_AREA_OEQ4: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_EER1: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_DEALT_TO_ATTACKERS: abilityreallevelfield
declare const ABILITY_RLF_LIFE_HEALED: abilityreallevelfield
declare const ABILITY_RLF_HEAL_INTERVAL: abilityreallevelfield
declare const ABILITY_RLF_BUILDING_REDUCTION_ETQ3: abilityreallevelfield
declare const ABILITY_RLF_INITIAL_IMMUNITY_DURATION: abilityreallevelfield
declare const ABILITY_RLF_MAX_LIFE_DRAINED_PER_SECOND_PERCENT: abilityreallevelfield
declare const ABILITY_RLF_BUILDING_REDUCTION_UDD2: abilityreallevelfield
declare const ABILITY_RLF_ARMOR_DURATION: abilityreallevelfield
declare const ABILITY_RLF_ARMOR_BONUS_UFA2: abilityreallevelfield
declare const ABILITY_RLF_AREA_OF_EFFECT_DAMAGE: abilityreallevelfield
declare const ABILITY_RLF_SPECIFIC_TARGET_DAMAGE_UFN2: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_BONUS_HFA1: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_DEALT_ESF1: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_INTERVAL_ESF2: abilityreallevelfield
declare const ABILITY_RLF_BUILDING_REDUCTION_ESF3: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_BONUS_PERCENT: abilityreallevelfield
declare const ABILITY_RLF_DEFENSE_BONUS_HAV1: abilityreallevelfield
declare const ABILITY_RLF_HIT_POINT_BONUS: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_BONUS_HAV3: abilityreallevelfield
declare const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_HAV4: abilityreallevelfield
declare const ABILITY_RLF_CHANCE_TO_BASH: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_MULTIPLIER_HBH2: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_BONUS_HBH3: abilityreallevelfield
declare const ABILITY_RLF_CHANCE_TO_MISS_HBH4: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_HTB1: abilityreallevelfield
declare const ABILITY_RLF_AOE_DAMAGE: abilityreallevelfield
declare const ABILITY_RLF_SPECIFIC_TARGET_DAMAGE_HTC2: abilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_PERCENT_HTC3: abilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_REDUCTION_PERCENT_HTC4: abilityreallevelfield
declare const ABILITY_RLF_ARMOR_BONUS_HAD1: abilityreallevelfield
declare const ABILITY_RLF_AMOUNT_HEALED_DAMAGED_HHB1: abilityreallevelfield
declare const ABILITY_RLF_EXTRA_DAMAGE_HCA1: abilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_HCA2: abilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_FACTOR_HCA3: abilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_PERCENT_OAE1: abilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_INCREASE_PERCENT_OAE2: abilityreallevelfield
declare const ABILITY_RLF_REINCARNATION_DELAY: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_OSH1: abilityreallevelfield
declare const ABILITY_RLF_MAXIMUM_DAMAGE_OSH2: abilityreallevelfield
declare const ABILITY_RLF_DISTANCE_OSH3: abilityreallevelfield
declare const ABILITY_RLF_FINAL_AREA_OSH4: abilityreallevelfield
declare const ABILITY_RLF_GRAPHIC_DELAY_NFD1: abilityreallevelfield
declare const ABILITY_RLF_GRAPHIC_DURATION_NFD2: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_NFD3: abilityreallevelfield
declare const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_AMS1: abilityreallevelfield
declare const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_AMS2: abilityreallevelfield
declare const ABILITY_RLF_AURA_DURATION: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_APL2: abilityreallevelfield
declare const ABILITY_RLF_DURATION_OF_PLAGUE_WARD: abilityreallevelfield
declare const ABILITY_RLF_AMOUNT_OF_HIT_POINTS_REGENERATED: abilityreallevelfield
declare const ABILITY_RLF_ATTACK_DAMAGE_INCREASE_AKB1: abilityreallevelfield
declare const ABILITY_RLF_MANA_LOSS_ADM1: abilityreallevelfield
declare const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_ADM2: abilityreallevelfield
declare const ABILITY_RLF_EXPANSION_AMOUNT: abilityreallevelfield
declare const ABILITY_RLF_INTERVAL_DURATION_BGM2: abilityreallevelfield
declare const ABILITY_RLF_RADIUS_OF_MINING_RING: abilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_INCREASE_PERCENT_BLO1: abilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_PERCENT_BLO2: abilityreallevelfield
declare const ABILITY_RLF_SCALING_FACTOR: abilityreallevelfield
declare const ABILITY_RLF_HIT_POINTS_PER_SECOND_CAN1: abilityreallevelfield
declare const ABILITY_RLF_MAX_HIT_POINTS: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_DEV2: abilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_UPDATE_FREQUENCY_CHD1: abilityreallevelfield
declare const ABILITY_RLF_ATTACK_UPDATE_FREQUENCY_CHD2: abilityreallevelfield
declare const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_CHD3: abilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_PERCENT_CRI1: abilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_REDUCTION_PERCENT_CRI2: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_REDUCTION_CRI3: abilityreallevelfield
declare const ABILITY_RLF_CHANCE_TO_MISS_CRS: abilityreallevelfield
declare const ABILITY_RLF_FULL_DAMAGE_RADIUS_DDA1: abilityreallevelfield
declare const ABILITY_RLF_FULL_DAMAGE_AMOUNT_DDA2: abilityreallevelfield
declare const ABILITY_RLF_PARTIAL_DAMAGE_RADIUS: abilityreallevelfield
declare const ABILITY_RLF_PARTIAL_DAMAGE_AMOUNT: abilityreallevelfield
declare const ABILITY_RLF_BUILDING_DAMAGE_FACTOR_SDS1: abilityreallevelfield
declare const ABILITY_RLF_MAX_DAMAGE_UCO5: abilityreallevelfield
declare const ABILITY_RLF_MOVE_SPEED_BONUS_UCO6: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_TAKEN_PERCENT_DEF1: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_DEALT_PERCENT_DEF2: abilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_DEF3: abilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_FACTOR_DEF4: abilityreallevelfield
declare const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_DEF5: abilityreallevelfield
declare const ABILITY_RLF_CHANCE_TO_DEFLECT: abilityreallevelfield
declare const ABILITY_RLF_DEFLECT_DAMAGE_TAKEN_PIERCING: abilityreallevelfield
declare const ABILITY_RLF_DEFLECT_DAMAGE_TAKEN_SPELLS: abilityreallevelfield
declare const ABILITY_RLF_RIP_DELAY: abilityreallevelfield
declare const ABILITY_RLF_EAT_DELAY: abilityreallevelfield
declare const ABILITY_RLF_HIT_POINTS_GAINED_EAT3: abilityreallevelfield
declare const ABILITY_RLF_AIR_UNIT_LOWER_DURATION: abilityreallevelfield
declare const ABILITY_RLF_AIR_UNIT_HEIGHT: abilityreallevelfield
declare const ABILITY_RLF_MELEE_ATTACK_RANGE: abilityreallevelfield
declare const ABILITY_RLF_INTERVAL_DURATION_EGM2: abilityreallevelfield
declare const ABILITY_RLF_EFFECT_DELAY_FLA2: abilityreallevelfield
declare const ABILITY_RLF_MINING_DURATION: abilityreallevelfield
declare const ABILITY_RLF_RADIUS_OF_GRAVESTONES: abilityreallevelfield
declare const ABILITY_RLF_RADIUS_OF_CORPSES: abilityreallevelfield
declare const ABILITY_RLF_HIT_POINTS_GAINED_HEA1: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_INCREASE_PERCENT_INF1: abilityreallevelfield
declare const ABILITY_RLF_AUTOCAST_RANGE: abilityreallevelfield
declare const ABILITY_RLF_LIFE_REGEN_RATE: abilityreallevelfield
declare const ABILITY_RLF_GRAPHIC_DELAY_LIT1: abilityreallevelfield
declare const ABILITY_RLF_GRAPHIC_DURATION_LIT2: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_LSH1: abilityreallevelfield
declare const ABILITY_RLF_MANA_GAINED: abilityreallevelfield
declare const ABILITY_RLF_HIT_POINTS_GAINED_MBT2: abilityreallevelfield
declare const ABILITY_RLF_AUTOCAST_REQUIREMENT: abilityreallevelfield
declare const ABILITY_RLF_WATER_HEIGHT: abilityreallevelfield
declare const ABILITY_RLF_ACTIVATION_DELAY_MIN1: abilityreallevelfield
declare const ABILITY_RLF_INVISIBILITY_TRANSITION_TIME: abilityreallevelfield
declare const ABILITY_RLF_ACTIVATION_RADIUS: abilityreallevelfield
declare const ABILITY_RLF_AMOUNT_REGENERATED: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_POI1: abilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_FACTOR_POI2: abilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_POI3: abilityreallevelfield
declare const ABILITY_RLF_EXTRA_DAMAGE_POA1: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_POA2: abilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_FACTOR_POA3: abilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_POA4: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_AMPLIFICATION: abilityreallevelfield
declare const ABILITY_RLF_CHANCE_TO_STOMP_PERCENT: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_DEALT_WAR2: abilityreallevelfield
declare const ABILITY_RLF_FULL_DAMAGE_RADIUS_WAR3: abilityreallevelfield
declare const ABILITY_RLF_HALF_DAMAGE_RADIUS_WAR4: abilityreallevelfield
declare const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_PRG3: abilityreallevelfield
declare const ABILITY_RLF_UNIT_PAUSE_DURATION: abilityreallevelfield
declare const ABILITY_RLF_HERO_PAUSE_DURATION: abilityreallevelfield
declare const ABILITY_RLF_HIT_POINTS_GAINED_REJ1: abilityreallevelfield
declare const ABILITY_RLF_MANA_POINTS_GAINED_REJ2: abilityreallevelfield
declare const ABILITY_RLF_MINIMUM_LIFE_REQUIRED: abilityreallevelfield
declare const ABILITY_RLF_MINIMUM_MANA_REQUIRED: abilityreallevelfield
declare const ABILITY_RLF_REPAIR_COST_RATIO: abilityreallevelfield
declare const ABILITY_RLF_REPAIR_TIME_RATIO: abilityreallevelfield
declare const ABILITY_RLF_POWERBUILD_COST: abilityreallevelfield
declare const ABILITY_RLF_POWERBUILD_RATE: abilityreallevelfield
declare const ABILITY_RLF_NAVAL_RANGE_BONUS: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_INCREASE_PERCENT_ROA1: abilityreallevelfield
declare const ABILITY_RLF_LIFE_REGENERATION_RATE: abilityreallevelfield
declare const ABILITY_RLF_MANA_REGEN: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_INCREASE: abilityreallevelfield
declare const ABILITY_RLF_SALVAGE_COST_RATIO: abilityreallevelfield
declare const ABILITY_RLF_IN_FLIGHT_SIGHT_RADIUS: abilityreallevelfield
declare const ABILITY_RLF_HOVERING_SIGHT_RADIUS: abilityreallevelfield
declare const ABILITY_RLF_HOVERING_HEIGHT: abilityreallevelfield
declare const ABILITY_RLF_DURATION_OF_OWLS: abilityreallevelfield
declare const ABILITY_RLF_FADE_DURATION: abilityreallevelfield
declare const ABILITY_RLF_DAY_NIGHT_DURATION: abilityreallevelfield
declare const ABILITY_RLF_ACTION_DURATION: abilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_SLO1: abilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_FACTOR_SLO2: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_SPO1: abilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_SPO2: abilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_FACTOR_SPO3: abilityreallevelfield
declare const ABILITY_RLF_ACTIVATION_DELAY_STA1: abilityreallevelfield
declare const ABILITY_RLF_DETECTION_RADIUS_STA2: abilityreallevelfield
declare const ABILITY_RLF_DETONATION_RADIUS: abilityreallevelfield
declare const ABILITY_RLF_STUN_DURATION_STA4: abilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_BONUS_PERCENT: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_UHF2: abilityreallevelfield
declare const ABILITY_RLF_LUMBER_PER_INTERVAL: abilityreallevelfield
declare const ABILITY_RLF_ART_ATTACHMENT_HEIGHT: abilityreallevelfield
declare const ABILITY_RLF_TELEPORT_AREA_WIDTH: abilityreallevelfield
declare const ABILITY_RLF_TELEPORT_AREA_HEIGHT: abilityreallevelfield
declare const ABILITY_RLF_LIFE_STOLEN_PER_ATTACK: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_BONUS_IDAM: abilityreallevelfield
declare const ABILITY_RLF_CHANCE_TO_HIT_UNITS_PERCENT: abilityreallevelfield
declare const ABILITY_RLF_CHANCE_TO_HIT_HEROS_PERCENT: abilityreallevelfield
declare const ABILITY_RLF_CHANCE_TO_HIT_SUMMONS_PERCENT: abilityreallevelfield
declare const ABILITY_RLF_DELAY_FOR_TARGET_EFFECT: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_DEALT_PERCENT_OF_NORMAL: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_RECEIVED_MULTIPLIER: abilityreallevelfield
declare const ABILITY_RLF_MANA_REGENERATION_BONUS_AS_FRACTION_OF_NORMAL: abilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_ISPI: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_IDPS: abilityreallevelfield
declare const ABILITY_RLF_ATTACK_DAMAGE_INCREASE_CAC1: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_COR1: abilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_INCREASE_ISX1: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_WRS1: abilityreallevelfield
declare const ABILITY_RLF_TERRAIN_DEFORMATION_AMPLITUDE: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_CTC1: abilityreallevelfield
declare const ABILITY_RLF_EXTRA_DAMAGE_TO_TARGET: abilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_CTC3: abilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_REDUCTION_CTC4: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_CTB1: abilityreallevelfield
declare const ABILITY_RLF_CASTING_DELAY_SECONDS: abilityreallevelfield
declare const ABILITY_RLF_MANA_LOSS_PER_UNIT_DTN1: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_TO_SUMMONED_UNITS_DTN2: abilityreallevelfield
declare const ABILITY_RLF_TRANSITION_TIME_SECONDS: abilityreallevelfield
declare const ABILITY_RLF_MANA_DRAINED_PER_SECOND_NMR1: abilityreallevelfield
declare const ABILITY_RLF_CHANCE_TO_REDUCE_DAMAGE_PERCENT: abilityreallevelfield
declare const ABILITY_RLF_MINIMUM_DAMAGE: abilityreallevelfield
declare const ABILITY_RLF_IGNORED_DAMAGE: abilityreallevelfield
declare const ABILITY_RLF_FULL_DAMAGE_DEALT: abilityreallevelfield
declare const ABILITY_RLF_FULL_DAMAGE_INTERVAL: abilityreallevelfield
declare const ABILITY_RLF_HALF_DAMAGE_DEALT: abilityreallevelfield
declare const ABILITY_RLF_HALF_DAMAGE_INTERVAL: abilityreallevelfield
declare const ABILITY_RLF_BUILDING_REDUCTION_HFS5: abilityreallevelfield
declare const ABILITY_RLF_MAXIMUM_DAMAGE_HFS6: abilityreallevelfield
declare const ABILITY_RLF_MANA_PER_HIT_POINT: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_ABSORBED_PERCENT: abilityreallevelfield
declare const ABILITY_RLF_WAVE_DISTANCE: abilityreallevelfield
declare const ABILITY_RLF_WAVE_TIME_SECONDS: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_DEALT_UIM3: abilityreallevelfield
declare const ABILITY_RLF_AIR_TIME_SECONDS_UIM4: abilityreallevelfield
declare const ABILITY_RLF_UNIT_RELEASE_INTERVAL_SECONDS: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_RETURN_FACTOR: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_RETURN_THRESHOLD: abilityreallevelfield
declare const ABILITY_RLF_RETURNED_DAMAGE_FACTOR: abilityreallevelfield
declare const ABILITY_RLF_RECEIVED_DAMAGE_FACTOR: abilityreallevelfield
declare const ABILITY_RLF_DEFENSE_BONUS_UTS3: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_BONUS_NBA1: abilityreallevelfield
declare const ABILITY_RLF_SUMMONED_UNIT_DURATION_SECONDS_NBA3: abilityreallevelfield
declare const ABILITY_RLF_MANA_PER_SUMMONED_HITPOINT: abilityreallevelfield
declare const ABILITY_RLF_CHARGE_FOR_CURRENT_LIFE: abilityreallevelfield
declare const ABILITY_RLF_HIT_POINTS_DRAINED: abilityreallevelfield
declare const ABILITY_RLF_MANA_POINTS_DRAINED: abilityreallevelfield
declare const ABILITY_RLF_DRAIN_INTERVAL_SECONDS: abilityreallevelfield
declare const ABILITY_RLF_LIFE_TRANSFERRED_PER_SECOND: abilityreallevelfield
declare const ABILITY_RLF_MANA_TRANSFERRED_PER_SECOND: abilityreallevelfield
declare const ABILITY_RLF_BONUS_LIFE_FACTOR: abilityreallevelfield
declare const ABILITY_RLF_BONUS_LIFE_DECAY: abilityreallevelfield
declare const ABILITY_RLF_BONUS_MANA_FACTOR: abilityreallevelfield
declare const ABILITY_RLF_BONUS_MANA_DECAY: abilityreallevelfield
declare const ABILITY_RLF_CHANCE_TO_MISS_PERCENT: abilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_MODIFIER: abilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_MODIFIER: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_TDG1: abilityreallevelfield
declare const ABILITY_RLF_MEDIUM_DAMAGE_RADIUS_TDG2: abilityreallevelfield
declare const ABILITY_RLF_MEDIUM_DAMAGE_PER_SECOND: abilityreallevelfield
declare const ABILITY_RLF_SMALL_DAMAGE_RADIUS_TDG4: abilityreallevelfield
declare const ABILITY_RLF_SMALL_DAMAGE_PER_SECOND: abilityreallevelfield
declare const ABILITY_RLF_AIR_TIME_SECONDS_TSP1: abilityreallevelfield
declare const ABILITY_RLF_MINIMUM_HIT_INTERVAL_SECONDS: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_NBF5: abilityreallevelfield
declare const ABILITY_RLF_MAXIMUM_RANGE: abilityreallevelfield
declare const ABILITY_RLF_MINIMUM_RANGE: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_TARGET_EFK1: abilityreallevelfield
declare const ABILITY_RLF_MAXIMUM_TOTAL_DAMAGE: abilityreallevelfield
declare const ABILITY_RLF_MAXIMUM_SPEED_ADJUSTMENT: abilityreallevelfield
declare const ABILITY_RLF_DECAYING_DAMAGE: abilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_ESH2: abilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_FACTOR_ESH3: abilityreallevelfield
declare const ABILITY_RLF_DECAY_POWER: abilityreallevelfield
declare const ABILITY_RLF_INITIAL_DAMAGE_ESH5: abilityreallevelfield
declare const ABILITY_RLF_MAXIMUM_LIFE_ABSORBED: abilityreallevelfield
declare const ABILITY_RLF_MAXIMUM_MANA_ABSORBED: abilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_BSK1: abilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_INCREASE_BSK2: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_TAKEN_INCREASE: abilityreallevelfield
declare const ABILITY_RLF_LIFE_PER_UNIT: abilityreallevelfield
declare const ABILITY_RLF_MANA_PER_UNIT: abilityreallevelfield
declare const ABILITY_RLF_LIFE_PER_BUFF: abilityreallevelfield
declare const ABILITY_RLF_MANA_PER_BUFF: abilityreallevelfield
declare const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_DVM5: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_BONUS_FAK1: abilityreallevelfield
declare const ABILITY_RLF_MEDIUM_DAMAGE_FACTOR_FAK2: abilityreallevelfield
declare const ABILITY_RLF_SMALL_DAMAGE_FACTOR_FAK3: abilityreallevelfield
declare const ABILITY_RLF_FULL_DAMAGE_RADIUS_FAK4: abilityreallevelfield
declare const ABILITY_RLF_HALF_DAMAGE_RADIUS_FAK5: abilityreallevelfield
declare const ABILITY_RLF_EXTRA_DAMAGE_PER_SECOND: abilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_LIQ2: abilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_REDUCTION_LIQ3: abilityreallevelfield
declare const ABILITY_RLF_MAGIC_DAMAGE_FACTOR: abilityreallevelfield
declare const ABILITY_RLF_UNIT_DAMAGE_PER_MANA_POINT: abilityreallevelfield
declare const ABILITY_RLF_HERO_DAMAGE_PER_MANA_POINT: abilityreallevelfield
declare const ABILITY_RLF_UNIT_MAXIMUM_DAMAGE: abilityreallevelfield
declare const ABILITY_RLF_HERO_MAXIMUM_DAMAGE: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_COOLDOWN: abilityreallevelfield
declare const ABILITY_RLF_DISTRIBUTED_DAMAGE_FACTOR_SPL1: abilityreallevelfield
declare const ABILITY_RLF_LIFE_REGENERATED: abilityreallevelfield
declare const ABILITY_RLF_MANA_REGENERATED: abilityreallevelfield
declare const ABILITY_RLF_MANA_LOSS_PER_UNIT_IDC1: abilityreallevelfield
declare const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_IDC2: abilityreallevelfield
declare const ABILITY_RLF_ACTIVATION_DELAY_IMO2: abilityreallevelfield
declare const ABILITY_RLF_LURE_INTERVAL_SECONDS: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_BONUS_ISR1: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_REDUCTION_ISR2: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_BONUS_IPV1: abilityreallevelfield
declare const ABILITY_RLF_LIFE_STEAL_AMOUNT: abilityreallevelfield
declare const ABILITY_RLF_LIFE_RESTORED_FACTOR: abilityreallevelfield
declare const ABILITY_RLF_MANA_RESTORED_FACTOR: abilityreallevelfield
declare const ABILITY_RLF_ATTACH_DELAY: abilityreallevelfield
declare const ABILITY_RLF_REMOVE_DELAY: abilityreallevelfield
declare const ABILITY_RLF_HERO_REGENERATION_DELAY: abilityreallevelfield
declare const ABILITY_RLF_UNIT_REGENERATION_DELAY: abilityreallevelfield
declare const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_NSA4: abilityreallevelfield
declare const ABILITY_RLF_HIT_POINTS_PER_SECOND_NSA5: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_TO_SUMMONED_UNITS_IXS1: abilityreallevelfield
declare const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_IXS2: abilityreallevelfield
declare const ABILITY_RLF_SUMMONED_UNIT_DURATION: abilityreallevelfield
declare const ABILITY_RLF_SHIELD_COOLDOWN_TIME: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_NDO1: abilityreallevelfield
declare const ABILITY_RLF_SUMMONED_UNIT_DURATION_SECONDS_NDO3: abilityreallevelfield
declare const ABILITY_RLF_MEDIUM_DAMAGE_RADIUS_FLK1: abilityreallevelfield
declare const ABILITY_RLF_SMALL_DAMAGE_RADIUS_FLK2: abilityreallevelfield
declare const ABILITY_RLF_FULL_DAMAGE_AMOUNT_FLK3: abilityreallevelfield
declare const ABILITY_RLF_MEDIUM_DAMAGE_AMOUNT: abilityreallevelfield
declare const ABILITY_RLF_SMALL_DAMAGE_AMOUNT: abilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_PERCENT_HBN1: abilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_REDUCTION_PERCENT_HBN2: abilityreallevelfield
declare const ABILITY_RLF_MAX_MANA_DRAINED_UNITS: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_RATIO_UNITS_PERCENT: abilityreallevelfield
declare const ABILITY_RLF_MAX_MANA_DRAINED_HEROS: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_RATIO_HEROS_PERCENT: abilityreallevelfield
declare const ABILITY_RLF_SUMMONED_DAMAGE: abilityreallevelfield
declare const ABILITY_RLF_DISTRIBUTED_DAMAGE_FACTOR_NCA1: abilityreallevelfield
declare const ABILITY_RLF_INITIAL_DAMAGE_PXF1: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_PXF2: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_MLS1: abilityreallevelfield
declare const ABILITY_RLF_BEAST_COLLISION_RADIUS: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_AMOUNT_NST3: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_RADIUS: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_DELAY: abilityreallevelfield
declare const ABILITY_RLF_FOLLOW_THROUGH_TIME: abilityreallevelfield
declare const ABILITY_RLF_ART_DURATION: abilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_PERCENT_NAB1: abilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_REDUCTION_PERCENT_NAB2: abilityreallevelfield
declare const ABILITY_RLF_PRIMARY_DAMAGE: abilityreallevelfield
declare const ABILITY_RLF_SECONDARY_DAMAGE: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_INTERVAL_NAB6: abilityreallevelfield
declare const ABILITY_RLF_GOLD_COST_FACTOR: abilityreallevelfield
declare const ABILITY_RLF_LUMBER_COST_FACTOR: abilityreallevelfield
declare const ABILITY_RLF_MOVE_SPEED_BONUS_NEG1: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_BONUS_NEG2: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_AMOUNT_NCS1: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_INTERVAL_NCS2: abilityreallevelfield
declare const ABILITY_RLF_MAX_DAMAGE_NCS4: abilityreallevelfield
declare const ABILITY_RLF_BUILDING_DAMAGE_FACTOR_NCS5: abilityreallevelfield
declare const ABILITY_RLF_EFFECT_DURATION: abilityreallevelfield
declare const ABILITY_RLF_SPAWN_INTERVAL_NSY1: abilityreallevelfield
declare const ABILITY_RLF_SPAWN_UNIT_DURATION: abilityreallevelfield
declare const ABILITY_RLF_SPAWN_UNIT_OFFSET: abilityreallevelfield
declare const ABILITY_RLF_LEASH_RANGE_NSY5: abilityreallevelfield
declare const ABILITY_RLF_SPAWN_INTERVAL_NFY1: abilityreallevelfield
declare const ABILITY_RLF_LEASH_RANGE_NFY2: abilityreallevelfield
declare const ABILITY_RLF_CHANCE_TO_DEMOLISH: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_MULTIPLIER_BUILDINGS: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_MULTIPLIER_UNITS: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_MULTIPLIER_HEROES: abilityreallevelfield
declare const ABILITY_RLF_BONUS_DAMAGE_MULTIPLIER: abilityreallevelfield
declare const ABILITY_RLF_DEATH_DAMAGE_FULL_AMOUNT: abilityreallevelfield
declare const ABILITY_RLF_DEATH_DAMAGE_FULL_AREA: abilityreallevelfield
declare const ABILITY_RLF_DEATH_DAMAGE_HALF_AMOUNT: abilityreallevelfield
declare const ABILITY_RLF_DEATH_DAMAGE_HALF_AREA: abilityreallevelfield
declare const ABILITY_RLF_DEATH_DAMAGE_DELAY: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_AMOUNT_NSO1: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PERIOD: abilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PENALTY: abilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_PERCENT_NSO4: abilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_REDUCTION_PERCENT_NSO5: abilityreallevelfield
declare const ABILITY_RLF_SPLIT_DELAY: abilityreallevelfield
declare const ABILITY_RLF_MAX_HITPOINT_FACTOR: abilityreallevelfield
declare const ABILITY_RLF_LIFE_DURATION_SPLIT_BONUS: abilityreallevelfield
declare const ABILITY_RLF_WAVE_INTERVAL: abilityreallevelfield
declare const ABILITY_RLF_BUILDING_DAMAGE_FACTOR_NVC4: abilityreallevelfield
declare const ABILITY_RLF_FULL_DAMAGE_AMOUNT_NVC5: abilityreallevelfield
declare const ABILITY_RLF_HALF_DAMAGE_FACTOR: abilityreallevelfield
declare const ABILITY_RLF_INTERVAL_BETWEEN_PULSES: abilityreallevelfield
declare const ABILITY_BLF_PERCENT_BONUS_HAB2: abilitybooleanlevelfield
declare const ABILITY_BLF_USE_TELEPORT_CLUSTERING_HMT3: abilitybooleanlevelfield
declare const ABILITY_BLF_NEVER_MISS_OCR5: abilitybooleanlevelfield
declare const ABILITY_BLF_EXCLUDE_ITEM_DAMAGE: abilitybooleanlevelfield
declare const ABILITY_BLF_BACKSTAB_DAMAGE: abilitybooleanlevelfield
declare const ABILITY_BLF_INHERIT_UPGRADES_UAN3: abilitybooleanlevelfield
declare const ABILITY_BLF_MANA_CONVERSION_AS_PERCENT: abilitybooleanlevelfield
declare const ABILITY_BLF_LIFE_CONVERSION_AS_PERCENT: abilitybooleanlevelfield
declare const ABILITY_BLF_LEAVE_TARGET_ALIVE: abilitybooleanlevelfield
declare const ABILITY_BLF_PERCENT_BONUS_UAU3: abilitybooleanlevelfield
declare const ABILITY_BLF_DAMAGE_IS_PERCENT_RECEIVED: abilitybooleanlevelfield
declare const ABILITY_BLF_MELEE_BONUS: abilitybooleanlevelfield
declare const ABILITY_BLF_RANGED_BONUS: abilitybooleanlevelfield
declare const ABILITY_BLF_FLAT_BONUS: abilitybooleanlevelfield
declare const ABILITY_BLF_NEVER_MISS_HBH5: abilitybooleanlevelfield
declare const ABILITY_BLF_PERCENT_BONUS_HAD2: abilitybooleanlevelfield
declare const ABILITY_BLF_CAN_DEACTIVATE: abilitybooleanlevelfield
declare const ABILITY_BLF_RAISED_UNITS_ARE_INVULNERABLE: abilitybooleanlevelfield
declare const ABILITY_BLF_PERCENTAGE_OAR2: abilitybooleanlevelfield
declare const ABILITY_BLF_SUMMON_BUSY_UNITS: abilitybooleanlevelfield
declare const ABILITY_BLF_CREATES_BLIGHT: abilitybooleanlevelfield
declare const ABILITY_BLF_EXPLODES_ON_DEATH: abilitybooleanlevelfield
declare const ABILITY_BLF_ALWAYS_AUTOCAST_FAE2: abilitybooleanlevelfield
declare const ABILITY_BLF_REGENERATE_ONLY_AT_NIGHT: abilitybooleanlevelfield
declare const ABILITY_BLF_SHOW_SELECT_UNIT_BUTTON: abilitybooleanlevelfield
declare const ABILITY_BLF_SHOW_UNIT_INDICATOR: abilitybooleanlevelfield
declare const ABILITY_BLF_CHARGE_OWNING_PLAYER: abilitybooleanlevelfield
declare const ABILITY_BLF_PERCENTAGE_ARM2: abilitybooleanlevelfield
declare const ABILITY_BLF_TARGET_IS_INVULNERABLE: abilitybooleanlevelfield
declare const ABILITY_BLF_TARGET_IS_MAGIC_IMMUNE: abilitybooleanlevelfield
declare const ABILITY_BLF_KILL_ON_CASTER_DEATH: abilitybooleanlevelfield
declare const ABILITY_BLF_NO_TARGET_REQUIRED_REJ4: abilitybooleanlevelfield
declare const ABILITY_BLF_ACCEPTS_GOLD: abilitybooleanlevelfield
declare const ABILITY_BLF_ACCEPTS_LUMBER: abilitybooleanlevelfield
declare const ABILITY_BLF_PREFER_HOSTILES_ROA5: abilitybooleanlevelfield
declare const ABILITY_BLF_PREFER_FRIENDLIES_ROA6: abilitybooleanlevelfield
declare const ABILITY_BLF_ROOTED_TURNING: abilitybooleanlevelfield
declare const ABILITY_BLF_ALWAYS_AUTOCAST_SLO3: abilitybooleanlevelfield
declare const ABILITY_BLF_HIDE_BUTTON: abilitybooleanlevelfield
declare const ABILITY_BLF_USE_TELEPORT_CLUSTERING_ITP2: abilitybooleanlevelfield
declare const ABILITY_BLF_IMMUNE_TO_MORPH_EFFECTS: abilitybooleanlevelfield
declare const ABILITY_BLF_DOES_NOT_BLOCK_BUILDINGS: abilitybooleanlevelfield
declare const ABILITY_BLF_AUTO_ACQUIRE_ATTACK_TARGETS: abilitybooleanlevelfield
declare const ABILITY_BLF_IMMUNE_TO_MORPH_EFFECTS_GHO2: abilitybooleanlevelfield
declare const ABILITY_BLF_DO_NOT_BLOCK_BUILDINGS: abilitybooleanlevelfield
declare const ABILITY_BLF_INCLUDE_RANGED_DAMAGE: abilitybooleanlevelfield
declare const ABILITY_BLF_INCLUDE_MELEE_DAMAGE: abilitybooleanlevelfield
declare const ABILITY_BLF_MOVE_TO_PARTNER: abilitybooleanlevelfield
declare const ABILITY_BLF_CAN_BE_DISPELLED: abilitybooleanlevelfield
declare const ABILITY_BLF_IGNORE_FRIENDLY_BUFFS: abilitybooleanlevelfield
declare const ABILITY_BLF_DROP_ITEMS_ON_DEATH: abilitybooleanlevelfield
declare const ABILITY_BLF_CAN_USE_ITEMS: abilitybooleanlevelfield
declare const ABILITY_BLF_CAN_GET_ITEMS: abilitybooleanlevelfield
declare const ABILITY_BLF_CAN_DROP_ITEMS: abilitybooleanlevelfield
declare const ABILITY_BLF_REPAIRS_ALLOWED: abilitybooleanlevelfield
declare const ABILITY_BLF_CASTER_ONLY_SPLASH: abilitybooleanlevelfield
declare const ABILITY_BLF_NO_TARGET_REQUIRED_IRL4: abilitybooleanlevelfield
declare const ABILITY_BLF_DISPEL_ON_ATTACK: abilitybooleanlevelfield
declare const ABILITY_BLF_AMOUNT_IS_RAW_VALUE: abilitybooleanlevelfield
declare const ABILITY_BLF_SHARED_SPELL_COOLDOWN: abilitybooleanlevelfield
declare const ABILITY_BLF_SLEEP_ONCE: abilitybooleanlevelfield
declare const ABILITY_BLF_ALLOW_ON_ANY_PLAYER_SLOT: abilitybooleanlevelfield
declare const ABILITY_BLF_DISABLE_OTHER_ABILITIES: abilitybooleanlevelfield
declare const ABILITY_BLF_ALLOW_BOUNTY: abilitybooleanlevelfield
declare const ABILITY_SLF_ICON_NORMAL: abilitystringlevelfield
declare const ABILITY_SLF_CASTER: abilitystringlevelfield
declare const ABILITY_SLF_TARGET: abilitystringlevelfield
declare const ABILITY_SLF_SPECIAL: abilitystringlevelfield
declare const ABILITY_SLF_EFFECT: abilitystringlevelfield
declare const ABILITY_SLF_AREA_EFFECT: abilitystringlevelfield
declare const ABILITY_SLF_LIGHTNING_EFFECTS: abilitystringlevelfield
declare const ABILITY_SLF_MISSILE_ART: abilitystringlevelfield
declare const ABILITY_SLF_TOOLTIP_LEARN: abilitystringlevelfield
declare const ABILITY_SLF_TOOLTIP_LEARN_EXTENDED: abilitystringlevelfield
declare const ABILITY_SLF_TOOLTIP_NORMAL: abilitystringlevelfield
declare const ABILITY_SLF_TOOLTIP_TURN_OFF: abilitystringlevelfield
declare const ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED: abilitystringlevelfield
declare const ABILITY_SLF_TOOLTIP_TURN_OFF_EXTENDED: abilitystringlevelfield
declare const ABILITY_SLF_NORMAL_FORM_UNIT_EME1: abilitystringlevelfield
declare const ABILITY_SLF_SPAWNED_UNITS: abilitystringlevelfield
declare const ABILITY_SLF_ABILITY_FOR_UNIT_CREATION: abilitystringlevelfield
declare const ABILITY_SLF_NORMAL_FORM_UNIT_MIL1: abilitystringlevelfield
declare const ABILITY_SLF_ALTERNATE_FORM_UNIT_MIL2: abilitystringlevelfield
declare const ABILITY_SLF_BASE_ORDER_ID_ANS5: abilitystringlevelfield
declare const ABILITY_SLF_MORPH_UNITS_GROUND: abilitystringlevelfield
declare const ABILITY_SLF_MORPH_UNITS_AIR: abilitystringlevelfield
declare const ABILITY_SLF_MORPH_UNITS_AMPHIBIOUS: abilitystringlevelfield
declare const ABILITY_SLF_MORPH_UNITS_WATER: abilitystringlevelfield
declare const ABILITY_SLF_UNIT_TYPE_ONE: abilitystringlevelfield
declare const ABILITY_SLF_UNIT_TYPE_TWO: abilitystringlevelfield
declare const ABILITY_SLF_UNIT_TYPE_SOD2: abilitystringlevelfield
declare const ABILITY_SLF_SUMMON_1_UNIT_TYPE: abilitystringlevelfield
declare const ABILITY_SLF_SUMMON_2_UNIT_TYPE: abilitystringlevelfield
declare const ABILITY_SLF_RACE_TO_CONVERT: abilitystringlevelfield
declare const ABILITY_SLF_PARTNER_UNIT_TYPE: abilitystringlevelfield
declare const ABILITY_SLF_PARTNER_UNIT_TYPE_ONE: abilitystringlevelfield
declare const ABILITY_SLF_PARTNER_UNIT_TYPE_TWO: abilitystringlevelfield
declare const ABILITY_SLF_REQUIRED_UNIT_TYPE: abilitystringlevelfield
declare const ABILITY_SLF_CONVERTED_UNIT_TYPE: abilitystringlevelfield
declare const ABILITY_SLF_SPELL_LIST: abilitystringlevelfield
declare const ABILITY_SLF_BASE_ORDER_ID_SPB5: abilitystringlevelfield
declare const ABILITY_SLF_BASE_ORDER_ID_NCL6: abilitystringlevelfield
declare const ABILITY_SLF_ABILITY_UPGRADE_1: abilitystringlevelfield
declare const ABILITY_SLF_ABILITY_UPGRADE_2: abilitystringlevelfield
declare const ABILITY_SLF_ABILITY_UPGRADE_3: abilitystringlevelfield
declare const ABILITY_SLF_ABILITY_UPGRADE_4: abilitystringlevelfield
declare const ABILITY_SLF_SPAWN_UNIT_ID_NSY2: abilitystringlevelfield
declare const ITEM_IF_LEVEL: itemintegerfield
declare const ITEM_IF_NUMBER_OF_CHARGES: itemintegerfield
declare const ITEM_IF_COOLDOWN_GROUP: itemintegerfield
declare const ITEM_IF_MAX_HIT_POINTS: itemintegerfield
declare const ITEM_IF_HIT_POINTS: itemintegerfield
declare const ITEM_IF_PRIORITY: itemintegerfield
declare const ITEM_IF_ARMOR_TYPE: itemintegerfield
declare const ITEM_IF_TINTING_COLOR_RED: itemintegerfield
declare const ITEM_IF_TINTING_COLOR_GREEN: itemintegerfield
declare const ITEM_IF_TINTING_COLOR_BLUE: itemintegerfield
declare const ITEM_IF_TINTING_COLOR_ALPHA: itemintegerfield
declare const ITEM_RF_SCALING_VALUE: itemrealfield
declare const ITEM_BF_DROPPED_WHEN_CARRIER_DIES: itembooleanfield
declare const ITEM_BF_CAN_BE_DROPPED: itembooleanfield
declare const ITEM_BF_PERISHABLE: itembooleanfield
declare const ITEM_BF_INCLUDE_AS_RANDOM_CHOICE: itembooleanfield
declare const ITEM_BF_USE_AUTOMATICALLY_WHEN_ACQUIRED: itembooleanfield
declare const ITEM_BF_CAN_BE_SOLD_TO_MERCHANTS: itembooleanfield
declare const ITEM_BF_ACTIVELY_USED: itembooleanfield
declare const ITEM_SF_MODEL_USED: itemstringfield
declare const UNIT_IF_DEFENSE_TYPE: unitintegerfield
declare const UNIT_IF_ARMOR_TYPE: unitintegerfield
declare const UNIT_IF_LOOPING_FADE_IN_RATE: unitintegerfield
declare const UNIT_IF_LOOPING_FADE_OUT_RATE: unitintegerfield
declare const UNIT_IF_AGILITY: unitintegerfield
declare const UNIT_IF_INTELLIGENCE: unitintegerfield
declare const UNIT_IF_STRENGTH: unitintegerfield
declare const UNIT_IF_AGILITY_PERMANENT: unitintegerfield
declare const UNIT_IF_INTELLIGENCE_PERMANENT: unitintegerfield
declare const UNIT_IF_STRENGTH_PERMANENT: unitintegerfield
declare const UNIT_IF_AGILITY_WITH_BONUS: unitintegerfield
declare const UNIT_IF_INTELLIGENCE_WITH_BONUS: unitintegerfield
declare const UNIT_IF_STRENGTH_WITH_BONUS: unitintegerfield
declare const UNIT_IF_GOLD_BOUNTY_AWARDED_NUMBER_OF_DICE: unitintegerfield
declare const UNIT_IF_GOLD_BOUNTY_AWARDED_BASE: unitintegerfield
declare const UNIT_IF_GOLD_BOUNTY_AWARDED_SIDES_PER_DIE: unitintegerfield
declare const UNIT_IF_LUMBER_BOUNTY_AWARDED_NUMBER_OF_DICE: unitintegerfield
declare const UNIT_IF_LUMBER_BOUNTY_AWARDED_BASE: unitintegerfield
declare const UNIT_IF_LUMBER_BOUNTY_AWARDED_SIDES_PER_DIE: unitintegerfield
declare const UNIT_IF_LEVEL: unitintegerfield
declare const UNIT_IF_FORMATION_RANK: unitintegerfield
declare const UNIT_IF_ORIENTATION_INTERPOLATION: unitintegerfield
declare const UNIT_IF_ELEVATION_SAMPLE_POINTS: unitintegerfield
declare const UNIT_IF_TINTING_COLOR_RED: unitintegerfield
declare const UNIT_IF_TINTING_COLOR_GREEN: unitintegerfield
declare const UNIT_IF_TINTING_COLOR_BLUE: unitintegerfield
declare const UNIT_IF_TINTING_COLOR_ALPHA: unitintegerfield
declare const UNIT_IF_MOVE_TYPE: unitintegerfield
declare const UNIT_IF_TARGETED_AS: unitintegerfield
declare const UNIT_IF_UNIT_CLASSIFICATION: unitintegerfield
declare const UNIT_IF_HIT_POINTS_REGENERATION_TYPE: unitintegerfield
declare const UNIT_IF_PLACEMENT_PREVENTED_BY: unitintegerfield
declare const UNIT_IF_PRIMARY_ATTRIBUTE: unitintegerfield
declare const UNIT_RF_STRENGTH_PER_LEVEL: unitrealfield
declare const UNIT_RF_AGILITY_PER_LEVEL: unitrealfield
declare const UNIT_RF_INTELLIGENCE_PER_LEVEL: unitrealfield
declare const UNIT_RF_HIT_POINTS_REGENERATION_RATE: unitrealfield
declare const UNIT_RF_MANA_REGENERATION: unitrealfield
declare const UNIT_RF_DEATH_TIME: unitrealfield
declare const UNIT_RF_FLY_HEIGHT: unitrealfield
declare const UNIT_RF_TURN_RATE: unitrealfield
declare const UNIT_RF_ELEVATION_SAMPLE_RADIUS: unitrealfield
declare const UNIT_RF_FOG_OF_WAR_SAMPLE_RADIUS: unitrealfield
declare const UNIT_RF_MAXIMUM_PITCH_ANGLE_DEGREES: unitrealfield
declare const UNIT_RF_MAXIMUM_ROLL_ANGLE_DEGREES: unitrealfield
declare const UNIT_RF_SCALING_VALUE: unitrealfield
declare const UNIT_RF_ANIMATION_RUN_SPEED: unitrealfield
declare const UNIT_RF_SELECTION_SCALE: unitrealfield
declare const UNIT_RF_SELECTION_CIRCLE_HEIGHT: unitrealfield
declare const UNIT_RF_SHADOW_IMAGE_HEIGHT: unitrealfield
declare const UNIT_RF_SHADOW_IMAGE_WIDTH: unitrealfield
declare const UNIT_RF_SHADOW_IMAGE_CENTER_X: unitrealfield
declare const UNIT_RF_SHADOW_IMAGE_CENTER_Y: unitrealfield
declare const UNIT_RF_ANIMATION_WALK_SPEED: unitrealfield
declare const UNIT_RF_DEFENSE: unitrealfield
declare const UNIT_RF_SIGHT_RADIUS: unitrealfield
declare const UNIT_RF_PRIORITY: unitrealfield
declare const UNIT_RF_SPEED: unitrealfield
declare const UNIT_RF_OCCLUDER_HEIGHT: unitrealfield
declare const UNIT_RF_HP: unitrealfield
declare const UNIT_RF_MANA: unitrealfield
declare const UNIT_RF_ACQUISITION_RANGE: unitrealfield
declare const UNIT_RF_CAST_BACK_SWING: unitrealfield
declare const UNIT_RF_CAST_POINT: unitrealfield
declare const UNIT_RF_MINIMUM_ATTACK_RANGE: unitrealfield
declare const UNIT_BF_RAISABLE: unitbooleanfield
declare const UNIT_BF_DECAYABLE: unitbooleanfield
declare const UNIT_BF_IS_A_BUILDING: unitbooleanfield
declare const UNIT_BF_USE_EXTENDED_LINE_OF_SIGHT: unitbooleanfield
declare const UNIT_BF_NEUTRAL_BUILDING_SHOWS_MINIMAP_ICON: unitbooleanfield
declare const UNIT_BF_HERO_HIDE_HERO_INTERFACE_ICON: unitbooleanfield
declare const UNIT_BF_HERO_HIDE_HERO_MINIMAP_DISPLAY: unitbooleanfield
declare const UNIT_BF_HERO_HIDE_HERO_DEATH_MESSAGE: unitbooleanfield
declare const UNIT_BF_HIDE_MINIMAP_DISPLAY: unitbooleanfield
declare const UNIT_BF_SCALE_PROJECTILES: unitbooleanfield
declare const UNIT_BF_SELECTION_CIRCLE_ON_WATER: unitbooleanfield
declare const UNIT_BF_HAS_WATER_SHADOW: unitbooleanfield
declare const UNIT_SF_NAME: unitstringfield
declare const UNIT_SF_PROPER_NAMES: unitstringfield
declare const UNIT_SF_GROUND_TEXTURE: unitstringfield
declare const UNIT_SF_SHADOW_IMAGE_UNIT: unitstringfield
declare const UNIT_WEAPON_IF_ATTACK_DAMAGE_NUMBER_OF_DICE: unitweaponintegerfield
declare const UNIT_WEAPON_IF_ATTACK_DAMAGE_BASE: unitweaponintegerfield
declare const UNIT_WEAPON_IF_ATTACK_DAMAGE_SIDES_PER_DIE: unitweaponintegerfield
declare const UNIT_WEAPON_IF_ATTACK_MAXIMUM_NUMBER_OF_TARGETS: unitweaponintegerfield
declare const UNIT_WEAPON_IF_ATTACK_ATTACK_TYPE: unitweaponintegerfield
declare const UNIT_WEAPON_IF_ATTACK_WEAPON_SOUND: unitweaponintegerfield
declare const UNIT_WEAPON_IF_ATTACK_AREA_OF_EFFECT_TARGETS: unitweaponintegerfield
declare const UNIT_WEAPON_IF_ATTACK_TARGETS_ALLOWED: unitweaponintegerfield
declare const UNIT_WEAPON_RF_ATTACK_BACKSWING_POINT: unitweaponrealfield
declare const UNIT_WEAPON_RF_ATTACK_DAMAGE_POINT: unitweaponrealfield
declare const UNIT_WEAPON_RF_ATTACK_BASE_COOLDOWN: unitweaponrealfield
declare const UNIT_WEAPON_RF_ATTACK_DAMAGE_LOSS_FACTOR: unitweaponrealfield
declare const UNIT_WEAPON_RF_ATTACK_DAMAGE_FACTOR_MEDIUM: unitweaponrealfield
declare const UNIT_WEAPON_RF_ATTACK_DAMAGE_FACTOR_SMALL: unitweaponrealfield
declare const UNIT_WEAPON_RF_ATTACK_DAMAGE_SPILL_DISTANCE: unitweaponrealfield
declare const UNIT_WEAPON_RF_ATTACK_DAMAGE_SPILL_RADIUS: unitweaponrealfield
declare const UNIT_WEAPON_RF_ATTACK_PROJECTILE_SPEED: unitweaponrealfield
declare const UNIT_WEAPON_RF_ATTACK_PROJECTILE_ARC: unitweaponrealfield
declare const UNIT_WEAPON_RF_ATTACK_AREA_OF_EFFECT_FULL_DAMAGE: unitweaponrealfield
declare const UNIT_WEAPON_RF_ATTACK_AREA_OF_EFFECT_MEDIUM_DAMAGE: unitweaponrealfield
declare const UNIT_WEAPON_RF_ATTACK_AREA_OF_EFFECT_SMALL_DAMAGE: unitweaponrealfield
declare const UNIT_WEAPON_RF_ATTACK_RANGE: unitweaponrealfield
declare const UNIT_WEAPON_BF_ATTACK_SHOW_UI: unitweaponbooleanfield
declare const UNIT_WEAPON_BF_ATTACKS_ENABLED: unitweaponbooleanfield
declare const UNIT_WEAPON_BF_ATTACK_PROJECTILE_HOMING_ENABLED: unitweaponbooleanfield
declare const UNIT_WEAPON_SF_ATTACK_PROJECTILE_ART: unitweaponstringfield
declare const MOVE_TYPE_UNKNOWN: movetype
declare const MOVE_TYPE_FOOT: movetype
declare const MOVE_TYPE_FLY: movetype
declare const MOVE_TYPE_HORSE: movetype
declare const MOVE_TYPE_HOVER: movetype
declare const MOVE_TYPE_FLOAT: movetype
declare const MOVE_TYPE_AMPHIBIOUS: movetype
declare const MOVE_TYPE_UNBUILDABLE: movetype
declare const TARGET_FLAG_NONE: targetflag
declare const TARGET_FLAG_GROUND: targetflag
declare const TARGET_FLAG_AIR: targetflag
declare const TARGET_FLAG_STRUCTURE: targetflag
declare const TARGET_FLAG_WARD: targetflag
declare const TARGET_FLAG_ITEM: targetflag
declare const TARGET_FLAG_TREE: targetflag
declare const TARGET_FLAG_WALL: targetflag
declare const TARGET_FLAG_DEBRIS: targetflag
declare const TARGET_FLAG_DECORATION: targetflag
declare const TARGET_FLAG_BRIDGE: targetflag
declare const DEFENSE_TYPE_LIGHT: defensetype
declare const DEFENSE_TYPE_MEDIUM: defensetype
declare const DEFENSE_TYPE_LARGE: defensetype
declare const DEFENSE_TYPE_FORT: defensetype
declare const DEFENSE_TYPE_NORMAL: defensetype
declare const DEFENSE_TYPE_HERO: defensetype
declare const DEFENSE_TYPE_DIVINE: defensetype
declare const DEFENSE_TYPE_NONE: defensetype
declare const HERO_ATTRIBUTE_STR: heroattribute
declare const HERO_ATTRIBUTE_INT: heroattribute
declare const HERO_ATTRIBUTE_AGI: heroattribute
declare const ARMOR_TYPE_WHOKNOWS: armortype
declare const ARMOR_TYPE_FLESH: armortype
declare const ARMOR_TYPE_METAL: armortype
declare const ARMOR_TYPE_WOOD: armortype
declare const ARMOR_TYPE_ETHREAL: armortype
declare const ARMOR_TYPE_STONE: armortype
declare const REGENERATION_TYPE_NONE: regentype
declare const REGENERATION_TYPE_ALWAYS: regentype
declare const REGENERATION_TYPE_BLIGHT: regentype
declare const REGENERATION_TYPE_DAY: regentype
declare const REGENERATION_TYPE_NIGHT: regentype
declare const UNIT_CATEGORY_GIANT: unitcategory
declare const UNIT_CATEGORY_UNDEAD: unitcategory
declare const UNIT_CATEGORY_SUMMONED: unitcategory
declare const UNIT_CATEGORY_MECHANICAL: unitcategory
declare const UNIT_CATEGORY_PEON: unitcategory
declare const UNIT_CATEGORY_SAPPER: unitcategory
declare const UNIT_CATEGORY_TOWNHALL: unitcategory
declare const UNIT_CATEGORY_ANCIENT: unitcategory
declare const UNIT_CATEGORY_NEUTRAL: unitcategory
declare const UNIT_CATEGORY_WARD: unitcategory
declare const UNIT_CATEGORY_STANDON: unitcategory
declare const UNIT_CATEGORY_TAUREN: unitcategory
declare const PATHING_FLAG_UNWALKABLE: pathingflag
declare const PATHING_FLAG_UNFLYABLE: pathingflag
declare const PATHING_FLAG_UNBUILDABLE: pathingflag
declare const PATHING_FLAG_UNPEONHARVEST: pathingflag
declare const PATHING_FLAG_BLIGHTED: pathingflag
declare const PATHING_FLAG_UNFLOATABLE: pathingflag
declare const PATHING_FLAG_UNAMPHIBIOUS: pathingflag
declare const PATHING_FLAG_UNITEMPLACABLE: pathingflag


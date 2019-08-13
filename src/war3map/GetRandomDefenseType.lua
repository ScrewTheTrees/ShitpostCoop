local ____exports = {}
function ____exports.GetRandomDefenseType(self)
    local num = GetRandomInt(1, 5)
    local ____TS_switch2 = num
    if ____TS_switch2 == 2 then
        goto ____TS_switch2_case_0
    end
    if ____TS_switch2 == 3 then
        goto ____TS_switch2_case_1
    end
    if ____TS_switch2 == 4 then
        goto ____TS_switch2_case_2
    end
    if ____TS_switch2 == 5 then
        goto ____TS_switch2_case_3
    end
    goto ____TS_switch2_case_default
    ::____TS_switch2_case_0::
    do
        return DEFENSE_TYPE_NONE
    end
    ::____TS_switch2_case_1::
    do
        return DEFENSE_TYPE_LIGHT
    end
    ::____TS_switch2_case_2::
    do
        return DEFENSE_TYPE_LARGE
    end
    ::____TS_switch2_case_3::
    do
        return DEFENSE_TYPE_FORT
    end
    ::____TS_switch2_case_default::
    do
        return DEFENSE_TYPE_MEDIUM
    end
    ::____TS_switch2_end::
end
return ____exports

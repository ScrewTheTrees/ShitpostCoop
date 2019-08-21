import {Logger} from "./Logger";

const __hooks: any = {};

export class Hooks {
    public static get(name: string): object | undefined {
        return __hooks[name];
    }

    public static set(name: string, value: any) {
        __hooks[name] = value;
        Logger.LogDebug("Hooked: " + name)
    }
}
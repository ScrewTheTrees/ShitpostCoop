import {MapTimers} from "../MapTimers";
import {EntityComponent} from "./EntityComponent";

export abstract class Entity {
    protected entityComponents: EntityComponent[] = [];
    private static entities: Entity[] = [];
    private static entityLoop: Function;

    protected constructor() {
        if (Entity.entityLoop == null) {
            Entity.entityLoop = () => {
                Entity.entities.forEach((entity) => {
                    entity._updateEntity();
                });
            };
            MapTimers.addFastTimerCallback(Entity.entityLoop);
        }
        Entity.entities.push(this);
    }

    private _updateEntity() {
        this["step"]();
        this.entityComponents.forEach((component: EntityComponent) => {
            component.step();
        });
    }

    public addComponent(component: EntityComponent) {
        this.entityComponents.push(component);
    }

    abstract step(): void;
}
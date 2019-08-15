import {Entity} from "./Entity";

export abstract class EntityComponent {
    private readonly parent: Entity;
    protected constructor(parent: Entity) {
        this.parent = parent;

        this.parent.addComponent(this);
    }

    abstract step(): void;
}
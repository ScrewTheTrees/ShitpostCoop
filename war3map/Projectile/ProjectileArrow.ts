import {Entity} from "../Generic/Entity";

export class ProjectileArrow extends Entity {
    private range: number;
    private model: string;
    private size: number;

    constructor(range: number, model: string, size: number) {
        super();
        this.range = range;
        this.model = model;
        this.size = size;
    }


    step(): void {
    }

}
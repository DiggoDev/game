import { Movement } from "@/components/movement";
import { Position } from "@/components/position";

export class Player {
    public components: { position: Position, movement: Movement }

    public constructor() {
        this.components = {
            position: new Position(100, 200),
            movement: new Movement(5, 'up'),
        }
    }
}
import { MovementCompnent } from "@/components/movement-component";
import { PositionComponent } from "@/components/position-component";

export class PlayerEntity {
    public components: { position: PositionComponent, movement: MovementCompnent }

    public constructor() {
        this.components = {
            position: new PositionComponent(100, 200),
            movement: new MovementCompnent(5, 'up'),
        }
    }
}
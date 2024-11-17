import { PlayerEntity } from "@/entities/player-entity";

export class MovementSystem {
  static update(entity: PlayerEntity) {
    const position = entity.components.position;
    const movement = entity.components.movement;

    if (movement.direction === 'up') {
      position.y -= movement.speed;
    } else if (movement.direction === 'down') {
      position.y += movement.speed;
    }
  }
}
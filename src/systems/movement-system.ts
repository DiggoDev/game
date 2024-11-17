import { PlayerEntity } from '@/entities/player-entity';
import { Direction } from '@/utils/enums/direction';

export class MovementSystem {
	static update(entity: PlayerEntity) {
		const position = entity.position;
		const movement = entity.movement;

		switch(movement.direction) {
			case Direction.Up: {
				position.subtractY(movement.speed)
				break
			}
			case Direction.Down: {
				position.addY(movement.speed)
				break
			}
			case Direction.Left: {
				position.subtractX(movement.speed)
				break
			}
			case Direction.Right: {
				position.addX(movement.speed)
				break
			}
		}
	}
}

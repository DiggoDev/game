interface MoveObject { x: number, y: number }

export class PositionComponent {
	private moveObject: MoveObject

	constructor(moveObject: MoveObject) {
		this.moveObject = moveObject;
	}

	public setX(x: number) {
		this.moveObject.x = x
	}

	public addX(x: number) {
		this.moveObject.x += x
	}

	public subtractX(x: number) {
		this.moveObject.x -= x
	}

	public setY(y: number) {
		this.moveObject.y = y
	}

	public addY(y: number) {
		this.moveObject.y += y
	}

	public subtractY(y: number) {
		this.moveObject.y -= y
	}
}

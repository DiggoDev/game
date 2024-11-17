import { PlayerEntity } from '@/entities/player-entity';
import { MovementSystem } from '@/systems/movement-system';
import { addDevTools } from '@/utils/debug-helper';
import { Application, Assets } from 'pixi.js';

import playerImage from '../assets/graphics/basic-player.png';

export class Game {
	private app: Application;
	private exitGame = false;
	private entities: { player: PlayerEntity } | undefined;
	constructor() {
		this.app = new Application();
	}
	public async start() {
		// Init
		addDevTools(this.app);
		// Intialize the application.
		await this.app.init({ background: '#1099bb', resizeTo: window });
		// Then adding the application's canvas to the DOM body.
		document.body.appendChild(this.app.canvas);

		const texture = await Assets.load(playerImage);
		const player = new PlayerEntity(texture);
		this.entities = {
			player,
		};

		// const container = new Container({
		//     x: this.app.screen.width / 2,
		//     y: this.app.screen.height / 2
		//   });

		this.app.stage.addChild(this.entities.player.sprite);

		// container.addChild(this.entities.player.sprite)

		// Start game loop
		this.gameLoop();
	}
	private gameLoop() {
		if (this.exitGame) return;
		if (!this.entities) throw new Error('Entities not defined');

		MovementSystem.update(this.entities.player);

		requestAnimationFrame(() => this.gameLoop());
	}
}

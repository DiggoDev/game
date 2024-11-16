import { addDevTools } from "@/utils/debug-helper";
import { Application } from "pixi.js";

export class Game {
    private app: Application
    private exitGame = false
    constructor() {
        this.app = new Application();
    }
    public async start() {
        // Init
        addDevTools(this.app)
        // Intialize the application.
        await this.app.init({ background: '#1099bb', resizeTo: window });
        // Then adding the application's canvas to the DOM body.
        document.body.appendChild(this.app.canvas);

        // Start game loop
        this.gameLoop()
    }
    private gameLoop() {
        if(this.exitGame) return
        requestAnimationFrame(() => this.gameLoop());
    }
}
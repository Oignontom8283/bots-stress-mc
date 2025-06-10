// src/Bot.ts
import mineflayer, { Bot as MineflayerBot } from 'mineflayer';
import { randomLantinString } from './utils';

export class Bot {

  static bots: Bot[] = [];

  private bot: MineflayerBot;

  constructor(
    private host: string,
    private port: number,
    private prefix: string,
    private username: string = "default value"
  ) {

    this.username = this.prefix + randomLantinString(3, 12);

    this.bot = mineflayer.createBot({
      host: this.host,
      port: this.port,
      username: this.username,
    });

    Bot.bots.push(this);

    this.setupEvents();
  }

  private setupEvents() {
    this.bot.on('login', () => {
      console.log(`[${this.username}] Connected to ${this.host}:${this.port}`);
    });

        this.bot.on('end', () => {
      console.log(`[${this.username}] Disconnected. Reconnection dans 5s...`);
      // Relance une nouvelle instance du bot après un délai
      setTimeout(() => {
        this.bot = mineflayer.createBot({
            host: this.host,
            port: this.port,
            username: this.username,
        })
      })
    });

    // Événement death pour respawn automatique
    this.bot.on('death', () => {
        console.log(`[${this.username}] is dead, respawning...`);
        this.bot.once('spawn', () => {
            console.log(`[${this.username}] respawned.`);
        });
        this.bot.respawn();
    });

  }

  public leave() {
    this.bot.quit();
  }

  public getState(): string {
    if (!this.bot || !this.bot.entity) return 'offline';
    return `pos: ${this.bot.entity.position}`;
  }

  public chat(msg: string) {
    this.bot.chat(msg);
  }

  public isConnected(): boolean {
    return this.bot !== undefined && this.bot.player !== undefined;
  }

  // Ajoute d'autres fonctions personnalisées ici...
}

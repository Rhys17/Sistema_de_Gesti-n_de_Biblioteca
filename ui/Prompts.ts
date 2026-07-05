import * as readline from "readline";

/**
 * Utilidades para leer datos del usuario desde la consola.
 * Aísla el uso de readline del resto de la aplicación.
 */
export class Prompts {
  private rl: readline.Interface;

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  public preguntar(texto: string): Promise<string> {
    // TODO: implementar lógica (envolver this.rl.question en una Promise)
    return Promise.resolve("");
  }

  public cerrar(): void {
    // TODO: implementar lógica (this.rl.close())
  }
}

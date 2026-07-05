import { MenuCommand } from "./MenuCommand";
import { Prompts } from "./Prompts";

/**
 * Muestra las opciones disponibles y delega la ejecución a cada MenuCommand.
 * No conoce la lógica de negocio: solo orquesta.
 */
export class Menu {
  constructor(
    private comandos: MenuCommand[],
    private prompts: Prompts
  ) {}

  public mostrar(): void {
    // TODO: implementar lógica (listar this.comandos con su índice y descripción)
    console.log("=== BiblioConsola ===");
  }

  public async ejecutarOpcion(indice: number): Promise<void> {
    // TODO: implementar lógica (validar índice y llamar a comandos[indice].ejecutar())
  }

  public async iniciar(): Promise<void> {
    // TODO: implementar bucle principal: mostrar -> leer opción -> ejecutarOpcion -> repetir
  }
}

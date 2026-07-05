import { MenuCommand } from "../MenuCommand";
import { Prompts } from "../Prompts";
import { PrestamoService } from "../../services/PrestamoService";
import { SocioRepository } from "../../repositories/SocioRepository";
import { LibroRepository } from "../../repositories/LibroRepository";

export class RealizarPrestamoCommand implements MenuCommand {
  public descripcion = "Realizar préstamo";

  constructor(
    private prestamoService: PrestamoService,
    private socioRepository: SocioRepository,
    private libroRepository: LibroRepository,
    private prompts: Prompts
  ) {}

  public async ejecutar(): Promise<void> {
    // TODO: implementar lógica (pedir socio y libro, llamar a prestamoService.realizarPrestamo)
  }
}

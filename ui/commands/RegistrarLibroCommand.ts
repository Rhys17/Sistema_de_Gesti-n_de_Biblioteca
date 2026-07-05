import { MenuCommand } from "../MenuCommand";
import { Prompts } from "../Prompts";
import { CatalogoService } from "../../services/CatalogoService";

export class RegistrarLibroCommand implements MenuCommand {
  public descripcion = "Registrar libro";

  constructor(
    private catalogoService: CatalogoService,
    private prompts: Prompts
  ) {}

  public async ejecutar(): Promise<void> {
    // TODO: implementar lógica (pedir datos con this.prompts y llamar a catalogoService.agregarLibro)
  }
}

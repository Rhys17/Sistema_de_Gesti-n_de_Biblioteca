import { Socio } from "../models/Socio";
import { Repository } from "./Repository";

/**
 * Almacena y recupera socios. Hoy en memoria (array);
 * en el futuro podría persistir en archivo o base de datos
 * sin que SocioService tenga que cambiar.
 */
export class SocioRepository implements Repository<Socio> {
  private socios: Socio[] = [];

  public agregar(socio: Socio): void {
    // TODO: implementar lógica
  }

  public buscarPorId(id: string): Socio | undefined {
    // TODO: implementar lógica
    return undefined;
  }

  public listar(): Socio[] {
    // TODO: implementar lógica
    return [];
  }

  public eliminar(id: string): void {
    // TODO: implementar lógica
  }
}

import { Prestamo } from "../models/Prestamo";
import { Repository } from "./Repository";

/**
 * Almacena y recupera préstamos. Hoy en memoria (array);
 * en el futuro podría persistir en archivo o base de datos
 * sin que PrestamoService tenga que cambiar.
 */
export class PrestamoRepository implements Repository<Prestamo> {
  private prestamos: Prestamo[] = [];

  public agregar(prestamo: Prestamo): void {
    // TODO: implementar lógica
  }

  public buscarPorId(id: string): Prestamo | undefined {
    // TODO: implementar lógica
    return undefined;
  }

  public listar(): Prestamo[] {
    // TODO: implementar lógica
    return [];
  }

  public eliminar(id: string): void {
    // TODO: implementar lógica
  }

  /**
   * Devuelve únicamente los préstamos que aún no fueron devueltos.
   */
  public listarActivos(): Prestamo[] {
    // TODO: implementar lógica
    return [];
  }

  /**
   * Devuelve todos los préstamos asociados a un socio (historial).
   */
  public listarPorSocio(socioId: string): Prestamo[] {
    // TODO: implementar lógica
    return [];
  }
}

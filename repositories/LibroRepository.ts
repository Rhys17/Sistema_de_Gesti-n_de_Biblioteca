import { Libro } from "../models/Libro";
import { Repository } from "./Repository";

/**
 * Almacena y recupera libros. Hoy en memoria (array);
 * en el futuro podría persistir en archivo o base de datos
 * sin que CatalogoService tenga que cambiar.
 */
export class LibroRepository implements Repository<Libro> {
  private libros: Libro[] = [];

  public agregar(libro: Libro): void {
    // TODO: implementar lógica
  }

  public buscarPorId(isbn: string): Libro | undefined {
    // TODO: implementar lógica (buscar por ISBN)
    return undefined;
  }

  public listar(): Libro[] {
    // TODO: implementar lógica
    return [];
  }

  public eliminar(isbn: string): void {
    // TODO: implementar lógica
  }

  /**
   * Búsqueda flexible por título, autor o categoría.
   */
  public buscarPorCriterio(criterio: string): Libro[] {
    // TODO: implementar lógica
    return [];
  }
}

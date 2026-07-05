import { Libro } from "../models/Libro";
import { LibroRepository } from "../repositories/LibroRepository";

/**
 * Contiene las reglas de negocio relacionadas al catálogo de libros.
 * Depende de LibroRepository por interfaz, no de su implementación concreta.
 */
export class CatalogoService {
  constructor(private libroRepository: LibroRepository) {}

  public agregarLibro(libro: Libro): void {
    // TODO: implementar lógica (validaciones, ISBN duplicado, etc.)
  }

  public eliminarLibro(isbn: string): void {
    // TODO: implementar lógica
  }

  public buscarLibro(criterio: string): Libro[] {
    // TODO: implementar lógica
    return [];
  }
}

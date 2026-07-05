import { Socio } from "../models/Socio";
import { SocioRepository } from "../repositories/SocioRepository";

/**
 * Contiene las reglas de negocio relacionadas a los socios de la biblioteca.
 * Depende de SocioRepository por interfaz, no de su implementación concreta.
 */
export class SocioService {
  constructor(private socioRepository: SocioRepository) {}

  public registrarSocio(socio: Socio): void {
    // TODO: implementar lógica (validar documento único, etc.)
  }

  public editarSocio(id: string, datos: Partial<Socio>): void {
    // TODO: implementar lógica
  }

  public eliminarSocio(id: string): void {
    // TODO: implementar lógica
  }

  public tieneMultasPendientes(id: string): boolean {
    // TODO: implementar lógica (delegar en Socio.tieneMultasPendientes)
    return false;
  }
}

import { Libro } from "../models/Libro";
import { Socio } from "../models/Socio";
import { Prestamo } from "../models/Prestamo";
import { LibroRepository } from "../repositories/LibroRepository";
import { SocioRepository } from "../repositories/SocioRepository";
import { PrestamoRepository } from "../repositories/PrestamoRepository";
import { PoliticaMulta } from "./policies/PoliticaMulta";

/**
 * Contiene las reglas de negocio del ciclo de préstamo: solicitar, devolver,
 * calcular multas y generar reportes. Recibe sus dependencias por constructor
 * (inyección de dependencias), lo que facilita las pruebas unitarias.
 */
export class PrestamoService {
  constructor(
    private libroRepository: LibroRepository,
    private socioRepository: SocioRepository,
    private prestamoRepository: PrestamoRepository,
    private politicaMulta: PoliticaMulta
  ) {}

  public realizarPrestamo(socio: Socio, libro: Libro): Prestamo | null {
    // TODO: implementar lógica (validar disponibilidad y multas pendientes)
    return null;
  }

  public registrarDevolucion(idPrestamo: string): void {
    // TODO: implementar lógica (usar this.politicaMulta.calcular si hay atraso)
  }

  public listarPrestamosActivos(): Prestamo[] {
    // TODO: implementar lógica
    return [];
  }

  public generarReporteMasPrestados(): Libro[] {
    // TODO: implementar lógica
    return [];
  }
}

import { Libro } from "./Libro";
import { Socio } from "./Socio";

/**
 * Representa el préstamo de un libro a un socio.
 */
export class Prestamo {
  private id: string;
  private libro: Libro;
  private socio: Socio;
  private fechaPrestamo: Date;
  private fechaVencimiento: Date;
  private fechaDevolucion: Date | null;
  private multaGenerada: number;
  private devuelto: boolean;

  constructor(
    id: string,
    libro: Libro,
    socio: Socio,
    fechaPrestamo: Date,
    fechaVencimiento: Date
  ) {
    this.id = id;
    this.libro = libro;
    this.socio = socio;
    this.fechaPrestamo = fechaPrestamo;
    this.fechaVencimiento = fechaVencimiento;
    this.fechaDevolucion = null;
    this.multaGenerada = 0;
    this.devuelto = false;
  }

  /**
   * Indica si el préstamo está vencido (no devuelto y pasada la fecha límite).
   */
  public estaVencido(): boolean {
    // TODO: implementar lógica
    return false;
  }

  /**
   * Calcula la multa correspondiente según los días de atraso.
   */
  public calcularMulta(): number {
    // TODO: implementar lógica
    return 0;
  }

  /**
   * Marca el préstamo como devuelto y actualiza las fechas correspondientes.
   */
  public registrarDevolucion(): void {
    // TODO: implementar lógica
  }

  // Getters y setters

  public getId(): string {
    return this.id;
  }

  public getLibro(): Libro {
    return this.libro;
  }

  public setLibro(libro: Libro): void {
    this.libro = libro;
  }

  public getSocio(): Socio {
    return this.socio;
  }

  public setSocio(socio: Socio): void {
    this.socio = socio;
  }

  public getFechaPrestamo(): Date {
    return this.fechaPrestamo;
  }

  public setFechaPrestamo(fechaPrestamo: Date): void {
    this.fechaPrestamo = fechaPrestamo;
  }

  public getFechaVencimiento(): Date {
    return this.fechaVencimiento;
  }

  public setFechaVencimiento(fechaVencimiento: Date): void {
    this.fechaVencimiento = fechaVencimiento;
  }

  public getFechaDevolucion(): Date | null {
    return this.fechaDevolucion;
  }

  public setFechaDevolucion(fechaDevolucion: Date | null): void {
    this.fechaDevolucion = fechaDevolucion;
  }

  public getMultaGenerada(): number {
    return this.multaGenerada;
  }

  public setMultaGenerada(multaGenerada: number): void {
    this.multaGenerada = multaGenerada;
  }

  public isDevuelto(): boolean {
    return this.devuelto;
  }

  public setDevuelto(devuelto: boolean): void {
    this.devuelto = devuelto;
  }
}

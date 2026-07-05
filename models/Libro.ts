/**
 * Representa un libro del catálogo de la biblioteca.
 */
export class Libro {
  private isbn: string;
  private titulo: string;
  private autor: string;
  private categoria: string;
  private cantidadTotal: number;
  private cantidadDisponible: number;

  constructor(
    isbn: string,
    titulo: string,
    autor: string,
    categoria: string,
    cantidadTotal: number
  ) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.categoria = categoria;
    this.cantidadTotal = cantidadTotal;
    this.cantidadDisponible = cantidadTotal;
  }

  /**
   * Indica si hay al menos un ejemplar disponible para préstamo.
   */
  public estaDisponible(): boolean {
    // TODO: implementar lógica
    return false;
  }

  /**
   * Reduce en uno la cantidad de ejemplares disponibles (al prestar).
   */
  public reducirDisponibilidad(): void {
    // TODO: implementar lógica
  }

  /**
   * Aumenta en uno la cantidad de ejemplares disponibles (al devolver).
   */
  public aumentarDisponibilidad(): void {
    // TODO: implementar lógica
  }

  // Getters y setters

  public getIsbn(): string {
    return this.isbn;
  }

  public setIsbn(isbn: string): void {
    this.isbn = isbn;
  }

  public getTitulo(): string {
    return this.titulo;
  }

  public setTitulo(titulo: string): void {
    this.titulo = titulo;
  }

  public getAutor(): string {
    return this.autor;
  }

  public setAutor(autor: string): void {
    this.autor = autor;
  }

  public getCategoria(): string {
    return this.categoria;
  }

  public setCategoria(categoria: string): void {
    this.categoria = categoria;
  }

  public getCantidadTotal(): number {
    return this.cantidadTotal;
  }

  public setCantidadTotal(cantidadTotal: number): void {
    this.cantidadTotal = cantidadTotal;
  }

  public getCantidadDisponible(): number {
    return this.cantidadDisponible;
  }

  public setCantidadDisponible(cantidadDisponible: number): void {
    this.cantidadDisponible = cantidadDisponible;
  }

  public toString(): string {
    // TODO: implementar representación en texto
    return "";
  }
}

/**
 * Representa a un socio registrado en la biblioteca.
 */
export class Socio {
  private id: string;
  private nombre: string;
  private documento: string;
  private telefono: string;
  private email: string;
  private multaAcumulada: number;

  constructor(
    id: string,
    nombre: string,
    documento: string,
    telefono: string,
    email: string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.documento = documento;
    this.telefono = telefono;
    this.email = email;
    this.multaAcumulada = 0;
  }

  /**
   * Indica si el socio tiene multas pendientes de pago.
   */
  public tieneMultasPendientes(): boolean {
    // TODO: implementar lógica
    return false;
  }

  /**
   * Suma un monto a la multa acumulada del socio.
   */
  public acumularMulta(monto: number): void {
    // TODO: implementar lógica
  }

  /**
   * Descuenta un monto pagado de la multa acumulada.
   */
  public pagarMulta(monto: number): void {
    // TODO: implementar lógica
  }

  // Getters y setters

  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  public getDocumento(): string {
    return this.documento;
  }

  public setDocumento(documento: string): void {
    this.documento = documento;
  }

  public getTelefono(): string {
    return this.telefono;
  }

  public setTelefono(telefono: string): void {
    this.telefono = telefono;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public getMultaAcumulada(): number {
    return this.multaAcumulada;
  }

  public setMultaAcumulada(multaAcumulada: number): void {
    this.multaAcumulada = multaAcumulada;
  }

  public toString(): string {
    // TODO: implementar representación en texto
    return "";
  }
}

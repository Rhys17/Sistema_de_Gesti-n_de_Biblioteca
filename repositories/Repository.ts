/**
 * Contrato genérico para el acceso a datos de cualquier entidad.
 * Las capas superiores (servicios) dependen de esta interfaz,
 * no de la forma concreta en que se almacenan los datos
 * (memoria, archivo, base de datos, etc.).
 */
export interface Repository<T> {
  agregar(item: T): void;
  buscarPorId(id: string): T | undefined;
  listar(): T[];
  eliminar(id: string): void;
}

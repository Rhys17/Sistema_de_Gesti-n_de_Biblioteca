/**
 * Cada opción del menú se modela como un comando independiente.
 * Agregar una opción nueva significa crear una clase más,
 * sin tocar el switch/menú existente (principio abierto/cerrado).
 */
export interface MenuCommand {
  descripcion: string;
  ejecutar(): Promise<void> | void;
}

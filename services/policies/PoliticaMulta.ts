/**
 * Estrategia para calcular la multa de un préstamo vencido.
 * Permite intercambiar la forma de calcular la multa (fija por día,
 * porcentual, por categoría de libro, etc.) sin modificar Prestamo
 * ni PrestamoService.
 */
export interface PoliticaMulta {
  calcular(diasAtraso: number): number;
}

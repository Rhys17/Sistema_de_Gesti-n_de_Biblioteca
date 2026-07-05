import { PoliticaMulta } from "./PoliticaMulta";

/**
 * Política por defecto: cobra un monto fijo por cada día de atraso.
 */
export class PoliticaMultaFija implements PoliticaMulta {
  constructor(private montoPorDia: number) {}

  public calcular(diasAtraso: number): number {
    // TODO: implementar lógica
    return 0;
  }
}

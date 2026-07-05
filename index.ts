import { LibroRepository } from "./repositories/LibroRepository";
import { SocioRepository } from "./repositories/SocioRepository";
import { PrestamoRepository } from "./repositories/PrestamoRepository";

import { CatalogoService } from "./services/CatalogoService";
import { SocioService } from "./services/SocioService";
import { PrestamoService } from "./services/PrestamoService";
import { PoliticaMultaFija } from "./services/policies/PoliticaMultaFija";

import { Prompts } from "./ui/Prompts";
import { Menu } from "./ui/Menu";
import { MenuCommand } from "./ui/MenuCommand";
import { RegistrarLibroCommand } from "./ui/commands/RegistrarLibroCommand";
import { RealizarPrestamoCommand } from "./ui/commands/RealizarPrestamoCommand";

/**
 * Composition root: aquí, y solo aquí, se crean las instancias concretas
 * y se conectan las dependencias entre capas. El resto de la app
 * solo conoce interfaces/tipos, nunca instancia directamente sus dependencias.
 */
function main(): void {
  // Repositorios
  const libroRepository = new LibroRepository();
  const socioRepository = new SocioRepository();
  const prestamoRepository = new PrestamoRepository();

  // Servicios
  const catalogoService = new CatalogoService(libroRepository);
  const socioService = new SocioService(socioRepository);
  const politicaMulta = new PoliticaMultaFija(500); // ej. 500 (unidad monetaria) por día
  const prestamoService = new PrestamoService(
    libroRepository,
    socioRepository,
    prestamoRepository,
    politicaMulta
  );

  // UI
  const prompts = new Prompts();
  const comandos: MenuCommand[] = [
    new RegistrarLibroCommand(catalogoService, prompts),
    new RealizarPrestamoCommand(prestamoService, socioRepository, libroRepository, prompts),
    // TODO: agregar el resto de comandos (eliminar libro, registrar socio, devolución, reportes, etc.)
  ];

  const menu = new Menu(comandos, prompts);
  menu.iniciar();
}

main();

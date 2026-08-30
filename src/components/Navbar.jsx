import escudoPapa from '../assets/escudo_papaleon.png';

function Navbar() {
  const links = [
    { id: 1, label: "Inicio", url: "#hero" },
    { id: 2, label: "Itinerario", url: "#features" },
    { id: 3, label: "Contacto", url: "#footer" },
    { id: 4, label: "Momentos Destacados", url: "#destacados" },
    { id: 5, label: "Frases y Mensajes", url: "#mensajes" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#e2e8f0]">
      <nav className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">

        {/* Marca: escudo + nombre */}
        <div className="flex items-center gap-3">
          <img
            src={escudoPapa}
            alt="Escudo Oficial Papa León XIV"
            className="w-10 h-auto"
          />
          <span className="font-display font-bold text-primary text-base leading-tight hidden sm:block">
            Papa León en Argentina
          </span>
        </div>

        {/* Links de navegación- generados con mapp() */}
        <ul className="flex items-center gap-6 list-none m-0 p-0">
          {links.map((link) => (
            <li key={link.id} className="hidden md:block">
              <a
                href={link.url}
                className="text-on-surface-variant text-sm font-medium hover:text-primary transition-colors duration-150"
              >
                {link.label}
              </a>
            </li>
          ))}
          {/* Botón destacado para mobile y desktop */}
          <li>
            <a
              href="#features"
              className="bg-accent text-on-surface text-sm font-semibold px-4 py-2 rounded-lg hover:brightness-95 transition-all duration-150"
            >
              En Vivo
            </a>
          </li>
        </ul>

      </nav>
    </header>
  );
}

export default Navbar;


import logoPapa from '../assets/papaenarg_logo.png';
import escudoPapa from '../assets/escudo_papaleon.png';

// Cambiá el valor a 'escudoPapa' si preferís mostrar el escudo en lugar del logo
const imagenSeleccionada = logoPapa; 

function Navbar() {
  const links = [
    { id: 1, label: "Inicio", url: "#hero" },
    { id: 2, label: "Itinerario", url: "#features" },
    { id: 3, label: "Contacto", url: "#footer" },
    { id: 4, label: "Momentos Destacados", url: "#destacados" },
    { id: 5, label: "Frases y Mensajes", url: "#mensajes" }
  ];

  return (
    <header>
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Contenedor de Marca (Logo/Escudo + Texto) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img 
            src={imagenSeleccionada} 
            alt="Logo/Escudo Oficial del Papa"
            style={{ width: '40px', height: 'auto' }} // Ajustá el tamaño a tu gusto
          />
        </div>

        {/* Links generados con .map() */}
        <ul style={{ display: 'flex', listStyle: 'none', gap: '15px' }}>
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.url}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

      </nav>
    </header>
  );
}

export default Navbar;


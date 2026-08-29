import logoPapa from '../assets/papaenarg_logo.png'
import escudoPapa from '../assets/escudo_papaleon.png'
const logo = logoPapa; 
const escudo=escudoPapa

function Navbar() {
  //defino array con los elementos del menu
  const links = [
    { id: 1, label: "Inicio", url: "#hero" },
    { id: 2, label: "Itinerario", url: "#features" },
    { id: 3, label: "Contacto", url: "#footer" },
    { id: 4, label: "Momentos Destacados", url: "#destacados" },
    { id: 5, label: "Frases y Mensajes", url: "#mensajes" }
  ];

  return (
    <header >
      <nav>
        {/* escudo */}
        <div >
          <img 
          src={escudo} 
          alt={`escudo Papa`}         
        />
          <span>🇻🇦</span> PapaLeonXVEnArg
        </div>

        {/* Links generados con .map() */}
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <a 
                href={link.url} 
                
              >
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


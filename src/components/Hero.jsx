import leoXIV from '../assets/leo-xiv.png';

function Hero() {
  // 
  const isRegistered = true; 

  const handleMainAction = () => {
    alert("Te registraste para recibir novedades del evento.");
  };

  return (
    <section id="hero" className="bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 flex flex-col-reverse md:flex-row items-center gap-12">

        {/*Texto*/}
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block bg-accent text-on-surface text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-5">
            Cobertura Oficial 2026
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight tracking-tight text-on-surface mb-5">
            Visita del Santo Padre <br className="hidden md:block" />
            León XIV a la Argentina
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-8 max-w-xl">
            Sigue la cobertura oficial de la visita pastoral, transmisiones en vivo y guías de acceso a los eventos masivos.
          </p>

          {/* Condicional Ternario*/}
          {isRegistered ? (
            <button
              type="button"
              onClick={handleMainAction}
              className="bg-emerald-600 text-white font-semibold text-base px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-200"
            >
              ✓ Ya estás registrado
            </button>
          ) : (
            <button
              type="button"
              onClick={handleMainAction}
              className="bg-primary text-white font-semibold text-base px-8 py-3 rounded-lg hover:bg-[#005d90] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Registrarse
            </button>
          )}

        </div>

        {/* Imagen */}
        <div className="flex-shrink-0 flex justify-center">
          <img
            src={leoXIV}
            alt="Su Santidad León XIV"
            className="w-64 md:w-80 lg:w-96 rounded-xl object-cover shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
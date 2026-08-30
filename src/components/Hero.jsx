function Hero() {
  const handleMainAction = () => {
    alert("Te registraste para recibir novedades del evento");
  };

  return (
    <section>
      <div >
        <h1 >
          Visita del Santo Padre León XIV a la Argentina
        </h1>
        <p >
          Sigue la cobertura oficial de la visita pastoral, transmisiones en vivo y guías de acceso a los eventos masivos.
        </p>
        <button
          type="button"
          onClick={handleMainAction}          
        >
          Ver Resumen
        </button>
      </div>
    </section>
  );
}

export default Hero;
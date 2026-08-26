function FeatureCard({ title, description, isNew = false, onSelect }) {
  return (
    <article className="bg-surface rounded-lg p-6">
      <h3 className="text-xl">{title}</h3>

      {/* condicional: se muestra o no se muestra */}
      {isNew && <span className="bg-primary text-white text-xs px-2">NUEVO</span>}

      <p className="opacity-70">{description}</p>

      <button
        type="button"
        onClick={() => onSelect(title)}
        className="mt-4 bg-primary text-white px-4 py-2 rounded-lg"
      >
        Ver más
      </button>
    </article>
  );
}

export default FeatureCard;
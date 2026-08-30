function FeatureCard({ title, description, isNew = false, onSelect }) {
  return (
    <article className="bg-surface rounded-lg p-6 shadow-[0px_4px_20px_rgba(15,23,42,0.05)] flex flex-col gap-3 hover:shadow-md transition-shadow duration-200">

      <div className="flex items-start justify-between gap-2">
        <h3 className="font-display text-lg font-semibold text-on-surface leading-snug">
          {title}
        </h3>
        {isNew && (
          <span className="shrink-0 bg-accent text-on-surface text-[11px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">
            Nuevo
          </span>
        )}
      </div>

      <p className="text-on-surface-variant text-sm leading-relaxed flex-1">
        {description}
      </p>

      <button
        type="button"
        onClick={() => onSelect(title)}
        className="mt-4 self-start bg-primary text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-[#005d90] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Ver detalles
      </button>

    </article>
  );
}

export default FeatureCard;
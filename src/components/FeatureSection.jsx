import { features } from '../data/features';
import FeatureCard from './FeatureCard';

function FeatureSection() {
  const handleFeatureClick = (title) => {
    alert(`Clickeaste: ${title}`);
  };

  return (
    <section id="features" className="bg-[#f2f4f6] px-6 md:px-12 py-20">
      <div className="max-w-6xl mx-auto">

        <div className="mb-10">
          <span className="inline-block text-primary text-xs font-bold uppercase tracking-widest mb-3">
            Agenda
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-on-surface tracking-tight">
            Eventos Principales
          </h2>
          <p className="text-on-surface-variant mt-2 text-base max-w-lg">
            Los momentos clave de la visita pastoral del Santo Padre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              isNew={feature.isNew}
              onSelect={handleFeatureClick}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeatureSection;
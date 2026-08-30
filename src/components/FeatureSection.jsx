import { features } from '../data/features';
import FeatureCard from './FeatureCard';

function FeatureSection() {
  const handleFeatureClick = (title) => {
    alert(`Clickeaste: ${title}`);
  };

  return (
    <section className="px-6 py-16">
      <h2 className="font-display text-3xl mb-8">Resumen</h2>

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
    </section>
  );
}

export default FeatureSection;*/
/*import React from 'react'

function FeatureSection() {
  return (
    <div>FeatureSection</div>
  )
}

export default FeatureSection*/
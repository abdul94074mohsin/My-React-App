import React from 'react';
import { 
  Layers, 
  Users, 
  Briefcase, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function NavigationHub({ onOpenModal }) {
  const hubCards = [
    {
      title: 'Full Services',
      desc: 'Architecture design, enterprise software & full-stack development solutions.',
      icon: Layers,
      color: '#0284c7',
      href: '#services'
    },
    {
      title: 'About Us',
      desc: 'Our technical story, core engineering values, and regional UAE presence.',
      icon: Users,
      color: '#4f46e5',
      href: '#founder'
    },
    {
      title: 'Portfolio & Proof',
      desc: 'Recent enterprise client case studies, verified benchmarks, and live systems.',
      icon: Briefcase,
      color: '#10b981',
      href: '#testimonials'
    }
  ];

  return (
    <section style={{
      paddingTop: '80px',
      paddingBottom: '80px',
      background: '#ffffff',
      borderBottom: '1px solid #e2e8f0'
    }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px' }}>
          <div className="badge-pill" style={{ marginBottom: '12px' }}>
            <Sparkles size={13} />
            <span>Explore More</span>
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 40px)',
            marginBottom: '12px',
            color: '#090d16'
          }}>
            Everything You <span style={{ color: '#0284c7' }}>Need</span>
          </h2>
          <p style={{ fontSize: '16px', color: '#64748b' }}>
            From detailed services to our story and insights — all in one place.
          </p>
        </div>

        {/* 3 Hub Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {hubCards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <a
                key={idx}
                href={card.href}
                className="light-card animate-on-scroll"
                style={{
                  padding: '30px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '18px',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  textDecoration: 'none'
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: `${card.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: card.color,
                  flexShrink: 0
                }}>
                  <IconComp size={24} />
                </div>

                <div style={{ flexGrow: 1 }}>
                  <div style={{ fontWeight: '700', fontSize: '18px', color: '#090d16', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span>{card.title}</span>
                    <ArrowRight size={16} color={card.color} />
                  </div>
                  <div style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5' }}>
                    {card.desc}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

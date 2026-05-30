import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';

const allProjects = [
  {
    title: 'Website Partai Nasdem Malang',
    category: 'Custom',
    desc: 'Website resmi DPD Partai NasDem Kota Malang. Menampilkan informasi organisasi, berita, galeri, program kerja, laporan partai, dan fitur aspirasi masyarakat.',
    tags: ['Laravel', 'PHP', 'MySQL'],
    url: 'https://nasdemkotamalang.com/',
    img: 'src/assets/photo/nasdem.png',
  },
  {
    title: 'Website Travel Umroh',
    category: 'Landing Page',
    desc: 'Website landing page travel umroh premium. Menampilkan paket perjalanan umroh, informasi harga, serta fitur pemesanan (booking) online.',
    tags: ['WordPress', 'PHP', 'CSS'],
    url: 'https://travelumroh.thinkaplay.com/',
    img: 'src/assets/photo/travelumroh.png',
  },
];

const categories = ['Semua', 'Landing Page', 'Toko Online', 'Blog', 'Web App', 'Custom'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filtered = activeCategory === 'Semua'
    ? allProjects
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <div>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 1.5rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <h1 className="font-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: 12 }}>Portfolio</h1>
          <p style={{ color: 'var(--muted-foreground)', maxWidth: 480, margin: '0 auto' }}>
            Karya-karya terbaik yang telah kami selesaikan
          </p>
        </div>

        {/* Filter */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginBottom: 40 }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '6px 16px', borderRadius: 999, fontSize: 13, cursor: 'pointer',
                fontFamily: 'Syne, sans-serif', fontWeight: 600,
                transition: 'all 0.2s',
                background: activeCategory === cat ? 'var(--primary)' : 'transparent',
                color: activeCategory === cat ? 'var(--primary-foreground)' : 'var(--muted-foreground)',
                border: activeCategory === cat ? '1px solid transparent' : '1px solid rgba(255,255,255,0.1)',
              }}
              onMouseEnter={e => { if (activeCategory !== cat) e.currentTarget.style.borderColor = 'rgba(0,212,170,0.3)'; }}
              onMouseLeave={e => { if (activeCategory !== cat) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="portfolio-grid">
          {filtered.length > 0 ? filtered.map((project, i) => (
            <div key={i} style={{
              background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16,
              overflow: 'hidden', transition: 'all 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,212,170,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; }}
            >
              {/* Project Image */}
              <div style={{
                aspectRatio: '16/9', background: 'var(--secondary)',
                overflow: 'hidden', position: 'relative',
              }}>
                <img
                  src={project.img}
                  alt={project.title}
                  style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    transition: 'transform 0.5s ease', display: 'block',
                  }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
              </div>

              <div style={{ padding: 18 }}>
                <span style={{ fontSize: 11, color: 'var(--primary)', fontWeight: 600, fontFamily: 'Syne, sans-serif' }}>
                  {project.category}
                </span>
                <h3 className="font-heading" style={{ fontWeight: 700, fontSize: 15, margin: '4px 0 6px' }}>{project.title}</h3>
                <p style={{ fontSize: 12, color: 'var(--muted-foreground)', lineHeight: 1.6, marginBottom: 12,
                  overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                  {project.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
                  {project.tags.map((tag, j) => (
                    <span key={j} style={{
                      fontSize: 10, background: 'var(--secondary)', color: 'var(--muted-foreground)',
                      padding: '3px 10px', borderRadius: 999,
                    }}>{tag}</span>
                  ))}
                </div>
                <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <button style={{
                    background: 'transparent', color: 'var(--foreground)',
                    border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8,
                    padding: '7px 14px', fontSize: 12, fontFamily: 'Syne, sans-serif', fontWeight: 600,
                    cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
                    transition: 'all 0.2s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,212,170,0.3)'; e.currentTarget.style.color = 'var(--primary)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'var(--foreground)'; }}
                  >
                    <ExternalLink size={12} /> Lihat Demo
                  </button>
                </a>
              </div>
            </div>
          )) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 0', color: 'var(--muted-foreground)' }}>
              <p style={{ fontSize: 15 }}>Belum ada project di kategori ini.</p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: 60 }}>
          <h2 className="font-heading" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, marginBottom: 12 }}>
            Mau project Anda jadi yang berikutnya?
          </h2>
          <Link to="/konsultasi" style={{ textDecoration: 'none' }}>
            <button style={{
              background: 'var(--primary)', color: 'var(--primary-foreground)',
              border: 'none', borderRadius: 10, padding: '12px 28px', marginTop: 8,
              fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14,
              cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8,
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'none'; }}
            >
              Diskusikan Project Anda <ArrowRight size={14} />
            </button>
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .portfolio-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .portfolio-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
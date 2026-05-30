import { Link } from 'react-router-dom';
import { MessageCircle, Mail } from 'lucide-react';

const WA_NUMBER = '6281200000000';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 1.5rem 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 36 }} className="footer-grid">
          {/* Brand */}
          <div>
            <Link to="/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: 14 }}>
              <span className="font-heading" style={{ fontWeight: 800, fontSize: 16 }}>
                <span style={{ color: 'var(--primary)' }}>Dz</span>
                <span style={{ color: 'var(--foreground)' }}>Studio</span>
              </span>
            </Link>
            <p style={{ fontSize: 13, color: 'var(--muted-foreground)', lineHeight: 1.7, maxWidth: 240 }}>
              Jasa bikin website profesional — dari landing page sampai web app, sesuai kebutuhan bisnis kamu.
            </p>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-heading" style={{ fontWeight: 700, fontSize: 12, marginBottom: 14, color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Layanan</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['Landing Page', 'Toko Online', 'Web App', 'Company Profile'].map(item => (
                <Link key={item} to="/layanan" style={{ fontSize: 13, color: 'var(--foreground)', textDecoration: 'none', transition: 'color 0.2s', opacity: 0.7 }}
                  onMouseEnter={e => e.target.style.opacity = '1'}
                  onMouseLeave={e => e.target.style.opacity = '0.7'}
                >{item}</Link>
              ))}
            </div>
          </div>

          {/* Halaman */}
          <div>
            <h4 className="font-heading" style={{ fontWeight: 700, fontSize: 12, marginBottom: 14, color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Halaman</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { to: '/tentang', label: 'Tentang' },
                { to: '/portfolio', label: 'Portfolio' },
                { to: '/kontak', label: 'Kontak' },
                { to: '/konsultasi', label: 'Konsultasi' },
              ].map(item => (
                <Link key={item.to} to={item.to} style={{ fontSize: 13, color: 'var(--foreground)', textDecoration: 'none', transition: 'opacity 0.2s', opacity: 0.7 }}
                  onMouseEnter={e => e.target.style.opacity = '1'}
                  onMouseLeave={e => e.target.style.opacity = '0.7'}
                >{item.label}</Link>
              ))}
            </div>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-heading" style={{ fontWeight: 700, fontSize: 12, marginBottom: 14, color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Kontak</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--foreground)', textDecoration: 'none', transition: 'opacity 0.2s', opacity: 0.7 }}
                onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                onMouseLeave={e => e.currentTarget.style.opacity = '0.7'}
              >
                <MessageCircle size={13} /> WhatsApp
              </a>
              <a href="mailto:fadillahfarhan497@gmail.com"
                style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--foreground)', textDecoration: 'none', transition: 'opacity 0.2s', opacity: 0.7 }}
                onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                onMouseLeave={e => e.currentTarget.style.opacity = '0.7'}
              >
                <Mail size={13} /> Email
              </a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', marginTop: 36, paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <p style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>© 2026 DzStudio</p>
          <p style={{ fontSize: 12, color: 'var(--muted-foreground)', opacity: 0.5 }}>Malang, Indonesia</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

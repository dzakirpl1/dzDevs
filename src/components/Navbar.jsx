import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Beranda' },
  { to: '/layanan', label: 'Layanan' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/tentang', label: 'Tentang' },
  { to: '/kontak', label: 'Kontak' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <>
      <header style={{
        position: 'sticky', top: 0, zIndex: 50,
        borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.06)' : 'transparent'}`,
        background: scrolled ? 'rgba(12,12,17,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        transition: 'all 0.3s ease',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem', height: 60, display: 'flex', alignItems: 'center', gap: 16 }}>
          {/* Logo - just text, no icon box */}
          <Link to="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <span className="font-heading" style={{ fontWeight: 800, fontSize: 18, letterSpacing: '-0.02em' }}>
              <span style={{ color: 'var(--primary)' }}>Dz</span>
              <span style={{ color: 'var(--foreground)' }}>Studio</span>
            </span>
          </Link>

          <div style={{ flex: 1 }} />

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="hidden-mobile">
            {navLinks.map(link => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{
                    padding: '6px 14px',
                    fontSize: 13,
                    fontWeight: 500,
                    textDecoration: 'none',
                    borderRadius: 6,
                    transition: 'color 0.2s',
                    color: isActive ? 'var(--foreground)' : 'var(--muted-foreground)',
                  }}
                  onMouseEnter={e => { if (!isActive) e.target.style.color = 'var(--foreground)'; }}
                  onMouseLeave={e => { if (!isActive) e.target.style.color = 'var(--muted-foreground)'; }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link to="/konsultasi" className="hidden-mobile" style={{ textDecoration: 'none', marginLeft: 8 }}>
            <button style={{
              background: 'var(--foreground)', color: 'var(--background)',
              border: 'none', borderRadius: 8, padding: '7px 18px',
              fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 12,
              cursor: 'pointer', transition: 'opacity 0.2s',
            }}
              onMouseEnter={e => e.target.style.opacity = '0.85'}
              onMouseLeave={e => e.target.style.opacity = '1'}
            >
              Konsultasi
            </button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="show-mobile"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: 'transparent', border: 'none',
              color: 'var(--foreground)',
              width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div style={{
            padding: '8px 24px 20px',
            borderTop: '1px solid var(--border)',
            display: 'flex', flexDirection: 'column', gap: 2,
            background: 'rgba(12,12,17,0.98)',
          }}>
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  padding: '10px 12px',
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: 'none',
                  borderRadius: 6,
                  color: location.pathname === link.to ? 'var(--foreground)' : 'var(--muted-foreground)',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/konsultasi" style={{ textDecoration: 'none', marginTop: 8 }}>
              <button style={{
                width: '100%', background: 'var(--foreground)', color: 'var(--background)',
                border: 'none', borderRadius: 8, padding: '10px',
                fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 13,
                cursor: 'pointer',
              }}>
                Konsultasi
              </button>
            </Link>
          </div>
        )}
      </header>

      <style>{`
        .hidden-mobile { display: flex; }
        .show-mobile { display: none; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}

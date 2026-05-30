import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Monitor, ShoppingBag, FileText, Code2, Smartphone, Sparkles, CheckCircle, Star, Quote } from 'lucide-react';

const WA_NUMBER = '6289512336741';

const services = [
  { icon: <Monitor size={20} />, title: 'Landing Page', desc: 'Halaman promosi yang dirancang untuk mengubah pengunjung jadi pelanggan.' },
  { icon: <ShoppingBag size={20} />, title: 'Toko Online', desc: 'Website jualan lengkap — produk, keranjang, checkout, pembayaran.' },
  { icon: <FileText size={20} />, title: 'Blog & Berita', desc: 'Platform konten yang bisa kamu kelola sendiri tanpa ribet.' },
  { icon: <Code2 size={20} />, title: 'Web App', desc: 'Aplikasi web custom, dari dashboard sampai SaaS.' },
  { icon: <Smartphone size={20} />, title: 'Company Profile', desc: 'Website profesional buat kenalkan bisnis ke klien baru.' },
  { icon: <Sparkles size={20} />, title: 'Custom Project', desc: 'Ada kebutuhan khusus? Kita diskusiin bareng.' },
];

const testimonials = [
  {
    name: 'Andi S.',
    role: 'Pemilik Toko Kopi, Malang',
    text: 'Awalnya cuma mau bikin web sederhana buat menu dan lokasi. Tapi hasilnya jauh di atas ekspektasi — sekarang banyak pelanggan baru yang tahu dari Google.',
    initial: 'A',
  },
  {
    name: 'Rina W.',
    role: 'Freelance Photographer',
    text: 'Portfolio online saya sekarang kelihatan jauh lebih profesional. Klien dari luar kota mulai hubungi lewat website. Worth it banget.',
    initial: 'R',
  },
  {
    name: 'Budi Santoso',
    role: 'Founder, TechKita',
    text: 'Kita minta web app internal buat manajemen tim. Dua minggu udah jadi dan sampe sekarang masih jalan lancar, hampir setahun.',
    initial: 'B',
  },
];

export default function Home() {
  return (
    <div style={{ overflow: 'hidden' }}>
      {/* Hero */}
      <section style={{
        minHeight: '88vh', display: 'flex', alignItems: 'center',
        background: 'var(--background)',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.04) 50%, transparent)',
        }} />

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 1.5rem', width: '100%' }}>
          <div style={{ maxWidth: 680 }}>
            <p className="animate-fade-up" style={{
              fontSize: 13, color: 'var(--primary)', fontWeight: 600,
              fontFamily: 'Syne, sans-serif', marginBottom: 16, letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}>
              Dzaki Farhan - Web Developer
            </p>

            <h1 className="font-heading animate-fade-up delay-100" style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
              fontWeight: 800, lineHeight: 1.08, marginBottom: 20,
              letterSpacing: '-0.03em',
            }}>
              Bikin website yang<br />
              beneran <span style={{ color: 'var(--primary)' }}>ngebantu</span> bisnis kamu.
            </h1>

            <p className="animate-fade-up delay-200" style={{
              fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
              color: 'var(--muted-foreground)', maxWidth: 480,
              lineHeight: 1.75, marginBottom: 36,
            }}>
              Bukan sekadar bagus dilihat — tapi website yang bisa ditemukan di Google,
              mudah dipakai pengunjung, dan bikin mereka jadi pelanggan.
            </p>

            <div className="animate-fade-up delay-300" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link to="/konsultasi" style={{ textDecoration: 'none' }}>
                <button style={{
                  background: 'var(--primary)', color: 'var(--primary-foreground)',
                  border: 'none', borderRadius: 10, padding: '13px 28px',
                  fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14,
                  cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8,
                  transition: 'opacity 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  Konsultasi Gratis <ArrowRight size={15} />
                </button>
              </Link>
              <Link to="/portfolio" style={{ textDecoration: 'none' }}>
                <button style={{
                  background: 'transparent', color: 'var(--foreground)',
                  border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, padding: '13px 28px',
                  fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 14,
                  cursor: 'pointer', transition: 'border-color 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'}
                >
                  Lihat Portfolio
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ background: 'var(--card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <h2 className="font-heading" style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800, marginBottom: 6 }}>Yang bisa kami kerjakan</h2>
              <p style={{ color: 'var(--muted-foreground)', fontSize: 14 }}>Dari landing page sampai web app custom.</p>
            </div>
            <Link to="/layanan" style={{
              color: 'var(--primary)', fontSize: 13, fontWeight: 600,
              textDecoration: 'none', fontFamily: 'Syne, sans-serif',
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              Semua layanan <ArrowRight size={13} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--border)', borderRadius: 14, overflow: 'hidden' }} className="services-grid">
            {services.map((s, i) => (
              <div key={i} style={{
                background: 'var(--card)', padding: '24px 22px',
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--secondary)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--card)'}
              >
                <div style={{ color: 'var(--primary)', marginBottom: 12 }}>
                  {s.icon}
                </div>
                <h3 className="font-heading" style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--muted-foreground)', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 60, alignItems: 'start' }} className="why-grid">
          <div>
            <h2 className="font-heading" style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800, marginBottom: 14 }}>
              Kenapa klien betah<br />kerja bareng kami
            </h2>
            <p style={{ color: 'var(--muted-foreground)', marginBottom: 28, lineHeight: 1.7, fontSize: 14 }}>
              Bukan soal janji manis. Ini soal cara kerja yang kita pegang dari project pertama.
            </p>

            <Link to="/konsultasi" style={{ textDecoration: 'none' }}>
              <button style={{
                background: 'var(--primary)', color: 'var(--primary-foreground)',
                border: 'none', borderRadius: 10, padding: '11px 24px',
                fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14,
                cursor: 'pointer', transition: 'opacity 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Mulai Konsultasi
              </button>
            </Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { title: 'Desain responsif', desc: 'Semua website kami otomatis tampil rapi di HP, tablet, dan desktop.' },
              { title: 'Dikerjakan sesuai deadline', desc: 'Timeline jelas dari awal. Kalau kami bilang 5 hari, ya 5 hari.' },
              { title: 'Revisi sampai sreg', desc: 'Nggak ada batasan revisi yang aneh-aneh. Sampai kamu bilang oke.' },
              { title: 'Support setelah launch', desc: 'Website udah live? Tenang, kami tetap bantu kalau ada kendala.' },
              { title: 'Harga di-deal di awal', desc: 'Nggak ada biaya dadakan. Semua udah clear sebelum mulai.' },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '16px 20px',
                borderLeft: '2px solid var(--border)',
                transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.borderLeftColor = 'var(--primary)'}
                onMouseLeave={e => e.currentTarget.style.borderLeftColor = 'var(--border)'}
              >
                <p className="font-heading" style={{ fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{item.title}</p>
                <p style={{ fontSize: 13, color: 'var(--muted-foreground)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: 'var(--card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 1.5rem' }}>
          <h2 className="font-heading" style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800, marginBottom: 36, textAlign: 'center' }}>
            Kata mereka yang udah coba
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} style={{
                background: 'var(--background)', border: '1px solid var(--border)', borderRadius: 14, padding: '24px',
              }}>
                <Quote size={18} style={{ color: 'rgba(255,255,255,0.08)', marginBottom: 12 }} />
                <p style={{ fontSize: 13, color: 'var(--muted-foreground)', lineHeight: 1.75, marginBottom: 20 }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 13, fontWeight: 700, fontFamily: 'Syne, sans-serif', color: 'var(--primary)',
                  }}>
                    {t.initial}
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: 13, fontFamily: 'Syne, sans-serif' }}>{t.name}</p>
                    <p style={{ fontSize: 11, color: 'var(--muted-foreground)' }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 1.5rem' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 24,
        }}>
          <div style={{ maxWidth: 460 }}>
            <h2 className="font-heading" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, marginBottom: 8 }}>
              Mau diskusi project?
            </h2>
            <p style={{ color: 'var(--muted-foreground)', fontSize: 14, lineHeight: 1.7 }}>
              Konsultasi gratis, nggak ada kewajiban lanjut. Ceritain aja dulu kebutuhannya.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/konsultasi" style={{ textDecoration: 'none' }}>
              <button style={{
                background: 'var(--primary)', color: 'var(--primary-foreground)',
                border: 'none', borderRadius: 10, padding: '13px 28px',
                fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14,
                cursor: 'pointer', transition: 'opacity 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Konsultasi Gratis
              </button>
            </Link>
            <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <button style={{
                background: 'transparent', color: 'var(--foreground)',
                border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, padding: '13px 28px',
                fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 14,
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8,
                transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'}
              >
                <MessageCircle size={14} /> WhatsApp
              </button>
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .why-grid { grid-template-columns: 1fr !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

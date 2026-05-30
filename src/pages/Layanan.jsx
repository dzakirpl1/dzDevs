import { Link } from 'react-router-dom';
import { Monitor, ShoppingBag, FileText, Code2, Smartphone, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Monitor size={22} />,
    title: 'Landing Page',
    desc: 'Halaman promosi single-page yang dirancang buat mengkonversi pengunjung jadi pelanggan. Cocok buat kampanye iklan atau launching produk.',
    features: ['Desain custom sesuai brand', 'Optimasi konversi (CRO)', 'Form & WhatsApp integration', 'SEO dasar', 'Mobile-first'],
    estimasi: '3–5 hari kerja',
  },
  {
    icon: <ShoppingBag size={22} />,
    title: 'Toko Online',
    desc: 'Website e-commerce lengkap — manajemen produk, keranjang belanja, checkout, integrasi payment gateway.',
    features: ['Manajemen produk & kategori', 'Keranjang & checkout', 'Payment gateway (Midtrans, dll)', 'Admin dashboard', 'Order management'],
    estimasi: '7–14 hari kerja',
  },
  {
    icon: <FileText size={22} />,
    title: 'Blog / Website Berita',
    desc: 'Platform konten yang gampang dikelola sendiri. Bisa buat media online, blog personal, atau portal berita.',
    features: ['CMS user-friendly', 'Kategori & tag artikel', 'SEO optimized', 'Komentar & engagement', 'Social sharing'],
    estimasi: '5–7 hari kerja',
  },
  {
    icon: <Code2 size={22} />,
    title: 'Web App',
    desc: 'Aplikasi web sesuai kebutuhan bisnis kamu — dari sistem manajemen internal sampai platform SaaS.',
    features: ['Database & backend custom', 'Autentikasi pengguna', 'Dashboard & laporan', 'API integration', 'Scalable & secure'],
    estimasi: '14–30 hari kerja',
  },
  {
    icon: <Smartphone size={22} />,
    title: 'Company Profile',
    desc: 'Website representatif buat memperkenalkan bisnis, tim, dan layanan perusahaan secara profesional.',
    features: ['Multi-page website', 'Halaman tentang & tim', 'Portfolio/galeri', 'Form kontak', 'Google Maps'],
    estimasi: '5–10 hari kerja',
  },
  {
    icon: <Sparkles size={22} />,
    title: 'Custom Project',
    desc: 'Kebutuhan unik yang nggak masuk kategori di atas? Kita diskusiin bareng dan cari solusi terbaik.',
    features: ['Konsultasi mendalam', 'Arsitektur custom', 'Teknologi terkini', 'Dukungan penuh', 'Harga sesuai scope'],
    estimasi: 'Sesuai kebutuhan',
  },
];

export default function Layanan() {
  return (
    <div>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 1.5rem' }}>
        {/* Header */}
        <div style={{ marginBottom: 48, maxWidth: 520 }}>
          <h1 className="font-heading" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: 12 }}>Layanan</h1>
          <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.7, fontSize: 14 }}>
            Berbagai jenis website yang bisa kami kerjakan. Kalau belum yakin mana yang cocok, langsung konsultasi aja — gratis.
          </p>
        </div>

        {/* Services List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 60 }}>
          {services.map((s, i) => (
            <div key={i} style={{
              background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14,
              padding: '28px 28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start',
              transition: 'border-color 0.2s',
            }}
              className="layanan-item"
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div>
                <div style={{ color: 'var(--primary)', marginBottom: 12 }}>
                  {s.icon}
                </div>
                <h3 className="font-heading" style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--muted-foreground)', lineHeight: 1.7, marginBottom: 14 }}>{s.desc}</p>
                <p style={{ fontSize: 12, color: 'var(--muted-foreground)', opacity: 0.7 }}>
                  Estimasi: {s.estimasi}
                </p>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {s.features.map((f, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--muted-foreground)' }}>
                    <CheckCircle size={13} color="var(--primary)" style={{ flexShrink: 0 }} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '32px 0', borderTop: '1px solid var(--border)',
          flexWrap: 'wrap', gap: 20,
        }}>
          <div>
            <h2 className="font-heading" style={{ fontSize: 'clamp(1.3rem, 2vw, 1.6rem)', fontWeight: 800, marginBottom: 4 }}>
              Belum yakin mana yang cocok?
            </h2>
            <p style={{ color: 'var(--muted-foreground)', fontSize: 13 }}>
              Ceritain aja kebutuhan kamu, nanti kami bantu rekomendasikan.
            </p>
          </div>
          <Link to="/konsultasi" style={{ textDecoration: 'none' }}>
            <button style={{
              background: 'var(--primary)', color: 'var(--primary-foreground)',
              border: 'none', borderRadius: 10, padding: '12px 28px',
              fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14,
              cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8,
              transition: 'opacity 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Konsultasi Gratis <ArrowRight size={14} />
            </button>
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .layanan-item { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

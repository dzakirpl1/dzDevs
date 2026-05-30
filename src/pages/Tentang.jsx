import { ShoppingBag, Users, Star, Zap, Shield, Headphones } from 'lucide-react';

export default function Tentang() {
  return (
    <div>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 1.5rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h1 className="font-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: 16 }}>
            Tentang <span style={{ color: 'var(--primary)' }}>DzStudio</span>
          </h1>
          <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.8, maxWidth: 600, margin: '0 auto' }}>
            DzStudioz adalah jasa pembuatan website profesional yang berfokus pada kualitas, ketepatan waktu, dan kepuasan klien. Kami hadir untuk mewujudkan kebutuhan digital bisnis Anda.
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 60 }} className="stats-grid">
          {[
            { icon: <ShoppingBag size={24} color="var(--primary)" />, val: '50+', label: 'Project Selesai' },
            { icon: <Users size={24} color="var(--primary)" />, val: '40+', label: 'Klien Puas' },
            { icon: <Star size={24} color="var(--primary)" />, val: '4.9/5', label: 'Rating Rata-rata' },
          ].map((item, i) => (
            <div key={i} style={{
              textAlign: 'center', background: 'var(--card)',
              border: '1px solid var(--border)', borderRadius: 16, padding: 24,
            }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>{item.icon}</div>
              <p className="font-heading" style={{ fontSize: 24, fontWeight: 800, color: 'var(--primary)' }}>{item.val}</p>
              <p style={{ fontSize: 13, color: 'var(--muted-foreground)', marginTop: 4 }}>{item.label}</p>
            </div>
          ))}
        </div>

        {/* Why Us */}
        <div style={{ marginBottom: 60 }}>
          <h2 className="font-heading" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, textAlign: 'center', marginBottom: 32 }}>
            Kenapa Pilih Kami?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="why-grid">
            {[
              { icon: <Zap size={24} color="var(--primary)" />, title: 'Pengerjaan Cepat', desc: 'Project selesai tepat waktu sesuai jadwal yang disepakati, tanpa mengorbankan kualitas.' },
              { icon: <Shield size={24} color="var(--primary)" />, title: 'Kualitas Terjamin', desc: 'Desain modern, kode bersih, dan performa tinggi. Revisi hingga Anda benar-benar puas.' },
              { icon: <Headphones size={24} color="var(--primary)" />, title: 'Support 24/7', desc: 'Tim kami siap membantu Anda kapan saja, bahkan setelah website live dan diluncurkan.' },
            ].map((item, i) => (
              <div key={i} style={{
                background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16,
                padding: 24, textAlign: 'center', transition: 'all 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,212,170,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 12, background: 'rgba(0,212,170,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px',
                }}>
                  {item.icon}
                </div>
                <h3 className="font-heading" style={{ fontWeight: 700, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--muted-foreground)', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visi Misi */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="visi-grid">
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: 28 }}>
            <h3 className="font-heading" style={{ fontWeight: 700, fontSize: 18, marginBottom: 12, color: 'var(--primary)' }}>Visi</h3>
            <p style={{ fontSize: 14, color: 'var(--muted-foreground)', lineHeight: 1.7 }}>
              Menjadi mitra digital terpercaya untuk bisnis Indonesia — dari UMKM hingga perusahaan besar — dengan menghadirkan solusi website yang berdampak nyata pada pertumbuhan bisnis.
            </p>
          </div>
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: 28 }}>
            <h3 className="font-heading" style={{ fontWeight: 700, fontSize: 18, marginBottom: 12, color: 'var(--primary)' }}>Misi</h3>
            <p style={{ fontSize: 14, color: 'var(--muted-foreground)', lineHeight: 1.7 }}>
              Mengerjakan setiap project dengan standar kualitas tinggi, komunikasi yang transparan, harga yang adil, dan dukungan penuh — sehingga klien bisa fokus mengembangkan bisnis mereka.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .stats-grid { grid-template-columns: 1fr !important; }
          .why-grid { grid-template-columns: 1fr !important; }
          .visi-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

import { useState } from 'react';
import { CheckCircle, MessageCircle, Send } from 'lucide-react';

const WA_NUMBER = '6281200000000';

const jenisOptions = ['Landing Page', 'Toko Online', 'Blog', 'Web App', 'Company Profile', 'Custom'];
const budgetOptions = ['< Rp 500rb', 'Rp 500rb - 1jt', 'Rp 1jt - 3jt', 'Rp 3jt - 5jt', '> Rp 5jt'];

export default function Konsultasi() {
  const [form, setForm] = useState({
    nama: '', whatsapp: '', email: '',
    jenis: '', budget: '', deskripsi: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Halo WebStudio! Saya ingin konsultasi gratis.

📋 *Detail Kebutuhan:*
• Nama: ${form.nama}
• WhatsApp: ${form.whatsapp}
• Email: ${form.email}
• Jenis Website: ${form.jenis}
• Budget: ${form.budget}

📝 *Deskripsi:*
${form.deskripsi}

Mohon informasi lebih lanjut. Terima kasih!`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const inputStyle = {
    width: '100%', background: 'var(--secondary)', border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 8, padding: '9px 14px', color: 'var(--foreground)', fontSize: 14,
    outline: 'none', transition: 'border-color 0.2s', fontFamily: 'DM Sans, sans-serif',
  };

  const selectStyle = {
    ...inputStyle,
    cursor: 'pointer', appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238888a0' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center',
  };

  return (
    <div>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '60px 1.5rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h1 className="font-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: 12 }}>
            Konsultasi Gratis
          </h1>
          <p style={{ color: 'var(--muted-foreground)', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
            Ceritakan kebutuhan website Anda — kami akan analisis dan berikan rekomendasi + estimasi harga secara gratis.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 32, alignItems: 'start' }} className="konsultasi-grid">
          {/* Left */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: 24 }}>
              <h3 className="font-heading" style={{ fontWeight: 700, fontSize: 16, marginBottom: 16 }}>
                Yang akan Anda dapatkan:
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  'Rekomendasi solusi terbaik sesuai kebutuhan',
                  'Estimasi biaya yang transparan',
                  'Timeline pengerjaan yang realistis',
                  'Konsultasi teknologi & fitur',
                  'Tidak ada kewajiban untuk lanjut',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13 }}>
                    <CheckCircle size={15} color="var(--primary)" style={{ flexShrink: 0, marginTop: 1 }} />
                    <span style={{ color: 'var(--foreground)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: 24 }}>
              <h3 className="font-heading" style={{ fontWeight: 700, fontSize: 14, marginBottom: 16 }}>Atau langsung hubungi:</h3>
              <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none',
                color: 'var(--muted-foreground)', transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--muted-foreground)'}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: 10, background: 'rgba(0,212,170,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <MessageCircle size={18} color="var(--primary)" />
                </div>
                <div>
                  <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 13, color: 'var(--foreground)' }}>WhatsApp</p>
                  <p style={{ fontSize: 13 }}>+62 812-0000-0000</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <form onSubmit={handleSubmit} style={{
            background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: 28,
            display: 'flex', flexDirection: 'column', gap: 16,
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, fontFamily: 'Syne, sans-serif' }}>Nama *</label>
                <input
                  value={form.nama} onChange={e => setForm({...form, nama: e.target.value})}
                  placeholder="Nama Anda" required style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, fontFamily: 'Syne, sans-serif' }}>WhatsApp</label>
                <input
                  value={form.whatsapp} onChange={e => setForm({...form, whatsapp: e.target.value})}
                  placeholder="08xxxxxxxx" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, fontFamily: 'Syne, sans-serif' }}>Email *</label>
              <input
                type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                placeholder="email@Anda.com" required style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, fontFamily: 'Syne, sans-serif' }}>Jenis Website *</label>
              <select
                value={form.jenis} onChange={e => setForm({...form, jenis: e.target.value})}
                required style={selectStyle}
                onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              >
                <option value="">Pilih jenis website</option>
                {jenisOptions.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, fontFamily: 'Syne, sans-serif' }}>Estimasi Budget</label>
              <select
                value={form.budget} onChange={e => setForm({...form, budget: e.target.value})}
                style={selectStyle}
                onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              >
                <option value="">Pilih range budget</option>
                {budgetOptions.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, fontFamily: 'Syne, sans-serif' }}>Deskripsi Kebutuhan *</label>
              <textarea
                value={form.deskripsi} onChange={e => setForm({...form, deskripsi: e.target.value})}
                placeholder="Ceritakan website yang Anda inginkan: fitur, tujuan, inspirasi, dll."
                required rows={4} style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>

            <button type="submit" style={{
              background: 'var(--primary)', color: 'var(--primary-foreground)',
              border: 'none', borderRadius: 8, padding: '12px',
              fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14,
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              transition: 'all 0.2s', marginTop: 4,
            }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'none'; }}
            >
              <Send size={15} /> Kirim ke WhatsApp
            </button>

            <p style={{ fontSize: 11, color: 'var(--muted-foreground)', textAlign: 'center' }}>
              * Form akan membuka WhatsApp dengan pesan otomatis
            </p>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .konsultasi-grid { grid-template-columns: 1fr !important; }
        }
        option { background: #111118; color: #e8e8f0; }
      `}</style>
    </div>
  );
}

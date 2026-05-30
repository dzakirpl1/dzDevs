import { useState } from 'react';
import { MessageCircle, Mail, Clock, Send } from 'lucide-react';

const WA_NUMBER = '6289512336741';

export default function Kontak() {
  const [form, setForm] = useState({ nama: '', email: '', pesan: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Halo WebStudio!\n\nNama: ${form.nama}\nEmail: ${form.email}\n\nPesan:\n${form.pesan}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 1.5rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h1 className="font-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: 12 }}>Hubungi Kami</h1>
          <p style={{ color: 'var(--muted-foreground)' }}>Ada pertanyaan? Jangan ragu untuk menghubungi kami.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }} className="kontak-grid">
          {/* Left */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: 24 }}>
              <h3 className="font-heading" style={{ fontWeight: 700, fontSize: 16, marginBottom: 20 }}>Info Kontak</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
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
                    <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--foreground)', fontFamily: 'Syne, sans-serif' }}>WhatsApp</p>
                    <p style={{ fontSize: 13 }}>+62 895-1233-6741</p>
                  </div>
                </a>
                <a href="mailto:hello@webstudio.id" style={{
                  display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none',
                  color: 'var(--muted-foreground)', transition: 'color 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--muted-foreground)'}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: 10, background: 'rgba(124,58,237,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Mail size={18} color="var(--accent)" />
                  </div>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--foreground)', fontFamily: 'Syne, sans-serif' }}>Email</p>
                    <p style={{ fontSize: 13 }}>fadillahfarhan497@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <Clock size={16} color="var(--primary)" />
                <h3 className="font-heading" style={{ fontWeight: 700, fontSize: 15 }}>Jam Operasional</h3>
              </div>
              <p style={{ fontSize: 13, color: 'var(--muted-foreground)', lineHeight: 1.7 }}>
                Kami siap melayani Senin–Sabtu, 08.00–21.00 WIB. WhatsApp bisa dihubungi kapan saja.
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <form onSubmit={handleSubmit} style={{
            background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: 24,
            display: 'flex', flexDirection: 'column', gap: 16,
          }}>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, fontFamily: 'Syne, sans-serif' }}>Nama</label>
              <input
                value={form.nama} onChange={e => setForm({...form, nama: e.target.value})}
                placeholder="Nama lengkap" required
                style={{
                  width: '100%', background: 'var(--secondary)', border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 8, padding: '9px 14px', color: 'var(--foreground)', fontSize: 14,
                  outline: 'none', transition: 'border-color 0.2s',
                }}
                onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, fontFamily: 'Syne, sans-serif' }}>Email</label>
              <input
                type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                placeholder="email@contoh.com" required
                style={{
                  width: '100%', background: 'var(--secondary)', border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 8, padding: '9px 14px', color: 'var(--foreground)', fontSize: 14,
                  outline: 'none', transition: 'border-color 0.2s',
                }}
                onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, fontFamily: 'Syne, sans-serif' }}>Pesan</label>
              <textarea
                value={form.pesan} onChange={e => setForm({...form, pesan: e.target.value})}
                placeholder="Tuliskan pesan Anda..." required rows={5}
                style={{
                  width: '100%', background: 'var(--secondary)', border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 8, padding: '9px 14px', color: 'var(--foreground)', fontSize: 14,
                  outline: 'none', transition: 'border-color 0.2s', resize: 'vertical', fontFamily: 'DM Sans, sans-serif',
                }}
                onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>
            <button type="submit" style={{
              background: 'var(--primary)', color: 'var(--primary-foreground)',
              border: 'none', borderRadius: 8, padding: '11px',
              fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14,
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              <Send size={15} /> Kirim via WhatsApp
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .kontak-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

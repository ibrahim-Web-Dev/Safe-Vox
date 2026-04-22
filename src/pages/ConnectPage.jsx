import { useParams, Link, Navigate } from 'react-router-dom';
import { Phone, Mail, Linkedin, Globe, UserPlus, ArrowLeft, Mic } from 'lucide-react';

const profiles = {
    ibrahim: {
        slug: 'ibrahim',
        name: 'İbrahim Yılmaz',
        role: 'Proje Sahibi & Teknik Lider',
        phone: '05511587145',
        phoneDisplay: '0551 158 71 45',
        email: 'ibrahimyilmaz0713@gmail.com',
        linkedin: 'https://www.linkedin.com/in/ibrahim-y%C4%B1lmaz-07745b29b/',
        image: '/ibrahim.jpeg',
        accent: '#0ea5e9',
    },
    selen: {
        slug: 'selen',
        name: 'Selen Nuyan',
        role: 'İletişim ve Algı Yönetimi',
        phone: '05449216351',
        phoneDisplay: '0544 921 63 51',
        email: 'selennuyan@gmail.com',
        linkedin: 'https://www.linkedin.com/in/selen-nuyan-1a1a18327',
        image: '/selen.jpeg',
        accent: '#a855f7',
    },
    sila: {
        slug: 'sila',
        name: 'Sıla Nuyan',
        role: 'Kültürel ve Dilsel Analiz',
        phone: '05459153164',
        phoneDisplay: '0545 915 31 64',
        email: 'silanuyan7@gmail.com',
        linkedin: 'https://www.linkedin.com/in/s%C4%B1la-n-3b274932a',
        image: '/Sıla.jpeg',
        accent: '#8b5cf6',
    },
};

function downloadVCard(person) {
    const vcard = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `FN:${person.name}`,
        `ORG:SafeVox`,
        `TITLE:${person.role}`,
        `TEL;TYPE=CELL:+9${person.phone}`,
        `EMAIL:${person.email}`,
        `URL:https://safevox.tr`,
        `NOTE:SafeVox - Yapay Zeka Destekli Çağrı Merkezi Koçluğu`,
        'END:VCARD',
    ].join('\n');

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${person.name.replace(' ', '_')}_SafeVox.vcf`;
    a.click();
    URL.revokeObjectURL(url);
}

function ProfileCard({ person }) {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-between px-5 py-8 relative overflow-hidden">
            {/* Background glow */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full opacity-15 blur-[100px] pointer-events-none"
                style={{ background: person.accent }}
            />

            {/* Top bar */}
            <div className="w-full max-w-sm flex items-center justify-between">
                <Link
                    to="/connect"
                    className="flex items-center gap-1.5 text-white/40 hover:text-white/70 transition-colors text-sm"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Ekip
                </Link>
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-white/8 border border-white/15 rounded-lg flex items-center justify-center">
                        <Mic className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-sm font-bold text-white/70">SafeVox</span>
                </Link>
            </div>

            {/* Profile */}
            <div className="w-full max-w-sm flex flex-col items-center gap-6 mt-8">
                {/* Photo */}
                <div
                    className="w-32 h-32 rounded-full overflow-hidden border-2"
                    style={{ borderColor: person.accent + '60' }}
                >
                    <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Name & role */}
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-white mb-1">{person.name}</h1>
                    <p className="text-sm text-white/50">{person.role}</p>
                    <div
                        className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold border"
                        style={{ color: person.accent, borderColor: person.accent + '40', background: person.accent + '15' }}
                    >
                        SafeVox
                    </div>
                </div>

                {/* Action buttons */}
                <div className="w-full grid grid-cols-2 gap-3">
                    <a
                        href={`tel:+9${person.phone}`}
                        className="flex items-center justify-center gap-2 py-3.5 bg-white/6 border border-white/10 rounded-2xl text-white text-sm font-medium hover:bg-white/10 transition-colors active:scale-95"
                    >
                        <Phone className="w-4 h-4" />
                        Ara
                    </a>
                    <a
                        href={`mailto:${person.email}`}
                        className="flex items-center justify-center gap-2 py-3.5 bg-white/6 border border-white/10 rounded-2xl text-white text-sm font-medium hover:bg-white/10 transition-colors active:scale-95"
                    >
                        <Mail className="w-4 h-4" />
                        E-posta
                    </a>
                    <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-3.5 bg-white/6 border border-white/10 rounded-2xl text-white text-sm font-medium hover:bg-white/10 transition-colors active:scale-95"
                    >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                    </a>
                    <a
                        href="https://safevox.tr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-3.5 bg-white/6 border border-white/10 rounded-2xl text-white text-sm font-medium hover:bg-white/10 transition-colors active:scale-95"
                    >
                        <Globe className="w-4 h-4" />
                        Website
                    </a>
                </div>

                {/* Add to contacts — primary CTA */}
                <button
                    onClick={() => downloadVCard(person)}
                    className="w-full flex items-center justify-center gap-2.5 py-4 bg-white text-black rounded-2xl font-bold text-base hover:bg-white/90 transition-all active:scale-95 shadow-lg shadow-white/10"
                >
                    <UserPlus className="w-5 h-5" />
                    Rehbere Ekle
                </button>

                {/* Contact info */}
                <div className="w-full space-y-2">
                    <a
                        href={`tel:+9${person.phone}`}
                        className="flex items-center gap-3 w-full px-4 py-3 bg-white/4 border border-white/8 rounded-xl hover:bg-white/7 transition-colors"
                    >
                        <Phone className="w-4 h-4 text-white/40 shrink-0" />
                        <span className="text-white/80 text-sm font-medium">{person.phoneDisplay}</span>
                    </a>
                    <a
                        href={`mailto:${person.email}`}
                        className="flex items-center gap-3 w-full px-4 py-3 bg-white/4 border border-white/8 rounded-xl hover:bg-white/7 transition-colors"
                    >
                        <Mail className="w-4 h-4 text-white/40 shrink-0" />
                        <span className="text-white/80 text-sm font-medium">{person.email}</span>
                    </a>
                </div>
            </div>

            {/* Footer */}
            <p className="text-white/20 text-xs mt-8">safevox.tr/connect/{person.slug}</p>
        </div>
    );
}

function ConnectOverview() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center px-5 py-12 relative overflow-hidden">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/3 rounded-full blur-[120px] pointer-events-none" />

            <div className="w-full max-w-sm flex flex-col items-center gap-8 relative z-10">
                {/* Logo */}
                <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 bg-white/8 border border-white/15 rounded-xl flex items-center justify-center">
                        <Mic className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold text-white">SafeVox</span>
                </div>

                <div className="text-center">
                    <h1 className="text-2xl font-bold text-white mb-2">Ekibimizle Tanışın</h1>
                    <p className="text-white/40 text-sm">Bir isim seçerek iletişime geçin</p>
                </div>

                {/* Profile list */}
                <div className="w-full space-y-3">
                    {Object.values(profiles).map((p) => (
                        <Link
                            key={p.slug}
                            to={`/connect/${p.slug}`}
                            className="flex items-center gap-4 p-4 bg-white/5 border border-white/8 rounded-2xl hover:bg-white/8 transition-colors active:scale-[0.98]"
                        >
                            <img
                                src={p.image}
                                alt={p.name}
                                className="w-12 h-12 rounded-full object-cover border border-white/10"
                            />
                            <div className="flex-1 min-w-0">
                                <p className="text-white font-semibold text-sm">{p.name}</p>
                                <p className="text-white/40 text-xs truncate">{p.role}</p>
                            </div>
                            <div
                                className="w-2 h-2 rounded-full shrink-0"
                                style={{ background: p.accent }}
                            />
                        </Link>
                    ))}
                </div>

                <Link
                    to="/"
                    className="flex items-center gap-2 text-white/30 hover:text-white/60 transition-colors text-sm"
                >
                    <Globe className="w-4 h-4" />
                    safevox.tr
                </Link>
            </div>
        </div>
    );
}

export default function ConnectPage() {
    const { slug } = useParams();

    if (!slug) return <ConnectOverview />;

    const person = profiles[slug];
    if (!person) return <Navigate to="/connect" replace />;

    return <ProfileCard person={person} />;
}

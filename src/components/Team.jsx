import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const team = [
    {
        name: "İbrahim Yılmaz",
        role: "Proje Sahibi & Teknik Lider",
        image: "/ibrahim.jpeg",
        bio: "Java Spring Boot ve AI mimarisi üzerine uzmanlaşmış, projenin teknik vizyonunu belirleyen lider.",
        linkedin: "https://www.linkedin.com/in/ibrahim-y%C4%B1lmaz-07745b29b/",
        email: "ibrahimyilmaz0713@gmail.com"
    },
    {
        name: "Selen Nuyan",
        role: "İletişim ve Algı Yönetimi",
        image: "/selen.jpeg",
        bio: "Müşteri psikolojisi ve iletişim stratejileri konusunda uzman, SafeVox'un insan odaklı dilini kurguluyor.",
        linkedin: "https://www.linkedin.com/in/selen-nuyan-1a1a18327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "selennuyan@gmail.com"
    },
    {
        name: "Sıla Nuyan",
        role: "Kültürel ve Dilsel Analiz",
        image: "/Sıla.jpeg",
        bio: "Türkçenin semantik yapısı ve kültürel analizler üzerine çalışarak yapay zekanın yerel uyumunu sağlıyor.",
        linkedin: "https://www.linkedin.com/in/s%C4%B1la-n-3b274932a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        email: "silanuyan7@gmail.com"
    }
];

export default function Team() {
    return (
        <section id="team" className="py-24 bg-dark-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Proje Ekibi</h2>
                    <p className="text-gray-400">Teknoloji ve insan bilimlerini birleştiren disiplinlerarası güç.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative bg-dark-900 rounded-3xl overflow-hidden border border-white/5 hover:border-safe-500/50 transition-all duration-500"
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                            </div>
                            <div className="p-6 relative z-10">
                                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                <p className="text-safe-400 text-sm font-medium mb-4 uppercase tracking-wider">{member.role}</p>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    {member.bio}
                                </p>
                                <div className="flex gap-4">
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-white transition-colors">
                                        <Mail className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

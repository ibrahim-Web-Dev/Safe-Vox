import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const sections = [
    {
        title: '1. Veri Sorumlusu',
        content: `6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca kişisel verileriniz; veri sorumlusu sıfatıyla SafeVox tarafından aşağıda açıklanan kapsamda işlenmektedir.\n\nVeri Sorumlusu: SafeVox\nAdres: Çankaya, Ankara\nE-posta: ibrahimyilmaz0713@gmail.com\nTelefon: 0551 158 71 45`,
    },
    {
        title: '2. İşlenen Kişisel Veriler',
        content: `SafeVox tarafından işlenen kişisel veriler şunlardır:\n\n• Kimlik verileri: Ad, soyad\n• İletişim verileri: E-posta adresi, telefon numarası\n• Kurumsal veriler: Şirket adı, görev/unvan\n• Teknik veriler: IP adresi, tarayıcı bilgisi (anonim olarak işlenmektedir)\n\nSafeVox platformunun çağrı merkezi hizmetinde işlenen ses kayıtları ve çağrı verileri, ilgili kurumun ayrı KVKK süreçleri kapsamında değerlendirilir. Hassas kişisel veriler (TCKN, finansal bilgiler, sağlık verileri vb.) platformumuz tarafından otomatik maskeleme teknolojisiyle anlık olarak anonimleştirilmektedir.`,
    },
    {
        title: '3. Kişisel Verilerin İşlenme Amaçları',
        content: `Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:\n\n• İletişim ve demo taleplerinin karşılanması\n• Hizmet kalitesinin iyileştirilmesi\n• Yasal yükümlülüklerin yerine getirilmesi\n• Sözleşme süreçlerinin yürütülmesi\n• Müşteri ilişkilerinin yönetimi`,
    },
    {
        title: '4. Kişisel Verilerin İşlenme Hukuki Sebepleri',
        content: `Kişisel verileriniz KVKK'nın 5. maddesi kapsamında aşağıdaki hukuki sebeplere dayanılarak işlenmektedir:\n\n• Sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması\n• Veri sorumlusunun hukuki yükümlülüğünü yerine getirmesi\n• İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla meşru menfaatlerimizin korunması\n• Açık rızanızın bulunması (pazarlama iletişimi için)`,
    },
    {
        title: '5. Kişisel Verilerin Aktarılması',
        content: `Kişisel verileriniz; yasal zorunluluk dışında ve açık rızanız olmaksızın üçüncü kişilere aktarılmamaktadır. Yurt dışına veri aktarımı yapılmamaktadır. Hizmet sunumu amacıyla çalışılan yurt içi tedarikçilerle zorunlu minimum veri paylaşımı yapılmakta ve bu taraflardan gerekli güvenlik taahhütleri alınmaktadır.`,
    },
    {
        title: '6. Kişisel Verilerin Saklanma Süresi',
        content: `Kişisel verileriniz; işleme amacının gerektirdiği süre boyunca ve/veya ilgili yasal mevzuatın öngördüğü saklama süreleri kadar muhafaza edilmektedir. Bu sürelerin sona ermesinin ardından verileriniz güvenli yöntemlerle silinmekte, yok edilmekte veya anonim hale getirilmektedir.`,
    },
    {
        title: '7. İlgili Kişi Hakları',
        content: `KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:\n\n• Kişisel verilerinizin işlenip işlenmediğini öğrenme\n• İşlenmişse buna ilişkin bilgi talep etme\n• Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme\n• Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme\n• Eksik veya yanlış işlenmiş kişisel verilerin düzeltilmesini isteme\n• KVKK'nın 7. maddesi çerçevesinde verilerin silinmesini veya yok edilmesini isteme\n• Söz konusu işlemlerin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme\n• İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme\n• Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme`,
    },
    {
        title: '8. Başvuru Yöntemi',
        content: `Yukarıda belirtilen haklarınızı kullanmak için;\n\nE-posta: ibrahimyilmaz0713@gmail.com\nAdres: Çankaya, Ankara\n\nüzerinden kimliğinizi doğrulayan belgelerle birlikte yazılı başvuruda bulunabilirsiniz. Başvurularınız en geç 30 (otuz) gün içinde ücretsiz olarak sonuçlandırılacaktır. İşlemin ayrıca bir maliyet gerektirmesi hâlinde Kişisel Verileri Koruma Kurulu tarafından belirlenen tarife üzerinden ücret talep edilebilir.`,
    },
];

export default function KVKKPage() {
    return (
        <div className="pt-28 pb-20 bg-dark-900 min-h-screen">
            <div className="max-w-3xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-safe-500/10 border border-safe-500/20 text-safe-400 text-sm font-medium mb-6">
                        <Shield className="w-4 h-4" />
                        Yasal Belgeler
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">KVKK Aydınlatma Metni</h1>
                    <p className="text-gray-400">Son güncelleme: Mart 2025</p>
                    <p className="text-gray-400 mt-4 leading-relaxed">
                        6698 Sayılı Kişisel Verilerin Korunması Kanunu kapsamında hazırlanan bu aydınlatma metni,
                        kişisel verilerinizin SafeVox tarafından nasıl işlendiğini açıklar.
                    </p>
                </motion.div>

                {/* Sections */}
                <div className="space-y-8">
                    {sections.map((sec, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-dark-800/60 border border-white/8 rounded-2xl p-7"
                        >
                            <h2 className="text-lg font-bold text-white mb-4">{sec.title}</h2>
                            <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">{sec.content}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

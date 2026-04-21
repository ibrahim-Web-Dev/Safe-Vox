import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Mic2, BrainCircuit, Activity, GraduationCap, BarChart2 } from 'lucide-react';

const timelineData = [
    {
        id: 1,
        title: 'Çağrı Yakalama',
        date: 'Adım 1',
        content: 'Gerçek zamanlı ses akışı güvenli altyapıya aktarılır. KVKK uyumlu maskeleme anında devreye girerek hassas veriler korunur.',
        icon: Mic2,
        relatedIds: [2],
        status: 'completed',
        energy: 100,
    },
    {
        id: 2,
        title: 'AI Analizi',
        date: 'Adım 2',
        content: 'Hibrit yapay zeka modeli ses tonunu, frekans değişimlerini ve kelime seçimini milisaniyeler içinde analiz eder.',
        icon: BrainCircuit,
        relatedIds: [1, 3],
        status: 'completed',
        energy: 95,
    },
    {
        id: 3,
        title: 'Duygu Tespiti',
        date: 'Adım 3',
        content: 'Akustik sinyal işleme ve semantik analiz ile müşteri ve temsilci duygu durumları gerçek zamanlı tespit edilir.',
        icon: Activity,
        relatedIds: [2, 4],
        status: 'in-progress',
        energy: 80,
    },
    {
        id: 4,
        title: 'Koçluk Verme',
        date: 'Adım 4',
        content: 'Kişiye özel eğitim ataması ve anlık AI önerileriyle her temsilcinin gelişimi otomatik olarak yönetilir.',
        icon: GraduationCap,
        relatedIds: [3, 5],
        status: 'in-progress',
        energy: 65,
    },
    {
        id: 5,
        title: 'Raporlama',
        date: 'Adım 5',
        content: 'Objektif performans skorları ve trend analizleri yöneticilere anlık dashboard üzerinden sunulur.',
        icon: BarChart2,
        relatedIds: [4],
        status: 'pending',
        energy: 40,
    },
];

function Badge({ className = '', children }) {
    return (
        <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${className}`}>
            {children}
        </span>
    );
}

function getStatusStyles(status) {
    switch (status) {
        case 'completed':  return 'text-white bg-black border-white';
        case 'in-progress': return 'text-black bg-white border-black';
        default:           return 'text-white bg-black/40 border-white/50';
    }
}

function getStatusLabel(status) {
    switch (status) {
        case 'completed':  return 'TAMAMLANDI';
        case 'in-progress': return 'DEVAM EDİYOR';
        default:           return 'BEKLEMEDE';
    }
}

export default function RadialOrbitalTimeline() {
    const [expandedItems, setExpandedItems] = useState({});
    const [rotationAngle, setRotationAngle] = useState(0);
    const [autoRotate, setAutoRotate] = useState(true);
    const [pulseEffect, setPulseEffect] = useState({});
    const [activeNodeId, setActiveNodeId] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [radius, setRadius] = useState(200);

    const containerRef = useRef(null);
    const orbitRef = useRef(null);
    const nodeRefs = useRef({});
    const sectionRef = useRef(null);

    // Responsive radius
    useEffect(() => {
        const update = () => {
            const w = window.innerWidth;
            setRadius(w < 400 ? 110 : w < 640 ? 130 : w < 768 ? 155 : 200);
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    // Pause when off-screen
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    // RAF-based rotation — no timer drift, syncs with display
    useEffect(() => {
        if (!autoRotate || !isVisible) return;
        let rafId;
        let last = 0;
        const loop = (ts) => {
            if (ts - last >= 66) { // ~15fps — smooth enough, minimal JS overhead
                last = ts;
                setRotationAngle((prev) => (prev + 0.4) % 360);
            }
            rafId = requestAnimationFrame(loop);
        };
        rafId = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(rafId);
    }, [autoRotate, isVisible]);

    const handleContainerClick = (e) => {
        if (e.target === containerRef.current || e.target === orbitRef.current) {
            setExpandedItems({});
            setActiveNodeId(null);
            setPulseEffect({});
            setAutoRotate(true);
        }
    };

    const toggleItem = (id) => {
        setExpandedItems((prev) => {
            const next = {};
            Object.keys(prev).forEach((k) => { next[parseInt(k)] = false; });
            next[id] = !prev[id];
            if (!prev[id]) {
                setActiveNodeId(id);
                setAutoRotate(false);
                const item = timelineData.find((i) => i.id === id);
                const pulse = {};
                item?.relatedIds.forEach((r) => { pulse[r] = true; });
                setPulseEffect(pulse);
                const idx = timelineData.findIndex((i) => i.id === id);
                setRotationAngle(270 - (idx / timelineData.length) * 360);
            } else {
                setActiveNodeId(null);
                setAutoRotate(true);
                setPulseEffect({});
            }
            return next;
        });
    };

    const calcPos = (index) => {
        const angle = ((index / timelineData.length) * 360 + rotationAngle) % 360;
        const rad = (angle * Math.PI) / 180;
        return {
            x: radius * Math.cos(rad),
            y: radius * Math.sin(rad),
            zIndex: Math.round(100 + 50 * Math.cos(rad)),
            opacity: Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(rad)) / 2))),
        };
    };

    const isRelatedToActive = (id) => {
        if (!activeNodeId) return false;
        return timelineData.find((i) => i.id === activeNodeId)?.relatedIds.includes(id) ?? false;
    };

    // Orbit ring size matches radius
    const ringSize = radius * 2;

    return (
        <section id="how-it-works" ref={sectionRef} className="py-20 relative overflow-hidden">
            <div className="text-center mb-8 px-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-medium mb-4">
                    Nasıl Çalışır?
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
                    5 Adımda Akıllı Koçluk
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto text-sm">Bir düğüme tıklayarak ayrıntıları keşfedin</p>
            </div>

            <div
                className="w-full flex flex-col items-center justify-center bg-transparent overflow-hidden"
                style={{ height: radius * 3 + 60 }}
                ref={containerRef}
                onClick={handleContainerClick}
            >
                <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
                    <div
                        className="absolute w-full h-full flex items-center justify-center"
                        ref={orbitRef}
                        style={{ perspective: '1000px' }}
                    >
                        {/* Center orb */}
                        <div className="absolute w-14 h-14 rounded-full bg-white/15 border border-white/30 flex items-center justify-center z-10">
                            <div className="w-6 h-6 rounded-full bg-white/70" />
                        </div>

                        {/* Orbit ring */}
                        <div
                            className="absolute rounded-full border border-white/10"
                            style={{ width: ringSize, height: ringSize }}
                        />

                        {/* Nodes */}
                        {timelineData.map((item, index) => {
                            const pos = calcPos(index);
                            const isExpanded = expandedItems[item.id];
                            const isRelated = isRelatedToActive(item.id);
                            const isPulsing = pulseEffect[item.id];
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.id}
                                    ref={(el) => (nodeRefs.current[item.id] = el)}
                                    className="absolute transition-all duration-700 cursor-pointer"
                                    style={{
                                        transform: `translate(${pos.x}px, ${pos.y}px)`,
                                        zIndex: isExpanded ? 200 : pos.zIndex,
                                        opacity: isExpanded ? 1 : pos.opacity,
                                    }}
                                    onClick={(e) => { e.stopPropagation(); toggleItem(item.id); }}
                                >
                                    {/* Glow halo */}
                                    <div
                                        className={`absolute rounded-full pointer-events-none ${isPulsing ? 'animate-pulse' : ''}`}
                                        style={{
                                            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
                                            width: `${item.energy * 0.4 + 36}px`,
                                            height: `${item.energy * 0.4 + 36}px`,
                                            left: `-${(item.energy * 0.4 + 36 - 40) / 2}px`,
                                            top: `-${(item.energy * 0.4 + 36 - 40) / 2}px`,
                                        }}
                                    />

                                    {/* Node button */}
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300
                                        ${isExpanded  ? 'bg-white text-black border-white shadow-lg shadow-white/30 scale-150' :
                                          isRelated   ? 'bg-white/50 text-black border-white animate-pulse' :
                                                        'bg-black text-white border-white/40'}`}
                                    >
                                        <Icon size={15} />
                                    </div>

                                    {/* Label */}
                                    <div className={`absolute top-12 whitespace-nowrap text-xs font-semibold tracking-wider transition-all duration-300 ${isExpanded ? 'text-white scale-125' : 'text-white/70'}`}>
                                        {item.title}
                                    </div>

                                    {/* Expanded card */}
                                    {isExpanded && (
                                        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-56 sm:w-64 bg-black/90 backdrop-blur-lg border border-white/30 shadow-xl rounded-lg z-50">
                                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white/50" />
                                            <div className="p-4">
                                                <div className="flex justify-between items-center mb-2">
                                                    <Badge className={getStatusStyles(item.status)}>
                                                        {getStatusLabel(item.status)}
                                                    </Badge>
                                                    <span className="text-xs font-mono text-white/50">{item.date}</span>
                                                </div>
                                                <h4 className="text-sm font-semibold mb-2 text-white">{item.title}</h4>
                                                <p className="text-xs text-white/80 leading-relaxed">{item.content}</p>

                                                {item.relatedIds.length > 0 && (
                                                    <div className="mt-3 pt-3 border-t border-white/10">
                                                        <p className="text-xs text-white/50 uppercase tracking-wider mb-2">Bağlantılı Adımlar</p>
                                                        <div className="flex flex-wrap gap-1">
                                                            {item.relatedIds.map((relId) => {
                                                                const rel = timelineData.find((i) => i.id === relId);
                                                                return (
                                                                    <button
                                                                        key={relId}
                                                                        className="flex items-center h-6 px-2 text-xs border border-white/20 bg-transparent hover:bg-white/10 text-white/80 hover:text-white transition-all rounded cursor-pointer"
                                                                        onClick={(e) => { e.stopPropagation(); toggleItem(relId); }}
                                                                    >
                                                                        {rel?.title}
                                                                        <ArrowRight size={8} className="ml-1 text-white/60" />
                                                                    </button>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

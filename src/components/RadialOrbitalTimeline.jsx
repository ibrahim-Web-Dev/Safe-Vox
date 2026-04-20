import { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, Mic2, BrainCircuit, Activity, GraduationCap, BarChart2 } from 'lucide-react';

const timelineData = [
    {
        id: 1,
        title: 'Çağrı Yakalama',
        date: 'Adım 1',
        content: 'Gerçek zamanlı ses akışı güvenli altyapıya aktarılır. KVKK uyumlu maskeleme anında devreye girerek hassas veriler korunur.',
        category: 'Capture',
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
        category: 'Analysis',
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
        category: 'Emotion',
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
        category: 'Coaching',
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
        category: 'Reporting',
        icon: BarChart2,
        relatedIds: [4],
        status: 'pending',
        energy: 40,
    },
];

function Badge({ className = '', children, ...props }) {
    return (
        <span
            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${className}`}
            {...props}
        >
            {children}
        </span>
    );
}

function CardEl({ className = '', children, ...props }) {
    return (
        <div className={`rounded-lg border bg-black/90 text-white shadow-sm ${className}`} {...props}>
            {children}
        </div>
    );
}

function getStatusStyles(status) {
    switch (status) {
        case 'completed': return 'text-white bg-black border-white';
        case 'in-progress': return 'text-black bg-white border-black';
        case 'pending': return 'text-white bg-black/40 border-white/50';
        default: return 'text-white bg-black/40 border-white/50';
    }
}

function getStatusLabel(status) {
    switch (status) {
        case 'completed': return 'TAMAMLANDI';
        case 'in-progress': return 'DEVAM EDİYOR';
        case 'pending': return 'BEKLEMEDE';
        default: return 'BEKLEMEDE';
    }
}

export default function RadialOrbitalTimeline() {
    const [expandedItems, setExpandedItems] = useState({});
    const [rotationAngle, setRotationAngle] = useState(0);
    const [autoRotate, setAutoRotate] = useState(true);
    const [pulseEffect, setPulseEffect] = useState({});
    const [centerOffset] = useState({ x: 0, y: 0 });
    const [activeNodeId, setActiveNodeId] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);
    const orbitRef = useRef(null);
    const nodeRefs = useRef({});
    const sectionRef = useRef(null);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

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
            const newState = { ...prev };
            Object.keys(newState).forEach((key) => {
                if (parseInt(key) !== id) newState[parseInt(key)] = false;
            });
            newState[id] = !prev[id];
            if (!prev[id]) {
                setActiveNodeId(id);
                setAutoRotate(false);
                const item = timelineData.find((i) => i.id === id);
                const newPulse = {};
                item?.relatedIds.forEach((relId) => { newPulse[relId] = true; });
                setPulseEffect(newPulse);
                const nodeIndex = timelineData.findIndex((i) => i.id === id);
                const targetAngle = (nodeIndex / timelineData.length) * 360;
                setRotationAngle(270 - targetAngle);
            } else {
                setActiveNodeId(null);
                setAutoRotate(true);
                setPulseEffect({});
            }
            return newState;
        });
    };

    useEffect(() => {
        if (!autoRotate || !isVisible) return;
        const timer = setInterval(() => {
            setRotationAngle((prev) => Number(((prev + 0.3) % 360).toFixed(3)));
        }, 50);
        return () => clearInterval(timer);
    }, [autoRotate, isVisible]);

    const calculateNodePosition = (index, total) => {
        const angle = ((index / total) * 360 + rotationAngle) % 360;
        const radius = 200;
        const radian = (angle * Math.PI) / 180;
        const x = radius * Math.cos(radian) + centerOffset.x;
        const y = radius * Math.sin(radian) + centerOffset.y;
        const zIndex = Math.round(100 + 50 * Math.cos(radian));
        const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)));
        return { x, y, angle, zIndex, opacity };
    };

    const isRelatedToActive = (itemId) => {
        if (!activeNodeId) return false;
        const activeItem = timelineData.find((i) => i.id === activeNodeId);
        return activeItem?.relatedIds.includes(itemId) || false;
    };

    return (
        <section id="how-it-works" ref={sectionRef} className="py-20 relative overflow-hidden">
            <div className="text-center mb-8 px-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-medium mb-4">
                    Nasıl Çalışır?
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
                    5 Adımda{' '}
                    <span className="text-safe-300">Akıllı Koçluk</span>
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto hidden md:block">Bir düğüme tıklayarak ayrıntıları keşfedin</p>
            </div>

            {/* Mobile: vertical step list */}
            <div className="md:hidden px-6 space-y-4 pb-4">
                {timelineData.map((item) => {
                    const Icon = item.icon;
                    const isExpanded = expandedItems[item.id];
                    return (
                        <div
                            key={item.id}
                            className="bg-black/60 border border-white/10 rounded-2xl overflow-hidden cursor-pointer"
                            onClick={() => toggleItem(item.id)}
                        >
                            <div className="flex items-center gap-4 p-4">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 shrink-0 transition-colors ${isExpanded ? 'bg-white text-black border-white' : 'bg-black text-white border-white/40'}`}>
                                    <Icon size={16} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs text-gray-500 font-mono">{item.date}</p>
                                    <p className="text-white font-semibold text-sm">{item.title}</p>
                                </div>
                                <Badge className={getStatusStyles(item.status)}>{getStatusLabel(item.status)}</Badge>
                            </div>
                            {isExpanded && (
                                <div className="px-4 pb-4 border-t border-white/8 pt-3">
                                    <p className="text-sm text-white/80 leading-relaxed">{item.content}</p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Desktop: radial orbital */}
            <div
                className="hidden md:flex w-full h-[600px] flex-col items-center justify-center bg-transparent overflow-hidden"
                ref={containerRef}
                onClick={handleContainerClick}
            >
                <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
                    <div
                        className="absolute w-full h-full flex items-center justify-center"
                        ref={orbitRef}
                        style={{
                            perspective: '1000px',
                            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
                        }}
                    >
                        {/* Center orb */}
                        <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-safe-500 via-vox-500 to-safe-400 animate-pulse flex items-center justify-center z-10">
                            <div className="absolute w-20 h-20 rounded-full border border-safe-400/20 animate-ping opacity-70" />
                            <div className="absolute w-24 h-24 rounded-full border border-vox-400/10 animate-ping opacity-50" style={{ animationDelay: '0.5s' }} />
                            <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md" />
                        </div>

                        {/* Orbit ring */}
                        <div className="absolute w-96 h-96 rounded-full border border-white/10" />

                        {/* Nodes */}
                        {timelineData.map((item, index) => {
                            const position = calculateNodePosition(index, timelineData.length);
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
                                        transform: `translate(${position.x}px, ${position.y}px)`,
                                        zIndex: isExpanded ? 200 : position.zIndex,
                                        opacity: isExpanded ? 1 : position.opacity,
                                    }}
                                    onClick={(e) => { e.stopPropagation(); toggleItem(item.id); }}
                                >
                                    <div
                                        className={`absolute rounded-full ${isPulsing ? 'animate-pulse' : ''}`}
                                        style={{
                                            background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
                                            width: `${item.energy * 0.5 + 40}px`,
                                            height: `${item.energy * 0.5 + 40}px`,
                                            left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                                            top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                                        }}
                                    />

                                    <div
                                        className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 transform
                                            ${isExpanded ? 'bg-white text-black border-white shadow-lg shadow-white/30 scale-150' :
                                              isRelated ? 'bg-white/50 text-black border-white animate-pulse' :
                                              'bg-black text-white border-white/40'}`}
                                    >
                                        <Icon size={16} />
                                    </div>

                                    <div className={`absolute top-12 whitespace-nowrap text-xs font-semibold tracking-wider transition-all duration-300 ${isExpanded ? 'text-white scale-125' : 'text-white/70'}`}>
                                        {item.title}
                                    </div>

                                    {isExpanded && (
                                        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-64 bg-black/90 backdrop-blur-lg border border-white/30 shadow-xl shadow-white/10 rounded-lg overflow-visible z-50">
                                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white/50" />
                                            <div className="p-4">
                                                <div className="flex justify-between items-center mb-2">
                                                    <Badge className={getStatusStyles(item.status)}>
                                                        {getStatusLabel(item.status)}
                                                    </Badge>
                                                    <span className="text-xs font-mono text-white/50">{item.date}</span>
                                                </div>
                                                <h4 className="text-sm font-semibold mb-2">{item.title}</h4>
                                                <p className="text-xs text-white/80">{item.content}</p>

                                                {item.relatedIds.length > 0 && (
                                                    <div className="mt-3 pt-3 border-t border-white/10">
                                                        <p className="text-xs text-white/50 uppercase tracking-wider mb-2">Bağlantılı Adımlar</p>
                                                        <div className="flex flex-wrap gap-1">
                                                            {item.relatedIds.map((relId) => {
                                                                const rel = timelineData.find((i) => i.id === relId);
                                                                return (
                                                                    <button
                                                                        key={relId}
                                                                        className="flex items-center h-6 px-2 text-xs border border-white/20 bg-transparent hover:bg-white/10 text-white/80 hover:text-white transition-all rounded"
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

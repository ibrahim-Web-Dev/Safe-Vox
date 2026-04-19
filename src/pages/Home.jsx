import AnimatedShaderHero from '../components/AnimatedShaderHero';
import ProblemStrip from '../components/ProblemStrip';
import RadialOrbitalTimeline from '../components/RadialOrbitalTimeline';
import ContainerScrollSection from '../components/ContainerScroll';
import Features from '../components/Features';
import About from '../components/About';
import Impact from '../components/Impact';
import CompetitiveEdge from '../components/CompetitiveEdge';
import CTASection from '../components/CTASection';

export default function Home() {
    return (
        <>
            <AnimatedShaderHero />
            <ProblemStrip />
            <RadialOrbitalTimeline />
            <ContainerScrollSection />
            <Features />
            <About />
            <CompetitiveEdge />
            <Impact />
            <CTASection />
        </>
    );
}

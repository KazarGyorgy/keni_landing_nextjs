import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/layout/Footer"));
const WhyUs = dynamic(() => import("@/components/sections/WhyUs"));
const Process = dynamic(() => import("@/components/sections/Process"));
const News = dynamic(() => import("@/components/sections/News"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const Contact = dynamic(() => import("@/components/sections/Contact"));
const Introduction = dynamic(() => import("@/components/sections/Introduction"));

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Introduction />
                <WhyUs />
                <Process />
                <News />
                <Testimonials />
                <FAQ />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

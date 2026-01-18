import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Services />
                <WhyUs />
                <Process />
                <Testimonials />
                <FAQ />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

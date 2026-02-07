import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Introduction from "@/components/sections/Introduction";
import Hero from "@/components/sections/Hero";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import News from "@/components/sections/News";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

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

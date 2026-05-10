import AboutUs from "./about-us";
import ImageWithSkeleton from "../ImageWithSkeleton";
import AwardsSection from "./awards";
import CertificationCarousel from "./certifications";
import Footer from "./footer";
import FreightHero from "./frieght-hero";
import GlobalFootprint from "./global-footPrint";
import Header from "./header";
import OfficesSection from "./office-section";
import PhilosophySection from "./philosophy";
import TestimonialsStickySection from "./reviews";
import SatisfiedClientsSection from "./reviews";
import VideoContainer from "./video-container";
import WhyChooseUs from "./why-us";

export default function MainContainer() {
    return (
        <main className="relative w-full overflow-x-hidden">
            {/* Sticky Side Bar Image */}
            <div className="hidden lg:flex fixed left-0 top-1/2 -translate-y-1/2 z-[100] drop-shadow-2xl">
                <ImageWithSkeleton 
                    src="/assets/sidecard.png" 
                    alt="Sidecard" 
                    className="w-[36px] h-auto" 
                    imageClassName="object-contain"
                />
            </div>

            <Header />
            <VideoContainer />
            <AboutUs />
            <FreightHero />
            <PhilosophySection />
            <WhyChooseUs />
            <TestimonialsStickySection />
            <CertificationCarousel />
            <AwardsSection />
            <GlobalFootprint />
            <OfficesSection />
            <Footer /> 
        </main>
    )
}
import HeroSub from '@/components/SharedComponent/HeroSub'
import React from 'react'
import { Metadata } from "next";
import Counter from '@/components/Home/Counter';
// WorkGrow section removed as requested
export const metadata: Metadata = {
    title: "About",
};

const page = () => {
  return (
    <>
        <HeroSub
            title="About Us"
            description="Professional translators with experience in the industry"
        />
        <section className="dark:bg-darkmode py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center px-4">
                <h3 data-aos="fade-up" data-aos-delay="150" data-aos-duration="800" className="text-white text-4xl font-semibold mb-4">Our Subtitling Team</h3>
              <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="800" className="text-base font-normal text-SlateBlue dark:text-darktext">At CaptionCore, we are a team of passionate and experienced translators dedicated to providing high-quality subtitling services in various languages. With a deep understanding of the industry and a commitment to excellence, we strive to exceed our clients' expectations on every project.</p>
            </div>
          </div>
        </section>
        <Counter/>
    </>
  )
}

export default page
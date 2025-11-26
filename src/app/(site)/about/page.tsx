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
            <div className="max-w-3xl mx-auto text-left px-4">
                <h3 data-aos="fade-up" data-aos-delay="150" data-aos-duration="800" className="text-white text-4xl font-semibold mb-4">Our Subtitling Team</h3>
                <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="800" className="text-base font-xl text-SlateBlue dark:text-darktext space-y-2.5">
                  <p className="mb-2.5">
                    At <strong>CaptionCore</strong>, we are a passionate and experienced team of translators dedicated to delivering high-quality subtitling services in multiple languages. With a deep understanding of the industry and a strong commitment to excellence, we work to exceed expectations on every project.
                  </p>
                  <p className="mb-2.5">
                    We believe every creator deserves to have their voice heard across the world. Our professional translations capture not only the words but also the tone, style and personality of your content. We know how powerful it is to enjoy a video with accurate and natural subtitles, and we are here to make that possible.
                  </p>
                  <p className="mb-2.5">
                    Whether you want to subtitle YouTube videos, localize a podcast or adapt your content for international platforms, <strong>CaptionCore</strong> has you covered. Reach out via email or through the form above, and let’s explore how we can bring your content to more people and more languages.
                  </p>
                  <p className="mb-2.5">
                    With <strong>CaptionCore</strong>, you’re not just expanding your reach, you’re building meaningful connections.
                  </p>
                </div>
            </div>
          </div>
        </section>
        <Counter/>
    </>
  )
}

export default page
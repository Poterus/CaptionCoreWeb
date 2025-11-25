"use client";
import { getImgPath } from "@/utils/imagePath";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <>
      <section className="dark:bg-darkmode py-20">
        <div className="container">
          <div className="flex md:flex-row flex-col items-center justify-center sm:gap-28 gap-8">
            <div className="flex sm:flex-row flex-col items-center sm:gap-8 gap-4">
              {/* Icono de correo eliminado */}
              <div className="mx-4 md:mx-20 my-6">
                {/* Título 'Email Us' eliminado para un diseño más limpio */}
                <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" className="text-SlateBlue font-normal text-xl max-w-4xl pb-10 px-4 md:px-12 dark:text-darktext">
                  <p className="mb-5">At <span className="font-bold">CaptionCore</span>, we believe every creator deserves to have their voice heard across the world. We provide professional, human translations that capture not just words, but the tone, style, and personality of your content.</p>
                  <p className="mb-5">As a passionate, creator-focused team, we know how powerful it is to enjoy a video with accurate, natural subtitles. That’s why we’re here, to help you share your message with a global audience in the most authentic way possible.</p>
                  <p className="mb-5">Whether you’re looking to subtitle YouTube videos, localize a podcast, or adapt your content for international platforms, we’ve got you covered.</p>
                  <p className="mb-5">Reach out to us through email or via the form above, and let’s talk about how we can bring your content to more people, more languages, and more hearts.</p>
                  <p className="mb-10">With <span className="font-bold">CaptionCore</span>, you’re not just expanding your reach, you’re building connections.</p>
                  <div className="grid md:grid-cols-3 grid-cols-1 gap-7 mt-8">
                    {/* Email */}
                    <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" className="flex flex-col items-center bg-secondary dark:bg-secondary rounded-14 p-8 shadow-light_shadwo dark:shadow-darkmd">
                      {/* Icono de email */}
                      <div className="bg-primary/20 dark:bg-darkmode w-14 h-14 flex items-center justify-center rounded-full mb-4">
                        <i className="bg-no-repeat bg-contain w-8 h-8 inline-block" style={{backgroundImage: `url(${getImgPath('/images/contact/email.svg')})`}}></i>
                      </div>
                      <a
                        href="mailto:contact@captioncore.com"
                        aria-label="Send email to contact@captioncore.com"
                        className="text-lg font-semibold text-secondary dark:text-white mb-2 hover:underline focus:underline outline-none"
                      >
                        Email
                      </a>
                      <span className="text-base text-SlateBlue dark:text-darktext whitespace-nowrap">contact@captioncore.com</span>
                    </div>
                    {/* Linkedin */}
                    <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" className="flex flex-col items-center bg-secondary dark:bg-secondary rounded-14 p-8 shadow-light_shadwo dark:shadow-darkmd">
                      {/* Icono Linkedin perfectamente centrado */}
                      <div className="bg-primary/20 dark:bg-darkmode w-14 h-14 flex items-center justify-center rounded-full mb-4">
                        <span className="flex items-center justify-center w-8 h-8 text-2xl font-bold text-primary dark:text-white">in</span>
                      </div>
                      <a
                        href="https://www.linkedin.com/company/captioncore/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit CaptionCore on LinkedIn"
                        className="text-lg font-semibold text-secondary dark:text-white mb-2 hover:underline focus:underline outline-none"
                      >
                        Linkedin
                      </a>
                      <span className="text-base text-SlateBlue dark:text-darktext break-all">CaptionCore</span>
                    </div>
                    {/* Phone */}
                    <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" className="flex flex-col items-center bg-secondary dark:bg-secondary rounded-14 p-8 shadow-light_shadwo dark:shadow-darkmd">
                      {/* Placeholder para icono de teléfono */}
                      <div className="bg-primary/20 dark:bg-darkmode w-14 h-14 flex items-center justify-center rounded-full mb-4">
                        <span className="w-8 h-8 inline-block flex items-center justify-center text-2xl font-bold text-green-500">📞</span>
                      </div>
                      <span className="text-lg font-semibold text-secondary dark:text-white mb-2">Phone</span>
                      <span className="text-base text-SlateBlue dark:text-darktext break-all">+34 650 258 088</span>
                    </div>
                  </div>
                </div>
                {/* Botón 'Leave a message' eliminado */}
              </div>
            </div>
          </div>
          {/* Mapa eliminado */}
        </div>
      </section>
    </>
  );
};

export default ContactInfo;

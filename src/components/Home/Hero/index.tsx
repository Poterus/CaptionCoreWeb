import Image from 'next/image'
import { getImgPath } from '@/utils/imagePath'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
      <section className="relative overflow-x-clip top-0 bg-primary circalanimat" style={{ '--work-line-bg': `url(${getImgPath('/images/work-grow/work-line.png')})` } as React.CSSProperties}>
        <div className='banner-shap it-wrapper' style={{ position: 'relative' }}>
          <div className='container py-10 md:py-14'>
            <div className='flex flex-wrap md:flex-nowrap items-start'>
              <div
                className='pb-3 sm:pb-0 w-full md:w-3/5 relative z-1 flex flex-col items-start md:items-start mx-0 text-left px-1 sm:px-4 md:pr-30'
                data-aos='fade-right'
                data-aos-delay='200'
                data-aos-duration='1000'>
                <h1 className='text-white text-4xl sm:text-5xl md:text-[55px] font-bold leading-tight tracking-tight w-full break-words'>
                  Take your content beyond borders with professional subtitles

                </h1>
                <Link href="/contact" className='highlight-cta-btn bg-white text-base font-normal text-primary py-3 px-12 rounded-lg mb-16 mt-8 transition-colors duration-700 hover:bg-secondary hover:text-white hover:-translate-y-1 inline-block text-center'>
                  Contact us
                </Link>
                <p className='text-2xl font-normal text-white leading-7 pb-11 max-w-408'>
                  Reach a global audience with accurate and engaging subtitles.
                </p>
                <div className='flex items-center gap-6'>
                  {/* Iconos de Wise y Google Play eliminados */}
                  
                </div>
              </div>
              <div
                className="w-full md:w-2/4 relative z-1 flex items-center justify-center"
                style={{ 
                  '--grid-line-bg': `url(${getImgPath('/images/hero/grid-line.png')})`,
                  '--circal-bg': `url(${getImgPath('/images/hero/circal.png')})`
                } as React.CSSProperties}
                data-aos='fade-left'
                data-aos-delay='200'
                data-aos-duration='1000'>
                <Image
                  src={getImgPath('/images/contact/contact.png')}
                  alt='Contact illustration'
                  width={600}
                  height={600}
                  className='w-full max-w-xs sm:max-w-4xl md:max-w-full xl:max-w-full h-auto rounded-lg shadow-lg object-contain mx-auto'
                  style={{ objectPosition: 'center bottom' }}
                  priority
                />
              </div>
            </div>
          </div>
          {/* SVG curva inferior */}
          <svg viewBox="0 0 1920 60" width="100%" height="30" style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: '30px', zIndex: 0, pointerEvents: 'none' }} preserveAspectRatio="none">
            <path d="M0,0 Q960,60 1920,0 L1920,60 L0,60 Z" fill="#d16c02" />
          </svg>
        </div>
      </section>
    </>
  )
}

export default Hero

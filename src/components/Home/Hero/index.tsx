import Image from 'next/image'
import { getImgPath } from '@/utils/imagePath'

const Hero = () => {
  return (
    <>
      <section className="relative overflow-x-clip top-0 bg-primary circalanimat" style={{ '--work-line-bg': `url(${getImgPath('/images/work-grow/work-line.png')})` } as React.CSSProperties}>
        <div className='banner-shap it-wrapper'>
          <div className='container py-20'>
            <div className='flex flex-wrap'>
              <div
                className='pb-3 sm:pb-0 md:w-2/3 w-full relative z-1'
                data-aos='fade-right'
                data-aos-delay='200'
                data-aos-duration='1000'>
                <h1 className='text-white relative max-w-473'>
                  Take your content beyond borders with profesional subtitles
                </h1>
                <button className='bg-white text-base font-normal text-primary py-3 px-12 rounded-lg mb-16 mt-8 transition-all duration-0.4s hover:bg-secondary hover:text-white'>
                  Contact us
                </button>
                <p className='text-2xl font-normal text-white leading-7 pb-11 max-w-408'>
                  Reach a global audience with accurate and engaging subtitles.
                </p>
                <div className='flex items-center gap-6'>
                  <div>
                    <Image
                      src={getImgPath('/images/hero/wise_white.png')}
                      alt='logo'
                      width={0}
                      height={0}
                      quality={100}
                      layout='responsive'
                      sizes='100vh'
                      className='w-20! h-5!'
                    />
                  </div>
                  <div>
                    <Image
                      src={getImgPath('/images/hero/google_white.png')}
                      alt='logo'
                      width={0}
                      height={0}
                      quality={100}
                      layout='responsive'
                      sizes='100vh'
                      className=' h-5!'
                    />
                  </div>
                  
                </div>
              </div>
              <div
                className="md:w-1/4 w-full md:-ml-16 -ml-0 relative z-1"
                style={{ 
                  '--grid-line-bg': `url(${getImgPath('/images/hero/grid-line.png')})`,
                  '--circal-bg': `url(${getImgPath('/images/hero/circal.png')})`
                } as React.CSSProperties}
                data-aos='fade-left'
                data-aos-delay='200'
                data-aos-duration='1000'>
                <form>
                  <h6 className='text-white sm:text-[32px] leading-[2.11rem] text-xl font-bold pb-5'>
                    Do you want subtitles in your content?
                  </h6>
                  <div className='grid md:grid-cols-2 grid-cols-1 gap-4 items-center mb-6'>
                     <div className='md:col-span-2 col-span-1'>
                      <input
                        type='text'
                        id='firstName'
                        className='bg-white text-darkmode text-base rounded-lg block w-full p-2.5 dark:bg-darkmode dark:placeholder:gray-400 dark:text-white focus:outline-0 focus:ring-1 focus:ring-secondary dark:focus:ring-white'
                        placeholder='Your name'
                        required
                      />
                    </div>
                    <div className='md:col-span-2 col-span-1'>
                      <input
                        type='text'
                        id='country'
                        className='bg-white text-darkmode text-base rounded-lg block w-full p-2.5 dark:bg-darkmode dark:placeholder:gray-400 dark:text-white focus:outline-0 focus:ring-1 focus:ring-secondary dark:focus:ring-white'
                        placeholder='Channel name'
                        required
                      />
                    </div>
                    <div className='md:col-span-2 col-span-1'>
                      <input
                        type='text'
                        id='company'
                        className='bg-white text-darkmode text-base rounded-lg block w-full p-2.5 dark:bg-darkmode dark:placeholder:gray-400 dark:text-white focus:outline-0 focus:ring-1 focus:ring-secondary dark:focus:ring-white'
                        placeholder='youremail@website.com'
                        required
                      />
                    </div>
                    <div className='md:col-span-2 col-span-1'>
                      <textarea
                        id='message'
                        rows={4}
                        className='bg-white block p-2.5 w-full text-base text-darkmode rounded-lg dark:bg-darkmode dark:placeholder:gray-400 dark:text-white focus:outline-0 focus:ring-1 focus:ring-secondary dark:focus:ring-white'
                        placeholder='Write your thoughts here...'></textarea>
                    </div>
                  </div>
                  <button
                    type='submit'
                    className='text-secondary bg-LightApricot hover:bg-secondary focus:ring-4 hover:text-white focus:outline-hidden focus:ring-blue-300 font-normal rounded-lg text-base w-full px-5 py-2.5 text-center  transition-all duration-0.4s'>
                    Get in touch
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero

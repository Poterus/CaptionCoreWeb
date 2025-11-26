import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getImgPath } from '@/utils/imagePath'

const ContactForm = () => {
  return (
    <>
      <section className='dark:bg-darkmode pt-0 md:pb-24 pb-10'>
        <div className='container px-2 sm:px-4'>
          <div className='flex justify-center'>
            <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" className='w-full max-w-xl'>
              <h2 className='max-w-320 sm:text-[40px] sm:leading-[3rem] text-[28px] leading-[2.25rem] font-bold text-secondary dark:text-white mb-9'>
                Do you want subtitles in your content?
              </h2>
              <form>
                  <div className='grid md:grid-cols-2 grid-cols-1 gap-4 items-center mb-6'>
                     <div className='md:col-span-2 col-span-1'>
                      <input
                        type='text'
                        id='firstName'
                        className='bg-secondary dark:bg-secondary text-darkmode text-base rounded-lg block w-full p-2.5 border border-BorderLine dark:border-dark_border dark:placeholder:gray-400 dark:text-white focus:outline-0 focus:ring-1 focus:ring-secondary dark:focus:ring-white'
                        placeholder='Your name'
                        required
                      />
                    </div>
                    <div className='md:col-span-2 col-span-1'>
                      <input
                        type='text'
                        id='country'
                        className='bg-secondary dark:bg-secondary text-darkmode text-base rounded-lg block w-full p-2.5 border border-BorderLine dark:border-dark_border dark:placeholder:gray-400 dark:text-white focus:outline-0 focus:ring-1 focus:ring-secondary dark:focus:ring-white'
                        placeholder='Channel name'
                        required
                      />
                    </div>
                    <div className='md:col-span-2 col-span-1'>
                      <input
                        type='text'
                        id='company'
                        className='bg-secondary dark:bg-secondary text-darkmode text-base rounded-lg block w-full p-2.5 border border-BorderLine dark:border-dark_border dark:placeholder:gray-400 dark:text-white focus:outline-0 focus:ring-1 focus:ring-secondary dark:focus:ring-white'
                        placeholder='youremail@website.com'
                        required
                      />
                    </div>
                    <div className='md:col-span-2 col-span-1'>
                      <textarea
                        id='message'
                        rows={4}
                        className='bg-secondary dark:bg-secondary block p-2.5 w-full text-base text-darkmode rounded-lg border border-BorderLine dark:border-dark_border dark:placeholder:gray-400 dark:text-white focus:outline-0 focus:ring-1 focus:ring-secondary dark:focus:ring-white'
                        placeholder='Write your thoughts here...'></textarea>
                    </div>
                  </div>
                  <button
                    type='submit'
                    className='bg-primary text-white font-normal rounded-lg text-base w-full px-5 py-2.5 text-center transition-colors transition-transform duration-300 hover:bg-darkprimary hover:-translate-y-1 focus:outline-none'>
                    Get in touch
                  </button>
                </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactForm

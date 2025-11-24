'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContext, useEffect, useRef, useState } from 'react'
import { headerData } from '../Header/Navigation/menuData'
import Image from 'next/image'
import HeaderLink from '../Header/Navigation/HeaderLink'
import MobileHeaderLink from '../Header/Navigation/MobileHeaderLink'
// Sign in / Sign up removed — single Contact Us button used
import { SuccessfullLogin } from '@/components/Auth/AuthDialog/SuccessfulLogin'
import { FailedLogin } from '@/components/Auth/AuthDialog/FailedLogin'
import { UserRegistered } from '@/components/Auth/AuthDialog/UserRegistered'
import AuthDialogContext from '@/app/context/AuthDialogContext'
import { getImgPath } from '@/utils/imagePath'

const Header: React.FC = () => {
  const pathUrl = usePathname()
  // theme hook removed

  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)

  const navbarRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    setSticky(window.scrollY >= 80)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navbarOpen])

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [navbarOpen])

  const authDialog = useContext(AuthDialogContext)

  return (
    <>
      <header
        className={`sticky h-24 top-0 py-1 z-50 w-full bg-primary transition-all ${
          sticky
            ? 'shadow-lg dark:shadow-darkmd bg-primary dark:bg-primary'
            : 'shadow-none'
        }`}>
        <div className='container mx-auto flex items-center justify-between p-6'>
          <Link href='/'>
            <Image
              src={getImgPath('/images/logo/logo.svg')}
              alt='logo'
              width={160}
              height={50}
              style={{ width: 'auto', height: 'auto' }}
              quality={100}
            />
          </Link>
          <ul className='hidden lg:flex items-center gap-6 ml-auto'>
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </ul>
          <div className='flex items-center xl:gap-4 lg:gap-2 gap-2'>
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className='block lg:hidden p-2 rounded-lg'
              aria-label='Toggle mobile menu'>
              <span className='block w-6 h-0.5 bg-white dark:bg-white'></span>
              <span className='block w-6 h-0.5 bg-white dark:bg-white mt-1.5'></span>
              <span className='block w-6 h-0.5 bg-white dark:bg-white mt-1.5'></span>
            </button>
          </div>
        </div>
        {navbarOpen && (
          <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-40' />
        )}

        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white dark:bg-darkmode shadow-lg transform transition-transform duration-300 max-w-64 ${
            navbarOpen ? 'translate-x-0' : 'translate-x-full'
          } z-50`}>
          <div className='flex items-center justify-between p-4'>
            <h2 className='text-lg font-bold text-black dark:text-white'>
              Menu
            </h2>
            <button
              onClick={() => setNavbarOpen(false)}
              aria-label='Close mobile menu'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='dark:text-white'>
                <path
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <nav className='flex flex-col items-start p-4'>
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
            <div className='mt-4 flex flex-col gap-4 w-full'>
              {/* Contact Us removed from mobile menu */}
            </div>
          </nav>
        </div>
        {/* Successsful Login Alert */}
        <div
          className={`fixed top-6 end-1/2 translate-x-1/2 z-50 ${
            authDialog?.isSuccessDialogOpen == true ? 'block' : 'hidden'
          }`}>
          <SuccessfullLogin />
        </div>
        {/* Failed Login Alert */}
        <div
          className={`fixed top-6 end-1/2 translate-x-1/2 z-50 ${
            authDialog?.isFailedDialogOpen == true ? 'block' : 'hidden'
          }`}>
          <FailedLogin />
        </div>
        {/* User registration Alert */}
        <div
          className={`fixed top-6 end-1/2 translate-x-1/2 z-50 ${
            authDialog?.isUserRegistered == true ? 'block' : 'hidden'
          }`}>
          <UserRegistered />
        </div>
      </header>
    </>
  )
}

export default Header

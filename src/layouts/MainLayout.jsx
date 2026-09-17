import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import { lightTopRoutes } from '../data/site'

const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <>
      <button
        type="button"
        onClick={() => document.getElementById('main')?.focus()}
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-brand-900 focus:shadow-lg"
      >
        İçeriğe geç
      </button>
      <Header/>
      <main id="main" tabIndex={-1} className={lightTopRoutes.includes(pathname) ? 'pt-20 outline-none' : 'outline-none'}>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default MainLayout

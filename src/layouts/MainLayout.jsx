import React, { useEffect } from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import { Outlet, useLocation } from 'react-router-dom'

const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default MainLayout
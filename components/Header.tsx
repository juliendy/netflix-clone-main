import { SearchIcon, BellIcon } from '@heroicons/react/solid'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import useAuth from '../hooks/useAuth';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { logout } = useAuth();
    
    useEffect(() => {
        const handleScroll = () => {
          // if not on top of the page (y-axis) show the header
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      {/* using effect with logical and operand to set color value */}
      <div className="flex items-center space-x-2 md:space-x-10">
        {/* space-x = space between in x-axis ie margin-left. 10=40px/2.5rem. md: (medium) refers to responsiveness ie @media (min-width: 768px) */}
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        {/* sm: (small) @media (min-width: 640px) */}
        <SearchIcon className="sm hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        {/* <Link href="/account"> */}
          <img
          onClick={logout}
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        {/* </Link> */}
      </div>
    </header>
  )
}

export default Header

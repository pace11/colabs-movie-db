import React from 'react'
import { Navbar } from 'flowbite-react'
const Navbarp = () => {
  return (
    <>
      <Navbar fluid={true} rounded={true} class="bg-">
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://th.bing.com/th/id/OIP.t_wQGg2bNF2adyZbiInmRAHaGI?w=247&h=205&c=7&r=0&o=5&pid=1.7"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span
            className="self-center whitespace-nowrap text-xl font-semibold dark:text-white "
            class="text-red-700"
          >
            NONTONKU
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link class="text-red-700">Home</Navbar.Link>
          <Navbar.Link href="/navbars" class="text-red-700">
            About
          </Navbar.Link>

          <Navbar.Link href="/navbars" class="text-red-700">
            Contact
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            <img
              src="https://www.pinclipart.com/picdir/big/15-153148_search-magnifying-glass-icon-black-search-icon-png.png"
              className="mr-4 h-6 sm:h-5"
              alt="Flowbite Logo"
            />
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Navbarp

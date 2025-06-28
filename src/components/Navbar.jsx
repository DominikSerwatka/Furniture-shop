import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        {/* <!-- navbar --> */}
        <nav className="bg-white border-white-500 z-50 fixed top-0 w-full">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">

            <div>
                <Link className="flex flex-shrink-0 items-center mr-4" to="/">
                <span className="hidden md:block text-black text-2xl font-bold ml-2"
                    >Meble</span
                >
                </Link>
            </div>  

            <div className="flex space-x-4">
                <Link
                to="/"
                className="text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >Home</Link
                >
                <Link
                to="/products"
                className="text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >Produkty</Link
                >
                <Link
                to="/add-job.html"
                className="text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >Galeria</Link
                >
                <Link
                to="/add-job.html"
                className="text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >O nas</Link
            >
            </div>

            <div className="flex space-x-4">
                <Link
                to="/add-job"
                className="text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                ><i className="fa-regular fa-user"></i>
                </Link>
                <Link
                to="/add-job"
                className="text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                ><i className="fa-solid fa-magnifying-glass"></i>
                </Link>
                <Link
                to="/add-job"
                className="text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                ><i className="fa-regular fa-heart"></i>
                </Link>
                <Link
                to="/shop_cart.html"
                className="text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                ><i className="fa-solid fa-cart-shopping"></i>
                </Link> 
            </div>
    
            </div>
        </div>
        </nav>
    </>
  )
}

export default Navbar
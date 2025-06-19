import React from 'react'

function Navbar() {
  return (
    <>
        {/* <!-- navbar --> */}
        <nav className="bg-white border-white-500 z-50 fixed top-0 w-full">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">

            <div>
                <a className="flex flex-shrink-0 items-center mr-4" href="/index.html">
                <span className="hidden md:block text-black text-2xl font-bold ml-2"
                    >Meble</span
                >
                </a>
            </div>  

            <div className="flex space-x-4">
                <a
                href="/index.html"
                className="text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >Home</a
                >
                <a
                href="/search.html"
                className="text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >Produkty</a
                >
                <a
                href="/add-job.html"
                className="text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >Galeria</a
                >
                <a
                href="/add-job.html"
                className="text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >O nas</a
            >
            </div>

            <div className="flex space-x-4">
                <a
                href="/add-job"
                className="text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                ><i className="fa-regular fa-user"></i>
                </a>
                <a
                href="/add-job"
                className="text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                ><i className="fa-solid fa-magnifying-glass"></i>
                </a>
                <a
                href="/add-job"
                className="text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                ><i className="fa-regular fa-heart"></i>
                </a>
                <a
                href="/shop_cart.html"
                className="text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                ><i className="fa-solid fa-cart-shopping"></i>
                </a> 
            </div>
    
            </div>
        </div>
        </nav>
    </>
  )
}

export default Navbar
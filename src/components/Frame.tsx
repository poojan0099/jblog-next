import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const Frame = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div className="flex flex-col items-center mx-[40px] md:mx-auto my-0">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Frame
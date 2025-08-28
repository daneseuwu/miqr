import Footer from '@/components/footer/footer'
import Nav from '@/components/nav/nav'
import Qr from '@/components/qr/qr'
import React from 'react'

const Page = () => {
    return (
        <div className='flex flex-col h-screen justify-between items-center py-2'>
            <Nav />
            <Qr />
            <Footer />
        </div>
    )
}

export default Page
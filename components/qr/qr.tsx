"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react';
import QRCode from "react-qr-code";


const Qr = () => {
    const [qrValue, setQrValue] = useState('');
    const [inputValue, setInputValue] = useState('');

    const generateQr = () => {
        setQrValue(inputValue);
    }

    const downloadQR = () => {
        const svg = document.getElementById("qr-code") as SVGSVGElement | null
        if (!svg) return

        const svgData = new XMLSerializer().serializeToString(svg)
        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")

        const img = new Image()
        img.onload = () => {
            canvas.width = img.width
            canvas.height = img.height
            ctx?.drawImage(img, 0, 0)
            const pngFile = canvas.toDataURL("image/png")

            const downloadLink = document.createElement("a")
            downloadLink.href = pngFile
            downloadLink.download = "mi-qr.png"
            downloadLink.click()
        }
        img.src = "data:image/svg+xml;base64," + btoa(svgData)
    }

    return (
        <div className='flex flex-col items-center justify-center h-full'>
            <QRCode id="qr-code" size={250} value={qrValue || 'https://ui.shadcn.com'} />

            {qrValue &&
                <Button type='button' variant={'secondary'} className='mt-6 cursor-pointer font-mono' onClick={downloadQR}>Download</Button>
            }

            <div className='flex flex-row gap-2 mt-6'>

                <Input className='md:w-72 font-mono' value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='https://ui.shadcn.com' />
                <Button type='button' className='cursor-pointer font-mono' onClick={generateQr} disabled={inputValue == ''}>Generate</Button>

            </div>
        </div>
    )
}

export default Qr
"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import QRCode from "react-qr-code"

const QrWifi = () => {
    const [qrValue, setQrValue] = useState('')
    const [ssid, setSsid] = useState('')
    const [password, setPassword] = useState('')
    const [encryption, setEncryption] = useState('WPA')

    const generateWifiQr = () => {
        const wifiString = `WIFI:T:${encryption};S:${ssid};P:${password};;`
        setQrValue(wifiString)
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
            downloadLink.download = "wifi-qr.png"
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

            <div className='flex flex-col gap-2 mt-6 md:w-72 w-full'>

                <Input
                    className='font-mono'
                    value={ssid}
                    onChange={(e) => setSsid(e.target.value)}
                    placeholder='Nombre de la red (SSID)'
                />

                <Input
                    className='font-mono'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Contraseña'
                    type="password"
                />

                <select
                    className="border rounded p-2 font-mono"
                    value={encryption}
                    onChange={(e) => setEncryption(e.target.value)}
                >
                    <option value="WPA">WPA/WPA2</option>
                    <option value="WEP">WEP</option>
                    <option value="nopass">Sin contraseña</option>
                </select>

                <Button type='button' className='cursor-pointer font-mono' onClick={generateWifiQr} disabled={!ssid}>Generate</Button>

            </div>
        </div>

    )
}

export default QrWifi

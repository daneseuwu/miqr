"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import QRCode from "react-qr-code"

const Qr = () => {
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
        <div className='container mx-auto pt-20'>
            <div className='flex flex-col justify-center items-center'>

                <QRCode id="qr-code" value={qrValue} />

                {qrValue && (
                    <Button variant={'secondary'} className='mt-6' onClick={downloadQR}>
                        Download
                    </Button>
                )}

                <div className='flex flex-col gap-4 mt-6 w-full md:w-80'>

                    <Input
                        value={ssid}
                        onChange={(e) => setSsid(e.target.value)}
                        placeholder='Nombre de la red (SSID)'
                    />

                    <Input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Contraseña'
                        type="password"
                    />

                    <select
                        className="border rounded p-2"
                        value={encryption}
                        onChange={(e) => setEncryption(e.target.value)}
                    >
                        <option value="WPA">WPA/WPA2</option>
                        <option value="WEP">WEP</option>
                        <option value="nopass">Sin contraseña</option>
                    </select>

                    <Button
                        type='button'
                        className='cursor-pointer'
                        onClick={generateWifiQr}
                        disabled={!ssid}
                    >
                        Generate WiFi QR
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Qr

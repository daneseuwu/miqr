import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Label } from '@radix-ui/react-dropdown-menu'

const Shortly = () => {
    return (
        <div className='flex flex-col items-center justify-center h-full'>


            <div className='flex flex-col  space-y-2 gap-2 mt-6 md:w-72 w-full '>

                <div>
                    <Label className='font-mono'>Title</Label>
                    <Input className='font-mono' placeholder='Shadcn' />
                </div>
                <div>
                    <Label className='font-mono'>Url</Label>
                    <Input className='font-mono' placeholder='https://ui.shadcn.com' />
                </div>
                <Button type='button' className='cursor-pointer font-mono'>Short</Button>

            </div>
        </div>
    )
}

export default Shortly
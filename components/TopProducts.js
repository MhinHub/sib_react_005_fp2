import CardContent from './CardContent'
import React from 'react'
export default function TopProducts() {
    return (
        <div className='my-8'>
            <h2 className='ml-8 text-4xl font-medium'>TOP 3 BESTSELLER</h2>
            <div className="grid grid-cols-3 -mr-px my-8">
                <CardContent />
                <CardContent />
                <CardContent />
            </div>
            <div className="ml-8 h-12 w-48 bg-black text-white text-center text-lg p-3 items-center font-base rounded-none" >
                <p>See More</p>
            </div>
        </div>
    )
}

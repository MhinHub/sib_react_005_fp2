import CardContent from './CardContent'
import React from 'react'
export default function TopProducts() {
    return (
        <div>
            <h2 className='text-4xl font-medium'>TOP 3 BESTSELLER</h2>
            <div className="grid grid-cols-3 w-screen my-8">
                <CardContent />
                <CardContent />
                <CardContent />
            </div>

        </div>
    )
}

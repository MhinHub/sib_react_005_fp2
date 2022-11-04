import Image from 'next/image'
import React from 'react'

export default function Categories() {
    return (
        <div className="flex flex-col items-center my-14">
            <h1 className="text-4xl font-medium">Categories</h1>
            <div className="flex flex-wrap justify-center">
                <div className="flex justify-center items-center">
                    <div className="flex flex-col items-center m-4">
                        <h2 className="text-xl font-medium">Man's Clothing</h2>
                        <Image
                            className="w-20"
                            src="/static/man-cloth.png"
                            width={80}
                            height={80}
                        />
                    </div>
                    <div className="flex flex-col items-center m-4">
                        <h2 className="text-xl font-medium">Man's Clothing</h2>
                        <Image
                            className="w-20"
                            src="/static/man-cloth.png"
                            width={80}
                            height={80}
                        />
                    </div>
                    <div className="flex flex-col items-center m-4">
                        <h2 className="text-xl font-medium">Man's Clothing</h2>
                        <Image
                            className="w-20"
                            src="/static/man-cloth.png"
                            width={80}
                            height={80}
                        />
                    </div>
                    <div className="flex flex-col items-center m-4">
                        <h2 className="text-xl font-medium">Man's Clothing</h2>
                        <Image
                            className="w-20"
                            src="/static/man-cloth.png"
                            width={80}
                            height={80}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
function InfoCard({ img, location, title, description, star, price, total }) {
    return (
        <div className='flex hover:opacity-80 hover:shadow-lg px-2 pr-4 py-7 cursor-pointer transition duration-200 ease-out'>
            <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 '>
                <Image src={img} layout="fill" objectFit='cover' className='rounded-xl' />
            </div>
            <div className='flex flex-col flex-grow ml-5' >
                <div className='flex justify-between'>
                    <p>{location}</p>
                    <HeartIcon className='h-7 cursor-pointer' />

                </div>
                <h4 className='text-xl font-semibold'>{title}</h4>
                <div className='border-b w-10 pt-2' />
                <p className='text-gray-500 text-sm flex-grow'>{description}</p>
                <div className='flex justify-between pt-5'>
                    <p className='flex items-center'>
                        <StarIcon className='h-5 text-red-500'/>
                        {star}
                    </p>
                    <div>
                        <p className='text-lg lg:text-2xl font-semibold pb-2'>{price}</p>
                        <p className='text-right font-extralight '>{total}</p>
                    </div>
                </div>





            </div>

        </div>
    )
}

export default InfoCard
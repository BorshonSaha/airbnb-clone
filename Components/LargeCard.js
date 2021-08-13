import React from 'react';
import Image from 'next/image';

const LargeCard = ({ img, title, description, buttonText }) => {
    return (
        <div className='py-16 relative cursor-pointer'>
            <div className='relative h-96 min-w-[300px]'>
                <Image
                    src={img}
                    layout='fill'
                    objectFit='cover'
                    className='rounded-2xl'
                />
            </div>
            <div className='absolute top-32 left-12 font-semibold'>
                <h3 className='text-4xl mb-3 w-64'>{title}</h3>
                <p>{description}</p>
                <button className='font-semibold px-4 py-2 bg-gray-900 text-white rounded-lg mt-5'>{buttonText}</button>
            </div>
        </div>
    );
};

export default LargeCard;
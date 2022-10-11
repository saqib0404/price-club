import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    return (
        <div className='flex items-center mt-2'>
            <CheckCircleIcon className="h-4 w-4 text-green-500"/>
            <p className='ml-2 text-white'>{feature}</p>
        </div>
    );
};

export default Feature;
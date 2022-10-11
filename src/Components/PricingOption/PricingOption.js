import React from 'react';
import Feature from '../Feature/Feature';

const PricingOption = ({ option }) => {
    const { features } = option;
    // console.log(features);
    return (
        <div className='bg-slate-700 rounded-md m-5 p-4'>
            <h3>
                <span className='text-5xl text-white font-bold'>{option.price}</span>
                <span className='text-3xl text-white font-bold '>/mon</span>
            </h3>
            <p className='text-2xl text-white font-bold'>{option.name}</p>
            <div className='mt-6'>
                {
                    features.map((feature, idx) => <Feature
                        key={idx}
                        feature={feature}
                    ></Feature>)
                }
                <button className='text-white bg-sky-700 py-3 w-full mt-4 rounded-md text-2xl font-bold hover:bg-sky-500'>Buy Now</button>
            </div>
        </div>

    );
};

export default PricingOption;
import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOption = [
        {
            id: 1, name: 'Free', price: 0, features: [
                'Awesome features',
                'Extra features',
                "Unnecessary features",
                'Will never use features',
                'Hudai features',
                'Ajaira features'
            ]
        },
        {
            id: 2, name: 'Platinum', price: 9.99, features: [
                'Everything on free',
                'Extra features',
                "Unnecessary features",
                'Will never use features',
                'Hudai features',
                'Ajaira features'
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99, features: [
                'Everything on Premium',
                'Extra features',
                "Unnecessary features",
                'Will never use features',
                'Hudai features',
                'Ajaira features'
            ]
        },
    ]
    return (
        <div>
            <h2 className='text-4xl font-semibold text-white bg-cyan-600 p-4 my-4'>Deals Of the Month</h2>
            <div className='grid md:grid-cols-3 gap-3'>
                {
                    pricingOption.map(option => <PricingOption
                    key={option.id}
                    option={option}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;
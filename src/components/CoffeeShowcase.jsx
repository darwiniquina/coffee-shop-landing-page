import React from 'react';
import { beanImage, coffeeProducts } from '../data/data';

const CoffeeShowcase = () => {


    const beanPositions = [
        { top: 'top-[10%]', left: 'left-[10%]', size: 'w-10', rotate: 'rotate-12', blur: 'blur-xs', opacity: 'opacity-70' },
        { top: 'top-[30%]', left: 'left-[20%]', size: 'w-20', rotate: '-rotate-45', blur: 'blur-sm', opacity: 'opacity-100' },
        { top: 'top-[75%]', left: 'left-[30%]', size: 'w-50', rotate: 'rotate-6', blur: 'blur-md', opacity: 'opacity-100' },

        { top: 'top-[15%]', right: 'right-[20%]', size: 'w-20', rotate: '-rotate-90', blur: 'blur-sm', opacity: 'opacity-80' },
        { top: 'top-[50%]', right: 'right-[15%]', size: 'w-10', rotate: 'rotate-3', blur: 'blur-md', opacity: 'opacity-60' },
        { top: 'top-[85%]', right: 'right-[10%]', size: 'w-14', rotate: 'rotate-180', blur: 'blur-lg', opacity: 'opacity-50' },
    ];

    return (

        <section className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-8 lg:px-16 text-white relative overflow-hidden ">
            {
                beanImage && beanPositions.map((bean, index) => (
                    <img
                        key={index}
                        src={beanImage}
                        alt="Coffee Bean"
                        className={`
                        absolute z-10 
                        ${bean.top} ${bean.left} ${bean.right} 
                        ${bean.size} 
                        ${bean.rotate} 
                        filter ${bean.blur} 
                        ${bean.opacity}
                               pointer-events-none /* IMPORTANT: Prevents them from blocking clicks */
                    `}
                    />
                ))
            }

            <div className="z-20 max-w-7xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 leading-tight">
                    Our Signature Blends
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {coffeeProducts.map((coffee) => (
                        <div
                            key={coffee.id}
                            className="bg-[#1a1006]/50 rounded-xl shadow-lg overflow-visible transform hover:scale-[1.03] transition duration-300 group pt-10  md:mt-10"
                        >
                            <div className="relative flex justify-center">
                                <img
                                    src={coffee.imageUrl}
                                    alt={coffee.name}
                                    className="w-3/4 h-60 object-contain md:-mt-30 group-hover:translate-y-[-4px] transition duration-300"
                                />
                            </div>

                            <div className="p-8 text-center space-y-4">
                                <h3 className="text-3xl font-bold text-white">{coffee.name}</h3>
                                <p className="text-[#F5EBDD] text-lg">{coffee.description}</p>
                                <button className="mt-4 bg-[#3C5F3E] hover:bg-[#4d7b4f] text-[#F5EBDD] font-semibold py-3 px-6 rounded-lg transition duration-300">
                                    View Details
                                </button>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section >
    );
};

export default CoffeeShowcase; 
import React from "react";
import { heroContent } from "../data/data";

const Hero = () => {
    const { title, subtitle, ctaText, coffeeD, beanImage } = heroContent;

    const beanPositions = [
        { top: 'top-[10%]', left: 'left-[10%]', size: 'w-10', rotate: 'rotate-12', blur: 'blur-xs', opacity: 'opacity-70' },
        { top: 'top-[30%]', left: 'left-[20%]', size: 'w-20', rotate: '-rotate-45', blur: 'blur-sm', opacity: 'opacity-100' },
        { top: 'top-[75%]', left: 'left-[15%]', size: 'w-50', rotate: 'rotate-6', blur: 'blur-md', opacity: 'opacity-100' },

        { top: 'top-[15%]', right: 'right-[5%]', size: 'w-20', rotate: '-rotate-90', blur: 'blur-sm', opacity: 'opacity-80' },
        { top: 'top-[50%]', right: 'right-[15%]', size: 'w-10', rotate: 'rotate-3', blur: 'blur-md', opacity: 'opacity-60' },
        { top: 'top-[85%]', right: 'right-[10%]', size: 'w-14', rotate: 'rotate-180', blur: 'blur-lg', opacity: 'opacity-50' },
    ];


    return (
        <section className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-8 lg:px-16 relative overflow-hidden">

            {beanImage && beanPositions.map((bean, index) => (
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
            ))}

            <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 z-20">

                <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
                    <h1 className="poppins-bold text-5xl md:text-5xl font-extrabold text-white leading-tight">
                        {title}
                    </h1>

                    <p className="inter-font text-xl md:text-2xl text-[#F5EBDD] max-w-lg lg:max-w-none mx-auto lg:mx-0">
                        {subtitle}
                    </p>

                    <button className="poppins-bold bg-[#3C5F3E] hover:bg-[#4d7b4f] text-[#F5EBDD] font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 mt-4">
                        {ctaText}
                    </button>
                </div>


                <div className="w-full lg:w-1/2 flex justify-center items-center relative p-4">

                    <div className="z-10 absolute w-[40rem] h-[40rem] bg-white rounded-full filter blur-3xl opacity-30 "></div>

                    <img
                        src={coffeeD}
                        alt="Splashing Coffee Hero Image"
                        className="z-20 object-contain md:-mt-50 scale-120"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
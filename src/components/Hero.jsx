import React from "react";
import { heroContent } from "../data/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

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

    useGSAP(() => {
        let titleSplit = new SplitText(".hero-title", { type: "chars, words", wordsClass: "heroTitle++" });
        let subtitleSplit = new SplitText(".hero-subtitle", { type: "lines", mask: "lines" });

        let tl = gsap.timeline();

        tl.from(titleSplit.chars, {
            y: 100,
            scale: 0,
            autoAlpha: 0,
            ease: "back",
            stagger: { each: 0.05, from: "start" },
        })
            .from(subtitleSplit.lines, {
                y: 100,
                autoAlpha: 0,
                ease: "back",
                stagger: { each: 0.05, from: "start" },
            }, "<0.5")
            .to(".heroTitle3, .heroTitle4", { color: "#B7C37A" }, "<0.5")
            .from(".hero-img", {
                scale: 0,
                autoAlpha: 0,
                ease: "back",
            }, "<0.5")
            .from(".hero-cta", { transformOrigin: "center center", scale: 0, opacity: 0, ease: "back" }, "<");


        gsap.utils.toArray(".hero-bean").forEach((bean) => {
            gsap.to(bean, {
                y: () => gsap.utils.random(-100, -300),
                x: () => gsap.utils.random(-50, 50),
                rotation: () => gsap.utils.random(-20, 20),
                duration: () => gsap.utils.random(6, 10),
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
            });
        });

        gsap.to(".hero-img", {
            y: () => gsap.utils.random(-50, 50),
            x: () => gsap.utils.random(-50, 50),
            rotation: () => gsap.utils.random(-10, 10),
            duration: () => gsap.utils.random(10, 10),
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
        })
    });

    return (
        <section className="hero min-h-screen flex items-center justify-center py-16 px-4 sm:px-8 lg:px-16 relative overflow-hidden bg-gradient-to-b from-[#2F1E14] to-[#4B2F21]">
            {beanImage && beanPositions.map((bean, index) => (
                <img
                    key={index}
                    src={beanImage}
                    alt="Coffee Bean"
                    className={`absolute z-10 ${bean.top} ${bean.left || bean.right} ${bean.size} ${bean.rotate} filter ${bean.blur} ${bean.opacity} pointer-events-none hero-bean`}
                />
            ))}


            <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 z-20">
                <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
                    <h1 className="hero-title poppins-bold text-5xl md:text-5xl font-extrabold text-[#F4E1C1] leading-tight drop-shadow-md">
                        {title}
                    </h1>

                    <p className="hero-subtitle inter-font text-xl md:text-2xl text-[#F5EBDD] max-w-lg lg:max-w-none mx-auto lg:mx-0">
                        {subtitle}
                    </p>


                    <button className="hero-cta bg-[#4D7B4F] hover:bg-[#5DA564] text-[#F5EBDD] font-semibold py-3 px-6 rounded-lg ">
                        {ctaText}
                    </button>
                </div>

                <div className="w-full lg:w-1/2 flex justify-center items-center relative p-4">
                    <div className="z-10 absolute w-[40rem] h-[40rem] bg-[#F9C97D] rounded-full filter blur-3xl opacity-20"></div>

                    <img
                        src={coffeeD}
                        alt="Splashing Coffee Hero Image"
                        className="hero-img z-20 object-contain md:-mt-20 scale-110"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;

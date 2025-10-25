import { aboutUsContent } from "../data/data";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const AboutUsMobile = () => {
    const {
        coffeeStoryImage,
        title,
        story,
        visitUsLocation,
        openingScheduleMessage,
        dropByMessage,
        coffeeShopPicture,
        visitUsMessage,
    } = aboutUsContent;

    useGSAP(() => {
        const sections = gsap.utils.toArray(".mobileContentSection");

        sections.forEach((section) => {
            const heading = section.querySelector("h1, h2");
            const img = section.querySelector("img, iframe");
            const paragraph = section.querySelector("p");

            if (heading || img) {
                const tlHeader = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        end: "top 55%",
                        scrub: true,
                        toggleActions: "play none none reverse",
                    },
                });

                if (heading) {
                    const splitHeading = new SplitText(heading, { type: "chars" });
                    tlHeader.from(splitHeading.chars, {
                        opacity: 0,
                        yPercent: 100,
                        ease: "back.out(1.7)",
                        stagger: 0.03,
                        duration: 0.6,
                    });
                }

                if (img) {
                    tlHeader.from(
                        img,
                        {
                            opacity: 0,
                            y: 50,
                            scale: 0.95,
                            duration: 0.8,
                            ease: "power2.out",
                        },
                        "<0.2"
                    );
                }
            }

            if (paragraph) {
                const splitPara = new SplitText(paragraph, { type: "lines", mask: "lines" });

                gsap.from(splitPara.lines, {
                    scrollTrigger: {
                        trigger: paragraph,
                        start: "top 80%",
                        end: "top 50%",
                        scrub: true,
                        toggleActions: "play none none reverse",
                    },
                    opacity: 0,
                    y: 40,
                    ease: "power3.out",
                    stagger: 0.1,
                    duration: 0.8,
                });
            }
        });
    });

    return (
        <div className="aboutUsWrapperMobile p-6 flex flex-col md:hidden bg-[#1A1006] text-[#F5EBDD]">
            <div className="mobileContentSection mb-16">
                <h2 className="text-4xl font-extrabold mb-6 leading-tight">{title}</h2>
                <img
                    className="w-full h-auto rounded-2xl mb-6"
                    src={coffeeStoryImage}
                    alt="Cartoon SunFace Coffee"
                />
                <p className="inter-font text-xl leading-relaxed tracking-wider">{story}</p>
            </div>

            <div className="mobileContentSection mb-16">
                <h1 className="text-4xl font-extrabold mb-5 leading-tight">Come Visit Us!</h1>
                <h2 className="text-2xl font-extrabold mb-4 leading-tight">{visitUsLocation}</h2>

                <div className="w-full h-[400px] mb-6 rounded-2xl overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.1837710650093!2d121.06913057539269!3d14.814940685697284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397af7b38eb31eb%3A0xcd2048a5aceed04f!2sStarmall%20-%20San%20Jose%20del%20Monte!5e0!3m2!1sen!2sph!4v1761207278116!5m2!1sen!2sph"
                        width="100%"
                        height="100%"
                        loading="lazy"
                        className="rounded-2xl border-0"
                        title="Our Location"
                    ></iframe>
                </div>

                <p className="inter-font text-xl leading-relaxed tracking-wider">{visitUsMessage}</p>
            </div>

            <div className="mobileContentSection mb-16">
                <h1 className="text-4xl font-extrabold mb-5 leading-tight">Drop By Anytime</h1>
                <h2 className="text-xl font-extrabold mb-4 leading-tight">
                    {openingScheduleMessage}
                </h2>

                <img
                    className="w-full h-auto rounded-2xl mb-6"
                    src={coffeeShopPicture}
                    alt="Barista Guy"
                />

                <p className="inter-font leading-relaxed tracking-wider text-xl">
                    {dropByMessage}
                </p>
            </div>
        </div>
    );
};

export default AboutUsMobile;

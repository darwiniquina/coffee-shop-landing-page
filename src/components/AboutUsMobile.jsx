import React from "react";
import { aboutUsContent } from "../data/data";

const AboutUsMobile = () => {
    const { coffeeStoryImage, title, story, visitUsLocation, openingScheduleMessage, dropByMessage, coffeeShopPicture, visitUsMessage } = aboutUsContent;

    return (
        <div className="aboutUsWrapperMobile p-6 flex flex-col md:hidden">

            <div className="mobileContentSection mb-10">
                <img className="w-full h-auto rounded-2xl mb-6" src={coffeeStoryImage} alt="Cartoon SunFace Coffee" />
                <h2 className="text-4xl font-extrabold mb-4 leading-tight">
                    {title}
                </h2>
                <p className="inter-font text-xl leading-relaxed tracking-wider text-[#F5EBDD]">
                    {story}
                </p>
            </div>

            <div className="mobileContentSection mb-10">
                <h1 className="text-4xl font-extrabold mb-5 leading-tight">
                    Come Visit Us!
                </h1>

                <h2 className="text-2xl font-extrabold mb-4 leading-tight">
                    {visitUsLocation}
                </h2>

                <div className="map-container w-full h-[400px] mb-6">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.1837710650093!2d121.06913057539269!3d14.814940685697284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397af7b38eb31eb%3A0xcd2048a5aceed04f!2sStarmall%20-%20San%20Jose%20del%20Monte!5e0!3m2!1sen!2sph!4v1761207278116!5m2!1sen!2sph"
                        width="100%"
                        height="100%"
                        loading="lazy"
                        className="rounded-2xl border-0"
                        title="Our Location"
                    ></iframe>
                </div>

                <p className="inter-font text-xl leading-relaxed tracking-wider text-[#F5EBDD]">
                    {visitUsMessage}
                </p>
            </div>

            <div className="mobileContentSection mb-10">
                <h1 className="text-4xl font-extrabold mb-5 leading-tight">
                    Drop By Anytime
                </h1>

                <h2 className="text-xl font-extrabold mb-4 leading-tight">
                    {openingScheduleMessage}
                </h2>

                <img className="w-full h-auto rounded-2xl mb-6" src={coffeeShopPicture} alt="Barista Guy" />

                <p className="inter-font leading-relaxed tracking-wider text-xl text-[#F5EBDD]">
                    {dropByMessage}
                </p>
            </div>

        </div>
    );
};

export default AboutUsMobile;
import { aboutUsContent } from "../data/data";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AboutUs = () => {
  const { coffeeStoryImage, title, story, visitUsLocation, openingScheduleMessage, dropByMessage, coffeeShopPicture, visitUsMessage } = aboutUsContent;

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 600px)", () => {

      const details = gsap.utils.toArray(
        ".aboutUsContentSection:not(:first-child)"
      );

      const photos = gsap.utils.toArray(".aboutUsPhoto:not(:first-child)");

      gsap.set(photos, { yPercent: 101 });

      const allPhotos = gsap.utils.toArray(".aboutUsPhoto");


      ScrollTrigger.create({
        trigger: ".aboutUsWrapper",
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
      });


      details.forEach((detail, index) => {
        let headline = detail.querySelector("h1");
        let animation = gsap
          .timeline()
          .to(photos[index], { yPercent: 0 })
          .set(allPhotos[index], { autoAlpha: 0 });

        ScrollTrigger.create({
          trigger: headline,
          start: "top 80%",
          end: "top 50%",
          animation: animation,
          scrub: true,
          markers: false,
        });
      });

      return () => {
      };
    });
  });

  return (
    <div className="aboutUsWrapper hidden md:flex">
      <div className="left w-[60%]">
        <div className="desktopContent m-auto w-[80%]">
          <div className="aboutUsContentSection min-h-[100vh] flex flex-col justify-center">
            <h2 className="text-6xl font-extrabold  mb-5 leading-tight">
              {title}
            </h2>

            <p className="inter-font text-2xl leading-relaxed tracking-wider  text-[#F5EBDD] max-w-lg lg:max-w-none mx-auto lg:mx-0 ">
              {story}
            </p>
          </div>

          <div className="aboutUsContentSection min-h-[100vh] flex flex-col justify-center ">
            <h1 className="text-6xl font-extrabold  mb-5 leading-tight">
              Come Visit Us!
            </h1>

            <h2 className="text-3xl font-extrabold mb-5 leading-tight">
              {visitUsLocation}
            </h2>


            <p className="inter-font text-2xl leading-relaxed tracking-wider  text-[#F5EBDD] max-w-lg lg:max-w-none mx-auto lg:mx-0 ">
              {visitUsMessage}
            </p>
          </div>

          <div className="aboutUsContentSection min-h-[100vh] flex flex-col justify-center ">
            <h1 className="text-6xl font-extrabold  mb-5 leading-tight">
              Drop By Anytime
            </h1>

            <h2 className="text-2xl font-extrabold  mb-5 leading-tight">
              {openingScheduleMessage}
            </h2>

            <p className="inter-font leading-relaxed tracking-wider text-2xl text-[#F5EBDD] max-w-lg lg:max-w-none mx-auto lg:mx-0 ">
              {dropByMessage}
            </p>
          </div>
        </div>
      </div>

      <div className="right h-[100vh] w-[40%] flex flex-col justify-center">
        <div className="aboutUsPhotos   w-[35vw] h-[30vw] relative overflow-hidden">
          <div className="aboutUsPhoto absolute w-full h-full rounded-2xl flex items-center justify-center  ">
            <img className="w-[60%] " src={coffeeStoryImage} alt="Cartoon SunFace Coffee" />
          </div>
          <div className="aboutUsPhoto absolute w-full h-full flex items-center justify-center ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.1837710650093!2d121.06913057539269!3d14.814940685697284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397af7b38eb31eb%3A0xcd2048a5aceed04f!2sStarmall%20-%20San%20Jose%20del%20Monte!5e0!3m2!1sen!2sph!4v1761207278116!5m2!1sen!2sph"
              width="600"
              height="450"
              loading="lazy"
              className="rounded-2xl"
            ></iframe>
          </div>
          <div className="aboutUsPhoto absolute w-full h-full flex items-center justify-center ">
            <img className="aboutUsImage h-[90%] w-[100%] rounded-2xl" src={coffeeShopPicture} alt="Barista Guy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
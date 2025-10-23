import React from "react";
import { aboutUsContent } from "../data/data";
import { heroContent } from "../data/data";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AboutUs = () => {
  const { coffeeA, coffeeC } = heroContent;
  const { title, story, location, visitUsMessage, gotQuestionMessage } =
    aboutUsContent;

  useGSAP(() => {
    // let aboutUsImageTween = gsap.fromTo(
    //   ".aboutUsImage",
    //   { scale: 0.9, rotate: -5 },
    //   { scale: 1.05, rotate: 25, ease: "none", paused: true }
    // );

    // ScrollTrigger.create({
    //   trigger: ".aboutUsImageSection",
    //   start: "top top",
    //   pin: ".aboutUsImage",
    //   scrub: true,
    //   markers: true,
    //   onUpdate: (self) => {
    //     aboutUsImageTween.progress(self.progress);
    //   },
    // });

    // ScrollTrigger.create({
    //   trigger: ".aboutUsImageSection",
    //   start: "top top",
    //   //   end: "+=50%", // only scroll for half the viewport height
    //   pin: ".aboutUsImage",
    //   scrub: true,
    //   markers: true,
    //   onUpdate: (self) => {
    //     aboutUsImageTween.progress(self.progress);
    //   },
    // });

    const details = gsap.utils.toArray(
      ".desktopContentSection:not(:first-child)"
    );
    const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");

    gsap.set(photos, { yPercent: 101 });

    const allPhotos = gsap.utils.toArray(".desktopPhoto");

    // create
    let mm = gsap.matchMedia();

    // add a media query. When it matches, the associated function will run
    mm.add("(min-width: 600px)", () => {
      // this setup code only runs when viewport is at least 600px wide
      console.log("desktop");

      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
      });

      //create scrolltrigger for each details section
      //trigger photo animation when headline of each details section
      //reaches 80% of window height
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
        // optional
        // custom cleanup code here (runs when it STOPS matching)
        console.log("mobile");
      };
    });
  });

  return (
    <div className="gallery">
      <div className="left">
        <div className="desktopContent">
          <div className="desktopContentSection">
            <h2 className="text-5xl md:text-6xl font-extrabold  mb-5 leading-tight">
              {title}
            </h2>

            <p className="inter-font text-xl leading-relaxed tracking-wider md:text-2xl text-[#F5EBDD] max-w-lg lg:max-w-none mx-auto lg:mx-0 ">
              {story}
            </p>
          </div>

          <div className="desktopContentSection">
            <h1 className="text-5xl md:text-6xl font-extrabold  mb-5 leading-tight">
              Come Visit Us!
            </h1>

            <p className="inter-font text-xl leading-relaxed tracking-wider md:text-2xl text-[#F5EBDD] max-w-lg lg:max-w-none mx-auto lg:mx-0 ">
              {visitUsMessage}
            </p>
          </div>

          <div className="desktopContentSection">
            <h1 className="text-5xl md:text-6xl font-extrabold  mb-5 leading-tight">
              Drop By Anytime
            </h1>

            <p className="inter-font text-xl leading-relaxed tracking-wider md:text-2xl text-[#F5EBDD] max-w-lg lg:max-w-none mx-auto lg:mx-0 ">
              {visitUsMessage}
            </p>
          </div>
          <div className="desktopContentSection">
            <h1>Blue</h1>
            <p>
              Blue is a color that is often associated with calmness, trust, and
              reliability. It is a peaceful and serene color that can evoke
              feelings of stability, security, and professionalism. In color
              psychology, blue is said to represent loyalty and trust, making it
              a popular choice for branding and marketing in the finance and
              technology industries.
            </p>
          </div>
        </div>
      </div>

      <div className="right">
        <div className="mobileContent">
          <div className="mobilePhoto red"></div>
          <h1>{title}</h1>
          <p>{story}</p>

          <div className="mobilePhoto green"></div>
          <h1>Green</h1>
          <p>
            Green is a color that is often associated with nature, growth, and
            harmony. It is a calming and relaxing color that can evoke feelings
            of balance, stability, and freshness. In color psychology, green is
            said to represent balance and stability, making it a popular choice
            for branding and marketing in the health and wellness industry.{" "}
          </p>

          <div className="mobilePhoto pink"></div>
          <h1>Pink</h1>
          <p>
            Pink is a color that is often associated with femininity, romance,
            and sweetness. It is a softer and more delicate shade of red that
            can evoke feelings of warmth, love, and nurturing. In the world of
            branding and marketing, pink is often used to target a female
            audience or to promote products that are associated with beauty,
            love, or romance.
          </p>

          <div className="mobilePhoto blue"></div>
          <h1>Blue</h1>
          <p>
            Blue is a color that is often associated with calmness, trust, and
            reliability. It is a peaceful and serene color that can evoke
            feelings of stability, security, and professionalism. In color
            psychology, blue is said to represent loyalty and trust, making it a
            popular choice for branding and marketing in the finance and
            technology industries.
          </p>
        </div>

        <div className="desktopPhotos">
          <div className="desktopPhoto red flex items-center justify-center ">
            <img src={coffeeA} alt="Coffee A" classNameName="aboutUsImage" />
          </div>
          <div className="desktopPhoto green flex items-center justify-center">
            <iframe
              className="rounded-4xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.1837710650093!2d121.06913057539269!3d14.814940685697284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397af7b38eb31eb%3A0xcd2048a5aceed04f!2sStarmall%20-%20San%20Jose%20del%20Monte!5e0!3m2!1sen!2sph!4v1761207278116!5m2!1sen!2sph"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
          <div className="desktopPhoto pink flex items-center justify-center">
            <img src={coffeeC} alt="Coffee C" classNameName="aboutUsImage" />
          </div>
          <div className="desktopPhoto blue"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

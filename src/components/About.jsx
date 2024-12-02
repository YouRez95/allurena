import aboutSkin from "../assets/about-1.webp";
import aboutBoiteTop from "../assets/about-boite-top.webp";
import aboutBoite from "../assets/about-boite.webp";
import aboutFounder1 from "../assets/about-founder.webp";
import aboutFounder2 from "../assets/about-founder2.webp";
import aboutVideoMp4 from "../assets/aboutVideo.mp4";
import aboutVideoWebm from "../assets/aboutVideo.webm";
import aboutHands from "../assets/about-hands.webp";
import { motion } from "motion/react";

export default function About() {
  const isWebmSupported = !!document
    .createElement("video")
    .canPlayType('video/webm; codecs="vp8, vorbis"');

  return (
    <section
      className="container my-20 mx-auto grid gap-20 overflow-hidden xl:overflow-visible"
      id="about"
    >
      <div className="flex flex-col lg:flex-row items-start justify-between max-w-[1000px]">
        <motion.p
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 1 }}
          className="uppercase"
        >
          about our <br /> company
        </motion.p>
        <motion.h2
          className="text-3xl mt-5 sm:text-6xl lg:mt-0 lg:text-[66px] leading-[40px] sm:leading-[80px]"
          initial={{ opacity: 0, translateY: 100 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 1 }}
        >
          Among our wide range <br />
          you’ll find solutions for <br />
          any skin problems.
        </motion.h2>
      </div>

      <div className="flex flex-col md:flex-row gap-20">
        <div className="flex-1 flex flex-col gap-24">
          <div className="flex items-center">
            <div className="max-w-[420px] max-h-[460px] overflow-hidden">
              <img
                src={aboutSkin}
                alt="skin picture"
                className="object-cover"
              />
            </div>
            <div className="bg-[#F8F8F8] relative group -translate-x-[50%] max-w-[50%] 2xl:w-[200px] max-h-[50%] rounded-full">
              <img src={aboutBoite} alt="" className="w-full h-full" />
              <img
                src={aboutBoiteTop}
                alt=""
                className="absolute top-0 transition-all duration-300 group-hover:rotate-45 origin-right-right group-hover:-translate-y-8"
              />
            </div>
          </div>

          <div className="flex gap-12">
            <div className="flex h-fit">
              {/* founder pictures */}
              <div className="flex flex-col group items-center">
                <div className="relative z-[1] w-14 h-14 rounded-full bg-[#d4d5d5] group-hover:bg-[#FBD1BD] overflow-hidden">
                  <img
                    src={aboutFounder1}
                    alt="founder picture"
                    className="w-full h-full object-cover mt-1 transition-all duration-150 ease-in-out scale-105 group-hover:mt-0  group-hover:scale-100"
                  />
                </div>
                <div className="text-sm -translate-y-8 transition-all duration-200 ease-in-out group-hover:translate-y-0 -rotate-45 group-hover:rotate-0">
                  <span className="inline-block rotate-6 text-[#A7B9B1]">
                    P
                  </span>
                  <span className="inline-block rotate-3 text-[#A7B9B1]">
                    i
                  </span>
                  <span className="inline-block rotate-0 text-[#A7B9B1]">
                    t
                  </span>
                  <span className="inline-block -rotate-3 text-[#A7B9B1]">
                    e
                  </span>
                  <span className="inline-block -rotate-6 text-[#A7B9B1]">
                    r
                  </span>
                </div>
              </div>
              <div className="flex flex-col relative z-[1] group items-center -translate-x-2">
                <div className="relative z-[1] w-14 h-14 rounded-full outline outline-[3px] outline-white bg-[#d4d5d5] group-hover:bg-[#FBD1BD] overflow-hidden">
                  <img
                    src={aboutFounder2}
                    alt="founder picture"
                    className="w-full h-full object-cover mt-1 transition-all duration-150 ease-in-out scale-105 group-hover:mt-0  group-hover:scale-100"
                  />
                </div>
                <div className="text-sm -translate-y-8 transition-all duration-200 ease-in-out group-hover:translate-y-0 -rotate-45 group-hover:rotate-0">
                  <span className="inline-block rotate-6 text-[#A7B9B1]">
                    A
                  </span>
                  <span className="inline-block rotate-3 text-[#A7B9B1]">
                    n
                  </span>
                  <span className="inline-block -rotate-3 text-[#A7B9B1]">
                    n
                  </span>
                  <span className="inline-block -rotate-6 text-[#A7B9B1]">
                    a
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              {/* about founders */}
              <span className="uppercase text-[15px]">
                Founders of the brand
              </span>
              <p className="text-[13px] font-light leading-4 text-[#787b7d] max-w-60">
                Alex and Olga's many years of experience allows them to proudly
                offer consumers the most modern care products
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-between gap-36">
          <p className="uppercase max-w-[420px]">
            Enhance the natural beauty of your skin every day with Allurena
            products. Choose according to the needs of your skin, age and time
            of use from the range of cleaners, treatments and other products.
          </p>

          <div className="relative flex max-w-64 bg-blend-screen">
            <img
              src={aboutHands}
              alt="hands picture"
              className="contrast-[90%]"
            />
            <video
              className="scale-150 translate-x-16 mb-11"
              loop
              autoPlay
              muted
            >
              <source
                src={isWebmSupported ? aboutVideoWebm : aboutVideoMp4}
                type={isWebmSupported ? "video/webm" : "video/mp4"}
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

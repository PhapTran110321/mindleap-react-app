import React, { useState } from "react";
import thumbnailImg from "../assets/video-thumbnail.webp";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { fadeIn } from "../utilis/animationVariants";
import { motion } from "framer-motion";
const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
  };

  return (
    <div className="bg-[#f7f8fc] pt-20 pb-16" id="about">
      <div className="container mx-auto">
        <div className="mx-auto py-12 px-4 md:w-4/5 flex flex-col md:flex-row items-center gap-8">
          {/* LEFT SIDE */}
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="w-full w-1/2 mb-8 md:mb-0"
          >
            {!isVideoPlaying ? (
              <div className="relative">
                <img
                  src={thumbnailImg}
                  alt=""
                  className="w-full md:h-[446px] h-auto rounded-lg object-cover"
                />

                <button
                  onClick={handleVideoPlay}
                  className="p-3 bg-primary rounded-full absolute top-1/2
                 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  {/* Play Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 5.236L14 10 8 14.764V5.236zM6 4a1 1 0 011.447-.895l10 5a1 1 0 010 1.79l-10 5A1 1 0 016 16V4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            ) : null}
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="w-1/2 w-full"
          >
            <h3 className="text-3xl  font-secondary mb-4 font-bold">
              Indivudual Consult And Therapy
            </h3>
            <p className="text-lg mb-8">
              Dcta sunt explicabo. Nemo enim ipsam voluptetem quia voluptas sit
              aspernatur aut odit aut fugit sed quia. Lorem Ipsum is sumply
              dummy text.
            </p>
            <button className="py-3.5 px-8 bg-primary text-white rounded-lg hover:bg-primary/90 flex gap-2 items-center">
              <span>Get Started</span>
              <IoArrowForwardCircleSharp className="size-6" />
            </button>
          </motion.div>
        </div>
      </div>
      {/* PLAYING VIDEO */}{" "}
      {isVideoPlaying && (
        <div
          onClick={handleCloseVideo}
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
        >
          <div className="relattive w-full h-full flex justify-center items-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/8JgDybnESLw?autoplay=1"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="rounded-lg"
            ></iframe>
            <button
              onClick={handleCloseVideo}
              className="absolute text-white top-4 right-4 text-3xl cursor-pointer"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;

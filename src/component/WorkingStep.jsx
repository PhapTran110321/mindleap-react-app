import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants";
const WorkingStep = () => {
  return (
    <div className="relative bg-working-img bg-center bg-cover py-12">
      <div className="absolute bg-heroBg inset-0 bg-opacity-90"></div>
      <div className="relative container mx-auto py-20">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-white mb-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="md:w-1/2 mx-auto">
            Lorem ipsum dolor sit amet, consecctetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </motion.div>
        {/*======*/}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col md:w-4/5 mx-auto md:flex-row gap-8"
        >
          {/* STEP-1 */}
          <div className="relative bg-white text-center p-6 rounded-lg flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-14 bg-primary text-white flex items-center justify-center rounded-full text-xl font-bold ">
              1
            </div>
            <h3 className="text-lg font-medium mt-8">Fill a Form</h3>
            <p className="my-2">
              Step 1 description goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
          {/* STEP-2 */}

          <div className="relative bg-white text-center p-6 rounded-lg flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-14 bg-primary text-white flex items-center justify-center rounded-full text-xl font-bold ">
              1
            </div>
            <h3 className="text-lg font-medium mt-8">Fill a Form</h3>
            <p className="my-2">
              Step 1 description goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
          {/* STEP-3 */}

          <div className="relative bg-white text-center p-6 rounded-lg flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-14 bg-primary text-white flex items-center justify-center rounded-full text-xl font-bold ">
              1
            </div>
            <h3 className="text-lg font-medium mt-8">Fill a Form</h3>
            <p className="my-2">
              Step 1 description goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkingStep;

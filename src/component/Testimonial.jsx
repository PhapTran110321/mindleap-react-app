import { image } from "framer-motion/client";
import React from "react";
import review1 from "../assets/review1.webp";
import review2 from "../assets/review2.webp";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants";
const testimonials = [
  {
    name: "Jane Doe",
    location: "New York, NY",
    review:
      "This service has been life-changing for me. The mental wellness resources and personalized support have made a huge difference in my daily life. Highly recommentded!",
    image: review1,
  },
  {
    name: "John Smith",
    location: "Los Angeles, CA",
    review:
      "Ive tried many wellness programs, but this one stands out. The expert webinars and one-on-one coaching have been incredibly valuable. I feel more balanced and focused than ever before.",
    image: review2,
  },
];

const Testimonial = () => {
  return (
    <div className="bg-[#f7f8fc] py-12" id="testimonial">
      <div className="container mx-auto px-8 pt-20 pb-12">
        {/* HEADER SECTION */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-3">What Our Clients Say</h2>
          <p className="md:w-1/2 mx-auto text-lg">
            Hear From some of outr satisfied clients about how our services have
            positively impacted their lives and well-being
          </p>
        </motion.div>

        {/* CONTAINER */}
        <div className="flex flex-col md:w-4/5 mx-auto md:flex-row md:gap-12 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              key={index}
              className="bg-white rounded-lg shadow-lg relative p-6 "
            >
              <div
                className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2
               "
              >
                <BsFillChatQuoteFill className="w-12 h-12 text-primary" />{" "}
              </div>
              <div className="flex flex-col space-y-3">
                <p className="text-lg mb-2">{testimonial.review}</p>
                <div className="flex gap-1">
                  <img
                    src={testimonial.image}
                    alt=""
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

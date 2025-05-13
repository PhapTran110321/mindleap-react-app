import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants";
const packages = [
  {
    name: "Bronze Package",
    price: "$99",
    description:
      "Ideal for individuals or small businesses looking to get started with mental wellness.",
    features: [
      "Access to basic wellness resources",
      "Weekly mental wellness tips",
      "Community support group access",
    ],
  },
  {
    name: "Silver Package",
    price: "$199",
    description:
      "A great choice for growing businesses with additional features and support for mental wellness.",
    features: [
      "All Bronze Package features",
      "Monthly guided meditation sessions",
      "Personalized wellness plan",
      "Access to expert webinars",
    ],
  },
  {
    name: "Gold Package",
    price: "$299",
    description:
      "Perfect for larger businesses needing advanced mental wellness features and premium support.",
    features: [
      "All Silver Package features",
      "Weekly one-on-one coaching sessions",
      "Advanced mental wellness tracking tools",
      "24/7 access to mental wellness experts",
    ],
  },
];
const Priicing = () => {
  const handleScrollToContact = () => {
    const targetElement = document.getElementById("contact");
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="bg-[#f7f8fc] pt-32" id="pricing">
      <div className="container mx-auto px-8">
        {/* HEADER SECTION */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-3">
            Perfect for Small & Large{" "}
          </h2>
          <p className="text-lg mb-12 md:w-3/5 mx-auto">
            Explore our mental wellness packages designed to support individuals
            and businesses in fostering a healthier mindset
          </p>
        </motion.div>

        {/* CONTAINER */}
        <div className="flex flex-col md:flex-row mx-auto gap-8 md:w-5/6">
          {packages.map((pkg, index) => (
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg "
            >
              <h3 className="text-2xl font-semibold mb-4">{pkg.name}</h3>
              <hr className="w-24 border border-primary text-primary" />
              <p className="text-3xl font-bold mb-4 mt-1">
                {pkg.price}
                <span className="text-lg font-normal">/mo</span>
              </p>
              <p className="text-lg mb-4">{pkg.description}</p>

              <ul className="space-y-2 mb-4">
                {pkg.features.map((features, idx) => (
                  <li className="list-disc list-inside " key={idx}>
                    {features}
                  </li>
                ))}
              </ul>
              <button className="px-4 py-2 rounded-md bg-primary text-white">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Priicing;

import SubHead from "../Atoms/subhead";
import Paragraph from "../Atoms/paragraph";
import { motion } from "framer-motion";

export default function Banner() {
  const bannerContainer = {
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
    hidden: { opacity: 0, y: 100 },
  };

  const bannerImage = {
    visible: { y: 0, opacity: 1, transition: { duration: 1, delay: 0.5, ease: "easeInOut" } },
    hidden: { y: 200, opacity: 0 },
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-800">
      <div className="container mx-auto max-w-[1344px]">
        <div className="flex px-5 py-12 md:py-20 lg:py-24 flex-col gap-8 sm:gap-10 md:gap-16 md:pb-0 lg:gap-20 lg:px-10 lg:pt-16 overflow-hidden">
          <motion.section
            initial="hidden"
            animate="visible"
            variants={bannerContainer}
            viewport={{ once: true }}
            className="text-center space-y-8 flex flex-col items-center"
          >
            <SubHead color="text-white" style="sm:w-4/5 md:w-3/5 lg:w-2/3">
              Transform Your Ecommerce Management Experience.
            </SubHead>
            <Paragraph
              color="text-white/70"
              style="sm:w-11/12 md:w-3/4 lg:w-2/3"
            >
              Empower your online business with our cutting-edge tools and seamless
              integration, giving you the power to efficiently manage your store across
              various devices.
            </Paragraph>
          </motion.section>
          <div className="w-full flex justify-center">
            <motion.img
              initial="hidden"
              animate="visible"
              variants={bannerImage}
              className="w-full h-auto object-cover rounded-lg shadow-xl"
              src="/shopify-main.png"
              alt="shopify"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

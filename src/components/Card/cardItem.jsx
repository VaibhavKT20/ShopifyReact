import { motion } from "framer-motion";
import { Button } from "../Atoms/button";
import Paragraph from "../Atoms/paragraph";
import SubHead from "../Atoms/subhead";
import Subtitle from "../Atoms/subtitle";
import CardImage from "./cardImages";

export default function CardItem({
  subtitle,
  subhead,
  paragraph,
  primary,
}) {
  const cardContent = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex flex-col gap-8 md:flex-row items-center">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={cardContent}
        className={`${primary ? "md:order-2" : "md:order-1"} w-full max-w-[600px] text-center md:text-left`}
      >
        <Subtitle style="text-[14px] font-bold text-gray-600 mb-2.5">
          {subtitle}
        </Subtitle>
        <SubHead style="text-2xl font-bold mb-4 md:w-full lg:w-4/5">
          {subhead}
        </SubHead>
        <Paragraph style="text-gray-700 mb-6 md:w-4/5 lg:w-4/5">
          {paragraph}
        </Paragraph>
        <Button style="bg-primary-100 text-white hover:bg-primary-200">
          Buy Now
        </Button>
      </motion.section>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={cardContent}
        className={`${
          primary ? "md:order-1" : "md:order-2"
        } w-full md:w-2/3 lg:w-1/2 flex justify-center`}
      >
        <CardImage primary={primary} />
      </motion.div>
    </div>
  );
}

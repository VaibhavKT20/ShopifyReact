import SubHead from "../Atoms/subhead";
import Subtitle from "../Atoms/subtitle";
import Paragraph from "../Atoms/paragraph";
import FeatureItem from "./featureItem";
import { motion } from "framer-motion";

export default function Features() {
  const dataFeatures = [
    {
      id: 1,
      title: "Unlimited Possibilities",
      logo: "/feature-1.svg",
      content:
        "Explore a world of possibilities with our platform, offering endless customization options for your online store.",
    },
    {
      id: 2,
      title: "Data Ownership",
      logo: "/feature-2.svg",
      content:
        "Own and control your valuable data, ensuring the privacy and security of your business information.",
    },
    {
      id: 3,
      title: "Free Lifetime Updates",
      logo: "/feature-3.svg",
      content:
        "Enjoy a seamless experience with free lifetime updates, keeping your store equipped with the latest features.",
    },
    {
      id: 4,
      title: "Mobile-Optimized Design",
      logo: "/feature-4.svg",
      content:
        "Engage your customers on the go with our mobile-first design, providing a smooth and responsive experience.",
    },
    {
      id: 5,
      title: "Fully Customizable",
      logo: "/feature-5.svg",
      content:
        "Tailor your storefront and beyond. With 100% customization, your brand identity shines through.",
    },
    {
      id: 6,
      title: "Effortless Management",
      logo: "/feature-6.svg",
      content:
        "Streamline your tasks effortlessly, ensuring a smooth operation with our expert tech support.",
    },
  ];

  const content = {
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
    hidden: { y: -100, opacity: 0 },
  };

  return (
    <div className="container mx-auto max-w-[1344px]">
      <div className="px-5 py-16 flex flex-col gap-10 sm:pb-28 sm:px-10 md:pb-36">
        {/* Head Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={content}
          className="text-center flex flex-col items-center"
        >
          <Subtitle style="mb-2">360° CUSTOMIZABLE</Subtitle>
          <SubHead style="mb-[18px] sm:w-8/12 md:w-9/12 lg:w-7/12">
            Unlock Unlimited Possibilities
          </SubHead>
          <Paragraph
            fontSize="text-sm"
            color="text-black-400"
            style="sm:w-3/5 md:w-7/12 lg:w-1/3"
          >
            Discover endless possibilities and take control of your eCommerce business with our versatile platform.
          </Paragraph>
        </motion.div>

        {/* Feature Items */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 overflow-hidden">
          {dataFeatures?.map((feature, index) => (
            <FeatureItem key={feature.id} feature={feature} i={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

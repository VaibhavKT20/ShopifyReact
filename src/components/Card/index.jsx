import CardItem from "./cardItem";
import { motion } from "framer-motion";

export default function Card() {
  const container = {
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="container mx-auto max-w-[1344px]"
    >
      <div className="flex flex-col px-5 py-20 gap-20 sm:px-10 overflow-hidden lg:gap-40">
        <CardItem
          subtitle="PWA READY STOREFRONT"
          subhead="Own everything forever with a single payment."
          paragraph="Build your dream business. Never worry about paying monthly fees or recurring payments again."
          img="/card-1.png"
          primary={true}
        />
        <CardItem
          subtitle="PAY ONCE, USE LIFETIME"
          subhead="Getting your products sold on the easy."
          paragraph="Sell your products online, and turn your social media accounts into marketing channels."
          img="/card-2.png"
          primary={false}
        />
      </div>
    </motion.div>
  );
}

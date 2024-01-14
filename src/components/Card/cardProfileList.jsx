import { motion } from "framer-motion";

export default function CardProfileList({ profile }) {
  const cardProfile = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hidden: { opacity: 0, y: 20 * profile.id },
  };

  return (
    <motion.div
      variants={cardProfile}
      key={profile.id}
      className="flex items-center justify-between py-3 border-b border-[#E5E5E5]"
    >
      <div className="flex items-center gap-4">
        <div>
          <img
            className="w-12 h-12 object-cover rounded-full"
            src={profile.avatar}
            alt="profile"
          />
        </div>
        <div>
          <h5 className="text-sm font-medium text-gray-800">{profile.name}</h5>
          <p className="text-xs text-gray-500">{profile.phone}</p>
        </div>
      </div>
      <p className="text-sm font-medium text-gray-800">{profile.amount}</p>
    </motion.div>
  );
}

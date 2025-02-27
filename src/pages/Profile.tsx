import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const ProfilePage = () => {
  return (
    <div>
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <Typography pl={3} variant="h1">
          Profile
        </Typography>
      </motion.div>
    </div>
  );
};

export default ProfilePage;

import { motion } from "framer-motion";
import SelectMenu from "../components/framer-select/select";

const SelectPage = () => {
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
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <SelectMenu />
      </motion.div>
    </div>
  );
};

export default SelectPage;

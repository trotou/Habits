import { motion } from "framer-motion";
import Trail from "../../components/Trail";
import MenuBar from "../../components/MenuBar";
import { animationWrapperStyle } from "../../styles/globalStyles";
const TrailPage = () => {
  return (
    <motion.div
      style={animationWrapperStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <MenuBar />
      <Trail />
    </motion.div>
  );
};

export default TrailPage;

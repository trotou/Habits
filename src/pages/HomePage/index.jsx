import { motion } from "framer-motion";
import { animationWrapperStyle } from "../../styles/globalStyles";
import MenuBar from "../../components/MenuBar";
import HighlightCardDemo from "../../components/CardHome";

const HomePage = () => {
  return (
    <motion.div
      style={animationWrapperStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <MenuBar />
      <HighlightCardDemo />;
    </motion.div>
  );
};

export default HomePage;

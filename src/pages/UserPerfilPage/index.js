import UserPerfil from "../../components/UserPerfil";
import { motion } from "framer-motion";
import { animationWrapperStyle } from "../../styles/globalStyles";

const UserPerfilPage = () => {
  return (
    <motion.div
      style={animationWrapperStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <UserPerfil />
    </motion.div>
  );
};

export default UserPerfilPage;

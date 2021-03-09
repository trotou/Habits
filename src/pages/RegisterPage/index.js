import Register from "../../components/Register";
import { motion } from "framer-motion";

const RegisterPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Register />
    </motion.div>
  );
};

export default RegisterPage;

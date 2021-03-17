import LoginForm from "../../components/LoginForm";
import { loginCardStyle } from "./style";
import { Card } from "@material-ui/core";
import D2DLogo from "../../styles/D2DLogo";
import { motion } from "framer-motion";
import { animationWrapperStyle } from "../../styles/globalStyles";

const LoginPage = () => {
  return (
    <motion.div
      style={animationWrapperStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Card style={loginCardStyle} raised={true}>
        <D2DLogo />
        <LoginForm />
      </Card>
    </motion.div>
  );
};

export default LoginPage;

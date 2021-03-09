import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import * as yup from "yup";
import api from "../../Services";
import { Button, TextField } from "@material-ui/core";
import { CardRegister, TagP } from "./styles";

const Register = () => {
  const history = useHistory();
  const [errMsg, setErrMsg] = useState(false);

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup
      .string("deve ser string")
      .min(6, "Mínimo de 6 dígitos")
      .required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleMsgErr = () => {
    setErrMsg(true);
  };

  const handleForm = (data) => {
    api
      .post("/users/", data)
      .then(() => {
        reset();
        history.push("/");
      })
      .catch(function (e) {
        if (e.response.status === 400) {
          handleMsgErr();
        }
      });
  };

  return (
    <div>
      <CardRegister>
        <h3>Register</h3>
        <TextField
          margin="normal"
          variant="filled"
          label="Username"
          name="username"
          size="small"
          color="primary"
          inputRef={register}
          error={!!errors.username}
          helperText={errors.username?.message}
        />
        <TextField
          type="password"
          margin="normal"
          variant="filled"
          label="Senha"
          name="password"
          size="small"
          color="primary"
          inputRef={register}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <TextField
          margin="normal"
          variant="filled"
          label="Email"
          name="email"
          size="small"
          color="primary"
          inputRef={register}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit(handleForm)}
          >
            Enviar
          </Button>
        </div>
        {errMsg && <TagP>Usuário já cadastrado</TagP>}
      </CardRegister>
    </div>
  );
};
export default Register;

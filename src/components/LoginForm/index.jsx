import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { SpanError, textAreaStyle, buttonStyle, CardLogin } from "./styled";
import { useProviderUser } from '../../Providers/User'

const LoginForm = () => {

  const { login } = useProviderUser()

  const [error, setError] = useState(false);
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string().required("campo obrigatório!"),
    password: yup
      .string()
      .min(6, "mínimo de 6 caracteres")
      .required("campo obrigatório!"),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (userData) => {

    login(userData, setError, history, reset)

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={CardLogin}>
      <div>
        <TextField
          style={textAreaStyle}
          margin="normal"
          variant="outlined"
          label="Usuário"
          name="username"
          size="small"
          color="primary"
          inputRef={register}
          error={!!errors.userName}
          helperText={errors.userName?.message}
        />
      </div>
      <div>
        <TextField
          style={textAreaStyle}
          margin="normal"
          variant="outlined"
          label="Senha"
          name="password"
          type="password"
          size="small"
          color="primary"
          inputRef={register}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
      </div>
      <div style={{ paddingTop: "15px" }}>
        <Button type="submit" variant="contained" style={buttonStyle}>
          Entrar
        </Button>
      </div>
      <div>
        <Button onClick={() => history.push("/register")} color="primary">
          Cadastre-se
        </Button>
      </div>
      {error && <SpanError> Usuário ou senha incorretas! </SpanError>}
    </form>
  );
};

export default LoginForm;

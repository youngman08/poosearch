import { Visibility, VisibilityOff } from "@material-ui/icons";
import EmailIcon from "@mui/icons-material/Email";
import HttpsIcon from "@mui/icons-material/Https";
import { Button, IconButton, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AppContext } from "../components/contex";
import { LoginApi } from "./api-tasks";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const { showSnackbar, handleOpenLostP } = useContext(AppContext);
  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleLogin = async (val) => {
    console.log(val);
    try {
      await LoginApi(val);
      showSnackbar("Login successful!", "success");
    } catch (error) {
      showSnackbar("Login failed. Please try again later.", "error");
      console.error(error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="column margin-se-1 margin-tb-2 xitems-center"
      style={{ width: "550px" }}
    >
      <TextField
        label="Email"
        variant="outlined"
        className="input-blogin margin-tb-2"
        placeholder="Email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Invalid email address",
          },
        })}
        style={{ width: "80%" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Password"
        variant="outlined"
        className="input-blogin margin-tb-2"
        placeholder="Password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: /^.{8,}$/,
            message: "Password must have at least 8 characters",
          },
        })}
        style={{ width: "80%", borderColor: "red" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <HttpsIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <IconButton onClick={handleShowPassword} edge="end">
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          ),
        }}
        type={showPassword ? "text" : "password"}
        error={!!errors.password}
        helperText={errors.password?.message}
      />

      <Link
        to="#"
        id="SigninInDayMood"
        className="passLink "
        onClick={handleOpenLostP}
      >
        Lost your password
      </Link>
      <Button
        type="submit"
        variant="contained"
        style={{
          width: "50%",
          background: "#001530",
          color: "white",
          hoverBackground: "#001530",
          margin: "1em 0em",
        }}
      >
        Login
      </Button>
    </form>
  );
};

export default Login;

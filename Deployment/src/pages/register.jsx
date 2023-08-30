import { Visibility, VisibilityOff } from "@material-ui/icons";
import EmailIcon from "@mui/icons-material/Email";
import HttpsIcon from "@mui/icons-material/Https";
import KeyIcon from "@mui/icons-material/Key";
import PersonIcon from "@mui/icons-material/Person";
import { Button, IconButton, TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../components/contex";
import { RegisterApi } from "./api-tasks";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { showSnackbar } = useContext(AppContext);

  const handleConfirmPassword = (event) => {
    const confirmedPassword = event.target.value;
    setConfirmPassword(confirmedPassword);

    if (confirmedPassword === "") {
      setPasswordError("");
    } else if (confirmedPassword !== password) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleShowCPassword = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
  };

  const handleRegister = async (val) => {
    try {
      await RegisterApi(val);
      showSnackbar("Registration successful!", "success");
    } catch (error) {
      showSnackbar("Registration failed. Please try again later.", "error");
      console.error(error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
      className="column margin-se-1 margin-tb-2 xitems-center"
      style={{ width: "550px" }}
    >
      <TextField
        label="First Name"
        variant="outlined"
        className="input-blogin margin-tb-1"
        placeholder="firstname"
        {...register("firstname")}
        style={{ width: "80%" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <PersonIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Last Name"
        variant="outlined"
        className="input-blogin margin-tb-1"
        placeholder="lastname"
        {...register("lastname")}
        style={{ width: "80%" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <PersonIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Email"
        variant="outlined"
        placeholder="Email"
        className="input-blogin margin-tb-1"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Invalid email address",
          },
          onChange: (e) => {
            e.target.checkValidity();
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
        error={errors.email}
        helperText={errors.email?.message}
      />
        {errors.email && <p>{errors.email.message}</p>}
      <TextField
        label="Password"
        variant="outlined"
        className="input-blogin margin-tb-1"
        placeholder="Enter Password"
        {...register("password", {
          required: true,
          pattern: {
            value: /^.{8,}$/,
            message: "Password must be at least 8 characters long.",
          },
        })}
        style={{ width: "80%" }}
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
      <TextField
        label="Confirm Password"
        variant="outlined"
        className="input-blogin margin-tb-1"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={handleConfirmPassword}
        style={{ width: "80%" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <KeyIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <IconButton onClick={handleShowCPassword} edge="end">
              {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          ),
        }}
        type={showConfirmPassword ? "text" : "password"}
        error={passwordError !== ""}
        helperText={passwordError}
      />
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      <FormControlLabel
        control={<Checkbox />}
        label="Using the website, you accept the terms and conditions"
      />
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
        Register
      </Button>
    </form>
  );
};

export default Register;

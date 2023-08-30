import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Dialog, DialogTitle, Tab, Tabs } from "@mui/material";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../components/contex";
import { LoginApi, RegisterApi } from "./api-tasks";
import Login from "./login";
import Register from "./register";
import LostPasswordDialog from "./resetPass";
const LoginRegDialog = () => {
  const [value, setValue] = useState(0);
  const { open, handleOpenLogin, handleOpenLostP, handleClose } =
    useContext(AppContext);
    
  // const [dialogType, setDialogType] = useState(null);
  const { register, handleSubmit } = useForm();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const LoginR = (data) => {
    console.log(data);
    LoginApi(data);
  };


  // const handleCloseT = () => {
  //   setDialogType(null);
  // };

  // const handleOpenLostPassword = () => {
  //   setDialogType('lostPassword');
  // };

  return (
    <span>
      {open === "login" && (
        <Dialog open={open === "login"} onClose={handleClose}>
          <DialogTitle className="text-center">
            {value === 0 ? "Login" : "Register"}
          </DialogTitle>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            className="margin-b-1 xitems-center"
          >
            <Tab
              className="row"
              label={
                <div className="row xitems-center">
                  <PersonIcon /> Login
                </div>
              }
            />
            <Tab
              className="row"
              label={
                <div className="row xitems-center">
                  <PersonAddIcon /> Register
                </div>
              }
            />
          </Tabs>
          {value === 0 ? (
            <Login
              handleSubmit={handleSubmit}
              register={register}
              LoginR={LoginR}
              onLostPassword={handleOpenLostP}
            />
          ) : (
            <Register
            />
          )}
        </Dialog>
      )}
      {open === "lostPassword" && (
        <LostPasswordDialog open={true} onClose={handleClose} />
      )}
    </span>
  );
};

export default LoginRegDialog;

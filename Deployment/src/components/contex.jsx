import { Alert, Snackbar } from "@mui/material";
import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [open, setOpen] = useState(null);
  const [openSnack, setOpenSnack] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('info');

  const handleOpenLogin = () => {
    setOpen(`login`);
    console.log("login opened");
  };

  const handleOpenLostP = () => {
    setOpen(`lostPassword`);
    console.log("lost pass");
  };

  const showSnackbar = (message, severity = 'info') => {
    setMessage(message);
    setSeverity(severity);
    setOpenSnack(true);
  };

  const hideSnackbar = () => {
    setOpenSnack(false);
  };

  const handleClose = () => setOpen(null);
  //   const anotherFunction = () => {/* Whatever this function does */}

  return (
    <AppContext.Provider
      value={{ open, handleOpenLogin, handleOpenLostP, handleClose ,showSnackbar,hideSnackbar}}
    >
      {props.children}
      {openSnack && (
        <Snackbar open={openSnack} autoHideDuration={6000} onClose={hideSnackbar}>
          <Alert onClose={hideSnackbar} severity={severity}>
            {message}
          </Alert>
        </Snackbar>
      )}
    </AppContext.Provider>
  );
};

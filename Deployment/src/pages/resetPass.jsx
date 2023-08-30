import EmailIcon from "@mui/icons-material/Email";
import { Button, Dialog, DialogTitle, InputAdornment, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { LostPassApi } from "./api-tasks";
import { useContext } from "react";
import { AppContext } from "../components/contex";
const LostPasswordDialog = ({ open, onClose }) => {
  const { register, handleSubmit } = useForm();
  const { showSnackbar } = useContext(AppContext);

  const handleLostPass = async (val) => {
    console.log(val);
    try {
      await LostPassApi(val);
      showSnackbar('Password send successfully!', 'success');
    } catch (error) {
      showSnackbar('Reset Pass failed. Please try again later.', 'error');
      console.error(error);
    }
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle className="text-center ">Lost your password</DialogTitle>

      <form
        className="input-group-register xitems-center lcontent-centet text-center"
        onSubmit={handleSubmit(handleLostPass)}
        style={{ width: "550px" }}
      >
        <div className="Icon-inside form-element">
          <TextField
            label="Email"
            variant="outlined"
            required
            className="input-blogin margin-tb-1"
            placeholder="Email"
            {...register("email")}
            style={{ width: "80%" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <i className="fa fa-envelope"></i>
        </div>
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
          Send Email
        </Button>
      </form>
    </Dialog>
  );
};

export default LostPasswordDialog;

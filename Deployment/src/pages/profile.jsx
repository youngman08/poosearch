import { PowerSettingsNew } from "@mui/icons-material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EditNoteIcon from "@mui/icons-material/EditNote";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import SaveIcon from "@mui/icons-material/Save";
import SmsIcon from "@mui/icons-material/Sms";
import {
  Avatar,
  Button,
  Container,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../components/contex";
import { RegisterApi } from "./api-tasks";
function UserProfile() {
  const [imageSrc, setImageSrc] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageSrc(URL.createObjectURL(file));
  };
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
  const location = useLocation();
  const currentPath = location.pathname;

  const getButtonStyle = (path) => {
    return currentPath === path ? "butten-selected" : "dash-buttons";
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
    <Container style={{ backgroundColor: "rgb(231, 230, 230)" }}>
      <span
        style={{
          background: "rgba(10, 30, 55)",
          fontStyle: "italic",
          height: "50px",
        }}
        className="info-contact block relative"
      >
        <span
          variant="h3"
          style={{
            textAlign: "left",
            fontStyle: "italic",
          }}
          className="content padding-a-2 margin-e-2 color-white"
        >
          My profile
        </span>
      </span>
      <span className="row lcontent-between">
        <span
          style={{
            border: "1px solid rgb(30, 10, 55)",
            spanShadow:
              "0px 0px 0px 2px rgb(19 19 19 / 53%), 0 3px 13px 9px rgb(19 19 19 / 53%)",
            borderRadius: "16px",
            flexGrow: "1",
          }}
          className="profile-links block column text-center margin-a-4 padding-tb-4 back-white"
        >
          <span>
            {imageSrc ? (
              <img
                src={imageSrc}
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                }}
                alt=""
                className="margin-b-2 inline-block"
              />
            ) : (
              <Avatar>
                {"Tom".charAt(0)}
                {"Paterson".charAt(0)}
              </Avatar>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
              id="upload-button"
            />
          </span>
          <h3 style={{ fontStyle: "italic" }}>Tom Paterson</h3>

          <Button
            component={Link}
            to="/my-profile"
            className={`${getButtonStyle("/myprofile ")} `}
            type="submit"
            variant="contained"
          >
            <PersonIcon />
            My Profile
          </Button>
          <Button
            className={`${getButtonStyle("/dashboard")} `}
            type="submit"
            variant="contained"
          >
            <DashboardIcon />
            Dashboard
          </Button>
          <Button className="dash-buttons" type="submit" variant="contained">
            <SaveIcon />
            Save pattents
          </Button>
          <Button
            className="dash-buttons"
            type="submit"
            variant="contained"
            style={{
              background: "#001530",
              color: "white",
              margin: "1em 0em",
            }}
          >
            <BookmarkIcon />
            Saved search results
          </Button>
          <Button
            className="dash-buttons"
            type="submit"
            variant="contained"
            style={{
              background: "white",
              color: "#001530",
              margin: "1em 0em",
            }}
          >
            <SmsIcon />
            Messages
          </Button>
          <Button
            className="dash-buttons"
            type="submit"
            variant="contained"
            style={{
              background: "#001530",
              color: "white",
              margin: "1em 0em",
            }}
          >
            <EditNoteIcon />
            Properties
          </Button>
          <Button
            className="dash-buttons"
            type="submit"
            variant="contained"
            style={{
              background: "#001530",
              color: "white",
              margin: "1em 0em",
            }}
          >
            <ChangeCircleIcon />
            Change password
          </Button>
          <Button
            className=""
            type="submit"
            variant="contained"
            style={{
              background: "#001530",
              color: "white",
              margin: "1em 0em",
              justifyContent: "center",
            }}
          >
            <PowerSettingsNew />
          </Button>
        </span>
        <span style={{ flexGrow: 1 }}>
          <span className="col-12 col-md-7 back-white profile-container">
            <form
              onSubmit={handleSubmit(handleRegister)}
              className="column margin-a-4 margin-tb-2 xitems-center padding-a-4 back-white"
              style={{
                border: "1px solid rgb(30, 10, 55)",
                spanShadow:
                  "0px 0px 0px 2px rgb(19 19 19 / 53%), 0 3px 13px 9px rgb(19 19 19 / 53%)",
                borderRadius: "16px",
                fontStyle: "italic",
                width: "550px",
              }}
            >
              <span className="title-profile-span">
                <h3 className="my-3">My Accounts</h3>
              </span>
              <span className="row margin-tb-2 lcontent-around">
                <TextField
                  label="Name"
                  variant="outlined"
                  className="input-blogin"
                  placeholder="Name"
                  {...register("name")}
                  style={{ width: "40%" }}
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
                  className="input-blogin margin-a-4"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  style={{ width: "40%" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="end">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </span>
              <span className="row margin-tb-2 lcontent-around">
                <TextField
                  label="Your Title"
                  variant="outlined"
                  className="input-blogin"
                  placeholder="Title"
                  {...register("Title")}
                  style={{ width: "40%" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="end">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="phone"
                  variant="outlined"
                  className="input-blogin"
                  placeholder="Phone"
                  {...register("phone")}
                  style={{ width: "40%" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="end">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </span>
              <span className="row margin-tb-2 lcontent-around">
                <TextField
                  label="enterprise"
                  variant="outlined"
                  className="input-blogin"
                  placeholder="enterprise"
                  {...register("Enterprise")}
                  style={{ width: "40%" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="end">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="level of education"
                  variant="outlined"
                  className="input-blogin"
                  placeholder="education"
                  {...register("Education")}
                  style={{ width: "40%" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="end">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </span>
              <TextField
                label="Favorites"
                variant="outlined"
                className="input-blogin margin-tb-1 grow"
                placeholder="Favorites"
                {...register("favorites")}
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
                label="About"
                variant="outlined"
                className="input-blogin margin-tb-1 grow"
                placeholder="About"
                {...register("about")}
                style={{ width: "80%" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="end">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <span className="row margin-tb-2 lcontent-around">
                <TextField
                  label="Facebook"
                  variant="outlined"
                  className="input-blogin"
                  placeholder="Facebook"
                  {...register("name")}
                  style={{ width: "40%" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="end">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  label="Twitter"
                  variant="outlined"
                  className="input-blogin"
                  placeholder="Twitter"
                  {...register("Twitter")}
                  style={{ width: "40%" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="end">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </span>
              <span className="row margin-tb-2 lcontent-around">
                <TextField
                  label="Google plus"
                  variant="outlined"
                  className="input-blogin"
                  placeholder="Google plus"
                  {...register("googlePlus")}
                  style={{ width: "40%" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="end">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  label="linkedin"
                  variant="outlined"
                  className="input-blogin"
                  placeholder="linkedin"
                  {...register("linkedin")}
                  style={{ width: "40%" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="end">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </span>
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
          </span>
        </span>
      </span>
      <span
        style={{
          display: "flex",
          padding: "20px",
          borderRadius: "10px",
          spanShadow: "3px 3px 3px 3px #fff",
          border: "2px solid #fff",
          marginBottom: "30px",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "50px",
          background: "rgb(10, 30, 55)",
        }}
        className="contact-span-base"
      >
        <span
          style={{
            fontStyle: "italic",
            fontWeight: 300,
            color: "#fff",
            paddingLeft: "25px",
          }}
          className="contact-title-base"
        >
          <span variant="h3" style={{ fontSize: "16px" }}>
            Do you have any questions?
          </span>
          <span variant="h4" style={{ fontSize: "12px" }}>
            We will help you?
          </span>
        </span>
        <Button
          variant="contained"
          style={{
            backgroundColor: "rgb(227, 230, 227)",
            color: "rgb(30, 10 ,55)",
            fontStyle: "italic",
            padding: "10px 30px",
            borderRadius: "25px",
            marginRight: "30px",
            spanShadow: "0px 1px 1px 1px rgb(5 17 32)",
            border: "4px solid rgb(5 17 32)",
            cursor: "pointer",
            width: "165px",
          }}
          className="btn-contact"
        >
          Contact Us
        </Button>
      </span>
    </Container>
  );
}

export default UserProfile;

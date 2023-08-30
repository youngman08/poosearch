import { Box, Button, Card, TextField } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ContactUs = () => {
  return (
    <div className="container-fluid">
      <Header />

      <div style={{ backgroundColor: "rgb(231, 230, 230)", py: 4 }}>
        <Box
          sx={{ display: "flex" }}
          className="column"
          style={{ backgroundColor: "#0f2741", color: "white", height: "11em" }}
        >
          <h4 className="text-left px-3 mb-3">Contact us</h4>
          <span className="xitems-center column">
            <h1>Get Support</h1>
            <h3>We are available 24 hours a day</h3>
          </span>
          <Box ml={6} className="column xitems-center text-center ">
            <Card
              style={{
                backgroundColor: "transparent",
                position: "absolute",
                zindex: "2",
                height: "6em",
                width: "14em",
                top: "11.5em",
                boxShadow: "3px 1px 15px 1px #dddddd, 0 3px 10px 0 #dddddd",
              }}
            >
              <p
                className="color-fg padding-a-2 lcontent-center"
                style={{ height: "50%", backgroundColor: "#0f2741" }}
              >
                Email
              </p>
              <div
                style={{ height: "50%", backgroundColor: "white" }}
                className="padding-a-2"
              >
                <a href="mailto:knowledge@gamil.com">knowledge@gamil.com</a>
              </div>
            </Card>
          </Box>
        </Box>

        {/* Form */}
        <div
          style={{ backgroundColor: "#e7e6e6", p: 3, mt: 4, textAlign: "center" }}
          className="padding-tb-4"
        >
          <div className="litems-center margin-a-4 padding-a-4" style={{backgroundColor:"white",color:"black",borderRadius:"1em",boxShadow:"rgb(10 30 55) 3px 3px 6px 0px inset, rgb(10 30 55) -3px -3px 6px 1px inset;"}}>
            <div className="title-form">
              <i className="fa fa-comments mx-2"></i> send messages
            </div>
            <form className="mb-1 column ">
              <div className="xitems-center">
                <label htmlFor="subject" style={{ display: "inline" }}>
                  Subject
                </label>
                <TextField
                  fullWidth
                  id="subject"
                  variant="outlined"
                  placeholder="Your Subject"
                  required
                  style={{ width: "100%" }}
                />
              </div>

              <div className="margin-b-2">
                <label htmlFor="message" style={{ display: "inline" }}>
                  Message
                </label>
                <TextField
                  fullWidth
                  multiline
                  id="message"
                  rows={7}
                  variant="outlined"
                  placeholder="Your Message"
                  required
                />
              </div>

              <Button variant="contained" className="back-bg3 margin-tb-2" style={{width:"20%"}}>
                <i className="fas fa-paper-plane"></i>
                <span className="mx-2" style={{ color: "white" }}>
                  Send Message
                </span>
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;

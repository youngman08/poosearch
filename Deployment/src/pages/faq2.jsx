import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Header from "../components/Header";

const FAQ = ({ handleOpen }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const drawer = (
    <div style={{ flex: "1" }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={selectedTab}
        onChange={handleChange}
      >
        <Tab label="Account" className="faqtab" />
        <Tab label="Delivery" className="faqtab" />
        <Tab label="Payment" className="faqtab" />
        <Tab label="Product" className="faqtab" />
      </Tabs>
    </div>
  );

  const accordion = (
    <Box style={{ flex: "2" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Got a question?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum is a name for a common type of placeholder text. Also
            known as filler or dummy text, this is text copy that serves to fill
            a space without saying...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Got another question?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum is a name for a common type of placeholder text. Also
            known as filler or dummy text, this is text copy that serves to fill
            a space without saying...
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );

  return (
    <span
    //   style={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     flexDirection:"column",
    //     height: "100vh",
    //   }}
    >
      <Header />
      <span className="column xitems-center" style={{ height: "100vh" }}>
        <span
          className="xitems-center text-center"
          style={{ margin: "4em 0em" }}
        >
          <h1>FREQUENTLY ASKED QUESTIONS</h1>
          <p>
            Got a question? We are here to answer! If you don’t see your
            question here , drop us a line on our contact page.
          </p>
        </span>
        <div className="row">
          {drawer}

          {selectedTab === 0 && accordion}
          {selectedTab === 1 && accordion}
          {selectedTab === 2 && accordion}
          {selectedTab === 3 && accordion}
        </div>
      </span>
    </span>
  );
};

export default FAQ;

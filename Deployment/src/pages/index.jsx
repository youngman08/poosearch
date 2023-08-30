import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import TextField from "@mui/material/TextField";
import clsx from "clsx";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import bgtemp from "../images/MyVector.jpg";
import { advanceSearchApi, basicSearchApi } from "./api-tasks";
const Home = () => {
  const { register, watch, handleSubmit } = useForm();
  const [value, setValue] = useState("1");
  const [result, setResult] = useState([]);
  const [isAdvancedVisible, setIsAdvancedVisible] = useState(false);
  const inclusiveTitle = watch("inclusive_title");
  const anyOfTitle = watch("anyof_title");
  const exacTitle = watch("exact_title");
  const exclusiveTitle = watch("exclusive_title");
  const inclusiveAbstract = watch("inclusive_abstract");
  const anyOfAbstract = watch("anyof_abstract");
  const exactAbstract = watch("exact_abstract");
  const exclusiveAbstract = watch("abstract_abstract");
  const inclusiveCPC = watch("inclusive_cpc");
  const exclusiveCPC = watch("exclusive_cpc");
  const navigate = useNavigate();

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };

  const advancedInputSearchDivClasses = clsx("AdvancedInputSearchDiv", {
    myanimationI: isAdvancedVisible,
    AdvancedInputSearchDivInAnimation: isAdvancedVisible,
  });

  const basicButtonDivClasses = clsx("BasicButtonDiv", {
    myanimationB: isAdvancedVisible,
  });

  const advancedButtonDivClasses = clsx("AdvancedButtonDiv", {
    myanimationA: isAdvancedVisible,
  });

  const clickToShow = (data) => {
    if (isAdvancedVisible) {
      advanceSearchApi(data, navigate);
    }
    setIsAdvancedVisible(true);
  };

  const sendRBasic = (data) => {
    basicSearchApi(data.text, navigate);
  };

  return (
    <>
      <div className="containerm-fluid">
        <Header />
        <div className="containerm">
          <form>
            <div className="body1">
              <div className="body1-NameLogo">
                KN
                <img
                  className="earthimg"
                  src="https://upload.wikimedia.org/wikipedia/commons/1/13/Rotating_earth_%28huge%29.gif"
                  alt=""
                />
                WLEDGEOGRAPHY
              </div>
              <div className="body1-AdvancedSearchBar">
                <div
                  id="AdvancedInputSearchDiv"
                  className={advancedInputSearchDivClasses}
                >
                  <input
                    id="BAFirstINPUT"
                    type="text"
                    name="text"
                    {...register("text")}
                    placeholder="KeyWord"
                    required
                    disabled={isAdvancedVisible}
                    style={{
                      backgroundColor: isAdvancedVisible
                        ? "rgba(15, 39, 65, 0.315)"
                        : "",
                    }}
                  />
                </div>
                <div id="BasicButtonDiv" className={basicButtonDivClasses}>
                  <button
                    type="submit"
                    id="basicsearchdayba"
                    className="BasicSearchBtn"
                    onClick={handleSubmit(sendRBasic)}
                  >
                    Basic Search
                  </button>
                </div>
                <div
                  id="AdvancedButtonDiv"
                  className={advancedButtonDivClasses}
                >
                  <button
                    type="button"
                    id="advancedsearchdayba"
                    className="AdvancedSearchBtn"
                    onClick={handleSubmit(clickToShow)}
                  >
                    Advanced Search
                  </button>
                </div>
              </div>
            </div>

            {isAdvancedVisible && (
              <div className="Tabs-firstpage">
                <TabContext value={value}>
                  <Box
                    sx={{
                      borderBottom: 1,
                      display: "flex",
                      justifyContent: "center",
                      maxWidth: { xs: 600, sm: 580 },
                    }}
                  >
                    <TabList
                      onChange={handleChangeTabs}
                      variant="scrollable"
                      scrollButtons="auto"
                      aria-label="scrollable auto tabs example"
                      className="color-white"
                    >
                      <Tab label="Title" className="m-tab" value="1" />
                      <Tab label="Abstract" className="m-tab" value="2" />
                      <Tab label="TIME" className="m-tab" value="3" />
                      <Tab label="Classification" className="m-tab" value="4" />
                      <Tab label="LANGUAGE" className="m-tab" value="5" />
                      <Tab
                        label="PATENT DESCRIPTION"
                        className="m-tab"
                        value="6"
                      />
                      <Tab
                        label="SEARCH ALGORITHM(INACTIVE)"
                        className="m-tab"
                        value="7"
                      />
                      <Tab label="RESULT OPTIONS" className="m-tab" value="8" />
                      <Tab label="REGION" className="m-tab" value="9" />
                    </TabList>
                  </Box>
                  <TabPanel value="1" className="input-content">
                    <TextField
                      id="BrInput"
                      label="inclusive title"
                      variant="outlined"
                      className="input-b"
                      {...register("inclusive_title")}
                    />
                    <TextField
                      id="BrInput"
                      label="any of title"
                      variant="outlined"
                      className="input-b"
                      {...register("anyof_title")}
                    />
                    <TextField
                      id="BrInput"
                      label="exact title"
                      variant="outlined"
                      className="input-b"
                      {...register("exact_title")}
                    />
                    <TextField
                      id="BrInput"
                      label="exclusive title"
                      variant="outlined"
                      className="input-b"
                      {...register("exclusive_title")}
                    />
                    <TextField
                      id="BrInput"
                      label="summary"
                      variant="outlined"
                      className="input-b input-serchText"
                      multiline
                      maxRows={4}
                      value={`Inclusive Title: ${
                        inclusiveTitle || ""
                      }\nAny of Title: ${anyOfTitle || ""}\nExac Title: ${
                        exacTitle || ""
                      }\nExclusive Title: ${exclusiveTitle || ""}`}
                      disabled
                    />
                  </TabPanel>
                  <TabPanel value="2" className="input-content">
                    <TextField
                      id="BrInput"
                      label="inclusive abstract"
                      variant="outlined"
                      className="input-b"
                      {...register("inclusive_abstract")}
                    />
                    <TextField
                      id="BrInput"
                      label="any of abstract"
                      variant="outlined"
                      className="input-b"
                      {...register("anyof_abstract")}
                    />
                    <TextField
                      id="BrInput"
                      label="exact abstract"
                      variant="outlined"
                      className="input-b"
                      {...register("exact_abstract")}
                    />
                    <TextField
                      id="BrInput"
                      label="exclusive abstract"
                      variant="outlined"
                      className="input-b"
                      {...register("exclusive_abstract")}
                    />
                    <TextField
                      id="BrInput"
                      label="summary"
                      variant="outlined"
                      className="input-b input-serchText"
                      multiline
                      maxRows={4}
                      value={`Inclusive Abstract: ${
                        inclusiveAbstract || ""
                      }\nAny of Abstract : ${
                        anyOfAbstract || ""
                      }\nExac Abstract : ${
                        exactAbstract || ""
                      }\nExclusive Abstract : ${exclusiveAbstract || ""}`}
                      disabled
                    />
                  </TabPanel>
                  <TabPanel value="3" className="input-content">
                    <TextField
                      id="BrInput"
                      label="inclusive start date"
                      variant="outlined"
                      type="date"
                      className="input-b"
                      {...register("inclusive_start_date")}
                    />
                    <TextField
                      id="BrInput"
                      label="inclusive end date"
                      variant="outlined"
                      type="date"
                      className="input-b"
                      {...register("inclusive_end_date")}
                    />
                    <TextField
                      id="BrInput"
                      label="exclusive start date"
                      variant="outlined"
                      type="date"
                      className="input-b"
                      {...register("inclusive_start_date")}
                    />
                    <TextField
                      id="BrInput"
                      label="exclusive end date"
                      variant="outlined"
                      type="date"
                      className="input-b"
                      {...register("inclusive_start_date")}
                    />
                    <TextField
                      id="BrInput"
                      label="exclusive title"
                      variant="outlined"
                      className="input-b input-serchText"
                      multiline
                      maxRows={4}
                      value={result}
                      disabled
                    />
                  </TabPanel>
                  <TabPanel value="4" className="input-content">
                    <TextField
                      id="BrInput"
                      label="inclusive cpc"
                      variant="outlined"
                      className="input-b"
                      {...register("inclusive_cpc_section")}
                    />
                    <TextField
                      id="BrInput"
                      label="exclusive cpc"
                      variant="outlined"
                      className="input-b"
                      {...register("exclusive_cpc_section")}
                    />

                    <TextField
                      id="BrInput"
                      label="exclusive title"
                      variant="outlined"
                      className="input-b input-serchText"
                      multiline
                      maxRows={4}
                      disabled
                      value={`Inclusive CPC: ${
                        inclusiveCPC || ""
                      }\nExclusive CPC: ${exclusiveCPC || ""}`}
                    />
                  </TabPanel>
                </TabContext>
              </div>
            )}
            <div className="image-container-f">
              <img src={bgtemp} alt="My Image" />
            </div>
          </form>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;

import BookmarkIcon from "@mui/icons-material/Bookmark";
import SearchIcon from "@mui/icons-material/Search";
import { Pagination, Rating, Stack, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { basicNextPageApi, fullResultApi } from "./api-tasks";
const BasicResult = () => {
  const { register, handleSubmit } = useForm();
  const [showDetails, setShowDetails] = useState([false]);
  const location = useLocation();
  const { page, page_numbers, result, search_parameters } = location.state;
  const navigate = useNavigate();
  const keyw = search_parameters.keyw;
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowDetails(Array(10).fill(false));
  }, [result]);
  const handlePaginationClick = (pageNumber) => {
    console.log(pageNumber);
    basicNextPageApi(keyw, navigate, pageNumber);
  };
  const handleButtonDetailClick = (e) => {
    const index = +e.target.closest(".result-item").dataset.index;

    setShowDetails((prevShowDetails) => {
      const updatedDetails = [...prevShowDetails];
      updatedDetails[index] = !updatedDetails[index];
      return updatedDetails;
    });
  };   
  const handleButtonFullResult = (e) => {
    const index = +e.target.closest(".result-item").dataset.index;
    fullResultApi(result[index]._id, navigate);
  };
  console.log("result");
  console.log(result);
  return (
    <div className="container-fluid">
      <Header />
      <div className="result-AdvancedSearchBar">

        <TextField
          id="BrInput"
          label="KeyWords"
          variant="outlined"
          className="input-b color-black back-white"
          style={{borderRadius:"1.33em"}}
          placeholder="KeyWord"
          disabled
          {...register("text")}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

      </div>
      <div className="row lcontent-center margin-tb-1">
        <Button className="back-white color-black ">
          <BookmarkIcon className="color-black" />
          save all searches
        </Button>
      </div>
      {result.map((item, index) => (
        <div
          className="column text-justify result-item margin-se-1"
          data-index={index}
          key={index}
        >
          <div
            className="back-bg2 margin-a-1 padding-a-4 border-4"
            style={{
              boxShadow:
                "-2px -3px 9px 5px rgb(224 222 222 / 53%), 0 3px 10px 0 rgb(224 224 224 / 62%)",
            }}
          >
            <div className="topbar-result">
              <BookmarkIcon style={{ color: "#a2b9ce" }} />
              <Rating name="size-medium" defaultValue={2} readOnly />
            </div>
            <h2 className="margin-tb-1">{item.title} </h2>

            <div id="text" className="margin-tb-1">
              <p>{item.abstract} </p>
            </div>
            {showDetails[index] && (
              <>
                <hr />
                <div className="row lcontent-around margin-tb-1">
                  <div className="column">
                    <span className="margin-tb-1">
                      kind:
                      <strong className="margin-s-p5">{item.kind} </strong>
                    </span>

                    <span>
                      Date:
                      <strong className="margin-s-p5">{item.date} </strong>
                    </span>
                  </div>
                  <div className="column">
                    <span className="margin-tb-1">
                      num_claims:
                      <strong className="margin-s-p5">
                        {item.num_claims}{" "}
                      </strong>
                    </span>

                    <span>
                      type:
                      <strong className="margin-s-p5">{item.type} </strong>
                    </span>
                  </div>
                  <div className="column">
                    <span className="margin-tb-1">
                      Country:
                      <strong className="margin-s-p5">{item.country} </strong>
                    </span>
                  </div>
                </div>
              </>
            )}
            <div className="mrow lcontent-center">
              {showDetails[index] ? (
                <Button
                  variant="contained"
                  className="back-white color-black"
                  style={{ margin: "0 5px" }}
                  onClick={handleButtonDetailClick}
                >
                  Hide
                </Button>
              ) : (
                <Button
                  variant="contained"
                  className="back-white color-black"
                  style={{ margin: "0 5px" }}
                  onClick={handleButtonDetailClick}
                >
                  Detail
                </Button>
              )}
              <Button
                variant="contained"
                className="back-white color-black"
                onClick={handleButtonFullResult}
              >
                More
              </Button>
            </div>
          </div>
        </div>
      ))}
      <div className="pagination">
        <Stack spacing={2}>
          <Pagination
            variant="outlined"
            count={page_numbers?.length}
            page={page}
            shape="rounded"
            className="custom-pagination"
            onChange={(event, page) => handlePaginationClick(page)}
          />
        </Stack>
      </div>
      <Footer />
    </div>
  );
};

export default BasicResult;

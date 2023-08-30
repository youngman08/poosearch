import { Button } from "@mui/material";
import notFound from "../images/404.jpg";
const NotFound = () => {
  return (
    <>
      <div
        className="row xitems-center lcontent-around"
        style={{ height: "450px" }}
      >
        <span className="large-7 bold-4">
          <i>404</i>
        </span>
        <span className="large-2 column bold-4 xitems-center">
          <span>Ooops!!!!</span>
          <span className="margin-b-1">We Couldnt Find This Page.</span>
          <Button className="back-bg color-white">Visit The HomePage</Button>
        </span>
      </div>
      <div className="img">
        <img src={notFound} alt="" />
      </div>
    </>
  );
};

export default NotFound;

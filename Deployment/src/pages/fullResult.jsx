import { Button, List, ListItem } from "@material-ui/core";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollSpy from 'react-scrollspy-navigation';
const FullResult = () => {
  const location = useLocation();
  const response = location.state;
  useEffect(() => {}, []);
  return (
    <div className="container-fullresult">
      <Header />
      <div className="content-full">
        <div style={{ flex: 1 }}>
          <List component="nav" className="rList">
            <h3 className="bgBlack">Table of content</h3>
            <ScrollSpy activeClass="active-link" offset={-100}>
            <ListItem button>
              <Link
                to="Abstract"
                smooth={true}
                duration={200}
                className="link-smooth"
              >
                Abstract
              </Link>
            </ListItem>

            <ListItem button>
              <Link
                to="Classifications"
                smooth={true}
                duration={200}
                className="link-smooth"
              >
                Classifications
              </Link>
            </ListItem>
            <ListItem button>
              <Link
                to="Description"
                smooth={true}
                duration={200}
                className="link-smooth"
              >
                Description
              </Link>
            </ListItem>
            <ListItem button>
              <Link
                to="SUMMARY"
                smooth={true}
                duration={200}
                className="link-smooth"
              >
                SUMMARY
              </Link>
            </ListItem>
            <ListItem button>
              <Link
                to="Claims"
                smooth={true}
                duration={200}
                className="link-smooth"
              >
                Claims
              </Link>
            </ListItem>
            </ScrollSpy >
            <Button variant="contained" className="dbutton">
              Download
            </Button>
            <Button variant="contained" className="dbutton">
              Back
            </Button>
            <Button variant="contained" className="dbutton">
              Save
            </Button>
          </List>
        </div>
        <div
          className="content-fullresult"
          style={{ flex: 3, width: "0.75%", overflow: "hidden" }}
        >
          <h1>{response.info[0].title}</h1>
          <h2 id="section1" name="Abstract">
            Abstract
          </h2>
          <p className="bgBlack">{response.info[0].abstract}</p>
          <h2 name="Classifications">Classifications</h2>
          <p className="bgBlack">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h2 name="Description">Description</h2>
          <p className="bgBlack description">{response.patent_description}</p>
          <h2 name="SUMMARY">SUMMARY</h2>
          <p className="bgBlack">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h2 name="Claims">Claims</h2>
          <p className="bgBlack">
            {response.cpc_subgroup.map((item) => (
              <>
              <span key={item}>{item}</span>
              <br/>
              </>
            ))}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FullResult;

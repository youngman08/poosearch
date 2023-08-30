import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AppProvider } from "./components/contex";
import BasicResult from "./pages/basicResult";
import Sidebar from "./pages/faq";
import FAQ from "./pages/faq2";
import FullResult from "./pages/fullResult";
import Home from "./pages/index";
import NotFound from "./pages/notFound";
import "./styles/basic.css";
import "./styles/flex.scss";
import "./styles/fullresult.css";
import "./styles/globals.scss";
import "./styles/responsiveBody.css";
import ContactUs from "./pages/contact";
import TermsAndPolicy from "./pages/terms";
import UserProfile from "./pages/profile";
export const BASE_API = "http://127.0.0.1:8000/api/";

export function check_error(response) {
  return response.err_c !== undefined;
}

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <AppProvider>
      <Router className="App">
        <Routes>
          <Route
            path="/"
            element={<Home handleOpen={handleOpen} handleClose={handleClose} />}
            exact
          />
          <Route path="/sidebar" element={<Sidebar />} exact />
          <Route path="/faq" element={<FAQ handleOpen={handleOpen} />} exact />
          <Route path="/result" element={<BasicResult />} exact />
          <Route path="/contactUs" element={<ContactUs />} exact />
          <Route path="/fullResult" element={<FullResult />} exact />
          <Route path="/termsAndPolicy" element={<TermsAndPolicy />} exact />
          <Route path="/dashboard" element={<UserProfile />} exact />
          <Route path="/myprofile" element={<UserProfile />} exact />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;

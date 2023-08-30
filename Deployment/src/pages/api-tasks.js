import axios from "axios";

const api = axios.create({
  baseURL: "http://213.233.184.122:8001/api", // Replace with your API base URL
});
// Function to send the basic search request
export const basicSearchApi = async (val, navigate) => {
  try {
    const response = await api.get("/basic-search", {
      params: {
        keyw: val,
      },
    });
    navigate("/result", { state: response.data, replace: false });
  } catch (error) {
    // Handle any errors
    console.error(error);
    // Handle the error condition
  }
};

export const basicNextPageApi = async (val, navigate, page) => {
  try {
    const response = await api.get("/basic-search", {
      params: {
        keyw: val,
        page: page,
      },
    });
    navigate("/result", { state: response.data, replace: false });
  } catch (error) {
    console.error(error);
  }
};

export const advanceSearchApi = async (val, navigate) => {
  try {
    const response = await api.get("/advanced-search/", {
      params: {
        inclusive_title: val?.inclusive_title,
        anyof_title: val?.anyof_title,
        exact_title: val?.exact_title,
        exclusive_title: val?.exclusive_title,
        inclusive_abstract: val?.inclusive_abstract,
        anyof_abstract: val?.anyof_abstract,
        exact_abstract: val?.exact_abstract,
        exclusive_abstract: val?.exclusive_abstract,
        inclusive_start_date: val?.inclusive_start_date,
        exclusive_end_date: val?.exclusive_end_date,
        inclusive_cpc_section: val?.inclusive_cpc_section,
        exclusive_cpc_section: val?.exclusive_cpc_section,
      },
    });
    // Handle the response data
    navigate("/result", { state: response.data, replace: false });
    // Do something with the response data

  } catch (error) {
    // Handle any errors
    console.error(error);
    // Handle the error condition
  }
};
export const fullResultApi = async (val, navigate) => {
  try {
    const response = await api.get(`/patent/${val}/`);
    navigate("/fullresult", { state: response.data, replace: false });
  } catch (error) {
    console.error(error);
  }
};
export const loginApi = async (val, navigate) => {
  try {
    const response = await api.get(`/patent/${val}/`);
    navigate("/fullresult", { state: response.data, replace: false });
  } catch (error) {
    console.error(error);
  }
};
export const RegisterApi = async (val) => {
  try {
    const response = await api.post(`/accounts/register/`, val);

    return response.data;
  } catch (error) {
    console.error(error);
    throw error; 
  }
};
export const LoginApi = async (val) => {
  try {
    const response = await api.post(`/token/`, val);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; 
  }
};
export const LostPassApi = async (val) => {
  try {
    const response = await api.post(`/accounts/password-reset/`, val);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; 
  }
};

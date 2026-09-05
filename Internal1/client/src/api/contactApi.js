import api from "./axios";

export const sendContact = async (payload) => {
  try {
    const { data } = await api.post("/contact", payload);

    return data;
  } catch (error) {
    console.error("Axios Error:", error);

    if (error.response) {
      throw error.response.data;
    }

    throw {
      success: false,
      message: "Unable to connect to the server.",
    };
  }
};
import axios from "axios";

export const getData = async (url, config = {}) => {
  try {
    const resp = await axios.get(url, config);
    return { error: undefined, ...resp };
  } catch (error) {
    return { error, data: undefined };
  }
};

export const postData = async (url, data, config = {}) => {
  try {
    const resp = await axios.post(url, data, config);
    return { error: undefined, ...resp };
  } catch (error) {
    return { error, data: undefined };
  }
};

export const putData = async (url, data, config = {}) => {
  try {
    const resp = await axios.put(url, data, config);
    return { error: undefined, ...resp };
  } catch (error) {
    return { error, data: undefined };
  }
};

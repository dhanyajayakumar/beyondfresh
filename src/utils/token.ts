export const setToken = (data: any) => {
  try {
    if (data) {
      localStorage.setItem("userDetails", JSON.stringify(data));
    } else {
      localStorage.removeItem("userDetails");
    }
  } catch (error) {
    console.log(error);
  }
};

export const getToken = () => {
  try {
    let userDetails = localStorage.getItem("userDetails");
    if (userDetails === null) {
      return null;
    }
    return JSON?.parse(userDetails);
  } catch (error) {
    return null;
  }
};

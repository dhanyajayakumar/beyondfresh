import { setAuthState } from "@/utils/redux/auth";
import { getToken } from "@/utils/token"; // Assuming you have a token service

const authMiddleware = (store:any) => (next:any) => (action:any) => {
  const result = next(action);
  const state = store.getState();

  if (state.auth.loader) {
    const token = getToken();
    if (token) {
    //  const userDetails = getUserDetailsFromToken(token);
    const userDetails = localStorage.getItem("userDetails");

      store.dispatch(
        setAuthState({ isAuthenticated: !!userDetails, userDetails })
      );
    } else {
      store.dispatch(setAuthState({ isAuthenticated: false, userDetails: null }));
    }
  }

  return result;
};

export default authMiddleware;

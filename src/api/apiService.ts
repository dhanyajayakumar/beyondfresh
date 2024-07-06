import {
  apiLoginData,
  apiRegisterData,
  apiResendOtp,
  apiResettData,
  apiforgotData,
  apiAddToCartData,
  apiUpdateCartData,
  apiDeleteCartData
} from "@/utils/types";
import api from "./apiClient";

export const registerUserApi = async (userData: apiRegisterData): Promise<any> => {
  try {
    const response = await api.post("/api/auth/register", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUserApi = async (userData: apiLoginData): Promise<any> => {
  try {
    const response = await api.post("/api/auth/login", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const forgotApi = async (userData: apiforgotData): Promise<any> => {
  try {
    const response = await api.post("/api/auth/forgot-password", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const resetApi = async (userData: apiResettData): Promise<any> => {
  try {
    const response = await api.post("api/auth/reset-password", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const verifyOtpApi = async (userData: apiforgotData): Promise<any> => {
  try {
    const response = await api.post("/api/auth/verify-otp", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const resendOtpApi = async (userData: apiResendOtp): Promise<any> => {
  try {
    const response = await api.post("api/auth/resend-otp", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getSliderApi = async (params: any) => {
  try {
    const response = await api.get("api/common/slider", { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const collectionProductsApi = async (params: any) => {
  try {
    const response = await api.get("api/common/collection-products", { params });
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const collectionCategoriesApi = async (params: any) => {
  try {
    const response = await api.get("/api/common/collection-categories", {
      params,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const bannerApi = async (params: any) => {
  try {
    const response = await api.get("api/common/banner", { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const menuApi = async (params: any) => {
  try {
    const response = await api.get("/api/common/website-setups", { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const productListApi = async (params: any) => {
  try {
    const response = await api.get("/api/product/product-list", { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const productDetailsApi = async (query: any, params: any) => {
  try {
    const response = await api.get(`/api/product/product-detail/${query}`, {
      params,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getCategoryApi = async (params: any) => {
  try {
    const response = await api.get("/api/product/category", { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getBrandApi = async (params: any) => {
  try {
    const response = await api.get("/api/product/brand", { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getSpecificationApi = async (params: any) => {
  try {
    const response = await api.get("api/product/specification", { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const slidersApi = async (params: any) => {
  try {
    const response = await api.get("api/common/slider", { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getAttributeApi = async (params: any) => {
  try {
    const response = await api.get("/api/product/attribute", { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const addToCart = async (userData: apiAddToCartData): Promise<any> => {
  try {
    const response = await api.post("/api/cart/create-cart", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const updateCart = async (userData: apiUpdateCartData): Promise<any> => {
  try {
    const response = await api.post("/api/cart/create-cart", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const deleteCart = async (userData: apiDeleteCartData): Promise<any> => {
  try {
    const response = await api.post("/api/cart/create-cart", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getCart = async (params: any) => {
  try {
    const response = await api.get("/api/cart/get-cart", { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};
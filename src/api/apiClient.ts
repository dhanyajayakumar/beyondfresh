// sr/api/apiClient.ts
import axios, { AxiosInstance } from "axios";
import { getUUID } from "@/utils/uuid";
import { getToken } from "@/utils/token";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Cross-Origin-Embedder-Policy": "require-corp",
    "Cross-Origin-Opener-Policy": "same-origin",
  },
});

// Add a request interceptor to include the UUID in the headers
api.interceptors.request.use((config) => {
  const uuid = getUUID();
  config.headers["User-token"] = uuid;
  const tokenData = getToken();
  if (tokenData && tokenData.token) {
    config.headers["Authorization"] = `Bearer ${tokenData.token}`;
  }
  return config;
});

export default api;

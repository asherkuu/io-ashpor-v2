import axios from "axios";
import { useApiHandler, useSwrHandler } from ".";

export const newPortfolio = async (data) => {
  return await axios.post("/api/v1/portfolios/upload", data);
};

export const updatePortfolio = async (id, data) => {
  return await axios.patch(`/api/v1/portfolios/${id}/edit`, data);
};

export const useGetPortfolioList = () => useSwrHandler("/portfolios");
export const useGetPortfolioById = (id: string) =>
  useSwrHandler(`/portfolios/${id}`);

export const usePostPortfolios = () => useApiHandler(newPortfolio);
export const useUpdatePortfolio = () => useApiHandler(updatePortfolio);

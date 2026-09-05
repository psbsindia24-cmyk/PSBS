// client/src/api/insightApi.js

// client/src/api/insightApi.js

import api from "./axios";

const BASE_URL = "/insights";

/**
 * Handle API errors consistently
 */
const handleError = (error) => {
  console.error("Insight API Error:", error);

  throw new Error(
    error.response?.data?.message ||
    error.message ||
    "Something went wrong."
  );
};

/**
 * Get all insights
 */
export const getAllInsights = async () => {
  try {
    const { data } = await api.get(BASE_URL);
    return data;
  } catch (error) {
    handleError(error);
  }
};

/**
 * Get single insight
 */
export const getInsightById = async (id) => {
  try {
    const { data } = await api.get(`${BASE_URL}/${id}`);
    return data;
  } catch (error) {
    handleError(error);
  }
};

/**
 * Create insight
 */
export const createInsight = async (formData) => {
  try {
   const { data } = await api.post(BASE_URL, formData);

    return data;
  } catch (error) {
    handleError(error);
  }
};

/**
 * Update insight
 */
export const updateInsight = async (id, formData) => {
  try {
    const { data } = await api.post(BASE_URL, formData);

    return data;
  } catch (error) {
    handleError(error);
  }
};

/**
 * Delete insight
 */
export const deleteInsight = async (id) => {
  try {
    const { data } = await api.delete(`${BASE_URL}/${id}`);
    return data;
  } catch (error) {
    handleError(error);
  }
};

/**
 * Download document
 */
export const downloadInsight = (id) => {
  window.open(
    `${import.meta.env.VITE_API_URL}/insights/${id}/download`,
    "_blank"
  );
};
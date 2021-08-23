import { useState } from "react";

export const useFetching = (callback, ...params) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback(params.join());
    } catch (error) {
      setIsLoading(false);
      setError(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };
  return [fetching, isLoading, error];
};

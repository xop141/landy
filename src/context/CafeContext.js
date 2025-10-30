"use client";
import { createContext, useContext } from "react";
import useSWR from "swr";
import { fetcher, BASE_URL } from "@/lib/utils";

const CafeContext = createContext();

export function CafeProvider({ children }) {
  const {
    data: cafes = [],
    error,
    isLoading,
  } = useSWR(`${BASE_URL}/cafe`, fetcher, {
    revalidateOnFocus: false,
  });

  return (
    <CafeContext.Provider value={{ cafes, error, isLoading }}>
      {children}
    </CafeContext.Provider>
  );
}

export function useCafe() {
  return useContext(CafeContext);
}

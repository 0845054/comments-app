import { createContext, useContext } from "react";

export const SizeContext = createContext({ width: 0, height: 0 });
export const SizeContextProvider = SizeContext.Provider
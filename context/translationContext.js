import { createContext } from "react";

export const TranslationContext = createContext({
  language: "",
  translations: null,
});

export default TranslationContext;

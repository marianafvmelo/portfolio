import { createContext, useContext, useState } from "react";
import { useRouter } from "next/router";

const LocaleContext = createContext();

export const useLocale = () => useContext(LocaleContext);

export const LocaleProvider = ({ children }) => {
  const router = useRouter();

  const [currentLocale, setCurrentLocale] = useState(
    router.locale === "en" ? "en" : "pt"
  );

  return (
    <LocaleContext.Provider value={{ currentLocale, setCurrentLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

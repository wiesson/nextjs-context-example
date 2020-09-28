import "../styles/globals.css";
import TranslationContext from "../context/translationContext";

function MyApp({ Component, pageProps }) {
  const { translations, language, otherPageProps } = pageProps;

  return (
    <TranslationContext.Provider value={{ translations, language }}>
      <Component {...otherPageProps} />
    </TranslationContext.Provider>
  );
}

export default MyApp;

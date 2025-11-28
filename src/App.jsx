import GlobalStyle from "./globalStyles";
import { Header } from "./components/layout/Header";
import { MainSection } from "./components/layout/MainSection";
import { Footer } from "./components/layout/Footer";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainSection />
      <Footer />
    </>
  );
};

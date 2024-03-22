import Head from "next/head";
import { NextPage, GetStaticProps } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import { Fragment, useEffect, useState } from "react";
import LoadingContent from "../components/LoadingContent";
/**Sections */
import Main from "./Home/Sections/Main";
import Services from "./Home/Sections/Services";
import AboutMe from "./Home/Sections/AboutMe";
import Qualifications from "./Home/Sections/Qualifications";
import {Portfolio, Portfolio2 ,Portfolio3, Portfolio4} from "./Home/Sections/Portfolio";
import Contact from "./Home/Sections/Contact";
/**Styles */
import { Container } from "./Home/styles";
import { getTranslator, Translator, dictionaries } from "../i18n";
/**Helpers */
import { setAnimations } from "./Home/helpers";
/**Props */
import HomeProps, { HomeStaticProps } from "./Home/HomeProps";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

const Home: NextPage<HomeProps> = ({ dictionary, ...props }): JSX.Element => {
  const t: Translator = getTranslator(dictionary);
  const [openLoadingContent, setOpenLoadingContent] = useState<boolean>(false);

  useEffect(() => {
    setAnimations();
  }, []);

  return (
    <Fragment>
      <Head>
        <meta name="description" content={t("metadata.description")} />
        {/* [INIT] Open Graph Protocol */}
        <meta property="og:url" content="https://www.leonardojacomussi.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Shanmuka rao vangapandu" />
        <meta property="og:description" content={t("metadata.description")} />
        <meta
          property="og:image"
          content="https://storage.googleapis.com/leonardo-jacomussi-site-public/docs/preview.png"
        />
        {/* [END] Open Graph Protocol */}
      </Head>
      <Container>
        <Header t={t} />
        <Main t={t} />
        <Services t={t} />
        <AboutMe t={t} />
        <Qualifications t={t} />
        <Splide aria-label="My Favorite Images">
          <SplideSlide>
            <Portfolio t={t} />
          </SplideSlide>
          <SplideSlide>
            <Portfolio2 t={t} />
          </SplideSlide>
          <SplideSlide>
            <Portfolio3 t={t} />
          </SplideSlide>
          <SplideSlide>
            <Portfolio4 t={t} />
          </SplideSlide>
        </Splide>
        <Contact t={t} setOpenLoadingContent={setOpenLoadingContent} />
        <Footer t={t} />
        <BackToTop t={t} />
        <LoadingContent open={openLoadingContent} />
      </Container>
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async ({
  locale,
  ...props
}): Promise<{ props: HomeStaticProps; revalidate: number }> => {
  const dictionary = await dictionaries[locale]();
  return { props: { dictionary: dictionary }, revalidate: 86400 };
};

export default Home;

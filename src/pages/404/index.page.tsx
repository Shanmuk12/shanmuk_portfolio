import Link from "next/link";
import Head from "next/head";
import { Fragment, useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { NextPage, GetStaticProps } from "next";
import Button from "../../components/Button";
import { getTranslator, Translator, dictionaries } from "../../i18n";

/**Styles */
import { Container , Content} from "./styles";
/**Props */
import NotFoundProps, { NotFoundStaticProps } from "./NotFoundProps";

const NotFoundPage: NextPage<NotFoundProps> = ({ dictionary }): JSX.Element => {
  const t: Translator = getTranslator(dictionary);
  const [heightWindow, setHeightWindow] = useState<number>(null);

  useEffect(() => {
    const handleHeightWindow = () => {
      setHeightWindow(window.innerHeight);
    };

    if (window) {
      setHeightWindow(window.innerHeight);
      window.addEventListener("resize", handleHeightWindow);
    };

    () => {
      window.removeEventListener("resize", handleHeightWindow);
    };
  }, []);

 return (
  <Fragment>
    <Head>
      <meta name="description" content={t("metadata.Description")} />
      <title>{t("pageNotFound.title")}</title>
    </Head>
    <Container height={heightWindow}>
      <Header t={t} />
      <Content>
        <h1>404 | {t("pageNotFound.message")}</h1>
        <Link href="/">
          <Button>{t("pageNotFound.returnHome")}</Button>
        </Link>
      </Content>
      <Footer t={t} />
    </Container>
  </Fragment>
);

export const getStaticProps: GetStaticProps = async ({ locale, ...props }): Promise<{ props: NotFoundStaticProps }> => {
  const dictionary = await dictionaries[locale]();
  return { props: { dictionary: dictionary } }
};

export default NotFoundPage;

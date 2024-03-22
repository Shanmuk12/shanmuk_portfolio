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
import ServerErrorProps, { ServerErrorStaticProps } from "./ServerErrorProps";

const ServerErrorPage: NextPage<ServerErrorProps> = ({ dictionary }): JSX.Element => {
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
        <meta name="description" content={t("metadata.description")} />
        <title>{t("500.title")}</title>
      </Head>
      <Container height={heightWindow}>
        <Header t={t} />
        <Content>
          <h1>500 | {t("500.content")}</h1>
          <Link href="/">
            <Button>{t("500.btnGoToHome")}</Button>
          </Link>
        </Content>
        <Footer t={t} />
      </Container>
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale, ...props }): Promise<{ props: ServerErrorStaticProps }> => {
  const dictionary = await dictionaries[locale]();
  return { props: { dictionary: dictionary } }
};

export default ServerErrorPage;
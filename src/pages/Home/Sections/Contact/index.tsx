import { FC, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useTheme, Theme } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, NextRouter } from "next/router";
import Button from "../../../../components/Button";
import { VariantType, useSnackbar } from "notistack";
/**Props */
import ContactProps, { SocialMediaProps } from "./ContactProps";
/**Styles */
import {
  Grid, ContactContainer, Title, Subtitle,
  Form, FormErrorMessage, SocialMedia, SocialMediaItem
} from "./styles";
/**Helpers */
import { contactSender } from "./helpers";
/**Files */
import emailDark from "../../../../../public/assets/icons/emailDark.svg";
import emailLight from "../../../../../public/assets/icons/emailLight.svg";
import githubLight from "../../../../../public/assets/icons/githubLight.svg";
import githubDark from "../../../../../public/assets/icons/githubDark.svg";
import researchgateDark from "../../../../../public/assets/icons/researchgateDark.svg";
import researchgateLight from "../../../../../public/assets/icons/researchgateLight.svg";
import linkedinDark from "../../../../../public/assets/icons/linkedinDark.svg";
import linkedinLight from "../../../../../public/assets/icons/linkedinLight.svg";

const Contact: FC<ContactProps> = ({ t, setOpenLoadingContent }): JSX.Element => {
  const [hover, setHover] = useState<SocialMediaProps>({ email: false, github: false, linkedin: false, researchgate: false });
  const router: NextRouter = useRouter();
  const theme: Theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();

  const formik = useFormik({
    initialValues: {
      contactName: "",
      contactEmail: "",
      contactMessage: "",
    },
    onSubmit: (values) => {
      setOpenLoadingContent(true);
      contactSender(t, router.locale, values, openSnackbar)
        .then((res) => res && formik.resetForm())
        .finally(() => setOpenLoadingContent(false));
    },
    validationSchema: Yup.object({
      contactName: Yup.string().required(t("emails.contact.feedback.nameIsRequired")),
      contactEmail: Yup.string().email(t("emails.contact.feedback.emailIsInvalid")).required(t("emails.contact.feedback.emailIsRequired")),
      contactMessage: Yup.string().required(t("emails.contact.feedback.messageIsRequired")).min(25, t("emails.contact.feedback.messageIsInvalid")),
    }),
  });

  const openSnackbar = (message: string, variant: VariantType) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };

  return (
    <Grid id="contact">
      <ContactContainer>
        <Title className="st1">{t("home.contact.title")}</Title>
        <Subtitle className="no-js-hiddenY">{t("home.contact.subtitle")}</Subtitle>
        <SocialMedia>
          <div className="no-js-hiddenX delay200">
            <SocialMediaItem
              onMouseEnter={() => setHover(prveHover => ({ ...prveHover, email: true }))}
              onMouseLeave={() => setHover(prveHover => ({ ...prveHover, email: false }))}
              className={hover.email ? "isHovered" : hover.researchgate || hover.github || hover.linkedin ? "isNotHovered" : ""}
            >
              <div>
                <Image
                  width={32}
                  height={32}
                  loading="lazy"
                  alt="Email"
                  title="Email"
                  src={theme.theme === "dark" ? emailLight.src : emailDark.src} />
              </div>
              <p className="p2">Email</p>
              <Link rel="external" href="mailto:shanmuk.in18@gmail.com" target="_blank">
              shanmuk.in18@gmail.com
              </Link>
            </SocialMediaItem>
          </div>
          <div className="no-js-hiddenX delay200">
            <SocialMediaItem
              onMouseEnter={() => setHover(prveHover => ({ ...prveHover, linkedin: true }))}
              onMouseLeave={() => setHover(prveHover => ({ ...prveHover, linkedin: false }))}
              className={hover.linkedin ? "isHovered" : hover.researchgate || hover.github || hover.email ? "isNotHovered" : ""}
            >
              <div>
                <Image
                  width={32}
                  height={32}
                  loading="lazy"
                  alt="LinkedIn"
                  title="LinkedIn"
                  src={theme.theme === "dark" ? linkedinLight.src : linkedinDark.src} />
              </div>
              <p className="p2">LinkedIn</p>
              <Link rel="external" href="https://www.linkedin.com/in/shanmuka-rao-vangapandu-038a02238/" target="_blank">
              linkedin.com/in/shanmuka-rao-vangapandu
              </Link>
            </SocialMediaItem>
          </div>
          <div className="no-js-hiddenX delay200">
            <SocialMediaItem
              onMouseEnter={() => setHover(prveHover => ({ ...prveHover, github: true }))}
              onMouseLeave={() => setHover(prveHover => ({ ...prveHover, github: false }))}
              className={hover.github ? "isHovered" : hover.researchgate || hover.linkedin || hover.email ? "isNotHovered" : ""}
            >
              <div>
                <Image
                  width={32}
                  height={32}
                  loading="lazy"
                  alt="GitHub"
                  title="GitHub"
                  src={theme.theme === "dark" ? githubLight.src : githubDark.src} />
              </div>
              <p className="p2">GitHub</p>
              <Link rel="external" href="https://github.com/Shanmuk12" target="_blank">
              github.com/Shanmuk12
              </Link>
            </SocialMediaItem>
          </div>
          <div className="no-js-hiddenX delay200">
            <SocialMediaItem
              onMouseEnter={() => setHover(prveHover => ({ ...prveHover, researchgate: true }))}
              onMouseLeave={() => setHover(prveHover => ({ ...prveHover, researchgate: false }))}
              className={hover.researchgate ? "isHovered" : hover.github || hover.linkedin || hover.email ? "isNotHovered" : ""}
            >
              <div>
                <Image
                  width={32}
                  height={32}
                  loading="lazy"
                  alt="ResearchGate"
                  title="ResearchGate"
                  src={theme.theme === "dark" ? researchgateLight.src : researchgateDark.src} />
              </div>
              <p className="p2">ResearchGate</p>
              <Link rel="external" href="https://www.researchgate.net/profile/Shanmuka-Rao-Vangapandu" target="_blank">
                researchgate.net/profile/Shanmuka-Rao-Vangapandu
              </Link>
            </SocialMediaItem>
          </div>
        </SocialMedia>
        <Form onSubmit={formik.handleSubmit} noValidate={false}>
          <h4 className="no-js-hiddenY delay200">{t("home.contact.form.title")}</h4>

          <label className="no-js-hiddenX delay200" htmlFor="contactName">{t("home.contact.form.name")}</label>
          <input className="no-js-hiddenX delay200" name="contactName" id="contactName" {...formik.getFieldProps("contactName")} />
          <FormErrorMessage>
            {formik.touched.contactName && formik.errors.contactName}
          </FormErrorMessage>

          <label className="no-js-hiddenX delay200" htmlFor="contactEmail">{t("home.contact.form.email")}</label>
          <input className="no-js-hiddenX delay200" name="contactEmail" id="contactEmail" {...formik.getFieldProps("contactEmail")} />
          <FormErrorMessage>
            {formik.touched.contactEmail && formik.errors.contactEmail}
          </FormErrorMessage>

          <label className="no-js-hiddenX delay200" htmlFor="contactMessage">{t("home.contact.form.message")}</label>
          <textarea className="no-js-hiddenX delay200" name="contactMessage" id="contactMessage" cols={30} rows={4} {...formik.getFieldProps("contactMessage")} />
          <FormErrorMessage>
            {formik.touched.contactMessage && formik.errors.contactMessage}
          </FormErrorMessage>

          <Button className="no-js-hiddenX delay200" type="submit">
            {t("home.contact.form.bntSubmit")}
          </Button>
        </Form>
      </ContactContainer>
    </Grid>
  );
};

export default Contact;
import Head from "next/head";

import ContactForm from "@/components/contact/contact-form";
import { Fragment } from "react";

const ContactPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your message" />
      </Head>
      <ContactForm />
    </Fragment>
  );
};

export default ContactPage;

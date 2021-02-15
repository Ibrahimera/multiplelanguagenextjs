import Head from "next/head";
import styles from "../styles/Home.module.css";
import { IntlProvider, FormattedMessage, useIntl } from "react-intl";
import { useState } from "react";
import Body from "../components/Body";
import Link from "next/link";

export default function Home() {
  const [local, setLocal] = useState("en");
  const messages = {
    en: {
      title: "Learn to buy new product",
      body:
        "Hi, I am going to explian to you how the internet and eccommerce platform work be aware that is the best tools in life to make live easier",
      buttonper: "Persian",
      buttonen: "English",
    },
    per: {
      title: "یاد بگیرید چگونه پروداکت جدید بخرید",
      body:
        "سلام من میخوام توزیع بدم که انترنت چقدر زندگی مارا راحت میکند با میتوانیم به راحتی یک چیزرا ارزان بخریم",
      buttonper: "فارسی",
      buttonen: "انگلسی",
    },
  };
  const changeLanguage = (lan) => {
    setLocal(lan);
  };
  return (
    <IntlProvider locale={local} messages={messages[local]}>
      <div className="home">
        <div className="body">
          <Body />

          <button onClick={() => changeLanguage("en")}>
            <FormattedMessage id="buttonen" />
          </button>
          <button onClick={() => changeLanguage("per")}>
            <FormattedMessage id="buttonper" />
          </button>

          <Link href="/folderpost/Arabic">Go to arabic</Link>
        </div>
      </div>
    </IntlProvider>
  );
}

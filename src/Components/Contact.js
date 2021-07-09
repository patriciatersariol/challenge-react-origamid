import React from "react";
import Head from "./Head";
import styles from "./Contact.module.css";
import picture from "../img/contact.jpg";

const Contact = () => {
  return (
    <div className={`${styles.container} animeLeft`}>
      <Head title="Loja | Contato" description="Essa é a página de contato" />
      <img src={picture} alt="Máquina de escrever"></img>
      <div className={styles.info}>
        <p>Entre em contato:</p>
        <p>patriciatersariol@gmail.com</p>
        <p>99999-9999</p>
        <p>Rua Tal, 1000</p>
      </div>
    </div>
  );
};

export default Contact;

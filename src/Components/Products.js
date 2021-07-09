import React from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import styles from "./Products.module.css";

const Products = () => {
  const [products, setProducts] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, []);

  if (products === null) return null;
  return (
    <div className={`${styles.container} animeLeft`}>
      <Head title="Loja | Produtos" description="Essa é a página inicial" />
      {products.map(({ id, nome, fotos }) => {
        return (
          <section className={styles.produto} key={id}>
            <Link to={`product/${id}`}>
              <img src={fotos[0].src} alt={fotos[0].titulo}></img>
              <h1 className={styles.name}>{nome}</h1>
            </Link>
          </section>
        );
      })}
    </div>
  );
};

export default Products;

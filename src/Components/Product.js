import React from "react";
import { useParams } from "react-router-dom";
import Head from "./Head";
import styles from "./Product.module.css";

const Product = () => {
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const { id } = useParams();

  React.useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${id}`
      );
      const productJson = await response.json();
      setProduct(productJson);
    } catch (errorMessage) {
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (product === null) return null;
  return (
    <section className={`${styles.container} animeLeft`}>
      <Head title={`Loja | ${product.nome}`} description="Esse é um produto" />

      <div>
        {product.fotos.map((foto) => (
          <img key={foto.src} src={foto.src} alt={foto.titulo}></img>
        ))}
      </div>

      <div>
        <h1>{product.nome}</h1>
        <span className={styles.price}>R$ {product.preco}</span>
        <p className={styles.description}>{product.descricao}</p>
      </div>
    </section>
  );
};

export default Product;

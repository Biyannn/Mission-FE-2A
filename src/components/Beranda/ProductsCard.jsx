import { Products } from "./Data";
import { CardHeader, CardBody, Card, CardFooter } from "./Card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const [productList] = useState(Products);
  const navigate = useNavigate();
  return (
    <div className="w-full grid grid-cols-auto-fill gap-6 flex-col">
      {productList.map((product) => (
        <div
          key={product.id}
          onClick={() => navigate(`/detailproduct/${product.id}`)}
        >
          <Card>
            <CardHeader image={product.imgProduct} />
            <CardBody
              title={product.title}
              description={product.text}
              photo={product.imgProfile}
              name={product.author}
              jabatan={product.position}
              work={product.work}
            />
            <CardFooter
              count={product.count}
              rate={product.rate}
              price={product.price}
            />
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;

import { useEffect, useState } from "react";
import { api_getItems } from "../api/api";
import { useStore } from "../store";

interface FarmItemProps {
  name: string;
  quantity: string | number;
  price: string | number;
  image: string;
}

const FarmItem = ({ name, quantity, price, image }: FarmItemProps) => {
  return (
    <div
      style={{
        position: "relative",
        background: "#A1ACAB",
        border: "1px solid #3A5C58",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "20px",
        width: 536,
        height: 254,
        paddingLeft: 32,
        marginBottom: 60,
      }}
    >
      <div
        style={{
          fontFamily: "'Roboto'",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "32px",
          lineHeight: "38px",
          color: "#000000",
        }}
      >
        {name}
      </div>

      <div style={{ width: 161 }}>
        <div className="inputLabel2">Quantity</div>
        <input
          className="inputField2"
          value={quantity}
          style={{ marginBottom: 13 }}
        />

        <input
          className="inputField2"
          value={price}
          style={{ marginBottom: 13 }}
        />
      </div>

      <img
        src={image}
        style={{
          position: "absolute",
          top: 37,
          left: 332,
          width: 180,
          height: 180,
          borderRadius: 90,
          objectFit: "cover",
        }}
      />
    </div>
  );
};

const FarmerAvailableProducts = () => {
  const [products, setProducts] = useState<FarmItemProps[]>([]);
  const user = useStore((state) => state.user);

  useEffect(() => {
    api_getItems().then((items) =>
      setProducts(items.filter((item: any) => item.farmerName == user?.name))
    );
  }, []);

  return (
    <div style={{ marginLeft: 60, height: 600, overflowY: "auto" }}>
      {products.map((item) => (
        <FarmItem
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default FarmerAvailableProducts;
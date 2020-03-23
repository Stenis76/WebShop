import React, { FC, useEffect, useState, useContext } from "react";
import { withRouter, RouteComponentProps, useParams } from "react-router-dom";
import CartContext from "../contexts/cartContext/context";

interface IProps extends RouteComponentProps {}

const Shop: FC<IProps> = ({ match }) => {
  const [items, setItems] = useState([]);
  const { addItemToCart } = useContext(CartContext);
  const { category } = useParams();

  useEffect(() => {
    const localStorageCollections = localStorage.getItem("collection");
    if (localStorageCollections) {
      const collections = JSON.parse(localStorageCollections);
      const collection = collections.find(
        (collection: any) => collection.routeName === category
      );

      setItems(collection.items);
    }
  }, [category]);

  console.log(items);

  return (
    <ul>
      {items.map((item: any) => (
        <li key={item.id}>
          <h2>{item.name}</h2>
          <img src={item.imageUrl} alt="" />
          <span>{item.price * 10} kr</span>
          <button onClick={() => addItemToCart(item)}>Add to cart</button>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(Shop);

import React, { FC, useEffect, useState } from "react";
import { withRouter, RouteComponentProps, useParams } from "react-router-dom";

interface IProps extends RouteComponentProps {}

const Shop: FC<IProps> = ({ match }) => {
  const [items, setItems] = useState([]);
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
        </li>
      ))}
    </ul>
  );
};

export default withRouter(Shop);

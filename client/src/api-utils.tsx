import React, { useState } from "react";
import Loader from "react-loader-spinner";

const [loading, setLoading] = useState(false);

const createOrder = async (newOrder) => {
  const options: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(newOrder),
  };

  setLoading(true);
  const res = await fetch("http://localhost:3002/api/neworder", options);
  const data = await res.json();
  setLoading(false);
};

export default createOrder;

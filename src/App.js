import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { decode, encode } from "base-64";

import createRoutes from "./routes";

export default function App() {
  const signed = useSelector(state => state.user.signed);

  const Routes = createRoutes(signed);

  useEffect(() => {
    console.log(signed);
  }, []);

  return <Routes />;
}

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.URL, process.env.KEY);

async function getCountries() {
  const countries = await supabase.from("countries").select();
  console.log(countries.data);
}

getCountries();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

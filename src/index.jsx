import React from "react";
import { createRoot } from "react-dom/client";
import PortoApp from "./component/PortoApp";
import "./styles/style.css";


const root = createRoot(document.getElementById("root"));
root.render(<PortoApp/>);
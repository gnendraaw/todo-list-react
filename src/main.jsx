import React from "react";
import { createRoot } from "react-dom/client";
import TodoApp from "./components/TodoApp";

// Styling
import './styles/style.css';

const root = createRoot(document.getElementById("root"));
root.render(<TodoApp />);
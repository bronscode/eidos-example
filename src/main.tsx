import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import GlobalProvider from "./GlobalProvider.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalProvider />
  </React.StrictMode>,
)

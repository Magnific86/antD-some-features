import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { App } from "./App"
import { store } from "./store/store"
import "./styles/globals.css"
import "./styles/loader.css"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

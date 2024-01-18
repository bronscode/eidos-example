import types from "./types.json";
import langEN from "./translation_en-GB.json";
import { applyMiddleware, createStore } from 'redux'
import thunk from "redux-thunk";
import { EidosProvider, applyEidosToRedux } from "@bronscode/eidos";
import { Provider } from "react-redux";
import App from "./App";

// We create a redux store (possibly with the thunk middleware)
const store = createStore(mainReducer, applyMiddleware(thunk));

// We connect Eidos and Redux
applyEidosToRedux(store, mainReducer);

export default function GlobalProvider() {
  return (
    // As usual we wrap our component tree in the Redux provider
    <Provider store={store}>
      {/* We wrap the EidosProvider */}
      <EidosProvider
        types={types}
        locale="en-GB"
        languages={{
          "en-GB": langEN,
        }}
      >
        <App />
      </EidosProvider>
    </Provider>
  );
}

function mainReducer(state = {}, action: any) {
	return state;
}

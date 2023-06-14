import { AppRoute } from "@/routes";
import { Provider } from "react-redux"; 
import store from "@/store/store";

function App() {
  return (
    <Provider store={store}>
      <AppRoute />
    </Provider>
  );
}

export default App;

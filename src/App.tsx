import "./App.css";
import Navigation from "./Navigation";

import { useSelector } from "react-redux";
import { AppStore } from "./redux/store";
function App() {
  const user = useSelector((state: AppStore) => state.user);
  const cart = useSelector((state: AppStore) => state.cart);
  return (
    <div>
      <span>{user.id}</span>
      <span>{user.name}</span>
      <div>{JSON.stringify(user)}</div>
      <Navigation />
    </div>
  );
}

export default App;

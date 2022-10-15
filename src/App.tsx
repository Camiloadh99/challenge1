import "./App.css";
import Navigation from "./Navigation";

import { useSelector } from "react-redux";
import { AppStore } from "./redux/store";
function App() {
  const user = useSelector((state: AppStore) => state.user);
  const cart = useSelector((state: AppStore) => state.cart);
  return (
    <div>
      <span className="redux-headings">{user.id}</span>
      <span className="redux-headings">{user.name}</span>
      <div className="redux-headings">
        {JSON.stringify(user)}
        <div className="pt-4">
          <a style={{ margin: "0 auto" }} href="/home">
            <button>Redux</button>
          </a>
        </div>
      </div>

      <Navigation />
    </div>
  );
}

export default App;

import { LayoutHome } from "./components";
import { HomeContextProvider } from "./context/homeContext";
import "./style/style.css";
export default function Home() {
  return (
    <HomeContextProvider>
      <LayoutHome />
    </HomeContextProvider>
  );
}

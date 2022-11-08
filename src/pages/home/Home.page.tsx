import { LayoutHome } from "./components";
import { HomeContextProvider } from "./context/homeContext";
import "./style/style.css";
export default function Home() {
  // TODO -> Efectos de entrada
  // TODO -> Despliegue
  return (
    <HomeContextProvider>
      <LayoutHome />
    </HomeContextProvider>
  );
}

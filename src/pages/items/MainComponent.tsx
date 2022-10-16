import { ItemContext, ShowItems } from "./components";
import { ItemContextProvider } from "./context/ItemContext";

export default function MainComponent(props: any) {
  return (
    <ItemContextProvider>
      <ShowItems />
      <ItemContext />
    </ItemContextProvider>
  );
}

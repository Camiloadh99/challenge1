import { useItemContext } from "../context/ItemContext";
import "../styles/itemContext.css";
export default function ItemContext() {
  const { formItemOne } = useItemContext();
  return (
    <div className="container-item ">
      <h2>Context</h2>
      <h3>{formItemOne} </h3>
    </div>
  );
}

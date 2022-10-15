import { useItemContext } from "../context/ItemContext";

export default function ItemContext() {
  const { item, setItem } = useItemContext();
  return <div>{item}</div>;
}

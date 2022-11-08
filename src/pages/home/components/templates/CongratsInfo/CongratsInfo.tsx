import { useHomeContext } from "pages/home/context/homeContext";
import { Button } from "../../atoms";
import "./style.css";
export default function CongratsInfo() {
  const { setSuccesClaim } = useHomeContext();
  return (
    <div className="congrats-container">
      <div className="w100">
        <h2 className="congrats-text py-4 px-4">
          Congratulations you started your 7 day trial!
        </h2>
        <div className="congrats-button-container">
          <Button
            label="Back"
            onClick={() => {
              setSuccesClaim(false);
            }}
          />
        </div>
      </div>
    </div>
  );
}

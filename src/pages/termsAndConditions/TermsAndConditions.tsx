import { Background } from "components";
import { Button, Card } from "pages/home/components";
import { useNavigate } from "react-router-dom";
import "./style.css";
export default function TermsAndConditions() {
  const navigate = useNavigate();
  return (
    <Background>
      <div className="py-5 row page-terms">
        <div className="col-lg-3 col-1"></div>
        <div className="col-lg-6 col-10 card-item">
          <Card className="fade-in">
            <h2 className="py-4">Terms And Conditions</h2>
            <h3 className="py-4 mb-3">
              Pagina creada para el primer challenge de Gentleman Programing!
            </h3>
            <Button
              label="Back"
              onClick={() => {
                navigate("/");
              }}
            />
          </Card>
        </div>
        <div className="col-lg-3 col-1"></div>
      </div>
    </Background>
  );
}

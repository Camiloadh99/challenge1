import { Background } from "components";
import Information from "../../molecules/Information/Information";
import Form from "../../molecules/Form/Form";
import "../../../style/style.css";
import { useHomeContext } from "pages/home/context/homeContext";
import CongratsInfo from "../CongratsInfo/CongratsInfo";

export default function LayoutHome() {
  const { succesClaim } = useHomeContext();
  return (
    <Background>
      {!succesClaim ? (
        <div className="row container-home">
          <div className="col-lg-1 col-1"></div>
          <div className="col-10 col-lg-5  center-info fade-in">
            <Information />
          </div>
          <div className="col-lg-0 col-1"></div>
          <div className="col-lg-0 col-1"></div>
          <div className="col-lg-5 col-10 center-info fade-in pb-5">
            <Form />
          </div>
          <div className="col-lg-1 col-1"></div>
        </div>
      ) : (
        <CongratsInfo />
      )}
    </Background>
  );
}

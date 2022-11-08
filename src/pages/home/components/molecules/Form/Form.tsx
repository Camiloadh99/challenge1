import { useInputValue, useInputValueContext } from "hooks/changeInputValue";
import { useHomeContext } from "pages/home/context/homeContext";
import { isValidEmail } from "pages/home/utilities/emailValiation";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge, Button, Card, InputForm } from "../../atoms";
import "./style.css";
enum label {
  buttonLabel = "CLAIM YOUR FREE TRIAL",
}
export default function Form() {
  const navigate = useNavigate();
  const { setSuccesClaim } = useHomeContext();
  const nameForm = useInputValue("");
  const lastNameForm = useInputValue("");
  const emailForm = useInputValue("");
  const passwordForm = useInputValue("");

  //Errors

  const [nameError, setNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!nameForm.value) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (!lastNameForm.value) {
      setLastNameError(true);
    } else {
      setLastNameError(false);
    }
    if (!isValidEmail(emailForm.value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (!passwordForm.value) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (
      nameForm.value &&
      lastNameForm.value &&
      emailForm.value &&
      passwordForm.value
    ) {
      setSuccesClaim(true);
    }
  };

  return (
    <>
      <div className="mb-4">
        <Badge />
      </div>

      <Card className="mt-4">
        <form action="/" onSubmit={handleSubmit}>
          <InputForm
            {...nameForm}
            placeholder="Name"
            error={nameError}
            labelError="First Name cannot be empty"
          />
          <InputForm
            {...lastNameForm}
            placeholder="Last Name"
            error={lastNameError}
            labelError="Last Name cannot be empty"
          />
          <InputForm
            {...emailForm}
            placeholder={emailError ? "email@example.com" : "Email"}
            type="email"
            labelError="Looks ika this is not an emai"
            error={emailError}
          />
          <InputForm
            {...passwordForm}
            placeholder="Password"
            type="password"
            error={passwordError}
            labelError="Password cannot be empty"
          />

          <Button label={label.buttonLabel} />
        </form>

        <h6 className="form__terms flex">
          By clicking the button you agree to our{" "}
          <span className="form__terms form__terms--color-red">
            <div
              onClick={() => {
                navigate("/terms-and-conditions");
              }}
            >
              <strong>Terms and Services </strong>
            </div>
          </span>
        </h6>
      </Card>
    </>
  );
}

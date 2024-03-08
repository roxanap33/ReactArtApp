import { useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import CustomInput from "./Input";

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer>
        <p className="paragraph">
          <CustomInput
            label="E-mail"
            $invalid={emailNotValid} //dollar sign to show that this prop is used only for styling
            type="email"
            // style={{
            //   backgroundColor: emailNotValid ? "#f73f3f" : "#d1d5db",
            // }}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <CustomInput
            label="Password"
            $invalid={passwordNotValid}
            type="password"
            //className={passwordNotValid ? "invalid" : undefined}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </ControlContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button className="button" onClick={handleLogin}>
          Sign In
        </Button>
      </div>
    </div>
  );
}

import { useState } from "react";
import Button from "./Button";
import CustomInput from "./Input";

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
    <div
      id="auth-inputs"
      className="w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800"
    >
      <div className="flex flex-col gap-2 mb-6">
        <p className="paragraph">
          <CustomInput
            label="E-mail"
            invalid={emailNotValid} //dollar sign to show that this prop is used only for styling
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
            invalid={passwordNotValid}
            type="password"
            //className={passwordNotValid ? "invalid" : undefined}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </div>
      <div className="flex jus gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}

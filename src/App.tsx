import { FormEvent, useState } from "react";
import { useMultistepForm } from "./useMultistepForm";
import UserForm from "./UserForm";
import AddressForm from "./AddressForm";
import AccountForm from "./AccountForm";

const INITIAL_DATA = {
  name: "",
  age: "",
  address: "",
  account: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const { steps, step, currentStepIdx, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />,
  ]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Completed!");
  }

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => ({ ...prev, ...fields }));
  }

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIdx + 1} / {steps.length}
        </div>
        {step}
        <div style={{ marginTop: "1rem", display: "flex", gap: ".5rem", justifyContent: "flex-end" }}>
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}

          <button type="submit">{isLastStep ? "Submit" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default App;

import React, { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h2 style={{ textAlign: "center", margin: 0, marginBottom: "2rem" }}>{title}</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto minmax(auto,400px)",
          gap: "1rem .5rem",
          justifyContent: "flex-start",
        }}
      >
        {children}
      </div>
    </>
  );
}

export default FormWrapper;

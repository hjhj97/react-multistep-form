import React from "react";
import FormWrapper from "./FormWrapper";

type UserData = {
  name: string;
  age: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

function UserForm({ name, age, updateFields }: UserFormProps) {
  return (
    <FormWrapper title="User Form">
      <label>Name</label>
      <input type="text" required value={name} onChange={(e) => updateFields({ name: e.target.value })} />
      <label>Age</label>
      <input type="text" required value={age} onChange={(e) => updateFields({ age: e.target.value })} />
    </FormWrapper>
  );
}

export default UserForm;

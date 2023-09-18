import React from "react";
import FormWrapper from "./FormWrapper";

type AccountData = {
  account: string;
};

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

function AccountForm({ account, updateFields }: AccountFormProps) {
  return (
    <FormWrapper title="Account Form">
      <label>Account</label>
      <input type="text" required value={account} onChange={(e) => updateFields({ account: e.target.value })} />
    </FormWrapper>
  );
}

export default AccountForm;

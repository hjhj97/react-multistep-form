import React from "react";
import FormWrapper from "./FormWrapper";

type AddressData = {
  address: string;
};

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

function AddressForm({ address, updateFields }: AddressFormProps) {
  return (
    <FormWrapper title="Address Form">
      <label>Address</label>
      <input type="text" required value={address} onChange={(e) => updateFields({ address: e.target.value })} />
    </FormWrapper>
  );
}

export default AddressForm;

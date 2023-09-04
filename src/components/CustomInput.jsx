import React from "react";
import { Button } from "@tremor/react";

const CustomInput = ({ value, onChange }) => {
  return (
    <div className="flex items-stretch">
      <Button
        color="slate-800"
        className="p-3 text-slate-100 rounded-r-none flex items-center mb-3"
        onClick={() => onChange(value + 1)}
      >
        +
      </Button>
      <input
        type="text"
        value={value}
        readOnly
        className="border p-2 w-16 text-base text-center rounded-none flex items-center mb-3"
      />
      <Button
        color="slate-800"
        className="p-3 text-slate-100 rounded-l-none flex items-center  mb-3"
        onClick={() => onChange(value - 1)}
      >
        -
      </Button>
    </div>
  );
};

export default CustomInput;

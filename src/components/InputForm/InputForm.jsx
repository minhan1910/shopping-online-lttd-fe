/* eslint-disable react/prop-types */
import { useState } from "react";
import { WrapperInputStyle } from "./style";

export default function InputForm({
  placeholder = "Nhập text",  
  onChange,
  ...rest
}) {
  const [valueInput, setValueInput] = useState("");

  return (
    <WrapperInputStyle
      placeholder={placeholder}
      value={valueInput}
      onChange={onChange}
      {...rest}
    />
  );
}

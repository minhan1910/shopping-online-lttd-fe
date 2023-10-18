/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Input } from "antd";

export default function InputComponent({
  size,
  placeholder,
  bordered = true,
  style,
  ...rests
}) {
  return (
    <Input
      size={size}
      placeholder={placeholder}      
      style={style}    
      {...rests}
    />
  );
}

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button } from "antd";

export default function ButtonComponent({
  size,
  styleButton,
  styleTextButton,
  bordered = true,
  children,
  ...rest
}) {
  return (
    <Button size={size} style={styleButton} {...rest}>
      <span style={styleTextButton}>{children}</span>
    </Button>
  );
}

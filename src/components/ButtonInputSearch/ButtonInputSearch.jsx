/* eslint-disable react/prop-types */
import { SearchOutlined } from "@ant-design/icons";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

export default function ButtonInputSearch({
  size,
  placeholder,
  textButton,
  bordered = true,
  backgroundColorInput = "#fff",
  backgroundColorButton = "rgb(13, 92, 182)",
  colorButton = "#fff",
}) {
  return (
    <div style={{ display: "flex" }}>
      <InputComponent
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{ backgroundColor: backgroundColorInput }}
      />
      <ButtonComponent
        size={size}
        bordered={bordered}
        icon={<SearchOutlined color={colorButton} />}
        style={{
          backgroundColor: backgroundColorButton,
          color: colorButton,
          border: bordered === false ? "none" : "",
        }}
      >
        <span>{textButton}</span>
      </ButtonComponent>
    </div>
  );
}

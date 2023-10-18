import { Checkbox, Rate } from "antd";
import {
  WrapperContent,
  WrapperLableText,
  WrapperTextPrice,
  WrapperTextValue,
} from "./style";

// make unique key for mapping function
const generateKey = (pre) => {
  return `${pre}_${new Date().getTime()}`;
};

const renderContent = (type, options) => {
  const onChange = () => {};

  switch (type) {
    case "text":
      return options.map((option) => {
        return <WrapperTextValue key={option}>{option}</WrapperTextValue>;
      });

    case "checkbox":
      return (
        <Checkbox.Group
          onChange={onChange}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {options.map((option) => (
            <Checkbox
              key={option.value}
              value={option.value}
              style={{ marginLeft: "0" }}
            >
              {option.label}
            </Checkbox>
          ))}
        </Checkbox.Group>
      );

    case "star":
      return options.map((option) => (
        <div key={generateKey(option)} style={{ display: "flex", gap: "5px" }}>
          <Rate
            disabled
            defaultValue={option}
            style={{
              fontSize: "12px",
            }}
          />
          <span>{`Từ ${option} sao`}</span>
        </div>
      ));

    case "price":
      return options.map((option) => {
        return (
          <WrapperTextPrice key={generateKey(option)}>
            {option}
          </WrapperTextPrice>
        );
      });

    default:
      return {};
  }
};
// đừng trách gì nhau
export default function NavbarComponent() {
  return (
    <div>
      <WrapperLableText>Lable</WrapperLableText>
      <WrapperContent>
        {renderContent("text", ["Tu lanh", "TV", "MAYGIAT"])}
      </WrapperContent>
      <WrapperContent>
        {renderContent("checkbox", [
          { value: "a", label: "A" },
          { value: "b", label: "B" },
          { value: "c", label: "C" },
        ])}
      </WrapperContent>
      <WrapperContent>{renderContent("star", [3, 4, 5])}</WrapperContent>
      <WrapperContent>
        <span>Giá</span>
        {renderContent("price", [
          "dưới 40.000",
          "40.000 -> 12.000",
          "120.000 -> 400.000",
          "trên 400.000",
        ])}
      </WrapperContent>
    </div>
  );
}

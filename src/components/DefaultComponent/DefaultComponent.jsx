/* eslint-disable react/prop-types */
import HeaderComponent from "../HeaderComponent/HeaderComponent";

export default function DefaultComponent({ children }) {
  return (
    <div>
      <HeaderComponent />
      {children}
    </div>
  );
}

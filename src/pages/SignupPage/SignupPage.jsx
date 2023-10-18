import InputForm from "../../components/InputForm/InputForm";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextLight,
} from "./style";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Image } from "antd";
import imageLogo from "../../assets/images/logo-login.png";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useState } from "react";

export default function SignupPage() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(0, 0, 0, 0.53)",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "800px",
            height: "445px",
            borderRadius: "6px",
            background: "#fff",
            display: "flex",
          }}
        >
          <WrapperContainerLeft>
            <h1>Xin chào</h1>
            <p>Đăng nhập và tạo tài khoản</p>
            <InputForm
              style={{ marginBottom: "10px" }}
              placeholder="abc@gmail.com"
            />
            <div style={{ position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  zIndex: 10,
                  top: "4px",
                  right: "8px",
                  cursor: "pointer",
                }}
              >
                {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
              </span>
              <InputForm
                type={isShowPassword ? "text" : "password"}
                placeholder="password"
                style={{
                  backgroundColor: "rgb(232, 240, 254)",
                  marginBottom: '10px'
                }}
              />
            </div>
            <div style={{ position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  zIndex: 10,
                  top: "4px",
                  right: "8px",
                  cursor: "pointer",
                }}
              >
                {isShowConfirmPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
              </span>
              <InputForm
                type={isShowConfirmPassword ? "text" : "password"}
                placeholder="confirm password"
                style={{
                  backgroundColor: "rgb(232, 240, 254)",
                }}
              />
            </div>
            <ButtonComponent
              size={40}
              styleTextButton={{
                color: "#fff",
                fontSize: "15px",
                fontWeight: "700",
              }}
              styleButton={{
                background: "rgb(255, 57, 69)",
                height: "48px",
                width: "100%",
                border: "none",
                borderRadius: "4px",
                margin: "26px 0 10px",
              }}
            >
              Đăng kí
            </ButtonComponent>
            <p>
              Bạn đã có tài khoản?
              <WrapperTextLight> Đăng nhập</WrapperTextLight>
            </p>
          </WrapperContainerLeft>
          <WrapperContainerRight>
            <Image
              src={imageLogo}
              alt="image-logo"
              preview={false}
              height={203}
              width={203}
            />
            <h4>Mua sắm tại LTTD</h4>
          </WrapperContainerRight>
        </div>
      </div>
    </div>
  );
}

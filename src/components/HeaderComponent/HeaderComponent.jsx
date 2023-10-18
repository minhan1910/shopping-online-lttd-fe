import { Badge, Col } from "antd";
import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperTextHeaderSmall,
  WrapperHeaderAccount,
} from "./style";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";

export default function HeaderComponent() {
  return (
    // gutter like gap
    <WrapperHeader>
      <Col span={6}>
        <WrapperTextHeader>ShopOnline</WrapperTextHeader>
      </Col>
      <Col span={11}>
        <ButtonInputSearch
          placeholder="Tìm kiêm sản phẩm..."
          size="large"
          bordered={false}
          textButton="Tìm kiếm"
        />
      </Col>
      <Col
        span={7}
        style={{
          display: "flex",
          gap: "54px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <WrapperHeaderAccount>
          <UserOutlined style={{ fontSize: "30px" }} />
          <div>
            <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
              <CaretDownOutlined />
            </div>
          </div>
        </WrapperHeaderAccount>
        <div>
          {/* <WrapperNumberCart>0</WrapperNumberCart> */}
          <Badge count={1} size="small">
            <ShoppingCartOutlined style={{ fontSize: "30px", color: "#fff" }} />
          </Badge>
        </div>
      </Col>
    </WrapperHeader>
  );
}

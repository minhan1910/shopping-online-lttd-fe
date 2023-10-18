import { Col, Image, Row } from "antd";
import imageProduct from "../../assets/images/test.webp";
import imageProductSmall from "../../assets/images/imagesmall.webp";
import {
  WrapperAddressProduct,
  WrapperButtonQuality,
  WrapperInputNumber,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperQualityProduct,
  WrapperStyleColImage,
  WrapperStyleImageSmall,
  WrapperStyleNameProduct,
  WrapperStyleTextSell,
} from "./style";
import { StarFilled, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

export default function ProductDetailsComponent() {
  function onChange() {}

  return (
    <Row
      style={{
        borderRadius: "4px",
        padding: "16px",
        background: "#fff",
      }}
    >
      <Col
        span={10}
        style={{
          borderRight: "1px solid #e5e5e5",
          paddingRight: "8px",
        }}
      >
        <Image src={imageProduct} alt="image-product" preview={false} />
        <Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image-product-small"
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image-product-small"
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image-product-small"
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image-product-small"
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image-product-small"
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image-product-small"
            />
          </WrapperStyleColImage>
        </Row>
      </Col>
      <Col span={14} style={{ paddingLeft: "10px" }}>
        <WrapperStyleNameProduct>
          Sách - Thám tử lừng danh Conan - Combo 10 tập từ tập 81 đến tập 90
        </WrapperStyleNameProduct>
        <div>
          <StarFilled
            style={{ fontSize: "10px", color: "rgb(253, 216, 54)" }}
          />
          <StarFilled
            style={{ fontSize: "10px", color: "rgb(253, 216, 54)" }}
          />
          <StarFilled
            style={{ fontSize: "10px", color: "rgb(253, 216, 54)" }}
          />
          <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
        </div>
        <WrapperPriceProduct>
          <WrapperPriceTextProduct>200.000</WrapperPriceTextProduct>
          <WrapperAddressProduct>
            <span>Giao đến</span>
            <span className="address">Q.1, P. Bến Nghé, Hồ Chí Minh</span>
            <span className="change-address"> - Đổi địa chỉ</span>
          </WrapperAddressProduct>
        </WrapperPriceProduct>
        <div
          style={{
            margin: "10px 0 20px",
            borderTop: "1px solid #e5e5e5",
            borderBottom: "1px solid #e5e5e5",
            padding: "10px 0",
          }}
        >
          <div style={{ marginBottom: "10px" }}>Số lượng</div>
          <WrapperQualityProduct>
            <WrapperButtonQuality>
              <MinusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </WrapperButtonQuality>
            <WrapperInputNumber
              defaultValue={3}
              size="small"
              onChange={onChange}
            />
            <WrapperButtonQuality>
              <PlusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </WrapperButtonQuality>
          </WrapperQualityProduct>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
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
              width: "220px",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Chọn mua
          </ButtonComponent>
          <ButtonComponent
            size={40}
            styleTextButton={{ color: "rgb(13, 92,182)", fontSize: "15px" }}
            styleButton={{
              background: "#fff",
              height: "48px",
              width: "220px",
              border: "1px solid rgb(13, 92,182)",
              borderRadius: "4px",
            }}
          >
            Mua trả sau
          </ButtonComponent>
        </div>
      </Col>
    </Row>
  );
}

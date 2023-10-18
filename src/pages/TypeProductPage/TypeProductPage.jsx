import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Col, Pagination, Row } from "antd";
import { WrapperNavbar, WrapperProducts } from "./style";

export default function TypeProductPage() {
  return (
    <div style={{ width: "100%", background: "#efefef" }}>
      <div
        style={{
          width: "1270px",
          margin: "0 auto",
        }}
      >
        <Row
          style={{
            display: "flex",
            flexWrap: "nowrap",
            paddingTop: "10px",
          }}
        >
          <WrapperNavbar span={4}>
            <NavbarComponent />
          </WrapperNavbar>
          <Col span={20}>
            <WrapperProducts>
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
            </WrapperProducts>
            <Pagination
              total={100}
              showQuickJumper
              defaultCurrent={2}
              style={{
                textAlign: "center",
                marginTop: "10px",
              }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

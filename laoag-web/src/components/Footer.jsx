import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="footer-section">
          <p>© 2024 Laoag Ilocos Norte Travel. All rights reserved</p>
          <p>
            This website is maintained by the Laoag Ilocos Norte Travel
            developers. The content is regularly updated to ensure accuracy.
            Please contact us for any queries or concerns.
          </p>

          <Container fluid="lg">
            <Row>
              <Col lg>
                <p>
                  Laoag Ilocos Norte Travel
                  <span>
                    Address: Laoag City, Ilocos Norte, Philippines Phone: +63
                    [Insert Phone Number] Email: tourism@laoagcity.gov.ph
                  </span>
                </p>
              </Col>

              <Col lg>
                <p>
                  Credits & Acknowledgments
                  <span>
                    Photos and Content: Thanks to the Laoag City Tourism Office
                    and local photographers for their contributions. Website
                    Developed by: Zainal Santos Privacy Policy | Terms of
                    Service
                  </span>
                </p>
              </Col>

              <Col lg>
                <p>
                  Follow Us
                  <span>
                    Facebook: [Insert Facebook Link] Instagram: [Insert
                    Instagram Link] Twitter: [Insert Twitter Link]
                  </span>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

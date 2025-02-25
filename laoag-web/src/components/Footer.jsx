import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="footer-section">
          <p className="footer-intro-credit">
            © 2025 Laoag Ilocos Norte Travel. All rights reserved
          </p>
          <p className="footer-intro-credit-p">
            This website is maintained by the Laoag Ilocos Norte Travel
            developers. The content is regularly updated to ensure accuracy.
            <span className="footer-intro-span">
              Please contact us for any queries or concerns.
            </span>
          </p>

          <Container fluid="lg">
            <div className="footer-info-section">
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
                      Photos and Content: Thanks to the Laoag City Tourism
                      Office and local photographers for their contributions.
                      <span>Website Developed by: Zainal Santos</span>
                    </span>
                  </p>
                </Col>

                <Col lg>
                  <p>
                    Explore Laoag City
                    <span>Landmarks & Attractions</span>
                    <span>Local Cuisine</span>
                    <span>Festivals & Events</span>
                    <span>Cultural Heritage</span>
                    <span>Travel Tips</span>
                  </p>
                </Col>

                <Col lg>
                  <p>
                    Explore Laoag City
                    <span>
                      Facebook: [Insert Facebook Link] Instagram: [Insert
                      Instagram Link] Twitter: [Insert Twitter Link]
                    </span>
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

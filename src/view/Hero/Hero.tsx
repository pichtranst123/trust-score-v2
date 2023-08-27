import React from "react";
// @styled-component
import {
  Layout,
  MainLayout,
  Collection,
  Text,
  Button,
  Row,
} from "./Hero.styled";



// @component
import Container from "components/Container/Container";

// @assets
import { FaTwitter, FaDiscord } from "react-icons/fa";
// ----------------------------------------------------------

export default function index() {
  return (
    <Layout id="about">
      <Container>
        <MainLayout>
          <Collection data-aos="fade-up" data-aos-duration="1000">
          TrustCore is a social network that believes in the power of trust.
          </Collection>
          <Text data-aos="fade-up">
           We are committed to creating a safe and secure environment. 
          </Text>
          <Row>
            <div data-aos="zoom-in-up" data-aos-duration="2000">
              <Button>
                <FaTwitter size={26} />
                <div> Follow us on Twitter</div>
              </Button>
            </div>
            <div data-aos="zoom-in-up" data-aos-duration="2000">
              <Button>
                <FaDiscord size={26} />
                <div>Join our Discord</div>
              </Button>
            </div>
          </Row>
        </MainLayout>
      </Container>
    </Layout>
  );
}

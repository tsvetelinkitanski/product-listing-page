import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <section className="mb-4">
          <MDBBtn outline color="light" floating className="m-1" role="button">
            <MDBIcon fab icon="facebook" />
          </MDBBtn>

          <MDBBtn outline color="light" floating className="m-1" role="button">
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn outline color="light" floating className="m-1" role="button">
            <MDBIcon fab icon="google" />
          </MDBBtn>

          <MDBBtn outline color="light" floating className="m-1" role="button">
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn outline color="light" floating className="m-1" role="button">
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn outline color="light" floating className="m-1" role="button">
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>
        <section className="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam, commodi
            optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

        <section className="">
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Get help</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    Order status
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    Shipping and delivery
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    Payment options
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">About</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    News
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    Investors
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    Sustainability
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Join us</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    Careers
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Find a store</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    Become a member
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    Feedback
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          textDecorationLine: "none",
        }}
      >
        © 2023 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          VogeVilla
        </a>
      </div>
    </MDBFooter>
  );
}

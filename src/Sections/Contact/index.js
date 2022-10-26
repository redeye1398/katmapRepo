import Facebook from "../../assets/facebook-square-brands.svg";
import LinkedId from "../../assets/linkedin-brands.svg";
import Twitter from "../../assets/twitter-square-brands.svg";
import Instagram from "../../assets/instagram-square-brands.svg";
import styled from "styled-components";

const ContactSection = styled.section`
  width: 100vw;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: #02353C;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 3rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--pink);
  }
`;

const Icons = styled.div`
  display: flex;
  margin-bottom: 3rem;
  a {
    &:hover {
      img {
        filter: invert(80%) sepia(100%) saturate(100%) hue-rotate(480deg)
          brightness(50%) contrast(57%);
      }
    }
    &:not(:last-child) {
      margin-right: 2rem;
    }
    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #ffffff;
    &:active,
    &:focus {
      border: none;
      outline: none;
      background-color: var(--nav);
    }
    &::placeholder {
      color: #ffffff;
      opacity: 0.6;
    }
    &[name="name"] {
      margin-right: 2rem;
    }
  }
  textarea {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #ffffff;
    margin-bottom: 2rem;
    &:focus,
    &:active {
      background-color: var(--nav);
    }
    &::placeholder {
      color: #ffffff;
      opacity: 0.6;
    }
  }
  button {
    padding: 0.8rem 2rem;
    background-color: var(--white);
    border-radius: 20px;
    font-size: 1.2rem;
    color: #080808;
    cursor: pointer;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

const Row = styled.div`
  @media only Screen and (max-width: 40em) {
    display: flex;
    flex-direction: column;
    input {
      &[name="name"] {
        margin-right: 0;
      }
    }
  }
`;
const Contact = () => {
  return (
    <><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#ffffff" fillOpacity="1" d="M0,256L80,250.7C160,245,320,235,480,197.3C640,160,800,96,960,80C1120,64,1280,96,1360,112L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
    </svg><ContactSection id="contact">

        <Title>Get in touch</Title>
        {/* <Text>Lorem ipsum dolor sit amet, consectetur adipisicing.</Text> */}
        <Icons>
          <a href="https://www.facebook.com/">
            {" "}
            <img src={Facebook} alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com//">
            <img src={LinkedId} alt="LinkedId" />
          </a>
          <a href="https://twitter.com/">
            <img src={Twitter} alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={Instagram} alt="Instagram" />
          </a>
        </Icons>
        <Form>
          <Row>
            <input name="name" type="text" placeholder="your name" />
            <input
              name="email"
              type="email"
              placeholder="enter working email id" />
          </Row>
          <textarea
            name=""
            id=""
            cols="30"
            rows="2"
            placeholder="your message"
          ></textarea>
          <div style={{ margin: "0 auto" }}>
            <button
              onClick={(e) => {
                e.preventDefault();
              } }
            >
              Submit
            </button>
          </div>
        </Form>
      </ContactSection></>
  );
};

export default Contact;

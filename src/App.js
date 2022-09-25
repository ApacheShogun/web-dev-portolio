import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./App.css";
import Modal from "./Modal";
import emailjs from "emailjs-com";
import { AiFillGithub, AiFillLinkedin, AiOutlineClose } from "react-icons/ai";

function App() {
  const [stickNav, setStickNav] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [website1, setWebsite1] = useState(false);
  const [website2, setWebsite2] = useState(false);

  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [response, setResponse] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", darkenNav);

    return () => {
      window.removeEventListener("scroll", darkenNav);
    };
  }, []);

  const darkenNav = () => {
    window.scrollY >= 105 ? setStickNav(true) : setStickNav(false);
  };

  const toggleSideBar = () => {
    setSideBar((prev) => !prev);
  };

  const openWebsite1 = () => {
    setToggleModal(true);
    setWebsite1(true);
  };

  const openWebsite2 = () => {
    setToggleModal(true);
    setWebsite2(true);
  };

  const sendmessage = (e) => {
    e.preventDefault();

    setIsLoading(true);

    setContactEmail("");
    setContactName("");
    setContactMessage("");

    if (!contactEmail || !contactName || !contactMessage) {
      setIsLoading(false);
      setIsError(true);
      setResponse("please fill in all fields before sending");
    } else {
      emailjs
        .sendForm(
          "service_crd1cqu",
          "template_vnn57j6",
          e.target,
          "z4_PKHilwJNIN2XPd"
        )
        .then((res) => {
          console.log(res);
          setIsLoading(false);
          setIsError(false);
          setResponse("Form submitted, thank you!");
        })
        .catch((err) => {
          console.log(err);
          setIsError(true);
          setIsLoading(false);
          setResponse("something went wrong! : (");
          alert("something went wrong! : (");
        });
    }
  };

  return (
    <div className="App">
      <div className={stickNav ? "nav-bar darken" : "nav-bar"}>
        <div className="nav-container">
          <h3 className="logo">Massicot</h3>
          <GiHamburgerMenu
            size="2em"
            className="hamburgerMenu"
            onClick={toggleSideBar}
          />

          {/* side bar on small screens */}
          <ul className={sideBar ? "sidebar openSidebar" : "sidebar"}>
            <AiOutlineClose
              className="closeSidebar"
              size="2em"
              onClick={toggleSideBar}
            />
            <li>
              <a href="/">Resume</a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kahlilmassicot"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ApacheShogun"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
          <div
            className={sideBar ? "backdrop showBackdrop" : "backdrop"}
            onClick={toggleSideBar}
          ></div>

          <ul className="nav-links">
            <li>
              <a
                href="https://drive.google.com/file/d/181p2U4OGfU9s9wz0hVpGkA8L4w95QnEa/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kahlilmassicot"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ApacheShogun"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="main-section">
        <div className="banner-container">
          <p>
            <strong>Hello!</strong> I am Kahlil Massicot
          </p>
          <h1>Front-End Web Developer</h1>
          <div className="btn-container">
            <a href="#projects" className="project-btn">
              projects
            </a>
            <a href="#contact" className="contact-btn">
              contact
            </a>
          </div>
        </div>
      </div>

      <div className="about-section">
        <div className="about-flex">
          <div className="about-me">
            <h2>About Me</h2>
            <div className="img-circle">
              <img
                src={require("./assets/devPerson.jpg")}
                alt="kahlil massicot"
              />
            </div>
          </div>

          <div className="about-content">
            <div className="about">
              <h3>Hello</h3>
              <p>
                I am a front-end web-developer from the beautiful U.S. Virgin
                Islands. I will use my knowledge of the power of technology to
                solve problems and work in different industries in this vast
                world of the web.
              </p>
            </div>
            <div className="skills">
              <h3>skills</h3>
              <div className="technologies-container">
                <div className="tech">
                  <img src={require("./assets/react.png")} alt="" />
                  <p>react</p>
                </div>
                <div className="tech">
                  <img src={require("./assets/javascript.png")} alt="" />
                  <p>javascript</p>
                </div>
                <div className="tech">
                  <img src={require("./assets/nodejs.png")} alt="" />
                  <p>nodejs</p>
                </div>
                <div className="tech">
                  <img src={require("./assets/express.png")} alt="" />
                  <p>express</p>
                </div>
                <div className="tech">
                  <img src={require("./assets/mysql.png")} alt="" />
                  <p>mysql</p>
                </div>
                <div className="tech">
                  <img src={require("./assets/css.png")} alt="" />
                  <p>css</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project-section" id="projects">
        <h2>Projects</h2>
        <div className="website-wrapper">
          <div className="website" onClick={() => openWebsite1()}>
            <img
              src={require("./assets/nebulapostersite.jpg")}
              alt="nebule poster dot com"
            />
          </div>
          <div className="website" onClick={() => openWebsite2()}>
            <img
              src={require("./assets/oniquickchat-ios.jpg")}
              alt="oni quick chat dot com"
            />
          </div>
        </div>

        {toggleModal && (
          <div className="modal-backdrop">
            <Modal
              setToggleModal={setToggleModal}
              website1={website1}
              website2={website2}
              setWebsite1={setWebsite1}
              setWebsite2={setWebsite2}
            />
          </div>
        )}
      </div>

      <div className="contact-section" id="contact">
        <h2>Contact</h2>
        <p>Feel free to contact me. I will get back as soon as possible : )</p>

        <form className="contact-form" onSubmit={sendmessage}>
          <label htmlFor="name">name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
          />
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
          />
          <label htmlFor="message">body</label>
          <textarea
            name="message"
            rows="5"
            id="message"
            value={contactMessage}
            onChange={(e) => setContactMessage(e.target.value)}
          ></textarea>

          <button type="submit">
            {isLoading ? (
              <div className="lds-ring">
                <div></div>
              </div>
            ) : (
              <span>send message</span>
            )}
          </button>
        </form>

        <span className="res" style={{ color: isError ? "red" : "green" }}>
          {response}
        </span>
      </div>

      <div className="footer">
        <h2>my email: massicot.kahlil@gmail.com</h2>
        <div className="footer-icons">
          <a
            href="https://github.com/ApacheShogun"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size="2em" />
          </a>

          <a
            href="https://www.linkedin.com/in/kahlilmassicot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin size="2em" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

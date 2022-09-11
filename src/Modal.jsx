import { AiOutlineCloseCircle } from "react-icons/ai";

const Modal = ({
  setToggleModal,
  website1,
  website2,
  setWebsite2,
  setWebsite1,
}) => {
  const closeModal = () => {
    setToggleModal(false);
    setWebsite1(false);
    setWebsite2(false);
  };

  return (
    <>
      {website1 && (
        <div className="modal-container">
          <AiOutlineCloseCircle
            size="1.8em"
            className="modal-close-btn"
            onClick={closeModal}
          />

          <div className="modal-web-box">
            <h2>NebulaPoster.com</h2>
            <div className="img-container">
              <img
                src={require("./assets/nebulapostersite.jpg")}
                alt="nebule poster dot com"
              />
            </div>
          </div>
          <div className="modal-content-box">
            <h2>About the website!</h2>
            <p>
              The web site is a full stack space social media CRUD applicaton
              with user authentication. The front end was made with react. The
              backend was made with nodejs, express, mysql, and sequelize for
              the ORM.
            </p>
            <div className="modal-btn-box">
              <a href="https://nebulaposter.com"
              target="_blank"
              rel="noopener noreferrer"
              >
                visit
              </a>
              <a href="/">
                code
              </a>
              <a href="/">
                demo
              </a>
            </div>
          </div>
        </div>
      )}

      {website2 && (
        <div className="modal-container">
          <AiOutlineCloseCircle
            size="1.8em"
            className="modal-close-btn"
            onClick={closeModal}
          />

          <div className="modal-web-box">
            <h2>OniQuickChat.com</h2>
            <div className="img-container">
              <img
                src={require("./assets/oniquickchat-ios.jpg")}
                alt="oni quick chat dot com"
              />
            </div>
          </div>
          <div className="modal-content-box">
            <h2>About the website!</h2>
            <p>
              The website is a real time messenger chat application using
              websockets. The front end was made with react. The back end was
              made with nodejs, express, and socket.io for the real time
              websocket messaging.
            </p>
            <div className="modal-btn-box">
            <a href="https://oniquickchat.com"
              target="_blank"
              rel="noopener noreferrer"
              >
                visit
              </a>
              <a href="/">
                code
              </a>
              <a href="/">
                demo
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

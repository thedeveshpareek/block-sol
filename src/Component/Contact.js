import React from "react";
import "../Assets/Home.css";
import { Button, Modal } from "react-bootstrap";

const Contact = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="section s-white container footer-contact">
      <div className="d-flex flex-row-reverse flex-column flex-c">
        <div className=" col-1 order-0  align-self-end stars-for-footer ">
          <div className="h-50">
            <div className="stars-bg" style={{ minHeight: "390px" }}></div>
          </div>
        </div>
        <div className="col-md-6 order-md-2 order-1 text-center text-md-right  align-self-center ">
          <img
            className="img-fluid footer-contact-image mb-4"
            id="xstation_app_ios_light_dark_1"
            src="https://xopenhub.pro/wp-content/themes/xopenhub/images/footer-question.png"
          />
        </div>
        <div className="col-md-5 order-md-1 order-2 col-xs-11 align-self-center ">
          <div className="big-section-title text-xs-center">
            Do you have <span className="red">any questions?</span>
          </div>
          <p className="pt-3">
            Get in touch with our sales department, and learn what sets us apart
            from the competition.
          </p>
          <button
            className="footer-button-contactCTA btn btn-red"
            style={{ marginTop: "23px" }}
            data-toggle="modal"
            onClick={() => setModalShow(true)}
          >
            Contact us
          </button>
        </div>
      </div>

      {/* // modal */}
      <Modal
        size="m"
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 class="modal-title text-left big-section-title" id="myModalLabel">
            Request
            <br /> a contact
          </h4>
          {/* form */}
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Phone" />
                </div>
                <div className="form-group">
                    <textarea className="form-control mt-3" rows="3" placeholder="Message"></textarea>
                </div>
                </form>
                
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-red">Suibmti</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contact;

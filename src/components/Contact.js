import { useEffect } from "react";

const Contact = ({ scroll }) => {
  useEffect(() => {
    const section = document.getElementById("contact");
    scroll(section.offsetTop);
  }, []);
  return (
    <div className="construction-wrapper" id="contact">
      <div className="contactUs-section">
        <h2>Contact Us</h2>

        <form action="#" method="post" className="contact-form">
          <label for="first-name">First Name:</label>
          <input type="text" id="first-name" name="first-name" required />

          <label for="last-name">Last Name:</label>
          <input type="text" id="last-name" name="last-name" required />

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label for="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" />

          <label for="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit" className="contact-btn">Submit</button>
        </form>
      </div>

      <div className="contact-info-section">
        <h3 className="section-title">Contact Information</h3>
        <p className="contact-info">
          Address: 123 Main Street, Budapest, Hungary
        </p>
        <p className="contact-info">Phone: +36 123 456 789</p>
        <p className="contact-info">Email: info@borsaconstruction.com</p>
      </div>

      <div className="map-section">
        <h2 className="section-title">Location</h2>
        <div className="location-map">
          <iframe
            title="Google Maps"
            width="800"
            height="400"
            frameborder="0"
            style={{ border: 0 }}
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDKQM-1LEDd2F5lVp5KTbrSS_sWvYC2iog&q=Budapest`}
            allowfullscreen
          ></iframe>
          <div className="map-overlay">
            <p>Your Location Name</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

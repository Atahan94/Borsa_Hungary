import constructionImageUrls from "./Images";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function Home(props) {
  
  const location = useLocation();
  useEffect(() => {
   if(location.hash !== ""){
    const locationWithoutHash = location.hash.replace(/#/g, ""); 
    const section = document.getElementById(locationWithoutHash)
    props.scroll(section.offsetTop);
   }
  }, [location.key]);
  

  return (
    <>
       <section id="about-us" className="about">
            <div className="container">
              <div className="about-content">
                <h2 className="section-heading">About Us</h2>
                <h5 className="section-subheading">
                  We are a leading construction company specializing in
                  high-quality construction services.
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pretium, justo a sollicitudin mattis, quam magna
                  ultricies lorem, eu eleifend felis turpis at dolor.
                </p>
                <p>
                  Phasellus non aliquam nisl, ac venenatis magna. Nunc sed
                  aliquam nunc. Donec interdum, metus sit amet commodo
                  convallis, turpis diam dapibus justo, a fringilla lorem mauris
                  non risus.
                </p>
              </div>
             <div><img
                src="/images/About_Us_Logo.png"    /*{constructionImageUrls[0]}*/
                alt="Construction Image"
                className="about-image"
              /></div>
            </div>
          </section>

       <section id="services" className="services">
            <div className="container">
              <h2 className="section-heading">Our Services</h2>
              <div className="services-list">
                <div className="service">
                  <img
                    src="/images/logos/Icon_S3.png"
                    alt="Service 1 Icon"
                    className="service-icon"
                  />
                  <h3 className="service-heading">Residential Construction</h3>
                  <p className="service-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="service">
                  <img
                    src="/images/logos/Icon_S2.png"
                    alt="Service 2 Icon"
                    className="service-icon"
                  />
                  <h3 className="service-heading">Commercial Construction</h3>
                  <p className="service-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="service">
                  <img
                    src="/images/logos/Icon_S.png"
                    alt="Service 3 Icon"
                    className="service-icon"
                  />
                  <h3 className="service-heading">Renovation</h3>
                  <p className="service-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </section>

    </>
  );
}

export default Home;

import React from 'react';

function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: '#2c3e50' }}>
      

      <section className="py-5">
        <div className="container text-center text-md-start">
          <div className="row">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Ecomm</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
              <p>
                Your one-stop destination for premium furniture. Discover our wide range of sofas, tables, and more, crafted to perfection to add elegance to your home.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Products</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
              <p>
                <a href="#!" className="text-white text-decoration-none">Sofas</a>
              </p>
              <p>
                <a href="#!" className="text-white text-decoration-none">Tables</a>
              </p>
              <p>
                <a href="#!" className="text-white text-decoration-none">Chairs</a>
              </p>
              <p>
                <a href="#!" className="text-white text-decoration-none">Beds</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Useful links</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
              <p>
                <a href="#!" className="text-white text-decoration-none">Your Account</a>
              </p>
              <p>
                <a href="#!" className="text-white text-decoration-none">Become an Affiliate</a>
              </p>
              <p>
                <a href="#!" className="text-white text-decoration-none">Shipping Rates</a>
              </p>
              <p>
                <a href="#!" className="text-white text-decoration-none">Help</a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
              <p><i className="fas fa-home mr-3"></i> Kottakkal, Malappuram, Kerala, India - 676501</p>
              <p><i className="fas fa-envelope mr-3"></i> info@ecomm.com</p>
              <p><i className="fas fa-phone mr-3"></i> +91 12345 67890</p>
              <p><i className="fas fa-print mr-3"></i> +91 12345 67891</p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className="text-white fw-bold text-decoration-none" href="/">Ecomm</a>
      </div>
    </footer>
  );
}

export default Footer;

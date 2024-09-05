import React from 'react';

const Footer: React.FC = () => {
    return(
        <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <p className='footer-text'>
              <p>&copy; Dynamic User Availability and Event Scheduling System</p>
              For more contact : <p><a href="mailto:ajaylogaom14@gmail.com">ajaylogaom14@gmail.com</a></p>
            </p>
        </div>
      </div>
    </div>
    </footer>
    );
};
export default Footer;
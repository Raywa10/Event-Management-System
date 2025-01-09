import React from "react";
const Footer=()=>{
return(
    <div className="footer">
        <div className="top">
            <div>
                <h1>Event</h1>
                <p  style={{color:"white"}}>Choose you favourite event.</p>
            </div>
            <div>
                <a href="/">
                    <i className="fa-brands fa-square-facebook"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-square-instagram"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-square-github"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-square-twitter"></i>
                </a>
            </div>
        </div>
        <div className="bottom">
            <div>
                <h4>Project</h4>
                <a href="/">Changelog</a>
                <a href="/">Status</a>
                <a href="/">License</a>
                <a href="/">All versions</a>
            </div>
            <div>
                <h4>Community</h4>
                <a href="/">Github</a>
                <a href="/">Issues</a>
                <a href="/">Project</a>
            </div>
            <div>
                <h4>Help</h4>
                <a href="/">Support</a>
                <a href="/">Status</a>
                <a href="/">Contact us</a>
            </div>
            <div>
                <h4>Others</h4>
                <a href="/">Terms of conditions</a>
                <a href="/">Privacy pilicy</a>
                <a href="/">License</a>
            </div>
        </div>
    </div>
)
}
export default Footer;
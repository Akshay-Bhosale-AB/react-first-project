import './../style/footer.css'
import {Link} from 'react-router-dom'

function Footer (){
    return(
        <>
        <div className="mainfooter">
          <div className="footer">
              <div className="d-flex">
                  <article className="abc">
                      <h2 className="logo"><span className="lower">i</span><span className="upper" >shop</span> 
                      </h2>
                      <p className="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, maxime rerum. Maxime ullam voluptatibus fuga aliquid commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sed.</p>
                    </article>
                    
                    <article className="abc">
                      <h5 className="heading-abc">Follow Us</h5>
                      <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veniam quae esse error dolorem. Magnam, eos.</p>
                      <i className="facebook fab fab-icon  fa-facebook-f" ></i>
                      <i className="twit fab fab-icon  fa-twitter"></i>
                    </article>
                    
                    <article  className="abc">
                      <h5 className="heading-abc">Contact Us</h5>
                      <p className="info">iShop: address @building 124 <br/> Call us now: 012-456-789 <br/> Email:support@whatever.com</p>
                    </article>
              </div>
              <div className="d-flex justify-content-center">
                    <article  className="abc-2">
                      <h5 className="heading-abc-2">Infomation</h5>
                    
                      <p>  <Link  className="abc-cont-2"  to="/about">About Us</Link></p>
                      <p> <Link  className="abc-cont-2" to="/info">Infomation</Link></p>
                      <p> <Link  className="abc-cont-2" to="/policy">Privacy Policy</Link></p>
                      <p> <Link  className="abc-cont-2" to="/term">Terms & Conditions</Link></p>
                    
                    </article>
                    <article  className="abc-2">
                      <h5 className="heading-abc-2">Service</h5>
                      <p>  <Link  className="abc-cont-2" to="/about">About Us</Link></p>
                      <p> <Link  className="abc-cont-2" to="/info">Infomation</Link></p>
                      <p> <Link  className="abc-cont-2" to="/policy">Privacy Policy</Link></p>
                      <p> <Link  className="abc-cont-2" to="/term">Terms & Conditions</Link></p>
                    </article>
                    <article  className="abc-2">
                      <h5 className="heading-abc-2">Extras</h5>
                      <p>  <Link  className="abc-cont-2" to="/about">About Us</Link></p>
                      <p> <Link  className="abc-cont-2" to="/info">Infomation</Link></p>
                      <p> <Link  className="abc-cont-2" to="/policy">Privacy Policy</Link></p>
                      <p> <Link  className="abc-cont-2" to="/term">Terms & Conditions</Link></p>
                    </article>
                    <article  className="abc-2">
                      <h5 className="heading-abc-2">My Account</h5>
                      <p>  <Link  className="abc-cont-2" to="/about">About Us</Link></p>
                      <p> <Link  className="abc-cont-2" to="/info">Infomation</Link></p>
                      <p> <Link  className="abc-cont-2" to="/policy">Privacy Policy</Link></p>
                      <p> <Link  className="abc-cont-2" to="/term">Terms & Conditions</Link></p>
                    </article>
                    <article  className="abc-2">
                      <h5 className="heading-abc-2">Userful Links</h5>
                      <p>  <Link  className="abc-cont-2" to="/about">About Us</Link></p>
                      <p> <Link  className="abc-cont-2" to="/info">Infomation</Link></p>
                      <p> <Link  className="abc-cont-2" to="/policy">Privacy Policy</Link></p>
                      <p> <Link  className="abc-cont-2" to="/term">Terms & Conditions</Link></p>
                    </article>
                    <article  className="abc-2">
                      <h5 className="heading-abc-2">Our Offers</h5>
                      <p>  <Link  className="abc-cont-2" to="/about">About Us</Link></p>
                      <p> <Link  className="abc-cont-2" to="/info">Infomation</Link></p>
                      <p> <Link  className="abc-cont-2" to="/policy">Privacy Policy</Link></p>
                      <p> <Link  className="abc-cont-2" to="/term">Terms & Conditions</Link></p>
                    </article>
                </div>

      </div>
    </div>
        </>
    )
}

export default Footer;
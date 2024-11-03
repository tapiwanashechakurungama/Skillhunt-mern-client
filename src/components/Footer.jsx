import send from "./../../public/form.png"
import { Link  } from "react-router-dom"
import logo from "./../../public/logo2_footer.png"
const Footer = () => {
  return (
    <footer className="footer">
       <footer>
     <div className="footer-wrappper pl-100 pr-100 section-bg" data-background="assets/img/gallery/footer-bg.png">
        
        <div className="footer-area footer-padding">
            <div className="padding">
                <div className="row">
                    <div className="col-xl-3 col-lg-5 col-md-4 col-sm-6">
                        <div className="single-footer-caption mb-50">
                            <div className="single-footer-caption mb-30">
                                
                                <div className="footer-logo mb-25">
                                    <Link className="links" to="/"><img src={logo} alt=""/></Link>
                                </div>
                                <div className="footer-tittle">
                                    <div className="footer-pera">
                                        <p>The automated process starts as  soon as your clothes go into the machine.</p>
                                    </div>
                                </div>
                               
                                <div className="footer-social">
                                    <Link className="links" ><i className="fab fa-twitter"></i></Link >
                                    <Link className="links"><i className="fab fa-facebook-f"></i></Link>
                                    <Link className="links"><i className="fab fa-pinterest-p"></i></Link >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5">
                        <div className="single-footer-caption mb-50">
                            <div className="footer-tittle">
                                <h4>Top categories</h4>
                                <ul>
                                    <li><Link className="links">Design & creatives</Link></li>
                                    <li><Link className="links">Telecommunication</Link></li>
                                    <li><Link className="links">Restaurant</Link></li>
                                    <li><Link className="links">Programing</Link></li>
                                    <li><Link className="links">Architecture</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-footer-caption mb-50">
                            <div className="footer-tittle">
                                <h4>For employer</h4>
                                <ul>
                                    <li><Link className="links">Design & creatives</Link></li>
                                    <li><Link className="links">Telecommunication</Link></li>
                                    <li><Link className="links">Restaurant</Link></li>
                                    <li><Link className="links">Programing</Link></li>
                                    <li><Link className="links">Architecture</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                        <div className="single-footer-caption mb-50">
                            <div className="footer-tittle">
                                <h4>Company</h4>
                                <ul>
                                    <li><Link className="links">Design & creatives</Link></li>
                                    <li><Link className="links">Telecommunication</Link></li>
                                    <li><Link className="links">Restaurant</Link></li>
                                    <li><Link className="links">Programing</Link></li>
                                    <li><Link className="links">Architecture</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                        <div className="single-footer-caption mb-50">
                            <div className="footer-tittle mb-50">
                                <h4>Subscribe newsletter</h4>
                                <p>Subscribe newsletter to get updates.</p>
                            </div>
                            <div className="footer-form" >
                                <div id="mc_embed_signup">
                                    <form >
                                    <input type="email" name="email" id="newsletter-form-email" placeholder="Email Address"
                                    className="placeholder hide-on-focus" required={true}/>
                                    <div className="form-icon">
                                        <button type="submit" name="submit" id="newsletter-submit"
                                        className="email_icon newsletter-submit button-contactForm"><img src={send} alt=""/></button>
                                    </div>
                                    <div className="mt-10 info"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-bottom-area">
        <div className="padding">
            <div className="footer-border">
                <div className="row d-flex align-items-center">
                    <div className="col-xl-12 ">
                        <div className="footer-copy-right text-center">
                            Copyright {2024} Website scanned by nashy
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</footer>
    </footer>
  )
}

export default Footer
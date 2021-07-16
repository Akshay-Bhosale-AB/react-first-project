import './../style/home.css';
import {Link} from 'react-router-dom';
import Logo from './../img-data/ipod.jpg'
import Tumb1 from './../img-data/lap-1.jpg'
import Tumb2 from './../img-data/lap-3.jpg'
import Tumb3 from './../img-data/lap-4.jpg'
import Tumb4 from './../img-data/mob-1.jpg'
import Tumb5 from './../img-data/mob-2.jpg'
import Tumb6 from './../img-data/ipad-1.jpg'
import Tumb7 from './../img-data/smartwatch2.jpg'
import Tumb8 from './../img-data/mob-3.jpg'

function Home (){
    return(
        <>
          {/* Main Container */}
            <div className="main-container">
                {/* Pink Advertise */}
                    
                    <div className="Pink-color-img" >
                        <div className="d-flex inner-container float-end">
                            <img src={Logo} className="rounded float-end" alt="logo"/>
                        </div>
                    </div>
                    
                {/* Best Seller */}
                    <div className="top-div">
                        <div className="sellereHead">
                            <h5 className="bs">BEST SELLER</h5>
                        </div>
                        <div className="nav-one">
                            <ul className="nav justify-content-center">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/all">All</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/mac">Mac</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/iphone">iPhone</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/ipad">iPad</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/ipod">iPod</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/accessories">Accessories</Link>
                                </li>
                            </ul>
                        </div>
                    {/* Home Cards */}
                        <div className="card-container">
                            <div className="Cards">
                                <div className="row row-cols-1 row-cols-md-4 g-4">
                                    <div className="col">
                                        <div className="card h-100">
                                            <div className="card-thumb">
                                            <img src={Tumb1} className="card-img-top thumb" alt="..." />
                                            </div>
                                       
                                        <div className="card-body">
                                            <h5 className="card-title thumb-title">Apple Macbook Pro</h5>
                                            <p className="card-text thumb-info">$499 <span>$599</span></p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card h-100">
                                        <div className="card-thumb"> <img src={Tumb2} className="card-img-top thumb" alt="..."/></div>
                                       
                                        <div className="card-body">
                                            <h5 className="card-title thumb-title">Apple Macbook Pro</h5>
                                            <p className="card-text thumb-info">$499 <span>$599</span></p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card h-100">
                                        <div className="card-thumb"><img src={Tumb3} className="card-img-top thumb" alt="..."/></div>
                                        
                                        <div className="card-body">
                                            <h5 className="card-title thumb-title">Apple Macbook Air</h5>
                                            <p className="card-text thumb-info">$499 <span>$599</span></p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card h-100">
                                        <div className="card-thumb"> <img src={Tumb4} className="card-img-top thumb" alt="..."/></div>
                                       
                                        <div className="card-body">
                                            <h5 className="card-title thumb-title">Apple iPhone 11</h5>
                                            <p className="card-text thumb-info">$499 <span>$599</span></p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card h-100">
                                        <div className="card-thumb"><img src={Tumb5} className="card-img-top thumb" alt="..." /></div>
                                        
                                        <div className="card-body">
                                            <h5 className="card-title thumb-title">Apple Macbook Pro</h5>
                                            <p className="card-text thumb-info">$499 <span>$599</span></p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card h-100">
                                        <div className="card-thumb"> <img src={Tumb6} className="card-img-top thumb" alt="..."/></div>
                                       
                                        <div className="card-body">
                                            <h5 className="card-title thumb-title">Apple Ipad</h5>
                                            <p className="card-text thumb-info">$499 <span>$599</span></p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card h-100">
                                        <div className="card-thumb"> <img src={Tumb7} className="card-img-top thumb" alt="..."/></div>
                                       
                                        <div className="card-body">
                                            <h5 className="card-title thumb-title">Apple Watch 21-1</h5>
                                            <p className="card-text thumb-info">$499 <span>$599</span></p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card h-100">
                                        <div className="card-thumb">
                                        <img src={Tumb8} className="card-img-top thumb" alt="..."/>
                                        </div>
                                       
                                        <div className="card-body">
                                            <h5 className="card-title thumb-title">Apple iPod 2A</h5>
                                            <p className="card-text thumb-info">$499 <span>$599</span></p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
              
                        </div>
                    {/* Load More */}
                            <ul className="nav load justify-content-center">
                                <li className="nav-item">
                                    <Link className="nav-link active navload" aria-current="page" to="/load_more">LOAD MORE</Link>
                                </li>
                            </ul>
                    </div>
                {/* Blue Advertise */}
                    <div className="Blue-color-img" >
                        <div className="d-flex inner-container ">
                            <div className="advertise ">
                                <h1 className="adv-head">iPhone 6 Plus</h1>
                                <p className="adv-infom">Performance and design. Taken <br/>right to the edge.</p>
                                <ul className="nav adv-ip6">
                                    <li className="nav-item ">
                                        <Link className="nav-link  link-adv-ip6" aria-current="page" to="/shopnow">SHOP NOW</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="advertise adv-two-img">
                            <img src={Logo} className="rounded float-end" alt="logo"/>
                            </div>
                        </div>
                    </div>
                {/* Shipping Process */}
                    <div className="shipping">
                        <div className="d-flex shipping-div">
                        <article className="bottom-flex3">
                            <i className="fas fas-icon fa-shipping-fast"></i>
                            <h5 className="bottom-abc">FREE SHIPPING</h5>
                            <p className="info-flex3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, maxime rerum. Maxime ullam voluptatibus fuga aliquid commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sed.</p>
                        </article>
                        
                        <article className="bottom-flex3">
                            <i className="fas fas-icon fa-dollar-sign"></i>
                            <h5 className="bottom-abc">100% REFUND</h5>
                            <p className="info-flex3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, maxime rerum. Maxime ullam voluptatibus fuga aliquid commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sed.</p>
                        </article>
                        
                        <article  className="bottom-flex3">
                            <i className="fas fas-icon fa-headset"></i>
                            <h5 className="bottom-abc">SUPPORT 24/7</h5>
                            <p className="info-flex3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, maxime rerum. Maxime ullam voluptatibus fuga aliquid commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sed.</p>
                        </article>
                        </div>
                    </div>
                    
                {/* Feature Product */}
                   <div className="feapro">
                        <div className="fea-prod">
                                <h5 className="pro-header">FEATURED PRODUCTS</h5>
                        </div>
                    </div>
                    {/* feature silde */}
                    <div className="fea-slide-container">
                        <div className='head-fea'> <h5>abc</h5></div>
                       
                    </div>
            </div>
        </>
    )
}

export default Home;
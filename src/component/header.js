import './../style/header.css'
import {Link} from 'react-router-dom'


function Header (){
    return(
        <>
        <div className="heading">
        <nav className="topnav navbar navbar-expand-lg navbar-light " >
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <Link className="nav-link active dropdown-toggle"  to="/en" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >EN</Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="/en">English</Link></li>
                            <li><hr className="dropdown-divider" /></li>   
                      <li><Link className="dropdown-item" to="/hindi" >Hindi</Link></li> 
                      <li><Link className="dropdown-item" to="/spanish" >Spanish</Link></li>
                      <li><Link className="dropdown-item" to="/bengali" >Bengali</Link></li>
                      <li><Link className="dropdown-item" to="/marathi" >Marathi</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="/money" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      $
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="/dollar">United States dollar</Link></li>
                            <li><hr className="dropdown-divider" /></li>   
                      <li><Link className="dropdown-item" to="/euro">Euro</Link></li> 
                      <li><Link className="dropdown-item" to="/pound">Pound sterling</Link></li>
                      <li><Link className="dropdown-item" to="/rupee">Indian Rupee</Link></li>
                      <li><Link className="dropdown-item" to="/yen">Japanese yen</Link></li>
                    </ul>
                  </li>
        
                </ul>
                <ul className="nav d-flex">
                    <li className="nav-item">
                        <Link className="nav-link" to="/profile"><i className="bi bi-person"></i>My Profile</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link trash-badge position-relative" to="/trash">
                        <i className="bi bi-trash"><span className="position-absolute top-30 start-30 translate-middle badge border border-light rounded-circle bg-danger p-1">2<span className="visually-hidden">unread messages</span></span></i></Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/cart">2 Items<span className="totPrice"> $998</span></Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/search"><i className="bi bi-search"></i></Link>
                      </li>
                  
                    </ul>
              </div>
            </div>
          </nav>
         
         
        <div className="logo" >
            <h3><span className="lower">i</span><span className="upper">shop</span> 
            </h3>
        </div>

        <ul className="nav justify-content-center" >
            <li className="nav-item">
              <Link className="nav-link"  aria-current="page" to="/home">HOME</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="navstore nav-link"  id="navbarDropdown" role="button" to="#" data-bs-toggle="dropdown" aria-expanded="false">STORE</Link>
            
              <ul className="dropdown-menu store-menu ">
              <div className='menu-colum'> 
                <li><h6 className="dropdown-header  menu-item">Accessoriesr</h6></li>
                <li><Link className="dropdown-item  menu-item" to="/store">AirPort & Wireless</Link></li>
                <li><Link className="dropdown-item  menu-item" to="/store">AppleCare</Link></li>  
                <li><Link className="dropdown-item  menu-item" to="/store"> Bags, Shells & Sleeves</Link></li>
                <li><Link className="dropdown-item  menu-item" to="/store">Business & Security</Link></li>
                <li><Link className="dropdown-item  menu-item" to="/store"> Cables & Docks</Link></li><br/>
              </div>
               
              <div className='menu-colum'> 
                {/* <li><h6 className="dropdown-header  menu-item"></h6></li> */}
                <li><Link className="dropdown-item  menu-item" to="/store">Cameras & Video</Link></li>  
                <li><Link className="dropdown-item  menu-item" to="/store">Car & Travel</Link></li>
                <li><Link className="dropdown-item  menu-item" to="/store">Cases & Films</Link></li>
              </div>
               
              <div className='menu-colum'>
                <li><h6 className="dropdown-header  menu-item">Categoryr</h6></li>
                <li><Link className="dropdown-item  menu-item" to="/store">Charging Devices</Link></li>   
                <li><Link className="dropdown-item  menu-item" to="/store">Connected Home </Link></li>
                <li><Link className="dropdown-item  menu-item" to="/store">Device Care</Link></li>
                <li><Link className="dropdown-item  menu-item" to="/store">Display & Graphic</Link></li>
                <li><Link className="dropdown-item  menu-item" to="/store">Fitness & Sport</Link></li>
              </div>

              <div className='menu-colum'>
                {/* <li><h6 className="dropdown-header  menu-item"></h6></li> */}
                <li><Link className="dropdown-item  menu-item" to="/store">Headphones</Link></li> 
                <li><Link className="dropdown-item  menu-item" to="/store">HealhKit</Link></li>
               
              </div>

              <div className='menu-colum'> 
                <li><h6 className="dropdown-header  menu-item">Category</h6></li>
                <li><Link className="dropdown-item  menu-item" to="/store">Mice & Keyboards</Link></li>  
                <li><Link className="dropdown-item  menu-item" to="/store">Music Creation</Link></li>
                <li><Link className="dropdown-item  menu-item" to="/store">Networking & Server</Link></li>
           
              </div>
              </ul>

            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/iphone">IPHONE</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/ipad">IPAD</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/macbook">MACBOOK</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/accesories">ACCESORIES</Link>
              </li>
          </ul>
    </div>

        </>
    )
}

export default Header;
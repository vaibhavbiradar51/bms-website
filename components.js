class Navbar extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `                                
        <nav id="mobile-menu" style="display: block;">
        <ul>
            <li><a href="./index.html">home</a></li>
            <li>
                <a>
                    Services
                    <i class="fa fa-angle-down"></i>
                </a>
                <ul class="sub-menu text-left">
                    <li><a href="./balcony-nets.html#main">Balcony safety Nets</a>
                        <ul class="sub-menu text-left">
                            <li><a href="./balcony-nets.html#main">Children safety nets</a></li>
                            <li><a href="./balcony-nets.html#main">Pets safety nets</a></li>
                            <li><a href="./balcony-nets.html#main">Grill safety nets</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="./bird-nets.html#main">Bird Nets</a>
                        <ul class="sub-menu text-left">
                            <li><a href="./bird-nets.html#main">Anti pigeon nets</a></li>
                            <li><a href="./bird-nets.html#main">Anti crow nets</a></li>
                            <li><a href="./bird-nets.html#main">Anti parrot nets</a></li>
                            <li><a href="./bird-nets.html#main">Anti sparrow nets</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="./animal-nets.html#main">Animal nets</a>
                        <ul class="sub-menu text-left">
                            <li><a href="./animal-nets.html#main">Anti monkey nets</a></li>
                            <li><a href="./animal-nets.html#main">Anti cat nets</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="./duct-area-nets.html#main">Duct area safety nets</a>
                        <ul class="sub-menu text-left">
                            <li><a href="./duct-area-nets.html#main">Terrace safety nets</a></li>
                            <li><a href="./duct-area-nets.html#main">Glass safety nets</a></li>
                            <li><a href="./duct-area-nets.html#main">Grill safety nets</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="./sports-nets.html#main">Sports nets</a>
                        <ul class="sub-menu text-left">
                            <li><a href="./sports-nets.html#main">Cricket nets</a></li>
                            <li><a href="./sports-nets.html#main">Football nets</a></li>
                            <li><a href="./sports-nets.html#main">Vollyball nets</a></li>
                            <li><a href="./sports-nets.html#main">Hockey nets</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="./agricultural-nets.html#main">Agricultural nets</a>
                        <ul class="sub-menu text-left">
                            <li><a href="./agricultural-nets.html#main">Green shade nets</a></li>
                            <li><a href="./agricultural-nets.html#main">Coconut tree safety nets</a></li>
                            <li><a href="./agricultural-nets.html#main">Plant safety nets</a></li>
                            <li><a href="./agricultural-nets.html#main">Round field safety nets</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="./building-nets.html#main">Building safety nets</a>
                        <ul class="sub-menu text-left">
                            <li><a href="./building-nets.html#main">Stair case safety nets</a></li>
                            <li><a href="./building-nets.html#main">Corridor safety nets</a></li>
                            <li><a href="./building-nets.html#main">Swimming pool safety nets</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="./parking-nets.html#main">Parking safety nets</a>
                        <ul class="sub-menu text-left">
                            <li><a href="./parking-nets.html#main">Car safety nets</a></li>
                            <li><a href="./parking-nets.html#main">Bike safety nets</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="./industrial-nets.html#main">Industrial safety nets</a>
                        <ul class="sub-menu text-left">
                            <li><a href="./industrial-nets.html#main">Construction safety nets</a></li>
                            <li><a href="./industrial-nets.html#main">Workers safety nets</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a href="./gallery.html">Gallery</a>
            </li>
            <li>
                <a href="./contactus.html">Contact Us</a>
            </li>
        </ul>
    </nav>
        `
    }
}

class Footer extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="footer-area black-bg sec-p-100 bg-color3">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <div class="footer-widget widget-1">
                        <div class="footer-logo">
                            <a href="./index.html"><img src="assets/images/main-logo.png" alt="footer-logo"
                                    class="img-fluid" /></a>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 col-sm-6">
                    <div class="footer-widget widget-2">
                        <h3>Our Services</h3>
                        <ul class="footer-popu-link">
                            <li><a href="./balcony-nets.html">Balcony Safety Nets</a></li>
                            <li><a href="./bird-nets.html">Bird Nets</a></li>
                            <li><a href="./animal-nets.html">Animal Nets</a></li>
                            <li><a href="./duct-area-nets.html">Duct Area Nets</a></li>
                            <li><a href="./sports-nets.html">Sports Nets</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-md-3 col-sm-6">
                    <div class="footer-widget widget-3">
                        <h3>Our Services</h3>
                        <ul class="footer-popu-link">
                        
                        
                        <li><a href="./agricultural-nets.html">Agricultural Nets</a></li>
                        <li><a href="./building-nets.html">Building Safety Nets</a></li>
                            <li><a href="./parking-nets.html">Parking Safety Nets</a></li>
                            <li><a href="./industrial-nets.html">Industrial Nets</a></li>
                        </ul>
                    </div>
                </div>

                

                <div class="col-md-3 col-sm-6">
                    <div class="footer-widget widget-3">
                        <h3>contact info</h3>
                        <div class="office-address border-bottom mb-20 pb-20">
                            <h4><a href="#">SMK Safety Nets</a></h4>
                            <p>
                                <a href="mailto:smkenterprises2001@gmail.com" style="text-decoration:none;color:black">smkenterprises2001@gmail.com</a>
                            </p>
                            <br>
                            <p>
                                <a href="tel:9900441699" style="text-decoration:none;color:black">Mobile - +91 9900441699</a>
                            </p>
                        </div>
                        <ul class="footer-social">
                            <li><a class="bg-color4" href="https://api.whatsapp.com/send?phone=919900441699"><i class="fa fa-whatsapp"></i></a></li>
                            <li><a class="bg-color5" href="https://t.me/smksafetynets"><i class="fa fa-telegram"></i></a></li>
                            <li><a class="bg-color6" href="https://youtube.com/channel/UCPgEiwoy0s5_JJf_tEJ3uZA" target="__blank"><i class="fa fa-youtube"></i></a></li>
                            <li><a class="bg-color5" href="https://www.instagram.com/p/CjS_qlVPiCe/?igshid=YmMyMTA2M2Y=" target="__blank"><i class="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
        `
    }
}

class PreLoader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="tractour-loader">
            <div class="main-preloader">
                <div class="spinner">
                    <div class="double-bounce1"></div>
                    <div class="double-bounce2"></div>
                </div>
            </div>
        </div>
        `
    }
}

class ContactInfoHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="header-middle-area sec-p-30">
        
        <div class="container">
        
            <div class="row">
                <div class="col-md-5">
                    <div class="header-middle-logo"><a href="./index.html"><img src="./assets/images/main-logo.png"
                                alt="SMK Safety nets" class="img-fluid" height="350" width="350"></a></div>
                </div>

                <div class="col-md-7">
                
                    <ul class="header-middle-short-info float-right owl-carousel owl-theme">
                        <li>
                            <i class="fa fa-phone"></i>
                            <div class="short-info">
                                phone number:
                                <h4>
                                <a href="tel:9900441699">
                                +91 9900441699
                                </a>
                                </h4>
                            </div>
                        </li>

                        <li>
                            <i class="fa fa-at"></i>
                            <div class="short-info">
                                email address:
                               
                                <h4 class="email-address">
                                <a href="mailto:smkenterprises2001@gmail.com">
                                 smkenterprises2001@gmail.com
                                 </a>
                                </h4>
                            </div>
                        </li>

               
                    </ul>
                    <marquee>Avaliable Locations - Hyderabad , Chennai , Kolkata , Banglore , Delhi , Mumbai , Jaipur and all across India  </marquee>
                </div>
            </div>
        </div>
        </div>
        `
    }
}


class ServicesSideMenu extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="single-sid-wdg">
        <h4 class="sid-wdg-title">Types of Nets<span></span></h4>
        <div class="sid-wdg-post">
            <div class="single-wdg-post">
                <div class="wdg-post-img">
                    <a href="./balcony-nets.html#main">
                        <img src="assets/images/services-images/balcony.jpg" alt="img"
                            class="img-fluid">
                    </a>
                </div>
                <div class="wdg-post-content">

                    <h5><a href="./balcony-nets.html#main">Balcony Safety Nets</a></h5>
                    <span>3 Types Avaliable</span>
                </div>
            </div>

            <div class="single-wdg-post">
                <div class="wdg-post-img">
                    <a href="./bird-nets.html#main">
                        <img src="assets/images/services-images/bird-nets.jpg" alt="img"
                            class="img-fluid">
                    </a>
                </div>
                <div class="wdg-post-content">

                    <h5><a href="./bird-nets.html#main">Bird Safety Nets</a></h5>
                    <span>4 Types Avaliable</span>
                </div>
            </div>

            <div class="single-wdg-post">
                <div class="wdg-post-img">
                    <a href="./animal-nets.html#main">
                        <img src="assets/images/services-images/animal-nets.jpg" alt="img"
                            class="img-fluid">
                    </a>
                </div>
                <div class="wdg-post-content">

                    <h5><a href="./animal-nets.html#main">Animal Safety Nets</a></h5>
                    <span>2 Types Avaliable</span>
                </div>
            </div>

            <div class="single-wdg-post">
                <div class="wdg-post-img">
                    <a href="./duct-area-nets.html#main">
                        <img src="assets/images/services-images/duct-area.jpg" alt="img"
                            class="img-fluid">
                    </a>
                </div>
                <div class="wdg-post-content">

                    <h5><a href="./duct-area-nets.html#main">Duct Area Safety Nets</a></h5>
                    <span>3 Types Avaliable</span>
                </div>
            </div>

            <div class="single-wdg-post">
                <div class="wdg-post-img">
                    <a href="./sports-nets.html#main">
                        <img src="assets/images/services-images/sports-nets.jpeg" alt="img"
                            class="img-fluid">
                    </a>
                </div>
                <div class="wdg-post-content">

                    <h5><a href="./sports-nets.html#main">Sports Nets</a></h5>
                    <span>4 Types Avaliable</span>
                </div>
            </div>

            <div class="single-wdg-post">
                <div class="wdg-post-img">
                    <a href="./agricultural-nets.html#main">
                        <img src="assets/images/services-images/agirculture-nets.jpg" alt="img"
                            class="img-fluid">
                    </a>
                </div>
                <div class="wdg-post-content">

                    <h5><a href="./agricultural-nets.html#main">Agricultural Safety Nets</a></h5>
                    <span>4 Types Avaliable</span>
                </div>
            </div>


            <div class="single-wdg-post">
                <div class="wdg-post-img">
                    <a href="./building-nets.html#main">
                        <img src="assets/images/services-images/building-nets.jpg" alt="img"
                            class="img-fluid">
                    </a>
                </div>
                <div class="wdg-post-content">

                    <h5><a href="./building-nets.html#main">Building Safety Nets</a></h5>
                    <span>3 Types Avaliable</span>
                </div>
            </div>

            <div class="single-wdg-post">
                <div class="wdg-post-img">
                    <a href="./parking-nets.html#main">
                        <img src="assets/images/services-images/parking-nets.jpg" alt="img"
                            class="img-fluid">
                    </a>
                </div>
                <div class="wdg-post-content">

                    <h5><a href="./parking-nets.html#main">Parking Safety Nets</a></h5>
                    <span>2 Types Avaliable</span>
                </div>
            </div>

            <div class="single-wdg-post">
                <div class="wdg-post-img">
                    <a href="./industrial-nets.html#main">
                        <img src="assets/images/services-images/industrial.jpg" alt="img"
                            class="img-fluid">
                    </a>
                </div>
                <div class="wdg-post-content">

                    <h5><a href="./industrial-nets.html#main">Industrial Safety Nets</a></h5>
                    <span>2 Types Avaliable</span>
                </div>
            </div>

   

    
        </div>
        </div>
        `
    }
}

class FollowUsWidget extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="single-sid-wdg">
        <h4 class="sid-wdg-title"><strong>follow</strong> us</h4>
        <ul class="wdg-follow-us">
            <li><a href="https://api.whatsapp.com/send?phone=919900441699"><i class="fa fa-whatsapp"></i></a></li>
            <li><a href="https://t.me/smksafetynets"><i class="fa fa-telegram"></i></a></li>
            <li><a href="https://youtube.com/channel/UCPgEiwoy0s5_JJf_tEJ3uZA" target="__blank"><i class="fa fa-youtube"></i></a></li>
            <li><a href="https://www.instagram.com/p/CjS_qlVPiCe/?igshid=YmMyMTA2M2Y=" target="__blank"><i class="fa fa-instagram"></i></a></li>
            <li><a href="mailto:smkenterprises2001@gmail.com"><i class="fa fa-envelope"></i></a></li>
        </ul>
        </div>
        `
    }
}

class FloatingWidgets extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <a class="whats-app" href="https://api.whatsapp.com/send?phone=919900441699" target="_blank">
        <i class="fa fa-whatsapp"></i>
        </a>
        <a class="telegram" href="https://t.me/smksafetynets" target="_blank">
            <i class="fa fa-telegram"></i>
        </a>
        <a class="call" href="tel:9900441699" target="_blank">
            <i class="fa fa-phone"></i>
        </a>
        `
    }
}

customElements.define("app-navbar", Navbar);
customElements.define("app-footer", Footer);
customElements.define("app-preloader", PreLoader);
customElements.define("app-contactheader", ContactInfoHeader);
customElements.define("app-sidemenu", ServicesSideMenu);
customElements.define("app-social-media", FollowUsWidget);
customElements.define("app-floating-widgets", FloatingWidgets);

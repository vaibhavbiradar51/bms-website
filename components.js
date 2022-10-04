class Navbar extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `                                
        <nav id="mobile-menu" style="display: block;">
        <ul>
            <li><a href="./index.html">home</a></li>
            <li><a href="./about.html">About</a></li>
            <li>
                <a>
                    Services
                    <i class="fa fa-angle-down"></i>
                </a>
                <ul class="sub-menu text-left">
                    <li><a>Balcony safety Nets</a>
                        <ul class="sub-menu text-left">
                            <li><a>Children safety nets</a></li>
                            <li><a>Pets safety nets</a></li>
                            <li><a>Grill safety nets</a></li>
                        </ul>
                    </li>
                    <li>
                        <a>Bird Nets</a>
                        <ul class="sub-menu text-left">
                            <li><a>Anti pigeon nets</a></li>
                            <li><a>Anti crow nets</a></li>
                            <li><a>Anti parrot nets</a></li>
                            <li><a>Anti sparrow nets</a></li>
                        </ul>
                    </li>
                    <li>
                        <a>Animal nets</a>
                        <ul class="sub-menu text-left">
                            <li><a>Anti monkey nets</a></li>
                            <li><a>Anti cat nets</a></li>
                        </ul>
                    </li>
                    <li>
                        <a>Duct area safety nets</a>
                        <ul class="sub-menu text-left">
                            <li><a>Terrace safety nets</a></li>
                            <li><a>Glass safety nets</a></li>
                            <li><a>Grill safety nets</a></li>
                        </ul>
                    </li>
                    <li>
                        <a>Sports nets</a>
                        <ul class="sub-menu text-left">
                            <li><a>Cricket nets</a></li>
                            <li><a>Football nets</a></li>
                            <li><a>Vollyball nets</a></li>
                            <li><a>Hockey nets</a></li>
                        </ul>
                    </li>
                    <li>
                        <a>Agricultural nets</a>
                        <ul class="sub-menu text-left">
                            <li><a>Green shade nets</a></li>
                            <li><a>Coconut tree safety nets</a></li>
                            <li><a>Plant safety nets</a></li>
                            <li><a>Round field safety nets</a></li>
                        </ul>
                    </li>
                    <li>
                        <a>Building safety nets</a>
                        <ul class="sub-menu text-left">
                            <li><a>Stair case safety nets</a></li>
                            <li><a>Corridor safety nets</a></li>
                            <li><a>Swimming pool safety nets</a></li>
                        </ul>
                    </li>
                    <li>
                        <a>Parking safety nets</a>
                        <ul class="sub-menu text-left">
                            <li><a>Car safety nets</a></li>
                            <li><a>Bike safety nets</a></li>
                        </ul>
                    </li>
                    <li>
                        <a>Industrial safety nets</a>
                        <ul class="sub-menu text-left">
                            <li><a>Construction safety nets</a></li>
                            <li><a>Workers safety nets</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a>Gallery</a>
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
                            <a href="#"><img src="assets/images/main-logo.png" alt="footer-logo"
                                    class="img-fluid" /></a>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 col-sm-6">
                    <div class="footer-widget widget-2">
                        <h3>Our Services</h3>
                        <ul class="footer-popu-link">
                            <li><a href="#">Balcony Safety Nets</a></li>
                            <li><a href="#">Bird Nets</a></li>
                            <li><a href="#">Animal Nets</a></li>
                            <li><a href="#">Duct Area Nets</a></li>
                            <li><a href="#">Sports Nets</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-md-3 col-sm-6">
                    <div class="footer-widget widget-3">
                        <h3>Our Services</h3>
                        <ul class="footer-popu-link">
                        
                        
                        <li><a href="#">Agricultural Nets</a></li>
                        <li><a href="#">Building Safety Nets</a></li>
                            <li><a href="#">Parking Safety Nets</a></li>
                            <li><a href="#">Industrial Nets</a></li>
                        </ul>
                    </div>
                </div>

                

                <div class="col-md-3 col-sm-6">
                    <div class="footer-widget widget-3">
                        <h3>contact info</h3>
                        <div class="office-address border-bottom mb-20 pb-20">
                            <h4><a href="#">SMK Safety Nets</a></h4>
                            <p>
                                <a href="mailto:smkenterprises2001@gmail.com">smkenterprises2001@gmail.com</a>
                            </p>
                            <p>
                                <a href="tel:9866204199">9866204199</a>
                            </p>
                        </div>
                        <ul class="footer-social">
                            <li><a class="bg-color4" href="https://api.whatsapp.com/send?phone=919866204199"><i class="fa fa-whatsapp"></i></a></li>
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
                    <div class="header-middle-logo"><a href=""><img src="./assets/images/main-logo.png"
                                alt="SMK Safety nets" class="img-fluid" height="350" width="350"></a></div>
                </div>

                <div class="col-md-7">
                
                    <ul class="header-middle-short-info float-right owl-carousel owl-theme">
                        <li>
                            <i class="fa fa-phone"></i>
                            <div class="short-info">
                                phone number:
                                <h4>
                                <a href="tel:9866204199">
                                +91 9866204199
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

customElements.define("app-navbar", Navbar);
customElements.define("app-footer", Footer);
customElements.define("app-preloader", PreLoader);
customElements.define("app-contactheader", ContactInfoHeader);
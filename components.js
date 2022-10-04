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
                            <li><a href="#">Children Safety Nets</a></li>
                            <li><a href="#">Pets Safety Nets</a></li>
                            <li><a href="#">Grill Safety Nets</a></li>
                            <li><a href="#">Anti Pigeon Nets</a></li>
                            <li><a href="#">Anti Crow Nets</a></li>
                            <li><a href="#">Anti Parrot Nets</a></li>
                            <li><a href="#">Anti Sparrow Nets</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-md-3 col-sm-6">
                    <div class="footer-widget widget-3">
                        <h3>Our Services</h3>
                        <ul class="footer-popu-link">
                            <li><a href="#">Anti Monkey Nets</a></li>
                            <li><a href="#">Anti Cat Nets</a></li>
                            <li><a href="#">Terrace Safety Nets</a></li>
                            <li><a href="#">Glass Safety Nets</a></li>
                            <li><a href="#">Grill Safety Nets</a></li>
                            <li><a href="#">Cricket Nets</a></li>
                            <li><a href="#">Football Nets</a></li>
                        </ul>
                    </div>
                </div>

                

                <div class="col-md-3 col-sm-6">
                    <div class="footer-widget widget-3">
                        <h3>contact info</h3>
                        <div class="office-address border-bottom mb-20 pb-20">
                            <h4><a href="#">office one</a></h4>
                            <p>123 demom js, khulna kh, chowrasta, jessore</p>
                            <p>+91 7548985632</p>
                        </div>
                        <ul class="footer-social">
                            <li><a class="bg-color4" href="#"><i class="fa fa-whatsapp"></i></a></li>
                            <li><a class="bg-color6" href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a class="bg-color5" href="#"><i class="fa fa-instagram"></i></a></li>
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
                                <h4>+91 5788452695</h4>
                            </div>
                        </li>

                        <li>
                            <i class="fa fa-at"></i>
                            <div class="short-info">
                                email address:
                                <h4 class="email-address">bjt@gmail.com</h4>
                            </div>
                        </li>

                        <li>
                            <i class="fa fa-map-marker"></i>
                            <div class="short-info">
                                Location:
                                <h4>Andhra Pradesh</h4>
                            </div>
                        </li>
                    </ul>
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
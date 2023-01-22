

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Nav,
    Navbar,
    
} from 'react-bootstrap';

function BrandExample() {
       return ( < > 
                
                < 
                    Navbar collapseOnSelect expand = "lg"
                    bg = "dark"
                    variant = "dark" >
                    <
                    Navbar.Brand href = "#home" > <img src="assets/images/logo1.png" alt="logo" style={{'width':'100', height:'auto',maxWidth:250,marginLeft:0,}} /> < /Navbar.Brand> <
                    Navbar.Toggle ariaControls = "responsive-navbar-nav" / >
                    <
                    Navbar.Collapse id = "responsive-navbar-nav" >
                    <
                    Nav className = "ml-auto"
                   
                    >
                    <
                    Nav.Link href = "#features" > Features < /Nav.Link> <
                    Nav.Link href = "#pricing" > Pricing < /Nav.Link> <
                    Nav.Link href = "#deets" > More details < /Nav.Link>  
                    <
                    Nav.Link href = "#features" > Features < /Nav.Link> <
                    Nav.Link href = "#pricing" > Pricing < /Nav.Link> <
                    Nav.Link href = "#deets" > More details < /Nav.Link> 
                    <
                    /Nav> 
                    
                    <
                    /Navbar.Collapse> 
                    < form class = "d-flex"  >

                        <
                        ul >
                        <
                        li >
                        <
                        span class = "social-icon social-facebook" >
                        <
                        i class = "fa fa-facebook" > < /i></span > < /li> <
                    li >
                        <
                        span class = "social-icon social-instagram" >
                        <
                        i class = "fa fa-instagram" > < /i></span > < /li>

                        <
                        /ul> <
                    div >
                        <
                        select className="form-select-sm">
                        <
                        option > PL < /option> <
                    option > EN < /option> < /
                        select > <
                        /div>

                        <
                        /form>
                    
                    <
                    /Navbar>
        < div className = "made4you-image" >
            <
            div className = "made4you" >
            <
            h3
        style = {
                {
                    color: 'white'
                }
            } > We make your vision into reality < /h3> <
            button type = "button"
        className = "btn btn-dark btn-lg download-button" >

            Kontakt < /button> <
            /div>

            <
            /div>

< div id = "features" >

    <
    div className = "container-fluid" >


    <
    div className = "row" >
    <
    div className = "feature-box col-lg-4 col-sm-12" >

    <
    h6 className = "feature-title" > KIM JESTEŚMY ? < /h6> <
    p > Made 4 You to rewolucyjne narzędzie dla architektów, które dzięki nowoczesnym
technologiom i unikatowym produktom pozwala tworzyć wyrafinowane wnętrza.
Jesteśmy polsko - brytyjska marką działającą w Wielkiej Brytanii, a teraz także
w Polsce. < /p> <
    /div>

    <
    div className = "feature-box col-lg-4 col-sm-12" >

    <
    h6 className = "feature-title" > JAK DZIAŁAMY ?
    <
    /h6> <
    p > Naszym celem jest wspieranie architektów na każdym poziomie procesu
projektowego, dlatego w jednym miejscu znajdziesz kompleksowe wyposażenie wnętrz
z wykończeniem pod klucz.Unikatowe, wyselekcjonowane produkty oraz
customizacja, która jest podstawą naszej działalności, pozwalają na kreowanie
niepowtarzalnych rozwiązań. < /p> <
    /div>

    <
    div className = "feature-box col-lg-4 col-sm-12" >

    <
    h3 className = "feature-title" > CO NAS WYRÓŻNIA ? < /h3> <
    p > W Made 4 You rozwijamy wykorzystanie najnowszych technologii, by wspierać
pracę architektów i tym, chcemy się z Wami dzielić!Dołącz do nas i sprawdź, jak
    możesz z nami rozwijać swoją działalność. < /p> <
    /div> <
    /div>

    <
    /div>
    </div>

<div class="white-section" id="features">

 <div class="container-fluid">
    <div class="row">
        <div class="col">
            <div class="feature-box col-sm-3">
                <img src="assets/images/pp1.jpg" class="img" alt="hand" />
                <p>
                    CUSTOMIZACJA
                </p>
            </div>
        </div>
        <div class="col">
            <div class="feature-box col-sm-3">
                <img src="assets/images/new.jpg" class="img" alt="hand" />
                <p>
                    UNIKATOWE PRODUKTY
                </p>
            </div>
        </div>
        <div class="col">
            <div class="feature-box col-sm-3">
                <img src="assets/images/glass.jpg" class="img" alt="hand" />
                <p>
                    NOWOCZESNE TECHNOLOGIE
                </p>
            </div>
        </div>
        <div class="col">
            <div class="feature-box col-lg-4">

                <div class="feature-box col-lg-4">
                    <img src="assets/images/hand.jpg" class="img" alt="hand" />
                    <p>
                        PARTNER W ROZWOJU/ SPOŁECZNOŚĆ ARCHITEKTÓW
                    </p>
                </div>
            </div>
        </div>
    </div>
 </div>


   
    < div className = "row" >
< div >
    <
    h3 style={{textAlign:'center'}}> Zobacz naszą ofertę < /h3> <
    /div>
< div className = "feature-box col-sm-4" >
    <
    h4 >
    Kuchnia <
    /h4> <
    img
src = "assets/images/kuch.jpeg"
className = "responsive1"
alt = "hand"
width = "260"
height = "145" / >

    <
    /div>
    < div className = "feature-box col-sm-4" >
        <
        h4 >
        Drzwi <
        /h4> <
        img
    src = "assets/images/drz.jpeg"
    className = "responsive1"
    alt = "hand"
    width = "260"
    height = "145" / > < /div>

        <
        div className = "feature-box col-sm-4" >
        <
        h4 >
        Okna <
        /h4> <
        img
    src = "assets/images/okno.jpeg"
    className = "responsive1"
    alt = "hand"
    width = "260"
    height = "145" / > < /div>

    </div>
    < /div>

< div className = "row"
id = "image-side" >
    <
    div className = "col-lg-6" >
    <
    p
style = {
        {
            paddingTop: 20
        }
    } >
    CZYM JEST MADE 4 YOU ? < /p> < p > LICZBA PRODUKTÓW MADE4YOU– LICZBA DZIAŁAMY W
KRAJACH - LICZBA LICZBA ZROBIONYCH PROJEKTÓW W ANGLII - LICZBA ARCHITEKCI
WSPÓŁPRACUJĄCY - LICZBA < /p > < /div > < div className = "col-lg-6" > < div
className = "right" > < img className = "banner-image"
src =
    "assets/images/m2.jpeg "
alt = "made" / > < /div > < /div > < /div > <
    div className = "row"
id = "image-side" >
    <
    div className = "col-lg-6" >
    <
    img className = "banner-image"
src = "assets/images/m3.jpeg"
alt = "made4" / >
    <
    /div>
    < div className = "col-lg-6" >
        <
        div className = "right" >
        <
        p
    style = {
            {
                paddingTop: 20
            }
        } >
        CUSTOMIZACJA < /p > <
    p >
        Czas unifikacji i masowej produkcji dóbr, odchodzi w niepamięć.Klienci, zmęczeni
    powtarzalnością oferowanych produktów, coraz częściej poszukują oryginalnych
    rozwiązań– spełniających ich potrzeby estetyczne, ale również idealnie
    dopasowanych do przestrzeni, jaką dysponują.Stawiamy na spersonalizowane
    rozwiązania, które architekci mogą uzyskać w jednym miejscu - w Made 4
    You.Wyselekcjonowane produkty oraz szeroka gama materiałów wykończeniowych
    pozwalają w dowolny sposób komponować wnętrza i zadowalać najbardziej
    wymagających inwestorów. < /p> < /div > < / div > 
    </div>

    < div class = "row"
    id = "pytanie" >
        <
        div
    className = " col-lg-6"
    style = {
            {
                textAlign: 'left',
                paddingLeft: 20
            }
        } >

        <
        h6 >
        PYTANIE 1. < /h6> <
        p >
        AK WYGLĄDA REALIZACJA PROJEKTU ? < br / > MAPKA– DZIAŁANIA 1 SPOTKANIE– omówienie
    koncepcji. < br / > 2. WYBÓR OPCJI dostępnych w M4Y: < br / > I.Produkty
    II.Produkty + montaż III.Produkty + montaż + usługi. < br / > 3. DOPASOWANIE–
    pomagamy dopasować nasze produkty do koncepcji projektowej. < br / > 4.
    DOPASOWANIE– WZORNIKI– dostarczamy niezbędnych wzorników i próbek materiałów <
        br / > 5. WYCENA - precyzyjna wycena, określenie terminów realizacji < br / > 6.
    REALIZACJA– my działamy, architekt ma podgląd na proces wykończeniowy < br / > 7.
    ODBIÓR– wspólnie z architektem dokonujemy odbioru zrealizowanego projektu. < /p> <
        /div> < /div > < div className = "made4you-image1" > < img src =
        "assets/images/pic2.png"
    alt = ""
    className = "responsive"
    width = "600"
    height =
        "400" / > < /div> < div class = "row" id="pytanie"> < div className = " col-lg-6"
    style = {
            {
                textAlign: 'left',
                paddingLeft: 20,
            }
        } >
        < h6 > PYTANIE 2 < /h6> < p > CZY MOŻNA ZAMÓWIĆ TYLKO PRODUKTY BEZ USŁUGI
    WYKOŃCZENIA LUB CZY MOŻNA ZAMÓWIĆ TYLKO USŁUGĘ WYKOŃCZENIOWĄ ? < /p> < p >
    Dostępne opcje współpracy:
        <
        br / >
        I.PRODUKTY < br / > II.PRODUKTY + MONTAŻ produkty customizowane są dostępne
    jedynie w opcji z montażem) < br / > III.PRODUKTY + MONTAŻ + USŁUGA WYKOŃCZENIA
    POD KLUCZ < /p> < /div > < /div> < div class = "row" id="pytanie" > < div
    className = " col-lg-6"
    style = {
            {
                textAlign: 'left',
                paddingLeft: 20,
            }
        } >
        < h6 > PYTANIE 3 < /h6> < p > CZY MOŻNA WYKONAĆ PROJEKT WNĘTRZA W MADE 4 YOU ? <
        /p> < p > Tak!Made 4 You to platforma dla architektów, która kompleksowo
    obsługuje inwestycję.Dzięki temu, że współpracujemy z wieloma uznanymi
    architektami– chętnie polecamy naszym inwestorom architektów, z którymi
    realizujemy dla Państwa zlecenie.Dowiedz się więcej < /p> < /div > < /div>

        <
        div >

        <
        img src = "assets/images/kich.jpeg"
    className = "responsive1"
    alt = "kuchnia" / >
        <
        /div>


    
        < footer class = "py-5 bg-dark" >
            <
            div class = "container px-4" >

            < p className = "m-0 text-center text-light" > ©2023 < span id = "copyright-year" > < /span>
            Made4You.Design by Kinde Tesfaye. <
                /p>
            <
            /div> 
           

            <
            /footer>

            
 < script >
     document
     .getElementById("copyright-year")
     .innerHTML = new Date().getFullYear(); <
 /script>

    < />);
    }

    export default BrandExample;
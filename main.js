$(function () {
    $('.toggle-menu').click(function () {
        $('.exo-menu').toggleClass('display');

    });

});


jQuery(document).ready(function () {
    if (window.location.href.indexOf("listing_") > -1 || window.location.href.indexOf("listingid") > -1 || window.location.href.indexOf("Listing_") > -1) {

        var listingFooter = jQuery('<!--AboveMedia Footer Content Starts --> <!-- Back to top--> <style> .button-row2 a { padding: 0.9em; background-color: #1c3f07; color: #fff; text-decoration: none; border-radius: 26px; border: 1px solid #eee; } #toTop { padding: 5px 3px; color: #fff; position: fixed; bottom: 50px; right: calc(50% - 60px); display: none; } @media only screen and (min-width: 1444px) { #toTop { display: none !important; } } </style> <div id="toTop" class="button-row2 align-center"><a href="#Top">Back to Top</a> </div> <div class="secondaryBackground"> <div class="mainBackground"> <div id="mid-footer"> <div class="footer-flexContainer"> <div class="footer-flex footer-left"> <h2>Pure Tulum Real Estate</h2> <br /> <p><strong><i class="fas fa-phone-alt"></i> <a href="tel:+16046287247">1 604 628 7247</a></strong> </p> <p><strong><i class="fas fa-phone-alt"></i> <a href="tel:+5219841163251">521 984 116 3251</a></strong></p> <p>Tulum, Riviera Maya, Mexico.</p> <div class="footer-social"> <h3>Follow Us:</h3> <a href="https://www.facebook.com/PlayadelCarmenRealEstateforSale" target="_blank"><i class="fab fa-facebook-f socials"></i></a> <a href="https://www.youtube.com/channel/UC6orF6bfaJthhV6ryh8pbdQ" target="_blank"><i class="fab fa-youtube socials"></i></a> <a href="https://www.linkedin.com/company/living-riviera-maya-real-estate/" target="_blank"><i class="fab fa-linkedin-in socials"></i></a> </div> </div> <div class="footer-flex"> <img src="https://mediavault.point2.com/p2a/htmltext/a09c/c630/3ae2/0e44ee1cf27436278eca/original.png" alt=""> <p><img class="realtor" alt="AMPI - Realtor" src="https://mediavault.point2.com/p2a/htmltext/780b/9c37/8398/1848d102673dc1a9e4e0/original.png" initialwidth="220"></p> <p>All associates at Pure Tulum Real Estate are licensed in the state of Quintana Roo.<br /> Mat. EPC090224NH8MR008000083</p> </div> <div class="footer-flex footer-right"> <h2 class="title">Useful Links</h2> <ul> <li><a href="/">Home</a></li> <li><a href="/Homes_Condos_for_Sale_in_Tulum/page_2711520.html">All Tulum Real Estate</a></li> <li><a href="https://www.puretulumrealestate.com/Tulum_Featured_Real_Estate/page_2711492.html">Featured Real Estate</a></li> <li><a href="https://www.puretulumrealestate.com/Pre_Sale_Homes_And_Condos_For_Sale_In_Tulum/page_2689931.html">Pre-Sale</a></li> <li><a href="https://www.puretulumrealestate.com/Resale_Homes_and_Condos_for_Sale_in_Tulum/page_2689938.html">Resale</a></li> <li><a href="https://www.puretulumrealestate.com/Contact_Us/page_2689849.html">Contact Us</a></li> </ul> </div> </div> </div> </div> <div id="final-footer" class="secondaryBackground">Copyright © 2022 Living Riviera Maya. All Rights Reserved <a href="https://abovemedia.ca" title="Real Estate Marketing" target="_blank" rel="nofollow">Real Estate Marketing</a> by AboveMedia Canada. </div> </div> <!--AboveMedia Footer Content Ends -->');

        jQuery('body').append(listingFooter);
    }

    jQuery(".row-fluid").last().addClass("footerBG");
});


function addCustomClasses() {
    if (window.location.href.indexOf("listing_") > -1 || window.location.href.indexOf("listingid") > -1 || window.location.href.indexOf("Listing_") > -1) {
        var headerDiv = document.getElementsByClassName('maindiv')[0];
    }
    else {
        var headerDiv = document.getElementsByClassName('row-fluid')[1];
    }
    headerDiv.classList.add('headerBG');
}
document.ready = addCustomClasses;

// When the user scrolls the page, execute myFunction 
window.onscroll = function () { myFunction() };
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    // Get the header depending on whether we're on a listing page or not
    if (window.location.href.indexOf("listing_") > -1 || window.location.href.indexOf("listingid") > -1 || window.location.href.indexOf("Listing_") > -1) {
        var header = document.getElementsByClassName('maindiv')[0];
        //console.log('AM');
    }
    else {
        var header = document.getElementsByClassName('headerBG')[0];
    }
    //Get the offset position of the navbar
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Make home fill width
$(document).ready(function () {
    var url = location.href;
    var headerDiv = document.getElementsByClassName('row-fluid')[2];
    console.log(url)
    if (url == "http://www.puretulumrealestate.com/" || url == "https://www.puretulumrealestate.com/" || url == "http://www.puretulumrealestate.com/#" || url == "https://www.puretulumrealestate.com/#" || (window.location.href.indexOf('https://www.puretulumrealestate.com/homes.aspx?__ts=') == 0)) {
        headerDiv.classList.add('fullwidth');
    }

});

$(window).scroll(function () {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

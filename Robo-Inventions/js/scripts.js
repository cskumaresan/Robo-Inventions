// JpreLoader ------------------

$('#main').jpreLoader({
        loaderVPos: '50%',
        autoClose: true,
    },
    function () {
        $('#main').animate({
            "opacity": '1'
        }, {
            queue: false,
            duration: 700,
            easing: "easeInOutQuad"
        });
        setTimeout(function () {
            $('.panel').slideUp(1000);
        }, 1200);
    });


function initRobo() {

    // functions ------------------
    "use strict";

    var ino = $('.navigation');
    var $tElems = $('.inner a');
    var ct = $('.inner a').length;
    var al = {
        queue: true,
        duration: 800,
        easing: "easeInOutQuad"
    };
    var bo = $('.body-overlay');
    var $mem = $('.member-box');
    var memlenght = $('.member-box').length;
    var $project = $('.box a');
    var projectlength = $('.box a').length;


    // show menu ------------------	

    function showmenu() {
        $(".nav-button").addClass('nav-rotade');
        ino.animate({
            "left": '0'
        }, al);
        ino.removeClass("isDown");
        bo.fadeIn();
        setTimeout(function () {
            for (var i = 0; i <= ct; i++) {
                var cft = $tElems[i];
                $(cft).delay(150 * i).animate({
                    'opacity': '1',
                    left: '0'
                }, al);
            }
        }, 100);
    }

    // hide menu ------------------

    function hidemenu() {
        $(".nav-button").removeClass('nav-rotade');
        ino.animate({
            "left": '-200px'
        }, al);
        ino.addClass("isDown");
        bo.fadeOut();
        setTimeout(function () {
            for (var i = 0; i <= ct; i++) {
                var cft = $tElems[i];
                $(cft).delay(150 * i).animate({
                    'opacity': '0',
                    left: '-25%'
                }, al);
            }
        }, 100);
    }

    // team show ------------------

    function showmemberbox() {
        setTimeout(function () {
            for (var i = 0; i <= memlenght; i++) {
                var memboxl = $mem[i];
                $(memboxl).delay(250 * i).animate({
                    'opacity': '1',
                    top: '0'
                }, 1000);
            }
        }, 600);
    }

    // project show ------------------

    function showprojectbox() {
        setTimeout(function () {
            for (var i = 0; i <= projectlength; i++) {
                var projectb = $project[i];
                $(projectb).delay(250 * i).animate({
                    'opacity': '1',
                    top: '0'
                }, 1000);
            }
        }, 600);
    }

    // call menu ------------------

    $(".nav-button").click(function () {
        if ($('.navigation').hasClass("isDown")) {
            showmenu();

        } else {
            hidemenu();
        }
        return false;
    });

    // counter ------------------

    function number(num, content, target, duration) {
        if (duration) {
            var count = 0;
            var speed = parseInt(duration / num);
            var interval = setInterval(function () {
                if (count - 1 < num) {
                    target.html(count);
                } else {
                    target.html(content);
                    clearInterval(interval);
                }
                count++;
            }, speed);
        } else {
            target.html(content);
        }
    }

    function stats(duration) {
        $('.stats .num').each(function () {
            var container = $(this);
            var num = container.attr('data-num');
            var content = container.attr('data-content');
            number(num, content, container, duration);
        });
    }

    // navigation links ------------------

    $(".inner a.scroll-link , .body-overlay").bind('click', function (event) {
        event.preventDefault();
        $.scrollTo(
            $(this).attr('href'), 950, {
                easing: 'swing',
                offset: 25,
                'axis': 'y'
            });
        setTimeout(function () {
            hidemenu();
        }, 900);
    });
    $(".scroll-links , .body-overlay").bind('click', function (event) {
        event.preventDefault();
        $.scrollTo(
            $(this).attr('href'), 150, {
                easing: 'swing',
                offset: 25,
                'axis': 'y'
            });
        setTimeout(function () {
            hidemenu();
        }, 900);
    });
    $(".logomiddle").bind('click', function (event) {
         $('html').scrollTo('#main', 1000, {
                'axis': 'y'
            });
    });
    // Call plugins  ----------------------------------------

    //  superslides --------

    $('#slides').superslides({
        animation: 'fade',
        play: 3000
    });

    //  scroll nav --------

    $('#nav').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 750,
        scrollOffset: 30,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
    });

    // owlCarousel  --------

    $("#clientsay").owlCarousel({
        navigation: true,
        pagination: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        transitionStyle: "goDown",
        play: 2000
    });

    $("#client-carusel").owlCarousel({
        navigation: false,
        pagination: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        items: 4,
    });

    var owl = $("#owl-demo");
    owl.owlCarousel({
        navigation: false,
        pagination: false,
        singleItem: true,
        paginationSpeed: 1000,
        goToFirstSpeed: 2000,
        autoHeight: true,
        mouseDrag: false,
        touchDrag: false,
        transitionStyle: "goDown"
    });

    $("#priceSlider").owlCarousel({
        navigation: false,
        pagination: false,
        slideSpeed: 300,
        items: 3,
        itemsDesktop: false,
    });
    // about animation  --------

    $(".next-slide, .close").click(function () {
        var ww = $(window).width();
        owl.trigger('owl.next');
        if (ww < 959) {
            setTimeout(function () {
                $('html').scrollTo('#about h2', 80, {
                    'axis': 'y'
                });
            }, 600);
        }
    });

    $('.lanch-sklills').click(function () {
        setTimeout(function () {
            $('.skillbar').each(function () {
                $(this).find('.skillbar-bar').animate({
                    width: $(this).attr('data-percent')
                }, 3000);
            });
        }, 1500);
    });

    // flexslider  --------

    $('.serviseslider').flexslider({
        animation: "slide",
        smoothHeight: true,
        slideshow: false,
        controlNav: false,
        directionNav: false,
        startAt: 2,
        start: function (slider) {
            $('a.animbox').click(function () {
                var slideTo = $(this).attr("name")
                var slideToInt = parseInt(slideTo)
                var ww = $(window).width();
                if (slider.currentSlide != slideToInt) {
                    slider.flexAnimate(slideToInt)
                }
                if (ww < 959) {
                    setTimeout(function () {
                        $('html').scrollTo('.serviseslider', 800, {
                            'axis': 'y'
                        });
                    }, 600);
                }
            });
        }
    });

    $('.single-media').flexslider({
        animation: "slide",
        slideDirection: "horizontal",
        slideshow: false,
        slideshowSpeed: 2500,
        animationDuration: 500,
        directionNav: true,
        controlNav: false,
    });

    $('.service_box').click(function () {
        $('.service_box').removeClass('actser');
        $(this).addClass('actser');
    });

    $('#options li').click(function () {
        $('#options li').removeClass('actcat');
        $(this).addClass('actcat');
    });

    // Scroll animation   ----------------------------------------

    $('.animaper').appear();

    $(document.body).on('appear', '.present-block', function () {
        $(this).each(function () {
            setTimeout(function () {
                $('.present-block').animate({
                    opacity: '1',
                    top: '0'
                }, {
                    queue: true,
                    duration: 1200
                });
            }, 600);
        });
    });

    $(document.body).on('appear', '#team', function () {
        $(this).each(function () {
            showmemberbox();
        });
    });

    $(document.body).on('appear', '.service_box', function () {
        $(this).each(function () {
            $('.service_box').animate({
                opacity: '1',
                top: '0'
            }, {
                queue: true,
                duration: 1200
            });

        });
    });
    $(document.body).on('appear', '#folio_container', function () {
        $(this).each(function () {
            showprojectbox();

        });
    });
    $(document.body).on('appear', '.smallicon', function () {
        $(this).each(function () {
            setTimeout(function () {
                $('.smallicon').animate({
                    opacity: '0.8',
                    top: '0'
                }, {
                    queue: true,
                    duration: 1200
                });
            }, 200);
        });
    });

    var $i = 1;
    $(document.body).on('appear', '.stats', function (e) {
        if ($i === 1) {
            stats(2600);
        }
        $i++;
        $('.num').addClass('norotade');
    });

    //  Mixitup  ------

    $('#folio_container').mixitup({
        targetSelector: '.box',
        effects: ['fade', 'rotateZ', 'rotateX', 'rotateY'],
        easing: 'windback',
        transitionSpeed: 1200,
    });


    // Scroll to  --------

    $('.to-top, .logo').click(function () {
        $('html').scrollTo('#topSlide, .simple-page-head', 1500, {
            'axis': 'y'
        });
        hidemenu();
    });
    $('.start').click(function () {
        $('html').scrollTo('#about', 1500, {
            'axis': 'y'
        });
    });

    $('.actform').click(function () {
        $('.contactForm').slideToggle(1000);
        setTimeout(function () {
            $('html').scrollTo('.to-top', 1000, {
                'axis': 'y'
            });
        }, 800);
    });

    $('.showmap').click(function () {
        if ($(this).hasClass('mnv')) {
            $('.mapbox').animate({
                "height": '450px'
            }, {
                queue: false,
                duration: 700,
                easing: "easeInOutQuad"
            });
            setTimeout(function () {
                $('html').scrollTo('.mapbox', 1000, {
                    'axis': 'y'
                });
            }, 800);
            $(this).removeClass('mnv');
        } else {
            $(this).addClass('mnv');
            $('.mapbox').animate({
                "height": '0'
            }, {
                queue: false,
                duration: 700,
                easing: "easeInOutQuad"
            });
        }
    });

    $('.close-map').click(function () {
        $('.showmap').addClass('mnv');
        $('.mapbox').animate({
            "height": '0'
        }, {
            queue: false,
            duration: 700,
            easing: "easeInOutQuad"
        });
    });

    // Subscribe   ----------------------------------------

    $('.subscriptionForm').submit(function () {
        var email = $('#subscriptionForm').val();
        $.ajax({
            url: 'php/subscription.php',
            type: 'POST',
            dataType: 'json',
            data: {
                'email': email
            },
            success: function (data) {
                if (data.error) {
                    $('#error').fadeIn()
                } else {
                    $('#success').fadeIn();
                    $("#error").hide();
                }
            }
        });
        return false
    });

    $('#subscriptionForm').focus(function () {
        $('#error').fadeOut();
        $('#success').fadeOut();
    });

    $('#subscriptionForm').keydown(function () {
        $('#error').fadeOut();
        $('#success').fadeOut();
    });

};

// Contact submit  ----------------------------------------

$("#submit_btn").click(function () {
    var user_name = $('input[name=name]').val();
    var user_email = $('input[name=email]').val();
    var user_message = $('textarea[name=message]').val();
    var proceed = true;
    if (user_name == "") {
        $('input[name=name]').css('border', '1px solid #F54F36');
        proceed = false
    }
    if (user_email == "") {
        $('input[name=email]').css('border', '1px solid #F54F36');
        proceed = false
    }
    if (user_message == "") {
        $('textarea[name=message]').css('border', '1px solid #F54F36');
        proceed = false
    }
    if (proceed) {
        post_data = {
            'userName': user_name,
            'userEmail': user_email,
            'userMessage': user_message
        };
        $.post('php/contact_me.php',
            post_data,
            function (data) {
                $("#result").hide().html('<div class="success">' + data + '</div>').slideDown(500);
                $('#contact_form input').val('');
                $('#contact_form textarea').val('')
            }).fail(
            function (err) {
                $("#result").hide().html('<div class="error">' + err.statusText + '</div>').fadeIn(1500)
            });
    }
});

$("#contact_form input, #contact_form textarea").keyup(function () {
    $("#contact_form input, #contact_form textarea").css('border', '1px solid #101011');
    $("#result").fadeOut(1500)
});


// Ajax portfolio   ----------------------------------------

function initPortfolio() {

    "use strict";

    var window_height = $(window).height(),
        current,
        next,
        prev,
        target,
        hash,
        url,
        page,
        title,
        projectIndex,
        scrollPostition,
        projectLength,
        ajaxLoading = false,
        wrapperHeight,
        pageRefresh = true,
        content = false,
        loader = $('div#loader'),
        portfolioGrid = $('#folio_container'),
        projectContainer = $('div#ajax-content-inner'),
        projectNav = $('#project-navigation ul'),
        exitProject = $('div#closeProject a'),
        easing = 'easeOutExpo',
        folderName = 'projects';

    $(window).bind('hashchange', function () {
        hash = $(window.location).attr('hash');
        var root = '#!' + folderName + '/';
        var rootLength = root.length;
        if (hash.substr(0, rootLength) != root) {
            return;
        } else {
            var correction = 50;
            var headerH = $('#portfolio h2').outerHeight() + correction;
            hash = $(window.location).attr('hash');
            url = hash.replace(/[#\!]/g, '');
            portfolioGrid.find('li.box.current').children().removeClass('act');
            portfolioGrid.find('li.box.current').removeClass('cur');
            if (pageRefresh == true && hash.substr(1, rootLength) == root) {
                $('html').scrollTo('#portfolio h2', 1500, {
                    'axis': 'y'
                }, function () {
                    loadProject();
                });
            } else if (pageRefresh == false && hash.substr(0, rootLength) == root) {
                $('html,body').stop().animate({
                    scrollTop: (projectContainer.offset().top - headerH) + 'px'
                }, 800, 'easeOutExpo', function () {
                    if (content == false) {
                        loadProject();
                    } else {
                        projectContainer.animate({
                            opacity: 0,
                            height: wrapperHeight
                        }, function () {
                            loadProject();
                        });
                    }
                    projectNav.fadeOut('100');
                    exitProject.fadeOut('100');
                });
            } else if (hash == '' && pageRefresh == false || hash.substr(0, rootLength) != root && pageRefresh == false || hash.substr(0, rootLength) != root && pageRefresh == true) {
                scrollPostition = hash;
                console.log(scrollPostition);
                $('html,body').stop().animate({
                    scrollTop: scrollPostition + 'px'
                }, 1000, function () {
                    deleteProject();
                });
            }
            portfolioGrid.find('li.box a[href="#!' + url + '"]').parent().addClass('cur');
            portfolioGrid.find('li.box.cur').find('a').addClass('act');
        }
    });

    function loadProject() {
        loader.fadeIn();
        if (!ajaxLoading) {
            ajaxLoading = true;
            projectContainer.load(url + ' div#ajaxpage', function (xhr, statusText, request) {
                if (statusText == "success") {
                    ajaxLoading = false;
                    page = $('div#ajaxpage');
                    $('.flexslider').flexslider({
                        animation: "slide",
                        slideDirection: "horizontal",
                        slideshow: false,
                        slideshowSpeed: 3500,
                        animationDuration: 500,
                        directionNav: true,
                        controlNav: true,
                    });
                    $('.popup-gallery').magnificPopup({
                        delegate: 'a',
                        type: 'image',
                        mainClass: 'my-mfp-zoom-in',
                        tLoading: 'Loading image #%curr%...',
                        gallery: {
                            enabled: true,
                            navigateByImgClick: true,
                            preload: [0, 1]
                        },
                        image: {
                            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                            titleSrc: function (item) {
                                return item.el.attr('title') + '<small>by KWST</small>';
                            }
                        }
                    });
                    hideLoader();
                    $(".container").fitVids();
                }
            });
        }
    }

    function hideLoader() {
        loader.fadeOut('fast', function () {
            showProject();
        });
    }

    function showProject() {
        if (content == false) {
            wrapperHeight = projectContainer.children('div#ajaxpage').outerHeight() + 'px';
            projectContainer.animate({
                opacity: 1,
                height: wrapperHeight
            }, function () {
                $(".container").fitVids();
                scrollPostition = $('html,body').scrollTop();
                projectNav.fadeIn();
                exitProject.fadeIn();
                content = true;
            });
        } else {
            wrapperHeight = projectContainer.children('div#ajaxpage').outerHeight() + 'px';
            projectContainer.animate({
                opacity: 1,
                height: wrapperHeight
            }, function () {
                $(".container").fitVids();
                scrollPostition = $('html,body').scrollTop();
                projectNav.fadeIn();
                exitProject.fadeIn();
            });
        }
        projectIndex = portfolioGrid.find('li.box.cur').index();
        projectLength = $('li.box a').length - 1;
        if (projectIndex == projectLength) {
            $('ul li#nextProject a').addClass('disabled');
            $('ul li#prevProject a').removeClass('disabled');
        } else if (projectIndex == 0) {
            $('ul li#prevProject a').addClass('disabled');
            $('ul li#nextProject a').removeClass('disabled');
        } else {
            $('ul li#nextProject a,ul li#prevProject a').removeClass('disabled');
        }
    }

    function deleteProject(closeURL) {
        projectNav.fadeOut(100);
        exitProject.fadeOut(100);
        projectContainer.animate({
            opacity: 0,
            height: '0px'
        });
        if (typeof closeURL != 'undefined' && closeURL != '') {
            projectContainer.find('iframe').remove();
            location = '#_';
        }
        portfolioGrid.find('li.box.current').children().removeClass('act');
        portfolioGrid.find('li.box.current').removeClass('cur');
    }
    $('#nextProject a').on('click', function () {
        current = portfolioGrid.find('li.box.cur');
        next = current.next('li.box');
        target = $(next).children('a').attr('href');
        $(this).attr('href', target);
        if (next.length === 0) {
            return false;
        }
        current.removeClass('cur');
        current.children().removeClass('act');
        next.addClass('cur');
        next.children().addClass('act');
    });
    $('#prevProject a').on('click', function () {
        current = portfolioGrid.find('li.box.cur');
        prev = current.prev('li.box');
        target = $(prev).children('a').attr('href');
        $(this).attr('href', target);
        if (prev.length === 0) {
            return false;
        }
        current.removeClass('cur');
        current.children().removeClass('act');
        prev.addClass('cur');
        prev.children().addClass('act');
    });
    $('#closeProject a').on('click', function () {
        $('html').scrollTo('#portfolio h2', 1500, {
            'axis': 'y'
        });
        deleteProject($(this).attr('href'));
        portfolioGrid.find('li.box.cur').children().removeClass('act');
        loader.fadeOut();
        return false;
    });
    pageRefresh = false;
};

$(window).load(function () {
    $(window).trigger('hashchange');
});

$(document).ready(function () {
    initPortfolio();
    initRobo();
});

//  definition of mobile browser------------------

var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }

};

// if not mobile ------------------  	
trueMobile = isMobile.any();

if (trueMobile == null) {

    // parallax  --------	

    $('#servises').parallax("50%", 0.4);
    $('#facts').parallax("70%", 0.3);
    $('#subscribe').parallax("80%", 0.2);
    $('.simple-page-head').parallax("50%", 0.4);
    // hoverdir --------

    $(' #folio_container > li ').each(function () {
        $(this).hoverdir();
    });

    // lavaLamp --------

    $("#options ul").lavaLamp({
        fx: "easeOutElastic",
        speed: 700,
    });

    // Hover animation   ---	

    $('.box a').hover(function () {
        $(this).find('img').addClass('img-rotade');
    }, function () {
        $(this).find('img').removeClass('img-rotade');
    });

    $('.planContainer .button').hover(function () {
            $(this).parent('.planContainer').addClass('bc');
        },
        function () {
            $(this).parent('.planContainer').removeClass('bc');
        });

    $('.moreinfo').hover(function () {
        var cursl = $(this);
        var th = $(this).find('div.member-skils');
        if ($(this).hasClass("notvisible")) {
            th.stop(true, true).animate({
                'top': '0'
            }, {
                queue: true,
                duration: 700,
                easing: "easeInOutQuad"
            });
            cursl.removeClass('notvisible');
            setTimeout(function () {
                cursl.find('div.skillbar-member').each(function () {
                    $(this).find('.skillbar-bar-member').animate({
                        width: $(this).attr('data-percent')
                    }, 1000);
                });
            }, 500);

        } else {
            th.animate({
                'top': '100%'
            });
            cursl.addClass('notvisible');
            cursl.find('div.skillbar-member').each(function () {
                $(this).find('.skillbar-bar-member').animate({
                    width: 0
                }, 1);
            });
        }
        return false;

    });
}


if (trueMobile) {

    // team info for touch devices  --------

    $('.moreinfo').click(function () {
        var cursl = $(this);
        var th = $(this).find('div.member-skils');
        if ($(this).hasClass("notvisible")) {
            th.stop(true, true).animate({
                'top': '0'
            }, {
                queue: true,
                duration: 700,
                easing: "easeInOutQuad"
            });
            cursl.removeClass('notvisible');
            setTimeout(function () {
                cursl.find('div.skillbar-member').each(function () {
                    $(this).find('.skillbar-bar-member').animate({
                        width: $(this).attr('data-percent')
                    }, 1200);
                });
            }, 500);

        } else {
            th.animate({
                'top': '100%'
            });
            cursl.addClass('notvisible');
            cursl.find('div.skillbar-member').each(function () {
                $(this).find('.skillbar-bar-member').animate({
                    width: 0
                }, 10);
            });
        }
        return false;


    });
}

//tel
  $("#tel").bind('click', function (event){
      document.location.href= "tel:+914843068676"
  });
//print
  $("#printerbtn").bind('click', function (event){
      document.location.href= "http://www.3dhubs.com/chennai/hubs/robo-invention/3dprint"
  });
//
$("#ebrochure").click(function() {
    // // hope the server sets Content-Disposition: attachment!
    window.location = './images/ebrochure.pdf';
});
// google map styles and functions  --------

	var map;
	// your coordinates   --------
	var robo = new google.maps.LatLng( 9.992772,76.323437);	
	function initialize() {	
	  var styles = [
		{
			featureType: 'water',
			elementType: 'all',
			stylers: [
				{ hue: '#C20404' },
				{ saturation: -100 },
				{ lightness: -18 },
				{ visibility: 'on' }
			]
		},{
			featureType: 'landscape',
			elementType: 'all',
			stylers: [
				{ hue: '#C20404' },
				{ saturation: -100 },
				{ lightness: -78 },
				{ visibility: 'on' }
			]
		},{
			featureType: 'road',
			elementType: 'all',
			stylers: [
				{ hue: '#C20404' },
				{ saturation: -100 },
				{ lightness: -34 },
				{ visibility: 'on' }
			]
		},{
			featureType: 'road.local',
			elementType: 'all',
			stylers: [
				{ hue: '#C20404' },
				{ saturation: -115 },
				{ lightness: -12 },
				{ visibility: 'on' }
			]
		},{
			featureType: 'poi.park',
			elementType: 'all',
			stylers: [
				{ hue: '#C20404' },
				{ saturation: -100 },
				{ lightness: -3 },
				{ visibility: 'on' }
			]
		},{
			featureType: 'poi',
			elementType: 'all',
			stylers: [
				{ hue: '#C20404' },
				{ saturation: -500 },
				{ lightness: -3 },
				{ visibility: 'on' }
			]
		},{
			featureType: 'transit',
			elementType: 'all',
			stylers: [
				{ hue: '#212121' },
				{ saturation: -20 },
				{ lightness: -2 },
				{ visibility: 'on' }
			]
		}
	
	  ];  
        
	  var mapOptions = {
		zoom:18,
		zoomControl: false,
		scaleControl: false,
		scrollwheel: false,
		disableDefaultUI:true,
		center: robo,
		mapTypeControlOptions: {
		   mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'bestfromgoogle']
		}
	  };
var	map = new google.maps.Map(document.getElementById("map_canvas"),
		 mapOptions);
	var styledMapOptions = {
		  name: "robo"
        
	}	
       var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'http://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth:200
  });
	var roboMapType = new google.maps.StyledMapType(
		styles, styledMapOptions);
	map.mapTypes.set('bestfromgoogle',roboMapType);
	map.setMapTypeId('bestfromgoogle');				
	var companyImage = new google.maps.MarkerImage('images/marker.png',
		new google.maps.Size(150,150),
		new google.maps.Point(0,0),
		new google.maps.Point(36,65)
	);

	// your marker coordinates   --------
	var companyPos = new google.maps.LatLng(9.992772,76.323437);
	var companyMarker = new google.maps.Marker({
		position: companyPos,
		map: map,
		icon: companyImage,
		zIndex: 3,
        draggable:false,
        title: "Robo Inventions",
        animation: google.maps.Animation.DROP
	});
        google.maps.event.addListener(companyMarker, 'click', function() {
    infowindow.open(map,marker);
        });

    

}
google.maps.event.addDomListener(window, 'load', initialize);
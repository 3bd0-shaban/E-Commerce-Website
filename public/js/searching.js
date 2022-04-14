
function closeNav(){
  document.getElementById("sidebartoggle").style.display = "none";
}
function togglebar(){
  $("#sidebartoggle").css("display","block");
}



// if($("#sidebartoggle").css("display","block")){
//     document.body.onclick = function () {
//     $("#sidebartoggle").css("display","none");
//   }
// };



// $(function() {
//   $("body").click(function () {
//       if ($("#sidebartoggle").css("display","block"))
//           $("#sidebartoggle").css("display","none");
//       else
//           $("#sidebartoggle").css("display","block");
//   });
// });




// $("body").click(function() {
//   $("#sidebartoggle").css("display","none");
// });




let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})




$(".filterbtn").hide();



(function($) { "use strict";

$(function() {
    var header = $(".start-style");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 10) {
            header.removeClass('start-style').addClass("scroll-on");
        } else {
            header.removeClass("scroll-on").addClass('start-style');
        }
    });
});		
    

$('body').on('mouseenter mouseleave','.nav-item',function(e){
        if ($(window).width() > 750) {
            var _d=$(e.target).closest('.nav-item');_d.addClass('show');
            setTimeout(function(){
            _d[_d.is(':hover')?'addClass':'removeClass']('show');
            },1);
        }
});	

//Switch light/dark

$("#switch").on('click', function () {
    if ($("body").hasClass("dark")) {
        $("body").removeClass("dark");
        $("#switch").removeClass("switched");
    }
    else {
        $("body").addClass("dark");
        $("#switch").addClass("switched");
    }
});  

})(jQuery); 


$(".checkpayment").click(function(){
    if($(this).prop("checked") == true){
        $(".paymentinformation").hide();
    }
    else if($(this).prop("checked") == false){
      $(".paymentinformation").show();
    }
  });

// $(".onhover").hide();
$("productbox").hover(function(){
    $("p").show();
  });






  
class Slider {
    constructor (rangeElement, valueElement, options) {
      this.rangeElement = rangeElement
      this.valueElement = valueElement
      this.options = options
  
      // Attach a listener to "change" event
      this.rangeElement.addEventListener('input', this.updateSlider.bind(this))
    }
  
    // Initialize the slider
    init() {
      this.rangeElement.setAttribute('min', options.min)
      this.rangeElement.setAttribute('max', options.max)
      this.rangeElement.value = options.cur
  
      this.updateSlider()
    }
  
    // Format the money
    asMoney(value) {
      return  parseFloat(value) +' EG'
        .toLocaleString('en-US', { maximumFractionDigits: 2 })
    }
  
    generateBackground(rangeElement) {   
      if (this.rangeElement.value === this.options.min) {
        return
      }
  
      let percentage =  (this.rangeElement.value - this.options.min) / (this.options.max - this.options.min) + 10
      return 'background: linear-gradient(to right, #50299c, #7a00ff ' + percentage + '%, #d3edff ' + percentage + '%, #dee1e2 100%)'
    }
  
    updateSlider (newValue) {
      this.valueElement.innerHTML = this.asMoney(this.rangeElement.value)
      this.rangeElement.style = this.generateBackground(this.rangeElement.value)
    }
  }
  
  let rangeElement = document.querySelector('.range [type="range"]')
  let valueElement = document.querySelector('.range .range__value span') 
  
  let options = {
    min: 10,
    max: 75000,
    cur: 30
  }
  
  if (rangeElement) {
    let slider = new Slider(rangeElement, valueElement, options)
  
    slider.init()
  } 




  // Instantiate the Bootstrap carousel
// $('.multi-item-carousel').carousel({
//   interval: false
// });

// const prev = document.querySelector(".prev");
// const next = document.querySelector(".next");
// const carousel = document.querySelector(".carousel-container");
// const track = document.querySelector(".track");
// let width = carousel.offsetWidth;
// let index = 0;
// window.addEventListener("resize", function () {
//   width = carousel.offsetWidth;
// });
// next.addEventListener("click", function (e) {
//   e.preventDefault();
//   index = index + 1;
//   prev.classList.add("show");
//   track.style.transform = "translateX(" + index * -width + "px)";
//   if (track.offsetWidth - index * width < index * width) {
//     next.classList.add("hide");
//   }
// });
// prev.addEventListener("click", function () {
//   index = index - 1;
//   next.classList.remove("hide");
//   if (index === 0) {
//     prev.classList.remove("show");
//   }
//   track.style.transform = "translateX(" + index * -width + "px)";
// });



$(".childImageDiv").click(function(){
  $(".feature-image").attr("src",function(){
    $(".childImageDiv").attr(src);
  });
});




// Zomm Images when hover 
$(document).ready(function(){
  $('.feature-image')
    .wrap('<span style="display:block;"></span>')
    .css('display', 'block')
    .parent()
    .zoom();
});

$(document).ready(function(){
  $('#productimage').zoom();
});
$(function() {
  
  var link = $('#navbar a.dot');
  
  // Move to specific section when click on menu link
  link.on('click', function(e) {
    var target = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 600);
    $(this).addClass('active');
    e.preventDefault();
  });
  
  // Run the scrNav when scroll
  $(window).on('scroll', function(){
    scrNav();
  });
  
  // scrNav function 
  // Change active dot according to the active section in the window
  function scrNav() {
    var sTop = $(window).scrollTop();
    $('section').each(function() {
      var id = $(this).attr('id'),
          offset = $(this).offset().top-1,
          height = $(this).height();
      if(sTop >= offset && sTop < offset + height) {
        link.removeClass('active');
        $('#navbar').find('[data-scroll="' + id + '"]').addClass('active');
      }
    });
  }
  scrNav();
});

// Upload file 
function readURL(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function(e) {
      $('.image-upload-wrap').hide();

      $('.file-upload-image').attr('src', e.target.result);
      $('.file-upload-content').show();

      $('.image-title').html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeUpload();
  }
}

function removeUpload() {
  $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  $('.file-upload-content').hide();
  $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
		$('.image-upload-wrap').addClass('image-dropping');
	});
	$('.image-upload-wrap').bind('dragleave', function () {
		$('.image-upload-wrap').removeClass('image-dropping');
});


// scroll Horizontal

$(".leftarrow").click(function(){
  $(".card-container").css("transform","translateX(-344px)");
});

$(".Rightarrow").click(function(){
  $(".card-container").css("transform","translateX(-62px)");
});



// Select child Category
$(document).ready(function () {
  $("#select1").change(function () {
      var val = $(this).val();
      if (val == "Men's Fasion") {
          $("#select2").html("<option>T-Sharts</option><option>trousers</option><option>Sports Wear</option><option>Underwear</option>");} 
      else if (val == "Women's Fasion") {
          $("#select2").html("<option>T-Sharts</option><option>trousers</option><option>Sports Wear</option><option>underwear</option><option>Watches</option><option>Glasses</option><option>Sportes Shoes</option><option>Jellawry</option><option>Eyewear</option>");} 
      else if (val == "kid's Fasion") {
          $("#select2").html("<option>Boys Clothes</option><option>Girls Clothes</option>");} 
      else if (val == "Toys & Games") {
          $("#select2").html("<option>Baby Fasion</option><option>Action Fires</option><option>Construction Toys</option><option>Outdoor Play</option>");}
      else if (val == "Books") {
          $("#select2").html("<option>Student Books</option><option>Kids Book</option><option>Storys</option><option>Hostry Books</option><option>Horror Books</option><option>Romance Books</option><option>Potery Books</option><option>Political thriller</option><optiHorror Novel</option><option>Crime Novel</option><option>Fantasay Novel</option><option>Hostrical Novel</option><option>Classic Novel</option>");} 
      else if (val == "Mobiles & Tablets & Accessories") {
          $("#select2").html("<option>Iphone</option><option>Samsung</option><option>Xiaomi</option><option>Reakmi</option><option>Samsung Tablet</option><option>Iphone Tablet</option>");} 
      else if (val == "Electronics & Home Decices") {
          $("#select2").html("<option>Smart TV</option><option>Washing machine</option><option>Air conditioner/option><option>Radio</option><option>Microwave</option><option>Blender</option><option>Vooker</option><option>Oven</option>");}
      else if (val == "Computers & Laptops") {
          $("#select2").html("<option>Lenovo</option><option>Samsung</option><option>Msi</option><option>HP</option><option>Mac Book</option><option>Mac Book Pro</option>");} 
      else if (val == "Home Furniture") {
          $("#select2").html("<option>All Furniture</option><option>Living Room</option><option>BedRoom</option><option>Office Furniture</option>");} 
      else if (val == "Kitchen Tools") {
          $("#select2").html("<option>Coffee Maker</option><option>Blender</option><option>Large Appliance</option><option>Vaccum</option>");}
      else if (val == "Music") {
          $("#select2").html("<option>Romantic</option><option>Rapp</option>");} 
      else if (val == "Movies") {
          $("#select2").html("<option>Action Movies</option><option>Drama</option><option>Romantic</option><option>Storys</option><option>Egyptain Movies</option><option>American Movies</option>");} 
        else if (val == "Programs") {
          $("#select2").html("<option>Ios Programs</option><option>Android Programs</option><option>Windows Program</option><option>Linux Programs</option>");}
  });
});
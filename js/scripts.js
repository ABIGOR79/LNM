$(document).ready(function(e) {
	
	
	$("input[name=source]").attr("value", $(location).attr("href"));
	$("input[name=agent]").attr("value", navigator.userAgent);



		

	$(".fancybox").fancybox({
		helpers: { 
			overlay: {  locked: false } 
		}
	});


	
$("#calc-slide-01").bootstrapSlider({
	min: 100,
	max: 50000,
	scale: 'logarithmic',
	step: 550,
	ticks: [690, 1240, 1790, 3990, 4540, 5640, 7640, 13890, 27640, 46780],
	 ticks_snap_bounds: 50000
	
}).on('slide', function(){
		value = $("#calc-slide-01").bootstrapSlider('getValue');
		$("#calc-slider-value").val(value + " €");
		switch (value) {
			case 690:
				$(".calc-result-value.mV").html(2390 + " €");
				$(".calc-result-value.yV").html(4800 + " €");
				$("#calc-slider-value-02").html(4 + " мес");
				break;
			case 1240:
				$(".calc-result-value.mV").html(4382 + " €");
				$(".calc-result-value.yV").html(8800 + " €");
				$("#calc-slider-value-02").html(4 + " мес");
				break;
			case 1790:
				$(".calc-result-value.mV").html(12748 + " €");
				$(".calc-result-value.yV").html(25600 + " €");
				$("#calc-slider-value-02").html(6 + " мес");
				break;
			case 3990:
				$(".calc-result-value.mV").html(28685 + " €");
				$(".calc-result-value.yV").html(57600 + " €");
				$("#calc-slider-value-02").html(6 + " мес");
				break;
			case 4540:
				$(".calc-result-value.mV").html(32666 + " €");
				$(".calc-result-value.yV").html(65600 + " €");
				$("#calc-slider-value-02").html(6 + " мес");
				break;
			case 5640:
				$(".calc-result-value.mV").html(48604 + " €");
				$(".calc-result-value.yV").html(97600 + " €");
				$("#calc-slider-value-02").html(6 + " мес");
				break;
			case 7640:
				$(".calc-result-value.mV").html(66520 + " €");
				$(".calc-result-value.yV").html(133575 + " €");
				$("#calc-slider-value-02").html(6 + " мес");
				break;
			case 13890:
				$(".calc-result-value.mV").html(242563 + " €");
				$(".calc-result-value.yV").html(487075 + " €");
				$("#calc-slider-value-02").html(8 + " мес");
				break;
			case 27640:
				$(".calc-result-value.mV").html(483533 + " €");
				$(".calc-result-value.yV").html(970950 + " €");
				$("#calc-slider-value-02").html(8 + " мес");
				break;
			case 46780:
				$(".calc-result-value.mV").html(3277000 + " €");
				$(".calc-result-value.yV").html(6580000 + " €");
				$("#calc-slider-value-02").html(1 + " год");
				break;
		}

	});	


	


	$(".calc-result-value.mV").html("2390  €");
	$(".calc-result-value.yV").html("4800 €");


$(".pplh-01").addClass("active");
$('#people-slider .itemlist').slick({
	dots: true,
	arrows: false
}).on("beforeChange", function (event, slick, currentSlide, nextSlide){
	$("#people-highlight li").removeClass("active");
	$(".pplh-0"+parseInt(nextSlide+1)).addClass("active");
});
$('#cases-slider .itemlist').slick({
	dots: true,
	arrows: false
	
});
$('#slider2 .itemlist').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});


});


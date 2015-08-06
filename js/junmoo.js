$(function() {

	var duration = 300;
/*
	$('.page-header').each(function() {
		var $window = $(window),
		$header = $(this),
		headerOffsetTop = $header.offset().top;

		$window.on('scroll', function() {
		if($window.scrollTop() > headerOffsetTop) {
			$header.addClass('sticky');
		} else {
			$header.removeClass('sticky');
		}
	});

	$window.trigger('scroll');
	});*/


	//aside
	var $aside = $('.page-header > aside');
	
	var $asideButton = $aside.find('button')
		.on('click', function() {
		$aside.toggleClass('open');
		if($aside.hasClass('open')) {
			$aside.stop(true).animate({
				top: '-0px'
			}, duration);
		} else {
			$aside.stop(true).animate( {
				top: '-150px'
			}, duration);
		}
	});


	$(window).on("scroll",infinityScrollFunction);
	 function infinityScrollFunction() {

    //현재문서의 높이를 구함.
    var documentHeight  = $(document).height();
    var scrollHeight = $(window).scrollTop()+$(window).height();         
            
    if(scrollHeight == documentHeight) { //문서의 맨끝에 도달했을때 내용 추가 
	        for(var i = 0; i<30; i++) {
	            //count = count + 1;
	            //$("<h1> infinity scroll </h>").appendTo("body");
	            $("#main").append(
	            	"<div class=\"node\">"+
				        "<div class=\"node_head\">"+
				            "node head"+
				        "</div>"+
				        "<div class=\"node_body\">"+
				            "node body"+
				        "</div>"+
			        "</div>"
	 			);
	        }
	    }
	}

	function layer_open(){

		var temp = $('#layer2');
		console.log(temp);
		var bg = temp.prev().hasClass('bg');	//dimmed 레이어를 감지하기 위한 boolean 변수

		if(bg){
			$('.layer').fadeIn();	//'bg' 클래스가 존재하면 레이어가 나타나고 배경은 dimmed 된다. 
		}else{
			temp.fadeIn();
		}

		// 화면의 중앙에 레이어를 띄운다.
		if (temp.outerHeight() < $(document).height() ) temp.css('margin-top', '-'+temp.outerHeight()/2+'px');
		else temp.css('top', '0px');
		if (temp.outerWidth() < $(document).width() ) temp.css('margin-left', '-'+temp.outerWidth()/2+'px');
		else temp.css('left', '0px');

		temp.find('a.cbtn').click(function(e){
			if(bg){
				$('.layer').fadeOut(); //'bg' 클래스가 존재하면 레이어를 사라지게 한다. 
			}else{
				temp.fadeOut();
			}
			e.preventDefault();
		});

		$('.layer .bg').click(function(e){	//배경을 클릭하면 레이어를 사라지게 하는 이벤트 핸들러
			$('.layer').fadeOut();
			e.preventDefault();
		});

	}			
	$("#btn-example").on("click",layer_open);


})
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

$(window).bind("scroll",infinityScrollFunction);


	 function infinityScrollFunction() {

    //현재문서의 높이를 구함.
    var documentHeight  = $(document).height();
    console.log("documentHeight : " + documentHeight);
        
        //scrollTop() 메서드는 선택된 요소의 세로 스크롤 위치를 설정하거나 반환    
        //스크롤바가 맨 위쪽에 있을때 , 위치는 0
    console.log("window의 scrollTop() : " + $(window).scrollTop()); 
        //height() 메서드는 브라우저 창의 높이를 설정하거나 반환
    console.log("window의 height() : " + $(window).height());
        
        //세로 스크롤위치 max값과 창의 높이를 더하면 현재문서의 높이를 구할수있음.
        //세로 스크롤위치 값이 max이면 문서의 끝에 도달했다는 의미
    var scrollHeight = $(window).scrollTop()+$(window).height();         
    console.log("scrollHeight : " + scrollHeight);
            
    if(scrollHeight == documentHeight) { //문서의 맨끝에 도달했을때 내용 추가 
        for(var i = 0; i<10; i++) {
            //count = count + 1;
            //$("<h1> infinity scroll </h>").appendTo("body");
            $(".main").after("<div>body</div>");
        }
    }
	}

	layer_open("asd");

})
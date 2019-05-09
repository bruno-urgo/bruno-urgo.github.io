// JavaScript Document
//------------------------------------- document.on(load)
	$(window).on("load", function(){
		$("#preload").fadeOut();
		$("#preload").css("z-index", -1000);
	})

	window.onload = () => {
		let el = document.querySelector('[alt="www.000webhost.com"]').parentNode.parentNode;
		el.parentNode.removeChild(el);
	}
//------------------------------------- AOS
AOS.init();
//------------------------------------- nav.click()
$("nav a").on("click",function(e){
	e.preventDefault(); //evita che l'oggetto compia l'azione di default
	var target = $(this).attr("href");
	$("html, body").animate({ scrollTop: $(target).offset().top}, 1000, 'easeInOutCubic');
});

// JavaScript Document
//------------------------------------- document.on(load)
	$(window).on("load", function(){
		$("#preload").fadeOut();
		$("#preload").css("z-index", -1000);
	})

//------------------------------------- AOS
if (window['AOS'] != null && window['AOS'] != undefined)
	AOS.init();
//------------------------------------- nav.click()
$("nav a").on("click",function(e){
	e.preventDefault(); //evita che l'oggetto compia l'azione di default
	var target = $(this).attr("href");
	$("html, body").animate({ scrollTop: $(target).offset().top}, 1000, 'easeInOutCubic');
});

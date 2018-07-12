function scrollPrincipal(message) {
	if(message.data){
		if(message.data.indexOf("[scrollTridion]")==0){
			var posicionElemIframe = Number(message.data.substr(15));
			var cabecera = $("#iframe-ancho-completo2").offset().top + 30;
			var posicionTotal = cabecera + posicionElemIframe;
			$('html, body').animate({ scrollTop: posicionTotal }, 600, 'easeInOutExpo');
		}
	}
}

if (window.addEventListener) {
	window.addEventListener("message", scrollPrincipal, true);
} else {
	window.attachEvent("onmessage", scrollPrincipal);
}

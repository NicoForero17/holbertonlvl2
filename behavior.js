document.addEventListener("DOMContentLoaded", function(event) {
    var thumbnailElement = document.getElementById("smart_thumbnail");
    if(thumbnailElement) {
	thumbnailElement.addEventListener("click", function() {
	    thumbnailElement.className = thumbnailElement.className == "small"? "":"small";
	});

    }

    /**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
    
    var disqus_config = function () {
	this.page.url = window.location.href;
	this.page.identifier = '1234567890987654321'; 
    };
    
    (function() { // DON'T EDIT BELOW THIS LINE
	var d = document, s = d.createElement('script');
	s.src = 'https://why-aiesec.disqus.com/embed.js';
	s.setAttribute('data-timestamp', +new Date());
	(d.head || d.body).appendChild(s);
    })();
});


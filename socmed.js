$(document).ready(function() { var stickyNavTop = $(&#39;.Eu_social_floating&#39;).offset().top; var stickyNav = function(){ var scrollTop = $(window).scrollTop(); if(scrollTop &gt; stickyNavTop){$(&#39;.Eu_social_floating&#39;).addClass(&#39;sticky&#39;);}else{$(&#39;.Eu_social_floating&#39;).removeClass(&#39;sticky&#39;);}}; stickyNav(); $(window).scroll(function() { stickyNav(); }); });

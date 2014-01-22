$(document).ready(function() {
  // if(jQuery().onePageNav) {
  //   $('body').onePageNav({
  //     changeHash: false, 
  //     currentClass: 'active', 
  //     filter: 'a[href^="#"]',
  //     scrollOffset: 30,
  //     scrollSpeed: 750, 
  // 	  scrollThreshold: 0.5,
  // 	  easing: 'swing' 
  //   });
  // }
  Morris.Donut({
	  element: 'frontend',
	  data: [
	    {label: "HTML5", value: 4.5},
	    {label: "CSS3", value: 4.3},
	    {label: "JavaScript", value: 3.8},
	    {label: "jQuery", value: 4}
	  ]
  });
  Morris.Donut({
	  element: 'backend',
	  data: [
	  	{label: "node.js", value: 3},
	    {label: "Python", value: 3},
	    {label: "PHP", value: 3.5},
	    {label: "Java", value: 2},
	    {label: "C/C++", value: 2}
	  ]
  });
});


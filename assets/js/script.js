window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var element2 = document.getElementById('hero');
    element2.style.transform = 'translateY(' + (scrollTop * -0.5) + 'px)';
  });
  


  
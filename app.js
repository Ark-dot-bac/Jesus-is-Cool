let animation = anime({
    targets: '.letter', 
    opacity: [
        {value: 1},
        {value: [1, 0], delay: 2600, duration: 1000},
        {value: [0, 0.4], delay: 0, duration: 500},
        {value: 4},
    ], 
    translateY: 80, 
    rotate: {
      value: 360,
      duration: 2000,
      easing: 'easeInExpo'
    }, 
    scale: [
        {value: anime.stagger([0.7, 1], {from: 'center'})},
        {value: 1.5, delay: 2600}
    ], 
    delay: anime.stagger(100, {start: 1000}), 
    translateX: [
        {value: [-10, 50]},
        {value: 200, delay: (el, i, l) =>{return (i/1000) + 2600}, duration:5000},
    ],
  });  
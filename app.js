
//adding event listner

window.addEventListener('load', (event) => {
  for (var i=0; i<7; i++) {
    var drum = document.getElementsByClassName('drum')[i] .addEventListener("click",function drum(e){
      var text = e.target.innerText;
      playsound(text);
    })
    };
});

  document.addEventListener("keypress",function(event){
    playsound(event.key);
  })
  function playsound(text){
    switch(text) {
      case'a':
      var audio1 = new Audio("sounds/boom.wav");
      audio1.play();
      break;

      case'b':
      var audio2 = new Audio("sounds/hihat.wav");
      audio2.play();
      break;

      case'c':
      var audio3 = new Audio("sounds/clap.wav");
      audio3.play();
      break;


      case'd':
      var audio4 = new Audio("sounds/openhat.wav");
      audio4.play();

      break;

      case'e':
      var audio5 = new Audio("sounds/snare.wav");
      audio5.play()


      break;

      case'f':
      var audio6 = new Audio("sounds/tink.wav");
      audio6.play()
      break;

      case'g':
      var audio7 = new Audio("sounds/tom.wav");
      audio7.play()
      break;

      default:
        alert('invalid key')

    }
  }
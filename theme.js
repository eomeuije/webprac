  function change_theme(self) {
    var target_body = document.querySelector("body").style;
    if(document.querySelector("#theme_div").innerText == "day"){
        document.querySelector("#theme_img").src = "sun.png";
        document.querySelector("#theme_div").innerText = "night";
        target_body.backgroundColor="black";
        document.querySelector("h1").style.backgroundColor="black";
        if(document.querySelector("#grid_home")){
        document.querySelector(".home_img").src = "home2.png";
        document.querySelector("a").style.background="black";
      }
        target_body.color="white";
        change_list_color("powderblue");
      }
    else {
      document.querySelector("#theme_img").src = "moon.png";
      document.querySelector("#theme_div").innerText = "day";
      target_body.backgroundColor="white";
      document.querySelector("h1").style.backgroundColor="white";
      target_body.color="black";
      if(document.querySelector("#grid_home")){
      document.querySelector(".home_img").src = "home.png";
      document.querySelector("a").style.background="white";
    }
      change_list_color("");
    }
  }
  function change_list_color(color){
    var target_a = document.getElementsByTagName("a");
    for(var i = 0; i < target_a.length; i++)
      target_a[i].style.color=color;
  }

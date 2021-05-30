
window.onload = function () {
  "use strict";

  var Text0 = "Home  ";
  var Text1 = "About ";
  var Text2 = "Cntant";
  var Text3 = "Dsgine";
  var Text4 = "Call  ";
  var Text5 = "Fotr  ";
  var i = 0;
  var x = setInterval(function () {
    "use strict";

    var myp = document.getElementsByTagName("a");
    myp[0].textContent += Text0[i];
    myp[1].textContent += Text1[i];
    myp[2].textContent += Text2[i];
    myp[3].textContent += Text3[i];
    myp[4].textContent += Text4[i];
    myp[5].textContent += Text5[i];
    i = i + 1;
    if (i > Text0.length - 1) {
      clearInterval(x);
    }
    if (i > Text1.length - 1) {
      clearInterval(x);
    }
    if (i > Text2.length - 1) {
      clearInterval(x);
    }
    if (i > Text3.length - 1) {
      clearInterval(x);
    }
    if (i > Text4.length - 1) {
      clearInterval(x);
    }
    if (i > Text5.length - 1) {
      clearInterval(x);
    }
  }, 200);
};
/********************************jq********************* */
/*****************for navbar world whin i reload the page**************************/
$(document).ready(function(){
  // var Text0 = "Home  ";
  // var Text1 = "About ";
  // var Text2 = "Cntant";
  // var Text3 = "Dsgine";
  // var Text4 = "Call  ";
  // var Text5 = "Footer";
  // var z = 0;
  //   var x = setInterval(function () {
  //     var myp =$("a");
  //     myp.eq(0).text("+="+Text0[z]);
  //     myp.eq(1).text("+="+Text1[z]);
  //     myp.eq(2).text("+="+Text2[z]);
  //     myp.eq(3).text("+="+Text3[z]);
  //     myp.eq(4).text("+="+Text4[z]);
  //     myp.eq(5).text("'\+=Text5[z]\'+");
  //     z = z + 1;
  //     if (z >= Text0.length - 1) {
  //       clearInterval(x);
  //     }
  //     if (z >= Text1.length - 1) {
  //       clearInterval(x);
  //     }
  //     if (z >= Text2.length - 1) {
  //       clearInterval(x);
  //     }
  //     if (z >= Text3.length - 1) {
  //       clearInterval(x);
  //     }
  //     if (z >= Text4.length - 1) {
  //       clearInterval(x);
  //     }
  //     if (z >= Text5.length - 1) {
  //       clearInterval(x);
  //     }
  //   }, 1000);
  

  
  /********************slider********************** */
 
    var count = 0;
    var myslid = $(".slider").length;
    console.log(myslid);

    $(".next").click(function(){
   
   
        if(count ==myslid-1){
            count=0;
        }
        else{
      count++;
    }
    $(".slider:eq('"+count+"')").fadeIn(800);
    $(".slider:eq('"+count+"')").siblings().fadeOut(800);

    
 
})
    $(".back").click(function(){
        if(count ==0){
            count=myslid-1;
        }
        else{
      count--;
    }

  
    $(".slider:eq('"+count+"')").fadeIn(800);
    $(".slider:eq('"+count+"')").siblings().fadeOut(800);
    })

$(".butt").css("marginTop" , - $(".slider").height()/2 )

          /***************************random slider1************************* */
var myim=$("#im")
var myarr = [
  "../imag/gow.jpg",
  "../imag/red.jpg",
  "../imag/nfs.jpg",
  "../imag/cyber.jpg",
];

 setInterval(function() {
  var x=Math.floor(Math.random()*myarr.length);
  myim.attr("src",myarr[x]);
} ,3000);
/***************************auto matic slider1************************* */
/*  if(count == myslid-1){
      count=0;
  }
  else{
count++;
}
$(".slider:eq('"+count+"')").css("display" , "block");
$(".slider:eq('"+count+"')").siblings().css("display" , "none");*/




         /* var maimg;
          maimg = document.getElementById("im");
          var myarr = [
            "../imag/gow.jpg",
            "../imag/red.jpg",
            "../imag/nfs.jpg",
            "../imag/cyber.jpg",
          ];
          
          function mychange() {
            "use strict";
            setInterval(function () {
              var x = Math.floor(Math.random() * myarr.length);
              maimg.src = myarr[x];
            }, 1500);
          }
          mychange(maimg, myarr);*/

          /**************************************************** */

         

            for (var i = 0; i < $(".smallimg img").length; i++) {
             var smal =$(".imgs").prop("src");
       
          $(".smallimg img").click(function(){
        
         $(".bgimg img").attr("src",$(this).attr("src"));
       
       });
       }
       
          /**************************************************** */



      

    
        /*  bg = document.getElementById("big");
MULsm = document.getElementsByClassName("imgs");

for (i = 0; i < MULsm.length; i = i + 1) {
  MULsm[i].onclick = function () {
    bg.src = this.src;
  };*/



/**********************************************************

MULsm.on("click",function(){
  var big =$(".patr5 .bgimg abbr img").prop(src);
var MULsm = $(".patr5 .smallimg abbr img").prop(src);
  big.attr(src) == MULsm;
      
});
});
  /**********************************************/

/*var bg, MULsm, i;
bg = document.getElementById("big");
MULsm = document.getElementsByClassName("imgs");

for (i = 0; i < MULsm.length; i = i + 1) {
  MULsm[i].onclick = function () {
    bg.src = this.src;
  };
}*/
  /********************************************** 
 var slid = 1;
  showDivs(slid);
  function plausDiv(n) {
    "use strict";
    showDivs((slid += n));
  }
  function showDivs(n) {
    "use strict";
    var h;
    var o = document.getElementsByClassName("test");
    if (n > o.length) {
      slid = 1;
    }
    if (n < 1) {
      slid = o.length;
    }
    for (h = 0; h < o.length; h++) {
      o[h].style.display = "none";
    }
    o[slid - 1].style.display = "block";
  }
  /*//////////////////////////slider ////////////////////////////*/
  
 
  /**********************auto matic slider******************** *
  var maimg;
  maimg = document.getElementById("im");
  var myarr = [
    "../imag/gow.jpg",
    "../imag/red.jpg",
    "../imag/nfs.jpg",
    "../imag/cyber.jpg",
  ];
  
  function mychange() {
    "use strict";
    setInterval(function () {
      var x = Math.floor(Math.random() * myarr.length);
      maimg.src = myarr[x];
    }, 1500);
  }
  mychange(maimg, myarr);
  /*************************for the backgrong color chang****************** */
 
/********************************chang color****************/
var mycol, mybody;
mybody=$("body");
mycol=$(".col");
$(".col1").on("click",function(){
  mybody.css("backgroundColor", "red")
});
$(".col2").on("click",function(){
  mybody.css("backgroundColor", "yellow")
});
$(".col3").on("click",function(){
  mybody.css("backgroundColor", "green")
});
$(".col4").on("click",function(){
  mybody.css("backgroundColor", "blue")
});
$(".col5").on("click",function(){
  mybody.css("backgroundColor", "aqua")
});
$(".col6").on("click",function(){
  mybody.css("backgroundColor", "#ffffff")
});

$(".col7").on("click",function(){
  mybody.css({"backgroundColor": "wheat",
  "color" : "wheat",
  "textShadow" : "0px 0px 0 rgb(137, 156, 213)"              
})
});


/*******************************************************/
var myss, myop;
myss=$(".ss");
myop=$(".op");
myop.on("click",function(){
 myss.css({"transition": "2s ease-in",
  "transform": "translateX(150px)"})
  myop.css({"transition": "2s ease-in",
  "transform": "translateX(150px)"})
})

myop.on("dblclick",function(){
  myss.css({"transition": "2s ease-in",
  "transform": "translateX(0px)"})
   myop.css({"transition": "2s ease-in",
   "transform": "translateX(0px)"})
 });

 $(window).scroll(function(){
var mydiv66=$(".p4");
var cont = 0;
var x =window.pageYOffset;
if ($(window).scrollTop() > 1500) {
setInterval(function () {
 
  
  mydiv66.slideDown(1000).css("display" , "block");
  cont = cont + 1;
  if (cont > mydiv66.length - 1) {
    return 0;
  }
}, 1000);
}





  $(window).on("scroll",function(){
      console.log($(window).scrollTop());
      if($(window).scrollTop() > 300){
          $(".allCard").css({"transition":"2s" ,"margin" : "0px"})
      }
  });
});
});

/****************************************4div */

 


  

 /****************3 div apper whin the scrolly =300****
  window.onscroll = function(){
    console.log(window.pageYOffset);
    var mydiv66 = document.getElementsByClassName("p4");
  var i = 0;
  if (window.scrollY > 1500) {
    var p = setInterval(function () {
      "use strict";
  
      mydiv66[i].style.display = "block";
      i = i + 1;
      if (i > mydiv66.length - 1) {
        clearInterval(p);
      }
    }, 1000);
  };
  
  }*/
/*ss
  var mycol, mybody, mybdy;
  mybody = document.getElementsByTagName("body")[0];
  mycol = document.getElementsByClassName("col");
  
  mycol[0].onclick = function () {
    "use strict";
    mybody.style.backgroundColor = "red";
  };
  mycol[1].onclick = function () {
    "use strict";
    mybody.style.backgroundColor = "yellow";
  };
  mycol[2].onclick = function () {
    "use strict";
    mybody.style.backgroundColor = "green";
  };
  mycol[3].onclick = function () {
    "use strict";
    mybody.style.backgroundColor = "blue";
  };
  mycol[4].onclick = function () {
    "use strict";
    mybody.style.backgroundColor = "aqua";
  };
  mycol[5].onclick = function () {
    "use strict";
    mybody.style.backgroundColor = "#ffffff";
  };
  mycol[6].onclick = function () {
    "use strict";
    mybody.style.backgroundColor = "wheat";
  };
  mycol[7].onclick = function () {
    "use strict";
    mybody.style.backgroundColor = "black";
    mybody.style.color = "wheat";
    mybody.style.textShadow = "0px 0px 0 rgb(137, 156, 213)";
  };
  /***********for the backgrong color chang********/

 
     /****************************************************js***

  
  
  

  var myss, myop, mysyle, mysyle2;
  mysyle = `transition: 2s ease-in;
  transform: translateX(150px);
  
  `;
  mysyle2 = `transition: 2s ease-in;
  transform: translateX(0px);
  `;
  myss = document.getElementById("ss");
  myop = document.getElementById("op");
  
  myop.onclick = function () {
    "use strict";
    myss.style = mysyle;
    myop.style = mysyle;
  };
  myop.ondblclick = function () {
    "use strict";
    myss.style = mysyle2;
    myop.style = mysyle2;
  };*/
  /*************************4div************************* */
  
  
 /* $(document).ready(function(){
    $(window).scroll(function(){
      var x = console.log(window.pageYOffset);
      var y =$(window).scrollTop();
      var deg = $(window).scrollTop()+"deg";
      if(y <600){
      $(".aa2").css({"marginTop" : "0" ,
      "transition" :"2s"
      
  }) 
      $(".aa1").css({"marginLeft" : "0",
      "transition" :"2s"
      }) 
      $(".aa3").css({"marginBottom" : "0" ,
      "transition" :"2s"
      }) 
      $(".aa4").css({"marginRight" : "0" ,
      "transition" :"2s"
      }) 
  }
     
  })
})*/

  
  
  /*
  var myDiv1 = document.getElementsByClassName("p31")[0];
  var myDiv2 = document.getElementsByClassName("p32")[0];
  var myDiv3 = document.getElementsByClassName("p33")[0];
  var myDiv4 = document.getElementsByClassName("p34")[0];
  window.onscroll = function () {
    "use strict";
    if (window.scrollY > 100) {
      var style1 = `
        transition: 1s;
        transform: translateX(0px);
         
         `;
      var style2 = ` 
        transition: 1s;
         transform: translateY(0px);
         `;
      var style3 = ` 
        transition: 1s;
         transform: translateY(0px);
        `;
      var style4 = `
        transition: 1s;
         transform: translateX(0px);
         `;
      myDiv1.style = style1;
      myDiv2.style = style2;
      myDiv3.style = style3;
      myDiv4.style = style4;
    }
  };*/
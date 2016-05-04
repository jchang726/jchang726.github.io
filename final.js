console.clear();

$(function(){



  $('nav li a').click(function(){
    var headerHeight = $('header').height();

    var a = $(this).attr('href')

    var targetDistance = $(a).offset().top

    console.log(targetDistance);


    $('html, body').animate({
      scrollTop: targetDistance - headerHeight
    }, 1000);



  });

  // var responseX = "x";
  // var responseO = "o";
  // var turnCount = 0;
  // //
  // function buttonClicked(){
  //
  //   if (turnCount % 2 == 0) {
  //
  //     $(this).text(responseX)
  //
  //     turnCount++;
  //     console.log("X selected Turn counter increased by 1. New count is " + turnCount);
  //
  //   }
  //
  //   else {
  //     $(this).text(responseO)
  // //
  // //     turnCount++;
  // //     console.log("O selected Turn counter increased by 1. New count is " + turnCount);
  // //
  // //   }
  // //
  // //   }
  // //
  //   $(this).text(responseX)
  // // //
  // // //
  // // //
  // // //   turnCount++;
  // // //   console.log("Turn counter increased by 1. New count is " + turnCount);
  // // //
  // // // }

  var turnCount = 0;
  function colorSwitch(){




    if (turnCount % 2 == 0) {

      $(this).addClass('blue')

      turnCount++;
      console.log("blue selected Turn counter increased by 1. New count is " + turnCount);

    }

    else {
      $(this).addClass('red')

      turnCount++;
      console.log("red selected Turn counter increased by 1. New count is " + turnCount);



    }

  }

  // $(this).addClass('blue')
  // $(this).addClass('red')
  // $('.button').click(buttonClicked)
  $('.button').click(colorSwitch)


 function popUp(){
   alert('This is just a trail version! You must purchase the complete version for $9.99 at "WWW.EA.COM" to have access to all features!')
 }



  $('.demo').click(popUp)

















});














// });

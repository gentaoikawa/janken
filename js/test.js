

$(function () {
    //この中に書いていく
$(".goo").on("click",function(){
    // alert("結果発表");filter: contrast(0.3);
//    $(".goo").css("filter","sepia(100%)");
   //$(".goo").css("filter","contrast(1.5)");
//    $(".goo").css("filter","hue-rotate(180deg)");
//    $(".goo").css("width","450px");
//    $(".goo").css("height","450px");
    var random = Math.floor(Math.random()*3);
    console.log(random);
    
    if(random==0){
        $(".title").html(`<img src="img/aiko_goo.png" alt="goo2">`);
        $(".shohai").html("あいこ");


    }
    else if(random==1){
        $(".title").html(`<img src="img/kati_choki.png" alt="choki2">`);
        $(".shohai").html("お前の勝ちー");
    }else if(random==2){
        $(".title").html(`<img src="img/make_paa.png" alt="paa2">`);
        $(".shohai").html("お前の負けー");

    }

});


});

$(function () {
    //この中に書いていく
$(".paa").on("click",function(){
    // alert("結果発表");
    // $(".paa").css("filter","sepia(100%)");
    var random = Math.floor(Math.random()*3);
    console.log(random);
    
    if(random==0){
        $(".title").html(`<img src="img/senbai_goo.png" alt="goo2">`);
        $(".shohai").html("1000倍返しだ！！！！");
    }
    else if(random==1){
        $(".title").html(`<img src="img/make_choki.png" alt="choki2">`);
        $(".shohai").html("お前の負けー");
    }else if(random==2){
        $(".title").html(`<img src="img/aiko_paa.png" alt="paa2">`);
        $(".shohai").html("あいこ");

    }

});


});


$(function () {
    //この中に書いていく
$(".choki").on("click",function(){
    // alert("結果発表");
    // $(".choki").css("filter","sepia(100%)");
    var random = Math.floor(Math.random()*3);
    console.log(random);
    
    if(random==0){
        $(".title").html(`<img src="img/make_goo.png" alt="goo2">`);
        $(".shohai").html("お前の負けー");
    }
    else if(random==1){
        $(".title").html(`<img src="img/aiko_choki.png" alt="choki2">`);
        $(".shohai").html("あいこ");
    }else if(random==2){
        $(".title").html(`<img src="img/kati_paa.png" alt="paa2">`);
        $(".shohai").html("土下座しろーーー！！！");

    }

});


});
  var count = 0;

$(".button1").on("click",function () {

  count++;

   if(count > 4){
        count = 0;
    }
      if(count == 1){//今が0秒〜14秒の時
       $(".title").html('<img src="img/hanzawa.jpg" alt="hanzawa">');


     }else if(count == 2 ){//今が15秒〜29秒の時
       $(".title").html('<img src="img/taiketsu.jpg" alt="hanzawa">');
        $(".shohai").html('久しぶりだね、君はもう');
     }else if(count == 3){//今が30秒〜44秒の時
      $(".title").html('<img src="img/oshimaidesu.png" alt="hanzawa">');
        $(".shohai").html('おしまいDEATH');
     }else if(count == 4){//今が30秒〜44秒の時
      $(".title").html('<img src="img/uraretakenka.jpg" alt="hanzawa">');
        $(".shohai").html('やられたらやり返す・・・じゃんけん、');
 if(count > 5){
        count = 0;
    }
   
 }

console.log('click');
});





$(function () {
    $('.title').on('click', () => {
        $('.janken').show();
    });
});

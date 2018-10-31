// notification on order screen
$(".open").on("click", function(){
    console.log('click')
    $(".popup, .popup-content").addClass("active");
    });

$(".close, .popup").on("click", function(){
    console.log('click2')
    $(".popup, .popup-content").removeClass("active");
    });



const imgLight=document.querySelector(".img-1")

$(".img-gallery").click(function(){
    var src=$(this).attr("src")
    imgLight.src=src;
    $(".imagen-light").addClass("showImg")

})
$(".close").click(function(){
    $(".imagen-light").removeClass("showImg")
});


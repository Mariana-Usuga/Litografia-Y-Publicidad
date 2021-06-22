

const imgLight=document.querySelector(".img-1")

$(".img-gallery").click(function(){
    var src=$(this).attr("src")
    imgLight.src=src;
    $(".imagen-light").addClass("showImg")

})
$(".close").click(function(){
    $(".imagen-light").removeClass("showImg")
});






/*function showImg(id){
    switch(id){
        case 'img1':

    }
    $("img").attr("src","img/"+id+".png")

    
}*/
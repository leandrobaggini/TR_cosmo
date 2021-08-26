//boton al menu selector.
$("#boton").click(function(){
    console.log("Paso menu selector");
    $(".menuInicio").fadeOut("slow");
    $(".selectorP").fadeIn("slow");
});

//boton de inicio realidad aumentada.
$(".UIinfm2").click(function(){
    console.log("Paso a Realidad aumentada");
    $(".selectorP").fadeOut("slow");
    $("#experienciaAR").fadeIn("slow");
});


//Selector de personajes
//Selector.Pepino
$("#botonPepi").click(function(){
    console.log("Pepi acitivo");
    $(".caballeroRojo").fadeOut("slow");
    $(".momia").fadeOut("slow");
    $(".momiaN").fadeOut("slow");
    $(".pepino").fadeIn("slow");
});

//Selector.Caballero
$("#botonCaba").click(function(){
    console.log("Caballero acitivo");
    $(".pepino").fadeOut("slow");
    $(".caballeroRojo").fadeIn("slow");
    $(".momia").fadeOut("slow");
    $(".momiaN").fadeOut("slow");
});

//Selector.Momia
$("#botonMomi").click(function(){
    console.log("Momia acitivo");
    $(".pepino").fadeOut("slow");
    $(".caballeroRojo").fadeOut("slow");
    $(".momiaN").fadeOut("slow");
    $(".momia").fadeIn("slow");
});

//Selector.MomiaNegra
$("#botonMoniN").click(function(){
    console.log("Momia acitivo");
    $(".pepino").fadeOut("slow");
    $(".caballeroRojo").fadeOut("slow");
    $(".momia").fadeOut("slow");
    $(".momiaN").fadeIn("slow");
});

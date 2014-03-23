function obtenlista(){
    /*$.ajax({
        type: "POST",
        url: "http://carlos.igitsoft.com/apps/ringtonesPlatform/servApp.php",
        data: "pet=1"
    }).done(function(lista){
        console.log("lista="+lista);
        $("#ulp").html('');
        for(i=0;i<=lista.length;i++){
            var audio = lista[i];
            name=audio.nombre;	
            ruta=audio.ruta;
            $("#ulp").append('<li class="lista"><img id="escuchar" src="img/Play_button.png" width="48" height="48"/><span class="nombre">'+name+'</span><img id="descargar" src="img/download_button.png" width="48" height="48"/></li>');
        }
            //navigator.notification.alert("Error al procesar datos", null, "Error", "Aceptar");
    });*/
    var pet=1;
    $.post("http://carlos.igitsoft.com/apps/ringtonesPlatform/servApp.php",{pet:pet},function(lista){
        $("#ulp").html('');
        for(i=0;i<=lista.length;i++){
            var audio = lista[i];
            name=audio.nombre;	
            ruta=audio.ruta;
            $("#ulp").append('<li class="lista"><div class="play"><img class="escuchar" src="img/Play_button.png" width="48" height="48" /><audio><source src="'+ruta+'" type="audio/mpeg"></audio></div><span class="nombre">'+name+'</span><img class="descargar" src="img/download_button.png" width="48" height="48"/></li>');
        }
            //navigator.notification.alert("Error al procesar datos", null, "Error", "Aceptar");
    },"json");
    return false;
}
function enviarDatos(nom,mail,tel,foto){
    alert("dentro de enviar datos");
    $.ajax({
        type: "POST",
        url: "http://192.168.1.65/hotelc/pgtest.php",
        data: "nom=" + nom + "&mail="+ mail +"&tel="+tel
    }).done(function(msg){
        alert("msg="+msg);
        if(msg==1){
            subirFoto(foto, nom);
        }else{
            navigator.notification.alert("Error al procesar datos", null, "Error", "Aceptar");
        }
    });
}

function sicronizarReserva(th,pe,di,ha){
    $.ajax({
        type: "POST",
        url: "http://192.168.1.65/hotelc/pgtest.php",
        data: "th=" + th + "&pe="+ pe +"&di="+ di + "&ha="+ ha + "&id="+infoDispositivo('id')
    }).done(function(msg){
        if(msg==1){
            navigator.notification.alert("Reservacion completa", null, "Felicidades", "Aceptar");
        }else{
            navigator.notification.alert("Error al procesar datos", null, "Error", "Aceptar");
        }
    });
}
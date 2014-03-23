$(function(){
    document.addEventListener("deviceready",function(){
        obtenlista();
        $("ul#ulp").on('tap','.play',function(){
            var audio=$(this).find('audio');
            audio.hide();
            audio[0].play();
        });
        
        $("ul#ulp").on('tap','.descargar',function(){
            var ruta=$(this).attr('id');
            alert(ruta);
            //download(ruta);    
        });
      /*download(ruta){
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, descarga(ruta), fail);
      }
        descarga(ruta){
                var fileTransfer = new FileTransfer();
                var uri = ruta;
                fileTransfer.download(
                    uri,
                    filePath,
                    function(entry) {
                        console.log("download complete: " + entry.fullPath);
                    },
                    function(error) {
                        console.log("download error source " + error.source);
                        console.log("download error target " + error.target);
                        console.log("upload error code" + error.code);
                    },
                    false,
                    {
                        headers: {
                            "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
                        }
                    }
                );
        }*/
        //Sección de Registro -INICIO------------------------------------------
        if(!estaRegistrado())
            window.location.href = "#registro";
        
        $('#regEnv').tap(function(){
            alert("dentro de captura form");
            var nom = $('#regNom').val();
            var mail = $('#regMail').val();
            var tel = $('#regTel').val();
            var foto = $('#regFoto').attr('rel');
            
            if(nom != '' && mail != '' && tel != '' && foto != '' && foto != undefined){
                alert("enviar datos");
                enviarDatosarDatos(nom,mail,tel,foto);
            }else{
                navigator.notification.alert('Todos los campos son requeridos', null, "Registro", "Instentar de nuevo");
            }
        });
        
        $('#regFoto').tap(function(){
            tomarFoto();
        });
        //Sección de Registro -FIN-----------------------------------------------------------------------------------------------
        //Sección de Nuevas Reservas -INICIO-------------------------------------------------------------------------------------
        $('#nr1 ul[data-role=listview] li').tap(function(){
           if($(this).index()!=0){
               $('#nr1').attr('th',$(this).index());
               $('#nr1 ul[data-role=listview] li').fadeIn(1000);
               $(this).fadeOut(1000);
           }    
        });
        $('#nrSig').tap(function(){
            if($('#nr1').attr('th')!=undefined && $('#nr1').attr('th')!=''){
                window.location.href='#nr2';
            }
        });
        $('#nrEnv').tap(function(){
            var per=$('#nrPer').val();
            var dia=$('#nrDia').val();
            var hab=$('#nrHab').val();
            var th=$('#nr1').attr('th');
            /*comprobar conexion*/
            if(estaConectado()){
                //enviar al servidor
                sicronizarReserva(th,per,dia,hab);
            }
            else{
                crearReserva(th,per,dia,hab);
            }
                
        });
        //Sección de Nuevas Reservas -FIN----------------------------------------------------------------------------------------
        //Seccion de historial ---inicio--------------------------------------------------------------------------------------------
        $('#btnHist').tap(function(){
            leerHistorial();
        });
         //Seccion de historial ---fin--------------------------------------------------------------------------------------------
        //Sincronizar reservas ---inicio--------------------------------------------------------------------------------------------
        document.addEventListener("online",function(){
            leerReserva();
        },false)
        //Sincronizar reservas ---fin--------------------------------------------------------------------------------------------
    }, false);
});
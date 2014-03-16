function tomarFoto(){
    // start image capture
    navigator.device.capture.captureImage(function(mediaFiles){
        var path = mediaFiles[0].fullPath;
        $('#regFoto').attr('rel',path);
        $('#regMFoto').html('<img src="'+path+'" style="width: 100%;" />');
    }, function(error){
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    }, {limit:2});
}
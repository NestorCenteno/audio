function infoDispositivo(p){
    switch(p){
        case 'nombre':
            return device.name;
            break;
        case 'phonegap':
            return device.cordova;
            break;
        case 'plataforma':
            return device.platform;
            break;
        case 'id':
            return device.uuid;
            break;
        case 'version':
            return device.version;
            break;
        case 'modelo':
            return device.model;
    }
}
funcion estaConectado(){
    if(navigator.connection.type != Connection.NONE)
        return true;
    else
        return false;
}
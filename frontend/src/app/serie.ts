export class Serie {
    _id?: string | undefined;
    titulo:String | undefined;
    sinopsis:String| undefined;
    url_imagen:String | undefined;
    numero_episodios:Number | undefined;
    episodios:[{
        _id?: string | undefined;
        numero_episodio:Number | undefined;
        titulo_episodio:String | undefined;
        fecha_vista:String | undefined;
    }] | undefined;
}

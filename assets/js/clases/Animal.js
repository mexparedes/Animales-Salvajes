class Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        let nombre_ = nombre;
        this.getNombre = () => nombre_;
        let edad_ = edad;
        this.getEdad = () => edad_;
        let img_ = img;
        this.getImg = () => img_;
        let comentarios_ = comentarios;
        this.getComentarios = () => comentarios_;
        let sonido_ = sonido;
        this.getSonido = () => sonido_;
    }
    get nombre(){
        return this.getNombre();
    }
    get edad(){
        return this.getEdad();
    }
    get img(){
        return this.getImg();
    }
    get comentarios(){
        return this.getComentarios();
    }
    set comentarios(comentario){
        this.comentarios_ = comentario;
    }
    get sonido(){
        return this.getSonido();
    }
}
export default Animal;
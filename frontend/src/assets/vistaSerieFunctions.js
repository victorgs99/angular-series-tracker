$(document).ready(function(){
    const multipleModal = document.getElementById('multipleModal');

    if(multipleModal){
        multipleModal.addEventListener('show.bs.modal', event =>{
            //$(".modal-footer").empthy();

            //Boton que activa modal
            const button = event.relatedTarget;
            //Se lee la info del data-bs-operacion
            const nomOperacion = button.getAttribute('data-bs-operacion');

            //Limpia modal
            $(".modal-footer").empty();
            $(".modal-body").empty();

            //Cambia contenido del modal segun el data-bs-operacion
            const modalTitle = multipleModal.querySelector('.modal-title');
            modalTitle.textContent = `${nomOperacion}`;

            $(".modal-footer").append("<button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>Cancelar</button>");

            if(nomOperacion == 'Agregar episodio'){
                $(".modal-body").append(
                    "<form action='' method='post'>\
                        <div class='mb-3 d-flex flex-row justify-content-between'>\
                            <div>\
                                <label class='form-label fw-semibold' for='inputNumCapitulo'>Número de capítulo</label>\
                                <input class='form-control' type='number' name='numCapitulo' id='inputNumCapitulo' min='1' max='80'>\
                            </div>\
                            <div>\
                                <label class='form-label fw-semibold' for='inputFechaVista'>Fecha de visualización</label>\
                                <input class='form-control' type='date' name='fechaVista' id='inputFechaVista'>\
                            </div>\
                        </div>\
                        <div class='mb-3'>\
                            <label class='form-label fw-semibold' for='inputTitulo'>Título del episodio (opcional)</label>\
                            <input class='form-control' type='text' name='titulo' id='inputTitulo'>\
                        </div>\
                    </form>"
                );
                $(".modal-footer").append("<button type='button' class='btn btn-primary'>Agregar</button>");
            }else if(nomOperacion == 'Modificar serie'){
                $(".modal-body").append(
                    "<form action='' method='post'>\
                        <div class='mb-3'>\
                            <label class='form-label fw-semibold' for='inputTitulo'>Título</label>\
                            <input class='form-control' type='text' name='titulo' id='inputTitulo'>\
                        </div>\
                        <div class='mb-3'>\
                            <label class='form-label fw-semibold' for='inputSinopsis'>Sinopsis</label>\
                            <textarea class='form-control' name='sinopsis' id='inputSinopsis' rows='3'></textarea>\
                        </div>\
                        <div class='mb-3 d-flex flex-row justify-content-between'>\
                        <div>\
                            <label class='form-label fw-semibold' for='inputCapitulos'>Número de capítulos</label>\
                            <input class='form-control' type='number' name='numCapitulos' id='inputCapitulos' min='1' max='80'>\
                        </div>\
                        <div>\
                            <label class='form-label fw-semibold' for='inputImg'>Link de la imagen</label>\
                            <input class='form-control' type='text' name='linkImagen' id='inputImg'>\
                        </div>\
                        </div>\
                    </form>"
                );
                $(".modal-footer").append("<button type='button' class='btn btn-warning'>Modificar</button>");
            }else if(nomOperacion == 'Eliminar serie'){
                $(".modal-body").append("<span>¿Está seguro de que desea eliminar esta serie?<br>Toda la información del registro de la serie será borrada y no podrá recuperarse.</span>");
                $(".modal-footer").append("<button (click)='eliminaSerie()' class='btn btn-danger'>Eliminar</button>");
            }else if(nomOperacion == 'Modificar episodio'){
                $(".modal-body").append(
                    "<form action='' method='post'>\
                        <div class='mb-3 d-flex flex-row justify-content-between'>\
                            <div>\
                                <label class='form-label fw-semibold' for='inputNumCapitulo'>Número de capítulo</label>\
                                <input class='form-control' type='number' name='numCapitulo' id='inputNumCapitulo' min='1' max='80'>\
                            </div>\
                            <div>\
                                <label class='form-label fw-semibold' for='inputFechaVista'>Fecha de visualización</label>\
                                <input class='form-control' type='date' name='fechaVista' id='inputFechaVista'>\
                            </div>\
                        </div>\
                        <div class='mb-3'>\
                            <label class='form-label fw-semibold' for='inputTitulo'>Título del episodio (opcional)</label>\
                            <input class='form-control' type='text' name='titulo' id='inputTitulo'>\
                        </div>\
                    </form>"
                );
                $(".modal-footer").append("<button type='button' class='btn btn-warning'>Modificar</button>");
            }else if(nomOperacion == 'Eliminar episodio'){
                $(".modal-body").append("<span>¿Está seguro de que desea eliminar este episodio?<br>El registro de este episodio será borrado del historial y no podrá recuperarse.</span>");
                $(".modal-footer").append("<button type='button' class='btn btn-danger'>Eliminar</button>");
            }
        })
    }
});
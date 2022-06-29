<div id="modalMantenimiento" class="modal fade bd-example-modal" tabindex="-1" role="dialog" aria-labelledby="MyLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <form method="POST" id="producto_form">
                <div class="modal-header">                
                    <h4 class="modal-tittle" id="mdlTitulo"></h4>
                </div>                
                <div class="modal-body">
                    <input type="hidden" id="prod_id" name="prod_id">
                    <div class="form-group">
                        <label class="form-label" for="prod_nom">Nombre</label>
                        <input type="text" class="form-control" id="prod_nom" name="aprod_nom" placeholder="Ingrese Nombre" required>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-rounded btn-default" data-dismiss="modal">Cerrar</button>
                    <button type="submit" name="action" id="#" value="add" class="btn btn-rounded btn-primary">Guardar</button>
                </div>
            </form>            
        </div>
    </div>
</div>
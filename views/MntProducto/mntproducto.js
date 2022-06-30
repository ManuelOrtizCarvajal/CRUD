var tabla;

function init()
{

    $('#modalMantenimiento').on("submit", function(e)
    {

        guardaryEditar(e);

    });

}

$(document).ready(function()
{

    tabla=$('#productos_data').dataTable(
    {

        "aProcessing": true,
        "aServerSide": true,
        dom: 'Bfrtip',
        buttons: 
        [

            'copyHtml5',
            'excelHtml5',
            'csvHtml5',
            'pdf'

        ],
        "ajax":
        {

            url: '../../controller/producto.php?op=listar',
            type: "get",
            dataType: "json",
            error: function(e)
            {

                console.log(e.responseText);

            }

        },
        "bDestroy": true,
        "responsive": true,
        "bInfo": true,
        "iDisplayLength": 20,
        "order": [[0, "asc"]],
        "language":
        {

            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla",
            "sInfo": "Mostrando un total de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando un total de 0 registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate":
            {

                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"

            },
            "oAria":
            {

                "sSortAscending": "Activar para ordenar la columna de manera ascendente",
                "sSortDescending": "Activar para ordenar la columna de manera descendente"

            }

        }

    }).DataTable();

   

});

function guardaryEditar(e)
{

    e.preventDefault();

    var formData = new FormData($("#modalMantenimiento"));

    $.ajax(
    {

        url: "../../controller/producto.php?op=guardaryeditar",
        type: "POST",
        data: formData,
        contentType: false,
        processData: false,
        success: function(datos)
        {

            console.log(datos);
            // $('#productos_form')[0].reset();
            // $('#modalMantenimiento').modal('hide');
            // $('#productos_data').DataTable().ajax.reload();

            // swal(
            // {

            //     tittle: "Guardar",
            //     text: "Completado!",
            //     type: "success",
            //     confirmButtonClass: "btn-success"
                
            // });

        }

        
    });

}

function editar()
{


}

function eliminar(prod_id)
{

    swal.fire(
    {

        title: "Est&aacute; seguro de eliminar el registro",
        text: "No podrá revertir esta acción!",
        icon: "warning",
        showCancelButton: true,        
        confirmButtonText: "Si, eliminar!",
        cancelButtonText: "No, cancelar!",
        reverseButtons: true

    }).then((result) => 
    {

        if(result.isConfirmed)
        {
            $.post("../../controller/producto.php?op=eliminar",{prod_id:prod_id}, function(data)
            {


            });

            $('#productos_data').DataTable().ajax.reload();

            swal.fire(
                'Eliminado!',
                'El archivo se ha eliminado',
                'success'                
            )

        }

    })
    
}

$(document).on("click","#btnNuevo", function()
{

    $("#mdlTitulo").html("Nuevo Registro");
    $("#modalMantenimiento").modal('show');

});

init();
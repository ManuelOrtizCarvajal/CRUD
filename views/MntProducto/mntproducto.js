var tabla;

function init()
{


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

function editar()
{


}

function eliminar(prod_id)
{

    console.log(prod_id);

}

$(document).on("click","#btnNuevo", function()
{

    $("#mdlTitulo").html("Nuevo Registro");
    $("#modalMantenimiento").modal('show');

});

init();
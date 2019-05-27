$(document).ready(function () {
    $('#call-table').DataTable({
        "scrollY": "270px",
        "scrollCollapse": true,
        "searching": false,
        "paging": false,
        "bInfo": false,
    });
    $('.dataTables_length').addClass('bs-select');
});
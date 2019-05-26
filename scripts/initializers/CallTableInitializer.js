$(document).ready(function () {
    $('#call-table').DataTable({
        "scrollY": "270px",
        "scrollCollapse": true,
        "searching": false,
        "paging": false,
    });
   $('.dataTables_length').addClass('bs-select');
});
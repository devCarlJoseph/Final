// $(document).ready(function() {
//     $('#printButton').on('click', function() {
//         // Create a print window
//         var printWindow = window.open('', '_blank', 'width=800,height=600');

//         // Get the content of the container
//         var containerContent = $('#container').html();

//         // Build the HTML content for the print window
//         var printContent = `
//             <html>
//             <head>
//                 <title>Printable Container</title>
//                 <link rel="stylesheet" href="styles.css">
//             </head>
//             <body>
//                 ${containerContent}
//             </body>
//             </html>
//         `;

//         // Set the content of the print window
//         printWindow.document.open();
//         printWindow.document.write(printContent);
//         printWindow.document.close();

//         // Print the content
//         printWindow.print();
//     });
// });

$(document).ready(function () {
    $("#print-button").click(function () {
        window.print();
    });


    // get month 
    const getMonth = $(".getMonth");
    var month= ["January","February","March","April","May","June","July","August","September","October","November","December"];

    for (let count = 0; count <= 11; count++) {
        getMonth.append($(`<option>${month[count]}</option>`));
    }

    // get day 
    const getDay = $(".getDay");
    const startDay = 1;
    for (let day = startDay; day <= 31; day++) {
        getDay.append($(`<option>${day}</option>`));
    }

    // get year
    const getYear = $(".getYear");
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= currentYear - 60; year--) {
        getYear.append($(`<option>${year}</option>`));
    }
});

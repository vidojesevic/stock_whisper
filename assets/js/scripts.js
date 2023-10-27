$(document).ready(function() {
    console.log("From jQuery!");
    logoAnimate();
    getData();
})

function logoAnimate() {
    const logo = $('.navbar a');

    $(logo).on('mouseover', function() {
        const span = $(this).find('span');
        setTimeout(function() {
            span.removeAttr("hidden");
        }, 230);
    }).on('mouseleave', function() {
        const span = $(this).find('span');
        setTimeout(function() {
            span.attr("hidden", true);
        }, 230);
       });
}

function displayGraph(data) {
    const timeSeries = data['Time Series (5min)'];

    const table = $('<table>').appendTo('.dataTerminal');
    const thead = $('<thead>').appendTo(table);
    const headerRow = $('<tr>').appendTo(thead).addClass('sticky');
    $('<th>').text('Date').appendTo(headerRow).addClass('text-white');
    $('<th>').text('Open').appendTo(headerRow).addClass('text-white');
    $('<th>').text('High').appendTo(headerRow).addClass('text-white');
    $('<th>').text('Low').appendTo(headerRow).addClass('text-white');
    $('<th>').text('Close').appendTo(headerRow).addClass('text-white');
    $('<th>').text('Volume').appendTo(headerRow).addClass('text-white');

    // $('<br/>').appendTo(table);

    const tbody = $('<tbody>').appendTo(table);
    for (const date in timeSeries) {
        const rowData = timeSeries[date];
        const row = $('<tr>').appendTo(tbody);
        $('<td>').text(date).appendTo(row);
        $('<td>').text(rowData['1. open']).appendTo(row);
        $('<td>').text(rowData['2. high']).appendTo(row);
        $('<td>').text(rowData['3. low']).appendTo(row);
        $('<td>').text(rowData['4. close']).appendTo(row);
        $('<td>').text(rowData['5. volume']).appendTo(row);
    }
}

function getData() {
    ajaxCallBack("utilities/scraper.php", 
        function(data) {
            console.log(data);
            displayGraph(data);
    }, 
        function(error) {
            console.log("Error " + error);
        });
}

function ajaxCallBack(url, successFunction, errorFunction) {
    $.ajax({
        url: url,
        method: 'GET',
        CORS: true,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: successFunction,
        error: errorFunction,
        headers: {
            "accept": "application/json",
            'Access-Control-Allow-Origin': '*',
        },
    });
}

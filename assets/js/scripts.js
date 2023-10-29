$(document).ready(function() {
    console.log("From jQuery!");
    logoAnimate();
    getGlobals();
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

function makeChart(data) {
    const timeSeries = data['Time Series (5min)'];
    // const timeSeries = data['Time Series (30min)'];
    const caption = data['Meta Data']['2. Symbol'];
    const volumes = [];
    const labels = [];
    for (const time in timeSeries) {
        const dataPoint = timeSeries[time];
        labels.push(time);
        volumes.push(dataPoint['5. volume']);
    }
    new Chart(
        document.getElementById('chart'),
        {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Volumes for ' + caption,
                        data: volumes,
                        borderColor: '#197941'
                    }
                ]
            }
        }
    );
}

function displayGraph(data) {
    // const timeSeries = data['Time Series (30min)'];
    const timeSeries = data['Time Series (5min)']; // for testing
    const caption = data['Meta Data']['2. Symbol'] + " | Last Refreshed: " + data['Meta Data']['3. Last Refreshed'];
    $('<p>').text("Data for " + caption).addClass('text-light text-center').appendTo('.dataTerminal');

    const table = $('<table>').appendTo('.dataTerminal');
    const thead = $('<thead>').appendTo(table);
    const headerRow = $('<tr>').appendTo(thead).addClass('sticky');
    $('<th>').text('Date').appendTo(headerRow).addClass('text-white');
    $('<th>').text('Open').appendTo(headerRow).addClass('text-white');
    $('<th>').text('Low').appendTo(headerRow).addClass('text-white');
    $('<th>').text('High').appendTo(headerRow).addClass('text-white');
    $('<th>').text('Close').appendTo(headerRow).addClass('text-white');

    const tbody = $('<tbody>').appendTo(table);

    for (const date in timeSeries) {
        const rowData = timeSeries[date];
        const row = $('<tr>').appendTo(tbody);
        $('<td>').text(date.substring(2,16)).appendTo(row).addClass('text-white');
        $('<td>').text("$"+rowData['1. open']).appendTo(row);
        $('<td>').text("$"+rowData['2. high']).appendTo(row);
        $('<td>').text("$"+rowData['3. low']).appendTo(row);
        $('<td>').text("$"+rowData['4. close']).appendTo(row);
    }
}

function getGlobals() {
    console.log("Get globals");
    ajaxCallBack("utilities/global_scraper.php",
        function(data) {
            const global = data.markets;
            console.log(global);
            const table = $('<table>').appendTo('#marketData').addClass('table table-striped table-dark bg-dark').css('font-size','1em');
            $('<caption>').text('Global Market').appendTo(table).addClass('text-light fw-bolder text-center').css('caption-side','top');
            const thead = $('<thead>').appendTo(table).addClass('text-white');
            const headerRow = $('<tr>').appendTo(thead).addClass('fw-bolder');
            $('<th>').text('Market type').appendTo(headerRow).addClass('text-white');
            $('<th>').text('Region').appendTo(headerRow).addClass('text-white');
            $('<th>').text('Primary exchanges').appendTo(headerRow).addClass('text-white');
            $('<th>').text('Open').appendTo(headerRow).addClass('text-white');
            $('<th>').text('Closes').appendTo(headerRow).addClass('text-white');
            $('<th>').text('Notes').appendTo(headerRow).addClass('text-white');

            const tbody = $('<tbody>').appendTo(table);

            global.forEach(function(market) {
                const row = $('<tr>').appendTo(tbody);
                $('<td>').text(market.market_type).appendTo(row).addClass('text-white');
                $('<td>').text(market.region).appendTo(row).addClass('text-white');
                $('<td>').text(market.primary_exchanges).appendTo(row).addClass('text-white');
                $('<td>').text(market.local_open).appendTo(row).addClass('text-white');
                $('<td>').text(market.local_close).appendTo(row).addClass('text-white');
                $('<td>').text(market.notes).appendTo(row).addClass('text-white');
                $(row).css('border-top','0.05em solid #FFFFFF');
            });
        },
        function(err) {console.log(err);}
    );
}

function getData() {
    ajaxCallBack("utilities/scraper.php", 
        function(data) {
            displayGraph(data);
            makeChart(data);
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

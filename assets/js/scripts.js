$(document).ready(function() {
    console.log("From jQuery!");
    logoAnimate();
    getGlobals();
    getData();
    getTimeType();
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
    $('<p>').text("Data for " + caption).addClass('text-light text-center').css('border-bottom','1px solid #FFF').appendTo('.dataTerminal');

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
    makeChart2(data, 'Time Series (5min)');
}

function getGlobals() {
    ajaxCallBack("utilities/global_scraper.php",
        function(data) {
            const global = data.markets;
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
            });
        },
        function(err) {console.log(err);}
    );
}

function displayData(path, time) {
    ajaxCallBack(path,
        function(data) {
            const timeSeries = data[time];
            const caption = data['Meta Data']['2. Symbol'] + " | Last Refreshed: " + data['Meta Data']['3. Last Refreshed'];
            $('.dataTerminal').empty();
            $('<p>').text("Data for " + caption).addClass('text-light text-center').css('border-bottom','1px solid #FFF').appendTo('.dataTerminal');

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
            $('.chart-div').empty();
            $('<canvas id="chart">').addClass('mb-3 bg-dark text-success border rounder').appendTo('.chart-div');
            makeChart2(data, time)
        },
        function(err) {
            console.log(err);
        }
    );
}

function makeChart2(data, time) {
    const timeSeries = data[time];
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
                        borderColor: '#197941',
                        color: "#FFF"
                    }
                ]
            }
        }
    );
}

function getTimeType() {
    $('.nav-link').on('click', function() {
        const clicked = $(this).data('time-type');
        const value = $(this).text();
        switch (value) {
            case 'Daily':
                time = 'Time Series (' + value + ')';
                displayData(clicked, time);
                break;
            case 'Weekly':
                time = value + ' Time Series';
                displayData(clicked, time);
                break;
            case 'Monthly':
                time = value + ' Time Series';
                displayData(clicked, time);
                break;
            default:
                break;
        }
    });
    $('.dropdown-item').on('click', function() {
        const clicked = $(this).data('path');
        console.log(clicked)
        const value = $(this).text();
        console.log(value)
        switch (value) {
            case '15':
                time = 'Time Series (' + value + 'min)';
                console.log(time)
                displayData(clicked, time);
                break;
            case '30':
                time = 'Time Series (' + value + 'min)';
                console.log(time)
                displayData(clicked, time);
                break;
            case '60':
                time = 'Time Series (' + value + 'min)';
                console.log(time)
                displayData(clicked, time);
                break;
            default:
                break;
        }
    });
}

function getData() {
    ajaxCallBack("utilities/scraper.php", 
        function(data) {
            displayGraph(data);
            // makeChart(data);
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

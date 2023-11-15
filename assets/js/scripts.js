$(document).ready(function() {
    console.log("From jQuery!");
    logoAnimate();
    getGlobals();
    getData();
    getTimeType();
    // companyOverview();
    getAPI();
    searchCompany();
    registrationToggle()
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
    makeGraph(data, 'Time Series (5min)');
}

function getGlobals() {
    ajaxCallBack("utilities/global_scraper.php",
        function(data) {
            const global = data.markets;
            const table = $('<table>').appendTo('#marketData').addClass('table table-striped table-dark bg-dark col-lg-12 col-md-12 col-sm-10 col-xs-10').css('font-size','1em');
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
    // console.log(time);
    // console.log(path)
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

            prev = null;
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
            $('<canvas id="chart">').addClass('mb-3 bg-dark text-success border rounded').appendTo('.chart-div');
            makeGraph(data, time)
        },
        function(err) {
            console.log(err);
        }
    );
}

function makeGraph(data, time) {
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
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        grid: {
                            color: '#6c757d'
                        }
                    },
                    x: {
                        grid: {
                            color: '#6c757d'
                        }
                    }
                }
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

// function companyOverview() {
//     ajaxCallBack(null, "utilities/testing.php",
//         function(data) {
//             console.log(data);
//         },
//         function(err) {
//             console.log(err)
//         }
//     );
// }

function getAPI() {
    $('#formapi').on('submit', function(event) {
        event.preventDefault();
        const api = $('#apiKey').val();
        $(this).trigger('reset');

        const API = {
            'key': api
        };
        console.log("Your API key is " + API['key']);

        $.ajax({
            url: "utilities/helper.php",
            method: "POST",
            data: API,
            contentType: false,
            processData: false,
            success: function(data) {
                console.log(data);
            },
            error: function(err) {
                console.log(err);
            }
        });
    })
}

function searchCompany() {
    $('#searchForm').on('submit', function(event) {
        event.preventDefault();
        const company = $('#search').val();
        $(this).trigger('reset');

        const comp = {
            'company': company
        };

        console.log("Your company is " + comp['company']);

        $.ajax({
            url: "utilities/helper.php",
            method: "POST",
            data: comp,
            contentType: false,
            processData: false,
            success: function(data) {
                console.log(data);
                displayData('utilities/scraper.php', 'Time Series (5min)');
            },
            error: function(xhr) {
                console.log(xhr);
            }
        })
    })
}

function registrationToggle() {
    const logToggler = $(".longin");
    logToggler.on('click', function() {
        const href = $(this).find("a").attr("href")
        const targetTab = $(href)
        const a = $(this).find("a")
        $(".longin").find("a").removeClass("bg-dark")
        a.addClass("bg-dark")

        $(".tab-pane").removeClass("show active")

        targetTab.addClass("show active")
    })
}

function getData() {
    ajaxCallBack("utilities/scraper.php", 
        function(data) {
            displayGraph(data);
        }, 
        function(error) {
            console.log("Error " + error);
        });
}

// function ajaxSend(data, url, successFunction, errorFunction) {
//     $.ajax({
//         url: url,
//         method: 'GET',
//         CORS: true,
//         contentType: false,
//         processData: false,
//         dataType: 'json',
//         success: successFunction(data),
//         error: errorFunction,
//         headers: {
//             "accept": "application/json",
//             'Access-Control-Allow-Origin': '*',
//         },
//     });
// }

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

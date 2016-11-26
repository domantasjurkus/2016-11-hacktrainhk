$(function () {
    $.get("heatmap", function(data) {
        drawHeatmap(data);
    });
});

function drawHeatmap(data) {
    $('#highcharts-container').highcharts({
        chart: {
            type: 'heatmap',
            marginTop: 0,
            marginBottom: 30,
            marginRight: 0,
            //width: 500,
            plotBorderWidth: 0,
            style: {
                fontFamily: "Roboto"
            }
        },
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        title: {
            text: ''
        },
        legend : {
            enabled: false
        },

        xAxis: {
            categories: ["Mon 28 Nov","Tue 29 Nov","Wed 30 Nov","Thu 1 Dec","Fri 2 Dec","Sat 3 Dec","Sun 4 Dec"],
            tickColor: null,
            lineWidth: 0
        },

        yAxis: {
            categories: ['10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00'].reverse(),
            title: null,
            gridLineColor: null
        },

        colorAxis: {
            min: 0,
            minColor: '#ffffff',
            maxColor: '#ff0000'
        },
        tooltip: {
            animation: false,
            hideDelay: 0,
            formatter: function () {
                return '<b>'+this.point.value+' Bookings</b>';
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0,
                borderWidth: 0,
                groupPadding: 0.025
            },
            series: {
                point : {
                    events : {
                        /*click : function () {
                            heatmapClick();
                        }*/
                    }
                }
            }
        },
        series: [{
            name: '',
            borderWidth: 0,
            borderColor: '#000000',
            data: data ,
            dataLabels: {
                enabled: false
            }
        }]

    });
}
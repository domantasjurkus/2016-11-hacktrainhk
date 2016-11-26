var data =  {
    'categories': ['18:00','17:00','16:00','15:00','14:00','13:00','12:00','11:00','10:00'],
    'days': ['Mon 5th June','Tue 6th June','Wed 7th June','Thu 8th June','Fri 9th June','Sat 10th June','Sun 11th June'],
    "vals":
        [[0, 0, 160],
            [0, 1, 160],
            [0, 2, 180],
            [0, 3, 200],
            [0, 4, 240],
            [0, 5, 240],
            [0, 6, 240],
            [0, 7, 240],
            [0, 8, 220],

            [1, 0, 180],
            [1, 1, 200],
            [1, 2, 240],
            [1, 3, 240],
            [1, 4, 240],
            [1, 5, 240],
            [1, 6, 240],
            [1, 7, 240],
            [1, 8, 240],

            [2, 0, 180],
            [2, 1, 180],
            [2, 2, 200],
            [2, 3, 200],
            [2, 4, 200],
            [2, 5, 220],
            [2, 6, 220],
            [2, 7, 220],
            [2, 8, 240],

            [3, 0, 160],
            [3, 1, 180],
            [3, 2, 200],
            [3, 3, 200],
            [3, 4, 220],
            [3, 5, 220],
            [3, 6, 220],
            [3, 7, 240],
            [3, 8, 240],

            [4, 0, 160],
            [4, 1, 160],
            [4, 2, 200],
            [4, 3, 220],
            [4, 4, 220],
            [4, 5, 240],
            [4, 6, 240],
            [4, 7, 240],
            [4, 8, 240],

            [5, 0, 160],
            [5, 1, 160],
            [5, 2, 200],
            [5, 3, 200],
            [5, 4, 200],
            [5, 5, 200],
            [5, 6, 200],
            [5, 7, 220],
            [5, 8, 220],

            [6, 0, 160],
            [6, 1, 160],
            [6, 2, 220],
            [6, 3, 220],
            [6, 4, 240],
            [6, 5, 240],
            [6, 6, 240],
            [6, 7, 240],
            [6, 8, 240]]
};



$(function () {
    $('#heatmap-container').highcharts({
        chart: {
            type: 'heatmap',
            height: 600,
            marginTop: 5,
            marginBottom: 25,
            plotBorderWidth: 0,
            style: "{fontSize: '20px'}",
            style: {
                fontFamily: "Poppins"
            },
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
            categories: data['days'],
            tickColor: null,
            lineWidth: 0,
            labels: {
                style: {
                    fontSize:'12px'
                }
            }
        },

        yAxis: {
            categories: data['categories'],
            title: null,
            gridLineColor: null,
            labels: {
                style: {
                    fontSize:'18px',
                    fontColor: 'black'
                }
            }
        },

        colorAxis: {
            minColor: '#ffffff',
            maxColor: '#5ebdb4',
        },
        tooltip: { enabled: false },
        plotOptions: {
            column: {
                pointPadding: 0,
                borderWidth: 0,
                groupPadding: 0.025
            },
            series: {
                point : {
                    events : {
                        click : function () {
                            console.log(this);
                        }
                    }
                }
            }
        },
        series: [{
            name: '',
            borderWidth: 3,
            borderColor: 'white',
            data: data.vals ,
            dataLabels: {
                enabled: true,
                format: "${point.value}",
                style: {
                    fontSize:'18px'
                }
            },
        }]

    });
});
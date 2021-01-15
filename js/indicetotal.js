google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart4);

function drawChart4() {
  var data = google.visualization.arrayToDataTable([
    ['Ano', 'Índice de Dependência Total'],
    ['2015',  64.5],
    ['2016',  66.6],
    ['2017',  68.2],
    ['2018',  69.6],
    ['2019',  70.6]
  ]);

  var options = {
    title: 'Índice de Dependência Total do Porto',
    curveType: 'function',
    legend: { position: 'bottom' },
    backgroundColor: '#e0ecf7',
    colors: ['rgb(0, 149, 248)'],
  };

  var chart = new google.visualization.LineChart(document.getElementById('linechart_div'));

  chart.draw(data, options);
}


$(window).resize(function(){
  drawChart4();
});


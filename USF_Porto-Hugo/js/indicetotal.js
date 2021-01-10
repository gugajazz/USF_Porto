google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Ano', 'Índice de Dependência Total', { role: 'style' } ],
        ['2015', 64.5, 'color: blue'],
        ['2016', 66.6, 'color: blue'],
        ['2017', 68.2, 'color: blue'],
        ['2018', 69.6, 'color: blue'],
        ['2019', 70.6, 'color: blue']
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1, 1, 2]);

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));

  chart.draw(view, {
    height: 450,
    width: 450,
    title: "Índice de Dependência Total do Porto",
    series: {
      0: {
        type: 'bars'
      },
      1: {
       
        lineWidth: 0,
        visibleInLegend: false
      }
    },
    vAxis: {
      maxValue: 100
    }
  });
}
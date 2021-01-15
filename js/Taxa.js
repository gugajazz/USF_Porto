google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart1);


function drawChart1() {
    var data = google.visualization.arrayToDataTable([
        ['Idade', 'Taxa de utilização de consultas', { role: 'style' } ],
        ['0-11 meses', 73.4, ''],
        ['12-23 meses', 67.6, ''],
        ['0-18 anos', 48.3, ''],
        ['19-44 anos', 57.7, ''],
        ['45-64 anos', 66.6, ''],
        ['>=65 anos', 82.1, '']
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1, 1, 2]);

  var chart = new google.visualization.ComboChart(document.getElementById('columnchart_div'));

  chart.draw(view, {
    title: "Taxa de Utilização de Consultas na USF",
    backgroundColor: '#e0ecf7',
    colors: ['rgb(0, 149, 248)'],
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


$(window).resize(function(){
  drawChart1();
});


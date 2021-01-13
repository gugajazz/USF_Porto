google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Utentes Inscritos', 'Quantidade'],
    ['Utentes Inscritos por Médico',     10029],
    ['Utentes Inscritos por Enfermeiro',      3810],
  ]);

  var options = {
    backgroundColor: '#e0ecf7',
    title: 'Utentes Inscritos na USF',
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart_div'));
  chart.draw(data, options);
}

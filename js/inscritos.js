google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart2);
function drawChart2() {
  var data = google.visualization.arrayToDataTable([
    ['Utentes Inscritos', 'Quantidade'],
    ['Utentes Inscritos por Médico',     10029],
    ['Utentes Inscritos por Enfermeiro',      3810],
  ]);

  var options = {
    backgroundColor: '#e0ecf7',
    colors: ['rgb(0, 149, 248)', 'rgb(190, 18, 18)'],
    title: 'Utentes Inscritos na USF',
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart_div'));
  chart.draw(data, options);
}

$(window).resize(function(){
  drawChart2();
});
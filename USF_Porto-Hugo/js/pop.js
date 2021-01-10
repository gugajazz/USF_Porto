google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Grupo etário', 'Percentagem'],
          ['Jovem',     28041],
          ['Activa',      126552],
          ['Idosa',  61353],
          
        ]);

        var options = {
          width: 450,
          height: 450,
          title: 'Percentagem de população activa, jovem e idosa no Porto',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
      }
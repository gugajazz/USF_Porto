google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart3);
      function drawChart3() {
        var data = google.visualization.arrayToDataTable([
          ['Grupo etário', 'Percentagem'],
          ['Jovem',     28041],
          ['Activa',      126552],
          ['Idosa',  61353],
          
        ]);
        

        var options = {
          backgroundColor: '#e0ecf7',
          colors: [ 'rgb(39, 11, 201)','rgb(0, 149, 248)','rgb(190, 18, 18)'],
          title: 'Percentagem de população activa, jovem e idosa no Porto',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_div'));
        chart.draw(data, options);
      }

 $(window).resize(function(){
        drawChart3();
      });
google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Idade', 'Homens ....', 'Mulheres'],
          ['>=0 e <7 ', 449, 461],
          ['>=7 e <65 ', 5583, 6071],
          ['>=65 e <75 ', 648, 781],
          ['>=75 ', 387, 558]
        ]);

        var options = {
            height: 450,
            width: 450,
          chart: {
            
            title: 'Grupos Etários dos Utentes',
           
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }
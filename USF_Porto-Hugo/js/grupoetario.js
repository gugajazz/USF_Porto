google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(chart);

function chart()
{
  

  var dataArray = [
    ['Idade', 'Homem', 'Mulher'],
    ['0-4 anos',   280, -243],
    ['5-9 anos',   252,  -259 ],
    ['10-14 anos', 299,  -287 ],
    ['15-19 anos', 311,  -307 ],
    ['20-24 anos', 293,  -321 ],
    ['25-29 anos', 336,  -350 ],
    ['30-34 anos', 375,  -353 ],
    ['35-39 anos', 394,  -475 ],
    ['40-44 anos', 484,  -598 ],
    ['45-49 anos', 514,  -543 ],
    ['50-54 anos', 431,  -492 ],
    ['55-59 anos', 419,  -576 ],
    ['60-64 anos', 402,  -519 ],
    ['64-69 anos', 349,  -536 ],
    ['70-74 anos', 333,  -535 ],
    ['75-79 anos', 277,   -408  ],
    ['80-84 anos', 232,   -389  ],
    ['85-89 anos', 130,   -271  ],
    ['90-94 anos', 47,   -165   ],
    ['95+ anos',   15,   -45   ]
  ];

  var data = google.visualization.arrayToDataTable(dataArray);

  var chart = new google.visualization.BarChart(document.getElementById('pyramidchart_div'));

  var options = {
    title: 'Pirâmide Etária dos Utentes Inscritos na USF',
    backgroundColor: '#e0ecf7',
    isStacked: true,
    hAxis: {
      format: ';'
    },
    vAxis: {
      direction: -1
    }
  };


  var formatter = new google.visualization.NumberFormat({
    pattern: ';'
  });

  formatter.format(data, 2)

  chart.draw(data, options);
}
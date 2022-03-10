

/**
   * Gridstack Initialization
   */
var grid = GridStack.init({
  column: 8
});


// Grid onChange
// grid.on('change', function (event, items) {
//   items.forEach(function (item) {
//     console.log(item);
//   });
// });

function addItem(text = "Item") {
  grid.addWidget({
    w: 2,
    h: 1,
    content: text
  });
}

function expandTile(btn) {
  let tile = btn.parentElement.parentElement;
  console.log(tile);
  grid.update(tile, {
    h: 2
  });
}


/**
 * Chart.js Initialization
 */
const workEntriesContext = document.getElementById('workEntries').getContext('2d');
const workEntriesChart = new Chart(workEntriesContext, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [75, 25],
      backgroundColor: [
        '#0BB22E',
        '#E7E7EA'
      ],
      borderWidth: 0
    }]
  },
  options: {
    maintainAspectRatio: false,
    cutout: '75%'
  }
})

const ctx = document.getElementById('chart1').getContext('2d');
const chart1 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Q1 - 2021', 'Q2 - 2021', 'Q3 - 2021', 'Q4 - 2021'],
    datasets: [{
      data: [200000, 400000, 300000, 400000],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.1)',
      borderColor: [
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 2,
      pointBackgroundColor: 'rgba(54, 162, 235, 1)'
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    }
  }
});

const utilizationRateContext = document.getElementById('utilizationRateCanvas').getContext('2d');
const utilizationRateChart = new Chart(utilizationRateContext, {
  type: 'bar',
  data: {
    labels: ['March', 'April', 'May'],
    datasets: [{
      label: 'JH Total',
      backgroundColor: '#1774E5',
      data: [100, 90, 100],
      borderWidth: 0,
      maxBarThickness: 25
    },
    {
      label: 'AM Team',
      backgroundColor: '#900BF1',
      data: [70, 80, 60],
      borderWidth: 0,
      maxBarThickness: 25
    },
    {
      label: 'PM Team',
      backgroundColor: '#66C8FF',
      data: [100, 80, 100],
      borderWidth: 0,
      maxBarThickness: 25
    },
    {
      label: 'Web Team',
      backgroundColor: '#FE9313',
      data: [60, 60, 80],
      borderWidth: 0,
      maxBarThickness: 25
    }]
  },
  options: {
    maintainAspectRatio: false
  }
});
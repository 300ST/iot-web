const taskCtx = document.getElementById('taskProgressChart').getContext('2d');
const taskProgressChart = new Chart(taskCtx, {
    type: 'doughnut',
    data: {
        labels: ['Completed', 'Remaining'],
        datasets: [{
            data: [60, 40], // 60% completed, 40% remaining
            backgroundColor: ['#34a853', '#f28b82'], // Colors for the segments
            borderWidth: 0 // No border
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false // Hide legend if not needed
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%'; // Show percentage in tooltip
                    }
                }
            }
        }
    }
});


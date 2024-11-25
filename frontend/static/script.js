document.addEventListener('DOMContentLoaded', function() {
    // Fetch stock data from Flask route
    fetch('/get_stock_data')
        .then(response => response.json())
        .then(data => {
            const dates = data.dates;
            const prices = data.prices;

            // Create the chart using Chart.js
            const ctx = document.getElementById('nifty-chart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: dates,
                    datasets: [{
                        label: 'Nifty 50',
                        data: prices,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        fill: false
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Date'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Closing Price (INR)'
                            }
                        }
                    }
                }
            });
        });
});

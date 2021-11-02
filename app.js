
let myChart = document.getElementById('myChart').getContext('2d');
let massPopChart = new Chart(myChart, {
    type: 'bar',
    data: {
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets: [{
            label: 'Population',
            data: [
                617594,
                181045,
                153060,
                106519,
                105162,
                95072
            ],
            backgroundColor: [
                'red',
                'orange',
                'yellow',
                'green',
                'blue',
                'indigo',
                'violet'
            ]
        }],
        options: {}
    }
});
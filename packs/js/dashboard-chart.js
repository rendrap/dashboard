$(function() {
    'use strict'

    // Donut Chart
    var datapie = {
        labels: ['Search', 'Email', 'Referral', 'Social'],
        datasets: [{
            data: [25, 20, 30, 15],
            backgroundColor: ['#6f42c1', '#007bff', '#17a2b8', '#00cccc']
        }]
    };

    var optionpie = {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
            display: false,
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    };

    // For a doughnut chart
    var ctxpie = document.getElementById('chartDonut');
    var myPieChart = new Chart(ctxpie, {
        type: 'doughnut',
        data: datapie,
        options: optionpie
    });

});
const ctx = document.getElementById('barchart').getContext('2d');
const barchart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['İş Ortağı','Etkinlik','Ofis','Yeni Proje','Açık Arttırma','Anlaşmalı Şirket'],
        datasets: [{
            label: 'Votes',
            data: [7,9,3,5,2,3],
            backgroundColor: [
                'rgba(255, 204, 51, 0.2)',
                'rgba(255, 215, 0, 0.2)',
                'rgba(255,206,86,0.2)',
                'rgba(255, 219, 88, 0.2)',
                'rgba(255, 193, 37, 0.2)',
                'rgba(255,159,64,0.2)'
            ],
            borderColor: [
                'rgba(255, 204, 51, 1)',
                'rgba(255, 215, 0, 1)',
                'rgba(255,206,86,1)',
                'rgba(255, 219, 88, 1)',
                'rgba(255, 193, 37, 1)',
                'rgba(255,159,64,1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
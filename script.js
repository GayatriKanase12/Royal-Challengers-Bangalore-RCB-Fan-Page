// Player Filter
function filterPlayers(role){
  let cards = document.querySelectorAll('#playerList .card');
  cards.forEach(card => {
    card.style.display = (role === 'all' || card.classList.contains(role)) ? 'block' : 'none';
  });
}

// Voting Buttons
const voteButtons = document.querySelectorAll('.vote-btn');
voteButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    let count = parseInt(btn.textContent.replace('❤️ ',''));
    count++;
    btn.textContent = `❤️ ${count}`;
  });
});

// Chart.js Example
const ctx = document.getElementById('chart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['2023', '2024', '2025', '2026'],
    datasets: [{
      label: 'Wins',
      data: [10, 12, 14, 16],
      backgroundColor: '#a40000'
    },{
      label: 'Losses',
      data: [6, 4, 2, 0],
      backgroundColor: '#ffcc00'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {position:'top'},
      title: {display:true, text:'RCB Team Performance'}
    },
    scales: {y: {beginAtZero:true}}
  }
});

// Scroll Reveal for Cards
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });
cards.forEach(card => observer.observe(card));

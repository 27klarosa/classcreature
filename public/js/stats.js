let time_stats = { hunger: 100, happiness: 100, entertainment: 100, energy: 100, health: 100, vitality: 100, xp: 100 };
let train_stats = { intelligence: 0, athleticism: 0, discipline: 0, metabolism: 0 };
const timeStatsContainer = document.getElementById('time_stats_container');
const trainStatsContainer = document.getElementById('train_stats_container');
timeStatsContainer.textContent = JSON.stringify(time_stats);
trainStatsContainer.textContent = JSON.stringify(train_stats);


//mainloop, update in real time
const intervalId = setInterval(() => {
    timeStatsContainer.textContent = JSON.stringify(time_stats)
    trainStatsContainer.textContent = JSON.stringify(train_stats)
}, 200);


//reduce stats
function updateTimeStats() {
    Object.keys(time_stats).forEach((stat) => {
        //only the first four stats should be reduced over time
        if (['hunger', 'happiness', 'entertainment', 'energy'].includes(stat)) {
            time_stats[stat] = Math.max(0, time_stats[stat] - 1);
        }
    });
    timeStatsContainer.textContent = JSON.stringify(time_stats);
} setInterval(updateTimeStats, 2000); // Update every second

//add stats
document.getElementById('play').addEventListener('click', () => {
    // Should increase happiness and entertainment stats
    time_stats.happiness = Math.min(100, time_stats.happiness + 1);
    time_stats.entertainment = Math.min(100, time_stats.entertainment + 1);
    timeStatsContainer.textContent = JSON.stringify(time_stats);
});

document.getElementById('feed').addEventListener('click', () => {
    //
});

document.getElementById('train').addEventListener('click', () => {
    // Should increase train stats
});

document.addEventListener('DOMContentLoaded', () => {
    // Create stars
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    document.body.appendChild(starsContainer);

    // Create nebula effect
    const nebula = document.createElement('div');
    nebula.className = 'nebula';
    document.body.appendChild(nebula);

    // Generate random stars
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random size
        const size = Math.random() * 2;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random twinkle duration
        star.style.setProperty('--duration', `${2 + Math.random() * 3}s`);
        
        starsContainer.appendChild(star);
    }

    // Game state
    let points = 0;
    let pointsPerClick = 1;
    let autoClickerCount = 0;
    let multiplierCount = 0;
    let superClickerCount = 0;
    let megaClickerCount = 0;
    let ultimateClickerCount = 0;
    let timeWarpCount = 0;
    let infinityClickerCount = 0;
    let godClickerCount = 0;
    let divineClickerCount = 0;
    let cosmicClickerCount = 0;
    let omnipotentClickerCount = 0;
    let rebirthCount = 0;
    let eternalClickerCount = 0;
    let immortalClickerCount = 0;
    let ascendedClickerCount = 0;
    let autoClickerInterval;
    let pointsPerSecond = 0;
    let multiplier = 1;

    // DOM elements
    const button = document.getElementById('clickMe');
    const pointsDisplay = document.getElementById('points');
    const pointsPerClickDisplay = document.getElementById('pointsPerClick');
    const pointsPerSecondDisplay = document.getElementById('pointsPerSecond');
    const multiplierDisplay = document.getElementById('multiplierDisplay');
    const container = document.querySelector('.container');
    const autoClickerBtn = document.querySelector('#autoClicker .upgrade-btn');
    const multiplierBtn = document.querySelector('#multiplier .upgrade-btn');
    const superClickerBtn = document.querySelector('#superClicker .upgrade-btn');
    const megaClickerBtn = document.querySelector('#megaClicker .upgrade-btn');
    const ultimateClickerBtn = document.querySelector('#ultimateClicker .upgrade-btn');
    const timeWarpBtn = document.querySelector('#timeWarp .upgrade-btn');
    const infinityClickerBtn = document.querySelector('#infinityClicker .upgrade-btn');
    const godClickerBtn = document.querySelector('#godClicker .upgrade-btn');
    const rebirthCountDisplay = document.getElementById('rebirthCount');
    const rebirthButton = document.getElementById('rebirthButton');

    // Save game state
    function saveGame() {
        const gameState = {
            points,
            pointsPerClick,
            autoClickerCount,
            multiplierCount,
            superClickerCount,
            megaClickerCount,
            ultimateClickerCount,
            timeWarpCount,
            infinityClickerCount,
            godClickerCount,
            divineClickerCount,
            cosmicClickerCount,
            omnipotentClickerCount,
            rebirthCount,
            eternalClickerCount,
            immortalClickerCount,
            ascendedClickerCount
        };
        localStorage.setItem('clickerGame', JSON.stringify(gameState));
    }

    // Load game state
    function loadGame() {
        const savedGame = localStorage.getItem('clickerGame');
        if (savedGame) {
            const gameState = JSON.parse(savedGame);
            points = gameState.points || 0;
            pointsPerClick = gameState.pointsPerClick || 1;
            autoClickerCount = gameState.autoClickerCount || 0;
            multiplierCount = gameState.multiplierCount || 0;
            superClickerCount = gameState.superClickerCount || 0;
            megaClickerCount = gameState.megaClickerCount || 0;
            ultimateClickerCount = gameState.ultimateClickerCount || 0;
            timeWarpCount = gameState.timeWarpCount || 0;
            infinityClickerCount = gameState.infinityClickerCount || 0;
            godClickerCount = gameState.godClickerCount || 0;
            divineClickerCount = gameState.divineClickerCount || 0;
            cosmicClickerCount = gameState.cosmicClickerCount || 0;
            omnipotentClickerCount = gameState.omnipotentClickerCount || 0;
            rebirthCount = gameState.rebirthCount || 0;
            eternalClickerCount = gameState.eternalClickerCount || 0;
            immortalClickerCount = gameState.immortalClickerCount || 0;
            ascendedClickerCount = gameState.ascendedClickerCount || 0;
        }
    }

    // Update displays
    function updateDisplays() {
        pointsDisplay.textContent = Math.floor(points);
        pointsPerClickDisplay.textContent = Math.floor(pointsPerClick);
        multiplierDisplay.textContent = Math.floor(1 + multiplierCount * 0.5);
        rebirthCountDisplay.textContent = rebirthCount;
        
        // Update points per second display
        const basePointsPerSecond = autoClickerCount * (1 + multiplierCount * 0.5);
        const timeWarpBonus = timeWarpCount * 0.5;
        const infinityBonus = infinityClickerCount * 2;
        const godBonus = godClickerCount * 5;
        const divineBonus = divineClickerCount * 10;
        const cosmicBonus = cosmicClickerCount * 25;
        const omnipotentBonus = omnipotentClickerCount * 50;
        const eternalBonus = eternalClickerCount * 100;
        const immortalBonus = immortalClickerCount * 250;
        const ascendedBonus = ascendedClickerCount * 500;
        
        const totalPointsPerSecond = (basePointsPerSecond + timeWarpBonus + infinityBonus + godBonus + 
            divineBonus + cosmicBonus + omnipotentBonus + eternalBonus + immortalBonus + ascendedBonus) * 
            (1 + rebirthCount * 0.1);
        
        pointsPerSecondDisplay.textContent = Math.floor(totalPointsPerSecond);
        
        // Update upgrade counts
        document.getElementById('autoClickerCount').textContent = autoClickerCount;
        document.getElementById('multiplierCount').textContent = multiplierCount;
        document.getElementById('superClickerCount').textContent = superClickerCount;
        document.getElementById('megaClickerCount').textContent = megaClickerCount;
        document.getElementById('ultimateClickerCount').textContent = ultimateClickerCount;
        document.getElementById('timeWarpCount').textContent = timeWarpCount;
        document.getElementById('infinityClickerCount').textContent = infinityClickerCount;
        document.getElementById('godClickerCount').textContent = godClickerCount;
        document.getElementById('divineClickerCount').textContent = divineClickerCount;
        document.getElementById('cosmicClickerCount').textContent = cosmicClickerCount;
        document.getElementById('omnipotentClickerCount').textContent = omnipotentClickerCount;
        document.getElementById('eternalClickerCount').textContent = eternalClickerCount;
        document.getElementById('immortalClickerCount').textContent = immortalClickerCount;
        document.getElementById('ascendedClickerCount').textContent = ascendedClickerCount;
        
        // Update upgrade buttons
        autoClickerBtn.disabled = points < 10;
        multiplierBtn.disabled = points < 50;
        superClickerBtn.disabled = points < 100;
        megaClickerBtn.disabled = points < 500;
        ultimateClickerBtn.disabled = points < 1000;
        timeWarpBtn.disabled = points < 5000;
        infinityClickerBtn.disabled = points < 10000;
        godClickerBtn.disabled = points < 50000;
        rebirthButton.disabled = points < 1000000;
    }

    // Update auto clicker
    function updateAutoClicker() {
        if (autoClickerInterval) {
            clearInterval(autoClickerInterval);
        }
        
        if (autoClickerCount > 0) {
            const basePoints = pointsPerClick * autoClickerCount;
            const megaBonus = megaClickerCount * 5;
            const ultimateBonus = ultimateClickerCount * 10;
            const infinityBonus = infinityClickerCount * 100;
            const godBonus = godClickerCount * 1000;
            const divineBonus = divineClickerCount * 10000;
            const cosmicBonus = cosmicClickerCount * 50000;
            const omnipotentBonus = omnipotentClickerCount * 100000;
            const eternalBonus = eternalClickerCount * 1000000;
            const immortalBonus = immortalClickerCount * 5000000;
            const ascendedBonus = ascendedClickerCount * 10000000;
            pointsPerSecond = (basePoints + megaBonus + ultimateBonus + infinityBonus + godBonus + 
                divineBonus + cosmicBonus + omnipotentBonus + eternalBonus + immortalBonus + ascendedBonus) * multiplier;
            
            autoClickerInterval = setInterval(() => {
                points += pointsPerSecond;
                updateDisplays();
                saveGame();
            }, 1000 / (1 + timeWarpCount * 0.5)); // Time Warp speeds up auto clicking
        }
    }

    // Click handler
    button.addEventListener('click', () => {
        points += pointsPerClick * (1 + multiplierCount * 0.5) * (1 + rebirthCount * 0.1);
        updateDisplays();
        saveGame();
        
        // Visual feedback
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);
    });

    // Auto Clicker upgrade
    autoClickerBtn.addEventListener('click', () => {
        if (points >= 10) {
            points -= 10;
            autoClickerCount++;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // Multiplier upgrade
    multiplierBtn.addEventListener('click', () => {
        if (points >= 50) {
            points -= 50;
            multiplierCount++;
            multiplier *= 2;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // Super Clicker upgrade
    superClickerBtn.addEventListener('click', () => {
        if (points >= 100) {
            points -= 100;
            superClickerCount++;
            pointsPerClick *= 2;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // Mega Clicker upgrade
    megaClickerBtn.addEventListener('click', () => {
        if (points >= 500) {
            points -= 500;
            megaClickerCount++;
            pointsPerClick *= 2;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // Ultimate Clicker upgrade
    ultimateClickerBtn.addEventListener('click', () => {
        if (points >= 1000) {
            points -= 1000;
            ultimateClickerCount++;
            pointsPerClick *= 2;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // Time Warp upgrade
    timeWarpBtn.addEventListener('click', () => {
        if (points >= 5000) {
            points -= 5000;
            timeWarpCount++;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // Infinity Clicker upgrade
    infinityClickerBtn.addEventListener('click', () => {
        if (points >= 10000) {
            points -= 10000;
            infinityClickerCount++;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // God Clicker upgrade
    godClickerBtn.addEventListener('click', () => {
        if (points >= 50000) {
            points -= 50000;
            godClickerCount++;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // Divine Clicker upgrade
    document.getElementById('divineClicker').addEventListener('click', () => {
        if (points >= 100000) {
            points -= 100000;
            divineClickerCount++;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // Cosmic Clicker upgrade
    document.getElementById('cosmicClicker').addEventListener('click', () => {
        if (points >= 500000) {
            points -= 500000;
            cosmicClickerCount++;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // Omnipotent Clicker upgrade
    document.getElementById('omnipotentClicker').addEventListener('click', () => {
        if (points >= 1000000) {
            points -= 1000000;
            omnipotentClickerCount++;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // Rebirth system
    rebirthButton.addEventListener('click', () => {
        if (points >= 1000000) {
            rebirthCount++;
            points = 0;
            pointsPerClick = 1;
            autoClickerCount = 0;
            multiplierCount = 0;
            superClickerCount = 0;
            megaClickerCount = 0;
            ultimateClickerCount = 0;
            timeWarpCount = 0;
            infinityClickerCount = 0;
            godClickerCount = 0;
            divineClickerCount = 0;
            cosmicClickerCount = 0;
            omnipotentClickerCount = 0;
            updateDisplays();
            saveGame();
        }
    });

    // Rebirth upgrades
    document.getElementById('eternalClicker').addEventListener('click', () => {
        if (rebirthCount >= 1) {
            rebirthCount--;
            eternalClickerCount++;
            updateDisplays();
            saveGame();
        }
    });

    document.getElementById('immortalClicker').addEventListener('click', () => {
        if (rebirthCount >= 5) {
            rebirthCount -= 5;
            immortalClickerCount++;
            updateDisplays();
            saveGame();
        }
    });

    document.getElementById('ascendedClicker').addEventListener('click', () => {
        if (rebirthCount >= 10) {
            rebirthCount -= 10;
            ascendedClickerCount++;
            updateDisplays();
            saveGame();
        }
    });

    // Load saved game
    loadGame();
    
    // Initial display update and auto clicker setup
    updateDisplays();
    updateAutoClicker();

    // Add hover effect to container
    container.addEventListener('mouseenter', () => {
        container.style.transform = 'translateY(-5px)';
    });

    container.addEventListener('mouseleave', () => {
        container.style.transform = 'translateY(0)';
    });
}); 
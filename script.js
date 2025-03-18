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
    let galaxyClickerCount = 0;
    let universalClickerCount = 0;
    let dimensionalClickerCount = 0;
    let quantumClickerCount = 0;
    let realityClickerCount = 0;
    let infinityPlusClickerCount = 0;
    let rebirthCount = 0;
    let eternalClickerCount = 0;
    let immortalClickerCount = 0;
    let ascendedClickerCount = 0;
    let prestigeLevel = 0;
    let transcendentClickerCount = 0;
    let enlightenedClickerCount = 0;
    let nirvanaClickerCount = 0;
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
            galaxyClickerCount,
            universalClickerCount,
            dimensionalClickerCount,
            quantumClickerCount,
            realityClickerCount,
            infinityPlusClickerCount,
            rebirthCount,
            eternalClickerCount,
            immortalClickerCount,
            ascendedClickerCount,
            prestigeLevel,
            transcendentClickerCount,
            enlightenedClickerCount,
            nirvanaClickerCount
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
            galaxyClickerCount = gameState.galaxyClickerCount || 0;
            universalClickerCount = gameState.universalClickerCount || 0;
            dimensionalClickerCount = gameState.dimensionalClickerCount || 0;
            quantumClickerCount = gameState.quantumClickerCount || 0;
            realityClickerCount = gameState.realityClickerCount || 0;
            infinityPlusClickerCount = gameState.infinityPlusClickerCount || 0;
            rebirthCount = gameState.rebirthCount || 0;
            eternalClickerCount = gameState.eternalClickerCount || 0;
            immortalClickerCount = gameState.immortalClickerCount || 0;
            ascendedClickerCount = gameState.ascendedClickerCount || 0;
            prestigeLevel = gameState.prestigeLevel || 0;
            transcendentClickerCount = gameState.transcendentClickerCount || 0;
            enlightenedClickerCount = gameState.enlightenedClickerCount || 0;
            nirvanaClickerCount = gameState.nirvanaClickerCount || 0;
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
        const galaxyBonus = galaxyClickerCount * 100;
        const universalBonus = universalClickerCount * 250;
        const dimensionalBonus = dimensionalClickerCount * 500;
        const quantumBonus = quantumClickerCount * 1000;
        const realityBonus = realityClickerCount * 2500;
        const infinityPlusBonus = infinityPlusClickerCount * 5000;
        const eternalBonus = eternalClickerCount * 10000;
        const immortalBonus = immortalClickerCount * 25000;
        const ascendedBonus = ascendedClickerCount * 50000;
        
        const totalPointsPerSecond = (basePointsPerSecond + timeWarpBonus + infinityBonus + godBonus + 
            divineBonus + cosmicBonus + omnipotentBonus + galaxyBonus + universalBonus + dimensionalBonus +
            quantumBonus + realityBonus + infinityPlusBonus + eternalBonus + immortalBonus + ascendedBonus) * 
            (1 + rebirthCount * 0.2);
        
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
        document.getElementById('galaxyClickerCount').textContent = galaxyClickerCount;
        document.getElementById('universalClickerCount').textContent = universalClickerCount;
        document.getElementById('dimensionalClickerCount').textContent = dimensionalClickerCount;
        document.getElementById('quantumClickerCount').textContent = quantumClickerCount;
        document.getElementById('realityClickerCount').textContent = realityClickerCount;
        document.getElementById('infinityPlusClickerCount').textContent = infinityPlusClickerCount;
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
        rebirthButton.disabled = points < 1000000000;
        
        document.getElementById('prestigeLevel').textContent = prestigeLevel;
        document.getElementById('prestigeMultiplier').textContent = (1 + prestigeLevel * 0.5).toFixed(1);
        document.getElementById('transcendentClickerCount').textContent = transcendentClickerCount;
        document.getElementById('enlightenedClickerCount').textContent = enlightenedClickerCount;
        document.getElementById('nirvanaClickerCount').textContent = nirvanaClickerCount;
        
        // Update prestige button
        document.getElementById('prestigeBtn').disabled = rebirthCount < 100;
        
        // Update prestige upgrade buttons
        document.querySelector('#transcendentClicker .upgrade-btn').disabled = prestigeLevel < 1;
        document.querySelector('#enlightenedClicker .upgrade-btn').disabled = prestigeLevel < 3;
        document.querySelector('#nirvanaClicker .upgrade-btn').disabled = prestigeLevel < 5;
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
            const galaxyBonus = galaxyClickerCount * 250000;
            const universalBonus = universalClickerCount * 500000;
            const dimensionalBonus = dimensionalClickerCount * 1000000;
            const quantumBonus = quantumClickerCount * 2500000;
            const realityBonus = realityClickerCount * 5000000;
            const infinityPlusBonus = infinityPlusClickerCount * 10000000;
            const eternalBonus = eternalClickerCount * 100000000;
            const immortalBonus = immortalClickerCount * 250000000;
            const ascendedBonus = ascendedClickerCount * 500000000;
            const transcendentBonus = transcendentClickerCount * 1000000000;
            const enlightenedBonus = enlightenedClickerCount * 2500000000;
            const nirvanaBonus = nirvanaClickerCount * 5000000000;
            
            pointsPerSecond = (basePoints + megaBonus + ultimateBonus + infinityBonus + godBonus + 
                divineBonus + cosmicBonus + omnipotentBonus + galaxyBonus + universalBonus + dimensionalBonus +
                quantumBonus + realityBonus + infinityPlusBonus + eternalBonus + immortalBonus + ascendedBonus +
                transcendentBonus + enlightenedBonus + nirvanaBonus) * 
                multiplier * (1 + rebirthCount * 0.2) * (1 + prestigeLevel * 0.5);
            
            autoClickerInterval = setInterval(() => {
                points += pointsPerSecond;
                updateDisplays();
                saveGame();
            }, 1000 / (1 + timeWarpCount * 0.5));
        }
    }

    // Click handler
    button.addEventListener('click', () => {
        points += pointsPerClick * (1 + multiplierCount * 0.5) * (1 + rebirthCount * 0.2);
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
    document.querySelector('#divineClicker .upgrade-btn').addEventListener('click', () => {
        if (points >= 100000) {
            points -= 100000;
            divineClickerCount++;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // Cosmic Clicker upgrade
    document.querySelector('#cosmicClicker .upgrade-btn').addEventListener('click', () => {
        if (points >= 500000) {
            points -= 500000;
            cosmicClickerCount++;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // Omnipotent Clicker upgrade
    document.querySelector('#omnipotentClicker .upgrade-btn').addEventListener('click', () => {
        if (points >= 1000000) {
            points -= 1000000;
            omnipotentClickerCount++;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // Galaxy Clicker upgrade
    document.querySelector('#galaxyClicker .upgrade-btn').addEventListener('click', () => {
        if (points >= 2500000) {
            points -= 2500000;
            galaxyClickerCount++;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // Universal Clicker upgrade
    document.querySelector('#universalClicker .upgrade-btn').addEventListener('click', () => {
        if (points >= 5000000) {
            points -= 5000000;
            universalClickerCount++;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // Dimensional Clicker upgrade
    document.querySelector('#dimensionalClicker .upgrade-btn').addEventListener('click', () => {
        if (points >= 10000000) {
            points -= 10000000;
            dimensionalClickerCount++;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // Quantum Clicker upgrade
    document.querySelector('#quantumClicker .upgrade-btn').addEventListener('click', () => {
        if (points >= 25000000) {
            points -= 25000000;
            quantumClickerCount++;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // Reality Clicker upgrade
    document.querySelector('#realityClicker .upgrade-btn').addEventListener('click', () => {
        if (points >= 50000000) {
            points -= 50000000;
            realityClickerCount++;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // Infinity Plus Clicker upgrade
    document.querySelector('#infinityPlusClicker .upgrade-btn').addEventListener('click', () => {
        if (points >= 100000000) {
            points -= 100000000;
            infinityPlusClickerCount++;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // Rebirth system
    rebirthButton.addEventListener('click', () => {
        if (points >= 1000000000) {
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
            galaxyClickerCount = 0;
            universalClickerCount = 0;
            dimensionalClickerCount = 0;
            quantumClickerCount = 0;
            realityClickerCount = 0;
            infinityPlusClickerCount = 0;
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

    // Prestige system
    document.getElementById('prestigeBtn').addEventListener('click', () => {
        if (rebirthCount >= 100) {
            prestigeLevel++;
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
            galaxyClickerCount = 0;
            universalClickerCount = 0;
            dimensionalClickerCount = 0;
            quantumClickerCount = 0;
            realityClickerCount = 0;
            infinityPlusClickerCount = 0;
            rebirthCount = 0;
            eternalClickerCount = 0;
            immortalClickerCount = 0;
            ascendedClickerCount = 0;
            updateDisplays();
            saveGame();
        }
    });

    // Prestige upgrades
    document.querySelector('#transcendentClicker .upgrade-btn').addEventListener('click', () => {
        if (prestigeLevel >= 1) {
            prestigeLevel--;
            transcendentClickerCount++;
            updateDisplays();
            saveGame();
        }
    });

    document.querySelector('#enlightenedClicker .upgrade-btn').addEventListener('click', () => {
        if (prestigeLevel >= 3) {
            prestigeLevel -= 3;
            enlightenedClickerCount++;
            updateDisplays();
            saveGame();
        }
    });

    document.querySelector('#nirvanaClicker .upgrade-btn').addEventListener('click', () => {
        if (prestigeLevel >= 5) {
            prestigeLevel -= 5;
            nirvanaClickerCount++;
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
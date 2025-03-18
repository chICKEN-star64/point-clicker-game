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
        try {
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
            
            // Try to save to localStorage
            localStorage.setItem('clickerGame', JSON.stringify(gameState));
            
            // Also save to sessionStorage as backup
            sessionStorage.setItem('clickerGame', JSON.stringify(gameState));
            
            // Save to a cookie as another backup
            document.cookie = `clickerGame=${JSON.stringify(gameState)};max-age=31536000;path=/`;
        } catch (error) {
            console.error('Failed to save game:', error);
            // Show error message to user
            showNotification('Failed to save game. Please check your browser settings.', 'error');
        }
    }

    // Load game state
    function loadGame() {
        try {
            // Try to load from localStorage first
            let savedGame = localStorage.getItem('clickerGame');
            
            // If not found in localStorage, try sessionStorage
            if (!savedGame) {
                savedGame = sessionStorage.getItem('clickerGame');
            }
            
            // If still not found, try to get from cookie
            if (!savedGame) {
                const cookies = document.cookie.split(';');
                const gameCookie = cookies.find(cookie => cookie.trim().startsWith('clickerGame='));
                if (gameCookie) {
                    savedGame = gameCookie.split('=')[1];
                }
            }
            
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
                
                showNotification('Game loaded successfully!', 'success');
            }
        } catch (error) {
            console.error('Failed to load game:', error);
            showNotification('Failed to load game. Starting fresh.', 'error');
        }
    }

    // Add notification system
    function showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // Add auto-save interval
    setInterval(saveGame, 30000); // Save every 30 seconds

    // Add save on page unload
    window.addEventListener('beforeunload', saveGame);

    // Update displays
    function updateDisplays() {
        pointsDisplay.textContent = Math.floor(points);
        pointsPerClickDisplay.textContent = Math.floor(pointsPerClick);
        multiplierDisplay.textContent = Math.floor(1 + multiplierCount * 0.3);
        rebirthCountDisplay.textContent = rebirthCount;
        
        // Update points per second display
        const basePointsPerSecond = autoClickerCount * (1 + multiplierCount * 0.3);
        const timeWarpBonus = timeWarpCount * 0.3;
        const infinityBonus = infinityClickerCount * 1.5;
        const godBonus = godClickerCount * 3;
        const divineBonus = divineClickerCount * 6;
        const cosmicBonus = cosmicClickerCount * 15;
        const omnipotentBonus = omnipotentClickerCount * 30;
        const galaxyBonus = galaxyClickerCount * 60;
        const universalBonus = universalClickerCount * 150;
        const dimensionalBonus = dimensionalClickerCount * 300;
        const quantumBonus = quantumClickerCount * 600;
        const realityBonus = realityClickerCount * 1500;
        const infinityPlusBonus = infinityPlusClickerCount * 3000;
        const eternalBonus = eternalClickerCount * 6000;
        const immortalBonus = immortalClickerCount * 15000;
        const ascendedBonus = ascendedClickerCount * 30000;
        
        const totalPointsPerSecond = (basePointsPerSecond + timeWarpBonus + infinityBonus + godBonus + 
            divineBonus + cosmicBonus + omnipotentBonus + galaxyBonus + universalBonus + dimensionalBonus +
            quantumBonus + realityBonus + infinityPlusBonus + eternalBonus + immortalBonus + ascendedBonus) * 
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
        autoClickerBtn.disabled = points < 15;
        multiplierBtn.disabled = points < 75;
        superClickerBtn.disabled = points < 150;
        megaClickerBtn.disabled = points < 750;
        ultimateClickerBtn.disabled = points < 1500;
        timeWarpBtn.disabled = points < 7500;
        infinityClickerBtn.disabled = points < 15000;
        godClickerBtn.disabled = points < 75000;
        rebirthButton.disabled = points < 1000000000;
        
        document.getElementById('prestigeLevel').textContent = prestigeLevel;
        document.getElementById('prestigeMultiplier').textContent = (1 + prestigeLevel * 0.3).toFixed(1);
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
            const megaBonus = megaClickerCount * 3;
            const ultimateBonus = ultimateClickerCount * 6;
            const infinityBonus = infinityClickerCount * 60;
            const godBonus = godClickerCount * 600;
            const divineBonus = divineClickerCount * 6000;
            const cosmicBonus = cosmicClickerCount * 30000;
            const omnipotentBonus = omnipotentClickerCount * 60000;
            const galaxyBonus = galaxyClickerCount * 150000;
            const universalBonus = universalClickerCount * 300000;
            const dimensionalBonus = dimensionalClickerCount * 600000;
            const quantumBonus = quantumClickerCount * 1500000;
            const realityBonus = realityClickerCount * 3000000;
            const infinityPlusBonus = infinityPlusClickerCount * 6000000;
            const eternalBonus = eternalClickerCount * 60000000;
            const immortalBonus = immortalClickerCount * 150000000;
            const ascendedBonus = ascendedClickerCount * 300000000;
            const transcendentBonus = transcendentClickerCount * 600000000;
            const enlightenedBonus = enlightenedClickerCount * 1500000000;
            const nirvanaBonus = nirvanaClickerCount * 3000000000;
            
            pointsPerSecond = (basePoints + megaBonus + ultimateBonus + infinityBonus + godBonus + 
                divineBonus + cosmicBonus + omnipotentBonus + galaxyBonus + universalBonus + dimensionalBonus +
                quantumBonus + realityBonus + infinityPlusBonus + eternalBonus + immortalBonus + ascendedBonus +
                transcendentBonus + enlightenedBonus + nirvanaBonus) * 
                multiplier * (1 + rebirthCount * 0.1) * (1 + prestigeLevel * 0.3);
            
            autoClickerInterval = setInterval(() => {
                points += pointsPerSecond;
                updateDisplays();
                saveGame();
            }, 1000 / (1 + timeWarpCount * 0.3));
        }
    }

    // Click handler
    button.addEventListener('click', () => {
        points += pointsPerClick * (1 + multiplierCount * 0.3) * (1 + rebirthCount * 0.1);
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
        if (points >= 15) {
            points -= 15;
            autoClickerCount++;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // Multiplier upgrade
    multiplierBtn.addEventListener('click', () => {
        if (points >= 75) {
            points -= 75;
            multiplierCount++;
            multiplier *= 1.5;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // Super Clicker upgrade
    superClickerBtn.addEventListener('click', () => {
        if (points >= 150) {
            points -= 150;
            superClickerCount++;
            pointsPerClick *= 1.5;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // Mega Clicker upgrade
    megaClickerBtn.addEventListener('click', () => {
        if (points >= 750) {
            points -= 750;
            megaClickerCount++;
            pointsPerClick *= 1.5;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // Ultimate Clicker upgrade
    ultimateClickerBtn.addEventListener('click', () => {
        if (points >= 1500) {
            points -= 1500;
            ultimateClickerCount++;
            pointsPerClick *= 1.5;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // Time Warp upgrade
    timeWarpBtn.addEventListener('click', () => {
        if (points >= 7500) {
            points -= 7500;
            timeWarpCount++;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // Infinity Clicker upgrade
    infinityClickerBtn.addEventListener('click', () => {
        if (points >= 15000) {
            points -= 15000;
            infinityClickerCount++;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // God Clicker upgrade
    godClickerBtn.addEventListener('click', () => {
        if (points >= 75000) {
            points -= 75000;
            godClickerCount++;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // Divine Clicker upgrade
    document.querySelector('#divineClicker .upgrade-btn').addEventListener('click', () => {
        if (points >= 150000) {
            points -= 150000;
            divineClickerCount++;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // Cosmic Clicker upgrade
    document.querySelector('#cosmicClicker .upgrade-btn').addEventListener('click', () => {
        if (points >= 750000) {
            points -= 750000;
            cosmicClickerCount++;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // Omnipotent Clicker upgrade
    document.querySelector('#omnipotentClicker .upgrade-btn').addEventListener('click', () => {
        if (points >= 1500000) {
            points -= 1500000;
            omnipotentClickerCount++;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // Galaxy Clicker upgrade
    document.querySelector('#galaxyClicker .upgrade-btn').addEventListener('click', () => {
        if (points >= 3750000) {
            points -= 3750000;
            galaxyClickerCount++;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // Universal Clicker upgrade
    document.querySelector('#universalClicker .upgrade-btn').addEventListener('click', () => {
        if (points >= 7500000) {
            points -= 7500000;
            universalClickerCount++;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // Dimensional Clicker upgrade
    document.querySelector('#dimensionalClicker .upgrade-btn').addEventListener('click', () => {
        if (points >= 15000000) {
            points -= 15000000;
            dimensionalClickerCount++;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // Quantum Clicker upgrade
    document.querySelector('#quantumClicker .upgrade-btn').addEventListener('click', () => {
        if (points >= 37500000) {
            points -= 37500000;
            quantumClickerCount++;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // Reality Clicker upgrade
    document.querySelector('#realityClicker .upgrade-btn').addEventListener('click', () => {
        if (points >= 75000000) {
            points -= 75000000;
            realityClickerCount++;
            updateAutoClicker();
            updateDisplays();
            saveGame();
        }
    });

    // Infinity Plus Clicker upgrade
    document.querySelector('#infinityPlusClicker .upgrade-btn').addEventListener('click', () => {
        if (points >= 150000000) {
            points -= 150000000;
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
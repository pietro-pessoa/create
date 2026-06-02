// Unit Tests Framework and Cases
let passed = 0;
let failed = 0;

function assert(condition, message) {
    const resultsDiv = document.getElementById('results');
    const p = document.createElement('div');
    if (condition) {
        p.className = 'test-pass';
        p.innerText = '✅ PASS: ' + message;
        passed++;
    } else {
        p.className = 'test-fail';
        p.innerText = '❌ FAIL: ' + message;
        failed++;
        console.error('Test failed:', message);
    }
    resultsDiv.appendChild(p);
}

function runTests() {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    passed = 0;
    failed = 0;

    console.log("Starting tests...");

    // Setup Dummy Environment
    window.gameState.objects = {
        'player_1': { 
            id: 'player_1', x: 100, y: 100, size: 100, visible: true, life: 100, 
            vy: 0, jumpPower: -12, isGrounded: true, hasGravity: true, 
            sprite: { name: 'Mascot' } 
        },
        'flag_1': { 
            id: 'flag_1', x: 120, y: 100, size: 100, visible: true, 
            sprite: { name: 'Bandeira' } 
        },
        'enemy_1': { 
            id: 'enemy_1', x: 500, y: 500, size: 100, visible: true, 
            sprite: { name: 'Enemy' } 
        }
    };
    window.gameState.scenario = 'GRASSLAND';
    window.gameState.isRunning = true;

    // --- TEST SUITE ---

    // 1. Jump Logic
    window.GameAPI.jump('player_1');
    assert(window.gameState.objects['player_1'].vy === -12, 'GameAPI.jump: Deve aplicar a força de pulo (vy = -12) quando o jogador está no chão (isGrounded).');
    assert(window.gameState.objects['player_1'].isGrounded === false, 'GameAPI.jump: Deve alterar isGrounded para false ao pular.');

    // 2. Movement Logic
    window.GameAPI.changeX('player_1', 50);
    assert(window.gameState.objects['player_1'].x === 150, 'GameAPI.changeX: Deve somar o valor à posição X (100 + 50 = 150).');
    
    window.GameAPI.goTo('player_1', 200, 200);
    assert(window.gameState.objects['player_1'].x === 200 && window.gameState.objects['player_1'].y === 200, 'GameAPI.goTo: Deve definir a posição exata de X e Y (200, 200).');

    // Restore positions for collision tests
    window.gameState.objects['player_1'].x = 100;
    window.gameState.objects['player_1'].y = 100;

    // 3. Life System
    window.GameAPI.changeLife('player_1', -20);
    assert(window.gameState.objects['player_1'].life === 80, 'GameAPI.changeLife: Deve reduzir a vida em 20 (100 -> 80).');
    
    window.GameAPI.setLife('player_1', 10);
    assert(window.gameState.objects['player_1'].life === 10, 'GameAPI.setLife: Deve forçar a vida a um valor específico (10).');

    // 4. Phase Switch
    window.GameAPI.switchPhase('2');
    assert(window.gameState.scenario === 'CITY', 'GameAPI.switchPhase: O argumento "2" deve alterar o gameState.scenario para "CITY".');

    // 5. Collision Logic (AABB)
    let touchesFlag = window.GameAPI.isTouching('player_1', 'Bandeira');
    assert(touchesFlag === true, 'GameAPI.isTouching (Exato): Deve retornar true quando os objetos estão encostados (100,100 vs 120,100).');
    
    let touchesEnemy = window.GameAPI.isTouching('player_1', 'Enemy');
    assert(touchesEnemy === false, 'GameAPI.isTouching (Distante): Deve retornar false quando os objetos estão longe (100,100 vs 500,500).');

    // 6. Intelligent Collision Matching (Fuzzy/Spaces/Case)
    let touchesFlagFuzzy = window.GameAPI.isTouching('player_1', '   bAnDeiRa  ');
    assert(touchesFlagFuzzy === true, 'GameAPI.isTouching (Fuzzy): O radar de colisão deve ignorar espaços inúteis e detectar letras Maiúsculas/Minúsculas.');

    // 7. Single Object Fallback
    // Hide 'enemy_1' so that there is ONLY ONE other visible object (flag_1) for player_1 to collide with.
    window.gameState.objects['enemy_1'].visible = false;
    let fallbackTouch = window.GameAPI.isTouching('player_1', 'UmNomeMalucoQueNaoExiste');
    assert(fallbackTouch === true, 'GameAPI.isTouching (Fallback 1-Sprite): Se houver um erro de digitação absurdo, o radar inteligente deve deduzir a colisão se houver apenas um outro sprite na tela.');
    window.gameState.objects['enemy_1'].visible = true; // Restore

    // --- END OF TESTS ---

    // Render Summary
    const summary = document.createElement('div');
    summary.className = 'test-summary ' + (failed === 0 ? 'summary-pass' : 'summary-fail');
    summary.innerText = `🏁 FINALIZADO: ${passed} passaram, ${failed} falharam.`;
    resultsDiv.appendChild(summary);
}

// Start tests slightly delayed to ensure main.js is ready
setTimeout(() => {
    if (window.GameAPI && window.gameState) {
        runTests();
    } else {
        assert(false, 'FATAL: window.GameAPI ou window.gameState não foram encontrados! Certifique-se de que o main.js está os exportando corretamente.');
    }
}, 500);

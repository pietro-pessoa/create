// --- Localization Dictionary ---
const locales = {
    en: {
        appSubtitle: "Your offline block programming environment",
        newProject: "New Project",
        myProjects: "My Projects",
        btnPlay: "Play",
        btnStop: "Stop",
        btnPaint: "Paint",
        btnSave: "Save",
        paintTitle: "Draw Object / Scenario",
        saveDrawing: "Save Drawing",
        blockWhenPlay: "When Play clicked",
        blockAlways: "Forever",
        blockOnCollision: "When collision with %1",
        blockMoveSteps: "Move %1 steps",
        blockGoTo: "Go to X: %1 Y: %2",
        blockEnableJoystick: "Enable Joystick",
        blockShowJump: "Show Jump Button",
        blockSetLife: "Set Life to %1",
        blockChangeLife: "Change Life by %1",
        blockSetBarrier: "Make object a barrier",
        blockSwitchScenario: "Switch scenario to %1",
        blockShow: "Show",
        blockHide: "Hide",
        blockTouching: "Touching object named %1 ?",
        blockPosX: "X Position",
        blockPosY: "Y Position",
        optBarrier: "Barrier", optEdge: "Edge",
        catEvents: "Events", catMotion: "Motion", catGame: "Game", catLooks: "Looks", catLogic: "Logic", catSensing: "Sensing"
    },
    pt: {
        appSubtitle: "Seu ambiente de programação em blocos offline",
        newProject: "Novo Projeto",
        myProjects: "Meus Projetos",
        btnPlay: "Jogar",
        btnStop: "Parar",
        btnPaint: "Pintar",
        btnSave: "Salvar",
        paintTitle: "Desenhar Objeto / Cenário",
        saveDrawing: "Salvar Desenho",
        blockWhenPlay: "Quando clicar em Jogar",
        blockAlways: "Sempre",
        blockOnCollision: "Quando colidir com %1",
        blockMoveSteps: "Mover %1 passos",
        blockGoTo: "Ir para X: %1 Y: %2",
        blockEnableJoystick: "Ativar Joystick",
        blockShowJump: "Mostrar botão de Pulo",
        blockSetLife: "Definir Vida para %1",
        blockChangeLife: "Mudar Vida por %1",
        blockSetBarrier: "Tornar objeto uma barreira",
        blockSwitchScenario: "Mudar cenário para %1",
        blockShow: "Mostrar",
        blockHide: "Esconder",
        blockTouching: "Tocando no objeto %1 ?",
        blockPosX: "Posição X",
        blockPosY: "Posição Y",
        optBarrier: "Barreira", optEdge: "Borda",
        catEvents: "Eventos", catMotion: "Movimento", catGame: "Jogo", catLooks: "Aparência", catLogic: "Lógica", catSensing: "Sensores"
    },
    es: {
        appSubtitle: "Tu entorno de programación de bloques sin conexión",
        newProject: "Nuevo Proyecto",
        myProjects: "Mis Proyectos",
        btnPlay: "Jugar",
        btnStop: "Detener",
        btnPaint: "Pintar",
        btnSave: "Guardar",
        paintTitle: "Dibujar Objeto / Escenario",
        saveDrawing: "Guardar Dibujo",
        blockWhenPlay: "Al presionar Jugar",
        blockAlways: "Por siempre",
        blockOnCollision: "Al colisionar con %1",
        blockMoveSteps: "Mover %1 pasos",
        blockGoTo: "Ir a X: %1 Y: %2",
        blockEnableJoystick: "Activar Joystick",
        blockShowJump: "Mostrar botón de Salto",
        blockSetLife: "Establecer Vida a %1",
        blockChangeLife: "Cambiar Vida por %1",
        blockSetBarrier: "Hacer objeto una barrera",
        blockSwitchScenario: "Cambiar escenario a %1",
        blockShow: "Mostrar",
        blockHide: "Ocultar",
        blockTouching: "¿Tocando objeto %1 ?",
        blockPosX: "Posición X",
        blockPosY: "Posición Y",
        optBarrier: "Barrera", optEdge: "Borde",
        catEvents: "Eventos", catMotion: "Movimiento", catGame: "Juego", catLooks: "Apariencia", catLogic: "Lógica", catSensing: "Sensores"
    },
    ja: {
        appSubtitle: "オフラインのブロックプログラミング環境",
        newProject: "新しいプロジェクト",
        myProjects: "私のプロジェクト",
        btnPlay: "プレイ",
        btnStop: "ストップ",
        btnPaint: "ペイント",
        btnSave: "保存",
        paintTitle: "オブジェクト/背景を描く",
        saveDrawing: "描画を保存",
        blockWhenPlay: "プレイがクリックされた時",
        blockAlways: "ずっと",
        blockOnCollision: "%1に衝突した時",
        blockMoveSteps: "%1歩動かす",
        blockGoTo: "X: %1 Y: %2 に行く",
        blockEnableJoystick: "ジョイスティックを有効にする",
        blockShowJump: "ジャンプボタンを表示",
        blockSetLife: "ライフを%1にする",
        blockChangeLife: "ライフを%1変える",
        blockSetBarrier: "オブジェクトをバリアにする",
        blockSwitchScenario: "背景を%1にする",
        blockShow: "表示する",
        blockHide: "隠す",
        blockTouching: "オブジェクト %1 に触れた？",
        blockPosX: "X座標",
        blockPosY: "Y座標",
        optBarrier: "バリア", optEdge: "端",
        catEvents: "イベント", catMotion: "動き", catGame: "ゲーム", catLooks: "見た目", catLogic: "論理", catSensing: "調べる"
    }
};

let currentLang = localStorage.getItem('create_lang') || 'pt';

document.addEventListener('DOMContentLoaded', () => {
    // --- Localization Setup ---
    const langSelector = document.getElementById('lang-selector');
    langSelector.value = currentLang;
    
    function applyLanguage() {
        const lang = locales[currentLang];
        document.getElementById('app-subtitle').textContent = lang.appSubtitle;
        document.getElementById('btn-new-project').textContent = lang.newProject;
        document.getElementById('title-my-projects').textContent = lang.myProjects;
        document.getElementById('btn-play').textContent = lang.btnPlay;
        document.getElementById('btn-stop').textContent = lang.btnStop;
        document.getElementById('btn-paint').textContent = lang.btnPaint;
        document.getElementById('btn-save').textContent = lang.btnSave;
        document.getElementById('paint-title').textContent = lang.paintTitle;
        document.getElementById('save-paint-btn').textContent = lang.saveDrawing;
        document.getElementById('jump-btn').textContent = currentLang === 'ja' ? 'ジャンプ' : 'JUMP';

        if (workspace) {
            const data = Blockly.serialization.workspaces.save(workspace);
            workspace.dispose();
            workspace = null;
            defineBlocks();
            initBlockly();
            Blockly.serialization.workspaces.load(data, workspace);
        } else {
            defineBlocks();
        }
    }

    langSelector.addEventListener('change', (e) => {
        currentLang = e.target.value;
        localStorage.setItem('create_lang', currentLang);
        applyLanguage();
    });

    // --- Blockly Custom Blocks Definition ---
    function defineBlocks() {
        const t = locales[currentLang];
        Blockly.defineBlocksWithJsonArray([
            {
                "type": "event_when_play_clicked",
                "message0": t.blockWhenPlay,
                "nextStatement": null,
                "colour": 65
            },
            {
                "type": "event_always",
                "message0": t.blockAlways,
                "message1": "%1",
                "args1": [{"type": "input_statement", "name": "DO"}],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 65
            },
            {
                "type": "event_on_collision",
                "message0": t.blockOnCollision,
                "args0": [{ "type": "field_dropdown", "name": "OBJECT", "options": [[t.optBarrier, "BARRIER"], [t.optEdge, "EDGE"]] }],
                "nextStatement": null,
                "colour": 65
            },
            {
                "type": "motion_move_steps",
                "message0": t.blockMoveSteps,
                "args0": [{ "type": "input_value", "name": "STEPS", "check": "Number" }],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 230
            },
            {
                "type": "motion_go_to",
                "message0": t.blockGoTo,
                "args0": [
                    { "type": "input_value", "name": "X", "check": "Number" },
                    { "type": "input_value", "name": "Y", "check": "Number" }
                ],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 230
            },
            {
                "type": "motion_enable_joystick",
                "message0": t.blockEnableJoystick,
                "previousStatement": null,
                "nextStatement": null,
                "colour": 230
            },
            {
                "type": "motion_show_jump",
                "message0": t.blockShowJump,
                "previousStatement": null,
                "nextStatement": null,
                "colour": 230
            },
            {
                "type": "game_set_life",
                "message0": t.blockSetLife,
                "args0": [{ "type": "input_value", "name": "LIFE", "check": "Number" }],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 120
            },
            {
                "type": "game_change_life",
                "message0": t.blockChangeLife,
                "args0": [{ "type": "input_value", "name": "LIFE", "check": "Number" }],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 120
            },
            {
                "type": "game_set_barrier",
                "message0": t.blockSetBarrier,
                "previousStatement": null,
                "nextStatement": null,
                "colour": 120
            },
            {
                "type": "looks_switch_scenario",
                "message0": t.blockSwitchScenario,
                "args0": [{ "type": "field_dropdown", "name": "SCENARIO", "options": [
                    ["Grassland", "GRASSLAND"], ["City", "CITY"], ["Space", "SPACE"], ["Custom 1", "CUSTOM1"]
                ] }],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 290
            },
            {
                "type": "looks_show",
                "message0": t.blockShow,
                "previousStatement": null,
                "nextStatement": null,
                "colour": 290
            },
            {
                "type": "looks_hide",
                "message0": t.blockHide,
                "previousStatement": null,
                "nextStatement": null,
                "colour": 290
            },
            {
                "type": "sensing_touching",
                "message0": t.blockTouching,
                "args0": [{ "type": "input_value", "name": "OBJ_NAME", "check": "String" }],
                "output": "Boolean",
                "colour": 190
            },
            {
                "type": "sensing_pos_x",
                "message0": t.blockPosX,
                "output": "Number",
                "colour": 190
            },
            {
                "type": "sensing_pos_y",
                "message0": t.blockPosY,
                "output": "Number",
                "colour": 190
            }
        ]);
        
        document.getElementById('toolbox').innerHTML = `
            <category name="${t.catEvents}" colour="65">
                <block type="event_when_play_clicked"></block>
                <block type="event_always"></block>
                <block type="event_on_collision"></block>
            </category>
            <category name="${t.catMotion}" colour="230">
                <block type="motion_move_steps"><value name="STEPS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>
                <block type="motion_go_to">
                    <value name="X"><shadow type="math_number"><field name="NUM">240</field></shadow></value>
                    <value name="Y"><shadow type="math_number"><field name="NUM">180</field></shadow></value>
                </block>
                <block type="motion_enable_joystick"></block>
                <block type="motion_show_jump"></block>
            </category>
            <category name="${t.catGame}" colour="120">
                <block type="game_set_life"><value name="LIFE"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block>
                <block type="game_change_life"><value name="LIFE"><shadow type="math_number"><field name="NUM">-10</field></shadow></value></block>
                <block type="game_set_barrier"></block>
            </category>
            <category name="${t.catLooks}" colour="290">
                <block type="looks_switch_scenario"></block>
                <block type="looks_show"></block>
                <block type="looks_hide"></block>
            </category>
            <category name="${t.catSensing}" colour="190">
                <block type="sensing_touching"><value name="OBJ_NAME"><shadow type="text"><field name="TEXT">Enemy</field></shadow></value></block>
                <block type="sensing_pos_x"></block>
                <block type="sensing_pos_y"></block>
            </category>
            <category name="${t.catLogic}" colour="%{BKY_LOGIC_HUE}">
                <block type="controls_if"></block>
                <block type="logic_compare"></block>
            </category>
        `;
    }

    const jsGen = javascript.javascriptGenerator;
    jsGen.forBlock['event_when_play_clicked'] = () => '';
    jsGen.forBlock['event_always'] = (block, generator) => {
        const statements = generator.statementToCode(block, 'DO') || '';
        return `while (gameState.isRunning) {\n${statements}\nawait new Promise(r => setTimeout(r, 16));\n}\n`;
    };
    jsGen.forBlock['event_on_collision'] = (block, generator) => `GameAPI.onCollision(__objId, '${block.getFieldValue('OBJECT')}', async function() {\n${generator.statementToCode(block, 'DO') || ''}});\n`;
    
    jsGen.forBlock['motion_move_steps'] = (block, generator) => `await GameAPI.moveSteps(__objId, ${generator.valueToCode(block, 'STEPS', javascript.Order.ATOMIC) || '10'});\n`;
    jsGen.forBlock['motion_go_to'] = (block, generator) => `GameAPI.goTo(__objId, ${generator.valueToCode(block, 'X', javascript.Order.ATOMIC) || '0'}, ${generator.valueToCode(block, 'Y', javascript.Order.ATOMIC) || '0'});\n`;
    jsGen.forBlock['motion_enable_joystick'] = () => `GameAPI.enableJoystick(__objId);\n`;
    jsGen.forBlock['motion_show_jump'] = () => `GameAPI.showJump(__objId);\n`;
    
    jsGen.forBlock['game_set_life'] = (block, generator) => `GameAPI.setLife(__objId, ${generator.valueToCode(block, 'LIFE', javascript.Order.ATOMIC) || '100'});\n`;
    jsGen.forBlock['game_change_life'] = (block, generator) => `GameAPI.changeLife(__objId, ${generator.valueToCode(block, 'LIFE', javascript.Order.ATOMIC) || '-10'});\n`;
    jsGen.forBlock['game_set_barrier'] = () => `GameAPI.setBarrier(__objId);\n`;
    
    jsGen.forBlock['looks_switch_scenario'] = (block) => `GameAPI.switchScenario('${block.getFieldValue('SCENARIO')}');\n`;
    jsGen.forBlock['looks_show'] = () => `GameAPI.show(__objId);\n`;
    jsGen.forBlock['looks_hide'] = () => `GameAPI.hide(__objId);\n`;

    jsGen.forBlock['sensing_touching'] = (block, generator) => [`GameAPI.isTouching(__objId, ${generator.valueToCode(block, 'OBJ_NAME', javascript.Order.ATOMIC) || "''"})`, javascript.Order.FUNCTION_CALL];
    jsGen.forBlock['sensing_pos_x'] = () => [`GameAPI.getX(__objId)`, javascript.Order.FUNCTION_CALL];
    jsGen.forBlock['sensing_pos_y'] = () => [`GameAPI.getY(__objId)`, javascript.Order.FUNCTION_CALL];


    // --- DOM Elements ---
    const menuView = document.getElementById('menu-view');
    const editorView = document.getElementById('editor-view');
    const newProjectBtn = document.getElementById('new-project-btn');
    const backBtn = document.getElementById('back-btn');
    const saveBtn = document.getElementById('save-btn');
    const playBtn = document.getElementById('play-btn');
    const stopBtn = document.getElementById('stop-btn');
    const drawBtn = document.getElementById('draw-btn');
    const projectTitleInput = document.getElementById('project-title');
    const projectsList = document.getElementById('projects-list');
    const spritesList = document.getElementById('sprites-list');
    const addSpriteDrawBtn = document.getElementById('add-sprite-draw-btn');
    const uploadSpriteInput = document.getElementById('upload-sprite-input');
    
    // Properties Panel
    const propName = document.getElementById('prop-name');
    const propX = document.getElementById('prop-x');
    const propY = document.getElementById('prop-y');
    const propSize = document.getElementById('prop-size');
    const propDir = document.getElementById('prop-dir');

    const canvas = document.getElementById('stage-canvas');
    const ctx = canvas.getContext('2d');
    const joystickOverlay = document.getElementById('joystick-overlay');
    const joystickStick = document.querySelector('.joystick-stick');
    const jumpBtnOverlay = document.getElementById('jump-btn-overlay');
    const jumpBtn = document.getElementById('jump-btn');
    
    // --- State ---
    let workspace = null;
    let projects = JSON.parse(localStorage.getItem('create_projects')) || [];
    let customAssets = JSON.parse(localStorage.getItem('create_assets')) || {};
    
    let currentProject = null;
    let currentSpriteId = null;

    function createDefaultSprite(name, isMascot = false, src = null, templateObj = {}) {
        return {
            id: 'sprite_' + Date.now() + Math.floor(Math.random()*1000),
            name: name,
            type: isMascot ? 'mascot' : (src ? 'image' : 'custom'),
            src: src || (isMascot ? 'mascot.png' : null),
            x: templateObj.x !== undefined ? templateObj.x : 240, 
            y: templateObj.y !== undefined ? templateObj.y : 180, 
            size: templateObj.size !== undefined ? templateObj.size : 100, 
            direction: templateObj.direction !== undefined ? templateObj.direction : 90,
            codeData: templateObj.codeData || null
        };
    }

    // --- Paint Editor ---
    const paintModal = document.getElementById('paint-modal');
    const closePaintBtn = document.getElementById('close-paint-btn');
    const savePaintBtn = document.getElementById('save-paint-btn');
    const paintCanvas = document.getElementById('paint-canvas');
    const pCtx = paintCanvas.getContext('2d', { willReadFrequently: true });
    let isDrawing = false;
    let currentBrushColor = '#000000';
    let currentBrushSize = 5;
    let currentTool = 'brush'; // 'brush', 'eraser', 'bucket'
    let paintingForTarget = null;

    // Tool switching
    const toolBtns = document.querySelectorAll('.paint-tool-btn');
    toolBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            toolBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTool = btn.id.replace('tool-', '');
        });
    });

    document.getElementById('paint-color').addEventListener('input', e => currentBrushColor = e.target.value);
    document.getElementById('paint-size').addEventListener('input', e => currentBrushSize = e.target.value);
    document.getElementById('paint-clear-btn').addEventListener('click', () => pCtx.clearRect(0,0,paintCanvas.width, paintCanvas.height));

    function getMousePos(canvas, evt) {
        const rect = canvas.getBoundingClientRect();
        return {
            x: Math.floor((evt.clientX || (evt.touches && evt.touches[0].clientX)) - rect.left),
            y: Math.floor((evt.clientY || (evt.touches && evt.touches[0].clientY)) - rect.top)
        };
    }

    function hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16), a: 255 } : { r:0, g:0, b:0, a:255 };
    }

    function matchColor(data, pos, color, tolerance = 30) {
        const r = data[pos]; const g = data[pos+1]; const b = data[pos+2]; const a = data[pos+3];
        if (a === 0 && color.a === 0) return true; // Match transparent
        if (a === 0 || color.a === 0) return false;
        return Math.abs(r - color.r) <= tolerance && Math.abs(g - color.g) <= tolerance && Math.abs(b - color.b) <= tolerance;
    }

    function floodFill(startX, startY, fillColorHex) {
        const w = paintCanvas.width;
        const h = paintCanvas.height;
        const imgData = pCtx.getImageData(0, 0, w, h);
        const data = imgData.data;
        const targetPos = (startY * w + startX) * 4;
        
        const targetColor = {
            r: data[targetPos], g: data[targetPos+1], b: data[targetPos+2], a: data[targetPos+3]
        };
        const fillColor = hexToRgb(fillColorHex);

        if (matchColor(data, targetPos, fillColor, 0)) return; // Already same color

        const stack = [[startX, startY]];
        const tolerance = 60; // Tolerance for anti-aliasing edges

        while (stack.length) {
            let [x, y] = stack.pop();
            let pos = (y * w + x) * 4;
            
            while (y >= 0 && matchColor(data, pos, targetColor, tolerance)) { y--; pos -= w * 4; }
            pos += w * 4; y++;

            let reachLeft = false;
            let reachRight = false;
            
            while (y < h && matchColor(data, pos, targetColor, tolerance)) {
                data[pos] = fillColor.r; data[pos+1] = fillColor.g; data[pos+2] = fillColor.b; data[pos+3] = fillColor.a;

                if (x > 0) {
                    if (matchColor(data, pos - 4, targetColor, tolerance)) {
                        if (!reachLeft) { stack.push([x - 1, y]); reachLeft = true; }
                    } else if (reachLeft) { reachLeft = false; }
                }

                if (x < w - 1) {
                    if (matchColor(data, pos + 4, targetColor, tolerance)) {
                        if (!reachRight) { stack.push([x + 1, y]); reachRight = true; }
                    } else if (reachRight) { reachRight = false; }
                }

                y++; pos += w * 4;
            }
        }
        pCtx.putImageData(imgData, 0, 0);
    }

    const startDraw = (e) => { 
        if (e.type !== 'touchstart' || e.touches.length === 1) e.preventDefault();
        const pos = getMousePos(paintCanvas, e);
        if (currentTool === 'bucket') {
            floodFill(pos.x, pos.y, currentBrushColor);
        } else {
            isDrawing = true; 
            drawLine(e); 
        }
    };
    const endDraw = () => { isDrawing = false; pCtx.beginPath(); };
    const drawLine = (e) => {
        if (!isDrawing) return;
        e.preventDefault();
        const pos = getMousePos(paintCanvas, e);
        pCtx.lineWidth = currentBrushSize;
        pCtx.lineCap = 'round';
        
        if (currentTool === 'eraser') {
            pCtx.globalCompositeOperation = 'destination-out';
            pCtx.strokeStyle = 'rgba(0,0,0,1)'; 
        } else {
            pCtx.globalCompositeOperation = 'source-over';
            pCtx.strokeStyle = currentBrushColor;
        }

        pCtx.lineTo(pos.x, pos.y);
        pCtx.stroke();
        pCtx.beginPath();
        pCtx.moveTo(pos.x, pos.y);
    };

    paintCanvas.addEventListener('mousedown', startDraw);
    paintCanvas.addEventListener('mouseup', endDraw);
    paintCanvas.addEventListener('mousemove', drawLine);
    paintCanvas.addEventListener('touchstart', startDraw);
    paintCanvas.addEventListener('touchend', endDraw);
    paintCanvas.addEventListener('touchmove', drawLine, {passive: false});

    drawBtn.addEventListener('click', () => { 
        paintingForTarget = 'scenario';
        pCtx.clearRect(0,0,paintCanvas.width, paintCanvas.height);
        pCtx.globalCompositeOperation = 'source-over';
        paintModal.classList.add('active'); 
    });
    
    addSpriteDrawBtn.addEventListener('click', () => {
        paintingForTarget = 'sprite';
        pCtx.clearRect(0,0,paintCanvas.width, paintCanvas.height);
        pCtx.globalCompositeOperation = 'source-over';
        paintModal.classList.add('active');
    });

    closePaintBtn.addEventListener('click', () => { paintModal.classList.remove('active'); });
    
    savePaintBtn.addEventListener('click', () => {
        const dataUrl = paintCanvas.toDataURL('image/png');
        if (paintingForTarget === 'scenario') {
            customAssets['CUSTOM1'] = dataUrl;
            localStorage.setItem('create_assets', JSON.stringify(customAssets));
            if (customImages['CUSTOM1']) customImages['CUSTOM1'].src = dataUrl;
        } else if (paintingForTarget === 'sprite') {
            const newSprite = createDefaultSprite(`Sprite ${currentProject.sprites.length + 1}`, false, dataUrl);
            currentProject.sprites.push(newSprite);
            renderSprites();
            selectSprite(newSprite.id);
            stopGame(); 
        }
        paintModal.classList.remove('active');
        draw();
    });

    uploadSpriteInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
            const newSprite = createDefaultSprite(`Box`, false, event.target.result);
            currentProject.sprites.push(newSprite);
            renderSprites();
            selectSprite(newSprite.id);
            stopGame(); 
        };
        reader.readAsDataURL(file);
    });

    const customImages = {};
    if (customAssets['CUSTOM1']) {
        customImages['CUSTOM1'] = new Image();
        customImages['CUSTOM1'].src = customAssets['CUSTOM1'];
        customImages['CUSTOM1'].onload = () => draw();
    }

    const spriteImages = {}; 

    // --- Sprites Panel Logic ---
    function renderSprites() {
        spritesList.innerHTML = '';
        currentProject.sprites.forEach(sprite => {
            const card = document.createElement('div');
            card.className = `sprite-card ${sprite.id === currentSpriteId ? 'active' : ''}`;
            card.onclick = () => selectSprite(sprite.id);
            
            let thumb = '';
            if (sprite.type === 'mascot' || sprite.src) {
                thumb = `<img src="${sprite.src}">`;
                if (!spriteImages[sprite.id]) {
                    const img = new Image();
                    img.onload = () => { if (gameState.isRunning === false) draw(); };
                    img.src = sprite.src;
                    spriteImages[sprite.id] = img;
                }
            } else {
                thumb = `<div style="width:50px;height:50px;background:#ddd;border-radius:8px;"></div>`;
            }

            card.innerHTML = `
                ${thumb}
                <div class="sprite-name">${sprite.name}</div>
                <button class="duplicate-sprite-btn" title="Duplicate"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg></button>
                <button class="delete-sprite-btn" title="Delete">X</button>
            `;
            
            card.querySelector('.delete-sprite-btn').onclick = (e) => {
                e.stopPropagation();
                currentProject.sprites = currentProject.sprites.filter(s => s.id !== sprite.id);
                if (currentSpriteId === sprite.id) {
                    currentSpriteId = currentProject.sprites.length > 0 ? currentProject.sprites[0].id : null;
                }
                renderSprites();
                selectSprite(currentSpriteId);
                stopGame(); 
            };

            card.querySelector('.duplicate-sprite-btn').onclick = (e) => {
                e.stopPropagation();
                const newSprite = createDefaultSprite(sprite.name + ' Copy', false, sprite.src, sprite);
                newSprite.x += 20; newSprite.y += 20; // Offset copy
                currentProject.sprites.push(newSprite);
                renderSprites();
                selectSprite(newSprite.id);
                stopGame();
            };

            spritesList.appendChild(card);
        });
    }

    function updatePropertiesPanel() {
        const sprite = currentProject.sprites.find(s => s.id === currentSpriteId);
        if (sprite) {
            propName.value = sprite.name;
            propX.value = Math.round(sprite.x);
            propY.value = Math.round(sprite.y);
            propSize.value = sprite.size;
            propDir.value = sprite.direction;
            propName.disabled = false; propX.disabled = false; propY.disabled = false; propSize.disabled = false; propDir.disabled = false;
        } else {
            propName.value = ''; propX.value = ''; propY.value = ''; propSize.value = ''; propDir.value = '';
            propName.disabled = true; propX.disabled = true; propY.disabled = true; propSize.disabled = true; propDir.disabled = true;
        }
    }

    function syncPropertiesToSprite() {
        if (!currentSpriteId) return;
        const sprite = currentProject.sprites.find(s => s.id === currentSpriteId);
        if (sprite) {
            sprite.name = propName.value;
            sprite.x = parseFloat(propX.value) || 0;
            sprite.y = parseFloat(propY.value) || 0;
            sprite.size = parseFloat(propSize.value) || 100;
            sprite.direction = parseFloat(propDir.value) || 90;
            renderSprites();
            stopGame(); // Update preview
        }
    }

    propName.addEventListener('change', syncPropertiesToSprite);
    propX.addEventListener('input', syncPropertiesToSprite);
    propY.addEventListener('input', syncPropertiesToSprite);
    propSize.addEventListener('input', syncPropertiesToSprite);
    propDir.addEventListener('input', syncPropertiesToSprite);

    function selectSprite(id) {
        if (!id) {
            if (workspace) workspace.clear();
            currentSpriteId = null;
            updatePropertiesPanel();
            return;
        }

        if (currentSpriteId && workspace) {
            const currentSprite = currentProject.sprites.find(s => s.id === currentSpriteId);
            if (currentSprite) {
                currentSprite.codeData = Blockly.serialization.workspaces.save(workspace);
            }
        }

        currentSpriteId = id;
        renderSprites();
        updatePropertiesPanel();

        const newSprite = currentProject.sprites.find(s => s.id === id);
        if (workspace && newSprite) {
            workspace.clear();
            if (newSprite.codeData) {
                Blockly.serialization.workspaces.load(newSprite.codeData, workspace);
            }
        }
    }


    // --- Game Engine ---
    let gameState = {
        isRunning: false,
        objects: {}, 
        scenario: 'GRASSLAND',
        joystickEnabled: false,
        jumpEnabled: false,
        joystick: { x: 0, y: 0 },
        keys: {},
        collisionCallbacks: { 'BARRIER': [], 'EDGE': [] },
        lastCollision: 0
    };
    let animationFrameId = null;

    window.GameAPI = {
        moveSteps: async function(objId, steps) { 
            const obj = gameState.objects[objId];
            if(obj) {
                const rad = (obj.direction - 90) * Math.PI / 180;
                obj.x += Math.cos(rad) * steps; 
                obj.y += Math.sin(rad) * steps;
            }
            await new Promise(r => setTimeout(r, 50)); 
        },
        goTo: function(objId, x, y) {
            if(gameState.objects[objId]) { gameState.objects[objId].x = x; gameState.objects[objId].y = y; }
        },
        enableJoystick: function(objId) { 
            gameState.joystickEnabled = true; joystickOverlay.style.display = 'block'; 
            if(gameState.objects[objId]) gameState.objects[objId].hasJoystick = true;
        },
        showJump: function(objId) { 
            gameState.jumpEnabled = true; jumpBtnOverlay.style.display = 'flex'; 
            if(gameState.objects[objId]) gameState.objects[objId].hasJump = true;
        },
        setLife: function(objId, life) { 
            if(gameState.objects[objId]) gameState.objects[objId].life = life; 
        },
        changeLife: function(objId, amount) { 
            if(gameState.objects[objId]) gameState.objects[objId].life = Math.max(0, gameState.objects[objId].life + amount); 
        },
        setBarrier: function(objId) { 
            if(gameState.objects[objId]) gameState.objects[objId].isBarrier = true; 
        },
        switchScenario: function(scenario) { gameState.scenario = scenario; },
        show: function(objId) { if(gameState.objects[objId]) gameState.objects[objId].visible = true; },
        hide: function(objId) { if(gameState.objects[objId]) gameState.objects[objId].visible = false; },
        getX: function(objId) { return gameState.objects[objId] ? gameState.objects[objId].x : 0; },
        getY: function(objId) { return gameState.objects[objId] ? gameState.objects[objId].y : 0; },
        isTouching: function(objId, targetName) {
            const obj = gameState.objects[objId];
            if (!obj) return false;
            const w = 50 * (obj.size / 100); const h = 50 * (obj.size / 100);
            
            for (const key in gameState.objects) {
                if (key === objId) continue;
                const other = gameState.objects[key];
                if (!other.visible) continue;
                if (other.sprite.name.toLowerCase() === targetName.toLowerCase()) {
                    const ow = 50 * (other.size / 100); const oh = 50 * (other.size / 100);
                    if (Math.abs(obj.x - other.x) < (w + ow) / 2 && Math.abs(obj.y - other.y) < (h + oh) / 2) {
                        return true;
                    }
                }
            }
            return false;
        },
        onCollision: function(objId, type, cb) { 
            if (gameState.collisionCallbacks[type]) gameState.collisionCallbacks[type].push({objId, cb}); 
        }
    };

    function initBlockly() {
        if (!workspace) {
            workspace = Blockly.inject('blocklyDiv', {
                toolbox: document.getElementById('toolbox'),
                theme: Blockly.Themes.Classic,
                zoom: { controls: true, wheel: true, startScale: 1.0, maxScale: 3, minScale: 0.3, scaleSpeed: 1.2 },
                trashcan: true
            });
            window.addEventListener('resize', () => Blockly.svgResize(workspace));
        }
    }

    function doJump() {
        for (const key in gameState.objects) {
            const obj = gameState.objects[key];
            if (obj.hasJump && obj.isGrounded) {
                obj.vy = obj.jumpPower;
                obj.isGrounded = false;
            }
        }
    }

    jumpBtn.addEventListener('click', doJump);
    jumpBtn.addEventListener('touchstart', (e) => { e.preventDefault(); doJump(); });

    function update() {
        if (!gameState.isRunning) return;
        const groundLevel = 280; 

        function triggerCollision(objId, type) {
            const now = Date.now();
            if (!gameState.objects[objId].lastCollisions) gameState.objects[objId].lastCollisions = {};
            if (now - (gameState.objects[objId].lastCollisions[type] || 0) > 500) {
                gameState.objects[objId].lastCollisions[type] = now;
                if (gameState.collisionCallbacks[type]) {
                    gameState.collisionCallbacks[type].forEach(cbData => {
                        if (cbData.objId === objId) cbData.cb();
                    });
                }
            }
        }

        for (const key in gameState.objects) {
            const obj = gameState.objects[key];
            const w = 50 * (obj.size / 100);
            const h = 50 * (obj.size / 100);
            
            let prevX = obj.x;
            let prevY = obj.y;

            // --- X Movement ---
            if (obj.hasJoystick) {
                let dx = 0;
                if (gameState.keys['ArrowLeft']) dx -= 1;
                if (gameState.keys['ArrowRight']) dx += 1;
                
                if (gameState.joystick.x !== 0) {
                    dx = gameState.joystick.x;
                }

                if (dx !== 0) {
                    obj.x += dx * obj.speed;
                }
            }

            // Check X Collisions
            for (const otherKey in gameState.objects) {
                if (otherKey === key) continue;
                const other = gameState.objects[otherKey];
                if (other.isBarrier && other.visible) {
                    const ow = 50 * (other.size / 100);
                    const oh = 50 * (other.size / 100);
                    if (Math.abs(obj.x - other.x) < (w + ow) / 2 && Math.abs(obj.y - other.y) < (h + oh) / 2) {
                        obj.x = prevX; // Revert
                        triggerCollision(key, 'BARRIER');
                    }
                }
            }

            // Bounds X
            if (obj.x < w/2) { obj.x = w/2; triggerCollision(key, 'EDGE'); }
            if (obj.x > canvas.width - w/2) { obj.x = canvas.width - w/2; triggerCollision(key, 'EDGE'); }

            // --- Y Movement ---
            if (obj.hasJump) {
                obj.vy += obj.gravity;
                obj.y += obj.vy;
                obj.isGrounded = false;
            } else if (obj.hasJoystick) {
                let dy = 0;
                if (gameState.keys['ArrowUp']) dy -= 1;
                if (gameState.keys['ArrowDown']) dy += 1;
                if (gameState.joystick.y !== 0) dy = gameState.joystick.y;
                
                if (dy !== 0) {
                    obj.y += dy * obj.speed;
                }
            }

            // Check Y Collisions
            for (const otherKey in gameState.objects) {
                if (otherKey === key) continue;
                const other = gameState.objects[otherKey];
                if (other.isBarrier && other.visible) {
                    const ow = 50 * (other.size / 100);
                    const oh = 50 * (other.size / 100);
                    if (Math.abs(obj.x - other.x) < (w + ow) / 2 && Math.abs(obj.y - other.y) < (h + oh) / 2) {
                        if (obj.hasJump) {
                            if (obj.vy > 0) { // Landing on top
                                obj.y = other.y - oh/2 - h/2;
                                obj.vy = 0;
                                obj.isGrounded = true;
                            } else if (obj.vy < 0) { // Hitting from below
                                obj.y = other.y + oh/2 + h/2;
                                obj.vy = 0;
                            }
                        } else {
                            obj.y = prevY; // Revert
                        }
                        triggerCollision(key, 'BARRIER');
                    }
                }
            }

            // Bounds Y
            if (!obj.hasJump) {
                if (obj.y < h/2) { obj.y = h/2; triggerCollision(key, 'EDGE'); }
                if (obj.y > canvas.height - h/2) { obj.y = canvas.height - h/2; triggerCollision(key, 'EDGE'); }
            } else {
                if (obj.y > groundLevel) {
                    obj.y = groundLevel;
                    obj.vy = 0;
                    obj.isGrounded = true;
                }
                // Allow jump if grounded
                if (obj.isGrounded && (gameState.keys[' '] || gameState.keys['ArrowUp'])) {
                    doJump();
                }
            }
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        if (gameState.scenario === 'GRASSLAND') {
            let sky = ctx.createLinearGradient(0, 0, 0, 200);
            sky.addColorStop(0, '#87CEEB'); sky.addColorStop(1, '#E0F6FF');
            ctx.fillStyle = sky; ctx.fillRect(0, 0, canvas.width, canvas.height);
            let ground = ctx.createLinearGradient(0, 260, 0, canvas.height);
            ground.addColorStop(0, '#34a853'); ground.addColorStop(0.2, '#2d9147');
            ground.addColorStop(0.3, '#795548'); ground.addColorStop(1, '#5d4037');
            ctx.fillStyle = ground; ctx.fillRect(0, 260, canvas.width, canvas.height - 260);
        } else if (gameState.scenario === 'CITY') {
            ctx.fillStyle = '#636e72'; ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#2d3436'; ctx.fillRect(50, 100, 80, 260); ctx.fillRect(200, 50, 100, 310); ctx.fillRect(350, 150, 70, 210);
        } else if (gameState.scenario === 'SPACE') {
            ctx.fillStyle = '#000000'; ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#ffffff'; for(let i=0; i<20; i++) ctx.fillRect(Math.random()*canvas.width, Math.random()*canvas.height, 2, 2);
        } else if (gameState.scenario === 'CUSTOM1' && customImages['CUSTOM1']) {
            ctx.drawImage(customImages['CUSTOM1'], 0, 0, canvas.width, canvas.height);
        }

        for (const key in gameState.objects) {
            const obj = gameState.objects[key];
            if (!obj.visible) continue; // Skip hidden objects
            
            const img = spriteImages[obj.sprite.id];
            
            ctx.save();
            ctx.translate(obj.x, obj.y);
            ctx.rotate((obj.direction - 90) * Math.PI / 180); 
            const scale = obj.size / 100;
            ctx.scale(scale, scale);

            if (obj.isBarrier) {
                ctx.strokeStyle = '#ea4335';
                ctx.lineWidth = 3;
                ctx.strokeRect(-25, -25, 50, 50);
            }

            if (img && img.complete) {
                ctx.drawImage(img, -25, -25, 50, 50);
            } else if (img && !img.complete) {
                ctx.fillStyle = '#ddd';
                ctx.fillRect(-20, -20, 40, 40);
            } else {
                ctx.fillStyle = '#ff6b6b';
                ctx.fillRect(-20, -20, 40, 40);
            }
            
            ctx.restore();

            if (obj.life < 100) {
                ctx.fillStyle = 'var(--text-primary)'; ctx.font = 'bold 12px Nunito, sans-serif';
                ctx.fillText(`Life: ${obj.life}`, obj.x - 20, obj.y - 30);
            }
            
            if (!gameState.isRunning && currentSpriteId === obj.sprite.id) {
                ctx.strokeStyle = '#4285f4';
                ctx.lineWidth = 2;
                ctx.strokeRect(obj.x - 28 * (obj.size/100), obj.y - 28 * (obj.size/100), 56 * (obj.size/100), 56 * (obj.size/100));
            }
        }
    }

    function loop() {
        if (!gameState.isRunning) return;
        update(); draw();
        animationFrameId = requestAnimationFrame(loop);
    }

    async function executeCode() {
        gameState.objects = {};
        gameState.scenario = 'GRASSLAND';
        gameState.joystickEnabled = false; gameState.jumpEnabled = false;
        gameState.collisionCallbacks = { 'BARRIER': [], 'EDGE': [] };
        joystickOverlay.style.display = 'none'; jumpBtnOverlay.style.display = 'none';

        currentProject.sprites.forEach(sprite => {
            gameState.objects[sprite.id] = {
                sprite: sprite,
                x: sprite.x !== undefined ? sprite.x : 240, 
                y: sprite.y !== undefined ? sprite.y : 180, 
                size: sprite.size !== undefined ? sprite.size : 100,
                direction: sprite.direction !== undefined ? sprite.direction : 90,
                visible: true,
                speed: 5, life: 100, 
                vy: 0, gravity: 0.8, jumpPower: -12, isGrounded: false,
                hasJoystick: false, hasJump: false, isBarrier: false
            };
        });

        if (currentSpriteId && workspace) {
            const currentSprite = currentProject.sprites.find(s => s.id === currentSpriteId);
            if (currentSprite) currentSprite.codeData = Blockly.serialization.workspaces.save(workspace);
        }

        currentProject.sprites.forEach(sprite => {
            if (!sprite.codeData) return;
            const headless = new Blockly.Workspace();
            Blockly.serialization.workspaces.load(sprite.codeData, headless);
            
            const topBlocks = headless.getTopBlocks(true);
            let setupCode = '';
            for (let block of topBlocks) {
                if (block.type === 'event_when_play_clicked') {
                    let nextBlock = block.getNextBlock();
                    while (nextBlock) { setupCode += jsGen.blockToCode(nextBlock); nextBlock = nextBlock.getNextBlock(); }
                } else if (block.type === 'event_always') {
                    setupCode += jsGen.blockToCode(block);
                } else if (block.type === 'event_on_collision') {
                    setupCode += jsGen.blockToCode(block);
                }
            }
            
            const finalCode = `(async function(__objId) { try { ${setupCode} } catch(e) { console.error(e); } })('${sprite.id}');`;
            try { eval(finalCode); } catch (e) { console.error(e); }
            
            headless.dispose();
        });
        
        for (const key in gameState.objects) {
            if (gameState.objects[key].hasJump) gameState.objects[key].y = 280;
        }

        gameState.isRunning = true; loop();
    }

    // --- Interactive Stage (Dragging in Edit Mode) ---
    let isDraggingSprite = false;
    canvas.addEventListener('mousedown', (e) => {
        if (gameState.isRunning) return;
        const pos = getMousePos(canvas, e);
        const spritesRev = [...currentProject.sprites].reverse();
        const clicked = spritesRev.find(s => {
            const sizePx = 50 * (s.size / 100);
            return pos.x >= s.x - sizePx/2 && pos.x <= s.x + sizePx/2 &&
                   pos.y >= s.y - sizePx/2 && pos.y <= s.y + sizePx/2;
        });
        if (clicked) {
            selectSprite(clicked.id);
            isDraggingSprite = true;
        }
    });
    canvas.addEventListener('mousemove', (e) => {
        if (gameState.isRunning || !isDraggingSprite || !currentSpriteId) return;
        const pos = getMousePos(canvas, e);
        const sprite = currentProject.sprites.find(s => s.id === currentSpriteId);
        if (sprite) {
            sprite.x = pos.x; sprite.y = pos.y;
            updatePropertiesPanel();
            stopGame(); // redraws preview
        }
    });
    canvas.addEventListener('mouseup', () => isDraggingSprite = false);
    canvas.addEventListener('mouseleave', () => isDraggingSprite = false);


    // --- Input & Touch ---
    window.addEventListener('keydown', (e) => { gameState.keys[e.key] = true; });
    window.addEventListener('keyup', (e) => { gameState.keys[e.key] = false; });

    let isDraggingJoystick = false; const baseRect = { x: 0, y: 0, w: 100, h: 100 };
    function handleJoystickMove(cx, cy) {
        if (!isDraggingJoystick) return;
        let dx = cx - (baseRect.x + 50), dy = cy - (baseRect.y + 50);
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist > 30) { dx = (dx/dist)*30; dy = (dy/dist)*30; }
        joystickStick.style.transform = `translate(${dx}px, ${dy}px)`;
        gameState.joystick.x = dx / 30; gameState.joystick.y = dy / 30;
    }
    joystickOverlay.addEventListener('mousedown', (e) => { isDraggingJoystick = true; const r = joystickOverlay.getBoundingClientRect(); baseRect.x = r.left; baseRect.y = r.top; handleJoystickMove(e.clientX, e.clientY); });
    window.addEventListener('mousemove', (e) => handleJoystickMove(e.clientX, e.clientY));
    window.addEventListener('mouseup', () => { isDraggingJoystick = false; joystickStick.style.transform = `translate(0,0)`; gameState.joystick = { x: 0, y: 0 }; });
    joystickOverlay.addEventListener('touchstart', (e) => { isDraggingJoystick = true; const r = joystickOverlay.getBoundingClientRect(); baseRect.x = r.left; baseRect.y = r.top; handleJoystickMove(e.touches[0].clientX, e.touches[0].clientY); });
    window.addEventListener('touchmove', (e) => { if(isDraggingJoystick) e.preventDefault(); handleJoystickMove(e.touches[0].clientX, e.touches[0].clientY); }, {passive: false});
    window.addEventListener('touchend', () => { isDraggingJoystick = false; joystickStick.style.transform = `translate(0,0)`; gameState.joystick = { x: 0, y: 0 }; });

    // --- Core Navigation ---
    function showView(viewId) {
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.getElementById(viewId).classList.add('active');
        if (viewId === 'editor-view') {
            if (!workspace) { defineBlocks(); initBlockly(); }
            
            if (!currentProject.sprites || currentProject.sprites.length === 0) {
                currentProject.sprites = [createDefaultSprite('Mascot', true)];
            }
            renderSprites();
            if (!currentSpriteId && currentProject.sprites.length > 0) {
                selectSprite(currentProject.sprites[0].id);
            }
            
            stopGame();
            setTimeout(() => { Blockly.svgResize(workspace); }, 10);
        } else if (viewId === 'menu-view') {
            saveProject();
            renderProjectsList(); stopGame();
        }
    }

    function createNewProject() {
        currentProject = {
            id: Date.now().toString(),
            title: locales[currentLang].newProject,
            updatedAt: new Date().toISOString(),
            sprites: [createDefaultSprite('Mascot', true)]
        };
        projectTitleInput.value = currentProject.title;
        currentSpriteId = null;
        showView('editor-view'); 
    }

    function saveProject() {
        if (!currentProject) return;
        currentProject.title = projectTitleInput.value.trim() || 'Untitled';
        currentProject.updatedAt = new Date().toISOString();
        
        if (currentSpriteId && workspace) {
            const currentSprite = currentProject.sprites.find(s => s.id === currentSpriteId);
            if (currentSprite) currentSprite.codeData = Blockly.serialization.workspaces.save(workspace);
        }

        const idx = projects.findIndex(x => x.id === currentProject.id);
        if (idx >= 0) projects[idx] = currentProject; else projects.unshift(currentProject);
        localStorage.setItem('create_projects', JSON.stringify(projects));
        
        const originalText = saveBtn.textContent; saveBtn.textContent = 'OK!';
        setTimeout(() => { saveBtn.textContent = originalText; }, 1500);
    }

    function loadProject(id) {
        const p = projects.find(x => x.id === id);
        if (p) {
            currentProject = p;
            if (!currentProject.sprites) {
                currentProject.sprites = [createDefaultSprite('Mascot', true)];
                currentProject.sprites[0].codeData = currentProject.data;
            }
            projectTitleInput.value = currentProject.title; 
            currentSpriteId = null;
            showView('editor-view');
        }
    }

    function deleteProject(id, event) {
        event.stopPropagation();
        projects = projects.filter(x => x.id !== id);
        localStorage.setItem('create_projects', JSON.stringify(projects));
        renderProjectsList();
    }

    function renderProjectsList() {
        projectsList.innerHTML = '';
        projects.forEach(p => {
            const card = document.createElement('div'); card.className = 'project-card'; card.onclick = () => loadProject(p.id);
            const date = new Date(p.updatedAt).toLocaleDateString();
            card.innerHTML = `<div class="project-card-header"><div class="project-title">${p.title.replace(/</g, "&lt;")}</div><button class="delete-btn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></button></div><div class="project-date">${date}</div>`;
            card.querySelector('.delete-btn').onclick = (e) => deleteProject(p.id, e);
            projectsList.appendChild(card);
        });
    }

    function stopGame() {
        gameState.isRunning = false; if (animationFrameId) cancelAnimationFrame(animationFrameId);
        playBtn.style.display = 'flex'; stopBtn.style.display = 'none';
        joystickOverlay.style.display = 'none'; jumpBtnOverlay.style.display = 'none';
        
        if (currentProject && currentProject.sprites) {
            currentProject.sprites.forEach(sprite => {
                gameState.objects[sprite.id] = {
                    sprite: sprite, 
                    x: sprite.x !== undefined ? sprite.x : 240, 
                    y: sprite.y !== undefined ? sprite.y : 180, 
                    size: sprite.size !== undefined ? sprite.size : 100,
                    direction: sprite.direction !== undefined ? sprite.direction : 90,
                    visible: true,
                    life: 100, isBarrier: false
                };
            });
        }
        draw();
    }

    newProjectBtn.addEventListener('click', createNewProject);
    backBtn.addEventListener('click', () => { showView('menu-view'); });
    saveBtn.addEventListener('click', saveProject);
    playBtn.addEventListener('click', () => { playBtn.style.display = 'none'; stopBtn.style.display = 'flex'; executeCode(); });
    stopBtn.addEventListener('click', stopGame);

    applyLanguage();
    renderProjectsList();
});

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
        blockTouching: "Wait to touch object %1",
        blockPosX: "X Position",
        blockPosY: "Y Position",
        blockWhenKey: "When %1 key pressed",
        blockWhenClicked: "When this sprite clicked",
        blockWhenPhase: "When phase switches to %1",
        blockWhenTouchingObject: "When touching object %1",
        blockPointDir: "Point in direction %1",
        blockChangeX: "Change X by %1",
        blockChangeY: "Change Y by %1",
        blockSwitchPhase: "Switch to phase %1",
        blockJump: "Jump",
        blockSetSize: "Set size to %1 %",
        blockChangeSize: "Change size by %1",
        blockGlide: "Glide %1 secs to X: %2 Y: %3",
        blockSay: "Say %1 for %2 secs",
        blockBounceEdge: "If on edge, bounce",
        blockDistanceTo: "Distance to %1",
        blockIsTouching: "Touching %1 ?",
        blockDo: "do %1",
        optLeft: "Left", optRight: "Right", optUp: "Up", optDown: "Down",
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
        blockTouching: "Aguardar até encostar no objeto %1",
        blockPosX: "Posição X",
        blockPosY: "Posição Y",
        blockWhenKey: "Quando a tecla %1 for pressionada",
        blockWhenClicked: "Quando clicar neste objeto",
        blockWhenPhase: "Quando mudar para a fase %1",
        blockWhenTouchingObject: "Quando encostar no objeto %1",
        blockPointDir: "Apontar para a direção %1",
        blockChangeX: "Adicionar %1 a X",
        blockChangeY: "Adicionar %1 a Y",
        blockSwitchPhase: "Mudar para a fase %1",
        blockJump: "Pular",
        blockSetSize: "Definir tamanho para %1 %",
        blockChangeSize: "Mudar tamanho por %1",
        blockGlide: "Deslizar %1 segs para X: %2 Y: %3",
        blockSay: "Dizer %1 por %2 segs",
        blockBounceEdge: "Se tocar na borda, voltar",
        blockDistanceTo: "Distância até %1",
        blockIsTouching: "Encostando no objeto %1 ?",
        blockDo: "fazer %1",
        optLeft: "Esquerda", optRight: "Direita", optUp: "Cima", optDown: "Baixo",
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
        blockTouching: "Esperar hasta tocar el objeto %1",
        blockPosX: "Posición X",
        blockPosY: "Posición Y",
        blockWhenKey: "Al presionar tecla %1",
        blockWhenClicked: "Al hacer clic en este objeto",
        blockWhenPhase: "Cuando cambie a la fase %1",
        blockWhenTouchingObject: "Cuando toque el objeto %1",
        blockPointDir: "Apuntar en dirección %1",
        blockChangeX: "Sumar %1 a X",
        blockChangeY: "Sumar %1 a Y",
        blockSwitchPhase: "Cambiar a fase %1",
        blockJump: "Saltar",
        blockSetSize: "Establecer tamaño a %1 %",
        blockChangeSize: "Cambiar tamaño por %1",
        blockGlide: "Deslizar %1 segs a X: %2 Y: %3",
        blockSay: "Decir %1 por %2 segs",
        blockBounceEdge: "Si toca el borde, rebotar",
        blockDistanceTo: "Distancia a %1",
        blockIsTouching: "Tocando %1 ?",
        blockDo: "hacer %1",
        optLeft: "Izquierda", optRight: "Derecha", optUp: "Arriba", optDown: "Abajo",
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
        blockTouching: "%1 オブジェクトに触れるまで待つ",
        blockPosX: "X座標",
        blockPosY: "Y座標",
        blockWhenKey: "%1 キーが押された時",
        blockWhenClicked: "このスプライトがクリックされた時",
        blockWhenPhase: "フェーズが %1 になった時",
        blockWhenTouchingObject: "%1 に触れたとき",
        blockPointDir: "%1 の方向に向ける",
        blockChangeX: "X座標を %1 ずつ変える",
        blockChangeY: "Y座標を %1 ずつ変える",
        blockSwitchPhase: "フェーズ %1 に変更する",
        blockJump: "ジャンプ",
        blockSetSize: "大きさを %1 % にする",
        blockChangeSize: "大きさを %1 ずつ変える",
        blockGlide: "%1 秒で X: %2 Y: %3 へ行く",
        blockSay: "%1 と %2 秒言う",
        blockBounceEdge: "端に着いたら、跳ね返る",
        blockDistanceTo: "%1 までの距離",
        blockIsTouching: "%1 に触れた？",
        blockDo: "する %1",
        optLeft: "左", optRight: "右", optUp: "上", optDown: "下",
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
        document.getElementById('jump-btn').textContent = currentLang === 'ja' ? 'ã‚¸ãƒ£ãƒ³ãƒ—' : 'JUMP';

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
                "previousStatement": null,
                "nextStatement": null,
                "colour": 65
            },
            {
                "type": "motion_jump",
                "message0": t.blockJump,
                "previousStatement": null,
                "nextStatement": null,
                "colour": 230
            },
            {
                "type": "event_when_key",
                "message0": t.blockWhenKey,
                "args0": [{ "type": "field_dropdown", "name": "KEY", "options": [
                    ["Space", " "], ["Up Arrow", "ArrowUp"], ["Down Arrow", "ArrowDown"],
                    ["Left Arrow", "ArrowLeft"], ["Right Arrow", "ArrowRight"],
                    ["A", "a"], ["W", "w"], ["S", "s"], ["D", "d"]
                ] }],
                "nextStatement": null,
                "colour": 65
            },
            {
                "type": "event_when_clicked",
                "message0": t.blockWhenClicked,
                "nextStatement": null,
                "colour": 65
            },
            {
                "type": "event_when_phase",
                "message0": t.blockWhenPhase,
                "args0": [{ "type": "field_dropdown", "name": "PHASE", "options": [
                    ["Phase 1", "1"], ["Phase 2", "2"], ["Phase 3", "3"],
                    ["Phase 4", "4"], ["Phase 5", "5"], ["Phase 6", "6"],
                    ["Phase 7", "7"], ["Phase 8", "8"], ["Phase 9", "9"], ["Phase 10", "10"]
                ] }],
                "nextStatement": null,
                "colour": 65
            },
            {
                "type": "event_when_touching_object",
                "message0": t.blockWhenTouchingObject,
                "args0": [{ "type": "field_input", "name": "OBJ_NAME", "text": "Enemy" }],
                "message1": t.blockDo,
                "args1": [{"type": "input_statement", "name": "DO"}],
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
                "type": "motion_point_direction",
                "message0": t.blockPointDir,
                "args0": [{ "type": "field_dropdown", "name": "DIR", "options": [
                    [t.optRight, "90"], [t.optLeft, "-90"], [t.optUp, "0"], [t.optDown, "180"]
                ] }],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 230
            },
            {
                "type": "motion_change_x",
                "message0": t.blockChangeX,
                "args0": [{ "type": "input_value", "name": "DELTA", "check": "Number" }],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 230
            },
            {
                "type": "motion_change_y",
                "message0": t.blockChangeY,
                "args0": [{ "type": "input_value", "name": "DELTA", "check": "Number" }],
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
                "type": "looks_switch_phase",
                "message0": t.blockSwitchPhase,
                "args0": [{ "type": "field_dropdown", "name": "PHASE", "options": [
                    ["Phase 1", "1"], ["Phase 2", "2"], ["Phase 3", "3"],
                    ["Phase 4", "4"], ["Phase 5", "5"], ["Phase 6", "6"],
                    ["Phase 7", "7"], ["Phase 8", "8"], ["Phase 9", "9"], ["Phase 10", "10"]
                ] }],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 290
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
                "previousStatement": null,
                "nextStatement": null,
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
            },
            {
                "type": "looks_set_size",
                "message0": t.blockSetSize,
                "args0": [{ "type": "input_value", "name": "SIZE", "check": "Number" }],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 290
            },
            {
                "type": "looks_change_size",
                "message0": t.blockChangeSize,
                "args0": [{ "type": "input_value", "name": "DELTA", "check": "Number" }],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 290
            },
            {
                "type": "looks_say",
                "message0": t.blockSay,
                "args0": [
                    { "type": "input_value", "name": "TEXT", "check": "String" },
                    { "type": "input_value", "name": "TIME", "check": "Number" }
                ],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 290
            },
            {
                "type": "motion_glide",
                "message0": t.blockGlide,
                "args0": [
                    { "type": "input_value", "name": "SECS", "check": "Number" },
                    { "type": "input_value", "name": "X", "check": "Number" },
                    { "type": "input_value", "name": "Y", "check": "Number" }
                ],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 230
            },
                        {
                "type": "game_set_map_size",
                "message0": "Definir mapa: largura %1 altura %2",
                "args0": [
                    { "type": "input_value", "name": "WIDTH", "check": "Number" },
                    { "type": "input_value", "name": "HEIGHT", "check": "Number" }
                ],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 120
            },
            {
                "type": "game_camera_follow",
                "message0": "CÃ¢mera acompanhar objeto %1",
                "args0": [{ "type": "input_value", "name": "OBJ_NAME", "check": "String" }],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 120
            },
            {
                "type": "game_bounce_edge",
                "message0": t.blockBounceEdge,
                "previousStatement": null,
                "nextStatement": null,
                "colour": 120
            },
            {
                "type": "sensing_distance_to",
                "message0": t.blockDistanceTo,
                "args0": [{ "type": "input_value", "name": "OBJ_NAME", "check": "String" }],
                "output": "Number",
                "colour": 190
            },
            {
                "type": "sensing_istouching",
                "message0": t.blockIsTouching,
                "args0": [{ "type": "input_value", "name": "OBJ_NAME", "check": "String" }],
                "output": "Boolean",
                "colour": 190
            }
        ]);
        
        document.getElementById('toolbox').innerHTML = `
            <category name="${t.catEvents}" colour="65">
                <block type="event_when_play_clicked"></block>
                <block type="event_when_key"></block>
                <block type="event_when_clicked"></block>
                <block type="event_when_touching_object"></block>
                <block type="event_when_phase"></block>
                <block type="event_always"></block>
                <block type="event_on_collision"></block>
            </category>
            <category name="${t.catMotion}" colour="230">
                <block type="motion_move_steps"><value name="STEPS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>
                <block type="motion_jump"></block>
                <block type="motion_point_direction"></block>
                <block type="motion_change_x"><value name="DELTA"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>
                <block type="motion_change_y"><value name="DELTA"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>
                <block type="motion_go_to">
                    <value name="X"><shadow type="math_number"><field name="NUM">240</field></shadow></value>
                    <value name="Y"><shadow type="math_number"><field name="NUM">180</field></shadow></value>
                </block>
                <block type="motion_glide">
                    <value name="SECS"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
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
                                <block type="game_set_map_size">
                    <value name="WIDTH"><shadow type="math_number"><field name="NUM">1000</field></shadow></value>
                    <value name="HEIGHT"><shadow type="math_number"><field name="NUM">1000</field></shadow></value>
                </block>
                <block type="game_camera_follow">
                    <value name="OBJ_NAME"><shadow type="text"><field name="TEXT">Mascot</field></shadow></value>
                </block>
                <block type="game_bounce_edge"></block>
            </category>
            <category name="${t.catLooks}" colour="290">
                <block type="looks_switch_phase"></block>
                <block type="looks_switch_scenario"></block>
                <block type="looks_set_size"><value name="SIZE"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block>
                <block type="looks_change_size"><value name="DELTA"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>
                <block type="looks_say">
                    <value name="TEXT"><shadow type="text"><field name="TEXT">Hello!</field></shadow></value>
                    <value name="TIME"><shadow type="math_number"><field name="NUM">2</field></shadow></value>
                </block>
                <block type="looks_show"></block>
                <block type="looks_hide"></block>
            </category>
            <category name="${t.catSensing}" colour="190">
                <block type="sensing_touching"><value name="OBJ_NAME"><shadow type="text"><field name="TEXT">Enemy</field></shadow></value></block>
                <block type="sensing_istouching"><value name="OBJ_NAME"><shadow type="text"><field name="TEXT">Enemy</field></shadow></value></block>
                <block type="sensing_distance_to"><value name="OBJ_NAME"><shadow type="text"><field name="TEXT">Enemy</field></shadow></value></block>
                <block type="sensing_pos_x"></block>
                <block type="sensing_pos_y"></block>
            </category>
            <category name="${t.catLogic}" colour="%{BKY_LOGIC_HUE}">
                <block type="controls_if"></block>
                <block type="logic_compare"></block>
                <block type="logic_operation"></block>
                <block type="logic_boolean"></block>
                <block type="math_number"></block>
            </category>
        `;
    }

    const jsGen = javascript.javascriptGenerator;
    jsGen.forBlock['event_when_play_clicked'] = () => '';
    jsGen.forBlock['event_when_key'] = () => '';
    jsGen.forBlock['event_when_clicked'] = () => '';
    jsGen.forBlock['event_when_phase'] = () => '';
    jsGen.forBlock['event_when_touching_object'] = () => '';
    jsGen.forBlock['event_always'] = (block, generator) => {
        const statements = generator.statementToCode(block, 'DO') || '';
        return `while (gameState.isRunning) {\n${statements}\nawait new Promise(r => setTimeout(r, 16));\n}\n`;
    };
    jsGen.forBlock['event_on_collision'] = (block) => `await GameAPI.waitForCollision(__objId, '${block.getFieldValue('OBJECT')}');\n`;
    
    jsGen.forBlock['motion_move_steps'] = (block, generator) => `await GameAPI.moveSteps(__objId, ${generator.valueToCode(block, 'STEPS', javascript.Order.ATOMIC) || '10'});\n`;
    jsGen.forBlock['motion_jump'] = () => `GameAPI.jump(__objId);\n`;
    jsGen.forBlock['motion_point_direction'] = (block) => `GameAPI.pointDirection(__objId, ${block.getFieldValue('DIR')});\n`;
    jsGen.forBlock['motion_change_x'] = (block, generator) => `GameAPI.changeX(__objId, ${generator.valueToCode(block, 'DELTA', javascript.Order.ATOMIC) || '10'});\n`;
    jsGen.forBlock['motion_change_y'] = (block, generator) => `GameAPI.changeY(__objId, ${generator.valueToCode(block, 'DELTA', javascript.Order.ATOMIC) || '10'});\n`;
    jsGen.forBlock['motion_go_to'] = (block, generator) => `GameAPI.goTo(__objId, ${generator.valueToCode(block, 'X', javascript.Order.ATOMIC) || '0'}, ${generator.valueToCode(block, 'Y', javascript.Order.ATOMIC) || '0'});\n`;
    jsGen.forBlock['motion_enable_joystick'] = () => `GameAPI.enableJoystick(__objId);\n`;
    jsGen.forBlock['motion_show_jump'] = () => `GameAPI.showJump(__objId);\n`;
    
    jsGen.forBlock['game_set_life'] = (block, generator) => `GameAPI.setLife(__objId, ${generator.valueToCode(block, 'LIFE', javascript.Order.ATOMIC) || '100'});\n`;
    jsGen.forBlock['game_change_life'] = (block, generator) => `GameAPI.changeLife(__objId, ${generator.valueToCode(block, 'LIFE', javascript.Order.ATOMIC) || '-10'});\n`;
    jsGen.forBlock['game_set_barrier'] = () => `GameAPI.setBarrier(__objId);\n`;
    
    jsGen.forBlock['looks_switch_phase'] = (block) => `GameAPI.switchPhase('${block.getFieldValue('PHASE')}');\n`;
    jsGen.forBlock['looks_switch_scenario'] = (block) => `GameAPI.switchScenario('${block.getFieldValue('SCENARIO')}');\n`;
    jsGen.forBlock['looks_show'] = () => `GameAPI.show(__objId);\n`;
    jsGen.forBlock['looks_hide'] = () => `GameAPI.hide(__objId);\n`;
    jsGen.forBlock['looks_set_size'] = (block, generator) => `GameAPI.setSize(__objId, ${generator.valueToCode(block, 'SIZE', javascript.Order.ATOMIC) || '100'});\n`;
    jsGen.forBlock['looks_change_size'] = (block, generator) => `GameAPI.changeSize(__objId, ${generator.valueToCode(block, 'DELTA', javascript.Order.ATOMIC) || '10'});\n`;
    jsGen.forBlock['looks_say'] = (block, generator) => `GameAPI.say(__objId, ${generator.valueToCode(block, 'TEXT', javascript.Order.ATOMIC) || "''"}, ${generator.valueToCode(block, 'TIME', javascript.Order.ATOMIC) || '2'});\n`;

    jsGen.forBlock['sensing_touching'] = (block, generator) => `await GameAPI.waitForObjectTouch(__objId, ${generator.valueToCode(block, 'OBJ_NAME', javascript.Order.ATOMIC) || "''"});\n`;
    jsGen.forBlock['sensing_pos_x'] = () => [`GameAPI.getX(__objId)`, javascript.Order.FUNCTION_CALL];
    jsGen.forBlock['sensing_pos_y'] = () => [`GameAPI.getY(__objId)`, javascript.Order.FUNCTION_CALL];
    jsGen.forBlock['sensing_distance_to'] = (block, generator) => [`GameAPI.distanceTo(__objId, ${generator.valueToCode(block, 'OBJ_NAME', javascript.Order.ATOMIC) || "''"})`, javascript.Order.FUNCTION_CALL];
    jsGen.forBlock['sensing_istouching'] = (block, generator) => [`GameAPI.isTouching(__objId, ${generator.valueToCode(block, 'OBJ_NAME', javascript.Order.ATOMIC) || "''"})`, javascript.Order.FUNCTION_CALL];

    jsGen.forBlock['motion_glide'] = (block, generator) => `await GameAPI.glide(__objId, ${generator.valueToCode(block, 'SECS', javascript.Order.ATOMIC) || '1'}, ${generator.valueToCode(block, 'X', javascript.Order.ATOMIC) || '0'}, ${generator.valueToCode(block, 'Y', javascript.Order.ATOMIC) || '0'});\n`;
    jsGen.forBlock['game_bounce_edge'] = () => `GameAPI.bounceEdge(__objId);\n`;


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
    
    // Phase UI
    const phaseSelector = document.getElementById('phase-selector');
    const addPhaseBtn = document.getElementById('add-phase-btn');
    
    // --- State ---
    let workspace = null;
    let projects = JSON.parse(localStorage.getItem('create_projects')) || [];
    let customAssets = JSON.parse(localStorage.getItem('create_assets')) || {};
    
    let currentProject = null;
    let currentSpriteId = null;

    function getSprites() {
        const phase = currentProject.currentPhase || 1;
        if (!currentProject.phaseData) {
            currentProject.phaseData = { '1': { sprites: currentProject.sprites || [createDefaultSprite('Mascot', true)] } };
            delete currentProject.sprites;
        }
        if (!currentProject.phaseData[phase]) {
            currentProject.phaseData[phase] = { sprites: [createDefaultSprite('Mascot', true)] };
        }
        return currentProject.phaseData[phase].sprites;
    }

    function setSprites(sprites) {
        const phase = currentProject.currentPhase || 1;
        if (!currentProject.phaseData) getSprites(); 
        currentProject.phaseData[phase].sprites = sprites;
    }

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
    let paintHistory = [];
    let paintHistoryStep = -1;

    function savePaintState() {
        if (paintHistoryStep < paintHistory.length - 1) {
            paintHistory.length = paintHistoryStep + 1;
        }
        paintHistory.push(paintCanvas.toDataURL());
        paintHistoryStep++;
    }

    function undoPaint() {
        if (paintHistoryStep > 0) {
            paintHistoryStep--;
            restorePaintState();
        }
    }

    function redoPaint() {
        if (paintHistoryStep < paintHistory.length - 1) {
            paintHistoryStep++;
            restorePaintState();
        }
    }

    function restorePaintState() {
        const img = new Image();
        img.src = paintHistory[paintHistoryStep];
        img.onload = () => {
            pCtx.clearRect(0,0,paintCanvas.width, paintCanvas.height);
            pCtx.drawImage(img, 0, 0);
        };
    }

    document.getElementById('tool-undo').addEventListener('click', undoPaint);
    document.getElementById('tool-redo').addEventListener('click', redoPaint);

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
    document.getElementById('paint-clear-btn').addEventListener('click', () => { 
        pCtx.clearRect(0,0,paintCanvas.width, paintCanvas.height);
        savePaintState();
    });

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
        savePaintState();
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
    const endDraw = () => { 
        if (isDrawing) {
            isDrawing = false; 
            pCtx.beginPath();
            savePaintState();
        }
    };
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
    paintCanvas.addEventListener('mouseleave', endDraw);
    paintCanvas.addEventListener('touchstart', startDraw);
    paintCanvas.addEventListener('touchend', endDraw);
    paintCanvas.addEventListener('touchcancel', endDraw);
    paintCanvas.addEventListener('touchmove', drawLine, {passive: false});

    drawBtn.addEventListener('click', () => { 
        paintingForTarget = 'scenario';
        pCtx.clearRect(0,0,paintCanvas.width, paintCanvas.height);
        pCtx.globalCompositeOperation = 'source-over';
        paintHistory = []; paintHistoryStep = -1;
        savePaintState();
        paintModal.classList.add('active'); 
    });
    
    addSpriteDrawBtn.addEventListener('click', () => {
        paintingForTarget = 'sprite';
        pCtx.clearRect(0,0,paintCanvas.width, paintCanvas.height);
        pCtx.globalCompositeOperation = 'source-over';
        paintHistory = []; paintHistoryStep = -1;
        savePaintState();
        paintModal.classList.add('active');
    });

    closePaintBtn.addEventListener('click', () => { paintModal.classList.remove('active'); });
    
    savePaintBtn.addEventListener('click', () => {
        const dataUrl = paintCanvas.toDataURL('image/png');
        if (paintingForTarget === 'scenario') {
            customAssets['CUSTOM1'] = dataUrl;
            localStorage.setItem('create_assets', JSON.stringify(customAssets));
            if (!customImages['CUSTOM1']) {
                customImages['CUSTOM1'] = new Image();
                customImages['CUSTOM1'].onload = () => { if (!gameState.isRunning) draw(); };
            }
            customImages['CUSTOM1'].src = dataUrl;
        } else if (paintingForTarget === 'sprite') {
            const newSprite = createDefaultSprite(`Sprite ${getSprites().length + 1}`, false, dataUrl);
            getSprites().push(newSprite);
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
            getSprites().push(newSprite);
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
        getSprites().forEach(sprite => {
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
                
                if (currentSpriteId === sprite.id) {
                    currentSpriteId = null;
                    if (workspace) workspace.clear();
                }

                setSprites(getSprites().filter(s => s.id !== sprite.id));
                
                renderSprites();
                
                if (!currentSpriteId && getSprites().length > 0) {
                    selectSprite(getSprites()[0].id);
                }
                stopGame(); 
            };

            card.querySelector('.duplicate-sprite-btn').onclick = (e) => {
                e.stopPropagation();
                const newSprite = createDefaultSprite(sprite.name + ' Copy', false, sprite.src, sprite);
                newSprite.x += 20; newSprite.y += 20; // Offset copy
                getSprites().push(newSprite);
                renderSprites();
                selectSprite(newSprite.id);
                stopGame();
            };

            spritesList.appendChild(card);
        });
    }

    function renderPhases() {
        if (!currentProject.phases) currentProject.phases = [1, 2, 3];
        if (!currentProject.currentPhase) currentProject.currentPhase = 1;
        
        // Clear all except add button
        Array.from(phaseSelector.children).forEach(child => {
            if (child !== addPhaseBtn) child.remove();
        });
        
        currentProject.phases.forEach(p => {
            const btn = document.createElement('button');
            btn.className = `phase-btn ${currentProject.currentPhase == p ? 'active' : ''}`;
            btn.dataset.phase = p;
            btn.textContent = `Fase ${p}`;
            btn.onclick = () => { if (currentSpriteId && workspace) { const currentSprite = getSprites().find(s => s.id === currentSpriteId); if (currentSprite) currentSprite.codeData = Blockly.serialization.workspaces.save(workspace); } GameAPI.switchPhase(p.toString()); renderPhases(); };
            phaseSelector.insertBefore(btn, addPhaseBtn);
        });
    }

    addPhaseBtn.addEventListener('click', () => { if (!currentProject.phases) currentProject.phases = [1, 2, 3]; const nextPhase = currentProject.phases.length > 0 ? Math.max(...currentProject.phases) + 1 : 1; currentProject.phases.push(nextPhase); if (currentSpriteId && workspace) { const currentSprite = getSprites().find(s => s.id === currentSpriteId); if (currentSprite) currentSprite.codeData = Blockly.serialization.workspaces.save(workspace); } GameAPI.switchPhase(nextPhase.toString()); renderPhases(); });

    function updatePropertiesPanel() {
        const sprite = getSprites().find(s => s.id === currentSpriteId);
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
        const sprite = getSprites().find(s => s.id === currentSpriteId);
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

    function loadWorkspaceData(data, ws) {
        if (!data) return;
        try {
            if (typeof data === 'string') {
                const dom = Blockly.utils.xml.textToDom(data);
                Blockly.Xml.domToWorkspace(dom, ws);
            } else {
                Blockly.serialization.workspaces.load(data, ws);
            }
        } catch (e) {
            console.error("Error loading workspace:", e);
        }
    }

    function selectSprite(id) {
        if (!id) {
            if (workspace) workspace.clear();
            currentSpriteId = null;
            updatePropertiesPanel();
            return;
        }

        if (currentSpriteId && workspace) {
            const currentSprite = getSprites().find(s => s.id === currentSpriteId);
            if (currentSprite) {
                currentSprite.codeData = Blockly.serialization.workspaces.save(workspace);
            }
        }

        currentSpriteId = id;
        renderSprites();
        updatePropertiesPanel();

        const newSprite = getSprites().find(s => s.id === id);
        if (workspace && newSprite) {
            workspace.clear();
            loadWorkspaceData(newSprite.codeData, workspace);
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
        keyCallbacks: {},
        collisionCallbacks: { 'BARRIER': [], 'EDGE': [] },
        mapWidth: 480, mapHeight: 360, cameraX: 0, cameraY: 0, cameraTargetName: null,
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
        pointDirection: function(objId, dir) {
            if(gameState.objects[objId]) { gameState.objects[objId].direction = parseInt(dir); }
        },
        changeX: function(objId, delta) {
            if(gameState.objects[objId]) { gameState.objects[objId].x += delta; }
        },
        changeY: function(objId, delta) {
            if(gameState.objects[objId]) { gameState.objects[objId].y += delta; }
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
        waitForCollision: async function(objId, type) {
            return new Promise(resolve => {
                const cb = () => {
                    gameState.collisionCallbacks[type] = gameState.collisionCallbacks[type].filter(item => item.cb !== cb);
                    resolve();
                };
                if (!gameState.collisionCallbacks[type]) gameState.collisionCallbacks[type] = [];
                gameState.collisionCallbacks[type].push({objId, cb});
            });
        },
        jump: function(objId) {
            const obj = gameState.objects[objId];
            if (obj) {
                obj.hasGravity = true;
                if (obj.isGrounded) {
                    obj.vy = obj.jumpPower;
                    obj.isGrounded = false;
                }
            }
        },
        switchPhase: function(phase) {
            const scenarios = ['GRASSLAND', 'CITY', 'SPACE', 'CUSTOM1'];
            const pNum = parseInt(phase) || 1;
            
            // Update UI selector
            if (phaseSelector) {
                document.querySelectorAll('.phase-btn').forEach(b => {
                    b.classList.toggle('active', b.dataset.phase === String(phase));
                });
            }
            
            if (gameState.isRunning) {
                gameState.isRunning = false; // Kill current loops
                if (animationFrameId) cancelAnimationFrame(animationFrameId);
                currentProject.currentPhase = pNum;
                setTimeout(() => {
                    executeCode();
                    gameState.scenario = scenarios[(pNum - 1) % scenarios.length];
                    if (gameState.phaseCallbacks && gameState.phaseCallbacks[phase]) {
                        gameState.phaseCallbacks[phase].forEach(cbData => cbData.cb());
                    }
                }, 50);
            } else {
                gameState.scenario = scenarios[(pNum - 1) % scenarios.length];
                currentProject.currentPhase = pNum;
                currentSpriteId = null;
                if (getSprites().length > 0) selectSprite(getSprites()[0].id);
                else {
                    if (workspace) workspace.clear();
                    updatePropertiesPanel();
                }
                renderSprites();
                stopGame(); // Update preview canvas
            }
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
            const target = String(targetName).trim().toLowerCase();
            
            let possibleMatches = [];
            for (const key in gameState.objects) {
                if (key === objId) continue;
                const other = gameState.objects[key];
                if (!other.visible) continue;
                
                const name = String(other.sprite.name).trim().toLowerCase();
                if (name === target || name.includes(target) || target.includes(name)) {
                    possibleMatches.push(other);
                }
            }

            // Fallback: If no exact match, consider ALL other objects as possible matches!
            if (possibleMatches.length === 0) {
                possibleMatches = Object.keys(gameState.objects)
                    .filter(k => k !== objId && gameState.objects[k].visible)
                    .map(k => gameState.objects[k]);
            }
            
            for (const matchedOther of possibleMatches) {
                const ow = 50 * (matchedOther.size / 100); const oh = 50 * (matchedOther.size / 100);
                if (Math.abs(obj.x - matchedOther.x) < (w + ow) / 2 && Math.abs(obj.y - matchedOther.y) < (h + oh) / 2) {
                    return true;
                }
            }
            return false;
        },
        setSize: function(objId, size) { if (gameState.objects[objId]) gameState.objects[objId].size = size; },
        changeSize: function(objId, delta) { if (gameState.objects[objId]) gameState.objects[objId].size += delta; },
        say: function(objId, text, time) {
            const obj = gameState.objects[objId];
            if (!obj) return;
            obj.sayText = text;
            if (obj.sayTimeout) clearTimeout(obj.sayTimeout);
            obj.sayTimeout = setTimeout(() => { if(gameState.objects[objId]) gameState.objects[objId].sayText = null; }, time * 1000);
        },
        glide: async function(objId, secs, targetX, targetY) {
            const obj = gameState.objects[objId];
            if (!obj) return;
            const startX = obj.x; const startY = obj.y;
            const frames = Math.max(1, secs * 60);
            for (let i = 1; i <= frames; i++) {
                if (!gameState.isRunning) break;
                obj.x = startX + (targetX - startX) * (i / frames);
                obj.y = startY + (targetY - startY) * (i / frames);
                await new Promise(r => setTimeout(r, 16));
            }
        },
                setMapSize: function(w, h) { gameState.mapWidth = Math.max(480, w); gameState.mapHeight = Math.max(360, h); },
        cameraFollow: function(targetName) { gameState.cameraTargetName = String(targetName).trim().toLowerCase(); },
        bounceEdge: function(objId) {
            const obj = gameState.objects[objId];
            if (!obj) return;
            const w = 50 * (obj.size / 100); const h = 50 * (obj.size / 100);
            let bounced = false;
            if (obj.x <= w/2) { obj.x = w/2; obj.direction = 180 - obj.direction; bounced = true; }
            else if (obj.x >= gameState.mapWidth - w/2) { obj.x = gameState.mapWidth - w/2; obj.direction = 180 - obj.direction; bounced = true; }
            if (obj.y <= h/2) { obj.y = h/2; obj.direction = 360 - obj.direction; bounced = true; }
            else if (obj.y >= gameState.mapHeight - h/2) { obj.y = gameState.mapHeight - h/2; obj.direction = 360 - obj.direction; bounced = true; }
            if (bounced) obj.direction = (obj.direction % 360 + 360) % 360;
        },
        distanceTo: function(objId, targetName) {
            const obj = gameState.objects[objId];
            if (!obj) return 9999;
            const target = String(targetName).trim().toLowerCase();
            let possibleMatches = [];
            for (const key in gameState.objects) {
                if (key === objId) continue;
                const other = gameState.objects[key];
                if (!other.visible) continue;
                const name = String(other.sprite.name).trim().toLowerCase();
                if (name === target || name.includes(target) || target.includes(name)) {
                    possibleMatches.push(other);
                }
            }
            if (possibleMatches.length === 0) {
                possibleMatches = Object.keys(gameState.objects)
                    .filter(k => k !== objId && gameState.objects[k].visible)
                    .map(k => gameState.objects[k]);
            }
            let minDist = 9999;
            for (const matchedOther of possibleMatches) {
                const dx = obj.x - matchedOther.x; const dy = obj.y - matchedOther.y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                if (dist < minDist) minDist = dist;
            }
            return minDist;
        },
        waitForObjectTouch: async function(objId, targetName) {
            return new Promise(resolve => {
                const check = () => {
                    if (!gameState.isRunning) return;
                    if (GameAPI.isTouching(objId, targetName)) {
                        resolve();
                    } else {
                        requestAnimationFrame(check);
                    }
                };
                check();
            });
        },
        onCollision: function(objId, type, cb) { 
            if (gameState.collisionCallbacks[type]) gameState.collisionCallbacks[type].push({objId, cb}); 
        },
        onKey: function(objId, key, cb) {
            const lowerKey = key.toLowerCase();
            if (!gameState.keyCallbacks[lowerKey]) gameState.keyCallbacks[lowerKey] = [];
            gameState.keyCallbacks[lowerKey].push({objId, cb});
        },
        onClick: function(objId, cb) {
            if (!gameState.clickCallbacks[objId]) gameState.clickCallbacks[objId] = [];
            gameState.clickCallbacks[objId].push(cb);
        },
        onPhase: function(phase, cb) {
            if (!gameState.phaseCallbacks[phase]) gameState.phaseCallbacks[phase] = [];
            gameState.phaseCallbacks[phase].push({cb});
        },
        update: function() {
            // Check touch callbacks
            if (gameState.touchCallbacks) {
                const now = Date.now();
                gameState.touchCallbacks.forEach(item => {
                    if (now - item.lastTrigger > 1000) { // 1s cooldown
                        if (GameAPI.isTouching(item.objId, item.targetName)) {
                            item.lastTrigger = now;
                            item.cb();
                        }
                    }
                });
            }
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
        GameAPI.update();

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
            if (obj.x > gameState.mapWidth - w/2) { obj.x = gameState.mapWidth - w/2; triggerCollision(key, 'EDGE'); }

            // --- Y Movement ---
            if (obj.hasJump || obj.hasGravity) {
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
            if (!obj.hasJump && !obj.hasGravity) {
                if (obj.y < h/2) { obj.y = h/2; triggerCollision(key, 'EDGE'); }
                if (obj.y > gameState.mapHeight - h/2) { obj.y = gameState.mapHeight - h/2; triggerCollision(key, 'EDGE'); }
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
        
        if (gameState.cameraTargetName) {
            const tName = gameState.cameraTargetName;
            for (const key in gameState.objects) {
                const obj = gameState.objects[key];
                if (String(obj.sprite.name).trim().toLowerCase() === tName) {
                    gameState.cameraX = obj.x - canvas.width / 2;
                    gameState.cameraY = obj.y - canvas.height / 2;
                    break;
                }
            }
        }
        const maxCamX = Math.max(0, gameState.mapWidth - canvas.width);
        const maxCamY = Math.max(0, gameState.mapHeight - canvas.height);
        if (gameState.cameraX < 0) gameState.cameraX = 0;
        if (gameState.cameraX > maxCamX) gameState.cameraX = maxCamX;
        if (gameState.cameraY < 0) gameState.cameraY = 0;
        if (gameState.cameraY > maxCamY) gameState.cameraY = maxCamY;
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        
        ctx.translate(-gameState.cameraX, -gameState.cameraY);
        
        if (gameState.scenario === 'GRASSLAND') {
            let sky = ctx.createLinearGradient(0, 0, 0, gameState.mapHeight - 160);
            sky.addColorStop(0, '#87CEEB'); sky.addColorStop(1, '#E0F6FF');
            ctx.fillStyle = sky; ctx.fillRect(0, 0, gameState.mapWidth, gameState.mapHeight);
            let ground = ctx.createLinearGradient(0, gameState.mapHeight - 100, 0, gameState.mapHeight);
            ground.addColorStop(0, '#34a853'); ground.addColorStop(0.2, '#2d9147');
            ground.addColorStop(0.3, '#795548'); ground.addColorStop(1, '#5d4037');
            ctx.fillStyle = ground; ctx.fillRect(0, gameState.mapHeight - 100, gameState.mapWidth, 100);
        } else if (gameState.scenario === 'CITY') {
            let sky = ctx.createLinearGradient(0, 0, 0, gameState.mapHeight - 100);
            sky.addColorStop(0, '#1a1a2e'); sky.addColorStop(1, '#16213e');
            ctx.fillStyle = sky; ctx.fillRect(0, 0, gameState.mapWidth, gameState.mapHeight);
            
            ctx.fillStyle = '#0f3460'; ctx.fillRect(0, gameState.mapHeight - 100, gameState.mapWidth, 100);
            
            for(let bx=0; bx<gameState.mapWidth; bx+=400) {
                ctx.fillStyle = '#111'; ctx.fillRect(bx+20, gameState.mapHeight-260, 60, 260);
                ctx.fillStyle = '#1a1a1a'; ctx.fillRect(bx+100, gameState.mapHeight-310, 80, 310);
                ctx.fillStyle = '#0f0f0f'; ctx.fillRect(bx+220, gameState.mapHeight-240, 70, 240);
                ctx.fillStyle = '#141414'; ctx.fillRect(bx+320, gameState.mapHeight-280, 90, 280);

                ctx.fillStyle = '#e94560'; ctx.fillRect(bx+110, gameState.mapHeight-280, 60, 40); 
                ctx.fillStyle = '#00d2d3'; ctx.fillRect(bx+330, gameState.mapHeight-260, 70, 50); 
                
                ctx.fillStyle = '#ff4757'; ctx.fillRect(bx+50, gameState.mapHeight-60, 40, 20);
                ctx.fillStyle = '#fff'; ctx.fillRect(bx+80, gameState.mapHeight-55, 10, 10);
                ctx.fillStyle = '#222'; ctx.beginPath(); ctx.arc(bx+60, gameState.mapHeight-40, 8, 0, Math.PI*2); ctx.fill();
                ctx.beginPath(); ctx.arc(bx+80, gameState.mapHeight-40, 8, 0, Math.PI*2); ctx.fill();

                ctx.fillStyle = '#1e90ff'; ctx.fillRect(bx+250, gameState.mapHeight-40, 50, 25);
                ctx.fillStyle = '#fff'; ctx.fillRect(bx+250, gameState.mapHeight-35, 10, 10);
                ctx.fillStyle = '#222'; ctx.beginPath(); ctx.arc(bx+265, gameState.mapHeight-15, 10, 0, Math.PI*2); ctx.fill();
                ctx.beginPath(); ctx.arc(bx+290, gameState.mapHeight-15, 10, 0, Math.PI*2); ctx.fill();
            }
        } else if (gameState.scenario === 'SPACE') {
            ctx.fillStyle = '#0b0c10'; ctx.fillRect(0, 0, gameState.mapWidth, gameState.mapHeight);
            ctx.fillStyle = '#c5c6c7';
            for(let i=0; i< (gameState.mapWidth/10); i++) {
                ctx.beginPath();
                ctx.arc((i * 137) % gameState.mapWidth, (i * 97) % gameState.mapHeight, (i%3), 0, Math.PI*2);
                ctx.fill();
            }
            let planet1 = ctx.createRadialGradient(100, 100, 10, 100, 100, 50);
            planet1.addColorStop(0, '#ff7e67'); planet1.addColorStop(1, '#512b58');
            ctx.fillStyle = planet1; ctx.beginPath(); ctx.arc(100, 100, 50, 0, Math.PI*2); ctx.fill();
            
            let planet2 = ctx.createRadialGradient(380, 250, 20, 380, 250, 80);
            planet2.addColorStop(0, '#66fcf1'); planet2.addColorStop(1, '#1f2833');
            ctx.fillStyle = planet2; ctx.beginPath(); ctx.arc(380, 250, 80, 0, Math.PI*2); ctx.fill();
        } else if (gameState.scenario === 'CUSTOM1' && customImages['CUSTOM1']) {
            const ptrn = ctx.createPattern(customImages['CUSTOM1'], 'repeat');
            ctx.fillStyle = ptrn;
            ctx.fillRect(0, 0, gameState.mapWidth, gameState.mapHeight);
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
            
            if (obj.sayText) {
                ctx.fillStyle = 'white';
                ctx.strokeStyle = '#333';
                ctx.lineWidth = 2;
                ctx.beginPath();
                const textWidth = ctx.measureText(obj.sayText).width;
                const bubbleWidth = Math.max(60, textWidth + 20);
                ctx.roundRect(obj.x - bubbleWidth/2, obj.y - 80, bubbleWidth, 30, 8);
                ctx.fill();
                ctx.stroke();
                
                ctx.fillStyle = 'black';
                ctx.font = '14px Nunito, sans-serif';
                ctx.fillText(obj.sayText, obj.x - textWidth/2, obj.y - 60);
            }
            
            if (!gameState.isRunning && currentSpriteId === obj.sprite.id) {
                ctx.strokeStyle = '#4285f4';
                ctx.lineWidth = 2;
                ctx.strokeRect(obj.x - 28 * (obj.size/100), obj.y - 28 * (obj.size/100), 56 * (obj.size/100), 56 * (obj.size/100));
            }
        }
        ctx.restore();
    }

    function loop() {
        if (!gameState.isRunning) return;
        update(); draw();
        animationFrameId = requestAnimationFrame(loop);
    }

    async function executeCode() {
        gameState.isRunning = true;
        gameState.objects = {};
        gameState.scenario = 'GRASSLAND';
        gameState.mapWidth = 480; gameState.mapHeight = 360; gameState.cameraX = 0; gameState.cameraY = 0; gameState.cameraTargetName = null;
        gameState.joystickEnabled = false; gameState.jumpEnabled = false;
        gameState.collisionCallbacks = { 'BARRIER': [], 'EDGE': [] };
        gameState.keyCallbacks = {};
        gameState.clickCallbacks = {};
        gameState.phaseCallbacks = { '1': [], '2': [], '3': [], '4': [], '5': [], '6': [], '7': [], '8': [], '9': [], '10': [] };
        gameState.touchCallbacks = [];
        joystickOverlay.style.display = 'none'; jumpBtnOverlay.style.display = 'none';

        getSprites().forEach(sprite => {
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
            const currentSprite = getSprites().find(s => s.id === currentSpriteId);
            if (currentSprite) currentSprite.codeData = Blockly.serialization.workspaces.save(workspace);
        }

        getSprites().forEach(sprite => {
            if (!sprite.codeData) return;
            const headless = new Blockly.Workspace();
            loadWorkspaceData(sprite.codeData, headless);
            
            const topBlocks = headless.getTopBlocks(true);
            let setupCode = '';
            for (let block of topBlocks) {
                let blockCode = '';
                if (block.type === 'event_when_play_clicked') {
                    let nextBlock = block.getNextBlock();
                    if (nextBlock) { blockCode = jsGen.blockToCode(nextBlock); }
                } else if (block.type === 'event_always') {
                    blockCode = jsGen.blockToCode(block);
                } else if (block.type === 'event_when_clicked') {
                    let nextBlock = block.getNextBlock();
                    let innerCode = nextBlock ? jsGen.blockToCode(nextBlock) : '';
                    setupCode += `GameAPI.onClick(__objId, async function() {\n${innerCode}});\n`;
                } else if (block.type === 'event_when_touching_object') {
                    let innerCode = jsGen.statementToCode(block, 'DO') || '';
                    let tName = block.getFieldValue('OBJ_NAME');
                    setupCode += `
                        if (!gameState.touchCallbacks) gameState.touchCallbacks = [];
                        gameState.touchCallbacks.push({
                            objId: __objId, 
                            targetName: '${tName}', 
                            cb: async function() { ${innerCode} }, 
                            lastTrigger: 0
                        });\n`;
                } else if (block.type === 'event_when_phase') {
                    let nextBlock = block.getNextBlock();
                    let innerCode = nextBlock ? jsGen.blockToCode(nextBlock) : '';
                    setupCode += `GameAPI.onPhase('${block.getFieldValue('PHASE')}', async function() {\n${innerCode}});\n`;
                } else if (block.type === 'event_when_key') {
                    let nextBlock = block.getNextBlock();
                    let innerCode = nextBlock ? jsGen.blockToCode(nextBlock) : '';
                    setupCode += `GameAPI.onKey(__objId, '${block.getFieldValue('KEY')}', async function() {\n${innerCode}});\n`;
                } else if (block.type === 'sensing_touching' || block.type === 'event_on_collision') {
                    blockCode = `while(gameState.isRunning) { ${jsGen.blockToCode(block)} await new Promise(r => setTimeout(r, 16)); }\n`;
                }
                
                if (blockCode) {
                    setupCode += `(async function() { try { \n${blockCode}\n } catch(e) { console.error(e); } })();\n`;
                }
            }
            
            const finalCode = `(async function(__objId) { try { ${setupCode} } catch(e) { console.error(e); } })('${sprite.id}');`;
            try { eval(finalCode); } catch (e) { console.error(e); }
            
            headless.dispose();
        });
        
        for (const key in gameState.objects) {
            if (gameState.objects[key].hasJump) gameState.objects[key].y = gameState.mapHeight - 80;
        }

        if (gameState.isRunning) {
            loop();
        }
    }

    // --- Interactive Stage (Dragging in Edit Mode & Clicking in Play Mode) ---
    let isDraggingSprite = false;
    canvas.addEventListener('mousedown', (e) => {
        const pos = getMousePos(canvas, e);
        const spritesRev = [...getSprites()].reverse();
        
        if (gameState.isRunning) {
            const clicked = spritesRev.find(s => {
                const obj = gameState.objects[s.id];
                if (!obj || !obj.visible) return false;
                const sizePx = 50 * (obj.size / 100);
                return pos.x >= obj.x - sizePx/2 && pos.x <= obj.x + sizePx/2 &&
                       pos.y >= obj.y - sizePx/2 && pos.y <= obj.y + sizePx/2;
            });
            if (clicked && gameState.clickCallbacks && gameState.clickCallbacks[clicked.id]) {
                gameState.clickCallbacks[clicked.id].forEach(cb => cb());
            }
            return;
        }

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
        const sprite = getSprites().find(s => s.id === currentSpriteId);
        if (sprite) {
            sprite.x = pos.x; sprite.y = pos.y;
            updatePropertiesPanel();
            stopGame(); // redraws preview
        }
    });
    canvas.addEventListener('mouseup', () => isDraggingSprite = false);
    canvas.addEventListener('mouseleave', () => isDraggingSprite = false);


    // --- Input & Touch ---
    window.addEventListener('keydown', (e) => { 
        if (!gameState.keys[e.key]) {
            gameState.keys[e.key] = true; 
            if (gameState.isRunning) {
                const lowerKey = e.key.toLowerCase();
                if (gameState.keyCallbacks[lowerKey]) {
                    gameState.keyCallbacks[lowerKey].forEach(cbData => cbData.cb());
                } else if (gameState.keyCallbacks[e.key]) {
                    gameState.keyCallbacks[e.key].forEach(cbData => cbData.cb());
                }
            }
        }
    });
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
    
    // Joystick touch and mouse logic
    joystickOverlay.addEventListener('mousedown', (e) => { isDraggingJoystick = true; const r = joystickOverlay.getBoundingClientRect(); baseRect.x = r.left; baseRect.y = r.top; handleJoystickMove(e.clientX, e.clientY); });
    window.addEventListener('mousemove', (e) => handleJoystickMove(e.clientX, e.clientY));
    window.addEventListener('mouseup', () => { isDraggingJoystick = false; joystickStick.style.transform = `translate(0,0)`; gameState.joystick = { x: 0, y: 0 }; });
    joystickOverlay.addEventListener('touchstart', (e) => { isDraggingJoystick = true; const r = joystickOverlay.getBoundingClientRect(); baseRect.x = r.left; baseRect.y = r.top; handleJoystickMove(e.touches[0].clientX, e.touches[0].clientY); });
    window.addEventListener('touchmove', (e) => { if(isDraggingJoystick) e.preventDefault(); handleJoystickMove(e.touches[0].clientX, e.touches[0].clientY); }, {passive: false});
    window.addEventListener('touchend', () => { isDraggingJoystick = false; joystickStick.style.transform = `translate(0,0)`; gameState.joystick = { x: 0, y: 0 }; });

    // Handle touch for clicking sprites during gameplay
    canvas.addEventListener('touchstart', (e) => {
        if (!gameState.isRunning) return;
        e.preventDefault();
        const pos = getMousePos(canvas, e.touches[0]);
        const spritesRev = [...getSprites()].reverse();
        
        const clicked = spritesRev.find(s => {
            const obj = gameState.objects[s.id];
            if (!obj || !obj.visible) return false;
            const sizePx = 50 * (obj.size / 100);
            return pos.x >= obj.x - sizePx/2 && pos.x <= obj.x + sizePx/2 &&
                   pos.y >= obj.y - sizePx/2 && pos.y <= obj.y + sizePx/2;
        });
        if (clicked && gameState.clickCallbacks && gameState.clickCallbacks[clicked.id]) {
            gameState.clickCallbacks[clicked.id].forEach(cb => cb());
        }
    }, {passive: false});

    // --- Core Navigation ---
    function showView(viewId) {
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.getElementById(viewId).classList.add('active');
        if (viewId === 'editor-view') {
            if (!workspace) { defineBlocks(); initBlockly(); }
            
            renderSprites();
            renderPhases();
            if (!currentSpriteId && getSprites() && getSprites().length > 0) {
                selectSprite(getSprites()[0].id);
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
            phaseData: { '1': { sprites: [createDefaultSprite('Mascot', true)] } },
            currentPhase: 1
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
            const currentSprite = getSprites().find(s => s.id === currentSpriteId);
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
            
            // getSprites() will automatically handle migrating old currentProject.sprites to phaseData
            if (getSprites().length === 0) {
                setSprites([createDefaultSprite('Mascot', true)]);
                getSprites()[0].codeData = currentProject.data;
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
        
        gameState.objects = {}; // Clear old objects
        
        if (currentProject && getSprites()) {
            getSprites().forEach(sprite => {
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

    // --- Testing Exports ---
    window.GameAPI = GameAPI;
    window.gameState = gameState;
});




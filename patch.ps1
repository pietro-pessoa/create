$content = Get-Content 'c:\Users\pietr\create\main.js' -Raw

# 1. Update defineBlocks JSON array
$newBlocks = @"
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
                "message0": "Câmera acompanhar objeto %1",
                "args0": [{ "type": "input_value", "name": "OBJ_NAME", "check": "String" }],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 120
            },
            {
                "type": "game_bounce_edge",
"@
$content = $content -replace '\{\s*"type":\s*"game_bounce_edge",', $newBlocks

# 2. Update Toolbox xml
$newToolbox = @"
                <block type="game_set_map_size">
                    <value name="WIDTH"><shadow type="math_number"><field name="NUM">1000</field></shadow></value>
                    <value name="HEIGHT"><shadow type="math_number"><field name="NUM">1000</field></shadow></value>
                </block>
                <block type="game_camera_follow">
                    <value name="OBJ_NAME"><shadow type="text"><field name="TEXT">Mascot</field></shadow></value>
                </block>
                <block type="game_bounce_edge"></block>
"@
$content = $content -replace '<block type="game_bounce_edge"></block>', $newToolbox

# 3. Update Generators
$newGenerators = @"
    jsGen.forBlock['game_set_map_size'] = (block, generator) => `GameAPI.setMapSize(${generator.valueToCode(block, 'WIDTH', javascript.Order.ATOMIC) || '480'}, ${generator.valueToCode(block, 'HEIGHT', javascript.Order.ATOMIC) || '360'});\n`;
    jsGen.forBlock['game_camera_follow'] = (block, generator) => `GameAPI.cameraFollow(${generator.valueToCode(block, 'OBJ_NAME', javascript.Order.ATOMIC) || "''"});\n`;
    jsGen.forBlock['game_bounce_edge'] = () => `GameAPI.bounceEdge(__objId);\n`;
"@
$content = $content -replace "jsGen\.forBlock\['game_bounce_edge'\] = \(\) => \`GameAPI\.bounceEdge\(__objId\);\\n\`;", $newGenerators

# 4. Update GameAPI
$newApi = @"
        setMapSize: function(w, h) { gameState.mapWidth = Math.max(480, w); gameState.mapHeight = Math.max(360, h); },
        cameraFollow: function(targetName) { gameState.cameraTargetName = String(targetName).trim().toLowerCase(); },
        bounceEdge: function(objId)
"@
$content = $content -replace "bounceEdge: function\(objId\)", $newApi

# 5. Update GameAPI bounce edge logic
$content = $content -replace 'canvas\.width - w/2', 'gameState.mapWidth - w/2'
$content = $content -replace 'canvas\.height - h/2', 'gameState.mapHeight - h/2'

# 6. Update gameState initial value
$oldState = "collisionCallbacks: \{ 'BARRIER': \[\], 'EDGE': \[\] \},"
$newState = "collisionCallbacks: { 'BARRIER': [], 'EDGE': [] },`n        mapWidth: 480, mapHeight: 360, cameraX: 0, cameraY: 0, cameraTargetName: null,"
$content = $content -replace $oldState, $newState

# 7. Update executeCode
$oldExec = "gameState\.scenario = 'GRASSLAND';"
$newExec = "gameState.scenario = 'GRASSLAND';`n        gameState.mapWidth = 480; gameState.mapHeight = 360; gameState.cameraX = 0; gameState.cameraY = 0; gameState.cameraTargetName = null;"
$content = $content -replace $oldExec, $newExec

$content = $content -replace 'gameState\.objects\[key\]\.y = 280;', 'gameState.objects[key].y = gameState.mapHeight - 80;'

# 8. Update getSprites to default mascot
$oldGetSprites = "currentProject\.phaseData\[phase\] = \{ sprites: \[\] \};"
$newGetSprites = "currentProject.phaseData[phase] = { sprites: [createDefaultSprite('Mascot', true)] };"
$content = $content -replace $oldGetSprites, $newGetSprites

Set-Content -Path 'c:\Users\pietr\create\main.js' -Value $content

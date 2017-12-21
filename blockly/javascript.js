Blockly.JavaScript['digitalpin_new'] = function(block) {
    var dropdown_pin = block.getFieldValue('pin');
    var code = 'getDigitalPin(board,"' + dropdown_pin + '")';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['digitalpin_read'] = function(block) {
    var variable_pin = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    var statements_callback = Blockly.JavaScript.statementToCode(block, 'callback');
    var code = variable_pin + '.read(';
    code += "function(){\n" + statements_callback + "});\n";
    return code;
};

Blockly.JavaScript['digitalpin_val'] = function(block) {
  var variable_pin = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
  var code = variable_pin+'.val';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
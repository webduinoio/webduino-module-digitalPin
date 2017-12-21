//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#5d298w
Blockly.Blocks['digitalpin_new'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("狀態偵測，數位腳位")
            .appendField(new Blockly.FieldDropdown([
                ["11", "11"],
                ["12", "12"],
                ["13", "13"]
            ]), "pin");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#y5wzy8
Blockly.Blocks['digitalpin_read'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("數位腳")
            .appendField(new Blockly.FieldVariable("pin"), "pin")
            .appendField("開始偵測");
        this.appendStatementInput("callback")
            .setCheck(null)
            .appendField("執行");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(45);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#c77fce
Blockly.Blocks['digitalpin_val'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("pin"), "pin")
        .appendField("數位腳狀態");
    this.setOutput(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
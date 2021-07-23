Blockly.Blocks["xbot_lcd_1602_create"] = {
  init: function () {
    this.jsonInit({
      colour: "#ff3399",
      tooltip: "",
      message0: "%2 tạo màn hình LCD 1602 cổng %1",
      args0: [
        {
          type: "field_dropdown",
          name: "port",
          options: [
            ["1", "0"],
            ["2", "1"],
            ["3", "2"],
            ["4", "3"],
            ["5", "4"],
            ["6", "5"],
          ],
        },
        {
          type: "field_image",
          src: "https://i.ibb.co/5vwqbzP/908387.png",
          width: 20,
          height: 20,
          alt: "*",
          flipRtl: false
        }
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  },
};

Blockly.Blocks["xbot_lcd_1602_backlight"] = {
  init: function () {
    this.jsonInit({
      colour: "#ff3399",
      tooltip: "",
      message0: "%2 %1 đèn LCD 1602",
      args0: [
        {
          type: "field_dropdown",
          name: "backlight",
          options: [
            ["bật", "on"],
            ["tắt", "off"],
          ],
        },
        {
          type: "field_image",
          src: "https://i.ibb.co/5vwqbzP/908387.png",
          width: 20,
          height: 20,
          alt: "*",
          flipRtl: false
        }
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  },
};

Blockly.Blocks["xbot_lcd_1602_display"] = {
  init: function () {
    this.jsonInit({
      colour: "#ff3399",
      tooltip: "",
      message0: "%5 LCD 1602 hiện %1 tại x %2 y %3 %4",
      args0: [
        {
          type: "input_value",
          name: "string",
          check: "String"
        },
        {
          type: "input_value",
          name: "X",
          check: "Number",
          min: 0,
          max: 16
        },
        {
          type: "input_value",
          name: "Y",
          check: "Number",
          min: 0,
          max: 2
        },
        {
          type: "input_dummy"
        },
        {
          type: "field_image",
          src: "https://i.ibb.co/5vwqbzP/908387.png",
          width: 20,
          height: 20,
          alt: "*",
          flipRtl: false
        }
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  },
};

Blockly.Blocks["xbot_lcd_1602_clear"] = {
  init: function () {
    this.jsonInit({
      colour: "#ff3399",
      tooltip: "",
      message0: "%1 xóa màn hình LCD",
      args0: [
        {
          type: "field_image",
          src: "https://i.ibb.co/5vwqbzP/908387.png",
          width: 20,
          height: 20,
          alt: "*",
          flipRtl: false
        }
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  },
};

Blockly.Python['xbot_lcd_1602_create'] = function(block) {
  var port = block.getFieldValue("port");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_lcd_1602'] = 'from lcd_1602 import LCD1602';
  // oled = SSD1306_I2C(oled_width, oled_height, i2c)
  var code = 'lcd1602 = LCD1602(' + port + ')\n';
  return code;
};

Blockly.Python['xbot_lcd_1602_backlight'] = function(block) {
  var backlight = block.getFieldValue("backlight");
  // TODO: Assemble Python into code variable.
  // oled = SSD1306_I2C(oled_width, oled_height, i2c)
  var code = 'lcd1602.backlight_' + backlight + '()\n';
  return code;
};

Blockly.Python["xbot_lcd_1602_display"] = function (block) {
  var string = Blockly.Python.valueToCode(block, 'string', Blockly.Python.ORDER_ATOMIC);
  var x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);  // TODO: Assemble Python into code variable.
  var code = "lcd1602.move_to(" + x + ", "+ y +")\n"+
  "lcd1602.putstr("+ string +")\n";
  return code;
};

Blockly.Python["xbot_lcd_1602_clear"] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = "lcd1602.clear()\n";
  return code;
};
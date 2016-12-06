"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Edit = function Edit(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M12.6 6.9l.5-.5c.8-.8.8-2 0-2.8l-.7-.7c-.8-.8-2-.8-2.8 0l-.5.5 3.5 3.5zM8.4 4.1L2 10.5V14h3.5l6.4-6.4" })
		)
	);
};

exports.default = Edit;
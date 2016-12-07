"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Heart = function Heart(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M8 13L2.9 8.2c-1.1-1.1-1.2-3-.2-4.2 1-1.2 2.8-1.3 4-.2L8 5l1.3-1.2c1.2-1.1 3-1 4 .2 1.1 1.2 1 3.1-.2 4.2L8 13z" })
		)
	);
};

exports.default = Heart;
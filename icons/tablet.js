"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tablet = function Tablet(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M12 0H4C2.9 0 2 .9 2 2v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM8.5 15h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c.3 0 .5.2.5.5s-.2.5-.5.5zm4-2h-9V2h9v11z" })
		)
	);
};

exports.default = Tablet;
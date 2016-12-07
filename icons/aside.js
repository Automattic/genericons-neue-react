"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Aside = function Aside(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M11 3H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h5l3-3V5c0-1.1-.9-2-2-2zm-1 5c-1.1 0-2 .9-2 2v1.5H5c-.3 0-.5-.2-.5-.5V5c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v3H10z" })
		)
	);
};

exports.default = Aside;
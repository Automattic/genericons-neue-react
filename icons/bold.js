"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bold = function Bold(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M12 5c0-1.7-1.4-3-3-3H4v12h5c1.6 0 3-1.3 3-3v-1c0-.8-.3-1.5-.8-2 .5-.5.8-1.2.8-2V5zM6 4h3c.5 0 1 .5 1 1v1c0 .5-.5 1-1 1H6V4zm4 7c0 .5-.5 1-1 1H6V9h3c.5 0 1 .5 1 1v1z" })
		)
	);
};

exports.default = Bold;
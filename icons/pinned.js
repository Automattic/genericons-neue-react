"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pinned = function Pinned(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M12 8c0-.5-.5-1-1-1h-.6l-.3-3c.5-.1.9-.5.9-1s-.5-1-1-1H6c-.5 0-1 .5-1 1s.4.9.9 1l-.3 3H5c-.5 0-1 .5-1 1v1h3v6l2-1V9h3V8z" })
		)
	);
};

exports.default = Pinned;
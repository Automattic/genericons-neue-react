"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Shuffle = function Shuffle(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M12 10h-.9c-.3 0-.6-.2-.8-.4L7.4 5.3C6.9 4.5 5.9 4 4.9 4H2v2h2.9c.3 0 .6.2.8.4l2.8 4.2c.6.8 1.5 1.3 2.5 1.3h1v1.5l2.5-2.5L12 8.5V10zm-1.8-3.6c.2-.2.5-.4.9-.4h.9v1.5L14.5 5 12 2.5V4h-.9c-1 0-1.9.5-2.5 1.3l1.2 1.8.4-.7zM5.8 9.6c-.2.2-.5.4-.9.4H2v2h2.9c1 0 1.9-.5 2.5-1.3L6.2 8.9l-.4.7z" })
		)
	);
};

exports.default = Shuffle;
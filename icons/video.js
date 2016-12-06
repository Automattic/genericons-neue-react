"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Video = function Video(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M12 4v1h-1V4H5v1H4V4H2v9h2v-1h1v1h6v-1h1v1h2V4h-2zm-7 7H4v-1h1v1zm0-2H4V8h1v1zm0-2H4V6h1v1zm7 4h-1v-1h1v1zm0-2h-1V8h1v1zm0-2h-1V6h1v1z" })
		)
	);
};

exports.default = Video;
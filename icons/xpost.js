"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Xpost = function Xpost(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M13 4c0-1.1-.9-2-2-2s-2 .9-2 2c0 .7.4 1.4 1 1.7V7c0 1.1-.9 2-2 2-.7 0-1.4.2-2 .6V5.7c.6-.3 1-1 1-1.7 0-1.1-.9-2-2-2s-2 .9-2 2c0 .7.4 1.4 1 1.7V14h2v-1c0-1.1.9-2 2-2 2.2 0 4-1.8 4-4V5.7c.6-.3 1-1 1-1.7zm-8-.8c.4 0 .8.3.8.8s-.4.8-.8.8-.8-.4-.8-.8.4-.8.8-.8zm6 1.6c-.4 0-.8-.3-.8-.8s.3-.8.8-.8.8.3.8.8-.4.8-.8.8z" })
		)
	);
};

exports.default = Xpost;
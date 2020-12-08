"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _link = _interopRequireDefault(require("next/link"));

var _react = require("react");

var _NavbarModule = _interopRequireDefault(require("../../styles/Navbar.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Navbar = function Navbar(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isMenuOpen = _useState2[0],
      setMenuOpen = _useState2[1];

  var handleMenuClick = function handleMenuClick(event) {
    if (event.target.checked) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: _NavbarModule["default"].nav
  }, /*#__PURE__*/React.createElement("div", {
    className: _NavbarModule["default"].navWrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: _NavbarModule["default"].navWrapperInner
  }, /*#__PURE__*/React.createElement("div", {
    className: _NavbarModule["default"].navLeftPart
  }, /*#__PURE__*/React.createElement("h1", {
    className: _NavbarModule["default"].navBrand
  }, " MyApp")), /*#__PURE__*/React.createElement("div", {
    className: _NavbarModule["default"].navRightPart
  }, /*#__PURE__*/React.createElement("input", {
    id: "toggler",
    className: _NavbarModule["default"].toggler,
    type: "checkbox",
    onChange: handleMenuClick
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "toggler",
    className: _NavbarModule["default"].burger
  }, isMenuOpen ? /*#__PURE__*/React.createElement("span", {
    className: _NavbarModule["default"].change
  }, /*#__PURE__*/React.createElement("div", {
    className: _NavbarModule["default"].bar1
  }), /*#__PURE__*/React.createElement("div", {
    className: _NavbarModule["default"].bar2
  }), /*#__PURE__*/React.createElement("div", {
    className: _NavbarModule["default"].bar3
  })) : /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
    className: _NavbarModule["default"].bar1
  }), /*#__PURE__*/React.createElement("div", {
    className: _NavbarModule["default"].bar2
  }), /*#__PURE__*/React.createElement("div", {
    className: _NavbarModule["default"].bar3
  }))), /*#__PURE__*/React.createElement("ul", {
    className: _NavbarModule["default"].navLinks
  }, /*#__PURE__*/React.createElement(_link["default"], {
    href: "/"
  }, /*#__PURE__*/React.createElement("a", null, "Home")), /*#__PURE__*/React.createElement(_link["default"], {
    href: "/about"
  }, /*#__PURE__*/React.createElement("a", null, "About")), /*#__PURE__*/React.createElement(_link["default"], {
    href: "/blog"
  }, /*#__PURE__*/React.createElement("a", null, "Blog")), /*#__PURE__*/React.createElement(_link["default"], {
    href: "/portfolio"
  }, /*#__PURE__*/React.createElement("a", null, "Portfolio")), /*#__PURE__*/React.createElement(_link["default"], {
    href: "/products"
  }, /*#__PURE__*/React.createElement("a", null, "Products")), /*#__PURE__*/React.createElement(_link["default"], {
    href: "/contact"
  }, /*#__PURE__*/React.createElement("a", null, "Contact"))))), isMenuOpen && /*#__PURE__*/React.createElement("div", {
    className: _NavbarModule["default"].toggleMenu
  }, /*#__PURE__*/React.createElement("ul", {
    className: _NavbarModule["default"].toggleNavLinks
  }, /*#__PURE__*/React.createElement("li", null, " ", /*#__PURE__*/React.createElement(_link["default"], {
    href: "/"
  }, /*#__PURE__*/React.createElement("a", null, "Home")), " "), /*#__PURE__*/React.createElement("li", null, " ", /*#__PURE__*/React.createElement(_link["default"], {
    href: "/about"
  }, /*#__PURE__*/React.createElement("a", null, "About")), " "), /*#__PURE__*/React.createElement("li", null, " ", /*#__PURE__*/React.createElement(_link["default"], {
    href: "/blog"
  }, /*#__PURE__*/React.createElement("a", null, "Blog")), " "), /*#__PURE__*/React.createElement("li", null, " ", /*#__PURE__*/React.createElement(_link["default"], {
    href: "/portfolio"
  }, /*#__PURE__*/React.createElement("a", null, "Portfolio")), " "), /*#__PURE__*/React.createElement("li", null, " ", /*#__PURE__*/React.createElement(_link["default"], {
    href: "/products"
  }, /*#__PURE__*/React.createElement("a", null, "Products")), " "), /*#__PURE__*/React.createElement("li", null, " ", /*#__PURE__*/React.createElement(_link["default"], {
    href: "/contact"
  }, /*#__PURE__*/React.createElement("a", null, "Contact")))))));
};

var _default = Navbar;
exports["default"] = _default;

//# sourceMappingURL=Navbar.js.map
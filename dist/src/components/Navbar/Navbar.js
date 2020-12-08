"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _link = _interopRequireDefault(require("next/link"));

var _react = _interopRequireWildcard(require("react"));

var _NavbarModule = _interopRequireDefault(require("./Navbar.module.css"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _NavbarModule["default"].nav
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _NavbarModule["default"].navWrapper
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _NavbarModule["default"].navWrapperInner
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _NavbarModule["default"].navLeftPart
  }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: _NavbarModule["default"].navBrand
  }, "Nexter"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: _NavbarModule["default"].navRightPart
  }, /*#__PURE__*/_react["default"].createElement("input", {
    id: "toggler",
    className: _NavbarModule["default"].toggler,
    type: "checkbox",
    onChange: handleMenuClick
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "toggler",
    className: _NavbarModule["default"].burger
  }, isMenuOpen ? /*#__PURE__*/_react["default"].createElement("span", {
    className: _NavbarModule["default"].change
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _NavbarModule["default"].bar1
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: _NavbarModule["default"].bar2
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: _NavbarModule["default"].bar3
  })) : /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: _NavbarModule["default"].bar1
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: _NavbarModule["default"].bar2
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: _NavbarModule["default"].bar3
  }))), /*#__PURE__*/_react["default"].createElement("ul", {
    className: _NavbarModule["default"].navLinks
  }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/"
  }, /*#__PURE__*/_react["default"].createElement("a", null, "Home")), /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/about"
  }, /*#__PURE__*/_react["default"].createElement("a", null, "About")), /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/blog"
  }, /*#__PURE__*/_react["default"].createElement("a", null, "Blog")), /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/portfolio"
  }, /*#__PURE__*/_react["default"].createElement("a", null, "Portfolio")), /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/products"
  }, /*#__PURE__*/_react["default"].createElement("a", null, "Products")), /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/contact"
  }, /*#__PURE__*/_react["default"].createElement("a", null, "Contact"))))), isMenuOpen && /*#__PURE__*/_react["default"].createElement("div", {
    className: _NavbarModule["default"].toggleMenu
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: _NavbarModule["default"].toggleNavLinks
  }, /*#__PURE__*/_react["default"].createElement("li", null, " ", /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/"
  }, /*#__PURE__*/_react["default"].createElement("a", null, "Home")), " "), /*#__PURE__*/_react["default"].createElement("li", null, " ", /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/about"
  }, /*#__PURE__*/_react["default"].createElement("a", null, "About")), " "), /*#__PURE__*/_react["default"].createElement("li", null, " ", /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/blog"
  }, /*#__PURE__*/_react["default"].createElement("a", null, "Blog")), " "), /*#__PURE__*/_react["default"].createElement("li", null, " ", /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/portfolio"
  }, /*#__PURE__*/_react["default"].createElement("a", null, "Portfolio")), " "), /*#__PURE__*/_react["default"].createElement("li", null, " ", /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/products"
  }, /*#__PURE__*/_react["default"].createElement("a", null, "Products")), " "), /*#__PURE__*/_react["default"].createElement("li", null, " ", /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/contact"
  }, /*#__PURE__*/_react["default"].createElement("a", null, "Contact")))))));
};

var _default = Navbar;
exports["default"] = _default;

//# sourceMappingURL=Navbar.jsx.map
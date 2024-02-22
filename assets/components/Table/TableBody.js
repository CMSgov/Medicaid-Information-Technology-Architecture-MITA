"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TableBody = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TableBody = function TableBody(_ref) {
  var children = _ref.children,
      _stackable = _ref._stackable,
      tableBodyProps = _objectWithoutProperties(_ref, ["children", "_stackable"]);

  var renderChildren = function renderChildren() {
    return _react.default.Children.map(children, function (child) {
      // Extend props before rendering.
      // TODO: Use React Context when all products are on React v16.8 or higher
      if (child && child.props) {
        return /*#__PURE__*/_react.default.cloneElement(child, {
          _stackable: _stackable
        });
      }

      return child;
    });
  };
  /* eslint-disable jsx-a11y/no-redundant-roles */


  return /*#__PURE__*/_react.default.createElement("tbody", _extends({
    role: "rowgroup"
  }, tableBodyProps), _stackable ? renderChildren() : children);
  /* eslint-enable jsx-a11y/no-redundant-roles */
};

exports.TableBody = TableBody;
TableBody.propTypes = {
  /**
   * The table body contents, usually `TableRow`.
   */
  children: _propTypes.default.node,

  /**
   * @hide-prop This gets set from the parent `Table` component
   */
  _stackable: _propTypes.default.bool
};
var _default = TableBody;
exports.default = _default;
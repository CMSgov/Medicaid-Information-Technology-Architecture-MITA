"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabPanel = TabPanel;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TabPanel(props) {
  var classes = (0, _classnames.default)('ds-c-tabs__panel', props.className);
  return /*#__PURE__*/_react.default.createElement("div", {
    "aria-labelledby": props.tabId,
    "aria-hidden": String(!props.selected),
    "aria-disabled": String(!!props.disabled),
    className: classes,
    id: props.id,
    role: "tabpanel"
  }, props.children);
} // Set component name to make child.type.displayName available to other components (eg. Tab)


TabPanel.displayName = 'TabPanel';
TabPanel.defaultProps = {
  selected: false
};
TabPanel.propTypes = {
  children: _propTypes.default.node.isRequired,

  /**
   * Additional classes to be added to the root element.
   */
  className: _propTypes.default.string,

  /**
   * A unique `id`, to be used on the rendered panel element.
   */
  id: _propTypes.default.string.isRequired,
  selected: _propTypes.default.bool,
  disabled: _propTypes.default.bool,

  /* eslint-disable react/no-unused-prop-types */

  /**
   * The associated tab's label. Only applicable when the panel is a
   * child of `Tabs`.
   */
  tab: _propTypes.default.string,

  /**
   * Additional classes for the associated tab. Only applicable when the panel
   * is a child of `Tabs`.
   */
  tabClassName: _propTypes.default.string,

  /**
   * The associated tab's `href`. Only applicable when the panel is a
   * child of `Tabs`.
   */
  tabHref: _propTypes.default.string,

  /* eslint-enable react/no-unused-prop-types */
  // tabId is actually required, but it's not marked here since we generate
  // this id within the Tabs component. Otherwise React will yell at you even
  // though it's ultimately being passed in.

  /**
   * The `id` of the associated `Tab`. Used for the `aria-labelledby` attribute.
   */
  tabId: _propTypes.default.string
};
var _default = TabPanel;
exports.default = _default;
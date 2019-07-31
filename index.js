"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.useValue = exports.ContextProvider = exports.Button = exports.StatusBar = exports.Modal = exports.Alert = exports.ActivityIndicator = exports.SectionList = exports.FlatList = exports.Switch = exports.Slider = exports.Picker = exports.ScrollView = exports.TextInput = exports.Image = exports.Text = exports.View = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var N = _interopRequireWildcard(require("react-native"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var View = (0, _styledComponents.default)(N.View)(function (_ref) {
    var css = _ref.css;
    return css;
}); // export const View = props => <View as={N.View} {...props} />;

exports.View = View;

var Text = function Text(props) {
    return _react.default.createElement(View, _extends({
        as: N.Text
    }, props));
};

exports.Text = Text;

var Image = function Image(props) {
    return _react.default.createElement(View, _extends({
        as: N.Image
    }, props));
};

exports.Image = Image;

var TextInput = function TextInput(props) {
    return _react.default.createElement(View, _extends({
        as: N.TextInput
    }, props));
};

exports.TextInput = TextInput;

var ScrollView = function ScrollView(props) {
    return _react.default.createElement(View, _extends({
        as: N.ScrollView
    }, props));
};

exports.ScrollView = ScrollView;

var Picker = function Picker(props) {
    return _react.default.createElement(View, _extends({
        as: N.Picker
    }, props));
};

exports.Picker = Picker;

var Slider = function Slider(props) {
    return _react.default.createElement(View, _extends({
        as: N.Slider
    }, props));
};

exports.Slider = Slider;

var Switch = function Switch(props) {
    return _react.default.createElement(View, _extends({
        as: N.Switch
    }, props));
};

exports.Switch = Switch;

var FlatList = function FlatList(props) {
    return _react.default.createElement(View, _extends({
        as: N.FlatList
    }, props));
};

exports.FlatList = FlatList;

var SectionList = function SectionList(props) {
    return _react.default.createElement(View, _extends({
        as: N.SectionList
    }, props));
};

exports.SectionList = SectionList;

var ActivityIndicator = function ActivityIndicator(props) {
    return _react.default.createElement(View, _extends({
        as: N.ActivityIndicator
    }, props));
};

exports.ActivityIndicator = ActivityIndicator;

var Alert = function Alert(props) {
    return _react.default.createElement(View, _extends({
        as: N.Alert
    }, props));
};

exports.Alert = Alert;

var Modal = function Modal(props) {
    return _react.default.createElement(View, _extends({
        as: N.Modal
    }, props));
};

exports.Modal = Modal;

var StatusBar = function StatusBar(props) {
    return _react.default.createElement(View, _extends({
        as: N.StatusBar
    }, props));
};

exports.StatusBar = StatusBar;

var Button = function Button(_ref2) {
    var children = _ref2.children,
        _ref2$css = _ref2.css,
        css = _ref2$css === void 0 ? {
            color: "black"
        } : _ref2$css,
        props = _objectWithoutProperties(_ref2, ["children", "css"]);

    var color = css.color,
        fontFamily = css.fontFamily,
        fontSize = css.fontSize,
        fontWeight = css.fontWeight,
        lineHeight = css.lineHeight,
        letterSpacing = css.letterSpacing,
        textAlign = css.textAlign,
        fontStyle = css.fontStyle,
        textShadow = css.textShadow,
        cssprops = _objectWithoutProperties(css, ["color", "fontFamily", "fontSize", "fontWeight", "lineHeight", "letterSpacing", "textAlign", "fontStyle", "textShadow"]);

    return _react.default.createElement(View, _extends({
        as: N.TouchableOpacity
    }, props, {
            css: _objectSpread({}, cssprops)
        }), _react.default.createElement(View, {
            as: N.Text,
            css: {
                color: color,
                fontFamily: fontFamily,
                fontSize: fontSize,
                fontWeight: fontWeight,
                lineHeight: lineHeight,
                letterSpacing: letterSpacing,
                textAlign: textAlign,
                fontStyle: fontStyle,
                textShadow: textShadow
            }
        }, children));
}; //Context


exports.Button = Button;
var HooksContext = (0, _react.createContext)();

var ContextProvider = function ContextProvider(_ref3) {
    var children = _ref3.children,
        value = _ref3.value;
    return _react.default.createElement(HooksContext.Provider, {
        value: value
    }, children);
};

exports.ContextProvider = ContextProvider;

var useValue = function useValue() {
    var value = (0, _react.useContext)(HooksContext);
    return value;
};

exports.useValue = useValue;
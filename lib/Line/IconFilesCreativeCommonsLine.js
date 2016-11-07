'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('../IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconFilesCreativeCommonsLine = function (_Component) {
  _inherits(IconFilesCreativeCommonsLine, _Component);

  function IconFilesCreativeCommonsLine() {
    _classCallCheck(this, IconFilesCreativeCommonsLine);

    return _possibleConstructorReturn(this, (IconFilesCreativeCommonsLine.__proto__ || Object.getPrototypeOf(IconFilesCreativeCommonsLine)).apply(this, arguments));
  }

  _createClass(IconFilesCreativeCommonsLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconFilesCreativeCommonsLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement(
          'g',
          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
          _react2.default.createElement('path', { d: 'M960 163c440.183 0 797 356.817 797 797s-356.817 797-797 797-797-356.817-797-797 356.817-797 797-797zm0 159.4c352.141 0 637.6 285.459 637.6 637.6s-285.459 637.6-637.6 637.6S322.4 1312.141 322.4 960 607.859 322.4 960 322.4z' }),
          _react2.default.createElement('path', { d: 'M1447.339 817.257l-112.377 59.244c-12.114-25.291-27.098-43.038-44.765-53.133-17.8-10.096-34.75-15.197-50.875-15.197-75.901 0-113.891 50.079-113.891 150.288 0 45.535 9.643 81.932 28.851 109.269 19.208 27.363 47.554 41.019 85.013 41.019 49.574 0 84.482-24.335 104.726-72.9l106.267 53.134c-23.246 41.524-54.648 74.121-94.046 97.925a245.009 245.009 0 0 1-129.061 35.679c-76.937 0-138.412-23.246-184.373-69.87-46.146-46.492-69.153-111.315-69.153-194.256 0-80.975 23.512-145.213 70.614-192.794 47.05-47.528 106.48-71.332 178.37-71.332 105.256-.053 180.2 40.913 224.7 122.924zm-490.341 0l-113.891 59.244c-12.168-25.291-27.098-43.038-44.765-53.133-17.72-10.096-34.165-15.197-49.361-15.197-75.874 0-113.865 50.079-113.865 150.288 0 45.535 9.644 81.932 28.852 109.269 19.234 27.363 47.554 41.019 85.013 41.019 49.626 0 84.535-24.335 104.805-72.9l104.753 53.134c-22.263 41.524-53.134 74.121-92.612 97.925-39.424 23.804-82.967 35.679-130.548 35.679-75.901 0-137.164-23.246-183.709-69.87-46.544-46.492-69.817-111.315-69.817-194.256 0-80.975 23.538-145.213 70.588-192.794 47.023-47.555 106.532-71.358 178.395-71.358 105.284-.053 180.653 40.912 226.215 122.924l-.053.026z' })
        )
      );
    }
  }]);

  return IconFilesCreativeCommonsLine;
}(_react.Component);

exports.default = IconFilesCreativeCommonsLine;
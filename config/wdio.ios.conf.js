const path  = require('path')
const {config} =  require('./wdio.shared.conf')

config.port = 4723;
config.specs = [
    './test/specs_s/**/*.js',
]
config.capabilities = [
    {
      platformName: 'iOS',
      'appium:deviceName': 'iPhone 12',
      'appium:platformVersion': '15.0',
      'appium:automationName': 'XCUITest',
      //'appium:noReset': true,
      'appium:app': path.join(process.cwd(), "app\\android\\app-dev-release.apk")// add ios apk and replace the path here
    }
  ];
exports.config = config;
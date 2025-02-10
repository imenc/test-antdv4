const withAntdLess = require('next-plugin-antd-less');
const withTM = require('next-transpile-modules')([
  'antd',
  'rc-util', 
  'rc-pagination', 
  'rc-select', 
  'rc-tooltip',
  'rc-picker',
  '@ant-design/icons',
  '@ant-design/icons-svg', // ✅ Ensure these are transpiled
  'rc-notification'
]); // ✅ Add required modules

module.exports = withTM(
  withAntdLess({
    reactStrictMode: true,
    // experimental: { appDir: false },
    
    webpack(config) {
      config.resolve.fallback = { fs: false }; // ✅ Prevents fs module issues
      return config;
    },
  })
);
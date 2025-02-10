// import 'antd/dist/antd.css'; // Ant Design global styles
// import 'antd/dist/reset.css';
// import 'antd/es/style/reset.css';
// import 'antd/dist/antd.css';
import '../styles/globals.css'; // Your custom global styles
import 'antd/dist/antd.less';   // using css

// import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
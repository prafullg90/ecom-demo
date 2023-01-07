import { store } from '../redux/Store';
import { Provider } from 'react-redux';

import '../styles/index.scss';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

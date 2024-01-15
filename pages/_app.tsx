import { AppProps } from 'next/app';
import 'node_modules/flag-icons/css/flag-icons.min.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='h-screen'>
      <Component {...pageProps} />
    </div>
  );
}

import Head from "next/head";
import "../assets/style.scss";
import '../components/modal/styles.scss';
import {createStore} from 'redux';
import myReducer from '../reducers/index';
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
const store=createStore(myReducer);
export default function MyApp({ Component, pageProps }) {
    // Component -> Dai dien cho 1 Page match url 

    return (
        <Provider store={store}>
            <div className="root-app">
            <Head>
                <title className="color">Create Next App Edit</title>
                <link rel="icon" href="/favicon.ico" />
                {/* <link rel="stylesheet" href="/css/global.css" /> */}
            </Head>
            <Component {...pageProps} />
        </div>
        </Provider>
        
    )
}
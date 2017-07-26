import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Slider from './slider'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Slider />, document.getElementById('root'));
registerServiceWorker();

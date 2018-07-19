import './scss/common.scss'

const data = {
    msg: 'webpack!'
};
const hello = ({msg}) => {
    console.log(`hello ${msg}`);
};
hello(data);
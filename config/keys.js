if(process.env.NODE_ENV === 'production')
{
    export import "./production.js";
}
else
{
    export import './dev.js';
}
if(process.env.NODE_ENV === 'production')
{
    import production from "./production.js";
    export default production;
}
else
{
    import dev from './dev.js';
    export default dev;
}
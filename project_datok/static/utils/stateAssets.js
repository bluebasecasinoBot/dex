import { __g, __u } from "../../sydneyDom_v3.js";

//Update states function
export const updateState = ({name , prop , value}) =>{
    const state = __g(name);
    state[`${prop}`] = value;
    __u(name , {type:"a" , value:state});
}
//Update states function

//Update states function multi-route
export const updateState__ = ({name , prop = [] , value}) =>{
    const state = __g(name);
    let copy = state
    for(let i = 0; i < prop.length; i++)
    {
        if(i === prop.length-1)
        {
            copy[prop[i]] = value;
        }else copy = copy[prop[i]]
    }
    __u(name , {type:"a" , value:state})
}
//Update states function multi-route

//Update states function multi-route
export const updateState__push = ({name , prop = [] , value}) =>{
    const state = __g(name);
    let copy = state
    for(let i = 0; i < prop.length; i++)
    {
        if(i === prop.length-1)
        {
            copy[prop[i]].push(value);
        }else copy = copy[prop[i]]
    }
    __u(name , {type:"a" , value:state})
}
//Update states function multi-route

//bulk state update
export const updateState__bulk = ({name , task = ()=>{}}) =>{
    __u(name , {type:"a" , value:task(__g(name))});
}
//bulk state update

export function trimVal(text,ellipsis=false,size=7)
{
    if(`${text}`.length > size)
    {
        text = text.slice(0,size);
    }
    return `${text}${ellipsis?"...":""}`;
}

export function copyText(text)
{
    navigator.clipboard.writeText(text)
    .then(() => {
        
    })
    .catch(err => console.error("Failed to copy", err));
}
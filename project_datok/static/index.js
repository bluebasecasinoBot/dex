import { $, __m, __p, __sC, __SYD, __v, manage_mediaQuery, mediaFunction, SYD_VAR } from "./sydneyDom_v3.js";
import "./styles/main.js"
import "./styles/walletStyle.js"
import "./variables.js"
//navs
import "./nav/topNav.js"
import "./nav/sideNav.js"

//graps
import "./utils/graph.js"


//wallet dashboard
import "./wallet/dashboard.js"
//wallet analytics
import "./wallet/analytics.js"
import { updateState, updateState__bulk } from "./utils/stateAssets.js";

__SYD.container = function()
{
    return $(
        "div",
        {
            style:__sC["container"]({method:"add",style:{backgroundColor:SYD_VAR.container_bg.get()}})
        },
        [
            __SYD.subContainer()
        ]
    )
}

__SYD.subContainer = function()
{
    return $(
        "section",
        {
            style:__sC["subContainer"]() + __sC["br-1"]() + __sC["thinBorder"]() + __sC["row-start"]()
        },
        [
            __SYD.topNav(),
            __SYD.sideNav(),
            __SYD.walletDashboard(),
            __SYD.walletAnalytics()
            // __SYD.graph()

        ],
        {
            createState:{
                stateName:"subContainer",
                state:{
                    fontTitle:"22px",
                    fontHeader:"13px",
                    fontSmall:"11px",
                    fontNormHeader:"18px"
                }
            }
        }
    )
}

__m(__SYD.container(),()=>{
    manage_mediaQuery(window.innerWidth);
    updateState({name:"graph1",prop:"data",value:[
        20 , 90 , 13.5 , 52 , 29]});
    __p(["graph1","draw"])();
    mediaFunction.push(()=>{__p(["graph1","draw"])()});

    const data = [
        {
            name:"Ethereum",
            icon:"./assets/images/eth.svg",
            price:"$ 4500",
            price_24:"2.5%",
            holdings:"0.5 ETH",
            profit_loss:["$ 3.2" , "-1.4%"]
        },
        {
            name:"Polygon",
            icon:"./assets/images/pol.png",
            price:"$ 100",
            price_24:"5.5%",
            holdings:"200 POL",
            profit_loss:["$ 10.2" , "-10.4%"]
        },
        {
            name:"Base",
            icon:"./assets/images/base.png",
            price:"$ 4500",
            price_24:"-9.5%",
            holdings:"0.9 ETH",
            profit_loss:["$ 9" , "6.4%"]
        }
    ]

    const history = [
        {
            txHash:"0x8780e5808e959c4c5056ade68ab3831e94dc2bd106e976eeb76a2966c54c53b4",
            amount:"10 Eth",
            to:"0xd807d3736acBF81b65866933cA11c6176b5Ef5b2",
            from:"0x396343362be2A4dA1cE0C1C210945346fb82Aa49",
            blockNo:"23246978",
            status:"success"
        },
        {
            txHash:"aW7t1yCyMzRQe7LNeQ1Hembf83UM87kkqh1xny397JTgg7DF6oUq6cfvtAexu56cGNvyV3A2RktfdWZ89EeLRtj",
            amount:"0.2 sol",
            to:"HamByAexLhR9bUXTodGgjdpPXoYVygpD74H84rBVwJ1A",
            from:"AJxEGdtoHrgVUPyMsdyMLiEevwa6gk3de1QDPGwVh2hw",
            blockNo:"363297563",
            status:"pending"
        },
        {
            txHash:"aW7t1yCyMzRQe7LNeQ1Hembf83UM87kkqh1xny397JTgg7DF6oUq6cfvtAexu56cGNvyV3A2RktfdWZ89EeLRtj",
            amount:"0.2 sol",
            to:"HamByAexLhR9bUXTodGgjdpPXoYVygpD74H84rBVwJ1A",
            from:"AJxEGdtoHrgVUPyMsdyMLiEevwa6gk3de1QDPGwVh2hw",
            blockNo:"363297563",
            status:"failed"
        },
    ]

setTimeout(() => {
    updateState__bulk({name:"walletDashboard",task:s=>{
        data.forEach(asset=>{
            s.assets.push(
                {
                    name:asset.name,
                    icon:asset.icon,
                    price:asset.price,
                    price_24h:asset.price_24,
                    holdings_native:asset.holdings,
                    holdings_doll:`$ ${Number(asset.holdings.split(" ")[0])*1200}`,
                    profit_loss_doll:asset.profit_loss[0],
                    profit_loss_percent:asset.profit_loss[1],
                }
            )
        })
        return s;
    }})

    updateState__bulk({name:"walletAnalytics",task:s=>{
        data.forEach(asset=>{
            s.assets.push(
                {
                    name:asset.name,
                    icon:asset.icon,
                    price:asset.price,
                    price_24h:asset.price_24,
                    holdings_native:asset.holdings,
                    holdings_doll:`$ ${Number(asset.holdings.split(" ")[0])*1200}`,
                    profit_loss_doll:asset.profit_loss[0],
                    profit_loss_percent:asset.profit_loss[1],
                }
            );

        })
        s.tx_history = history;
        return s;
    }})
}, 4000);
})
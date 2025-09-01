import { $, __p, __sC, __SYD, SYD_VAR } from "../../sydneyDom_v3.js";
import {copyText, trimVal, updateState, updateState__bulk } from "../utils/stateAssets.js"

function copyAdx(e)
{
    navigator.clipboard.writeText(__p(["walletAnalytics","adx"]))
    .then(() => {
        e.target.querySelector(".icon").style.backgroundImage = "url(./assets/images/check.svg)";
        let timer = setTimeout(()=>{clearTimeout(timer);e.target.querySelector(".icon").style.backgroundImage = "url(./assets/images/copy.svg)";},2000)
    })
    .catch(err => console.error("Failed to copy", err));
}

__SYD.walletAnalytics = function()
{
    return $(
        "div",
        {style:__sC["dashboard"]()+__sC["col-start"]({method:"add",style:{gap:"35px",display:__p(["walletAnalytics","display"],true)?"flex":"none"}})},
        [
            __SYD.walletAdx_A(),
            __SYD.walletBal_A(),
            __SYD.graph1(),
            __SYD.assets_D(),
            __SYD.history_A()
        ],
        {
            createState:{
                stateName:"walletAnalytics",
                state:{display:true,adx:"0xbF5bee7eC001Bb1794655481F8a732F4789faf82",native:true,mobile:false,assets:[],tx_history:[]}
            },
            mediaQuery:{query:[{size:"<900px",prop:{mobile:true}}],defState:{mobile:false}}
        }
    )
}

__SYD.walletAdx_A = function()
{
    return $(
        "div",
        {style:__sC["l-hx-flx-end"]()},
        [
            //wallet bal comp
            $(
                "div",
                {style:__sC["col-start"]({method:"add",style:{gap:"15px"}})},
                [
                    $("p",{style:__sC["n-txt"]()+`color:${SYD_VAR.greyText.get()};font-size:${__p(["subContainer","fontHeader"],"13px")};font-weight:200;`},["Wallet Adx"]),
                    $(
                        "div",
                        {class:"dim-text",style:__sC["row-start"]({method:"add",style:{gap:"8px",cursor:"pointer"}})},
                        [
                            $("p",{style:`font-size:${__p(["subContainer","fontHeader"],"13px")};color:${SYD_VAR.headerClr.get()};`+__sC["n-txt"]()+__sC["no-txt"]()},[`${__p(["walletAnalytics","adx"],"0xbF5bee7eC001Bb1794655481F8a732F4789faf82").slice(0,15)} ...`]),
                            $("span",{class:"icon",style:`background-image:url(./assets/images/${"copy"}.svg);`+__sC["n-icon"]({method:"add",style:{color:SYD_VAR.themeClr.get()}})+__sC["no-txt"]()},[],{genericStyle:["bg_fit"]})
                        ],{events:{onclick:copyAdx}}
                    )
                ]
            )
            //wallet bal comp
        ]
    )
}

__SYD.walletBal_A = function()
{
    return $(
        "div",
        {style:__sC["l-hx-flx-end"]({method:"add",style:!__p(["walletBal_A","mobile"],false)?{}:{flexDirection:"column",alignItems:"flex-start",gap:"30px"}})},
        [
            //wallet bal comp
            $(
                "div",
                {style:__sC["col-start"]({method:"add",style:{gap:"15px"}})},
                [
                    $("p",{style:__sC["n-txt"]()+`color:${SYD_VAR.greyText.get()};font-size:${__p(["subContainer","fontHeader"],"13px")};font-weight:200;`},["Native Balance"]),
                    $(
                        "div",
                        {style:__sC["row-start"]({method:"add",style:{gap:"8px"}})},
                        [
                            $("p",{style:`font-size:${__p(["subContainer","fontTitle"],"22px")};color:${SYD_VAR.headerClr.get()};`+__sC["h-txt"]()},["0.00 USDC"])
                        ]
                    )
                ]
            ),
            //wallet bal comp

            //wallet bal comp
            $(
                "div",
                {style:__sC["col-start"]({method:"add",style:{gap:"15px"}})},
                [
                    $("p",{style:__sC["n-txt"]()+`color:${SYD_VAR.greyText.get()};font-size:${__p(["subContainer","fontHeader"],"13px")};font-weight:200;`},["Dollar Balance"]),
                    $(
                        "div",
                        {style:__sC["row-start"]({method:"add",style:{gap:"8px"}})},
                        [
                            $("p",{style:`font-size:${__p(["subContainer","fontTitle"],"22px")};color:${SYD_VAR.headerClr.get()};`+__sC["h-txt"]()},["$ 0.00"])
                        ]
                    )
                ]
            ),
            //wallet bal comp
        ],{
            createState:{stateName:"walletBal_A",state:{mobile:false}},
            mediaQuery:{query:[{size:"<600px",prop:{mobile:true}}],defState:{mobile:false}}
        }
    )
}

__SYD.assets_A = function()
{
    return $(
        "div",
        {
            style:__sC["col-start"]({method:"add",style:{gap:"15px",marginTop:"30px",width:"100%"}})
        },
        [
            //assets header
            $("p",{style:`font-size:${__p(["subContainer","fontNormHeader"],"18px")};color:${SYD_VAR.headerClr.get()};`+__sC["h-txt"]()},["Your Assets"]),
            //assets header
            //assets main
            __SYD.assetsTable_A()
            //assets main
        ]
    )
}

__SYD.assetsTable_A = function()
{
    return $(
        "div",
        {
            style:__sC["col-start"]({method:"add",style:{gap:"3px",width:"100%",padding:"0px",paddingTop:"0px",overflow:"scroll",maxWidth:"100%",maxHeight:"400px",position:"relative"}})
        },
        [
            __SYD.tableEl_D({name:"Name",price:"price",price_24h:"24h",holdings:"holdings",profit_loss:"profit/loss",actions:"actions"}),
            ...(()=>{
                const data = __p(["walletAnalytics","assets"],[]);
                const el = [];
                for(let i = 0; i < data.length; i++)
                {
                    el.push(
                        __SYD.tableElC_D(data[i])
                    )
                }
                return el;
            })()
        ]
    )
}

__SYD.history_A = function()
{
    return $(
        "div",
        {
            style:__sC["col-start"]({method:"add",style:{gap:"15px",marginTop:"30px",width:"100%"}})
        },
        [
            //assets header
            $("p",{style:`font-size:${__p(["subContainer","fontNormHeader"],"18px")};color:${SYD_VAR.headerClr.get()};`+__sC["h-txt"]()},["Transaction History"]),
            //assets header
            //assets main
            __SYD.historyTable_A()
            //assets main
        ]
    )
}

__SYD.historyTable_A = function()
{
    return $(
        "div",
        {
            style:__sC["col-start"]({method:"add",style:{gap:"3px",width:"100%",padding:"0px",paddingTop:"0px",overflow:"scroll",maxWidth:"100%",maxHeight:"400px",position:"relative"}})
        },
        [
            __SYD.tableEl_A({txHash:"Tx Hash",amount:"Amount",from:"from",to:"to",blockNo:"block_no",status:"status"}),
            ...(()=>{
                const data = __p(["walletAnalytics","tx_history"],[]);
                const el = [];
                for(let i = 0; i < data.length; i++)
                {
                    el.push(
                        __SYD.tableElC_A(data[i])
                    )
                }
                return el;
            })()
        ]
    )
}

__SYD.tableEl_A = function({txHash,amount,from,to,blockNo,status}={})
{
    return $(
        "section",
        {style:__sC["row-start"]({method:"add",style:{width:"100%",minWidth:"fit-content",minHeight:"fit-content",position:"sticky",top:"0px",left:"0px"}})},
        [
            $("p",{style:__sC["n-txt"]()+__sC["row-center"]({method:"add",style:{gap:"5px"}})+__sC["t-cells"]({method:"add",style:{flex:"2.5",paddingLeft:"10px"}})+`color:${SYD_VAR.greyText.get()};font-size:${__p(["subContainer","fontHeader"],"13px")};font-weight:500;background:${SYD_VAR.tableBg.get()};`},[
                txHash
            ]),
            $("p",{style:__sC["n-txt"]()+__sC["row-center"]()+__sC["t-cells"]()+`color:${SYD_VAR.greyText.get()};font-size:${__p(["subContainer","fontHeader"],"13px")};font-weight:500;background:${SYD_VAR.tableBg.get()};`},[amount]),
            $("p",{style:__sC["n-txt"]()+__sC["row-center"]()+__sC["t-cells"]()+`color:${SYD_VAR.greyText.get()};font-size:${__p(["subContainer","fontHeader"],"13px")};font-weight:500;background:${SYD_VAR.tableBg.get()};`},[from]),
            $("p",{style:__sC["n-txt"]()+__sC["row-center"]()+__sC["t-cells"]()+`color:${SYD_VAR.greyText.get()};font-size:${__p(["subContainer","fontHeader"],"13px")};font-weight:500;background:${SYD_VAR.tableBg.get()};`},[to]),
            $("p",{style:__sC["n-txt"]()+__sC["row-center"]()+__sC["t-cells"]()+`color:${SYD_VAR.greyText.get()};font-size:${__p(["subContainer","fontHeader"],"13px")};font-weight:500;background:${SYD_VAR.tableBg.get()};`},[blockNo]),
            $("p",{style:__sC["n-txt"]()+__sC["row-center"]()+__sC["t-cells"]({method:"add",style:{flex:"1"}})+`color:${SYD_VAR.greyText.get()};font-size:${__p(["subContainer","fontHeader"],"13px")};font-weight:500;background:${SYD_VAR.tableBg.get()};`},[status]),
        ]
    )
}


__SYD.tableElC_A = function({txHash,amount,from,to,blockNo,status}={})
{
    return $(
        "section",
        {style:__sC["row-start"]({method:"add",style:{width:"100%",minWidth:"fit-content",minHeight:"fit-content"}})},
        [
            $("p",{style:__sC["n-txt"]()+__sC["row-center"]({method:"add",style:{gap:"7px"}})+__sC["t-cells"]({method:"add",style:{flex:"2.5",height:"55px",paddingLeft:"10px"}})+`color:${SYD_VAR.headerClr.get()};font-size:${__p(["subContainer","fontSmall"],"11px")};font-weight:200;background:${SYD_VAR.tableBg.get()};cursor:pointer;`},[
                trimVal(txHash,true,15)
            ],{events:{onclick:e=>{copyText(txHash)}}}),

            $("p",{style:__sC["n-txt"]()+__sC["t-cells"]({method:"add",style:{height:"55px"}})+__sC["col-start"]({method:"add",style:{justifyContent:"center",gap:"7px"}})+`color:${SYD_VAR.headerClr.get()};font-size:${__p(["subContainer","fontSmall"],"11px")};font-weight:200;background:${SYD_VAR.tableBg.get()};`},[
                trimVal(amount)
            ]),

            $("p",{style:__sC["n-txt"]()+__sC["t-cells"]({method:"add",style:{height:"55px"}})+__sC["col-start"]({method:"add",style:{justifyContent:"center",gap:"7px"}})+`color:${SYD_VAR.headerClr.get()};font-size:${__p(["subContainer","fontSmall"],"11px")};font-weight:200;background:${SYD_VAR.tableBg.get()};cursor:pointer;`},[
                trimVal(from,true,15)
            ],{events:{onclick:e=>{copyText(from)}}}),

            $("p",{style:__sC["n-txt"]()+__sC["t-cells"]({method:"add",style:{height:"55px"}})+__sC["col-start"]({method:"add",style:{justifyContent:"center",gap:"7px"}})+`color:${SYD_VAR.headerClr.get()};font-size:${__p(["subContainer","fontSmall"],"11px")};font-weight:200;background:${SYD_VAR.tableBg.get()};cursor:pointer;`},[
                trimVal(to,true,15)
            ],{events:{onclick:e=>{copyText(to)}}}),

            $("p",{style:__sC["n-txt"]()+__sC["t-cells"]({method:"add",style:{height:"55px"}})+__sC["col-start"]({method:"add",style:{justifyContent:"center",gap:"7px"}})+`color:${SYD_VAR.headerClr.get()};font-size:${__p(["subContainer","fontSmall"],"11px")};font-weight:200;background:${SYD_VAR.tableBg.get()};`},[
                `${blockNo}`
            ]),

            $("p",{style:__sC["n-txt"]()+__sC["row-center"]()+__sC["t-cells"]({method:"add",style:{flex:"1",height:"55px"}})+`color:${SYD_VAR.headerClr.get()};font-size:${__p(["subContainer","fontSmall"],"11px")};font-weight:400;background:${SYD_VAR.tableBg.get()};`},[
                $("p",{style:`color:${status==="success"?SYD_VAR.success.get():(status==="pending"?SYD_VAR.pending.get():SYD_VAR.err.get())};`},[
                    $("span",{style:__sC["br-.5"]()+__sC["thinBorder"]({method:"add",style:{backgroundColor:SYD_VAR.bgWhite_t_5.get()}})+"padding:5px"},[status])
                ])
            ]),
        ]
    )
}
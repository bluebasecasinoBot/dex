import { $, __p, __sC, __SYD, SYD_VAR } from "../../sydneyDom_v3.js";
import { updateState } from "../utils/stateAssets.js";
function toggleSideNav()
{
    updateState({name:"sideNav",prop:"shift",value:__p(["sideNav","shift"],false)?false:true});
}

__SYD.sideNav = () =>{
    return $(
        "div",
        {
            style:__sC["sideNav"]({method:"add",style:{minWidth:__p(["sideNav","width"],"200px")}}) + __sC["thinBorder"]({method:'add',style:{borderBottom:"unset",borderTop:"unset",marginTop:__p(["sideNav","shift"],false)?"unset":"80px",position:__p(["sideNav","shift"],false)?"absolute":"static",transform:__p(["sideNav","shift"],false)?"translateX(-100%)":"translateX(0%)",transition:"unset"}})+__sC[`col-${__p(["sideNav","width"],"200px")==="70px"?"center":"start"}`]()
        },
        [
            __SYD.sideMenu(),
            __SYD.getPro(),

            //pro mobile state replacement
            $(
                "div",
                {style:__sC["getPro"]({method:"add",style:{padding:"unset"}})+__sC["cr-40"]()+`display:${__p(["sideNav","width"],"200px") === "70px"?"flex":"none"};background-image:url(./assets/images/logoPro.png);`},[],{genericStyle:["bg_fit"]}
            )
            //pro mobile state replacement
        ],
        {
            createState:{
                stateName:"sideNav",
                state:{width:"200px",shift:false}
            },
            mediaQuery:{
                query:[{size:"<900px",prop:{width:"70px"}}],
                defState:{width:"200px"}
            }
        }
    )
}

__SYD.getPro = function()
{
    return $(
        "div",
        {style:__sC["getPro"]()+__sC["thinBorder"]()+__sC["br-.5"]()+__sC["col-center"]({method:"add",style:{justifyContent:"flex-end",gap:"15px",display:__p(["sideNav","width"],"200px") === "70px"?"none":"flex"}})},
        [
            $(
                "div",
                {style:`font-size:${__p(["subContainer","fontHeader"],"13px")};color:${SYD_VAR.headerClr.get()};padding:8px;width:100%;position:absolute;bottom:0px;background:${SYD_VAR.themeClr.get()};`+__sC["row-center"]()+__sC["n-txt"]()+__sC["br-.5"]({method:"add",style:{borderTopLeftRadius:"unset",borderTopRightRadius:"unset"}})},
                ["get pro"]
            ),
            $(
                "p",{style:__sC["n-txt"]()+`font-size:${__p(["subContainer","fontHeader"],"13px")};color:${SYD_VAR.headerClr.get()};font-weight:700;text-align:center;`},["Get more with pro"]
            ),
            $(
                "p",{style:__sC["n-txt"]()+`min-width:unset;font-size:12px;color:${SYD_VAR.headerClr.get()};font-weight:300;text-align:center;`},["Unlock advanced functionalities with pro and increase your profit"]
            ),
            $(
                "div",
                {style:"height:100px;width:100px;background-image:url(./assets/images/getPro.png);position:absolute;top:0;transform:translateY(-50%) translateX(-50%);left:50%;"},[],{genericStyle:["bg_fit"]}
            )
        ]
    )
}

__SYD.sideMenu = function()
{
    return $(
        "div",
        {style:__sC["box"]({method:"add",style:{padding:"unset"}})+__sC["row-start"]({method:"add",style:{gap:"10px",cursor:"pointer",position:__p(["sideNav","width"],"200px") === "70px"?__p(["sideNav","shift"],false)?"absolute":"static":"absolute",top:"8px",right:__p(["sideNav","shift"],false)?"0px":"8px",transform:__p(["sideNav","shift"],false)?"translateX(calc(100% + 8px))":"translateX(0px)"}})},
        [
            $(
                "span",
                {class:"highlight_icon",style:"background-image:url(./assets/images/sideMenu.svg);height:30px;width:30px;"},[],{genericStyle:["bg_fit"]}
            ),
            // $("p",{style:`display:${__p(["sideNav","width"],"200px") === "70px"?"none":"block"};font-size:${__p(["subContainer","fontHeader"],"13px")};color:${SYD_VAR.headerClr.get()};`+__sC["n-txt"]()+__sC["no-txt"]()},["Side Menu"])
        ],{events:{onclick:toggleSideNav}}
    )
}
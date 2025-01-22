// Data URL dan name app
//====================================================================================
const urlData = [{
        name: "APNA Tunnel Lite",
        url: "https://amtun.xyz/updater/1df3d3112f9077493387694d84b2de"
    },
    {
        name: "APNA VPN",
        url: "https://amtun.xyz/updater/e39f8929d22f1376617d80e34f543f"
    },
    {
        name: "APNA SHIELD PRO",
        url: "https://shieldpanel.xyz/updater/92b6d6f57efe22b51fb93d35a6011a"
    },
    {
        name: "APNA TUNNEL",
        url: "https://amtun.xyz/updater/1df3d3112f9077493387694d84b2de"
    },
    {
        name: "AM TUNNEL LITE VPN",
        url: "https://rozarvpn.xyz/updater/bde7e4f4329872cf81727818c84c32"
    },
    {
        name: "BD NET VPN",
        url: "https://raw.githubusercontent.com/panigbatanc/BDNET2023/refs/heads/main/JSONKYLE"
    },
    {
        name: "Omanova VPN",
        url: "https://raw.githubusercontent.com/panigbatanc/Omanova2024/main/JSONKYLE"
    },
    {
        name: "UrsaNetPRO",
        url: "https://raw.githubusercontent.com/panigbatanc/UrsaNetPRO/main/JSONSEPT132024"
    },
    {
        name: "FNF TUNNEL BD",
        url: "https://arifsudi.xyz/updater/da5ab238d41b33f4425fd8793eda83"
    },
    {
        name: "MTM Tunnel Lite",
        url: "https://tmtunnel.com/api/app?json=cf41aecd0f6788138f71"
    },
    {
        name: "TRM Tunnel",
        url: "https://trmpanel.xyz/updater/5038132a9623b61feeb496ed84ba59"
    },
    {
        name: "TR Tunnel VPN",
        url: "https://sarkarpanel.xyz/updater/cb4d629123e01e911467838dfeb5fc"
    },
    {
        name: "TSS TUNNEL",
        url: "https://habibipro.xyz/api/app?json=3ec1d9e370d9e45a9748"
    },
    {
        name: "MXT Tunnel Lite",
        url: "https://topnetpanel.xyz/updater/497d3d85079382742dbf1923708c0f"
    },
    {
        name: "Mx Tunnel PRO",
        url: "https://rasedpanel.xyz/updater/b061a27fe98af618a8e73f94840720"
    },
    {
        name: "Taj Tunnel Pro",
        url: "https://sarkarpanel.xyz/updater/d2182556af384888505d604e3f6f00"
    },
    {
        name: "Fx Tunnel",
        url: "https://fxpanel.xyz/updater/cbf09fc8f7994daaa96691282b2dd9"
    },
    {
        name: "Jx Tunnel Lite",
        url: "https://saudinet.xyz/api/app?json=f80118a2736d25235844"
    },
    {
        name: "TG Tunnel Lite",
        url: "https://rasedpanel.xyz/updater/34751a4228892b1ce87173b4d5ebde"
    },
    {
        name: "XMAXVIP",
        url: "https://xshieldtun.xyz/updater/40d2aeacb9a9e9db46503aded122eb"
    },
    {
        name: "Mx Tunnel",
        url: "https://sarkarpanel.xyz/updater/d2182556af384888505d604e3f6f00"
    },
    {
        name: "XTM Tunnel",
        url: "https://saudinet.xyz/api/app?json=f80118a2736d25235844"
    },
    {
        name: "4U TUNNEL PRO",
        url: "https://ctxfitpro.xyz/updater/99ef47d1815d576fb4cce0e176f0dc"
    },
    {
        name: "HX Tunnel VPN",
        url: "https://ctxfitpro.xyz/updater/740e20d27826f80a81ccfd7796d838"
    },
    {
        name: "HAMARA TUNNEL",
        url: "https://apnashadow.xyz/updater/258acc668f3a13c702f66fe8ff15d9"
    },
    {
        name: "GT Tunnel Pro",
        url: "https://topnetpanel.xyz/updater/4da37074789039f11c958d01edb9a5"
    },
    {
        name: "MH Tunnel Proxy Vip",
        url: "https://freedomplus.pw/updater/310161d57837d6c0f7c70a822ad1d8"
    },
    {
        name: "MT KING NET | noyon",
        url: "https://mnvaivainet.xyz/api/app?json=6ce47019ff8ee7433846"
    },
    {
        name: "Steady Fast VPN | noyon",
        url: "https://mnvaivainet.xyz/api/app?json=6ce47019ff8ee7433846"
    },
    {
        name: "High Tech VPN | noyon",
        url: "https://amrasobaivai.com/uploads/json/9f0b28940201bc46a27e.json"
    },
    {
        name: "Robust Tunnel VPN| noyon",
        url: "https://amrasobaivai.com/uploads/json/d9eec18e08ebcc502621.json"
    },
    {
        name: "ICE VPN| noyon",
        url: "https://amrasobaivai.com/uploads/json/faa04df0b621691dc12b.json"
    },
    {
        name: "DH NET VPN | noyon",
        url: "https://dhnetdh.xyz/api/app?json=6401f4752953f9a00192"
    }
];

//======================================================================================

const urlList = document.getElementById("urlList");

urlData.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${item.name}</strong> <button onclick="copyToClipboard('${item.url}')">Copy URL</button>`;
    urlList.appendChild(li);
});

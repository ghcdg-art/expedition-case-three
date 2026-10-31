(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const fl="scene-pack",pl=1,ml="0.3-reference-map",gl="case3",_l="base",vl="研究所 · 空间组合试验",xl=JSON.parse('{"rooms":[{"id":"1-1","min":[0,0,0],"max":[5,5,5]},{"id":"1-2","min":[5,0,0],"max":[15,5,5]},{"id":"1-3","min":[15,0,0],"max":[20,5,5]},{"id":"1-4","min":[0,10,0],"max":[5,15,5]},{"id":"1-5","min":[5,10,0],"max":[10,15,5]},{"id":"1-6","min":[10,10,0],"max":[15,15,5]},{"id":"1-7","min":[15,10,0],"max":[20,15,5]},{"id":"2-1","min":[0,0,5],"max":[5,5,10]},{"id":"2-2","min":[5,0,5],"max":[15,5,10]},{"id":"2-3","min":[15,0,5],"max":[20,5,10]},{"id":"2-4","min":[0,10,5],"max":[5,15,10]},{"id":"2-5","min":[5,10,5],"max":[10,15,10]},{"id":"2-6","min":[10,10,5],"max":[15,15,10]},{"id":"2-7","min":[15,10,5],"max":[20,15,10]},{"id":"3-1","min":[0,0,10],"max":[5,5,15]},{"id":"3-2","min":[5,0,10],"max":[15,5,15]},{"id":"3-3","min":[15,0,10],"max":[20,5,15]},{"id":"3-4","min":[0,10,10],"max":[5,15,15]},{"id":"3-5","min":[5,10,10],"max":[10,15,15]},{"id":"3-6","min":[10,10,10],"max":[15,15,15]},{"id":"3-7","min":[15,10,10],"max":[20,15,15]},{"id":"1-hall","min":[0,5,0],"max":[20,10,5]},{"id":"2-hall","min":[0,5,5],"max":[20,10,10]},{"id":"3-hall","min":[0,5,10],"max":[20,10,15]}],"topology":{"version":"u1-calibrated-2","panels":[{"id":"1-south-partition-15","vertices":[[15,0,0],[15,5,0],[15,5,5],[15,0,5]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"1-north-partition-5","vertices":[[5,10,0],[5,15,0],[5,15,5],[5,10,5]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"1-north-partition-10","vertices":[[10,10,0],[10,15,0],[10,15,5],[10,10,5]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"1-north-partition-15","vertices":[[15,10,0],[15,15,0],[15,15,5],[15,10,5]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"1-5-0-left","vertices":[[0,5,0],[0.1,5,0],[0.1,5,5],[0,5,5]],"source":"U1 原图门洞相对方位；宽度与精确位置为工程示意","precision":"calibrated"},{"id":"1-5-0-right","vertices":[[1.1,5,0],[5,5,0],[5,5,5],[1.1,5,5]],"source":"U1 原图门洞相对方位；宽度与精确位置为工程示意","precision":"calibrated"},{"id":"1-seal-north-east","vertices":[[10,5,0],[15,5,0],[15,5,5],[10,5,5]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"1-5-15-left","vertices":[[15,5,0],[15.1,5,0],[15.1,5,5],[15,5,5]],"source":"U1 原图门洞相对方位；宽度与精确位置为工程示意","precision":"calibrated"},{"id":"1-5-15-right","vertices":[[16.1,5,0],[20,5,0],[20,5,5],[16.1,5,5]],"source":"U1 原图门洞相对方位；宽度与精确位置为工程示意","precision":"calibrated"},{"id":"1-10-0-left","vertices":[[0,10,0],[3.9000000000000004,10,0],[3.9000000000000004,10,5],[0,10,5]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"1-10-0-right","vertices":[[4.9,10,0],[5,10,0],[5,10,5],[4.9,10,5]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"1-10-5-left","vertices":[[5,10,0],[8.9,10,0],[8.9,10,5],[5,10,5]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"1-10-5-right","vertices":[[9.9,10,0],[10,10,0],[10,10,5],[9.9,10,5]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"1-10-10-left","vertices":[[10,10,0],[13.9,10,0],[13.9,10,5],[10,10,5]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"1-10-10-right","vertices":[[14.9,10,0],[15,10,0],[15,10,5],[14.9,10,5]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"1-10-15-left","vertices":[[15,10,0],[15.1,10,0],[15.1,10,5],[15,10,5]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"1-10-15-right","vertices":[[16.1,10,0],[20,10,0],[20,10,5],[16.1,10,5]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"2-south-partition-5","vertices":[[5,0,5],[5,5,5],[5,5,10],[5,0,10]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"2-south-partition-15","vertices":[[15,0,5],[15,5,5],[15,5,10],[15,0,10]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"2-north-partition-5","vertices":[[5,10,5],[5,15,5],[5,15,10],[5,10,10]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"2-north-partition-10","vertices":[[10,10,5],[10,15,5],[10,15,10],[10,10,10]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"2-north-partition-15","vertices":[[15,10,5],[15,15,5],[15,15,10],[15,10,10]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"2-5-0-left","vertices":[[0,5,5],[3.8,5,5],[3.8,5,10],[0,5,10]],"source":"U1 原图门洞相对方位；宽度与精确位置为工程示意","precision":"calibrated"},{"id":"2-5-0-right","vertices":[[4.8,5,5],[5,5,5],[5,5,10],[4.8,5,10]],"source":"U1 原图门洞相对方位；宽度与精确位置为工程示意","precision":"calibrated"},{"id":"2-5-5-left","vertices":[[5,5,5],[8.75,5,5],[8.75,5,10],[5,5,10]],"source":"U1 原图门洞相对方位；宽度与精确位置为工程示意","precision":"calibrated"},{"id":"2-5-5-right","vertices":[[9.75,5,5],[15,5,5],[15,5,10],[9.75,5,10]],"source":"U1 原图门洞相对方位；宽度与精确位置为工程示意","precision":"calibrated"},{"id":"2-5-15-left","vertices":[[15,5,5],[15.2,5,5],[15.2,5,10],[15,5,10]],"source":"U1 原图门洞相对方位；宽度与精确位置为工程示意","precision":"calibrated"},{"id":"2-5-15-right","vertices":[[16.2,5,5],[20,5,5],[20,5,10],[16.2,5,10]],"source":"U1 原图门洞相对方位；宽度与精确位置为工程示意","precision":"calibrated"},{"id":"2-10-0-left","vertices":[[0,10,5],[3.9000000000000004,10,5],[3.9000000000000004,10,10],[0,10,10]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"2-10-0-right","vertices":[[4.9,10,5],[5,10,5],[5,10,10],[4.9,10,10]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"2-10-5-left","vertices":[[5,10,5],[8.9,10,5],[8.9,10,10],[5,10,10]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"2-10-5-right","vertices":[[9.9,10,5],[10,10,5],[10,10,10],[9.9,10,10]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"2-10-10-left","vertices":[[10,10,5],[13.9,10,5],[13.9,10,10],[10,10,10]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"2-10-10-right","vertices":[[14.9,10,5],[15,10,5],[15,10,10],[14.9,10,10]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"2-10-15-left","vertices":[[15,10,5],[15.1,10,5],[15.1,10,10],[15,10,10]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"2-10-15-right","vertices":[[16.1,10,5],[20,10,5],[20,10,10],[16.1,10,10]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"3-south-partition-5","vertices":[[5,0,10],[5,5,10],[5,5,15],[5,0,15]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"3-south-partition-15","vertices":[[15,0,10],[15,5,10],[15,5,15],[15,0,15]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"3-north-partition-5","vertices":[[5,10,10],[5,15,10],[5,15,15],[5,10,15]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"3-north-partition-10","vertices":[[10,10,10],[10,15,10],[10,15,15],[10,10,15]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"3-north-partition-15","vertices":[[15,10,10],[15,15,10],[15,15,15],[15,10,15]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"3-5-0-left","vertices":[[0,5,10],[3.8,5,10],[3.8,5,15],[0,5,15]],"source":"U1 原图门洞相对方位；宽度与精确位置为工程示意","precision":"calibrated"},{"id":"3-5-0-right","vertices":[[4.8,5,10],[5,5,10],[5,5,15],[4.8,5,15]],"source":"U1 原图门洞相对方位；宽度与精确位置为工程示意","precision":"calibrated"},{"id":"3-5-5-left","vertices":[[5,5,10],[8.75,5,10],[8.75,5,15],[5,5,15]],"source":"U1 原图门洞相对方位；宽度与精确位置为工程示意","precision":"calibrated"},{"id":"3-5-5-right","vertices":[[9.75,5,10],[15,5,10],[15,5,15],[9.75,5,15]],"source":"U1 原图门洞相对方位；宽度与精确位置为工程示意","precision":"calibrated"},{"id":"3-5-15-left","vertices":[[15,5,10],[15.2,5,10],[15.2,5,15],[15,5,15]],"source":"U1 原图门洞相对方位；宽度与精确位置为工程示意","precision":"calibrated"},{"id":"3-5-15-right","vertices":[[16.2,5,10],[20,5,10],[20,5,15],[16.2,5,15]],"source":"U1 原图门洞相对方位；宽度与精确位置为工程示意","precision":"calibrated"},{"id":"3-10-0-left","vertices":[[0,10,10],[3.9000000000000004,10,10],[3.9000000000000004,10,15],[0,10,15]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"3-10-0-right","vertices":[[4.9,10,10],[5,10,10],[5,10,15],[4.9,10,15]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"3-10-5-left","vertices":[[5,10,10],[8.9,10,10],[8.9,10,15],[5,10,15]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"3-10-5-right","vertices":[[9.9,10,10],[10,10,10],[10,10,15],[9.9,10,15]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"3-10-10-left","vertices":[[10,10,10],[13.9,10,10],[13.9,10,15],[10,10,15]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"3-10-10-right","vertices":[[14.9,10,10],[15,10,10],[15,10,15],[14.9,10,15]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"3-10-15-left","vertices":[[15,10,10],[15.1,10,10],[15.1,10,15],[15,10,15]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"3-10-15-right","vertices":[[16.1,10,10],[20,10,10],[20,10,15],[16.1,10,15]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"1-outer-south","vertices":[[0,0,0],[20,0,0],[20,0,5],[0,0,5]],"source":"U1 外墙与出入口；门尺寸及精确位置为工程示意","precision":"calibrated"},{"id":"1-outer-north","vertices":[[0,15,0],[20,15,0],[20,15,5],[0,15,5]],"source":"U1 外墙与出入口；门尺寸及精确位置为工程示意","precision":"calibrated"},{"id":"1-outer-west-south","vertices":[[0,0,0],[0,7,0],[0,7,5],[0,0,5]],"source":"U1 外墙与出入口；门尺寸及精确位置为工程示意","precision":"calibrated"},{"id":"1-outer-west-gate","vertices":[[0,7,0],[0,8,0],[0,8,5],[0,7,5]],"source":"U1 外墙与出入口；门尺寸及精确位置为工程示意","precision":"calibrated"},{"id":"1-outer-west-north","vertices":[[0,8,0],[0,15,0],[0,15,5],[0,8,5]],"source":"U1 外墙与出入口；门尺寸及精确位置为工程示意","precision":"calibrated"},{"id":"1-outer-east-south","vertices":[[20,0,0],[20,7,0],[20,7,5],[20,0,5]],"source":"U1 外墙与出入口；门尺寸及精确位置为工程示意","precision":"calibrated"},{"id":"1-outer-east-gate","vertices":[[20,7,0],[20,8,0],[20,8,5],[20,7,5]],"source":"U1 外墙与出入口；门尺寸及精确位置为工程示意","precision":"calibrated"},{"id":"1-outer-east-north","vertices":[[20,8,0],[20,15,0],[20,15,5],[20,8,5]],"source":"U1 外墙与出入口；门尺寸及精确位置为工程示意","precision":"calibrated"},{"id":"2-outer-south","vertices":[[0,0,5],[20,0,5],[20,0,10],[0,0,10]],"source":"U1 外墙与出入口；门尺寸及精确位置为工程示意","precision":"calibrated"},{"id":"2-outer-north","vertices":[[0,15,5],[20,15,5],[20,15,10],[0,15,10]],"source":"U1 外墙与出入口；门尺寸及精确位置为工程示意","precision":"calibrated"},{"id":"2-outer-west","vertices":[[0,0,5],[0,15,5],[0,15,10],[0,0,10]],"source":"U1 外墙与出入口；门尺寸及精确位置为工程示意","precision":"calibrated"},{"id":"2-outer-east","vertices":[[20,0,5],[20,15,5],[20,15,10],[20,0,10]],"source":"U1 外墙与出入口；门尺寸及精确位置为工程示意","precision":"calibrated"},{"id":"3-outer-south","vertices":[[0,0,10],[20,0,10],[20,0,15],[0,0,15]],"source":"U1 外墙与出入口；门尺寸及精确位置为工程示意","precision":"calibrated"},{"id":"3-outer-north","vertices":[[0,15,10],[20,15,10],[20,15,15],[0,15,15]],"source":"U1 外墙与出入口；门尺寸及精确位置为工程示意","precision":"calibrated"},{"id":"3-outer-west","vertices":[[0,0,10],[0,15,10],[0,15,15],[0,0,15]],"source":"U1 外墙与出入口；门尺寸及精确位置为工程示意","precision":"calibrated"},{"id":"3-outer-east","vertices":[[20,0,10],[20,15,10],[20,15,15],[20,0,15]],"source":"U1 外墙与出入口；门尺寸及精确位置为工程示意","precision":"calibrated"}],"regions":[{"regionId":"1-1","lighting":"unknown","radiation":"unknown","source":"U1/P3"},{"regionId":"1-2","lighting":"unknown","radiation":"unknown","source":"U1/P3"},{"regionId":"1-3","lighting":"unlit","radiation":"unknown","source":"U1/P3"},{"regionId":"1-4","lighting":"unknown","radiation":"unknown","source":"U1/P3"},{"regionId":"1-5","lighting":"unknown","radiation":"unknown","source":"U1/P3"},{"regionId":"1-6","lighting":"unlit","radiation":"unknown","source":"U1/P3"},{"regionId":"1-7","lighting":"unlit","radiation":"unknown","source":"U1/P3"},{"regionId":"1-hall","lighting":"unlit","radiation":"strong","source":"U1/P3"},{"regionId":"2-1","lighting":"unknown","radiation":"unknown","source":"U1/P3"},{"regionId":"2-2","lighting":"unknown","radiation":"unknown","source":"U1/P3","owner":"塞西莉亚"},{"regionId":"2-3","lighting":"unknown","radiation":"unknown","source":"U1/P3"},{"regionId":"2-4","lighting":"unknown","radiation":"unknown","source":"U1/P3","owner":"柏尔齐"},{"regionId":"2-5","lighting":"unknown","radiation":"unknown","source":"U1/P3","owner":"迪帕克"},{"regionId":"2-6","lighting":"unknown","radiation":"unknown","source":"U1/P3","owner":"艾可"},{"regionId":"2-7","lighting":"unknown","radiation":"unknown","source":"U1/P3","owner":"菲娜"},{"regionId":"2-hall","lighting":"unknown","radiation":"strong","source":"U1/P3"},{"regionId":"3-1","lighting":"unknown","radiation":"strong","source":"U1/P3"},{"regionId":"3-2","lighting":"unknown","radiation":"strong","source":"U1/P3"},{"regionId":"3-3","lighting":"unknown","radiation":"strong","source":"U1/P3"},{"regionId":"3-4","lighting":"unknown","radiation":"strong","source":"U1/P3"},{"regionId":"3-5","lighting":"unknown","radiation":"strong","source":"U1/P3"},{"regionId":"3-6","lighting":"unknown","radiation":"strong","source":"U1/P3"},{"regionId":"3-7","lighting":"unknown","radiation":"strong","source":"U1/P3"},{"regionId":"3-hall","lighting":"unknown","radiation":"strong","source":"U1/P3"}],"facilities":[{"id":"platform-empty","regionId":"1-1","label":"空悬浮台","position":[2.5,2.5,2.5],"source":"U1/P3;图标位置工程标定","precision":"calibrated"},{"id":"platform-stamp","regionId":"1-4","label":"印章悬浮台","position":[2.5,12.5,2.5],"source":"U1/P3;图标位置工程标定","precision":"calibrated"},{"id":"platform-key","regionId":"1-5","label":"钥匙悬浮台","position":[7.5,12.5,2.5],"source":"U1/P3;图标位置工程标定","precision":"calibrated"},{"id":"meteor","regionId":"3-2","label":"陨石（西半）","position":[7.5,2.5,12.5],"source":"U1/P3;图标位置工程标定","precision":"calibrated"},{"id":"barrier-idle","regionId":"3-2","label":"屏障 · 未开启","position":[8.5,2.5,12.5],"source":"U1/P3;图标位置工程标定","precision":"calibrated"},{"id":"device","regionId":"1-6","label":"核弹","position":[12.5,12.5,2.5],"source":"U1/P3;图标位置工程标定","precision":"calibrated"},{"id":"barrier-active","regionId":"1-6","label":"屏障 · 已覆盖核弹","position":[12.5,12.5,2.5],"source":"U1/P3;图标位置工程标定","precision":"calibrated"},{"id":"repair-2-4","regionId":"2-4","label":"修复装置","position":[2.5,12.5,7.5],"source":"U1/P3;图标位置工程标定","precision":"calibrated"},{"id":"repair-2-5","regionId":"2-5","label":"修复装置","position":[7.5,12.5,7.5],"source":"U1/P3;图标位置工程标定","precision":"calibrated"},{"id":"repair-2-6","regionId":"2-6","label":"修复装置","position":[12.5,12.5,7.5],"source":"U1/P3;图标位置工程标定","precision":"calibrated"},{"id":"repair-2-7","regionId":"2-7","label":"修复装置","position":[17.5,12.5,7.5],"source":"U1/P3;图标位置工程标定","precision":"calibrated"},{"id":"repair-2-2","regionId":"2-2","label":"修复装置","position":[10,2.5,7.5],"source":"U1/P3;图标位置工程标定","precision":"calibrated"}]}}'),Ml=[{id:"dimensions",source:"研究所地图与已发设施说明",description:"常规房5m，2号双宽；门5×5m。走廊与层高按格图标定，不用于精细碰撞判定。"},{id:"mark",source:"谜题三源页7—8",description:"印记与锁盘图案完全重合；外开只表示解锁，门扇仍在外侧。"},{id:"U1",source:"U1 · 已发研究所平面图 / P3",description:"房号与实体隔墙分离；无灯、辐射和房主各自登记。普通开口位置仅示意，不提供精细通行或角色可见性保证。"}],Sl={kind:fl,schemaVersion:pl,contentVersion:ml,caseId:gl,stageId:_l,title:vl,geometry:xl,evidence:Ml};function lc(i){return i.caseId==="neutral"&&i.stageId==="neutral"&&i.contentVersion==="1"&&i.geometry.rooms.length===2&&i.geometry.rooms[0].id==="甲"&&i.geometry.rooms[1].id==="乙"}function Jr(i,e){return lc(i.pack)?{...i,pack:e}:i}function El(i){const e=JSON.stringify(i);let t=2166136261,n=2246822519;for(let r=0;r<e.length;r++){const s=e.charCodeAt(r);t=Math.imul(t^s,16777619),n=Math.imul(n^s,3266489917)}return[e.length,t>>>0,n>>>0].join(":")}const yl=new Set(["12179:3147692187:28814119","12172:324567295:2801131521"]);function bl(i){return i.caseId==="case3"&&i.stageId==="base"&&i.contentVersion==="0.2-topology"&&yl.has(El(i))}function Tl(i,e,t){if(!bl(i.state.pack)||e.caseId!=="case3"||e.stageId!=="base"||e.contentVersion!=="0.3-reference-map")return{archive:i,status:"unchanged"};const n=i.future.at(-1);if(n&&JSON.stringify(n.pack)===JSON.stringify(e)){const{pack:r,...s}=i.state,{pack:o,...a}=n;if(JSON.stringify(s)===JSON.stringify(a))return{archive:i,status:"unchanged"}}if(i.past.length+i.future.length>=1e3)return{archive:i,status:"history-full"};try{t()}catch{return{archive:i,status:"backup-failed"}}return{archive:{state:{...i.state,pack:e},past:[...i.past,i.state],future:[...i.future]},status:"upgraded"}}function Ls(i){const e=[],t=new Map,n=r=>{const s=JSON.stringify(r.pack);let o=t.get(s);o===void 0&&(o=e.length,e.push(r.pack),t.set(s,o));const{pack:a,...l}=r;return{...l,sceneRef:o}};return JSON.stringify({kind:"player-save",schemaVersion:2,appVersion:"0.4.0",scenes:e,state:n(i.state),history:{past:i.past.map(n),future:i.future.map(n)}})}function uc(i,e){if(!i||typeof i!="object")throw Error("方案文件无效");const t=i;if(t.kind==="player-save"&&t.schemaVersion===2){if(!Array.isArray(t.scenes)||t.scenes.length<1||t.scenes.length>1001||!t.history||!Array.isArray(t.history.past)||!Array.isArray(t.history.future)||t.history.past.length+t.history.future.length>1e3)throw Error("存档场景或历史格式无效");const n=r=>{if(!r||typeof r!="object")throw Error("存档记录无效");const s=r,o=s.sceneRef;if(!Number.isInteger(o)||Number(o)<0||Number(o)>=t.scenes.length)throw Error("存档场景引用无效");const{sceneRef:a,...l}=s;return e({...l,pack:t.scenes[Number(o)]})};return{state:n(t.state),past:t.history.past.map(n),future:t.history.future.map(n)}}if(t.kind==="player-save"&&t.schemaVersion!==1)throw Error("不支持的存档版本");if(t.kind==="player-save"||t.kind==="geometry-history"){const n=t.kind==="player-save"?t.history:{past:t.past,future:t.future};if(n!==void 0&&(!n||!Array.isArray(n.past)||!Array.isArray(n.future)||n.past.length+n.future.length>1e3))throw Error("历史数据无效");return{state:e(t.state),past:(n?.past??[]).map(e),future:(n?.future??[]).map(e)}}return{state:e(i),past:[],future:[]}}const Al=36e3,Ji=()=>({cursor:0,events:[],sessions:[],nextSeq:1,doorHistory:[],selectedSessionId:null}),_n=i=>typeof i=="number"&&Number.isSafeInteger(i)&&Math.abs(i)<=315576e4;function dc(i,e){if(e<i.triggerAt)return;const t=i.anchorAt+e-i.triggerAt;return _n(t)?t:void 0}function hc(i,e){return i.transitions.filter(t=>t.at<=e).sort((t,n)=>t.at-n.at||t.seq-n.seq).at(-1)}function ea(i,e){return i.filter(t=>t.at<=e).sort((t,n)=>n.at-t.at||n.seq-t.seq)[0]}function Co(i){const e=i.selectedSessionId;if(!e)return{kind:"inactive",reason:"未选择会话"};const t=i.sessions.find(a=>a.id===e);if(!t)return{kind:"inactive",reason:"所选会话不存在"};const n=dc(t,i.cursor),r=hc(t,i.cursor);if(n===void 0||!r)return{kind:"inactive",reason:i.cursor<t.triggerAt?"所选时间早于会话触发":"锚定时间超出可计算范围"};if(r.phase==="REAL")return{kind:"inactive",reason:"此时会话已返回现实"};const s=ea(i.doorHistory??[],i.cursor)?.state,o=ea(i.doorHistory??[],n)?.state;return s===void 0||o===void 0?{kind:"undetermined",sessionId:e,realAt:i.cursor,anchorAt:n,real:s,anchor:o,reason:"缺少所选时间之前的门态记录"}:{kind:"determined",sessionId:e,realAt:i.cursor,anchorAt:n,real:s,anchor:o}}function Is(i,e,t,n,r){if(!_n(e)||!Number.isSafeInteger(t))throw Error("时间或顺序无效");const s=i.transitions.at(-1);if(!s||e<s.at)throw Error("变更时间不能早于已有阶段记录");if(!{PRE_IN:["ANCHORED","REAL"],ANCHORED:["PRE_OUT","REAL"],PRE_OUT:["REAL"],REAL:[]}[s.phase].includes(n))throw Error("当前阶段不能直接切换到该阶段");if(r!==void 0&&(r!=="death"||n!=="REAL"))throw Error("阶段切换原因无效");if(s.phase==="ANCHORED"&&n==="REAL"&&r!=="death")throw Error("锚定阶段须先进入锚出准备；死亡另行记录");if(r!=="death"&&(s.phase==="PRE_IN"&&n==="ANCHORED"||s.phase==="PRE_OUT"&&n==="REAL")&&e-s.at<Al)throw Error("准备期尚未达到10小时；死亡立即回归需单独记录");return{...i,transitions:[...i.transitions,{at:e,seq:t,phase:n,...r?{cause:r}:{}}]}}function ti(i){if(!_n(i))return"时间无效";const e=new Date(Date.UTC(2055,9,21,8,0,0)+i*1e3),t=n=>String(n).padStart(2,"0");return`${e.getUTCFullYear()}-${t(e.getUTCMonth()+1)}-${t(e.getUTCDate())} ${t(e.getUTCHours())}:${t(e.getUTCMinutes())}:${t(e.getUTCSeconds())}`}function wn(i){const e=/^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})(?::(\d{2}))?$/.exec(i);if(!e)throw Error("请输入完整剧情日期和时间");const[t,n,r,s,o,a]=e.slice(1).map(d=>Number(d||0)),l=Date.UTC(t,n-1,r,s,o,a),c=new Date(l);if(c.getUTCFullYear()!==t||c.getUTCMonth()!==n-1||c.getUTCDate()!==r||c.getUTCHours()!==s||c.getUTCMinutes()!==o||c.getUTCSeconds()!==a)throw Error("日期或时间无效");const h=(l-Date.UTC(2055,9,21,8))/1e3;if(!_n(h))throw Error("日期超出范围");return h}function Dr(i){if(!i||typeof i!="object")throw Error("时间记录无效");const e=i;if(!_n(e.cursor)||!Number.isSafeInteger(e.nextSeq)||e.nextSeq<1||!Array.isArray(e.events)||e.events.length>1e3||!Array.isArray(e.sessions)||e.sessions.length>100)throw Error("时间记录格式无效");const t=(c,h)=>typeof c=="string"&&c.length<=h,n=new Set,r=new Set;let s=0;const o=c=>{if(!Number.isSafeInteger(c)||c<1||r.has(c))throw Error("顺序号无效");r.add(c),s=Math.max(s,c)};for(const c of e.events){if(!t(c.id,80)||!c.id||n.has(c.id)||!_n(c.at)||!t(c.actor,80)||!t(c.description,300))throw Error("事件格式无效");n.add(c.id),o(c.seq)}for(const c of e.sessions){if(!t(c.id,80)||!c.id||n.has(c.id)||!t(c.actor,80)||!_n(c.triggerAt)||!_n(c.anchorAt)||!t(c.anchorMark,80)||!t(c.returnMark,80)||!Array.isArray(c.transitions)||c.transitions.length<1||c.transitions.length>100)throw Error("会话格式无效");n.add(c.id);const h=c.transitions[0];if(h.phase!=="PRE_IN"||h.at!==c.triggerAt)throw Error("会话起始阶段无效");if(o(h.seq),h.cause!==void 0)throw Error("会话起始原因无效");let d={...c,transitions:[h]};for(const f of c.transitions.slice(1))o(f.seq),d=Is(d,f.at,f.seq,f.phase,f.cause)}const a=e.doorHistory===void 0?[]:e.doorHistory;if(!Array.isArray(a)||a.length>1e3)throw Error("门态历史格式无效");for(const c of a){if(!c||!t(c.id,80)||!c.id||n.has(c.id)||!_n(c.at)||!["OUT_LOCKED","OUT_UNLOCKED","IN_LOCKED","IN_UNLOCKED"].includes(c.state))throw Error("门态历史字段无效");n.add(c.id),o(c.seq)}const l=e.selectedSessionId??null;if(l!==null&&(!t(l,80)||!e.sessions.some(c=>c.id===l)))throw Error("所选会话无效");if(e.nextSeq<=s)throw Error("下一顺序号无效");return structuredClone({...e,doorHistory:a,selectedSessionId:l})}const Qr={PRE_IN:"锚入准备",ANCHORED:"锚定世界",PRE_OUT:"锚出准备",REAL:"现实世界"};function wl(i,e,t=Ji()){let n=Dr(t);const r=(f,p)=>{const g=document.createElement(f);return p!==void 0&&(g.textContent=p),g},s=(f,p)=>{const g=r("button",f);return g.type="button",g.onclick=p,g},o=(f,p="text",g="")=>{const _=r("label");_.textContent=f;const m=r("input");return m.type=p,m.value=g,p==="datetime-local"&&(m.step="1"),_.append(m),{wrap:_,input:m}},a=f=>ti(f).replace(" ","T");let l="";function c(f){n=Dr(f),e?.(structuredClone(n)),d()}function h(f){try{l="",f()}catch(p){l=p instanceof Error?p.message:"输入无效";const g=i.querySelector("[data-time-status]");g&&(g.textContent=l)}}function d(){const f=r("section");f.className="time-workbench";const p=r("p","记录你自己的假设。剧情时间只由你调整，关闭页面不会推进。");f.append(p);const g=r("p",l);g.setAttribute("role","status"),g.dataset.timeStatus="",f.append(g);const _=o("查看的现实时间","datetime-local",a(n.cursor));f.append(_.wrap,s("查看此刻",()=>h(()=>c({...n,cursor:wn(_.input.value)}))));const m=r("div");for(const[X,ae]of[["+1秒",1],["+1分",60],["+1小时",3600]])m.append(s(X,()=>h(()=>c({...n,cursor:n.cursor+ae}))));f.append(m),f.append(r("p",`现实时间：${ti(n.cursor)}（剧情时间）`));const u=r("details");u.append(r("summary","添加假设事件"));const R=o("事件时间","datetime-local",a(n.cursor)),A=o("人物或主体（可留空）"),M=o("事件描述");M.input.maxLength=300,A.input.maxLength=80,u.append(R.wrap,A.wrap,M.wrap,s("记录事件",()=>h(()=>{if(!M.input.value.trim())throw Error("请填写事件描述");if(n.events.length>=1e3)throw Error("事件达到上限，请导出归档");const X=n.nextSeq;c({...n,nextSeq:X+1,events:[...n.events,{id:`event-${X}`,at:wn(R.input.value),seq:X,actor:A.input.value.trim(),description:M.input.value.trim()}]})}))),f.append(u),f.append(r("h3","假设时间线")),n.events.length||f.append(r("p","尚无事件。"));const T=r("ol");for(const X of[...n.events].sort((ae,ge)=>ae.at-ge.at||ae.seq-ge.seq)){const ae=r("li");ae.append(r("span",`${ti(X.at)} · 次序${X.seq} · ${X.actor||"主体未填写"}：${X.description}（假设） `),s("删除",()=>c({...n,events:n.events.filter(ge=>ge.id!==X.id)}))),T.append(ae)}f.append(T);const b=r("details");b.append(r("summary","记录密封门历史假设")),b.append(r("p","填写现实历史中的门态；系统按当前时间与会话的锚定时间分别查询。时间早于所有记录时保持未知。此处只记录你的假设，不代表已检查操作次数或历史可达性。"));const y=o("门态生效的剧情时间","datetime-local",a(n.cursor)),P=r("select");P.setAttribute("aria-label","假设的密封门状态");for(const[X,ae]of[["OUT_LOCKED","外锁"],["OUT_UNLOCKED","外开（仅解锁）"],["IN_LOCKED","内锁"],["IN_UNLOCKED","内开"]]){const ge=r("option",ae);ge.value=X,P.append(ge)}b.append(y.wrap,P,s("记录门态假设",()=>h(()=>{if((n.doorHistory??[]).length>=1e3)throw Error("门态历史达到上限，请导出归档");const X=n.nextSeq;c({...n,nextSeq:X+1,doorHistory:[...n.doorHistory??[],{id:`door-${X}`,at:wn(y.input.value),seq:X,state:P.value}]})})));const S=r("ol"),x={OUT_LOCKED:"外锁",OUT_UNLOCKED:"外开",IN_LOCKED:"内锁",IN_UNLOCKED:"内开"};for(const X of[...n.doorHistory??[]].sort((ae,ge)=>ae.at-ge.at||ae.seq-ge.seq)){const ae=r("li");ae.append(r("span",`${ti(X.at)} · 次序${X.seq} · ${x[X.state]}（假设） `),s("删除门态记录",()=>c({...n,doorHistory:(n.doorHistory??[]).filter(ge=>ge.id!==X.id)}))),S.append(ae)}n.doorHistory?.length||b.append(r("p","尚无门态记录。")),b.append(S),f.append(b);const C=r("details");C.append(r("summary","建立独立会话"));const U=o("触发者（玩家填写）"),k=o("触发的现实时间","datetime-local",a(n.cursor)),Y=o("锚定开始的过去时间","datetime-local"),O=o("锚定印记标识"),N=o("回归印记标识");for(const X of[U,k,Y,O,N])C.append(X.wrap);C.append(s("建立会话",()=>h(()=>{if(!U.input.value.trim()||!O.input.value.trim()||!N.input.value.trim())throw Error("请填写触发者、两个印记和时间");if(n.sessions.length>=100)throw Error("会话达到上限");const X=n.nextSeq,ae=wn(k.input.value);c({...n,nextSeq:X+1,sessions:[...n.sessions,{id:`session-${X}`,actor:U.input.value.trim(),triggerAt:ae,anchorAt:wn(Y.input.value),anchorMark:O.input.value.trim(),returnMark:N.input.value.trim(),transitions:[{at:ae,seq:X,phase:"PRE_IN"}]}]})}))),f.append(C,r("h3","独立会话"));const W=r("select");W.setAttribute("aria-label","选择用于空间联动的会话");const I=r("option","空间组合试验（不联动历史）");I.value="",W.append(I);for(const X of n.sessions){const ae=r("option",`${X.actor} · ${X.id}`);ae.value=X.id,W.append(ae)}W.value=n.selectedSessionId??"",W.addEventListener("change",()=>c({...n,selectedSessionId:W.value||null}));const j=r("label","选择空间联动模式");j.append(W),f.append(j,r("p","选择会话进行空间联动，表示你假设该会话的两个印记均位于密封门转盘。"));const ee=Co(n);ee.kind==="determined"?f.append(r("p",`会话门态假设：现实 ${x[ee.real]}；锚定 ${x[ee.anchor]}。`)):ee.kind==="undetermined"?f.append(r("p",`门态尚未确定：${ee.reason}。`)):n.selectedSessionId&&f.append(r("p",ee.reason));for(const X of n.sessions){const ae=r("article");ae.append(r("h4",X.actor+" · 假设会话（"+X.id+"）"),r("p",`锚定印记：${X.anchorMark}；回归印记：${X.returnMark}`));const ge=hc(X,n.cursor),Le=dc(X,n.cursor);ae.append(r("p",ge?`当前阶段：${Qr[ge.phase]}；锚定时间：${ti(Le)}`:"所选时间早于本次触发；锚定时间未开始。"));const J=r("select");J.setAttribute("aria-label","目标阶段");for(const G of["ANCHORED","PRE_OUT","REAL"]){const ne=r("option",Qr[G]);ne.value=G,J.append(ne)}ae.append(J,s("在当前时间记录阶段切换",()=>h(()=>{const G=n.nextSeq,ne=Is(X,n.cursor,G,J.value);c({...n,nextSeq:G+1,sessions:n.sessions.map(xe=>xe.id===X.id?ne:xe)})})),s("假设死亡并立即回归",()=>h(()=>{const G=n.nextSeq,ne=Is(X,n.cursor,G,"REAL","death");c({...n,nextSeq:G+1,sessions:n.sessions.map(xe=>xe.id===X.id?ne:xe)})})),r("p","阶段切换由玩家提出；印章接触、清醒和其他条件需自行核对，当前未自动判定。"),s("删除会话",()=>c({...n,sessions:n.sessions.filter(G=>G.id!==X.id),selectedSessionId:n.selectedSessionId===X.id?null:n.selectedSessionId})));const H=r("ul");for(const G of X.transitions)H.append(r("li",`${ti(G.at)} · 次序${G.seq} · ${Qr[G.phase]}${G.cause==="death"?"（假设死亡）":""}`));ae.append(H),f.append(ae)}i.replaceChildren(f)}return d(),{getState:()=>structuredClone(n),setState:f=>{n=Dr(f),d()}}}function Rl(i,e){if(!i||typeof i!="object")throw Error("拓扑格式无效");const t=i,n=a=>typeof a=="string"&&a.length>0&&a.length<=160,r=a=>Array.isArray(a)&&a.length===3&&a.every(l=>typeof l=="number"&&Number.isFinite(l)&&Math.abs(l)<1e4);if(!n(t.version)||!Array.isArray(t.panels)||t.panels.length>2e3||!Array.isArray(t.regions)||t.regions.length>300||!Array.isArray(t.facilities)||t.facilities.length>300)throw Error("拓扑数量或版本无效");const s=new Set;for(const a of t.panels){if(!n(a.id)||s.has(a.id)||!n(a.source)||!["calibrated","explicit"].includes(a.precision)||!Array.isArray(a.vertices)||a.vertices.length!==4||!a.vertices.every(r))throw Error("墙面数据无效");s.add(a.id)}const o=new Set;for(const a of t.regions){if(!e.has(a.regionId)||o.has(a.regionId)||!n(a.source)||!["unknown","unlit"].includes(a.lighting)||!["strong","unknown"].includes(a.radiation)||a.owner!==void 0&&!n(a.owner))throw Error("区域属性无效");o.add(a.regionId)}for(const a of t.facilities){if(!n(a.id)||s.has(a.id)||!e.has(a.regionId)||!n(a.label)||!n(a.source)||!r(a.position)||!["calibrated","explicit"].includes(a.precision))throw Error("设施数据无效");s.add(a.id)}return structuredClone({version:t.version,panels:t.panels,regions:t.regions,facilities:t.facilities})}const Dn=["OUT_LOCKED","OUT_UNLOCKED","IN_LOCKED","IN_UNLOCKED"],Br=()=>[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];function Cl(i,e){return Array.from({length:16},(t,n)=>{const r=Math.floor(n/4),s=n%4;return[0,1,2,3].reduce((o,a)=>o+i[r*4+a]*e[a*4+s],0)})}function Po(i){const e=Br();for(let t=0;t<3;t++){for(let n=0;n<3;n++)e[t*4+n]=i[n*4+t];e[t*4+3]=-[0,1,2].reduce((n,r)=>n+e[t*4+r]*i[r*4+3],0)}return e}function Qe(i,e){return[0,1,2].map(t=>i[t*4]*e[0]+i[t*4+1]*e[1]+i[t*4+2]*e[2]+i[t*4+3])}function Ns(i){switch(i){case"OUT_LOCKED":return[1,0,0,7.5,0,0,-1,5,0,1,0,2.5,0,0,0,1];case"OUT_UNLOCKED":return[0,1,0,7.5,0,0,-1,5,-1,0,0,2.5,0,0,0,1];case"IN_LOCKED":return[0,0,1,10,1,0,0,2.5,0,1,0,2.5,0,0,0,1];case"IN_UNLOCKED":return[0,0,1,10,0,1,0,2.5,-1,0,0,2.5,0,0,0,1]}}const Os=(i,e)=>Cl(Ns(i),Po(Ns(e)));function Do(i){if(!i||typeof i!="object")throw Error("场景必须为JSON对象");const e=i,t=r=>Array.isArray(r)&&r.length===3&&r.every(s=>typeof s=="number"&&Number.isFinite(s)&&Math.abs(s)<1e4);if(e.kind!=="scene-pack"||e.schemaVersion!==1||typeof e.title!="string"||typeof e.caseId!="string"||typeof e.stageId!="string"||typeof e.contentVersion!="string"||!Array.isArray(e.geometry?.rooms)||e.geometry.rooms.length>300||!Array.isArray(e.evidence))throw Error("不支持的场景格式");const n=new Set;for(const r of e.geometry.rooms){if(typeof r.id!="string"||r.id.length>40||n.has(r.id)||!t(r.min)||!t(r.max)||r.min.some((s,o)=>s>=r.max[o]))throw Error("房间坐标或编号无效");n.add(r.id)}if(e.evidence.some(r=>typeof r.id!="string"||typeof r.source!="string"||typeof r.description!="string"))throw Error("来源字段无效");return{kind:e.kind,schemaVersion:1,contentVersion:e.contentVersion,caseId:e.caseId,stageId:e.stageId,title:e.title.slice(0,80),geometry:{rooms:e.geometry.rooms.map(r=>({id:r.id,min:[...r.min],max:[...r.max]})),...e.geometry.topology?{topology:Rl(e.geometry.topology,n)}:{}},evidence:e.evidence.map(r=>({id:r.id,source:r.source,description:r.description}))}}function fc(i,e,t=!1){const n=i.find(r=>r.min.every((s,o)=>e[o]>s+1e-6&&e[o]<r.max[o]-1e-6));if(!n)return"房间外或边界（需检查剖面）";if(t&&n.id==="3-2"){const r=e[0]-(n.min[0]+n.max[0])/2;return n.id+(Math.abs(r)<=1e-6?"（东西半区分界）":r<0?"（西半）":"（东半）")}return n.id}const Qi=()=>({version:1,nextId:1,entities:[]}),ni=(i,e)=>typeof i=="string"&&i.length<=e;function pc(i){if(!i||typeof i!="object")throw Error("人物与物件数据无效");const e=i;if(e.version!==1||!Number.isSafeInteger(e.nextId)||e.nextId<1||!Array.isArray(e.entities)||e.entities.length>200)throw Error("人物与物件数据版本或数量无效");const t=new Set;for(const r of e.entities){if(!r||!ni(r.id,80)||!r.id||t.has(r.id)||!["actor","object"].includes(r.kind)||!ni(r.label,80)||!r.label.trim()||!ni(r.location,160)||!ni(r.notes,2e3)||!["unknown","real","anchor"].includes(r.world)||typeof r.wearable!="boolean"||!(r.massKg===null||typeof r.massKg=="number"&&Number.isFinite(r.massKg)&&r.massKg>0&&r.massKg<=1e5)||!r.binding||!["unknown","unbound","bound"].includes(r.binding.kind)||r.binding.kind==="bound"&&(!ni(r.binding.sessionId,80)||!r.binding.sessionId.trim()))throw Error("人物或物件字段无效");if(r.anchorSessionId!==void 0&&!ni(r.anchorSessionId,80))throw Error("锚定会话标识无效");if(r.position!==void 0&&r.position!==null&&(!Array.isArray(r.position)||r.position.length!==3||!r.position.every(s=>typeof s=="number"&&Number.isFinite(s)&&Math.abs(s)<1e4)))throw Error("人物或物件坐标无效");t.add(r.id)}const n=structuredClone(e);for(const r of n.entities)r.position??=null;return n}function Pl(i,e,t=null){return i.entities.flatMap(n=>n.world==="unknown"||!n.position||n.world==="anchor"&&(!e||!t||n.anchorSessionId!==t)?[]:[{id:n.id,kind:n.kind,label:n.label,world:n.world,position:n.world==="real"?[...n.position]:Qe(e,n.position)}])}function Dl(i,e,t){const n=[];let r=!1,s=!1;if(i.kind!=="actor"||e.some(a=>a.id===i.id)||new Set(e.map(a=>a.id)).size!==e.length)return{status:"undetermined",messages:["请选择携带者及其他不重复的实体，不能携带自己。"],totalKg:null};e.some(a=>!a.wearable)&&t==="no"&&(r=!0,n.push("你选择了触发时未接触；所选非衣饰物件不满足接触条件。")),e.some(a=>!a.wearable)&&t==="unknown"&&(s=!0,n.push("触发时是否接触尚未填写；衣饰可按公开例外自动纳入。")),e.some(a=>a.binding.kind==="bound")&&(r=!0,n.push("所选物件中有被假设已绑定的物件；不能同时绑定到另一会话。")),e.some(a=>a.binding.kind==="unknown")&&(s=!0,n.push("所选物件是否已绑定未知；不能当作未绑定。"));const o=e.every(a=>a.massKg!==null)?e.reduce((a,l)=>a+l.massKg,0):null;return i.massKg===null||o===null?(s=!0,n.push("人物体重或物件重量未知，无法判断质量上限。")):o>i.massKg?(r=!0,n.push(`所选物件合计 ${o} kg，超过假设体重 ${i.massKg} kg。`)):n.push(`所选物件合计 ${o} kg，未超过假设体重 ${i.massKg} kg。`),e.some(a=>a.wearable)&&n.push("已选衣物饰品计入总重量；请确认所有穿戴物均已计入。"),e.some(a=>a.kind==="actor")&&n.push("被携带的活物不因此进入主动触发冷却；会话阶段需另行记录。"),n.push("请确认穿戴衣饰及其重量均已计入。该检查只覆盖已输入条件，不判断整个方案是否可行。"),{status:r?"violated":s?"undetermined":"determined",messages:n,totalKg:o}}function Ul(i,e=()=>{},t){let n=Qi(),r=null,s="actor";const o=(p,g)=>{const _=document.createElement(p);return g!==void 0&&(_.textContent=g),_},a=(p,g)=>{const _=o("button",p);return _.type="button",_.addEventListener("click",g),_},l=(p,g="text")=>{const _=o("input");return _.type=g,_.value=p,_},c=(p,g)=>{const _=o("select");for(const[m,u]of p){const R=o("option",u);R.value=m,_.append(R)}return _.value=g,_},h=(p,g)=>{const _=o("label");return _.append(document.createTextNode(p),g),_};function d(){e(structuredClone(n)),f()}function f(){i.replaceChildren(),i.append(o("h2","人物与物件假设"),o("p","自行添加人物、物件和位置；所有内容均是你的假设。"));const p=o("div");n.entities.length||p.append(o("p","尚未添加人物或物件。"));for(const J of n.entities){const H=o("div"),G=o("p"),ne=J.position?J.position.join(" / "):"坐标未知";let xe="";if(J.position&&J.world!=="unknown"&&t){const _e=t();xe=" · 坐标区域："+fc(_e.rooms,J.position,_e.caseId==="case3")}G.textContent=`${J.kind==="actor"?"人物":"物件"}：${J.label} · ${J.location||"位置描述未填写"} · ${J.world==="unknown"?"世界未知":J.world==="real"?"现实":"锚定"} · ${ne}${xe} · ${J.massKg===null?"重量未知":J.massKg+" kg"} · ${J.binding.kind==="unknown"?"绑定未知":J.binding.kind==="unbound"?"假设未绑定":"假设绑定 "+J.binding.sessionId}`,H.append(G,a("编辑 "+J.label,()=>{r=J.id,f()}),a("删除 "+J.label,()=>{confirm(`删除“${J.label}”的这条假设？`)&&(n.entities=n.entities.filter(_e=>_e.id!==J.id),r===J.id&&(r=null),d())})),p.append(H)}i.append(p);const g=o("div");g.append(a("新增人物",()=>{s="actor",r=null,f()}),a("新增物件",()=>{s="object",r=null,f()})),i.append(g);const _=n.entities.find(J=>J.id===r),m=_?.kind??s,u=o("form");u.append(o("h3",_?"编辑假设":m==="actor"?"新增人物":"新增物件"));const R=l(_?.label??""),A=l(_?.massKg===null||_?.massKg===void 0?"":String(_.massKg),"number"),M=l(_?.location??""),T=o("textarea");R.required=!0,R.maxLength=80,A.min="0.001",A.max="100000",A.step="any",M.maxLength=160,T.maxLength=2e3,T.value=_?.notes??"";const b=c([["unknown","未知"],["real","现实"],["anchor","锚定"]],_?.world??"unknown"),y=[0,1,2].map(J=>{const H=l(_?.position?String(_.position[J]):"","number");return H.step="any",H.min="-9999",H.max="9999",H}),P=c([["unknown","未知"],["unbound","假设未绑定"],["bound","假设已绑定"]],_?.binding.kind??"unknown"),S=l(_?.anchorSessionId??"");S.maxLength=80;const x=l(_?.binding.kind==="bound"?_.binding.sessionId:"");x.maxLength=80;const C=l("","checkbox");C.checked=_?.wearable??!1,u.append(h("名称",R),h("重量（kg，留空为未知）",A),h("位置描述（可留空）",M),h("所在世界",b));const U=o("fieldset");U.append(o("legend","所选世界的坐标（米；全部留空为未知）")),["东向 x","北向 y","高度 z"].forEach((J,H)=>U.append(h(J,y[H]))),U.append(o("p","锚定实体只在选中对应独立会话时显示；会话标识可在时间线中查看。坐标使用所选世界自身的轴。切换世界后，请重新核对坐标；坐标未知时不会在模型上显示。")),t&&U.append(a("使用地图上的现实探针",()=>{const J=U.querySelector("[data-probe-status]");if(b.value==="unknown"){J.textContent="请先选择所在世界。";return}const H=t();if(b.value==="anchor"&&!H.anchorToReal){J.textContent="两边门态尚未确定，无法计算锚定世界的探针坐标。";return}const G=b.value==="anchor"?Qe(Po(H.anchorToReal),H.probe):H.probe;y.forEach((ne,xe)=>ne.value=String(Math.round(G[xe]*1e3)/1e3)),J.textContent="已填入探针对应坐标；保存后生效。"}));const k=o("p");k.dataset.probeStatus="",k.setAttribute("role","status"),U.append(k),u.append(U,h("锚定世界所属会话标识（未知留空）",S),h("绑定状态",P),h("已绑定时填写会话标识",x)),m==="object"&&u.append(h("这是穿戴的衣物或饰品（参与总重量）",C)),u.append(h("备注（可留空）",T));const Y=o("p");Y.setAttribute("role","status"),u.append(Y);const O=o("button",_?"保存修改":"添加假设");O.type="submit",u.append(O),u.addEventListener("submit",J=>{J.preventDefault();const H=R.value.trim(),G=A.value.trim()===""?null:Number(A.value);if(!H||G!==null&&(!Number.isFinite(G)||G<=0||G>1e5)){Y.textContent="请填写名称；重量留空或填写大于0的数值。";return}const ne=y.map(D=>D.value.trim());let xe=null;if(ne.some(Boolean)){if(ne.some($e=>!$e)){Y.textContent="坐标需全部填写，或全部留空。";return}const D=ne.map(Number);if(D.some($e=>!Number.isFinite($e)||Math.abs($e)>=1e4)){Y.textContent="坐标必须是 -10000 到 10000 之间的有限数字。";return}xe=D}let _e={kind:"unknown"};if(P.value==="unbound"&&(_e={kind:"unbound"}),P.value==="bound"){if(!x.value.trim()){Y.textContent="请填写绑定会话标识。";return}_e={kind:"bound",sessionId:x.value.trim()}}if(!_&&n.entities.length>=200){Y.textContent="已达到200项，请先导出归档。";return}let Ge=_?.id??`entity-${n.nextId++}`;for(;!_&&n.entities.some(D=>D.id===Ge);)Ge=`entity-${n.nextId++}`;const pt={id:Ge,kind:m,label:H,massKg:G,location:M.value.trim(),world:b.value,position:xe,anchorSessionId:S.value.trim(),binding:_e,wearable:m==="object"&&C.checked,notes:T.value};_?n.entities=n.entities.map(D=>D.id===_.id?pt:D):n.entities.push(pt),r=null,d()}),i.append(u);const N=n.entities.filter(J=>J.kind==="actor"),W=n.entities.filter(J=>J.kind==="object"),I=o("form");I.append(o("h3","检查一次携带假设"),o("p","选择携带者和其他人物或物件，只检查你填写的重量、接触及既有绑定；不会生成角色行动。"));const j=c([["","请选择人物"],...N.map(J=>[J.id,J.label])],"");I.append(h("携带者",j));const ee=o("fieldset");ee.append(o("legend","被携带实体（包括穿戴衣饰）"));const X=[];for(const J of[...W,...N]){const H=l("","checkbox");X.push({entity:J,control:H}),ee.append(h((J.kind==="actor"?"人物：":"物件：")+J.label,H))}X.length||ee.append(o("p","尚未添加人物或物件。")),I.append(ee);const ae=c([["unknown","未知"],["yes","假设接触"],["no","假设未接触"]],"unknown");I.append(h("触发时与非衣饰物件接触",ae));const ge=o("output");ge.setAttribute("aria-live","polite");const Le=o("button","检查已选条件");Le.type="submit",I.append(Le,ge),I.addEventListener("submit",J=>{J.preventDefault();const H=N.find(ne=>ne.id===j.value);if(!H){ge.textContent="请先选择人物。";return}const G=Dl(H,X.filter(ne=>ne.control.checked).map(ne=>ne.entity),ae.value);ge.textContent={determined:"已计算局部条件",violated:"已输入条件存在冲突",undetermined:"信息不足"}[G.status]+`：
`+G.messages.join(`
`)}),i.append(I)}return f(),{getState:()=>structuredClone(n),setState:p=>{n=pc(p),r=null,f()}}}const mc=[{number:"01",real:"OUT_LOCKED",anchor:"OUT_LOCKED"},{number:"02",real:"OUT_UNLOCKED",anchor:"OUT_LOCKED"},{number:"03",real:"IN_UNLOCKED",anchor:"OUT_LOCKED"},{number:"04",real:"IN_LOCKED",anchor:"OUT_LOCKED"},{number:"05",real:"OUT_UNLOCKED",anchor:"OUT_UNLOCKED"},{number:"06",real:"OUT_LOCKED",anchor:"OUT_UNLOCKED"},{number:"07",real:"IN_UNLOCKED",anchor:"OUT_UNLOCKED"},{number:"08",real:"IN_LOCKED",anchor:"OUT_UNLOCKED"},{number:"09",real:"IN_UNLOCKED",anchor:"IN_UNLOCKED"},{number:"10",real:"OUT_LOCKED",anchor:"IN_UNLOCKED"},{number:"11",real:"OUT_UNLOCKED",anchor:"IN_UNLOCKED"},{number:"12",real:"IN_LOCKED",anchor:"IN_UNLOCKED"},{number:"13",real:"IN_LOCKED",anchor:"IN_LOCKED"},{number:"14",real:"OUT_LOCKED",anchor:"IN_LOCKED"},{number:"15",real:"OUT_UNLOCKED",anchor:"IN_LOCKED"},{number:"16",real:"IN_UNLOCKED",anchor:"IN_LOCKED"}];function Ll(i,e){return mc.find(t=>t.real===i&&t.anchor===e)}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uo="180",bi={ROTATE:0,DOLLY:1,PAN:2},_i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Il=0,ta=1,Nl=2,gc=1,Ol=2,mn=3,Un=0,Nt=1,Ht=2,Cn=0,Ti=1,na=2,ia=3,ra=4,Fl=5,Xn=100,Bl=101,zl=102,kl=103,Hl=104,Vl=200,Gl=201,Wl=202,Xl=203,Fs=204,Bs=205,ql=206,Yl=207,Kl=208,jl=209,$l=210,Zl=211,Jl=212,Ql=213,eu=214,zs=0,ks=1,Hs=2,Ci=3,Vs=4,Gs=5,Ws=6,Xs=7,Lo=0,tu=1,nu=2,Pn=0,iu=1,ru=2,su=3,ou=4,au=5,cu=6,lu=7,_c=300,Pi=301,Di=302,qs=303,Ys=304,qr=306,Ks=1e3,Kn=1001,js=1002,en=1003,uu=1004,or=1005,rn=1006,es=1007,jn=1008,an=1009,vc=1010,xc=1011,Yi=1012,Io=1013,$n=1014,vn=1015,er=1016,No=1017,Oo=1018,Ki=1020,Mc=35902,Sc=35899,Ec=1021,yc=1022,Qt=1023,ji=1026,$i=1027,bc=1028,Fo=1029,Tc=1030,Bo=1031,zo=1033,Ur=33776,Lr=33777,Ir=33778,Nr=33779,$s=35840,Zs=35841,Js=35842,Qs=35843,eo=36196,to=37492,no=37496,io=37808,ro=37809,so=37810,oo=37811,ao=37812,co=37813,lo=37814,uo=37815,ho=37816,fo=37817,po=37818,mo=37819,go=37820,_o=37821,vo=36492,xo=36494,Mo=36495,So=36283,Eo=36284,yo=36285,bo=36286,du=3200,hu=3201,Ac=0,fu=1,Rn="",qt="srgb",Ui="srgb-linear",zr="linear",Je="srgb",ii=7680,sa=519,pu=512,mu=513,gu=514,wc=515,_u=516,vu=517,xu=518,Mu=519,oa=35044,aa="300 es",sn=2e3,kr=2001;class Qn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Or=Math.PI/180,To=180/Math.PI;function tr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]).toLowerCase()}function We(i,e,t){return Math.max(e,Math.min(t,i))}function Su(i,e){return(i%e+e)%e}function ts(i,e,t){return(1-t)*i+t*e}function Bi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Dt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Eu={DEG2RAD:Or};class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],d=n[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||c!==p||h!==g){let m=1-a;const u=l*f+c*p+h*g+d*_,R=u>=0?1:-1,A=1-u*u;if(A>Number.EPSILON){const T=Math.sqrt(A),b=Math.atan2(T,u*R);m=Math.sin(m*b)/T,a=Math.sin(a*b)/T}const M=a*R;if(l=l*m+f*M,c=c*m+p*M,h=h*m+g*M,d=d*m+_*M,m===1-a){const T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+h*d+l*p-c*f,e[t+1]=l*g+h*f+c*d-a*p,e[t+2]=c*g+h*p+a*f-l*d,e[t+3]=h*g-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),d=a(s/2),f=l(n/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"YZX":this._x=f*h*d+c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d-f*p*g;break;case"XZY":this._x=f*h*d-c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ca.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ca.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),h=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=r+l*d+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ns.copy(this).projectOnVector(e),this.sub(ns)}reflect(e){return this.sub(ns.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ns=new B,ca=new Zn;class ke{constructor(e,t,n,r,s,o,a,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],p=n[5],g=n[8],_=r[0],m=r[3],u=r[6],R=r[1],A=r[4],M=r[7],T=r[2],b=r[5],y=r[8];return s[0]=o*_+a*R+l*T,s[3]=o*m+a*A+l*b,s[6]=o*u+a*M+l*y,s[1]=c*_+h*R+d*T,s[4]=c*m+h*A+d*b,s[7]=c*u+h*M+d*y,s[2]=f*_+p*R+g*T,s[5]=f*m+p*A+g*b,s[8]=f*u+p*M+g*y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*s,p=c*s-o*l,g=t*d+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-h*n)*_,e[2]=(a*n-r*o)*_,e[3]=f*_,e[4]=(h*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(is.makeScale(e,t)),this}rotate(e){return this.premultiply(is.makeRotation(-e)),this}translate(e,t){return this.premultiply(is.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const is=new ke;function Rc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yu(){const i=Hr("canvas");return i.style.display="block",i}const la={};function Zi(i){i in la||(la[i]=!0,console.warn(i))}function bu(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const ua=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),da=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tu(){const i={enabled:!0,workingColorSpace:Ui,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Je&&(r.r=xn(r.r),r.g=xn(r.g),r.b=xn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Je&&(r.r=Ai(r.r),r.g=Ai(r.g),r.b=Ai(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Rn?zr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Zi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Zi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ui]:{primaries:e,whitePoint:n,transfer:zr,toXYZ:ua,fromXYZ:da,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:n,transfer:Je,toXYZ:ua,fromXYZ:da,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),i}const Ye=Tu();function xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ai(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ri;class Au{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ri===void 0&&(ri=Hr("canvas")),ri.width=e.width,ri.height=e.height;const r=ri.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ri}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=xn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xn(t[n]/255)*255):t[n]=xn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wu=0;class ko{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=tr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(rs(r[o].image)):s.push(rs(r[o]))}else s=rs(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function rs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Au.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ru=0;const ss=new B;class Ot extends Qn{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=Kn,r=Kn,s=rn,o=jn,a=Qt,l=an,c=Ot.DEFAULT_ANISOTROPY,h=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=tr(),this.name="",this.source=new ko(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ss).x}get height(){return this.source.getSize(ss).y}get depth(){return this.source.getSize(ss).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_c)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ks:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case js:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ks:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case js:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=_c;Ot.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,M=(p+1)/2,T=(u+1)/2,b=(h+f)/4,y=(d+_)/4,P=(g+m)/4;return A>M&&A>T?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=b/n,s=y/n):M>T?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=b/r,s=P/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=y/s,r=P/s),this.set(n,r,s,t),this}let R=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(R)<.001&&(R=1),this.x=(m-g)/R,this.y=(d-_)/R,this.z=(f-h)/R,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cu extends Qn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Ot(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ko(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends Cu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Cc extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pu extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ii{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kt):Kt.fromBufferAttribute(s,o),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ar.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ar.copy(n.boundingBox)),ar.applyMatrix4(e.matrixWorld),this.union(ar)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zi),cr.subVectors(this.max,zi),si.subVectors(e.a,zi),oi.subVectors(e.b,zi),ai.subVectors(e.c,zi),Mn.subVectors(oi,si),Sn.subVectors(ai,oi),Bn.subVectors(si,ai);let t=[0,-Mn.z,Mn.y,0,-Sn.z,Sn.y,0,-Bn.z,Bn.y,Mn.z,0,-Mn.x,Sn.z,0,-Sn.x,Bn.z,0,-Bn.x,-Mn.y,Mn.x,0,-Sn.y,Sn.x,0,-Bn.y,Bn.x,0];return!os(t,si,oi,ai,cr)||(t=[1,0,0,0,1,0,0,0,1],!os(t,si,oi,ai,cr))?!1:(lr.crossVectors(Mn,Sn),t=[lr.x,lr.y,lr.z],os(t,si,oi,ai,cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const un=[new B,new B,new B,new B,new B,new B,new B,new B],Kt=new B,ar=new Ii,si=new B,oi=new B,ai=new B,Mn=new B,Sn=new B,Bn=new B,zi=new B,cr=new B,lr=new B,zn=new B;function os(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){zn.fromArray(i,s);const a=r.x*Math.abs(zn.x)+r.y*Math.abs(zn.y)+r.z*Math.abs(zn.z),l=e.dot(zn),c=t.dot(zn),h=n.dot(zn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Du=new Ii,ki=new B,as=new B;class Yr{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Du.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ki.subVectors(e,this.center);const t=ki.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ki,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(as.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ki.copy(e.center).add(as)),this.expandByPoint(ki.copy(e.center).sub(as))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const dn=new B,cs=new B,ur=new B,En=new B,ls=new B,dr=new B,us=new B;class Ho{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.origin).addScaledVector(this.direction,t),dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){cs.copy(e).add(t).multiplyScalar(.5),ur.copy(t).sub(e).normalize(),En.copy(this.origin).sub(cs);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ur),a=En.dot(this.direction),l=-En.dot(ur),c=En.lengthSq(),h=Math.abs(1-o*o);let d,f,p,g;if(h>0)if(d=o*l-a,f=o*a-l,g=s*h,d>=0)if(f>=-g)if(f<=g){const _=1/h;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(cs).addScaledVector(ur,f),p}intersectSphere(e,t){dn.subVectors(e.center,this.origin);const n=dn.dot(this.direction),r=dn.dot(dn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,n,r,s){ls.subVectors(t,e),dr.subVectors(n,e),us.crossVectors(ls,dr);let o=this.direction.dot(us),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;En.subVectors(this.origin,e);const l=a*this.direction.dot(dr.crossVectors(En,dr));if(l<0)return null;const c=a*this.direction.dot(ls.cross(En));if(c<0||l+c>o)return null;const h=-a*En.dot(us);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,n,r,s,o,a,l,c,h,d,f,p,g,_,m){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,h,d,f,p,g,_,m)}set(e,t,n,r,s,o,a,l,c,h,d,f,p,g,_,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=g,u[11]=_,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ci.setFromMatrixColumn(e,0).length(),s=1/ci.setFromMatrixColumn(e,1).length(),o=1/ci.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*h,p=o*d,g=a*h,_=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,p=l*d,g=c*h,_=c*d;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,p=l*d,g=c*h,_=c*d;t[0]=f-_*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,p=o*d,g=a*h,_=a*d;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-f*d,t[8]=g*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+_,t[5]=o*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*h,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uu,e,Lu)}lookAt(e,t,n){const r=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),yn.crossVectors(n,zt),yn.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),yn.crossVectors(n,zt)),yn.normalize(),hr.crossVectors(zt,yn),r[0]=yn.x,r[4]=hr.x,r[8]=zt.x,r[1]=yn.y,r[5]=hr.y,r[9]=zt.y,r[2]=yn.z,r[6]=hr.z,r[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],u=n[14],R=n[3],A=n[7],M=n[11],T=n[15],b=r[0],y=r[4],P=r[8],S=r[12],x=r[1],C=r[5],U=r[9],k=r[13],Y=r[2],O=r[6],N=r[10],W=r[14],I=r[3],j=r[7],ee=r[11],X=r[15];return s[0]=o*b+a*x+l*Y+c*I,s[4]=o*y+a*C+l*O+c*j,s[8]=o*P+a*U+l*N+c*ee,s[12]=o*S+a*k+l*W+c*X,s[1]=h*b+d*x+f*Y+p*I,s[5]=h*y+d*C+f*O+p*j,s[9]=h*P+d*U+f*N+p*ee,s[13]=h*S+d*k+f*W+p*X,s[2]=g*b+_*x+m*Y+u*I,s[6]=g*y+_*C+m*O+u*j,s[10]=g*P+_*U+m*N+u*ee,s[14]=g*S+_*k+m*W+u*X,s[3]=R*b+A*x+M*Y+T*I,s[7]=R*y+A*C+M*O+T*j,s[11]=R*P+A*U+M*N+T*ee,s[15]=R*S+A*k+M*W+T*X,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],u=e[15];return g*(+s*l*d-r*c*d-s*a*f+n*c*f+r*a*p-n*l*p)+_*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*h-s*l*h)+m*(+t*c*d-t*a*p-s*o*d+n*o*p+s*a*h-n*c*h)+u*(-r*a*h-t*l*d+t*a*f+r*o*d-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],u=e[15],R=d*m*c-_*f*c+_*l*p-a*m*p-d*l*u+a*f*u,A=g*f*c-h*m*c-g*l*p+o*m*p+h*l*u-o*f*u,M=h*_*c-g*d*c+g*a*p-o*_*p-h*a*u+o*d*u,T=g*d*l-h*_*l-g*a*f+o*_*f+h*a*m-o*d*m,b=t*R+n*A+r*M+s*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/b;return e[0]=R*y,e[1]=(_*f*s-d*m*s-_*r*p+n*m*p+d*r*u-n*f*u)*y,e[2]=(a*m*s-_*l*s+_*r*c-n*m*c-a*r*u+n*l*u)*y,e[3]=(d*l*s-a*f*s-d*r*c+n*f*c+a*r*p-n*l*p)*y,e[4]=A*y,e[5]=(h*m*s-g*f*s+g*r*p-t*m*p-h*r*u+t*f*u)*y,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*u-t*l*u)*y,e[7]=(o*f*s-h*l*s+h*r*c-t*f*c-o*r*p+t*l*p)*y,e[8]=M*y,e[9]=(g*d*s-h*_*s-g*n*p+t*_*p+h*n*u-t*d*u)*y,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*u+t*a*u)*y,e[11]=(h*a*s-o*d*s-h*n*c+t*d*c+o*n*p-t*a*p)*y,e[12]=T*y,e[13]=(h*_*r-g*d*r+g*n*f-t*_*f-h*n*m+t*d*m)*y,e[14]=(g*a*r-o*_*r-g*n*l+t*_*l+o*n*m-t*a*m)*y,e[15]=(o*d*r-h*a*r+h*n*l-t*d*l-o*n*f+t*a*f)*y,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,d=a+a,f=s*c,p=s*h,g=s*d,_=o*h,m=o*d,u=a*d,R=l*c,A=l*h,M=l*d,T=n.x,b=n.y,y=n.z;return r[0]=(1-(_+u))*T,r[1]=(p+M)*T,r[2]=(g-A)*T,r[3]=0,r[4]=(p-M)*b,r[5]=(1-(f+u))*b,r[6]=(m+R)*b,r[7]=0,r[8]=(g+A)*y,r[9]=(m-R)*y,r[10]=(1-(f+_))*y,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=ci.set(r[0],r[1],r[2]).length();const o=ci.set(r[4],r[5],r[6]).length(),a=ci.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],jt.copy(this);const c=1/s,h=1/o,d=1/a;return jt.elements[0]*=c,jt.elements[1]*=c,jt.elements[2]*=c,jt.elements[4]*=h,jt.elements[5]*=h,jt.elements[6]*=h,jt.elements[8]*=d,jt.elements[9]*=d,jt.elements[10]*=d,t.setFromRotationMatrix(jt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=sn,l=!1){const c=this.elements,h=2*s/(t-e),d=2*s/(n-r),f=(t+e)/(t-e),p=(n+r)/(n-r);let g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===sn)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===kr)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=sn,l=!1){const c=this.elements,h=2/(t-e),d=2/(n-r),f=-(t+e)/(t-e),p=-(n+r)/(n-r);let g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===sn)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===kr)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ci=new B,jt=new st,Uu=new B(0,0,0),Lu=new B(1,1,1),yn=new B,hr=new B,zt=new B,ha=new st,fa=new Zn;class cn{constructor(e=0,t=0,n=0,r=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ha.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ha,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fa.setFromEuler(this),this.setFromQuaternion(fa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class Pc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Iu=0;const pa=new B,li=new Zn,hn=new st,fr=new B,Hi=new B,Nu=new B,Ou=new Zn,ma=new B(1,0,0),ga=new B(0,1,0),_a=new B(0,0,1),va={type:"added"},Fu={type:"removed"},ui={type:"childadded",child:null},ds={type:"childremoved",child:null};class Et extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new B,t=new cn,n=new Zn,r=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new st},normalMatrix:{value:new ke}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.multiply(li),this}rotateOnWorldAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.premultiply(li),this}rotateX(e){return this.rotateOnAxis(ma,e)}rotateY(e){return this.rotateOnAxis(ga,e)}rotateZ(e){return this.rotateOnAxis(_a,e)}translateOnAxis(e,t){return pa.copy(e).applyQuaternion(this.quaternion),this.position.add(pa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ma,e)}translateY(e){return this.translateOnAxis(ga,e)}translateZ(e){return this.translateOnAxis(_a,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fr.copy(e):fr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(Hi,fr,this.up):hn.lookAt(fr,Hi,this.up),this.quaternion.setFromRotationMatrix(hn),r&&(hn.extractRotation(r.matrixWorld),li.setFromRotationMatrix(hn),this.quaternion.premultiply(li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(va),ui.child=e,this.dispatchEvent(ui),ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fu),ds.child=e,this.dispatchEvent(ds),ds.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(va),ui.child=e,this.dispatchEvent(ui),ui.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,e,Nu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,Ou,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Et.DEFAULT_UP=new B(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $t=new B,fn=new B,hs=new B,pn=new B,di=new B,hi=new B,xa=new B,fs=new B,ps=new B,ms=new B,gs=new ut,_s=new ut,vs=new ut;class Jt{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),$t.subVectors(e,t),r.cross($t);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){$t.subVectors(r,t),fn.subVectors(n,t),hs.subVectors(e,t);const o=$t.dot($t),a=$t.dot(fn),l=$t.dot(hs),c=fn.dot(fn),h=fn.dot(hs),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,pn.x),l.addScaledVector(o,pn.y),l.addScaledVector(a,pn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return gs.setScalar(0),_s.setScalar(0),vs.setScalar(0),gs.fromBufferAttribute(e,t),_s.fromBufferAttribute(e,n),vs.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(gs,s.x),o.addScaledVector(_s,s.y),o.addScaledVector(vs,s.z),o}static isFrontFacing(e,t,n,r){return $t.subVectors(n,t),fn.subVectors(e,t),$t.cross(fn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),$t.cross(fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Jt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;di.subVectors(r,n),hi.subVectors(s,n),fs.subVectors(e,n);const l=di.dot(fs),c=hi.dot(fs);if(l<=0&&c<=0)return t.copy(n);ps.subVectors(e,r);const h=di.dot(ps),d=hi.dot(ps);if(h>=0&&d<=h)return t.copy(r);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(di,o);ms.subVectors(e,s);const p=di.dot(ms),g=hi.dot(ms);if(g>=0&&p<=g)return t.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(hi,a);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return xa.subVectors(s,r),a=(d-h)/(d-h+(p-g)),t.copy(r).addScaledVector(xa,a);const u=1/(m+_+f);return o=_*u,a=f*u,t.copy(n).addScaledVector(di,o).addScaledVector(hi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Dc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},pr={h:0,s:0,l:0};function xs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ye.workingColorSpace){if(e=Su(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=xs(o,s,e+1/3),this.g=xs(o,s,e),this.b=xs(o,s,e-1/3)}return Ye.colorSpaceToWorking(this,r),this}setStyle(e,t=qt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const n=Dc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xn(e.r),this.g=xn(e.g),this.b=xn(e.b),this}copyLinearToSRGB(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return Ye.workingToColorSpace(bt.copy(this),e),Math.round(We(bt.r*255,0,255))*65536+Math.round(We(bt.g*255,0,255))*256+Math.round(We(bt.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(bt.copy(this),t);const n=bt.r,r=bt.g,s=bt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=qt){Ye.workingToColorSpace(bt.copy(this),e);const t=bt.r,n=bt.g,r=bt.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(bn),this.setHSL(bn.h+e,bn.s+t,bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(pr);const n=ts(bn.h,pr.h,t),r=ts(bn.s,pr.s,t),s=ts(bn.l,pr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new Ke;Ke.NAMES=Dc;let Bu=0;class Ni extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=Ti,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fs,this.blendDst=Bs,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fs&&(n.blendSrc=this.blendSrc),this.blendDst!==Bs&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ci&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qn extends Ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new B,mr=new Fe;let zu=0;class on{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=oa,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix3(e),this.setXY(t,mr.x,mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Bi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array),s=Dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oa&&(e.usage=this.usage),e}}class Uc extends on{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Lc extends on{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gt extends on{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ku=0;const Xt=new st,Ms=new Et,fi=new B,kt=new Ii,Vi=new Ii,Mt=new B;class St extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rc(e)?Lc:Uc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,n){return Xt.makeTranslation(e,t,n),this.applyMatrix4(Xt),this}scale(e,t,n){return Xt.makeScale(e,t,n),this.applyMatrix4(Xt),this}lookAt(e){return Ms.lookAt(e),Ms.updateMatrix(),this.applyMatrix4(Ms.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];kt.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Vi.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(kt.min,Vi.min),kt.expandByPoint(Mt),Mt.addVectors(kt.max,Vi.max),kt.expandByPoint(Mt)):(kt.expandByPoint(Vi.min),kt.expandByPoint(Vi.max))}kt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Mt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Mt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Mt.fromBufferAttribute(a,c),l&&(fi.fromBufferAttribute(e,c),Mt.add(fi)),r=Math.max(r,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new B,l[P]=new B;const c=new B,h=new B,d=new B,f=new Fe,p=new Fe,g=new Fe,_=new B,m=new B;function u(P,S,x){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,x),f.fromBufferAttribute(s,P),p.fromBufferAttribute(s,S),g.fromBufferAttribute(s,x),h.sub(c),d.sub(c),p.sub(f),g.sub(f);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(C),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(C),a[P].add(_),a[S].add(_),a[x].add(_),l[P].add(m),l[S].add(m),l[x].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let P=0,S=R.length;P<S;++P){const x=R[P],C=x.start,U=x.count;for(let k=C,Y=C+U;k<Y;k+=3)u(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const A=new B,M=new B,T=new B,b=new B;function y(P){T.fromBufferAttribute(r,P),b.copy(T);const S=a[P];A.copy(S),A.sub(T.multiplyScalar(T.dot(S))).normalize(),M.crossVectors(b,S);const C=M.dot(l[P])<0?-1:1;o.setXYZW(P,A.x,A.y,A.z,C)}for(let P=0,S=R.length;P<S;++P){const x=R[P],C=x.start,U=x.count;for(let k=C,Y=C+U;k<Y;k+=3)y(e.getX(k+0)),y(e.getX(k+1)),y(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,c=new B,h=new B,d=new B;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let u=0;u<h;u++)f[g++]=c[p++]}return new on(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new St,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ma=new st,kn=new Ho,gr=new Yr,Sa=new B,_r=new B,vr=new B,xr=new B,Ss=new B,Mr=new B,Ea=new B,Sr=new B;class At extends Et{constructor(e=new St,t=new qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Mr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&(Ss.fromBufferAttribute(d,e),o?Mr.addScaledVector(Ss,h):Mr.addScaledVector(Ss.sub(t),h))}t.add(Mr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(s),kn.copy(e.ray).recast(e.near),!(gr.containsPoint(kn.origin)===!1&&(kn.intersectSphere(gr,Sa)===null||kn.origin.distanceToSquared(Sa)>(e.far-e.near)**2))&&(Ma.copy(s).invert(),kn.copy(e.ray).applyMatrix4(Ma),!(n.boundingBox!==null&&kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,kn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],u=o[m.materialIndex],R=Math.max(m.start,p.start),A=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=R,T=A;M<T;M+=3){const b=a.getX(M),y=a.getX(M+1),P=a.getX(M+2);r=Er(this,u,e,n,c,h,d,b,y,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,u=_;m<u;m+=3){const R=a.getX(m),A=a.getX(m+1),M=a.getX(m+2);r=Er(this,o,e,n,c,h,d,R,A,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],u=o[m.materialIndex],R=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=R,T=A;M<T;M+=3){const b=M,y=M+1,P=M+2;r=Er(this,u,e,n,c,h,d,b,y,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,u=_;m<u;m+=3){const R=m,A=m+1,M=m+2;r=Er(this,o,e,n,c,h,d,R,A,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Hu(i,e,t,n,r,s,o,a){let l;if(e.side===Nt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Un,a),l===null)return null;Sr.copy(a),Sr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Sr);return c<t.near||c>t.far?null:{distance:c,point:Sr.clone(),object:i}}function Er(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,_r),i.getVertexPosition(l,vr),i.getVertexPosition(c,xr);const h=Hu(i,e,t,n,_r,vr,xr,Ea);if(h){const d=new B;Jt.getBarycoord(Ea,_r,vr,xr,d),r&&(h.uv=Jt.getInterpolatedAttribute(r,a,l,c,d,new Fe)),s&&(h.uv1=Jt.getInterpolatedAttribute(s,a,l,c,d,new Fe)),o&&(h.normal=Jt.getInterpolatedAttribute(o,a,l,c,d,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new B,materialIndex:0};Jt.getNormal(_r,vr,xr,f.normal),h.face=f,h.barycoord=d}return h}class Ln extends St{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(d,2));function g(_,m,u,R,A,M,T,b,y,P,S){const x=M/y,C=T/P,U=M/2,k=T/2,Y=b/2,O=y+1,N=P+1;let W=0,I=0;const j=new B;for(let ee=0;ee<N;ee++){const X=ee*C-k;for(let ae=0;ae<O;ae++){const ge=ae*x-U;j[_]=ge*R,j[m]=X*A,j[u]=Y,c.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[u]=b>0?1:-1,h.push(j.x,j.y,j.z),d.push(ae/y),d.push(1-ee/P),W+=1}}for(let ee=0;ee<P;ee++)for(let X=0;X<y;X++){const ae=f+X+O*ee,ge=f+X+O*(ee+1),Le=f+(X+1)+O*(ee+1),J=f+(X+1)+O*ee;l.push(ae,ge,J),l.push(ge,Le,J),I+=6}a.addGroup(p,I,S),p+=I,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Li(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Rt(i){const e={};for(let t=0;t<i.length;t++){const n=Li(i[t]);for(const r in n)e[r]=n[r]}return e}function Vu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ic(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const Gu={clone:Li,merge:Rt};var Wu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends Ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wu,this.fragmentShader=Xu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Li(e.uniforms),this.uniformsGroups=Vu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Nc extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tn=new B,ya=new Fe,ba=new Fe;class Zt extends Nc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=To*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return To*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z)}getViewSize(e,t){return this.getViewBounds(e,ya,ba),t.subVectors(ba,ya)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Or*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const pi=-90,mi=1;class qu extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zt(pi,mi,e,t);r.layers=this.layers,this.add(r);const s=new Zt(pi,mi,e,t);s.layers=this.layers,this.add(s);const o=new Zt(pi,mi,e,t);o.layers=this.layers,this.add(o);const a=new Zt(pi,mi,e,t);a.layers=this.layers,this.add(a);const l=new Zt(pi,mi,e,t);l.layers=this.layers,this.add(l);const c=new Zt(pi,mi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===sn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Oc extends Ot{constructor(e=[],t=Pi,n,r,s,o,a,l,c,h){super(e,t,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yu extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Oc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ln(5,5,5),s=new In({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:Cn});s.uniforms.tEquirect.value=t;const o=new At(r,s),a=t.minFilter;return t.minFilter===jn&&(t.minFilter=rn),new qu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class Xi extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ku={type:"move"};class Es{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),u=this._getHandJoint(c,_);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ku)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ju extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ys=new B,$u=new B,Zu=new ke;class An{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ys.subVectors(n,t).cross($u.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ys),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Zu.getNormalMatrix(e),r=this.coplanarPoint(ys).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new Yr,Ju=new Fe(.5,.5),yr=new B;class Vo{constructor(e=new An,t=new An,n=new An,r=new An,s=new An,o=new An){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=sn,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],d=s[5],f=s[6],p=s[7],g=s[8],_=s[9],m=s[10],u=s[11],R=s[12],A=s[13],M=s[14],T=s[15];if(r[0].setComponents(c-o,p-h,u-g,T-R).normalize(),r[1].setComponents(c+o,p+h,u+g,T+R).normalize(),r[2].setComponents(c+a,p+d,u+_,T+A).normalize(),r[3].setComponents(c-a,p-d,u-_,T-A).normalize(),n)r[4].setComponents(l,f,m,M).normalize(),r[5].setComponents(c-l,p-f,u-m,T-M).normalize();else if(r[4].setComponents(c-l,p-f,u-m,T-M).normalize(),t===sn)r[5].setComponents(c+l,p+f,u+m,T+M).normalize();else if(t===kr)r[5].setComponents(l,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(e){Hn.center.set(0,0,0);const t=Ju.distanceTo(e.center);return Hn.radius=.7071067811865476+t,Hn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(yr.x=r.normal.x>0?e.max.x:e.min.x,yr.y=r.normal.y>0?e.max.y:e.min.y,yr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vi extends Ni{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Vr=new B,Gr=new B,Ta=new st,Gi=new Ho,br=new Yr,bs=new B,Aa=new B;class Wr extends Et{constructor(e=new St,t=new vi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Vr.fromBufferAttribute(t,r-1),Gr.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Vr.distanceTo(Gr);e.setAttribute("lineDistance",new gt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(r),br.radius+=s,e.ray.intersectsSphere(br)===!1)return;Ta.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(Ta);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const u=h.getX(_),R=h.getX(_+1),A=Tr(this,e,Gi,l,u,R,_);A&&t.push(A)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),u=Tr(this,e,Gi,l,_,m,g-1);u&&t.push(u)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const u=Tr(this,e,Gi,l,_,_+1,_);u&&t.push(u)}if(this.isLineLoop){const _=Tr(this,e,Gi,l,g-1,p,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Tr(i,e,t,n,r,s,o){const a=i.geometry.attributes.position;if(Vr.fromBufferAttribute(a,r),Gr.fromBufferAttribute(a,s),t.distanceSqToSegment(Vr,Gr,bs,Aa)>n)return;bs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(bs);if(!(c<e.near||c>e.far))return{distance:c,point:Aa.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const wa=new B,Ra=new B;class Ar extends Wr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)wa.fromBufferAttribute(t,r),Ra.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+wa.distanceTo(Ra);e.setAttribute("lineDistance",new gt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Qu extends Wr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Fc extends Ot{constructor(e,t,n=$n,r,s,o,a=en,l=en,c,h=ji,d=1){if(h!==ji&&h!==$i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ko(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Bc extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Kr extends St{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,d=e/a,f=t/l,p=[],g=[],_=[],m=[];for(let u=0;u<h;u++){const R=u*f-o;for(let A=0;A<c;A++){const M=A*d-s;g.push(M,-R,0),_.push(0,0,1),m.push(A/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let R=0;R<a;R++){const A=R+c*u,M=R+c*(u+1),T=R+1+c*(u+1),b=R+1+c*u;p.push(A,M,b),p.push(M,T,b)}this.setIndex(p),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(_,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Go extends St{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],l=[],c=[],h=[];let d=e;const f=(t-e)/r,p=new B,g=new Fe;for(let _=0;_<=r;_++){for(let m=0;m<=n;m++){const u=s+m/n*o;p.x=d*Math.cos(u),p.y=d*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}d+=f}for(let _=0;_<r;_++){const m=_*(n+1);for(let u=0;u<n;u++){const R=u+m,A=R,M=R+n+1,T=R+n+2,b=R+1;a.push(A,M,b),a.push(M,T,b)}}this.setIndex(a),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(c,3)),this.setAttribute("uv",new gt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class xi extends St{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new B,f=new B,p=[],g=[],_=[],m=[];for(let u=0;u<=n;u++){const R=[],A=u/n;let M=0;u===0&&o===0?M=.5/t:u===n&&l===Math.PI&&(M=-.5/t);for(let T=0;T<=t;T++){const b=T/t;d.x=-e*Math.cos(r+b*s)*Math.sin(o+A*a),d.y=e*Math.cos(o+A*a),d.z=e*Math.sin(r+b*s)*Math.sin(o+A*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),m.push(b+M,1-A),R.push(c++)}h.push(R)}for(let u=0;u<n;u++)for(let R=0;R<t;R++){const A=h[u][R+1],M=h[u][R],T=h[u+1][R],b=h[u+1][R+1];(u!==0||o>0)&&p.push(A,M,b),(u!==n-1||l<Math.PI)&&p.push(M,T,b)}this.setIndex(p),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(_,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zc extends Ni{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ac,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ed extends Ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=du,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class td extends Ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Wi extends vi{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class kc extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ts=new st,Ca=new B,Pa=new B;class nd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vo,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ca.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ca),Pa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pa),t.updateMatrixWorld(),Ts.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ts,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ts)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Wo extends Nc{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class id extends nd{constructor(){super(new Wo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rd extends kc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new id}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sd extends kc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class od extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Da{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=We(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(We(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ad extends Qn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Ua(i,e,t,n){const r=cd(n);switch(t){case Ec:return i*e;case bc:return i*e/r.components*r.byteLength;case Fo:return i*e/r.components*r.byteLength;case Tc:return i*e*2/r.components*r.byteLength;case Bo:return i*e*2/r.components*r.byteLength;case yc:return i*e*3/r.components*r.byteLength;case Qt:return i*e*4/r.components*r.byteLength;case zo:return i*e*4/r.components*r.byteLength;case Ur:case Lr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ir:case Nr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zs:case Qs:return Math.max(i,16)*Math.max(e,8)/4;case $s:case Js:return Math.max(i,8)*Math.max(e,8)/2;case eo:case to:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case no:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ro:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case so:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case oo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ao:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case co:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case lo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case uo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ho:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case fo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case po:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case mo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case go:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case _o:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case vo:case xo:case Mo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case So:case Eo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case yo:case bo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cd(i){switch(i){case an:case vc:return{byteLength:1,components:1};case Yi:case xc:case er:return{byteLength:2,components:1};case No:case Oo:return{byteLength:2,components:4};case $n:case Io:case vn:return{byteLength:4,components:1};case Mc:case Sc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hc(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function ld(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var ud=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,md=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_d=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Md=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ed=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ld=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Id=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Nd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Gd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$d=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,th=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,nh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ih=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ah=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ch=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ph=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_h=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Eh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Th=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ah=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Rh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ch=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ph=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Lh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ih=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Oh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,qh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Kh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$h=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ef=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,df=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ff=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_f=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ef=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Af=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Df=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Uf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,If=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Nf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Of=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ff=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:ud,alphahash_pars_fragment:dd,alphamap_fragment:hd,alphamap_pars_fragment:fd,alphatest_fragment:pd,alphatest_pars_fragment:md,aomap_fragment:gd,aomap_pars_fragment:_d,batching_pars_vertex:vd,batching_vertex:xd,begin_vertex:Md,beginnormal_vertex:Sd,bsdfs:Ed,iridescence_fragment:yd,bumpmap_pars_fragment:bd,clipping_planes_fragment:Td,clipping_planes_pars_fragment:Ad,clipping_planes_pars_vertex:wd,clipping_planes_vertex:Rd,color_fragment:Cd,color_pars_fragment:Pd,color_pars_vertex:Dd,color_vertex:Ud,common:Ld,cube_uv_reflection_fragment:Id,defaultnormal_vertex:Nd,displacementmap_pars_vertex:Od,displacementmap_vertex:Fd,emissivemap_fragment:Bd,emissivemap_pars_fragment:zd,colorspace_fragment:kd,colorspace_pars_fragment:Hd,envmap_fragment:Vd,envmap_common_pars_fragment:Gd,envmap_pars_fragment:Wd,envmap_pars_vertex:Xd,envmap_physical_pars_fragment:nh,envmap_vertex:qd,fog_vertex:Yd,fog_pars_vertex:Kd,fog_fragment:jd,fog_pars_fragment:$d,gradientmap_pars_fragment:Zd,lightmap_pars_fragment:Jd,lights_lambert_fragment:Qd,lights_lambert_pars_fragment:eh,lights_pars_begin:th,lights_toon_fragment:ih,lights_toon_pars_fragment:rh,lights_phong_fragment:sh,lights_phong_pars_fragment:oh,lights_physical_fragment:ah,lights_physical_pars_fragment:ch,lights_fragment_begin:lh,lights_fragment_maps:uh,lights_fragment_end:dh,logdepthbuf_fragment:hh,logdepthbuf_pars_fragment:fh,logdepthbuf_pars_vertex:ph,logdepthbuf_vertex:mh,map_fragment:gh,map_pars_fragment:_h,map_particle_fragment:vh,map_particle_pars_fragment:xh,metalnessmap_fragment:Mh,metalnessmap_pars_fragment:Sh,morphinstance_vertex:Eh,morphcolor_vertex:yh,morphnormal_vertex:bh,morphtarget_pars_vertex:Th,morphtarget_vertex:Ah,normal_fragment_begin:wh,normal_fragment_maps:Rh,normal_pars_fragment:Ch,normal_pars_vertex:Ph,normal_vertex:Dh,normalmap_pars_fragment:Uh,clearcoat_normal_fragment_begin:Lh,clearcoat_normal_fragment_maps:Ih,clearcoat_pars_fragment:Nh,iridescence_pars_fragment:Oh,opaque_fragment:Fh,packing:Bh,premultiplied_alpha_fragment:zh,project_vertex:kh,dithering_fragment:Hh,dithering_pars_fragment:Vh,roughnessmap_fragment:Gh,roughnessmap_pars_fragment:Wh,shadowmap_pars_fragment:Xh,shadowmap_pars_vertex:qh,shadowmap_vertex:Yh,shadowmask_pars_fragment:Kh,skinbase_vertex:jh,skinning_pars_vertex:$h,skinning_vertex:Zh,skinnormal_vertex:Jh,specularmap_fragment:Qh,specularmap_pars_fragment:ef,tonemapping_fragment:tf,tonemapping_pars_fragment:nf,transmission_fragment:rf,transmission_pars_fragment:sf,uv_pars_fragment:of,uv_pars_vertex:af,uv_vertex:cf,worldpos_vertex:lf,background_vert:uf,background_frag:df,backgroundCube_vert:hf,backgroundCube_frag:ff,cube_vert:pf,cube_frag:mf,depth_vert:gf,depth_frag:_f,distanceRGBA_vert:vf,distanceRGBA_frag:xf,equirect_vert:Mf,equirect_frag:Sf,linedashed_vert:Ef,linedashed_frag:yf,meshbasic_vert:bf,meshbasic_frag:Tf,meshlambert_vert:Af,meshlambert_frag:wf,meshmatcap_vert:Rf,meshmatcap_frag:Cf,meshnormal_vert:Pf,meshnormal_frag:Df,meshphong_vert:Uf,meshphong_frag:Lf,meshphysical_vert:If,meshphysical_frag:Nf,meshtoon_vert:Of,meshtoon_frag:Ff,points_vert:Bf,points_frag:zf,shadow_vert:kf,shadow_frag:Hf,sprite_vert:Vf,sprite_frag:Gf},de={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},nn={basic:{uniforms:Rt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Rt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Rt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Rt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Rt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Rt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Rt([de.points,de.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Rt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Rt([de.common,de.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Rt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Rt([de.sprite,de.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Rt([de.common,de.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Rt([de.lights,de.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};nn.physical={uniforms:Rt([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const wr={r:0,b:0,g:0},Vn=new cn,Wf=new st;function Xf(i,e,t,n,r,s,o){const a=new Ke(0);let l=s===!0?0:1,c,h,d=null,f=0,p=null;function g(A){let M=A.isScene===!0?A.background:null;return M&&M.isTexture&&(M=(A.backgroundBlurriness>0?t:e).get(M)),M}function _(A){let M=!1;const T=g(A);T===null?u(a,l):T&&T.isColor&&(u(T,1),M=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(A,M){const T=g(M);T&&(T.isCubeTexture||T.mapping===qr)?(h===void 0&&(h=new At(new Ln(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Li(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,y,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Vn.copy(M.backgroundRotation),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Wf.makeRotationFromEuler(Vn)),h.material.toneMapped=Ye.getTransfer(T.colorSpace)!==Je,(d!==T||f!==T.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=T,f=T.version,p=i.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new At(new Kr(2,2),new In({name:"BackgroundMaterial",uniforms:Li(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(T.colorSpace)!==Je,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||f!==T.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=T,f=T.version,p=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function u(A,M){A.getRGB(wr,Ic(i)),n.buffers.color.setClear(wr.r,wr.g,wr.b,M,o)}function R(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,M=1){a.set(A),l=M,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,u(a,l)},render:_,addToRenderList:m,dispose:R}}function qf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(x,C,U,k,Y){let O=!1;const N=d(k,U,C);s!==N&&(s=N,c(s.object)),O=p(x,k,U,Y),O&&g(x,k,U,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,M(x,C,U,k),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function d(x,C,U){const k=U.wireframe===!0;let Y=n[x.id];Y===void 0&&(Y={},n[x.id]=Y);let O=Y[C.id];O===void 0&&(O={},Y[C.id]=O);let N=O[k];return N===void 0&&(N=f(l()),O[k]=N),N}function f(x){const C=[],U=[],k=[];for(let Y=0;Y<t;Y++)C[Y]=0,U[Y]=0,k[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:k,object:x,attributes:{},index:null}}function p(x,C,U,k){const Y=s.attributes,O=C.attributes;let N=0;const W=U.getAttributes();for(const I in W)if(W[I].location>=0){const ee=Y[I];let X=O[I];if(X===void 0&&(I==="instanceMatrix"&&x.instanceMatrix&&(X=x.instanceMatrix),I==="instanceColor"&&x.instanceColor&&(X=x.instanceColor)),ee===void 0||ee.attribute!==X||X&&ee.data!==X.data)return!0;N++}return s.attributesNum!==N||s.index!==k}function g(x,C,U,k){const Y={},O=C.attributes;let N=0;const W=U.getAttributes();for(const I in W)if(W[I].location>=0){let ee=O[I];ee===void 0&&(I==="instanceMatrix"&&x.instanceMatrix&&(ee=x.instanceMatrix),I==="instanceColor"&&x.instanceColor&&(ee=x.instanceColor));const X={};X.attribute=ee,ee&&ee.data&&(X.data=ee.data),Y[I]=X,N++}s.attributes=Y,s.attributesNum=N,s.index=k}function _(){const x=s.newAttributes;for(let C=0,U=x.length;C<U;C++)x[C]=0}function m(x){u(x,0)}function u(x,C){const U=s.newAttributes,k=s.enabledAttributes,Y=s.attributeDivisors;U[x]=1,k[x]===0&&(i.enableVertexAttribArray(x),k[x]=1),Y[x]!==C&&(i.vertexAttribDivisor(x,C),Y[x]=C)}function R(){const x=s.newAttributes,C=s.enabledAttributes;for(let U=0,k=C.length;U<k;U++)C[U]!==x[U]&&(i.disableVertexAttribArray(U),C[U]=0)}function A(x,C,U,k,Y,O,N){N===!0?i.vertexAttribIPointer(x,C,U,Y,O):i.vertexAttribPointer(x,C,U,k,Y,O)}function M(x,C,U,k){_();const Y=k.attributes,O=U.getAttributes(),N=C.defaultAttributeValues;for(const W in O){const I=O[W];if(I.location>=0){let j=Y[W];if(j===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(j=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(j=x.instanceColor)),j!==void 0){const ee=j.normalized,X=j.itemSize,ae=e.get(j);if(ae===void 0)continue;const ge=ae.buffer,Le=ae.type,J=ae.bytesPerElement,H=Le===i.INT||Le===i.UNSIGNED_INT||j.gpuType===Io;if(j.isInterleavedBufferAttribute){const G=j.data,ne=G.stride,xe=j.offset;if(G.isInstancedInterleavedBuffer){for(let _e=0;_e<I.locationSize;_e++)u(I.location+_e,G.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let _e=0;_e<I.locationSize;_e++)m(I.location+_e);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let _e=0;_e<I.locationSize;_e++)A(I.location+_e,X/I.locationSize,Le,ee,ne*J,(xe+X/I.locationSize*_e)*J,H)}else{if(j.isInstancedBufferAttribute){for(let G=0;G<I.locationSize;G++)u(I.location+G,j.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let G=0;G<I.locationSize;G++)m(I.location+G);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let G=0;G<I.locationSize;G++)A(I.location+G,X/I.locationSize,Le,ee,X*J,X/I.locationSize*G*J,H)}}else if(N!==void 0){const ee=N[W];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(I.location,ee);break;case 3:i.vertexAttrib3fv(I.location,ee);break;case 4:i.vertexAttrib4fv(I.location,ee);break;default:i.vertexAttrib1fv(I.location,ee)}}}}R()}function T(){P();for(const x in n){const C=n[x];for(const U in C){const k=C[U];for(const Y in k)h(k[Y].object),delete k[Y];delete C[U]}delete n[x]}}function b(x){if(n[x.id]===void 0)return;const C=n[x.id];for(const U in C){const k=C[U];for(const Y in k)h(k[Y].object),delete k[Y];delete C[U]}delete n[x.id]}function y(x){for(const C in n){const U=n[C];if(U[x.id]===void 0)continue;const k=U[x.id];for(const Y in k)h(k[Y].object),delete k[Y];delete U[x.id]}}function P(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:y,initAttributes:_,enableAttribute:m,disableUnusedAttributes:R}}function Yf(i,e,t){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];t.update(p,n,1)}function l(c,h,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*f[_];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Kf(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(y){return!(y!==Qt&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){const P=y===er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==an&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==vn&&!P)}function l(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:R,maxVaryings:A,maxFragmentUniforms:M,vertexTextures:T,maxSamples:b}}function jf(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new An,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||r;return r=f,n=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{const R=s?0:n,A=R*4;let M=u.clippingState||null;l.value=M,M=h(g,f,A,p);for(let T=0;T!==A;++T)M[T]=t[T];u.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const u=p+_*4,R=f.matrixWorldInverse;a.getNormalMatrix(R),(m===null||m.length<u)&&(m=new Float32Array(u));for(let A=0,M=p;A!==_;++A,M+=4)o.copy(d[A]).applyMatrix4(R,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function $f(i){let e=new WeakMap;function t(o,a){return a===qs?o.mapping=Pi:a===Ys&&(o.mapping=Di),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===qs||a===Ys)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Yu(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Mi=4,La=[.125,.215,.35,.446,.526,.582],Yn=20,As=new Wo,Ia=new Ke;let ws=null,Rs=0,Cs=0,Ps=!1;const Wn=(1+Math.sqrt(5))/2,gi=1/Wn,Na=[new B(-Wn,gi,0),new B(Wn,gi,0),new B(-gi,0,Wn),new B(gi,0,Wn),new B(0,Wn,-gi),new B(0,Wn,gi),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],Zf=new B;class Oa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=Zf}=s;ws=this._renderer.getRenderTarget(),Rs=this._renderer.getActiveCubeFace(),Cs=this._renderer.getActiveMipmapLevel(),Ps=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=za(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ba(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ws,Rs,Cs),this._renderer.xr.enabled=Ps,e.scissorTest=!1,Rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pi||e.mapping===Di?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ws=this._renderer.getRenderTarget(),Rs=this._renderer.getActiveCubeFace(),Cs=this._renderer.getActiveMipmapLevel(),Ps=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:er,format:Qt,colorSpace:Ui,depthBuffer:!1},r=Fa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fa(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jf(s)),this._blurMaterial=Qf(s,e,t)}return r}_compileMaterial(e){const t=new At(this._lodPlanes[0],e);this._renderer.compile(t,As)}_sceneToCubeUV(e,t,n,r,s){const l=new Zt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Ia),d.toneMapping=Pn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const _=new qn({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),m=new At(new Ln,_);let u=!1;const R=e.background;R?R.isColor&&(_.color.copy(R),e.background=null,u=!0):(_.color.copy(Ia),u=!0);for(let A=0;A<6;A++){const M=A%3;M===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[A],s.y,s.z)):M===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[A]));const T=this._cubeSize;Rr(r,M*T,A>2?T:0,T,T),d.setRenderTarget(r),u&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=R}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Pi||e.mapping===Di;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=za()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ba());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new At(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Rr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,As)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Na[(r-s-1)%Na.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new At(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Yn-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Yn;m>Yn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yn}`);const u=[];let R=0;for(let y=0;y<Yn;++y){const P=y/_,S=Math.exp(-P*P/2);u.push(S),y===0?R+=S:y<m&&(R+=2*S)}for(let y=0;y<u.length;y++)u[y]=u[y]/R;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:A}=this;f.dTheta.value=g,f.mipInt.value=A-n;const M=this._sizeLods[r],T=3*M*(r>A-Mi?r-A+Mi:0),b=4*(this._cubeSize-M);Rr(t,T,b,3*M,2*M),l.setRenderTarget(t),l.render(d,As)}}function Jf(i){const e=[],t=[],n=[];let r=i;const s=i-Mi+1+La.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Mi?l=La[o-i+Mi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,u=1,R=new Float32Array(_*g*p),A=new Float32Array(m*g*p),M=new Float32Array(u*g*p);for(let b=0;b<p;b++){const y=b%3*2/3-1,P=b>2?0:-1,S=[y,P,0,y+2/3,P,0,y+2/3,P+1,0,y,P,0,y+2/3,P+1,0,y,P+1,0];R.set(S,_*g*b),A.set(f,m*g*b);const x=[b,b,b,b,b,b];M.set(x,u*g*b)}const T=new St;T.setAttribute("position",new on(R,_)),T.setAttribute("uv",new on(A,m)),T.setAttribute("faceIndex",new on(M,u)),e.push(T),r>Mi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fa(i,e,t){const n=new Jn(i,e,t);return n.texture.mapping=qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Qf(i,e,t){const n=new Float32Array(Yn),r=new B(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Ba(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function za(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Xo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ep(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===qs||l===Ys,h=l===Pi||l===Di;if(c||h){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Oa(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&r(p)?(t===null&&(t=new Oa(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function tp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Zi("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function np(i,e,t,n){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const R=p.array;_=p.version;for(let A=0,M=R.length;A<M;A+=3){const T=R[A+0],b=R[A+1],y=R[A+2];f.push(T,b,b,y,y,T)}}else if(g!==void 0){const R=g.array;_=g.version;for(let A=0,M=R.length/3-1;A<M;A+=3){const T=A+0,b=A+1,y=A+2;f.push(T,b,b,y,y,T)}}else return;const m=new(Rc(f)?Lc:Uc)(f,1);m.version=_;const u=s.get(d);u&&e.remove(u),s.set(d,m)}function h(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function ip(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,s,f*o),t.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,f*o,g),t.update(p,n,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];t.update(m,n,1)}function d(f,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/o,p[u],_[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,_,0,g);let u=0;for(let R=0;R<g;R++)u+=p[R]*_[R];t.update(u,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function rp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function sp(i,e,t){const n=new WeakMap,r=new ut;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let x=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var p=x;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],R=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let T=a.attributes.position.count*M,b=1;T>e.maxTextureSize&&(b=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const y=new Float32Array(T*b*4*d),P=new Cc(y,T,b,d);P.type=vn,P.needsUpdate=!0;const S=M*4;for(let C=0;C<d;C++){const U=u[C],k=R[C],Y=A[C],O=T*b*4*C;for(let N=0;N<U.count;N++){const W=N*S;g===!0&&(r.fromBufferAttribute(U,N),y[O+W+0]=r.x,y[O+W+1]=r.y,y[O+W+2]=r.z,y[O+W+3]=0),_===!0&&(r.fromBufferAttribute(k,N),y[O+W+4]=r.x,y[O+W+5]=r.y,y[O+W+6]=r.z,y[O+W+7]=0),m===!0&&(r.fromBufferAttribute(Y,N),y[O+W+8]=r.x,y[O+W+9]=r.y,y[O+W+10]=r.z,y[O+W+11]=Y.itemSize===4?r.w:1)}}f={count:d,texture:P,size:new Fe(T,b)},n.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function op(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Vc=new Ot,ka=new Fc(1,1),Gc=new Cc,Wc=new Pu,Xc=new Oc,Ha=[],Va=[],Ga=new Float32Array(16),Wa=new Float32Array(9),Xa=new Float32Array(4);function Oi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ha[r];if(s===void 0&&(s=new Float32Array(r),Ha[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function _t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function jr(i,e){let t=Va[e];t===void 0&&(t=new Int32Array(e),Va[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ap(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function cp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2fv(this.addr,e),vt(t,e)}}function lp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;i.uniform3fv(this.addr,e),vt(t,e)}}function up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4fv(this.addr,e),vt(t,e)}}function dp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;Xa.set(n),i.uniformMatrix2fv(this.addr,!1,Xa),vt(t,n)}}function hp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;Wa.set(n),i.uniformMatrix3fv(this.addr,!1,Wa),vt(t,n)}}function fp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;Ga.set(n),i.uniformMatrix4fv(this.addr,!1,Ga),vt(t,n)}}function pp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function mp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2iv(this.addr,e),vt(t,e)}}function gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3iv(this.addr,e),vt(t,e)}}function _p(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4iv(this.addr,e),vt(t,e)}}function vp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2uiv(this.addr,e),vt(t,e)}}function Mp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3uiv(this.addr,e),vt(t,e)}}function Sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4uiv(this.addr,e),vt(t,e)}}function Ep(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ka.compareFunction=wc,s=ka):s=Vc,t.setTexture2D(e||s,r)}function yp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Wc,r)}function bp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Xc,r)}function Tp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Gc,r)}function Ap(i){switch(i){case 5126:return ap;case 35664:return cp;case 35665:return lp;case 35666:return up;case 35674:return dp;case 35675:return hp;case 35676:return fp;case 5124:case 35670:return pp;case 35667:case 35671:return mp;case 35668:case 35672:return gp;case 35669:case 35673:return _p;case 5125:return vp;case 36294:return xp;case 36295:return Mp;case 36296:return Sp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ep;case 35679:case 36299:case 36307:return yp;case 35680:case 36300:case 36308:case 36293:return bp;case 36289:case 36303:case 36311:case 36292:return Tp}}function wp(i,e){i.uniform1fv(this.addr,e)}function Rp(i,e){const t=Oi(e,this.size,2);i.uniform2fv(this.addr,t)}function Cp(i,e){const t=Oi(e,this.size,3);i.uniform3fv(this.addr,t)}function Pp(i,e){const t=Oi(e,this.size,4);i.uniform4fv(this.addr,t)}function Dp(i,e){const t=Oi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Up(i,e){const t=Oi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Lp(i,e){const t=Oi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ip(i,e){i.uniform1iv(this.addr,e)}function Np(i,e){i.uniform2iv(this.addr,e)}function Op(i,e){i.uniform3iv(this.addr,e)}function Fp(i,e){i.uniform4iv(this.addr,e)}function Bp(i,e){i.uniform1uiv(this.addr,e)}function zp(i,e){i.uniform2uiv(this.addr,e)}function kp(i,e){i.uniform3uiv(this.addr,e)}function Hp(i,e){i.uniform4uiv(this.addr,e)}function Vp(i,e,t){const n=this.cache,r=e.length,s=jr(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Vc,s[o])}function Gp(i,e,t){const n=this.cache,r=e.length,s=jr(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Wc,s[o])}function Wp(i,e,t){const n=this.cache,r=e.length,s=jr(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Xc,s[o])}function Xp(i,e,t){const n=this.cache,r=e.length,s=jr(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Gc,s[o])}function qp(i){switch(i){case 5126:return wp;case 35664:return Rp;case 35665:return Cp;case 35666:return Pp;case 35674:return Dp;case 35675:return Up;case 35676:return Lp;case 5124:case 35670:return Ip;case 35667:case 35671:return Np;case 35668:case 35672:return Op;case 35669:case 35673:return Fp;case 5125:return Bp;case 36294:return zp;case 36295:return kp;case 36296:return Hp;case 35678:case 36198:case 36298:case 36306:case 35682:return Vp;case 35679:case 36299:case 36307:return Gp;case 35680:case 36300:case 36308:case 36293:return Wp;case 36289:case 36303:case 36311:case 36292:return Xp}}class Yp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ap(t.type)}}class Kp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qp(t.type)}}class jp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Ds=/(\w+)(\])?(\[|\.)?/g;function qa(i,e){i.seq.push(e),i.map[e.id]=e}function $p(i,e,t){const n=i.name,r=n.length;for(Ds.lastIndex=0;;){const s=Ds.exec(n),o=Ds.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){qa(t,c===void 0?new Yp(a,i,e):new Kp(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new jp(a),qa(t,d)),t=d}}}class Fr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);$p(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Ya(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Zp=37297;let Jp=0;function Qp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Ka=new ke;function em(i){Ye._getMatrix(Ka,Ye.workingColorSpace,i);const e=`mat3( ${Ka.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(i)){case zr:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ja(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Qp(i.getShaderSource(e),a)}else return s}function tm(i,e){const t=em(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function nm(i,e){let t;switch(e){case iu:t="Linear";break;case ru:t="Reinhard";break;case su:t="Cineon";break;case ou:t="ACESFilmic";break;case cu:t="AgX";break;case lu:t="Neutral";break;case au:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Cr=new B;function im(){Ye.getLuminanceCoefficients(Cr);const i=Cr.x.toFixed(4),e=Cr.y.toFixed(4),t=Cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qi).join(`
`)}function sm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function om(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function qi(i){return i!==""}function $a(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Za(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const am=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ao(i){return i.replace(am,lm)}const cm=new Map;function lm(i,e){let t=Ve[e];if(t===void 0){const n=cm.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ao(t)}const um=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ja(i){return i.replace(um,dm)}function dm(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qa(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===gc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ol?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mn&&(e="SHADOWMAP_TYPE_VSM"),e}function fm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Pi:case Di:e="ENVMAP_TYPE_CUBE";break;case qr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Di:e="ENVMAP_MODE_REFRACTION";break}return e}function mm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Lo:e="ENVMAP_BLENDING_MULTIPLY";break;case tu:e="ENVMAP_BLENDING_MIX";break;case nu:e="ENVMAP_BLENDING_ADD";break}return e}function gm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function _m(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=hm(t),c=fm(t),h=pm(t),d=mm(t),f=gm(t),p=rm(t),g=sm(s),_=r.createProgram();let m,u,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qi).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qi).join(`
`),u.length>0&&(u+=`
`)):(m=[Qa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qi).join(`
`),u=[Qa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Pn?nm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,tm("linearToOutputTexel",t.outputColorSpace),im(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qi).join(`
`)),o=Ao(o),o=$a(o,t),o=Za(o,t),a=Ao(a),a=$a(a,t),a=Za(a,t),o=Ja(o),a=Ja(a),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===aa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===aa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const A=R+m+o,M=R+u+a,T=Ya(r,r.VERTEX_SHADER,A),b=Ya(r,r.FRAGMENT_SHADER,M);r.attachShader(_,T),r.attachShader(_,b),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function y(C){if(i.debug.checkShaderErrors){const U=r.getProgramInfoLog(_)||"",k=r.getShaderInfoLog(T)||"",Y=r.getShaderInfoLog(b)||"",O=U.trim(),N=k.trim(),W=Y.trim();let I=!0,j=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(I=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,T,b);else{const ee=ja(r,T,"vertex"),X=ja(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+ee+`
`+X)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(N===""||W==="")&&(j=!1);j&&(C.diagnostics={runnable:I,programLog:O,vertexShader:{log:N,prefix:m},fragmentShader:{log:W,prefix:u}})}r.deleteShader(T),r.deleteShader(b),P=new Fr(r,_),S=om(r,_)}let P;this.getUniforms=function(){return P===void 0&&y(this),P};let S;this.getAttributes=function(){return S===void 0&&y(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(_,Zp)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jp++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=b,this}let vm=0;class xm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Mm(e),t.set(e,n)),n}}class Mm{constructor(e){this.id=vm++,this.code=e,this.usedTimes=0}}function Sm(i,e,t,n,r,s,o){const a=new Pc,l=new xm,c=new Set,h=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,x,C,U,k){const Y=U.fog,O=k.geometry,N=S.isMeshStandardMaterial?U.environment:null,W=(S.isMeshStandardMaterial?t:e).get(S.envMap||N),I=W&&W.mapping===qr?W.image.height:null,j=g[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ee=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,X=ee!==void 0?ee.length:0;let ae=0;O.morphAttributes.position!==void 0&&(ae=1),O.morphAttributes.normal!==void 0&&(ae=2),O.morphAttributes.color!==void 0&&(ae=3);let ge,Le,J,H;if(j){const je=nn[j];ge=je.vertexShader,Le=je.fragmentShader}else ge=S.vertexShader,Le=S.fragmentShader,l.update(S),J=l.getVertexShaderID(S),H=l.getFragmentShaderID(S);const G=i.getRenderTarget(),ne=i.state.buffers.depth.getReversed(),xe=k.isInstancedMesh===!0,_e=k.isBatchedMesh===!0,Ge=!!S.map,pt=!!S.matcap,D=!!W,$e=!!S.aoMap,Be=!!S.lightMap,Ie=!!S.bumpMap,ye=!!S.normalMap,rt=!!S.displacementMap,be=!!S.emissiveMap,He=!!S.metalnessMap,xt=!!S.roughnessMap,dt=S.anisotropy>0,w=S.clearcoat>0,v=S.dispersion>0,V=S.iridescence>0,Z=S.sheen>0,te=S.transmission>0,$=dt&&!!S.anisotropyMap,Re=w&&!!S.clearcoatMap,le=w&&!!S.clearcoatNormalMap,Te=w&&!!S.clearcoatRoughnessMap,Ae=V&&!!S.iridescenceMap,se=V&&!!S.iridescenceThicknessMap,me=Z&&!!S.sheenColorMap,Ue=Z&&!!S.sheenRoughnessMap,we=!!S.specularMap,he=!!S.specularColorMap,ze=!!S.specularIntensityMap,L=te&&!!S.transmissionMap,oe=te&&!!S.thicknessMap,ue=!!S.gradientMap,Me=!!S.alphaMap,ie=S.alphaTest>0,Q=!!S.alphaHash,Ee=!!S.extensions;let Oe=Pn;S.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Oe=i.toneMapping);const nt={shaderID:j,shaderType:S.type,shaderName:S.name,vertexShader:ge,fragmentShader:Le,defines:S.defines,customVertexShaderID:J,customFragmentShaderID:H,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:_e,batchingColor:_e&&k._colorsTexture!==null,instancing:xe,instancingColor:xe&&k.instanceColor!==null,instancingMorph:xe&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:G===null?i.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Ui,alphaToCoverage:!!S.alphaToCoverage,map:Ge,matcap:pt,envMap:D,envMapMode:D&&W.mapping,envMapCubeUVHeight:I,aoMap:$e,lightMap:Be,bumpMap:Ie,normalMap:ye,displacementMap:f&&rt,emissiveMap:be,normalMapObjectSpace:ye&&S.normalMapType===fu,normalMapTangentSpace:ye&&S.normalMapType===Ac,metalnessMap:He,roughnessMap:xt,anisotropy:dt,anisotropyMap:$,clearcoat:w,clearcoatMap:Re,clearcoatNormalMap:le,clearcoatRoughnessMap:Te,dispersion:v,iridescence:V,iridescenceMap:Ae,iridescenceThicknessMap:se,sheen:Z,sheenColorMap:me,sheenRoughnessMap:Ue,specularMap:we,specularColorMap:he,specularIntensityMap:ze,transmission:te,transmissionMap:L,thicknessMap:oe,gradientMap:ue,opaque:S.transparent===!1&&S.blending===Ti&&S.alphaToCoverage===!1,alphaMap:Me,alphaTest:ie,alphaHash:Q,combine:S.combine,mapUv:Ge&&_(S.map.channel),aoMapUv:$e&&_(S.aoMap.channel),lightMapUv:Be&&_(S.lightMap.channel),bumpMapUv:Ie&&_(S.bumpMap.channel),normalMapUv:ye&&_(S.normalMap.channel),displacementMapUv:rt&&_(S.displacementMap.channel),emissiveMapUv:be&&_(S.emissiveMap.channel),metalnessMapUv:He&&_(S.metalnessMap.channel),roughnessMapUv:xt&&_(S.roughnessMap.channel),anisotropyMapUv:$&&_(S.anisotropyMap.channel),clearcoatMapUv:Re&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:me&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&_(S.sheenRoughnessMap.channel),specularMapUv:we&&_(S.specularMap.channel),specularColorMapUv:he&&_(S.specularColorMap.channel),specularIntensityMapUv:ze&&_(S.specularIntensityMap.channel),transmissionMapUv:L&&_(S.transmissionMap.channel),thicknessMapUv:oe&&_(S.thicknessMap.channel),alphaMapUv:Me&&_(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ye||dt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!O.attributes.uv&&(Ge||Me),fog:!!Y,useFog:S.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ne,skinning:k.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:ae,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ge&&S.map.isVideoTexture===!0&&Ye.getTransfer(S.map.colorSpace)===Je,decodeVideoTextureEmissive:be&&S.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(S.emissiveMap.colorSpace)===Je,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ht,flipSided:S.side===Nt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ee&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&S.extensions.multiDraw===!0||_e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function u(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)x.push(C),x.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(R(x,S),A(x,S),x.push(i.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function R(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function A(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),S.push(a.mask)}function M(S){const x=g[S.type];let C;if(x){const U=nn[x];C=Gu.clone(U.uniforms)}else C=S.uniforms;return C}function T(S,x){let C;for(let U=0,k=h.length;U<k;U++){const Y=h[U];if(Y.cacheKey===x){C=Y,++C.usedTimes;break}}return C===void 0&&(C=new _m(i,x,S,s),h.push(C)),C}function b(S){if(--S.usedTimes===0){const x=h.indexOf(S);h[x]=h[h.length-1],h.pop(),S.destroy()}}function y(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:M,acquireProgram:T,releaseProgram:b,releaseShaderCache:y,programs:h,dispose:P}}function Em(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function ym(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ec(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function tc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,f,p,g,_,m){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=m),e++,u}function a(d,f,p,g,_,m){const u=o(d,f,p,g,_,m);p.transmission>0?n.push(u):p.transparent===!0?r.push(u):t.push(u)}function l(d,f,p,g,_,m){const u=o(d,f,p,g,_,m);p.transmission>0?n.unshift(u):p.transparent===!0?r.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||ym),n.length>1&&n.sort(f||ec),r.length>1&&r.sort(f||ec)}function h(){for(let d=e,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function bm(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new tc,i.set(n,[o])):r>=s.length?(o=new tc,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Tm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ke};break;case"SpotLight":t={position:new B,direction:new B,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function Am(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let wm=0;function Rm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Cm(i){const e=new Tm,t=Am(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const r=new B,s=new st,o=new st;function a(c){let h=0,d=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,u=0,R=0,A=0,M=0,T=0,b=0,y=0;c.sort(Rm);for(let S=0,x=c.length;S<x;S++){const C=c[S],U=C.color,k=C.intensity,Y=C.distance,O=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=U.r*k,d+=U.g*k,f+=U.b*k;else if(C.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(C.sh.coefficients[N],k);y++}else if(C.isDirectionalLight){const N=e.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const W=C.shadow,I=t.get(C);I.shadowIntensity=W.intensity,I.shadowBias=W.bias,I.shadowNormalBias=W.normalBias,I.shadowRadius=W.radius,I.shadowMapSize=W.mapSize,n.directionalShadow[p]=I,n.directionalShadowMap[p]=O,n.directionalShadowMatrix[p]=C.shadow.matrix,R++}n.directional[p]=N,p++}else if(C.isSpotLight){const N=e.get(C);N.position.setFromMatrixPosition(C.matrixWorld),N.color.copy(U).multiplyScalar(k),N.distance=Y,N.coneCos=Math.cos(C.angle),N.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),N.decay=C.decay,n.spot[_]=N;const W=C.shadow;if(C.map&&(n.spotLightMap[T]=C.map,T++,W.updateMatrices(C),C.castShadow&&b++),n.spotLightMatrix[_]=W.matrix,C.castShadow){const I=t.get(C);I.shadowIntensity=W.intensity,I.shadowBias=W.bias,I.shadowNormalBias=W.normalBias,I.shadowRadius=W.radius,I.shadowMapSize=W.mapSize,n.spotShadow[_]=I,n.spotShadowMap[_]=O,M++}_++}else if(C.isRectAreaLight){const N=e.get(C);N.color.copy(U).multiplyScalar(k),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=N,m++}else if(C.isPointLight){const N=e.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),N.distance=C.distance,N.decay=C.decay,C.castShadow){const W=C.shadow,I=t.get(C);I.shadowIntensity=W.intensity,I.shadowBias=W.bias,I.shadowNormalBias=W.normalBias,I.shadowRadius=W.radius,I.shadowMapSize=W.mapSize,I.shadowCameraNear=W.camera.near,I.shadowCameraFar=W.camera.far,n.pointShadow[g]=I,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=C.shadow.matrix,A++}n.point[g]=N,g++}else if(C.isHemisphereLight){const N=e.get(C);N.skyColor.copy(C.color).multiplyScalar(k),N.groundColor.copy(C.groundColor).multiplyScalar(k),n.hemi[u]=N,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==u||P.numDirectionalShadows!==R||P.numPointShadows!==A||P.numSpotShadows!==M||P.numSpotMaps!==T||P.numLightProbes!==y)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=M+T-b,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=y,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=u,P.numDirectionalShadows=R,P.numPointShadows=A,P.numSpotShadows=M,P.numSpotMaps=T,P.numLightProbes=y,n.version=wm++)}function l(c,h){let d=0,f=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let u=0,R=c.length;u<R;u++){const A=c[u];if(A.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(A.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(A.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(A.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(A.width*.5,0,0),M.halfHeight.set(0,A.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(A.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(m),f++}else if(A.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(A.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function nc(i){const e=new Cm(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Pm(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new nc(i),e.set(r,[a])):s>=o.length?(a=new nc(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Dm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Um=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Lm(i,e,t){let n=new Vo;const r=new Fe,s=new Fe,o=new ut,a=new ed({depthPacking:hu}),l=new td,c={},h=t.maxTextureSize,d={[Un]:Nt,[Nt]:Un,[Ht]:Ht},f=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:Dm,fragmentShader:Um}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new St;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new At(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gc;let u=this.type;this.render=function(b,y,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const S=i.getRenderTarget(),x=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Cn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const k=u!==mn&&this.type===mn,Y=u===mn&&this.type!==mn;for(let O=0,N=b.length;O<N;O++){const W=b[O],I=W.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const j=I.getFrameExtents();if(r.multiply(j),s.copy(I.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/j.x),r.x=s.x*j.x,I.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/j.y),r.y=s.y*j.y,I.mapSize.y=s.y)),I.map===null||k===!0||Y===!0){const X=this.type!==mn?{minFilter:en,magFilter:en}:{};I.map!==null&&I.map.dispose(),I.map=new Jn(r.x,r.y,X),I.map.texture.name=W.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();const ee=I.getViewportCount();for(let X=0;X<ee;X++){const ae=I.getViewport(X);o.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),U.viewport(o),I.updateMatrices(W,X),n=I.getFrustum(),M(y,P,I.camera,W,this.type)}I.isPointLightShadow!==!0&&this.type===mn&&R(I,P),I.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(S,x,C)};function R(b,y){const P=e.update(_);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Jn(r.x,r.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(y,null,P,f,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(y,null,P,p,_,null)}function A(b,y,P,S){let x=null;const C=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)x=C;else if(x=P.isPointLight===!0?l:a,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){const U=x.uuid,k=y.uuid;let Y=c[U];Y===void 0&&(Y={},c[U]=Y);let O=Y[k];O===void 0&&(O=x.clone(),Y[k]=O,y.addEventListener("dispose",T)),x=O}if(x.visible=y.visible,x.wireframe=y.wireframe,S===mn?x.side=y.shadowSide!==null?y.shadowSide:y.side:x.side=y.shadowSide!==null?y.shadowSide:d[y.side],x.alphaMap=y.alphaMap,x.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,x.map=y.map,x.clipShadows=y.clipShadows,x.clippingPlanes=y.clippingPlanes,x.clipIntersection=y.clipIntersection,x.displacementMap=y.displacementMap,x.displacementScale=y.displacementScale,x.displacementBias=y.displacementBias,x.wireframeLinewidth=y.wireframeLinewidth,x.linewidth=y.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const U=i.properties.get(x);U.light=P}return x}function M(b,y,P,S,x){if(b.visible===!1)return;if(b.layers.test(y.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===mn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const k=e.update(b),Y=b.material;if(Array.isArray(Y)){const O=k.groups;for(let N=0,W=O.length;N<W;N++){const I=O[N],j=Y[I.materialIndex];if(j&&j.visible){const ee=A(b,j,S,x);b.onBeforeShadow(i,b,y,P,k,ee,I),i.renderBufferDirect(P,null,k,ee,b,I),b.onAfterShadow(i,b,y,P,k,ee,I)}}}else if(Y.visible){const O=A(b,Y,S,x);b.onBeforeShadow(i,b,y,P,k,O,null),i.renderBufferDirect(P,null,k,O,b,null),b.onAfterShadow(i,b,y,P,k,O,null)}}const U=b.children;for(let k=0,Y=U.length;k<Y;k++)M(U[k],y,P,S,x)}function T(b){b.target.removeEventListener("dispose",T);for(const P in c){const S=c[P],x=b.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const Im={[zs]:ks,[Hs]:Ws,[Vs]:Xs,[Ci]:Gs,[ks]:zs,[Ws]:Hs,[Xs]:Vs,[Gs]:Ci};function Nm(i,e){function t(){let L=!1;const oe=new ut;let ue=null;const Me=new ut(0,0,0,0);return{setMask:function(ie){ue!==ie&&!L&&(i.colorMask(ie,ie,ie,ie),ue=ie)},setLocked:function(ie){L=ie},setClear:function(ie,Q,Ee,Oe,nt){nt===!0&&(ie*=Oe,Q*=Oe,Ee*=Oe),oe.set(ie,Q,Ee,Oe),Me.equals(oe)===!1&&(i.clearColor(ie,Q,Ee,Oe),Me.copy(oe))},reset:function(){L=!1,ue=null,Me.set(-1,0,0,0)}}}function n(){let L=!1,oe=!1,ue=null,Me=null,ie=null;return{setReversed:function(Q){if(oe!==Q){const Ee=e.get("EXT_clip_control");Q?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),oe=Q;const Oe=ie;ie=null,this.setClear(Oe)}},getReversed:function(){return oe},setTest:function(Q){Q?G(i.DEPTH_TEST):ne(i.DEPTH_TEST)},setMask:function(Q){ue!==Q&&!L&&(i.depthMask(Q),ue=Q)},setFunc:function(Q){if(oe&&(Q=Im[Q]),Me!==Q){switch(Q){case zs:i.depthFunc(i.NEVER);break;case ks:i.depthFunc(i.ALWAYS);break;case Hs:i.depthFunc(i.LESS);break;case Ci:i.depthFunc(i.LEQUAL);break;case Vs:i.depthFunc(i.EQUAL);break;case Gs:i.depthFunc(i.GEQUAL);break;case Ws:i.depthFunc(i.GREATER);break;case Xs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Me=Q}},setLocked:function(Q){L=Q},setClear:function(Q){ie!==Q&&(oe&&(Q=1-Q),i.clearDepth(Q),ie=Q)},reset:function(){L=!1,ue=null,Me=null,ie=null,oe=!1}}}function r(){let L=!1,oe=null,ue=null,Me=null,ie=null,Q=null,Ee=null,Oe=null,nt=null;return{setTest:function(je){L||(je?G(i.STENCIL_TEST):ne(i.STENCIL_TEST))},setMask:function(je){oe!==je&&!L&&(i.stencilMask(je),oe=je)},setFunc:function(je,ln,tn){(ue!==je||Me!==ln||ie!==tn)&&(i.stencilFunc(je,ln,tn),ue=je,Me=ln,ie=tn)},setOp:function(je,ln,tn){(Q!==je||Ee!==ln||Oe!==tn)&&(i.stencilOp(je,ln,tn),Q=je,Ee=ln,Oe=tn)},setLocked:function(je){L=je},setClear:function(je){nt!==je&&(i.clearStencil(je),nt=je)},reset:function(){L=!1,oe=null,ue=null,Me=null,ie=null,Q=null,Ee=null,Oe=null,nt=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,u=null,R=null,A=null,M=null,T=null,b=null,y=new Ke(0,0,0),P=0,S=!1,x=null,C=null,U=null,k=null,Y=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,W=0;const I=i.getParameter(i.VERSION);I.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(I)[1]),N=W>=1):I.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),N=W>=2);let j=null,ee={};const X=i.getParameter(i.SCISSOR_BOX),ae=i.getParameter(i.VIEWPORT),ge=new ut().fromArray(X),Le=new ut().fromArray(ae);function J(L,oe,ue,Me){const ie=new Uint8Array(4),Q=i.createTexture();i.bindTexture(L,Q),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ee=0;Ee<ue;Ee++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,ie):i.texImage2D(oe+Ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ie);return Q}const H={};H[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),G(i.DEPTH_TEST),o.setFunc(Ci),Ie(!1),ye(ta),G(i.CULL_FACE),$e(Cn);function G(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function ne(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function xe(L,oe){return d[L]!==oe?(i.bindFramebuffer(L,oe),d[L]=oe,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=oe),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function _e(L,oe){let ue=p,Me=!1;if(L){ue=f.get(oe),ue===void 0&&(ue=[],f.set(oe,ue));const ie=L.textures;if(ue.length!==ie.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Ee=ie.length;Q<Ee;Q++)ue[Q]=i.COLOR_ATTACHMENT0+Q;ue.length=ie.length,Me=!0}}else ue[0]!==i.BACK&&(ue[0]=i.BACK,Me=!0);Me&&i.drawBuffers(ue)}function Ge(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const pt={[Xn]:i.FUNC_ADD,[Bl]:i.FUNC_SUBTRACT,[zl]:i.FUNC_REVERSE_SUBTRACT};pt[kl]=i.MIN,pt[Hl]=i.MAX;const D={[Vl]:i.ZERO,[Gl]:i.ONE,[Wl]:i.SRC_COLOR,[Fs]:i.SRC_ALPHA,[$l]:i.SRC_ALPHA_SATURATE,[Kl]:i.DST_COLOR,[ql]:i.DST_ALPHA,[Xl]:i.ONE_MINUS_SRC_COLOR,[Bs]:i.ONE_MINUS_SRC_ALPHA,[jl]:i.ONE_MINUS_DST_COLOR,[Yl]:i.ONE_MINUS_DST_ALPHA,[Zl]:i.CONSTANT_COLOR,[Jl]:i.ONE_MINUS_CONSTANT_COLOR,[Ql]:i.CONSTANT_ALPHA,[eu]:i.ONE_MINUS_CONSTANT_ALPHA};function $e(L,oe,ue,Me,ie,Q,Ee,Oe,nt,je){if(L===Cn){_===!0&&(ne(i.BLEND),_=!1);return}if(_===!1&&(G(i.BLEND),_=!0),L!==Fl){if(L!==m||je!==S){if((u!==Xn||M!==Xn)&&(i.blendEquation(i.FUNC_ADD),u=Xn,M=Xn),je)switch(L){case Ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case na:i.blendFunc(i.ONE,i.ONE);break;case ia:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ra:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case na:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ia:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ra:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}R=null,A=null,T=null,b=null,y.set(0,0,0),P=0,m=L,S=je}return}ie=ie||oe,Q=Q||ue,Ee=Ee||Me,(oe!==u||ie!==M)&&(i.blendEquationSeparate(pt[oe],pt[ie]),u=oe,M=ie),(ue!==R||Me!==A||Q!==T||Ee!==b)&&(i.blendFuncSeparate(D[ue],D[Me],D[Q],D[Ee]),R=ue,A=Me,T=Q,b=Ee),(Oe.equals(y)===!1||nt!==P)&&(i.blendColor(Oe.r,Oe.g,Oe.b,nt),y.copy(Oe),P=nt),m=L,S=!1}function Be(L,oe){L.side===Ht?ne(i.CULL_FACE):G(i.CULL_FACE);let ue=L.side===Nt;oe&&(ue=!ue),Ie(ue),L.blending===Ti&&L.transparent===!1?$e(Cn):$e(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const Me=L.stencilWrite;a.setTest(Me),Me&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),be(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?G(i.SAMPLE_ALPHA_TO_COVERAGE):ne(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(L){x!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),x=L)}function ye(L){L!==Il?(G(i.CULL_FACE),L!==C&&(L===ta?i.cullFace(i.BACK):L===Nl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ne(i.CULL_FACE),C=L}function rt(L){L!==U&&(N&&i.lineWidth(L),U=L)}function be(L,oe,ue){L?(G(i.POLYGON_OFFSET_FILL),(k!==oe||Y!==ue)&&(i.polygonOffset(oe,ue),k=oe,Y=ue)):ne(i.POLYGON_OFFSET_FILL)}function He(L){L?G(i.SCISSOR_TEST):ne(i.SCISSOR_TEST)}function xt(L){L===void 0&&(L=i.TEXTURE0+O-1),j!==L&&(i.activeTexture(L),j=L)}function dt(L,oe,ue){ue===void 0&&(j===null?ue=i.TEXTURE0+O-1:ue=j);let Me=ee[ue];Me===void 0&&(Me={type:void 0,texture:void 0},ee[ue]=Me),(Me.type!==L||Me.texture!==oe)&&(j!==ue&&(i.activeTexture(ue),j=ue),i.bindTexture(L,oe||H[L]),Me.type=L,Me.texture=oe)}function w(){const L=ee[j];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(L){ge.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ge.copy(L))}function Ue(L){Le.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Le.copy(L))}function we(L,oe){let ue=c.get(oe);ue===void 0&&(ue=new WeakMap,c.set(oe,ue));let Me=ue.get(L);Me===void 0&&(Me=i.getUniformBlockIndex(oe,L.name),ue.set(L,Me))}function he(L,oe){const Me=c.get(oe).get(L);l.get(oe)!==Me&&(i.uniformBlockBinding(oe,Me,L.__bindingPointIndex),l.set(oe,Me))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},j=null,ee={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,u=null,R=null,A=null,M=null,T=null,b=null,y=new Ke(0,0,0),P=0,S=!1,x=null,C=null,U=null,k=null,Y=null,ge.set(0,0,i.canvas.width,i.canvas.height),Le.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:G,disable:ne,bindFramebuffer:xe,drawBuffers:_e,useProgram:Ge,setBlending:$e,setMaterial:Be,setFlipSided:Ie,setCullFace:ye,setLineWidth:rt,setPolygonOffset:be,setScissorTest:He,activeTexture:xt,bindTexture:dt,unbindTexture:w,compressedTexImage2D:v,compressedTexImage3D:V,texImage2D:Ae,texImage3D:se,updateUBOMapping:we,uniformBlockBinding:he,texStorage2D:le,texStorage3D:Te,texSubImage2D:Z,texSubImage3D:te,compressedTexSubImage2D:$,compressedTexSubImage3D:Re,scissor:me,viewport:Ue,reset:ze}}function Om(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return p?new OffscreenCanvas(w,v):Hr("canvas")}function _(w,v,V){let Z=1;const te=dt(w);if((te.width>V||te.height>V)&&(Z=V/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const $=Math.floor(Z*te.width),Re=Math.floor(Z*te.height);d===void 0&&(d=g($,Re));const le=v?g($,Re):d;return le.width=$,le.height=Re,le.getContext("2d").drawImage(w,0,0,$,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+$+"x"+Re+")."),le}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),w;return w}function m(w){return w.generateMipmaps}function u(w){i.generateMipmap(w)}function R(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(w,v,V,Z,te=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let $=v;if(v===i.RED&&(V===i.FLOAT&&($=i.R32F),V===i.HALF_FLOAT&&($=i.R16F),V===i.UNSIGNED_BYTE&&($=i.R8)),v===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.R8UI),V===i.UNSIGNED_SHORT&&($=i.R16UI),V===i.UNSIGNED_INT&&($=i.R32UI),V===i.BYTE&&($=i.R8I),V===i.SHORT&&($=i.R16I),V===i.INT&&($=i.R32I)),v===i.RG&&(V===i.FLOAT&&($=i.RG32F),V===i.HALF_FLOAT&&($=i.RG16F),V===i.UNSIGNED_BYTE&&($=i.RG8)),v===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.RG8UI),V===i.UNSIGNED_SHORT&&($=i.RG16UI),V===i.UNSIGNED_INT&&($=i.RG32UI),V===i.BYTE&&($=i.RG8I),V===i.SHORT&&($=i.RG16I),V===i.INT&&($=i.RG32I)),v===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.RGB8UI),V===i.UNSIGNED_SHORT&&($=i.RGB16UI),V===i.UNSIGNED_INT&&($=i.RGB32UI),V===i.BYTE&&($=i.RGB8I),V===i.SHORT&&($=i.RGB16I),V===i.INT&&($=i.RGB32I)),v===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.RGBA8UI),V===i.UNSIGNED_SHORT&&($=i.RGBA16UI),V===i.UNSIGNED_INT&&($=i.RGBA32UI),V===i.BYTE&&($=i.RGBA8I),V===i.SHORT&&($=i.RGBA16I),V===i.INT&&($=i.RGBA32I)),v===i.RGB&&(V===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),v===i.RGBA){const Re=te?zr:Ye.getTransfer(Z);V===i.FLOAT&&($=i.RGBA32F),V===i.HALF_FLOAT&&($=i.RGBA16F),V===i.UNSIGNED_BYTE&&($=Re===Je?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function M(w,v){let V;return w?v===null||v===$n||v===Ki?V=i.DEPTH24_STENCIL8:v===vn?V=i.DEPTH32F_STENCIL8:v===Yi&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===$n||v===Ki?V=i.DEPTH_COMPONENT24:v===vn?V=i.DEPTH_COMPONENT32F:v===Yi&&(V=i.DEPTH_COMPONENT16),V}function T(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==en&&w.minFilter!==rn?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function b(w){const v=w.target;v.removeEventListener("dispose",b),P(v),v.isVideoTexture&&h.delete(v)}function y(w){const v=w.target;v.removeEventListener("dispose",y),x(v)}function P(w){const v=n.get(w);if(v.__webglInit===void 0)return;const V=w.source,Z=f.get(V);if(Z){const te=Z[v.__cacheKey];te.usedTimes--,te.usedTimes===0&&S(w),Object.keys(Z).length===0&&f.delete(V)}n.remove(w)}function S(w){const v=n.get(w);i.deleteTexture(v.__webglTexture);const V=w.source,Z=f.get(V);delete Z[v.__cacheKey],o.memory.textures--}function x(w){const v=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let te=0;te<v.__webglFramebuffer[Z].length;te++)i.deleteFramebuffer(v.__webglFramebuffer[Z][te]);else i.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[Z]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const V=w.textures;for(let Z=0,te=V.length;Z<te;Z++){const $=n.get(V[Z]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(V[Z])}n.remove(w)}let C=0;function U(){C=0}function k(){const w=C;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),C+=1,w}function Y(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function O(w,v){const V=n.get(w);if(w.isVideoTexture&&He(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&V.__version!==w.version){const Z=w.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(V,w,v);return}}else w.isExternalTexture&&(V.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+v)}function N(w,v){const V=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){H(V,w,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+v)}function W(w,v){const V=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){H(V,w,v);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+v)}function I(w,v){const V=n.get(w);if(w.version>0&&V.__version!==w.version){G(V,w,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+v)}const j={[Ks]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[js]:i.MIRRORED_REPEAT},ee={[en]:i.NEAREST,[uu]:i.NEAREST_MIPMAP_NEAREST,[or]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[es]:i.LINEAR_MIPMAP_NEAREST,[jn]:i.LINEAR_MIPMAP_LINEAR},X={[pu]:i.NEVER,[Mu]:i.ALWAYS,[mu]:i.LESS,[wc]:i.LEQUAL,[gu]:i.EQUAL,[xu]:i.GEQUAL,[_u]:i.GREATER,[vu]:i.NOTEQUAL};function ae(w,v){if(v.type===vn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===rn||v.magFilter===es||v.magFilter===or||v.magFilter===jn||v.minFilter===rn||v.minFilter===es||v.minFilter===or||v.minFilter===jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,j[v.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,j[v.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,j[v.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ee[v.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ee[v.minFilter]),v.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,X[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===en||v.minFilter!==or&&v.minFilter!==jn||v.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ge(w,v){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",b));const Z=v.source;let te=f.get(Z);te===void 0&&(te={},f.set(Z,te));const $=Y(v);if($!==w.__cacheKey){te[$]===void 0&&(te[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),te[$].usedTimes++;const Re=te[w.__cacheKey];Re!==void 0&&(te[w.__cacheKey].usedTimes--,Re.usedTimes===0&&S(v)),w.__cacheKey=$,w.__webglTexture=te[$].texture}return V}function Le(w,v,V){return Math.floor(Math.floor(w/V)/v)}function J(w,v,V,Z){const $=w.updateRanges;if($.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,V,Z,v.data);else{$.sort((se,me)=>se.start-me.start);let Re=0;for(let se=1;se<$.length;se++){const me=$[Re],Ue=$[se],we=me.start+me.count,he=Le(Ue.start,v.width,4),ze=Le(me.start,v.width,4);Ue.start<=we+1&&he===ze&&Le(Ue.start+Ue.count-1,v.width,4)===he?me.count=Math.max(me.count,Ue.start+Ue.count-me.start):(++Re,$[Re]=Ue)}$.length=Re+1;const le=i.getParameter(i.UNPACK_ROW_LENGTH),Te=i.getParameter(i.UNPACK_SKIP_PIXELS),Ae=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let se=0,me=$.length;se<me;se++){const Ue=$[se],we=Math.floor(Ue.start/4),he=Math.ceil(Ue.count/4),ze=we%v.width,L=Math.floor(we/v.width),oe=he,ue=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,ze,L,oe,ue,V,Z,v.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,le),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ae)}}function H(w,v,V){let Z=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=i.TEXTURE_3D);const te=ge(w,v),$=v.source;t.bindTexture(Z,w.__webglTexture,i.TEXTURE0+V);const Re=n.get($);if($.version!==Re.__version||te===!0){t.activeTexture(i.TEXTURE0+V);const le=Ye.getPrimaries(Ye.workingColorSpace),Te=v.colorSpace===Rn?null:Ye.getPrimaries(v.colorSpace),Ae=v.colorSpace===Rn||le===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let se=_(v.image,!1,r.maxTextureSize);se=xt(v,se);const me=s.convert(v.format,v.colorSpace),Ue=s.convert(v.type);let we=A(v.internalFormat,me,Ue,v.colorSpace,v.isVideoTexture);ae(Z,v);let he;const ze=v.mipmaps,L=v.isVideoTexture!==!0,oe=Re.__version===void 0||te===!0,ue=$.dataReady,Me=T(v,se);if(v.isDepthTexture)we=M(v.format===$i,v.type),oe&&(L?t.texStorage2D(i.TEXTURE_2D,1,we,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,we,se.width,se.height,0,me,Ue,null));else if(v.isDataTexture)if(ze.length>0){L&&oe&&t.texStorage2D(i.TEXTURE_2D,Me,we,ze[0].width,ze[0].height);for(let ie=0,Q=ze.length;ie<Q;ie++)he=ze[ie],L?ue&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,he.width,he.height,me,Ue,he.data):t.texImage2D(i.TEXTURE_2D,ie,we,he.width,he.height,0,me,Ue,he.data);v.generateMipmaps=!1}else L?(oe&&t.texStorage2D(i.TEXTURE_2D,Me,we,se.width,se.height),ue&&J(v,se,me,Ue)):t.texImage2D(i.TEXTURE_2D,0,we,se.width,se.height,0,me,Ue,se.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){L&&oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,we,ze[0].width,ze[0].height,se.depth);for(let ie=0,Q=ze.length;ie<Q;ie++)if(he=ze[ie],v.format!==Qt)if(me!==null)if(L){if(ue)if(v.layerUpdates.size>0){const Ee=Ua(he.width,he.height,v.format,v.type);for(const Oe of v.layerUpdates){const nt=he.data.subarray(Oe*Ee/he.data.BYTES_PER_ELEMENT,(Oe+1)*Ee/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,Oe,he.width,he.height,1,me,nt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,he.width,he.height,se.depth,me,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,we,he.width,he.height,se.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ue&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,he.width,he.height,se.depth,me,Ue,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,we,he.width,he.height,se.depth,0,me,Ue,he.data)}else{L&&oe&&t.texStorage2D(i.TEXTURE_2D,Me,we,ze[0].width,ze[0].height);for(let ie=0,Q=ze.length;ie<Q;ie++)he=ze[ie],v.format!==Qt?me!==null?L?ue&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,he.width,he.height,me,he.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,we,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ue&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,he.width,he.height,me,Ue,he.data):t.texImage2D(i.TEXTURE_2D,ie,we,he.width,he.height,0,me,Ue,he.data)}else if(v.isDataArrayTexture)if(L){if(oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,we,se.width,se.height,se.depth),ue)if(v.layerUpdates.size>0){const ie=Ua(se.width,se.height,v.format,v.type);for(const Q of v.layerUpdates){const Ee=se.data.subarray(Q*ie/se.data.BYTES_PER_ELEMENT,(Q+1)*ie/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,se.width,se.height,1,me,Ue,Ee)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,me,Ue,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,se.width,se.height,se.depth,0,me,Ue,se.data);else if(v.isData3DTexture)L?(oe&&t.texStorage3D(i.TEXTURE_3D,Me,we,se.width,se.height,se.depth),ue&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,me,Ue,se.data)):t.texImage3D(i.TEXTURE_3D,0,we,se.width,se.height,se.depth,0,me,Ue,se.data);else if(v.isFramebufferTexture){if(oe)if(L)t.texStorage2D(i.TEXTURE_2D,Me,we,se.width,se.height);else{let ie=se.width,Q=se.height;for(let Ee=0;Ee<Me;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,we,ie,Q,0,me,Ue,null),ie>>=1,Q>>=1}}else if(ze.length>0){if(L&&oe){const ie=dt(ze[0]);t.texStorage2D(i.TEXTURE_2D,Me,we,ie.width,ie.height)}for(let ie=0,Q=ze.length;ie<Q;ie++)he=ze[ie],L?ue&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,me,Ue,he):t.texImage2D(i.TEXTURE_2D,ie,we,me,Ue,he);v.generateMipmaps=!1}else if(L){if(oe){const ie=dt(se);t.texStorage2D(i.TEXTURE_2D,Me,we,ie.width,ie.height)}ue&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,Ue,se)}else t.texImage2D(i.TEXTURE_2D,0,we,me,Ue,se);m(v)&&u(Z),Re.__version=$.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function G(w,v,V){if(v.image.length!==6)return;const Z=ge(w,v),te=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+V);const $=n.get(te);if(te.version!==$.__version||Z===!0){t.activeTexture(i.TEXTURE0+V);const Re=Ye.getPrimaries(Ye.workingColorSpace),le=v.colorSpace===Rn?null:Ye.getPrimaries(v.colorSpace),Te=v.colorSpace===Rn||Re===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ae=v.isCompressedTexture||v.image[0].isCompressedTexture,se=v.image[0]&&v.image[0].isDataTexture,me=[];for(let Q=0;Q<6;Q++)!Ae&&!se?me[Q]=_(v.image[Q],!0,r.maxCubemapSize):me[Q]=se?v.image[Q].image:v.image[Q],me[Q]=xt(v,me[Q]);const Ue=me[0],we=s.convert(v.format,v.colorSpace),he=s.convert(v.type),ze=A(v.internalFormat,we,he,v.colorSpace),L=v.isVideoTexture!==!0,oe=$.__version===void 0||Z===!0,ue=te.dataReady;let Me=T(v,Ue);ae(i.TEXTURE_CUBE_MAP,v);let ie;if(Ae){L&&oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,ze,Ue.width,Ue.height);for(let Q=0;Q<6;Q++){ie=me[Q].mipmaps;for(let Ee=0;Ee<ie.length;Ee++){const Oe=ie[Ee];v.format!==Qt?we!==null?L?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee,0,0,Oe.width,Oe.height,we,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee,ze,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee,0,0,Oe.width,Oe.height,we,he,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee,ze,Oe.width,Oe.height,0,we,he,Oe.data)}}}else{if(ie=v.mipmaps,L&&oe){ie.length>0&&Me++;const Q=dt(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,ze,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(se){L?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,me[Q].width,me[Q].height,we,he,me[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ze,me[Q].width,me[Q].height,0,we,he,me[Q].data);for(let Ee=0;Ee<ie.length;Ee++){const nt=ie[Ee].image[Q].image;L?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee+1,0,0,nt.width,nt.height,we,he,nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee+1,ze,nt.width,nt.height,0,we,he,nt.data)}}else{L?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,we,he,me[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ze,we,he,me[Q]);for(let Ee=0;Ee<ie.length;Ee++){const Oe=ie[Ee];L?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee+1,0,0,we,he,Oe.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee+1,ze,we,he,Oe.image[Q])}}}m(v)&&u(i.TEXTURE_CUBE_MAP),$.__version=te.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ne(w,v,V,Z,te,$){const Re=s.convert(V.format,V.colorSpace),le=s.convert(V.type),Te=A(V.internalFormat,Re,le,V.colorSpace),Ae=n.get(v),se=n.get(V);if(se.__renderTarget=v,!Ae.__hasExternalTextures){const me=Math.max(1,v.width>>$),Ue=Math.max(1,v.height>>$);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,$,Te,me,Ue,v.depth,0,Re,le,null):t.texImage2D(te,$,Te,me,Ue,0,Re,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),be(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,te,se.__webglTexture,0,rt(v)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,te,se.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(w,v,V){if(i.bindRenderbuffer(i.RENDERBUFFER,w),v.depthBuffer){const Z=v.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,$=M(v.stencilBuffer,te),Re=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=rt(v);be(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,$,v.width,v.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,$,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,$,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,w)}else{const Z=v.textures;for(let te=0;te<Z.length;te++){const $=Z[te],Re=s.convert($.format,$.colorSpace),le=s.convert($.type),Te=A($.internalFormat,Re,le,$.colorSpace),Ae=rt(v);V&&be(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,Te,v.width,v.height):be(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,Te,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Te,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _e(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(v.depthTexture);Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),O(v.depthTexture,0);const te=Z.__webglTexture,$=rt(v);if(v.depthTexture.format===ji)be(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(v.depthTexture.format===$i)be(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ge(w){const v=n.get(w),V=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const Z=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){const te=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),v.__depthDisposeCallback=te}v.__boundDepthTexture=Z}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const Z=w.texture.mipmaps;Z&&Z.length>0?_e(v.__webglFramebuffer[0],w):_e(v.__webglFramebuffer,w)}else if(V){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=i.createRenderbuffer(),xe(v.__webglDepthbuffer[Z],w,!1);else{const te=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,$)}}else{const Z=w.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),xe(v.__webglDepthbuffer,w,!1);else{const te=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,$)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(w,v,V){const Z=n.get(w);v!==void 0&&ne(Z.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Ge(w)}function D(w){const v=w.texture,V=n.get(w),Z=n.get(v);w.addEventListener("dispose",y);const te=w.textures,$=w.isWebGLCubeRenderTarget===!0,Re=te.length>1;if(Re||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=v.version,o.memory.textures++),$){V.__webglFramebuffer=[];for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer[le]=[];for(let Te=0;Te<v.mipmaps.length;Te++)V.__webglFramebuffer[le][Te]=i.createFramebuffer()}else V.__webglFramebuffer[le]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer=[];for(let le=0;le<v.mipmaps.length;le++)V.__webglFramebuffer[le]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Re)for(let le=0,Te=te.length;le<Te;le++){const Ae=n.get(te[le]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&be(w)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let le=0;le<te.length;le++){const Te=te[le];V.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[le]);const Ae=s.convert(Te.format,Te.colorSpace),se=s.convert(Te.type),me=A(Te.internalFormat,Ae,se,Te.colorSpace,w.isXRRenderTarget===!0),Ue=rt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,me,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,V.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),xe(V.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),ae(i.TEXTURE_CUBE_MAP,v);for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0)for(let Te=0;Te<v.mipmaps.length;Te++)ne(V.__webglFramebuffer[le][Te],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te);else ne(V.__webglFramebuffer[le],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(v)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let le=0,Te=te.length;le<Te;le++){const Ae=te[le],se=n.get(Ae);let me=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(me=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,se.__webglTexture),ae(me,Ae),ne(V.__webglFramebuffer,w,Ae,i.COLOR_ATTACHMENT0+le,me,0),m(Ae)&&u(me)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(le=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,Z.__webglTexture),ae(le,v),v.mipmaps&&v.mipmaps.length>0)for(let Te=0;Te<v.mipmaps.length;Te++)ne(V.__webglFramebuffer[Te],w,v,i.COLOR_ATTACHMENT0,le,Te);else ne(V.__webglFramebuffer,w,v,i.COLOR_ATTACHMENT0,le,0);m(v)&&u(le),t.unbindTexture()}w.depthBuffer&&Ge(w)}function $e(w){const v=w.textures;for(let V=0,Z=v.length;V<Z;V++){const te=v[V];if(m(te)){const $=R(w),Re=n.get(te).__webglTexture;t.bindTexture($,Re),u($),t.unbindTexture()}}}const Be=[],Ie=[];function ye(w){if(w.samples>0){if(be(w)===!1){const v=w.textures,V=w.width,Z=w.height;let te=i.COLOR_BUFFER_BIT;const $=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(w),le=v.length>1;if(le)for(let Ae=0;Ae<v.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const Te=w.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ae=0;Ae<v.length;Ae++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Ae]);const se=n.get(v[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,V,Z,0,0,V,Z,te,i.NEAREST),l===!0&&(Be.length=0,Ie.length=0,Be.push(i.COLOR_ATTACHMENT0+Ae),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Be.push($),Ie.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ie)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Be))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let Ae=0;Ae<v.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Ae]);const se=n.get(v[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const v=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function rt(w){return Math.min(r.maxSamples,w.samples)}function be(w){const v=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function He(w){const v=o.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function xt(w,v){const V=w.colorSpace,Z=w.format,te=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||V!==Ui&&V!==Rn&&(Ye.getTransfer(V)===Je?(Z!==Qt||te!==an)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),v}function dt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=U,this.setTexture2D=O,this.setTexture2DArray=N,this.setTexture3D=W,this.setTextureCube=I,this.rebindTextures=pt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=be}function Fm(i,e){function t(n,r=Rn){let s;const o=Ye.getTransfer(r);if(n===an)return i.UNSIGNED_BYTE;if(n===No)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Oo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Mc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===vc)return i.BYTE;if(n===xc)return i.SHORT;if(n===Yi)return i.UNSIGNED_SHORT;if(n===Io)return i.INT;if(n===$n)return i.UNSIGNED_INT;if(n===vn)return i.FLOAT;if(n===er)return i.HALF_FLOAT;if(n===Ec)return i.ALPHA;if(n===yc)return i.RGB;if(n===Qt)return i.RGBA;if(n===ji)return i.DEPTH_COMPONENT;if(n===$i)return i.DEPTH_STENCIL;if(n===bc)return i.RED;if(n===Fo)return i.RED_INTEGER;if(n===Tc)return i.RG;if(n===Bo)return i.RG_INTEGER;if(n===zo)return i.RGBA_INTEGER;if(n===Ur||n===Lr||n===Ir||n===Nr)if(o===Je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ur)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Lr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ir)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Nr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ur)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Lr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ir)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Nr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$s||n===Zs||n===Js||n===Qs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===$s)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Js)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===eo||n===to||n===no)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===eo||n===to)return o===Je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===no)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===io||n===ro||n===so||n===oo||n===ao||n===co||n===lo||n===uo||n===ho||n===fo||n===po||n===mo||n===go||n===_o)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===io)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ro)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===so)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oo)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ao)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===co)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lo)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uo)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ho)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fo)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===po)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mo)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===go)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_o)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vo||n===xo||n===Mo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===vo)return o===Je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===So||n===Eo||n===yo||n===bo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===So)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Eo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Bm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class km{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Bc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new In({vertexShader:Bm,fragmentShader:zm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new At(new Kr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hm extends Qn{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new km,u={},R=t.getContextAttributes();let A=null,M=null;const T=[],b=[],y=new Fe;let P=null;const S=new Zt;S.viewport=new ut;const x=new Zt;x.viewport=new ut;const C=[S,x],U=new od;let k=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let G=T[H];return G===void 0&&(G=new Es,T[H]=G),G.getTargetRaySpace()},this.getControllerGrip=function(H){let G=T[H];return G===void 0&&(G=new Es,T[H]=G),G.getGripSpace()},this.getHand=function(H){let G=T[H];return G===void 0&&(G=new Es,T[H]=G),G.getHandSpace()};function O(H){const G=b.indexOf(H.inputSource);if(G===-1)return;const ne=T[G];ne!==void 0&&(ne.update(H.inputSource,H.frame,c||o),ne.dispatchEvent({type:H.type,data:H.inputSource}))}function N(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",W);for(let H=0;H<T.length;H++){const G=b[H];G!==null&&(b[H]=null,T[H].disconnect(G))}k=null,Y=null,m.reset();for(const H in u)delete u[H];e.setRenderTarget(A),p=null,f=null,d=null,r=null,M=null,J.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",N),r.addEventListener("inputsourceschange",W),R.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(y),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,xe=null,_e=null;R.depth&&(_e=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=R.stencil?$i:ji,xe=R.stencil?Ki:$n);const Ge={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Ge),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Jn(f.textureWidth,f.textureHeight,{format:Qt,type:an,depthTexture:new Fc(f.textureWidth,f.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ne={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Jn(p.framebufferWidth,p.framebufferHeight,{format:Qt,type:an,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),J.setContext(r),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(H){for(let G=0;G<H.removed.length;G++){const ne=H.removed[G],xe=b.indexOf(ne);xe>=0&&(b[xe]=null,T[xe].disconnect(ne))}for(let G=0;G<H.added.length;G++){const ne=H.added[G];let xe=b.indexOf(ne);if(xe===-1){for(let Ge=0;Ge<T.length;Ge++)if(Ge>=b.length){b.push(ne),xe=Ge;break}else if(b[Ge]===null){b[Ge]=ne,xe=Ge;break}if(xe===-1)break}const _e=T[xe];_e&&_e.connect(ne)}}const I=new B,j=new B;function ee(H,G,ne){I.setFromMatrixPosition(G.matrixWorld),j.setFromMatrixPosition(ne.matrixWorld);const xe=I.distanceTo(j),_e=G.projectionMatrix.elements,Ge=ne.projectionMatrix.elements,pt=_e[14]/(_e[10]-1),D=_e[14]/(_e[10]+1),$e=(_e[9]+1)/_e[5],Be=(_e[9]-1)/_e[5],Ie=(_e[8]-1)/_e[0],ye=(Ge[8]+1)/Ge[0],rt=pt*Ie,be=pt*ye,He=xe/(-Ie+ye),xt=He*-Ie;if(G.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(xt),H.translateZ(He),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),_e[10]===-1)H.projectionMatrix.copy(G.projectionMatrix),H.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{const dt=pt+He,w=D+He,v=rt-xt,V=be+(xe-xt),Z=$e*D/w*dt,te=Be*D/w*dt;H.projectionMatrix.makePerspective(v,V,Z,te,dt,w),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function X(H,G){G===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(G.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let G=H.near,ne=H.far;m.texture!==null&&(m.depthNear>0&&(G=m.depthNear),m.depthFar>0&&(ne=m.depthFar)),U.near=x.near=S.near=G,U.far=x.far=S.far=ne,(k!==U.near||Y!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),k=U.near,Y=U.far),U.layers.mask=H.layers.mask|6,S.layers.mask=U.layers.mask&3,x.layers.mask=U.layers.mask&5;const xe=H.parent,_e=U.cameras;X(U,xe);for(let Ge=0;Ge<_e.length;Ge++)X(_e[Ge],xe);_e.length===2?ee(U,S,x):U.projectionMatrix.copy(S.projectionMatrix),ae(H,U,xe)};function ae(H,G,ne){ne===null?H.matrix.copy(G.matrixWorld):(H.matrix.copy(ne.matrixWorld),H.matrix.invert(),H.matrix.multiply(G.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(G.projectionMatrix),H.projectionMatrixInverse.copy(G.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=To*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(H){return u[H]};let ge=null;function Le(H,G){if(h=G.getViewerPose(c||o),g=G,h!==null){const ne=h.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let xe=!1;ne.length!==U.cameras.length&&(U.cameras.length=0,xe=!0);for(let D=0;D<ne.length;D++){const $e=ne[D];let Be=null;if(p!==null)Be=p.getViewport($e);else{const ye=d.getViewSubImage(f,$e);Be=ye.viewport,D===0&&(e.setRenderTargetTextures(M,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(M))}let Ie=C[D];Ie===void 0&&(Ie=new Zt,Ie.layers.enable(D),Ie.viewport=new ut,C[D]=Ie),Ie.matrix.fromArray($e.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray($e.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Be.x,Be.y,Be.width,Be.height),D===0&&(U.matrix.copy(Ie.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),xe===!0&&U.cameras.push(Ie)}const _e=r.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const D=d.getDepthInformation(ne[0]);D&&D.isValid&&D.texture&&m.init(D,r.renderState)}if(_e&&_e.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let D=0;D<ne.length;D++){const $e=ne[D].camera;if($e){let Be=u[$e];Be||(Be=new Bc,u[$e]=Be);const Ie=d.getCameraImage($e);Be.sourceTexture=Ie}}}}for(let ne=0;ne<T.length;ne++){const xe=b[ne],_e=T[ne];xe!==null&&_e!==void 0&&_e.update(xe,G,c||o)}ge&&ge(H,G),G.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:G}),g=null}const J=new Hc;J.setAnimationLoop(Le),this.setAnimationLoop=function(H){ge=H},this.dispose=function(){}}}const Gn=new cn,Vm=new st;function Gm(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Ic(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,R,A,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,M)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),_(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,R,A):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Nt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Nt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const R=e.get(u),A=R.envMap,M=R.envMapRotation;A&&(m.envMap.value=A,Gn.copy(M),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),m.envMapRotation.value.setFromMatrix4(Vm.makeRotationFromEuler(Gn)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,R,A){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*R,m.scale.value=A*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,R){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Nt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function _(m,u){const R=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Wm(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,A){const M=A.program;n.uniformBlockBinding(R,M)}function c(R,A){let M=r[R.id];M===void 0&&(g(R),M=h(R),r[R.id]=M,R.addEventListener("dispose",m));const T=A.program;n.updateUBOMapping(R,T);const b=e.render.frame;s[R.id]!==b&&(f(R),s[R.id]=b)}function h(R){const A=d();R.__bindingPointIndex=A;const M=i.createBuffer(),T=R.__size,b=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,T,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,M),M}function d(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){const A=r[R.id],M=R.uniforms,T=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let b=0,y=M.length;b<y;b++){const P=Array.isArray(M[b])?M[b]:[M[b]];for(let S=0,x=P.length;S<x;S++){const C=P[S];if(p(C,b,S,T)===!0){const U=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let Y=0;for(let O=0;O<k.length;O++){const N=k[O],W=_(N);typeof N=="number"||typeof N=="boolean"?(C.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,U+Y,C.__data)):N.isMatrix3?(C.__data[0]=N.elements[0],C.__data[1]=N.elements[1],C.__data[2]=N.elements[2],C.__data[3]=0,C.__data[4]=N.elements[3],C.__data[5]=N.elements[4],C.__data[6]=N.elements[5],C.__data[7]=0,C.__data[8]=N.elements[6],C.__data[9]=N.elements[7],C.__data[10]=N.elements[8],C.__data[11]=0):(N.toArray(C.__data,Y),Y+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(R,A,M,T){const b=R.value,y=A+"_"+M;if(T[y]===void 0)return typeof b=="number"||typeof b=="boolean"?T[y]=b:T[y]=b.clone(),!0;{const P=T[y];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return T[y]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function g(R){const A=R.uniforms;let M=0;const T=16;for(let y=0,P=A.length;y<P;y++){const S=Array.isArray(A[y])?A[y]:[A[y]];for(let x=0,C=S.length;x<C;x++){const U=S[x],k=Array.isArray(U.value)?U.value:[U.value];for(let Y=0,O=k.length;Y<O;Y++){const N=k[Y],W=_(N),I=M%T,j=I%W.boundary,ee=I+j;M+=j,ee!==0&&T-ee<W.storage&&(M+=T-ee),U.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=W.storage}}}const b=M%T;return b>0&&(M+=T-b),R.__size=M,R.__cache={},this}function _(R){const A={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(A.boundary=4,A.storage=4):R.isVector2?(A.boundary=8,A.storage=8):R.isVector3||R.isColor?(A.boundary=16,A.storage=12):R.isVector4?(A.boundary=16,A.storage=16):R.isMatrix3?(A.boundary=48,A.storage=48):R.isMatrix4?(A.boundary=64,A.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),A}function m(R){const A=R.target;A.removeEventListener("dispose",m);const M=o.indexOf(A.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function u(){for(const R in r)i.deleteBuffer(r[R]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Xm{constructor(e={}){const{canvas:t=yu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,u=null;const R=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let T=!1;this._outputColorSpace=qt;let b=0,y=0,P=null,S=-1,x=null;const C=new ut,U=new ut;let k=null;const Y=new Ke(0);let O=0,N=t.width,W=t.height,I=1,j=null,ee=null;const X=new ut(0,0,N,W),ae=new ut(0,0,N,W);let ge=!1;const Le=new Vo;let J=!1,H=!1;const G=new st,ne=new B,xe=new ut,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function pt(){return P===null?I:1}let D=n;function $e(E,F){return t.getContext(E,F)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uo}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",ie,!1),D===null){const F="webgl2";if(D=$e(F,E),D===null)throw $e(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Be,Ie,ye,rt,be,He,xt,dt,w,v,V,Z,te,$,Re,le,Te,Ae,se,me,Ue,we,he,ze;function L(){Be=new tp(D),Be.init(),we=new Fm(D,Be),Ie=new Kf(D,Be,e,we),ye=new Nm(D,Be),Ie.reversedDepthBuffer&&f&&ye.buffers.depth.setReversed(!0),rt=new rp(D),be=new Em,He=new Om(D,Be,ye,be,Ie,we,rt),xt=new $f(M),dt=new ep(M),w=new ld(D),he=new qf(D,w),v=new np(D,w,rt,he),V=new op(D,v,w,rt),se=new sp(D,Ie,He),le=new jf(be),Z=new Sm(M,xt,dt,Be,Ie,he,le),te=new Gm(M,be),$=new bm,Re=new Pm(Be),Ae=new Xf(M,xt,dt,ye,V,p,l),Te=new Lm(M,V,Ie),ze=new Wm(D,rt,Ie,ye),me=new Yf(D,Be,rt),Ue=new ip(D,Be,rt),rt.programs=Z.programs,M.capabilities=Ie,M.extensions=Be,M.properties=be,M.renderLists=$,M.shadowMap=Te,M.state=ye,M.info=rt}L();const oe=new Hm(M,D);this.xr=oe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Be.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Be.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(E){E!==void 0&&(I=E,this.setSize(N,W,!1))},this.getSize=function(E){return E.set(N,W)},this.setSize=function(E,F,q=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=E,W=F,t.width=Math.floor(E*I),t.height=Math.floor(F*I),q===!0&&(t.style.width=E+"px",t.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(N*I,W*I).floor()},this.setDrawingBufferSize=function(E,F,q){N=E,W=F,I=q,t.width=Math.floor(E*q),t.height=Math.floor(F*q),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(X)},this.setViewport=function(E,F,q,K){E.isVector4?X.set(E.x,E.y,E.z,E.w):X.set(E,F,q,K),ye.viewport(C.copy(X).multiplyScalar(I).round())},this.getScissor=function(E){return E.copy(ae)},this.setScissor=function(E,F,q,K){E.isVector4?ae.set(E.x,E.y,E.z,E.w):ae.set(E,F,q,K),ye.scissor(U.copy(ae).multiplyScalar(I).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(E){ye.setScissorTest(ge=E)},this.setOpaqueSort=function(E){j=E},this.setTransparentSort=function(E){ee=E},this.getClearColor=function(E){return E.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,q=!0){let K=0;if(E){let z=!1;if(P!==null){const re=P.texture.format;z=re===zo||re===Bo||re===Fo}if(z){const re=P.texture.type,fe=re===an||re===$n||re===Yi||re===Ki||re===No||re===Oo,Se=Ae.getClearColor(),ve=Ae.getClearAlpha(),De=Se.r,Ne=Se.g,Ce=Se.b;fe?(g[0]=De,g[1]=Ne,g[2]=Ce,g[3]=ve,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=De,_[1]=Ne,_[2]=Ce,_[3]=ve,D.clearBufferiv(D.COLOR,0,_))}else K|=D.COLOR_BUFFER_BIT}F&&(K|=D.DEPTH_BUFFER_BIT),q&&(K|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),Ae.dispose(),$.dispose(),Re.dispose(),be.dispose(),xt.dispose(),dt.dispose(),V.dispose(),he.dispose(),ze.dispose(),Z.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",tn),oe.removeEventListener("sessionend",Ko),On.stop()};function ue(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const E=rt.autoReset,F=Te.enabled,q=Te.autoUpdate,K=Te.needsUpdate,z=Te.type;L(),rt.autoReset=E,Te.enabled=F,Te.autoUpdate=q,Te.needsUpdate=K,Te.type=z}function ie(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Q(E){const F=E.target;F.removeEventListener("dispose",Q),Ee(F)}function Ee(E){Oe(E),be.remove(E)}function Oe(E){const F=be.get(E).programs;F!==void 0&&(F.forEach(function(q){Z.releaseProgram(q)}),E.isShaderMaterial&&Z.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,q,K,z,re){F===null&&(F=_e);const fe=z.isMesh&&z.matrixWorld.determinant()<0,Se=al(E,F,q,K,z);ye.setMaterial(K,fe);let ve=q.index,De=1;if(K.wireframe===!0){if(ve=v.getWireframeAttribute(q),ve===void 0)return;De=2}const Ne=q.drawRange,Ce=q.attributes.position;let Xe=Ne.start*De,Ze=(Ne.start+Ne.count)*De;re!==null&&(Xe=Math.max(Xe,re.start*De),Ze=Math.min(Ze,(re.start+re.count)*De)),ve!==null?(Xe=Math.max(Xe,0),Ze=Math.min(Ze,ve.count)):Ce!=null&&(Xe=Math.max(Xe,0),Ze=Math.min(Ze,Ce.count));const lt=Ze-Xe;if(lt<0||lt===1/0)return;he.setup(z,K,Se,q,ve);let it,tt=me;if(ve!==null&&(it=w.get(ve),tt=Ue,tt.setIndex(it)),z.isMesh)K.wireframe===!0?(ye.setLineWidth(K.wireframeLinewidth*pt()),tt.setMode(D.LINES)):tt.setMode(D.TRIANGLES);else if(z.isLine){let Pe=K.linewidth;Pe===void 0&&(Pe=1),ye.setLineWidth(Pe*pt()),z.isLineSegments?tt.setMode(D.LINES):z.isLineLoop?tt.setMode(D.LINE_LOOP):tt.setMode(D.LINE_STRIP)}else z.isPoints?tt.setMode(D.POINTS):z.isSprite&&tt.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Zi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),tt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))tt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Pe=z._multiDrawStarts,ot=z._multiDrawCounts,qe=z._multiDrawCount,Ft=ve?w.get(ve).bytesPerElement:1,ei=be.get(K).currentProgram.getUniforms();for(let Bt=0;Bt<qe;Bt++)ei.setValue(D,"_gl_DrawID",Bt),tt.render(Pe[Bt]/Ft,ot[Bt])}else if(z.isInstancedMesh)tt.renderInstances(Xe,lt,z.count);else if(q.isInstancedBufferGeometry){const Pe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ot=Math.min(q.instanceCount,Pe);tt.renderInstances(Xe,lt,ot)}else tt.render(Xe,lt)};function nt(E,F,q){E.transparent===!0&&E.side===Ht&&E.forceSinglePass===!1?(E.side=Nt,E.needsUpdate=!0,sr(E,F,q),E.side=Un,E.needsUpdate=!0,sr(E,F,q),E.side=Ht):sr(E,F,q)}this.compile=function(E,F,q=null){q===null&&(q=E),u=Re.get(q),u.init(F),A.push(u),q.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(u.pushLight(z),z.castShadow&&u.pushShadow(z))}),E!==q&&E.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(u.pushLight(z),z.castShadow&&u.pushShadow(z))}),u.setupLights();const K=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const re=z.material;if(re)if(Array.isArray(re))for(let fe=0;fe<re.length;fe++){const Se=re[fe];nt(Se,q,z),K.add(Se)}else nt(re,q,z),K.add(re)}),u=A.pop(),K},this.compileAsync=function(E,F,q=null){const K=this.compile(E,F,q);return new Promise(z=>{function re(){if(K.forEach(function(fe){be.get(fe).currentProgram.isReady()&&K.delete(fe)}),K.size===0){z(E);return}setTimeout(re,10)}Be.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let je=null;function ln(E){je&&je(E)}function tn(){On.stop()}function Ko(){On.start()}const On=new Hc;On.setAnimationLoop(ln),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(E){je=E,oe.setAnimationLoop(E),E===null?On.stop():On.start()},oe.addEventListener("sessionstart",tn),oe.addEventListener("sessionend",Ko),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(F),F=oe.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,F,P),u=Re.get(E,A.length),u.init(F),A.push(u),G.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Le.setFromProjectionMatrix(G,sn,F.reversedDepth),H=this.localClippingEnabled,J=le.init(this.clippingPlanes,H),m=$.get(E,R.length),m.init(),R.push(m),oe.enabled===!0&&oe.isPresenting===!0){const re=M.xr.getDepthSensingMesh();re!==null&&$r(re,F,-1/0,M.sortObjects)}$r(E,F,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(j,ee),Ge=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Ge&&Ae.addToRenderList(m,E),this.info.render.frame++,J===!0&&le.beginShadows();const q=u.state.shadowsArray;Te.render(q,E,F),J===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,z=m.transmissive;if(u.setupLights(),F.isArrayCamera){const re=F.cameras;if(z.length>0)for(let fe=0,Se=re.length;fe<Se;fe++){const ve=re[fe];$o(K,z,E,ve)}Ge&&Ae.render(E);for(let fe=0,Se=re.length;fe<Se;fe++){const ve=re[fe];jo(m,E,ve,ve.viewport)}}else z.length>0&&$o(K,z,E,F),Ge&&Ae.render(E),jo(m,E,F);P!==null&&y===0&&(He.updateMultisampleRenderTarget(P),He.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(M,E,F),he.resetDefaultState(),S=-1,x=null,A.pop(),A.length>0?(u=A[A.length-1],J===!0&&le.setGlobalState(M.clippingPlanes,u.state.camera)):u=null,R.pop(),R.length>0?m=R[R.length-1]:m=null};function $r(E,F,q,K){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Le.intersectsSprite(E)){K&&xe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(G);const fe=V.update(E),Se=E.material;Se.visible&&m.push(E,fe,Se,q,xe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Le.intersectsObject(E))){const fe=V.update(E),Se=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),xe.copy(E.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),xe.copy(fe.boundingSphere.center)),xe.applyMatrix4(E.matrixWorld).applyMatrix4(G)),Array.isArray(Se)){const ve=fe.groups;for(let De=0,Ne=ve.length;De<Ne;De++){const Ce=ve[De],Xe=Se[Ce.materialIndex];Xe&&Xe.visible&&m.push(E,fe,Xe,q,xe.z,Ce)}}else Se.visible&&m.push(E,fe,Se,q,xe.z,null)}}const re=E.children;for(let fe=0,Se=re.length;fe<Se;fe++)$r(re[fe],F,q,K)}function jo(E,F,q,K){const z=E.opaque,re=E.transmissive,fe=E.transparent;u.setupLightsView(q),J===!0&&le.setGlobalState(M.clippingPlanes,q),K&&ye.viewport(C.copy(K)),z.length>0&&rr(z,F,q),re.length>0&&rr(re,F,q),fe.length>0&&rr(fe,F,q),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function $o(E,F,q,K){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[K.id]===void 0&&(u.state.transmissionRenderTarget[K.id]=new Jn(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?er:an,minFilter:jn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const re=u.state.transmissionRenderTarget[K.id],fe=K.viewport||C;re.setSize(fe.z*M.transmissionResolutionScale,fe.w*M.transmissionResolutionScale);const Se=M.getRenderTarget(),ve=M.getActiveCubeFace(),De=M.getActiveMipmapLevel();M.setRenderTarget(re),M.getClearColor(Y),O=M.getClearAlpha(),O<1&&M.setClearColor(16777215,.5),M.clear(),Ge&&Ae.render(q);const Ne=M.toneMapping;M.toneMapping=Pn;const Ce=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),u.setupLightsView(K),J===!0&&le.setGlobalState(M.clippingPlanes,K),rr(E,q,K),He.updateMultisampleRenderTarget(re),He.updateRenderTargetMipmap(re),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Ze=0,lt=F.length;Ze<lt;Ze++){const it=F[Ze],tt=it.object,Pe=it.geometry,ot=it.material,qe=it.group;if(ot.side===Ht&&tt.layers.test(K.layers)){const Ft=ot.side;ot.side=Nt,ot.needsUpdate=!0,Zo(tt,q,K,Pe,ot,qe),ot.side=Ft,ot.needsUpdate=!0,Xe=!0}}Xe===!0&&(He.updateMultisampleRenderTarget(re),He.updateRenderTargetMipmap(re))}M.setRenderTarget(Se,ve,De),M.setClearColor(Y,O),Ce!==void 0&&(K.viewport=Ce),M.toneMapping=Ne}function rr(E,F,q){const K=F.isScene===!0?F.overrideMaterial:null;for(let z=0,re=E.length;z<re;z++){const fe=E[z],Se=fe.object,ve=fe.geometry,De=fe.group;let Ne=fe.material;Ne.allowOverride===!0&&K!==null&&(Ne=K),Se.layers.test(q.layers)&&Zo(Se,F,q,ve,Ne,De)}}function Zo(E,F,q,K,z,re){E.onBeforeRender(M,F,q,K,z,re),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(M,F,q,K,E,re),z.transparent===!0&&z.side===Ht&&z.forceSinglePass===!1?(z.side=Nt,z.needsUpdate=!0,M.renderBufferDirect(q,F,K,z,E,re),z.side=Un,z.needsUpdate=!0,M.renderBufferDirect(q,F,K,z,E,re),z.side=Ht):M.renderBufferDirect(q,F,K,z,E,re),E.onAfterRender(M,F,q,K,z,re)}function sr(E,F,q){F.isScene!==!0&&(F=_e);const K=be.get(E),z=u.state.lights,re=u.state.shadowsArray,fe=z.state.version,Se=Z.getParameters(E,z.state,re,F,q),ve=Z.getProgramCacheKey(Se);let De=K.programs;K.environment=E.isMeshStandardMaterial?F.environment:null,K.fog=F.fog,K.envMap=(E.isMeshStandardMaterial?dt:xt).get(E.envMap||K.environment),K.envMapRotation=K.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,De===void 0&&(E.addEventListener("dispose",Q),De=new Map,K.programs=De);let Ne=De.get(ve);if(Ne!==void 0){if(K.currentProgram===Ne&&K.lightsStateVersion===fe)return Qo(E,Se),Ne}else Se.uniforms=Z.getUniforms(E),E.onBeforeCompile(Se,M),Ne=Z.acquireProgram(Se,ve),De.set(ve,Ne),K.uniforms=Se.uniforms;const Ce=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ce.clippingPlanes=le.uniform),Qo(E,Se),K.needsLights=ll(E),K.lightsStateVersion=fe,K.needsLights&&(Ce.ambientLightColor.value=z.state.ambient,Ce.lightProbe.value=z.state.probe,Ce.directionalLights.value=z.state.directional,Ce.directionalLightShadows.value=z.state.directionalShadow,Ce.spotLights.value=z.state.spot,Ce.spotLightShadows.value=z.state.spotShadow,Ce.rectAreaLights.value=z.state.rectArea,Ce.ltc_1.value=z.state.rectAreaLTC1,Ce.ltc_2.value=z.state.rectAreaLTC2,Ce.pointLights.value=z.state.point,Ce.pointLightShadows.value=z.state.pointShadow,Ce.hemisphereLights.value=z.state.hemi,Ce.directionalShadowMap.value=z.state.directionalShadowMap,Ce.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ce.spotShadowMap.value=z.state.spotShadowMap,Ce.spotLightMatrix.value=z.state.spotLightMatrix,Ce.spotLightMap.value=z.state.spotLightMap,Ce.pointShadowMap.value=z.state.pointShadowMap,Ce.pointShadowMatrix.value=z.state.pointShadowMatrix),K.currentProgram=Ne,K.uniformsList=null,Ne}function Jo(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Fr.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Qo(E,F){const q=be.get(E);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function al(E,F,q,K,z){F.isScene!==!0&&(F=_e),He.resetTextureUnits();const re=F.fog,fe=K.isMeshStandardMaterial?F.environment:null,Se=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ui,ve=(K.isMeshStandardMaterial?dt:xt).get(K.envMap||fe),De=K.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ne=!!q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ce=!!q.morphAttributes.position,Xe=!!q.morphAttributes.normal,Ze=!!q.morphAttributes.color;let lt=Pn;K.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(lt=M.toneMapping);const it=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,tt=it!==void 0?it.length:0,Pe=be.get(K),ot=u.state.lights;if(J===!0&&(H===!0||E!==x)){const wt=E===x&&K.id===S;le.setState(K,E,wt)}let qe=!1;K.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==ot.state.version||Pe.outputColorSpace!==Se||z.isBatchedMesh&&Pe.batching===!1||!z.isBatchedMesh&&Pe.batching===!0||z.isBatchedMesh&&Pe.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Pe.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Pe.instancing===!1||!z.isInstancedMesh&&Pe.instancing===!0||z.isSkinnedMesh&&Pe.skinning===!1||!z.isSkinnedMesh&&Pe.skinning===!0||z.isInstancedMesh&&Pe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Pe.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Pe.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Pe.instancingMorph===!1&&z.morphTexture!==null||Pe.envMap!==ve||K.fog===!0&&Pe.fog!==re||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==le.numPlanes||Pe.numIntersection!==le.numIntersection)||Pe.vertexAlphas!==De||Pe.vertexTangents!==Ne||Pe.morphTargets!==Ce||Pe.morphNormals!==Xe||Pe.morphColors!==Ze||Pe.toneMapping!==lt||Pe.morphTargetsCount!==tt)&&(qe=!0):(qe=!0,Pe.__version=K.version);let Ft=Pe.currentProgram;qe===!0&&(Ft=sr(K,F,z));let ei=!1,Bt=!1,Fi=!1;const at=Ft.getUniforms(),Gt=Pe.uniforms;if(ye.useProgram(Ft.program)&&(ei=!0,Bt=!0,Fi=!0),K.id!==S&&(S=K.id,Bt=!0),ei||x!==E){ye.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),at.setValue(D,"projectionMatrix",E.projectionMatrix),at.setValue(D,"viewMatrix",E.matrixWorldInverse);const Pt=at.map.cameraPosition;Pt!==void 0&&Pt.setValue(D,ne.setFromMatrixPosition(E.matrixWorld)),Ie.logarithmicDepthBuffer&&at.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&at.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,Bt=!0,Fi=!0)}if(z.isSkinnedMesh){at.setOptional(D,z,"bindMatrix"),at.setOptional(D,z,"bindMatrixInverse");const wt=z.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),at.setValue(D,"boneTexture",wt.boneTexture,He))}z.isBatchedMesh&&(at.setOptional(D,z,"batchingTexture"),at.setValue(D,"batchingTexture",z._matricesTexture,He),at.setOptional(D,z,"batchingIdTexture"),at.setValue(D,"batchingIdTexture",z._indirectTexture,He),at.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&at.setValue(D,"batchingColorTexture",z._colorsTexture,He));const Wt=q.morphAttributes;if((Wt.position!==void 0||Wt.normal!==void 0||Wt.color!==void 0)&&se.update(z,q,Ft),(Bt||Pe.receiveShadow!==z.receiveShadow)&&(Pe.receiveShadow=z.receiveShadow,at.setValue(D,"receiveShadow",z.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Gt.envMap.value=ve,Gt.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&F.environment!==null&&(Gt.envMapIntensity.value=F.environmentIntensity),Bt&&(at.setValue(D,"toneMappingExposure",M.toneMappingExposure),Pe.needsLights&&cl(Gt,Fi),re&&K.fog===!0&&te.refreshFogUniforms(Gt,re),te.refreshMaterialUniforms(Gt,K,I,W,u.state.transmissionRenderTarget[E.id]),Fr.upload(D,Jo(Pe),Gt,He)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Fr.upload(D,Jo(Pe),Gt,He),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&at.setValue(D,"center",z.center),at.setValue(D,"modelViewMatrix",z.modelViewMatrix),at.setValue(D,"normalMatrix",z.normalMatrix),at.setValue(D,"modelMatrix",z.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const wt=K.uniformsGroups;for(let Pt=0,Zr=wt.length;Pt<Zr;Pt++){const Fn=wt[Pt];ze.update(Fn,Ft),ze.bind(Fn,Ft)}}return Ft}function cl(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function ll(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,F,q){const K=be.get(E);K.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),be.get(E.texture).__webglTexture=F,be.get(E.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:q,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){const q=be.get(E);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0};const ul=D.createFramebuffer();this.setRenderTarget=function(E,F=0,q=0){P=E,b=F,y=q;let K=!0,z=null,re=!1,fe=!1;if(E){const ve=be.get(E);if(ve.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(D.FRAMEBUFFER,null),K=!1;else if(ve.__webglFramebuffer===void 0)He.setupRenderTarget(E);else if(ve.__hasExternalTextures)He.rebindTextures(E,be.get(E.texture).__webglTexture,be.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ce=E.depthTexture;if(ve.__boundDepthTexture!==Ce){if(Ce!==null&&be.has(Ce)&&(E.width!==Ce.image.width||E.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(E)}}const De=E.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(fe=!0);const Ne=be.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ne[F])?z=Ne[F][q]:z=Ne[F],re=!0):E.samples>0&&He.useMultisampledRTT(E)===!1?z=be.get(E).__webglMultisampledFramebuffer:Array.isArray(Ne)?z=Ne[q]:z=Ne,C.copy(E.viewport),U.copy(E.scissor),k=E.scissorTest}else C.copy(X).multiplyScalar(I).floor(),U.copy(ae).multiplyScalar(I).floor(),k=ge;if(q!==0&&(z=ul),ye.bindFramebuffer(D.FRAMEBUFFER,z)&&K&&ye.drawBuffers(E,z),ye.viewport(C),ye.scissor(U),ye.setScissorTest(k),re){const ve=be.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve.__webglTexture,q)}else if(fe){const ve=F;for(let De=0;De<E.textures.length;De++){const Ne=be.get(E.textures[De]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+De,Ne.__webglTexture,q,ve)}}else if(E!==null&&q!==0){const ve=be.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ve.__webglTexture,q)}S=-1},this.readRenderTargetPixels=function(E,F,q,K,z,re,fe,Se=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve){ye.bindFramebuffer(D.FRAMEBUFFER,ve);try{const De=E.textures[Se],Ne=De.format,Ce=De.type;if(!Ie.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-K&&q>=0&&q<=E.height-z&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Se),D.readPixels(F,q,K,z,we.convert(Ne),we.convert(Ce),re))}finally{const De=P!==null?be.get(P).__webglFramebuffer:null;ye.bindFramebuffer(D.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(E,F,q,K,z,re,fe,Se=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve)if(F>=0&&F<=E.width-K&&q>=0&&q<=E.height-z){ye.bindFramebuffer(D.FRAMEBUFFER,ve);const De=E.textures[Se],Ne=De.format,Ce=De.type;if(!Ie.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Xe),D.bufferData(D.PIXEL_PACK_BUFFER,re.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Se),D.readPixels(F,q,K,z,we.convert(Ne),we.convert(Ce),0);const Ze=P!==null?be.get(P).__webglFramebuffer:null;ye.bindFramebuffer(D.FRAMEBUFFER,Ze);const lt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await bu(D,lt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Xe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,re),D.deleteBuffer(Xe),D.deleteSync(lt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,q=0){const K=Math.pow(2,-q),z=Math.floor(E.image.width*K),re=Math.floor(E.image.height*K),fe=F!==null?F.x:0,Se=F!==null?F.y:0;He.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,fe,Se,z,re),ye.unbindTexture()};const dl=D.createFramebuffer(),hl=D.createFramebuffer();this.copyTextureToTexture=function(E,F,q=null,K=null,z=0,re=null){re===null&&(z!==0?(Zi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=z,z=0):re=0);let fe,Se,ve,De,Ne,Ce,Xe,Ze,lt;const it=E.isCompressedTexture?E.mipmaps[re]:E.image;if(q!==null)fe=q.max.x-q.min.x,Se=q.max.y-q.min.y,ve=q.isBox3?q.max.z-q.min.z:1,De=q.min.x,Ne=q.min.y,Ce=q.isBox3?q.min.z:0;else{const Wt=Math.pow(2,-z);fe=Math.floor(it.width*Wt),Se=Math.floor(it.height*Wt),E.isDataArrayTexture?ve=it.depth:E.isData3DTexture?ve=Math.floor(it.depth*Wt):ve=1,De=0,Ne=0,Ce=0}K!==null?(Xe=K.x,Ze=K.y,lt=K.z):(Xe=0,Ze=0,lt=0);const tt=we.convert(F.format),Pe=we.convert(F.type);let ot;F.isData3DTexture?(He.setTexture3D(F,0),ot=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(He.setTexture2DArray(F,0),ot=D.TEXTURE_2D_ARRAY):(He.setTexture2D(F,0),ot=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const qe=D.getParameter(D.UNPACK_ROW_LENGTH),Ft=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ei=D.getParameter(D.UNPACK_SKIP_PIXELS),Bt=D.getParameter(D.UNPACK_SKIP_ROWS),Fi=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,it.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,it.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,De),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ne),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ce);const at=E.isDataArrayTexture||E.isData3DTexture,Gt=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const Wt=be.get(E),wt=be.get(F),Pt=be.get(Wt.__renderTarget),Zr=be.get(wt.__renderTarget);ye.bindFramebuffer(D.READ_FRAMEBUFFER,Pt.__webglFramebuffer),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,Zr.__webglFramebuffer);for(let Fn=0;Fn<ve;Fn++)at&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,be.get(E).__webglTexture,z,Ce+Fn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,be.get(F).__webglTexture,re,lt+Fn)),D.blitFramebuffer(De,Ne,fe,Se,Xe,Ze,fe,Se,D.DEPTH_BUFFER_BIT,D.NEAREST);ye.bindFramebuffer(D.READ_FRAMEBUFFER,null),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||be.has(E)){const Wt=be.get(E),wt=be.get(F);ye.bindFramebuffer(D.READ_FRAMEBUFFER,dl),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,hl);for(let Pt=0;Pt<ve;Pt++)at?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Wt.__webglTexture,z,Ce+Pt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Wt.__webglTexture,z),Gt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,wt.__webglTexture,re,lt+Pt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,wt.__webglTexture,re),z!==0?D.blitFramebuffer(De,Ne,fe,Se,Xe,Ze,fe,Se,D.COLOR_BUFFER_BIT,D.NEAREST):Gt?D.copyTexSubImage3D(ot,re,Xe,Ze,lt+Pt,De,Ne,fe,Se):D.copyTexSubImage2D(ot,re,Xe,Ze,De,Ne,fe,Se);ye.bindFramebuffer(D.READ_FRAMEBUFFER,null),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Gt?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(ot,re,Xe,Ze,lt,fe,Se,ve,tt,Pe,it.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(ot,re,Xe,Ze,lt,fe,Se,ve,tt,it.data):D.texSubImage3D(ot,re,Xe,Ze,lt,fe,Se,ve,tt,Pe,it):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,re,Xe,Ze,fe,Se,tt,Pe,it.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,re,Xe,Ze,it.width,it.height,tt,it.data):D.texSubImage2D(D.TEXTURE_2D,re,Xe,Ze,fe,Se,tt,Pe,it);D.pixelStorei(D.UNPACK_ROW_LENGTH,qe),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ft),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ei),D.pixelStorei(D.UNPACK_SKIP_ROWS,Bt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Fi),re===0&&F.generateMipmaps&&D.generateMipmap(ot),ye.unbindTexture()},this.initRenderTarget=function(E){be.get(E).__webglFramebuffer===void 0&&He.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?He.setTextureCube(E,0):E.isData3DTexture?He.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?He.setTexture2DArray(E,0):He.setTexture2D(E,0),ye.unbindTexture()},this.resetState=function(){b=0,y=0,P=null,ye.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}const ic={type:"change"},qo={type:"start"},qc={type:"end"},Pr=new Ho,rc=new An,qm=Math.cos(70*Eu.DEG2RAD),mt=new B,Ut=2*Math.PI,et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Us=1e-6;class Ym extends ad{constructor(e,t=null){super(e,t),this.state=et.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:bi.ROTATE,MIDDLE:bi.DOLLY,RIGHT:bi.PAN},this.touches={ONE:_i.ROTATE,TWO:_i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new Zn,this._lastTargetPosition=new B,this._quat=new Zn().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Da,this._sphericalDelta=new Da,this._scale=1,this._panOffset=new B,this._rotateStart=new Fe,this._rotateEnd=new Fe,this._rotateDelta=new Fe,this._panStart=new Fe,this._panEnd=new Fe,this._panDelta=new Fe,this._dollyStart=new Fe,this._dollyEnd=new Fe,this._dollyDelta=new Fe,this._dollyDirection=new B,this._mouse=new Fe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=jm.bind(this),this._onPointerDown=Km.bind(this),this._onPointerUp=$m.bind(this),this._onContextMenu=ig.bind(this),this._onMouseWheel=Qm.bind(this),this._onKeyDown=eg.bind(this),this._onTouchStart=tg.bind(this),this._onTouchMove=ng.bind(this),this._onMouseDown=Zm.bind(this),this._onMouseMove=Jm.bind(this),this._interceptControlDown=rg.bind(this),this._interceptControlUp=sg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ic),this.update(),this.state=et.NONE}update(e=null){const t=this.object.position;mt.copy(t).sub(this.target),mt.applyQuaternion(this._quat),this._spherical.setFromVector3(mt),this.autoRotate&&this.state===et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Ut:n>Math.PI&&(n-=Ut),r<-Math.PI?r+=Ut:r>Math.PI&&(r-=Ut),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(mt.setFromSpherical(this._spherical),mt.applyQuaternion(this._quatInverse),t.copy(this.target).add(mt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=mt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new B(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=mt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Pr.origin.copy(this.object.position),Pr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Pr.direction))<qm?this.object.lookAt(this.target):(rc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Pr.intersectPlane(rc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Us||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Us||this._lastTargetPosition.distanceToSquared(this.target)>Us?(this.dispatchEvent(ic),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ut/60*this.autoRotateSpeed*e:Ut/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){mt.setFromMatrixColumn(t,0),mt.multiplyScalar(-e),this._panOffset.add(mt)}_panUp(e,t){this.screenSpacePanning===!0?mt.setFromMatrixColumn(t,1):(mt.setFromMatrixColumn(t,0),mt.crossVectors(this.object.up,mt)),mt.multiplyScalar(e),this._panOffset.add(mt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;mt.copy(r).sub(this.target);let s=mt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ut*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ut*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ut*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ut*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ut*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ut*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ut*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ut*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Fe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Km(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function jm(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function $m(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qc),this.state=et.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Zm(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case bi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=et.DOLLY;break;case bi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=et.ROTATE}break;case bi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=et.PAN}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(qo)}function Jm(i){switch(this.state){case et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Qm(i){this.enabled===!1||this.enableZoom===!1||this.state!==et.NONE||(i.preventDefault(),this.dispatchEvent(qo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(qc))}function eg(i){this.enabled!==!1&&this._handleKeyDown(i)}function tg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case _i.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=et.TOUCH_ROTATE;break;case _i.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=et.TOUCH_PAN;break;default:this.state=et.NONE}break;case 2:switch(this.touches.TWO){case _i.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=et.TOUCH_DOLLY_PAN;break;case _i.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=et.TOUCH_DOLLY_ROTATE;break;default:this.state=et.NONE}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(qo)}function ng(i){switch(this._trackPointer(i),this.state){case et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=et.NONE}}function ig(i){this.enabled!==!1&&i.preventDefault()}function rg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function sg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Yc(i){const t=i==="IN_LOCKED"||i==="IN_UNLOCKED"?[[10,5,0],[10,0,0],[10,0,5],[10,5,5]]:[[10,5,0],[5,5,0],[5,5,5],[10,5,5]],n=Ns(i),r=Qe(n,[0,0,0]),s=Array.from({length:33},(o,a)=>{const l=a*2*Math.PI/32;return Qe(n,[.45*Math.cos(l),.45*Math.sin(l),0])});return{corners:t,hinge:[[10,5,0],[10,5,5]],mark:r,notch:Qe(n,[0,.65,0]),ring:s}}function Lt(i,e,t,n,r,s="unknown"){const o=e<=3?5:10,a=(i-1)*5,l=`${i}-${e}`;return{id:`map-door-${l}`,room:l,floor:i-1,start:[t,o,a],end:[n,o,a],hinge:s,state:r,opensToward:r==="open"&&s!=="unknown"?"inside":"unknown",source:"U1 平面图示意；非当前时刻的门状态；门高及精确门位未知"}}const og=[Lt(1,1,.1,1.1,"open","start"),Lt(1,3,15.1,16.1,"open","start"),Lt(1,4,3.9,4.9,"open","end"),Lt(1,5,8.9,9.9,"open","end"),Lt(1,6,13.9,14.9,"closed"),Lt(1,7,15.1,16.1,"closed"),...[2,3].flatMap(i=>[Lt(i,1,3.8,4.8,"closed"),Lt(i,2,8.75,9.75,"closed"),Lt(i,3,15.2,16.2,"closed"),Lt(i,4,3.9,4.9,"closed"),i===2?Lt(i,5,8.9,9.9,"open","end"):Lt(i,5,8.9,9.9,"closed"),Lt(i,6,13.9,14.9,"closed"),Lt(i,7,15.1,16.1,"closed")])],ct=["#23658a","#56636d"],Tt="#56636d",sc=.18;function ag(i,e){const[t,n,r]=i.min,[s,o]=i.max,a=new Ln(s-t,o-n,sc);return a.translate((t+s)/2,(n+o)/2,r-sc/2),a.applyMatrix4(new st().set(...e)),a}function cg(i,e){const t=i===1&&e;return new zc({color:i?15002091:14282485,side:Ht,transparent:!1,opacity:1,depthWrite:!0,polygonOffset:t,polygonOffsetFactor:t?1:0,polygonOffsetUnits:t?1:0})}function lg(i){const e=new Map;for(const t of i){const n=e.get(t.min[2])??[];n.push(t),e.set(t.min[2],n)}return[...e.entries()].flatMap(([t,n])=>{const r=Math.min(...n.map(h=>h.min[0])),s=Math.min(...n.map(h=>h.min[1])),o=Math.max(...n.map(h=>h.max[0])),a=Math.max(...n.map(h=>h.max[1])),l=n.reduce((h,d)=>h+(d.max[0]-d.min[0])*(d.max[1]-d.min[1]),0);return n.some((h,d)=>n.slice(d+1).some(f=>Math.min(h.max[0],f.max[0])-Math.max(h.min[0],f.min[0])>1e-8&&Math.min(h.max[1],f.max[1])-Math.max(h.min[1],f.min[1])>1e-8))||Math.abs(l-(o-r)*(a-s))>1e-7?n:[{id:`floor-${t}`,min:[r,s,t],max:[o,a,Math.max(...n.map(h=>h.max[2]))]}]})}const Kc=[[0,1],[0,2],[0,4],[1,3],[1,5],[2,3],[2,6],[3,7],[4,5],[4,6],[5,7],[6,7]];function Xr(i,e){return Array.from({length:8},(t,n)=>[n&1?e[0]:i[0],n&2?e[1]:i[1],n&4?e[2]:i[2]])}function jc(i){return i.startsWith("platform-")?"platform":i==="meteor"?"meteor":i.startsWith("barrier-")?"barrier":i==="device"?"device":"repair"}function $c(i,e){const t=i.geometry.rooms.find(n=>n.id===e.regionId);return[e.position[0],e.position[1],(t?.min[2]??e.position[2])+.35]}function Zc(i){return i.caseId==="case3"&&i.contentVersion==="0.3-reference-map"?og:[]}function Jc(i){if(i.state!=="open"||i.hinge==="unknown"||i.opensToward!=="inside")return[i.start,i.end];const e=i.hinge==="start"?i.start:i.end,t=Number(i.room.split("-")[1]),n=t<=3?-1:1;return[e,[e[0],e[1]+n*Math.abs(i.end[0]-i.start[0]),e[2]]]}function ug(i,e,t){const n=i.geometry.rooms.flatMap(l=>Xr(l.min,l.max).map(c=>Qe(e,c))),r=n.length?Math.min(...n.map(l=>l[0])):0,s=i.geometry.rooms.length?Math.max(...i.geometry.rooms.map(l=>l.max[0])):20,o=t?s+6-r:0,a=e.slice();return a[3]+=o,{matrix:a,offset:o}}function dg(i,e,t,n,r,s,o,a="OUT_LOCKED",l="OUT_LOCKED",c=[],h=[]){const d=document.createElementNS("http://www.w3.org/2000/svg","svg");d.setAttribute("role","img"),d.setAttribute("aria-label","双世界辅助剖面");const f=r===0?[0,1]:r===1?[0,2]:[1,2],p=M=>[M[f[0]],-M[f[1]]];let g=[];const _=[];[Br(),t].forEach((M,T)=>{if(!(o==="real"&&T===1||o==="anchor"&&T===0))for(const b of e.geometry.rooms){if(s>=0&&Math.floor(b.min[2]/5)!==s)continue;const y=Xr(b.min,b.max).map(P=>p(Qe(M,P)));g.push(...y);for(const[P,S]of Kc)_.push({a:y[P],b:y[S],color:ct[T],dash:T===1})}}),g.push(p(n),...c.map(M=>p(M.position))),g.length||(g=[[0,0],[10,10]]);const m=[0,1].map(M=>Math.min(...g.map(T=>T[M]))-3),u=[0,1].map(M=>Math.max(...g.map(T=>T[M]))+3);d.setAttribute("viewBox",`${m[0]} ${m[1]} ${u[0]-m[0]} ${u[1]-m[1]}`);for(const M of _){const T=document.createElementNS(d.namespaceURI,"line");for(const[b,y]of Object.entries({x1:M.a[0],y1:M.a[1],x2:M.b[0],y2:M.b[1],stroke:M.dash?Tt:M.color,"stroke-width":M.dash?.075:.05,"stroke-dasharray":M.dash?"0.5 0.25":"0.1 0.15"}))T.setAttribute(b,String(y));d.append(T)}[Br(),t].forEach((M,T)=>{if(!(o==="real"&&T===1||o==="anchor"&&T===0)){for(const b of e.geometry.topology?.panels??[]){if(s>=0&&Math.floor(b.vertices[0][2]/5)!==s)continue;const y=document.createElementNS(d.namespaceURI,"polygon");y.setAttribute("points",b.vertices.map(P=>p(Qe(M,P)).join(",")).join(" ")),y.setAttribute("fill","none"),y.setAttribute("stroke",T?Tt:ct[T]),y.setAttribute("stroke-width",T?".16":".14"),T&&y.setAttribute("stroke-dasharray",".55 .3"),d.append(y)}for(const b of Zc(e)){if(s>=0&&b.floor!==s)continue;const[y,P]=Jc(b).map(C=>p(Qe(M,C))),S=document.createElementNS(d.namespaceURI,"line");for(const[C,U]of Object.entries({x1:y[0],y1:y[1],x2:P[0],y2:P[1],stroke:T?Tt:ct[T],"stroke-width":".2"}))S.setAttribute(C,String(U));(b.state==="unknown"||b.state==="open"&&b.hinge==="unknown"||T)&&S.setAttribute("stroke-dasharray",".22 .12");const x=document.createElementNS(d.namespaceURI,"title");x.textContent=b.room+"门 · 地图示意，实际状态由玩家记录",S.append(x),d.append(S)}for(const b of e.geometry.topology?.facilities??[]){const y=e.geometry.rooms.find(U=>U.id===b.regionId);if(s>=0&&(!y||Math.floor(y.min[2]/5)!==s))continue;const P=p(Qe(M,$c(e,b))),S=jc(b.id),x=document.createElementNS(d.namespaceURI,S==="platform"||S==="repair"?"rect":"circle");x.tagName==="rect"?(x.setAttribute("x",String(P[0]-.32)),x.setAttribute("y",String(P[1]-.32)),x.setAttribute("width",".64"),x.setAttribute("height",".64")):(x.setAttribute("cx",String(P[0])),x.setAttribute("cy",String(P[1])),x.setAttribute("r",S==="barrier"?".58":".32")),x.setAttribute("fill",S==="barrier"?"none":S==="meteor"||S==="device"?"#a8392f":"#fff"),x.setAttribute("stroke",T?Tt:ct[T]),x.setAttribute("stroke-width",S==="barrier"?".12":".1"),(S==="barrier"||T)&&x.setAttribute("stroke-dasharray",".18 .12"),x.setAttribute("aria-label",b.label+"（位置示意）");const C=document.createElementNS(d.namespaceURI,"title");C.textContent=b.label+"（位置示意）",x.append(C),d.append(x)}if(e.caseId==="case3"&&(s<0||s===0)){const b=Yc(T?l:a),y=document.createElementNS(d.namespaceURI,"polygon");y.setAttribute("points",b.corners.map(k=>p(Qe(M,k)).join(",")).join(" ")),y.setAttribute("fill","none"),y.setAttribute("stroke",T?Tt:ct[T]),y.setAttribute("stroke-width",".24"),y.setAttribute("stroke-dasharray",T?".55 .3":""),y.setAttribute("aria-label",T?"锚定密封门":"现实密封门"),d.append(y);const P=document.createElementNS(d.namespaceURI,"polyline");P.setAttribute("points",b.ring.map(k=>p(Qe(M,k)).join(",")).join(" ")),P.setAttribute("fill","none"),P.setAttribute("stroke",ct[T]),P.setAttribute("stroke-width",".12"),d.append(P);const S=p(Qe(M,b.mark)),x=p(Qe(M,b.notch)),C=document.createElementNS(d.namespaceURI,"line");for(const[k,Y]of Object.entries({x1:S[0],y1:S[1],x2:x[0],y2:x[1],stroke:ct[T],"stroke-width":".18"}))C.setAttribute(k,String(Y));d.append(C);const U=document.createElementNS(d.namespaceURI,"circle");U.setAttribute("cx",String(S[0])),U.setAttribute("cy",String(S[1])),U.setAttribute("r",".16"),U.setAttribute("fill",ct[T]),d.append(U)}if(e.caseId==="case3"){const b=p(Qe(M,[0,0,0]));for(const[y,P]of[[[0,0,3],"上"],[[0,0,-3],"重力"]]){const S=p(Qe(M,y));if(Math.hypot(S[0]-b[0],S[1]-b[1])<1e-6)continue;const x=document.createElementNS(d.namespaceURI,"line");for(const[U,k]of Object.entries({x1:b[0],y1:b[1],x2:S[0],y2:S[1],stroke:ct[T],"stroke-width":".15"}))x.setAttribute(U,String(k));d.append(x);const C=document.createElementNS(d.namespaceURI,"text");C.setAttribute("x",String(S[0])),C.setAttribute("y",String(S[1])),C.setAttribute("font-size",".8"),C.setAttribute("fill",ct[T]),C.textContent=(T?"锚":"现")+P,d.append(C)}}for(const b of e.geometry.rooms){if(!h.includes(b.id)||s>=0&&Math.floor(b.min[2]/5)!==s)continue;const y=b.min.map((Y,O)=>(Y+b.max[O])/2),P=p(Qe(M,y)),S=document.createElementNS(d.namespaceURI,"text"),x=e.geometry.topology?.regions.find(Y=>Y.regionId===b.id),C=e.geometry.topology?.facilities.find(Y=>Y.regionId===b.id),U=x?.owner?x.owner+"房":e.caseId==="case3"&&b.id==="1-2"?"密封门(地图)":C?C.label+"(地图)":"";S.setAttribute("x",String(P[0])),S.setAttribute("y",String(P[1]+(T?.8:-.8))),S.setAttribute("fill",T?Tt:ct[T]),S.setAttribute("font-size",".85"),S.setAttribute("font-weight","700"),S.setAttribute("text-anchor","middle"),S.setAttribute("data-room-id",b.id),S.setAttribute("data-room-world",T?"anchor":"real"),S.textContent=b.id+(h.length===1&&U?" · "+U:"");const k=document.createElementNS(d.namespaceURI,"title");k.textContent=b.id+(U?" · "+U:""),S.append(k),d.append(S)}}});for(const M of c){const T=p(M.position),b=document.createElementNS(d.namespaceURI,"circle");b.setAttribute("cx",String(T[0])),b.setAttribute("cy",String(T[1])),b.setAttribute("r",M.kind==="actor"?".32":".23"),b.setAttribute("fill",M.world==="real"?"#075a92":"#4c4c4c"),b.setAttribute("stroke","white"),b.setAttribute("stroke-width",".08"),d.append(b);const y=document.createElementNS(d.namespaceURI,"text");y.setAttribute("x",String(T[0]+.4)),y.setAttribute("y",String(T[1])),y.setAttribute("font-size",".8"),y.textContent=M.label+"（假设）",d.append(y)}const R=p(n),A=document.createElementNS(d.namespaceURI,"circle");A.setAttribute("cx",String(R[0])),A.setAttribute("cy",String(R[1])),A.setAttribute("r",".25"),A.setAttribute("fill","#193447"),d.append(A),d.addEventListener("click",M=>{const T=d.createSVGPoint();T.x=M.clientX,T.y=M.clientY;const b=d.getScreenCTM();if(!b)return;const y=T.matrixTransform(b.inverse());i.dispatchEvent(new CustomEvent("probe",{detail:{axes:f,values:[y.x,-y.y]}}))}),i.replaceChildren(d)}function hg(i,e){const t=new Xm({antialias:!0});t.setPixelRatio(Math.min(devicePixelRatio,1.5)),t.setClearColor("#f4f7f8"),i.replaceChildren(t.domElement);const n=new ju;n.add(new sd(16777215,1.1));const r=new rd(16777215,1.25);r.position.set(-15,-20,35),n.add(r);const s=new Wo(-1,1,1,-1,.1,1e3);s.up.set(0,0,1),s.position.set(0,-38,48);const o=new Ym(s,t.domElement);o.target.set(10,7,6),o.update();const a=new Xi;n.add(a);let l=[];const c=()=>{for(const g of l)g.element.remove();l=[]},h=()=>{t.render(n,s);const g=i.getBoundingClientRect(),_=[];for(const m of l){const u=m.position.clone().project(s),R=m.element;if(u.z<-1||u.z>1){R.hidden=!0;continue}let A=(u.x+1)*g.width/2,M=(1-u.y)*g.height/2;if(A<0||A>g.width||M<0||M>g.height){R.hidden=!0;continue}R.hidden=!1;const T=R.offsetWidth,b=R.offsetHeight,y=A,P=M,S=[[0,0],...[1,-1,2,-2,3,-3].map(C=>[0,C*(b+3)]),...[1,-1].flatMap(C=>[0,1,-1,2,-2].map(U=>[C*(T+4),U*(b+3)]))];let x={left:A-T/2,right:A+T/2,top:M-b/2,bottom:M+b/2};for(const[C,U]of S){const k=Math.max(T/2,Math.min(g.width-T/2,y+C)),Y=Math.max(b/2,Math.min(g.height-b/2,P+U)),O={left:k-T/2,right:k+T/2,top:Y-b/2,bottom:Y+b/2};if(!_.some(N=>O.left<N.right+2&&O.right>N.left-2&&O.top<N.bottom+2&&O.bottom>N.top-2)){A=k,M=Y,x=O;break}}_.push(x),R.style.left=A+"px",R.style.top=M+"px"}};o.addEventListener("change",h);let d="";const f=()=>{const g=new Ii().setFromObject(a);if(g.isEmpty())return;const _=g.getCenter(new B),m=i.getBoundingClientRect(),u=Math.max(.1,m.width/Math.max(1,m.height)),R=new B(8,-40,60).normalize();o.target.copy(_),s.position.copy(_).addScaledVector(R,120),s.lookAt(_);const A=s.quaternion.clone().invert();let M=1,T=1;for(const y of Xr([g.min.x,g.min.y,g.min.z],[g.max.x,g.max.y,g.max.z])){const P=new B(...y).sub(_).applyQuaternion(A);M=Math.max(M,Math.abs(P.x)),T=Math.max(T,Math.abs(P.y))}const b=Math.max(T,M/u)*1.16;s.left=-b*u,s.right=b*u,s.top=b,s.bottom=-b,s.zoom=1,s.updateProjectionMatrix(),o.update()},p=new ResizeObserver(()=>{const g=i.getBoundingClientRect();t.setSize(g.width,g.height),f(),h()});return p.observe(i),t.domElement.addEventListener("webglcontextlost",g=>{g.preventDefault(),e()}),{update(g,_,m,u,R,A="OUT_LOCKED",M="OUT_LOCKED",T=[],b=!1,y=[]){for(const O of[...a.children]){a.remove(O);const N=O;N.geometry?.dispose(),N.material?.dispose()}const P=b&&R==="both",S=ug(g,_,P),x=S.offset,C=[Br(),S.matrix],U=R==="both"&&!P,k=U;c();for(const[O,N]of C.entries())if(!(R==="real"&&O===1||R==="anchor"&&O===0))for(const W of g.geometry.rooms){if(!y.includes(W.id)||u>=0&&Math.floor(W.min[2]/5)!==u)continue;const I=g.geometry.topology?.regions.find(G=>G.regionId===W.id),ee=(g.geometry.topology?.facilities??[]).filter(G=>G.regionId===W.id).map(G=>G.label);g.caseId==="case3"&&W.id==="1-2"&&!ee.some(G=>G.includes("密封门"))&&ee.push("密封门");const X=W.id.endsWith("-hall")?W.id.replace("-hall","层走廊"):W.id,ae=I?.owner?I.owner+"房":ee[0]?ee[0]+"(地图)":"",ge=y.length===1&&ae?X+" · "+ae:X,Le=[X,I?.owner?"房间归属："+I.owner:"",ee.length?"地图注记："+ee.join(" / "):""].filter(Boolean).join(" · "),J=document.createElement("span");J.textContent=ge,J.title=Le,J.dataset.roomId=W.id,J.dataset.roomWorld=O?"anchor":"real",J.setAttribute("aria-label","房间 "+Le),Object.assign(J.style,{position:"absolute",zIndex:"1",pointerEvents:"none",whiteSpace:"nowrap",padding:"1px 3px",borderRadius:"3px",border:"1px solid "+(O?Tt:ct[O]),background:"rgba(255,255,255,.94)",color:O?Tt:ct[O],font:'600 12px/1.3 system-ui, "Microsoft YaHei", sans-serif',transform:"translate(-50%,-50%)"}),i.append(J);const H=W.min.map((G,ne)=>(G+W.max[ne])/2);l.push({element:J,position:new B(...Qe(N,H)),world:O})}C.forEach((O,N)=>{if(R==="real"&&N===1||R==="anchor"&&N===0)return;const W=g.geometry.rooms.filter(I=>u<0||Math.floor(I.min[2]/5)===u);for(const I of lg(W)){const j=new At(ag(I,O),cg(N,U));j.userData={type:"floor",regionId:I.id,world:N?"anchor":"real",visualOnly:!0},a.add(j)}for(const I of W){const j=Xr(I.min,I.max).map(X=>Qe(O,X));if(y.includes(I.id)){const X=I.max[2]+.03,ge=[[I.min[0],I.min[1],X],[I.max[0],I.min[1],X],[I.max[0],I.max[1],X],[I.min[0],I.max[1],X]].map(ne=>Qe(O,ne)),Le=new St;Le.setAttribute("position",new gt([0,1,2,0,2,3].flatMap(ne=>ge[ne]),3));const J=new At(Le,new qn({color:N?6584710:4296635,side:Ht,transparent:!0,opacity:.22,depthTest:!1,depthWrite:!1}));J.userData={regionId:I.id,visualAid:!0},a.add(J);const H=new St().setFromPoints(ge.map(ne=>new B(...ne))),G=new Qu(H,new Wi({color:N?Tt:ct[N],dashSize:.45,gapSize:.22,depthTest:!1}));G.computeLineDistances(),G.userData={regionId:I.id,visualAid:!0},a.add(G)}if(!g.geometry.topology?.panels.length){const X=Kc.flatMap(([Le,J])=>[...j[Le],...j[J]]),ae=new St;ae.setAttribute("position",new gt(X,3));const ge=new Ar(ae,new Wi({color:N?Tt:ct[N],dashSize:N?.65:.18,gapSize:N?.3:.14,transparent:!0,opacity:.6}));ge.computeLineDistances(),a.add(ge)}}}),C.forEach((O,N)=>{if(R==="real"&&N===1||R==="anchor"&&N===0)return;for(const j of g.geometry.topology?.panels??[]){if(u>=0&&Math.floor(j.vertices[0][2]/5)!==u)continue;const ee=j.vertices.map(H=>Qe(O,H)),X=new St;X.setAttribute("position",new gt([0,1,2,0,2,3].flatMap(H=>ee[H]),3)),X.computeVertexNormals(),a.add(new At(X,new zc({color:N?11977158:9158612,side:Ht,transparent:k,opacity:k?U?.16:.23:1,depthWrite:!k})));const ae=[0,1,1,2,2,3,3,0].flatMap(H=>ee[H]),ge=new St;ge.setAttribute("position",new gt(ae,3));const Le=N?new Wi({color:Tt,dashSize:.65,gapSize:.3}):new vi({color:ct[N]}),J=new Ar(ge,Le);N&&J.computeLineDistances(),a.add(J)}for(const j of Zc(g)){if(u>=0&&j.floor!==u)continue;const[ee,X]=Jc(j),ae=2,Le=[ee,X,[X[0],X[1],X[2]+ae],[ee[0],ee[1],ee[2]+ae],ee].map(xe=>new B(...Qe(O,xe))),J=new St().setFromPoints(Le),H=j.state==="unknown"||j.state==="open"&&j.hinge==="unknown",G=N||H?new Wi({color:N?Tt:ct[N],dashSize:.25,gapSize:.14}):new vi({color:ct[N]}),ne=new Wr(J,G);(N||H)&&ne.computeLineDistances(),ne.userData={doorId:j.id,referenceOnly:!0},a.add(ne)}for(const j of g.geometry.topology?.facilities??[]){const ee=g.geometry.rooms.find(H=>H.id===j.regionId);if(u>=0&&(!ee||Math.floor(ee.min[2]/5)!==u))continue;const X=jc(j.id),ae=$c(g,j),ge=X==="platform"||X==="repair"?new Ln(.7,.7,.18):X==="barrier"?new Go(.46,.53,20):new xi(.32,12,8),Le=new qn({color:X==="meteor"||X==="device"?"#a8392f":N?Tt:ct[N],side:Ht,transparent:X==="barrier",opacity:X==="barrier"?.8:1}),J=new At(ge,Le);J.position.set(...ae),J.applyMatrix4(new st().set(...O)),J.userData={facilityId:j.id,label:j.label,world:N?"anchor":"real"},a.add(J)}if(g.caseId==="case3"&&(u<0||u===0)){const j=Yc(N?M:A),ee=(Le,J=!1)=>{const H=Le.map(_e=>new B(...Qe(O,_e))),G=new St().setFromPoints(H),ne=N?new Wi({color:Tt,dashSize:.55,gapSize:.25}):new vi({color:ct[N],linewidth:2}),xe=J?new Ar(G,ne):new Wr(G,ne);N&&xe.computeLineDistances(),a.add(xe)};ee([...j.corners,j.corners[0]]),ee(j.ring),ee([j.mark,j.notch]),ee(j.hinge,!0);const X=new xi(.13,10,8),ae=new qn({color:ct[N]}),ge=new At(X,ae);ge.position.set(...Qe(O,j.mark)),a.add(ge)}const W=u<0?0:u*5;[[[0,0,W],[0,0,W+4]],[[0,0,W],[0,0,W-3]]].forEach(([j,ee],X)=>{const ae=Qe(O,j),ge=Qe(O,ee),Le=new St().setFromPoints([new B(...ae),new B(...ge)]);a.add(new Ar(Le,new vi({color:X?"#a14f35":N?Tt:ct[N]})));const J=document.createElement("span");J.textContent=X?"重力":"上",J.setAttribute("aria-label",(N?"锚定":"现实")+J.textContent+"方向"),Object.assign(J.style,{position:"absolute",zIndex:"1",pointerEvents:"none",padding:"1px 3px",borderRadius:"3px",background:"rgba(255,255,255,.9)",color:X?"#843b28":N?Tt:ct[N],font:'600 12px/1.3 system-ui, "Microsoft YaHei", sans-serif',transform:"translate(-50%,-50%)"}),i.append(J),l.push({element:J,position:new B(...ge),world:N})})});for(const O of T){const N=O.kind==="actor"?new xi(.28,12,8):new Ln(.4,.4,.4),W=new At(N,new qn({color:O.world==="real"?"#075a92":"#4c4c4c"}));W.position.set(O.position[0]+(O.world==="anchor"?x:0),O.position[1],O.position[2]),a.add(W)}if(u<0||Math.floor(m[2]/5)===u){const O=new xi(.22,12,8),N=new At(O,new qn({color:"#193447"}));N.position.set(...m),a.add(N)}const Y=[g.caseId,g.contentVersion,u,R,A,M,P].join("|");Y!==d&&(d=Y,f()),h()},reset(){f(),h()},dispose(){p.disconnect(),o.dispose(),c(),t.dispose(),i.replaceChildren()}}}const wi=i=>typeof i=="number"&&Number.isSafeInteger(i)&&Math.abs(i)<=315576e4;function fg(i,e){if(i===null)return{status:"undetermined",message:"累计暴露时间未知。"};if(!wi(i)||i<0)throw Error("辐射累计必须是非负整数秒");return i>3600?{status:"determined",message:`已记录 ${i} 秒，超过1小时；按公开规则进入濒死。`}:e?{status:"determined",message:`按玩家填写的完整累计 ${i} 秒，尚未超过1小时。`}:{status:"undetermined",message:`已记录 ${i} 秒；玩家未确认记录完整，无法确定累计总量。`}}function pg(i,e){if(!wi(e)||!Array.isArray(i)||i.length>500)throw Error("时间或记录数量无效");const t=i.map(({start:o,end:a})=>{if(!wi(o)||!wi(a)||a<o)throw Error("内开区间起止时间无效");return{start:Math.max(o,e-86400),end:Math.min(a,e)}}).filter(o=>o.end>o.start).sort((o,a)=>o.start-a.start||o.end-a.end);let n=0,r,s;for(const o of t){if(r===void 0){r=o.start,s=o.end;continue}o.start<=s?s=Math.max(s,o.end):(n+=s-r,r=o.start,s=o.end)}return n+(r===void 0?0:s-r)}function mg(i,e,t){if(e===null)return{status:"undetermined",message:"未填写检查时刻。"};const n=pg(i,e);return n>14400?{status:"determined",message:`该时刻之前滚动24小时，已记录内开 ${n} 秒，超过4小时；按公开规则失去气密性。`}:t?{status:"determined",message:`按玩家确认的完整记录，滚动24小时内开 ${n} 秒，尚未超过4小时。`}:{status:"undetermined",message:`已记录内开 ${n} 秒；窗口内记录尚未确认完整，不能确定累计总量。`}}function gg(i,e){if(i===null||e===null)return{status:"undetermined",message:"请填写本次计时起点和检查时间。"};if(!wi(i)||!wi(e)||e<i)throw Error("检查时间不得早于打开时间");const t=e-i;return t>=600?{status:"determined",message:`距本次计时起点 ${t} 秒，已到10分钟自动关闭时点；如有其他关门或重开事件需单独考虑。`}:{status:"determined",message:`距本次计时起点 ${t} 秒，尚未到本次10分钟自动关闭时点；提前关门或重开需另行考虑。`}}function _g(i,e,t){if(i!==null&&(!Number.isFinite(i)||i<0||i>1e5))throw Error("距离必须是有效的非负米数");return e!=="real"?{status:"undetermined",message:"未确认印章在现实世界；当前公开口径下不能推断该世界的召回结果。"}:t==="no"?{status:"determined",message:"按玩家假设，印章无人使用；符合公开召回条件。"}:i!==null&&i>5?{status:"determined",message:"按玩家假设，现实世界中的垂直距离超过5米；符合公开召回条件。"}:t==="unknown"||i===null?{status:"undetermined",message:"使用状态或垂直距离未知，无法确定是否触发召回。"}:{status:"determined",message:"按玩家填写的使用状态及垂直距离，上述两个召回条件均未触发。"}}const nr=()=>({version:1,radiation:"",radiationComplete:!1,intervals:[],windowAt:"",sealComplete:!1,doorStart:"",doorAt:"",distance:"",world:"unknown",use:"unknown"});function wo(i){if(!i||typeof i!="object")throw Error("规则检查数据格式无效");const e=i,t=n=>typeof n=="string"&&n.length<=40;if(e.version!==1||!t(e.radiation)||typeof e.radiationComplete!="boolean"||!Array.isArray(e.intervals)||e.intervals.length>100||!e.intervals.every(n=>n&&t(n.start)&&t(n.end))||!t(e.windowAt)||typeof e.sealComplete!="boolean"||!t(e.doorStart)||!t(e.doorAt)||!t(e.distance)||!["unknown","real","anchor"].includes(e.world)||!["unknown","yes","no"].includes(e.use))throw Error("规则检查字段无效");return structuredClone(e)}function vg(i,e=()=>{}){let t=nr(),n=[],r="";const s=(d,f)=>{const p=document.createElement(d);return f!==void 0&&(p.textContent=f),p},o=(d,f="text")=>{const p=s("input");return p.type=f,p.value=d,f==="datetime-local"&&(p.step="1"),p},a=(d,f)=>{const p=s("label");return p.append(document.createTextNode(d),f),p},l=(d,f)=>{const p=s("select");for(const[g,_]of d){const m=s("option",_);m.value=g,p.append(m)}return p.value=f,p},c=(d,f)=>{const p=s("button",d);return p.type="button",p.onclick=f,p};function h(){const d=s("section");d.append(s("h2","公开条件检查"),s("p","仅计算你填写的假设，不判断完整方案；未确认的条件保持未知。"));const f=s("form"),p=o(t.radiation,"number");p.min="0",p.step="1";const g=o("","checkbox");g.checked=t.radiationComplete,f.append(s("h3","强辐射累计"),a("已记录累计秒数（留空为未知）",p),a("我已确认累计记录完整",g),s("p","原文：强辐射累计超过1小时；P3源页6。")),f.append(s("h3","密封门内开累计"),s("p","填写你假设的内开起止时间。24小时按检查时刻向前滚动；重叠区间只计一次。P3源页8。"));const _=[];function m(){return wo({version:1,radiation:p.value,radiationComplete:g.checked,intervals:_.map(C=>({start:C.start.value,end:C.end.value})),windowAt:R.value,sealComplete:A.checked,doorStart:M.value,doorAt:T.value,distance:b.value,world:y.value,use:P.value})}const u=s("div");t.intervals.forEach((C,U)=>{const k=s("div"),Y=o(C.start,"datetime-local"),O=o(C.end,"datetime-local");_.push({start:Y,end:O}),k.append(a(`区间${U+1}开始`,Y),a(`区间${U+1}结束`,O),c("删除此区间",()=>{const N=m();N.intervals.splice(U,1),t=N,e(structuredClone(t)),n=[],h()})),u.append(k)}),f.append(u,c("增加内开区间",()=>{const C=m();if(C.intervals.length>=100){r="最多记录100个区间。",h();return}C.intervals.push({start:"",end:""}),t=C,e(structuredClone(t)),n=[],h()}));const R=o(t.windowAt,"datetime-local"),A=o("","checkbox");A.checked=t.sealComplete,f.append(a("检查时刻",R),a("我已确认该24小时内的门态记录完整",A));const M=o(t.doorStart,"datetime-local"),T=o(t.doorAt,"datetime-local");f.append(s("h3","10分钟自动关闭"),s("p","这里只算一次计时周期：3-2从解锁开始，1-6门与普通舱盖从打开开始。提前关闭、重新解锁或重开须另行考虑。"),a("本次计时起点",M),a("检查时间",T));const b=o(t.distance,"number");b.min="0",b.step="any";const y=l([["unknown","未知"],["real","现实世界"],["anchor","锚定世界"]],t.world),P=l([["unknown","未知"],["yes","有人使用"],["no","无人使用"]],t.use);f.append(s("h3","印章召回条件"),a("印章所在世界",y),a("使用状态",P),a("与悬浮台的垂直距离（米；留空为未知）",b),s("p","按当前公开文字判断现实世界；P3源页7。"));const S=s("button","保存并计算已填条件");S.type="submit",f.append(S),f.onsubmit=C=>{C.preventDefault();try{const U=m(),k=W=>W.trim()?wn(W):null,Y=W=>{if(!W.trim())return null;const I=Number(W);if(!Number.isFinite(I))throw Error("数字无效");return I},O=W=>{try{return W()}catch(I){return{status:"undetermined",message:I instanceof Error?I.message:"该项输入无效"}}},N=[O(()=>fg(Y(U.radiation),U.radiationComplete)),O(()=>{const W=U.intervals.map(I=>{if(!I.start||!I.end)throw Error("请填写每个内开区间的开始和结束时间，或删除未完成的区间");return{start:wn(I.start),end:wn(I.end)}});return mg(W,k(U.windowAt),U.sealComplete)}),O(()=>gg(k(U.doorStart),k(U.doorAt))),O(()=>_g(Y(U.distance),U.world,U.use))];t=U,n=N,r="",e(structuredClone(t)),h()}catch(U){r=U instanceof Error?U.message:"输入无效";const k=i.querySelector("[data-rules-error]");k&&(k.textContent=r)}},d.append(f);const x=s("p",r);if(x.setAttribute("role","status"),x.dataset.rulesError="",d.append(x),n.length){const C=s("ol");for(const[U,k]of n.entries())C.append(s("li",`${["强辐射","内开累计","自动关闭","印章召回"][U]}：${k.message}`));d.append(s("h3","本次局部结果"),C)}i.replaceChildren(d)}return h(),{getState:()=>structuredClone(t),setState:d=>{const f=wo(d);JSON.stringify(f)!==JSON.stringify(t)&&(n=[],r=""),t=f,h()}}}const xg="",Mg="",Sg=document.querySelector("#app");Sg.innerHTML=`<header><div class="brand"><div class="brand-line"><h1>空间推演工作台</h1>${Mg}</div><p id="title"></p></div><details class="file-menu"><summary>方案管理</summary><div class="file-menu-content">${xg}<span id="packInfo" class="hint"></span><button id="base">重新开始第三案</button><button id="import">导入场景 / 方案</button><button id="export">导出方案</button><input hidden type="file" id="file" accept=".json,application/json"></div></details></header><div id="notice" role="status">空间辅助视图 · 只计算当前设置，不判断完整方案。</div><main><section class="stage"><div class="bar"><button id="mode">切换三维</button><select id="plane" aria-label="剖面方向"><option value="0">俯视 · 东西 / 南北</option><option value="1">侧视 · 东西 / 高度</option><option value="2">侧视 · 南北 / 高度</option></select><button id="separate" title="仅改变画面排布，不改变空间关系">切换叠合</button><button id="resetview">复位视角</button></div><div id="spacewarning" role="status" hidden></div><div class="view-floor-controls" role="group" aria-label="切换模型楼层，仅改变显示"><span>观察楼层</span><button type="button" data-room-floor="0" aria-pressed="true">一层</button><button type="button" data-room-floor="1" aria-pressed="false">二层</button><button type="button" data-room-floor="2" aria-pressed="false">三层</button><button type="button" data-room-floor="-1" aria-pressed="false">全部楼层</button></div><div id="viewport"></div><div class="room-chooser" id="room-chooser" hidden><label for="room-select">添加房间标记</label><select id="room-select"><option value="">选择要标记的房间</option></select><button type="button" id="clear-room-marks" hidden>清除全部标记</button><div id="selected-rooms" class="selected-rooms" role="group" aria-label="已标记房间"></div><p id="room-selected-description" class="hint" aria-live="polite">可以连续选择多个房间；选择不同楼层的房间会显示全部楼层。</p></div><div class="world-controls" role="group" aria-label="选择显示的世界"><button type="button" data-world="both" aria-pressed="true">同时显示</button><button type="button" data-world="real" aria-pressed="false">仅现实</button><button type="button" data-world="anchor" aria-pressed="false">仅锚定</button></div><div class="legend"><span class="world-key real"><i aria-hidden="true"></i>现实世界 · 蓝色实线</span><span class="world-key anchor"><i aria-hidden="true"></i>锚定世界 · 灰色虚线</span><span id="viewhint">展开观察：两座建筑在画面中分开，真实叠合关系不变</span><span>楼板不透明，厚度为示意；重叠时可能互相遮挡</span></div><details class="room-directory" id="room-directory" hidden><summary>查看房间与设施</summary><p class="hint">房号和用途来自已发地图；设施位置为示意，不代表某一时刻的实际状态。可先选择一层，再在模型中查看。</p><div class="room-floor-controls" role="group" aria-label="选择查看楼层"><button type="button" data-room-floor="-1" aria-pressed="true">全部</button><button type="button" data-room-floor="0" aria-pressed="false">一层</button><button type="button" data-room-floor="1" aria-pressed="false">二层</button><button type="button" data-room-floor="2" aria-pressed="false">三层</button></div><div id="room-directory-content"></div></details><p class="hint">三维中拖动旋转、双指或滚轮缩放；可在“显示世界”选择双世界叠合。二维中点击放置探针，也可直接输入坐标。普通门按参考图示意；门高与精确位置未给出，门扇不随时间自动变化。</p></section><aside><div class="panel-heading"><h2>空间状态</h2><p>选择门态，查看对应位置</p></div><label for="pair">选择门态组合（16种）</label><select id="pair"></select><label for="real">现实门状态（假设）</label><select id="real"></select><label for="anchor">锚定门状态（假设）</label><select id="anchor"></select><label for="visible">显示世界</label><select id="visible"><option value="both" selected>显示两个世界</option><option value="real">仅现实</option><option value="anchor">仅锚定</option></select><label for="floor">显示楼层</label><select id="floor"><option value="-1">全部</option><option value="0" selected>一层</option><option value="1">二层</option><option value="2">三层</option></select><label>现实探针坐标（米）</label><div class="coords"><input id="x" aria-label="东向x坐标" type="number" step="0.1"><input id="y" aria-label="北向y坐标" type="number" step="0.1"><input id="z" aria-label="高度z坐标" type="number" step="0.1"></div><button id="apply">应用坐标</button><output id="result"></output><div class="bar" style="margin-top:16px"><button id="undo">撤销</button><button id="redo">重做</button></div><p id="saved" class="hint"></p><details><summary>来源与使用边界</summary><div id="sources"></div><div id="regioninfo"></div><h3>设施位置（地图示意）</h3><div id="facilityinfo"></div><p class="hint">当前是几何辅助模式。透明轮廓不代表人物实际视野；未检查人物权限、行动历史和碰撞安全。当前设置都是你的假设。</p></details></aside></main><section class="workbench" id="workbench" hidden><details><summary>人物与物件</summary><div id="entities-panel"></div></details><details><summary>规则条件检查</summary><div id="rules-panel"></div></details><details><summary>时间线与独立会话</summary><div id="time-panel"></div></details></section>`;const ce=i=>document.getElementById(i),Ro=["外锁","外开（仅解锁）","内锁","内开"];for(const i of["real","anchor"])for(let e=0;e<Dn.length;e++){const t=document.createElement("option");t.value=Dn[e],t.textContent=Ro[e],ce(i).append(t)}for(const i of mc){const e=document.createElement("option");e.value=i.real+"|"+i.anchor,e.textContent=i.number+" · 现实 "+Ro[Dn.indexOf(i.real)]+" / 锚定 "+Ro[Dn.indexOf(i.anchor)],ce("pair").append(e)}{const i=document.createElement("option");i.value="UNKNOWN",i.textContent="未知（会话历史未完整）",i.hidden=!0,i.disabled=!0,ce("pair").append(i)}for(const i of["real","anchor"]){const e=document.createElement("option");e.value="UNKNOWN",e.textContent="未知（未填写）",e.disabled=!0,e.hidden=!0,ce(i).append(e)}const Si=Do(Sl);let pe={pack:Si,real:"OUT_LOCKED",anchor:"OUT_LOCKED",probe:[2.5,2.5,2.5],time:Ji(),entities:Qi(),rules:nr()},It=[],Vt=[],gn="2d",Ei=!0,ht=[],Ri;const Yt=()=>structuredClone(pe);function Qc(i){if(!i||typeof i!="object")throw Error("方案格式无效");const e=i;if(!Dn.includes(e.real)||!Dn.includes(e.anchor)||!Array.isArray(e.probe)||e.probe.length!==3||!e.probe.every(t=>typeof t=="number"&&Number.isFinite(t)&&Math.abs(t)<1e4))throw Error("方案坐标或状态无效");return{pack:Do(e.pack),real:e.real,anchor:e.anchor,probe:[...e.probe],time:e.time===void 0?Ji():Dr(e.time),entities:e.entities===void 0?Qi():pc(e.entities),rules:e.rules===void 0?nr():wo(e.rules)}}let yi=!0,el=!1,tl=!1;try{const i=localStorage.getItem("expedition-geometry-v1");if(i){const e=uc(JSON.parse(i),Qc);if(pe=e.state,It=e.past,Vt=e.future,lc(pe.pack)){try{let n="expedition-neutral-backup-"+Date.now(),r=0;for(;localStorage.getItem(n)!==null;)n="expedition-neutral-backup-"+Date.now()+"-"+ ++r;localStorage.setItem(n,i)}catch{yi=!1}pe=Jr(pe,Si),It=It.map(n=>Jr(n,Si)),Vt=Vt.map(n=>Jr(n,Si)),el=!0,ce("notice").textContent=yi?"已打开第三案研究所，原有设置已保留。":"已打开第三案；浏览器存储空间不足，原存档未覆盖，请先导出备份。"}const t=Tl({state:pe,past:It,future:Vt},Si,()=>{let n="expedition-case3-map-backup-"+Date.now(),r=0;for(;localStorage.getItem(n)!==null;)n="expedition-case3-map-backup-"+Date.now()+"-"+ ++r;localStorage.setItem(n,i)});t.status==="upgraded"&&({state:pe,past:It,future:Vt}=t.archive,tl=!0,ce("notice").textContent="研究所地图已更新，原方案已备份，现有设置与历史均已保留；可撤销此次更新。"),t.status==="backup-failed"&&(yi=!1,ce("notice").textContent="无法备份原方案，地图未自动更新；请先导出备份。"),t.status==="history-full"&&(ce("notice").textContent="原方案的历史已满，地图未自动更新；请先导出备份。")}}catch{yi=!1,ce("notice").textContent="未能恢复原有自动存档，已保留原文件；请先导入备份，或导出当前方案。"}const nl=wl(ce("time-panel"),i=>Nn({...Yt(),time:i})),il=Ul(ce("entities-panel"),i=>Nn({...Yt(),entities:i}),()=>({rooms:pe.pack.geometry.rooms,anchorToReal:sl(),probe:pe.probe,caseId:pe.pack.caseId})),rl=vg(ce("rules-panel"),i=>Nn({...Yt(),rules:i}));let oc=JSON.stringify(pe.time),ac=JSON.stringify(pe.entities),cc=JSON.stringify(pe.rules);nl.setState(pe.time);il.setState(pe.entities);rl.setState(pe.rules);function sl(){const i=Co(pe.time);return pe.time.selectedSessionId?i.kind==="determined"?Os(i.real,i.anchor):null:Os(pe.real,pe.anchor)}function ir(){if(!yi){ce("saved").textContent="未覆盖原存档，请导出方案备份。";return}try{localStorage.setItem("expedition-geometry-v1",Ls({state:pe,past:It,future:Vt})),ce("saved").textContent="已保存到此浏览器 · "+new Date().toLocaleTimeString()}catch{ce("saved").textContent="自动保存不可用，请导出方案备份。"}}(el||tl)&&yi&&ir();function Nn(i){if(It.length>=1e3){ce("notice").textContent="当前已记录1000步，请导出归档后再继续。";return}It.push(Yt()),Vt=[],pe=i,ir(),Ct()}function Ct(){ce("workbench").hidden=pe.pack.caseId!=="case3";const i=JSON.stringify(pe.time),e=JSON.stringify(pe.entities),t=JSON.stringify(pe.rules);i!==oc&&(oc=i,nl.setState(pe.time)),e!==ac&&(ac=e,il.setState(pe.entities)),t!==cc&&(cc=t,rl.setState(pe.rules));const n=Co(pe.time),r=!!pe.time.selectedSessionId,s=sl(),o=ce("spacewarning");o.hidden=!!s,o.textContent=s?"":n.kind==="undetermined"?n.reason:"当前会话没有可显示的叠合",ce("viewport").hidden=!s,ce("real").disabled=r,ce("anchor").disabled=r,ce("pair").disabled=r;const a=s??Os(pe.real,pe.anchor),l=n.kind==="determined"?n.real:pe.real,c=n.kind==="determined"?n.anchor:pe.anchor,h=r?n.kind==="determined"?n.real:n.kind==="undetermined"?n.real??"UNKNOWN":"UNKNOWN":pe.real,d=r?n.kind==="determined"?n.anchor:n.kind==="undetermined"?n.anchor??"UNKNOWN":"UNKNOWN":pe.anchor;ce("title").textContent=pe.pack.title;const f=document.getElementById("packInfo");f&&(f.textContent=pe.pack.contentVersion+" · "+pe.pack.caseId),ce("real").value=h,ce("anchor").value=d,ce("pair").value=h==="UNKNOWN"||d==="UNKNOWN"?"UNKNOWN":h+"|"+d,["x","y","z"].forEach((y,P)=>ce(y).value=String(pe.probe[P]));const p=Qe(Po(a),pe.probe),g=Qe(a,[0,0,-1]).map((y,P)=>y-a[P*4+3]);ce("result").textContent=s?"对应锚定坐标："+p.map(y=>y.toFixed(2)).join(" / ")+`
锚定区域：`+fc(pe.pack.geometry.rooms,p,pe.pack.caseId==="case3")+`
锚定重力方向：`+g.map(y=>y.toFixed(0)).join(" / "):"门态资料不足，不能计算空间对应。",ce("undo").disabled=!It.length,ce("redo").disabled=!Vt.length;const _=s&&pe.pack.caseId==="case3"?Ll(l,c):void 0;_&&(_.number==="08"||_.number==="15")&&(o.hidden=!1,o.textContent="此组合的空间模型与参考图中部分房间对应存在待核差异，请结合参考图核对。");const m=Number(ce("floor").value),u=ce("visible").value;document.querySelectorAll("[data-world]").forEach(y=>y.setAttribute("aria-pressed",String(y.dataset.world===u))),document.querySelectorAll("[data-room-floor]").forEach(y=>y.setAttribute("aria-pressed",String(Number(y.dataset.roomFloor)===m))),ce("room-directory").hidden=pe.pack.caseId!=="case3",ce("room-chooser").hidden=pe.pack.caseId!=="case3",ht=ht.filter(y=>pe.pack.geometry.rooms.some(P=>P.id===y));const R=ce("room-select");R.replaceChildren();const A=document.createElement("option");A.value="",A.textContent="选择要标记的房间",R.append(A);for(const y of pe.pack.geometry.rooms.filter(P=>/^\d-[1-7]$/.test(P.id))){const P=pe.pack.geometry.topology?.regions.find(C=>C.regionId===y.id),S=(pe.pack.geometry.topology?.facilities??[]).find(C=>C.regionId===y.id),x=document.createElement("option");x.value=y.id,x.textContent=y.id+" · "+(P?.owner?P.owner+"的房间":y.id==="1-2"?"密封门":S?S.label:"地图未注明用途"),x.disabled=ht.includes(y.id),R.append(x)}R.value="";const M=ce("selected-rooms");M.replaceChildren();for(const y of ht){const P=document.createElement("button");P.type="button",P.className="room-mark-chip",P.dataset.removeRoom=y,P.textContent=y+" ×",P.setAttribute("aria-label","移除 "+y+" 房间标记"),M.append(P)}ce("clear-room-marks").hidden=ht.length===0,ce("room-selected-description").textContent=ht.length?"已标记 "+ht.length+" 个房间；点击房号可取消，切换楼层不会清除标记。":"可以连续选择多个房间；选择不同楼层的房间会显示全部楼层。";const T=ce("room-directory-content");if(T.replaceChildren(),pe.pack.caseId==="case3")for(let y=0;y<3;y++){if(m>=0&&m!==y)continue;const P=document.createElement("section"),S=document.createElement("h3"),x=document.createElement("ul");S.textContent=["一层","二层","三层"][y],P.append(S);const C=pe.pack.geometry.rooms.filter(U=>Math.floor(U.min[2]/5)===y);for(const U of C){const k=pe.pack.geometry.topology?.regions.find(j=>j.regionId===U.id),Y=(pe.pack.geometry.topology?.facilities??[]).filter(j=>j.regionId===U.id).map(j=>j.label);U.id==="1-2"&&!Y.some(j=>j.includes("密封门"))&&Y.unshift("密封门");const O=[];k?.owner&&O.push(k.owner+"的房间"),Y.length&&O.push([...new Set(Y)].join("、")),k?.lighting==="unlit"&&O.push("无灯"),k?.radiation==="strong"&&O.push("强辐射"),O.length||O.push("地图未注明用途");const N=document.createElement("li"),W=/^\d-[1-7]$/.test(U.id),I=W?document.createElement("button"):document.createElement("strong");if(W){const j=I;j.type="button",j.className="room-entry",j.dataset.roomId=U.id,j.textContent=U.id+"房间",j.setAttribute("aria-label",(ht.includes(U.id)?"取消标记":"标记")+U.id+"房间"),j.setAttribute("aria-pressed",String(ht.includes(U.id)))}else I.textContent=U.id.endsWith("-hall")?"走廊":U.id;N.append(I,document.createTextNode("："+O.join("；"))),x.append(N)}P.append(x),T.append(P)}const b=s?Pl(pe.entities,a,pe.time.selectedSessionId??null).filter(y=>(u==="both"||y.world===u)&&(m<0||Math.floor((pe.entities.entities.find(P=>P.id===y.id)?.position?.[2]??-999)/5)===m)):[];s&&(gn==="3d"&&Ri?Ri.update(pe.pack,a,pe.probe,m,u,l,c,b,Ei,ht):dg(ce("viewport"),pe.pack,a,pe.probe,Number(ce("plane").value),m,u,l,c,b,ht)),ce("regioninfo").replaceChildren(...(pe.pack.geometry.topology?.regions??[]).map(y=>{const P=document.createElement("p");return P.textContent=y.regionId+(y.owner?" · 房主 "+y.owner:"")+" · "+(y.lighting==="unlit"?"无灯":"光照未确认")+" · "+(y.radiation==="strong"?"强辐射":"辐射等级未确认"),P})),ce("facilityinfo").replaceChildren(...(pe.pack.geometry.topology?.facilities??[]).map(y=>{const P=document.createElement("p");return P.textContent=y.regionId+" · "+y.label+"（位置示意）",P})),ce("sources").replaceChildren(...pe.pack.evidence.map(y=>{const P=document.createElement("p");return P.textContent=y.source+"："+y.description,P}))}for(const i of["real","anchor"])ce(i).addEventListener("change",()=>Nn({...Yt(),[i]:ce(i).value}));ce("pair").addEventListener("change",()=>{const[i,e]=ce("pair").value.split("|");Dn.includes(i)&&Dn.includes(e)&&Nn({...Yt(),real:i,anchor:e})});for(const i of["plane","visible"])ce(i).addEventListener("change",Ct);ce("floor").addEventListener("change",Ct);function ol(i){const e=pe.pack.geometry.rooms.find(r=>r.id===i);if(!e||ht.includes(i)){Ct();return}const t=Math.floor(e.min[2]/5),n=ht.map(r=>pe.pack.geometry.rooms.find(s=>s.id===r)).filter(r=>!!r);ht=[...ht,i],ce("floor").value=String(n.some(r=>Math.floor(r.min[2]/5)!==t)?-1:t),Ct()}ce("room-select").addEventListener("change",()=>ol(ce("room-select").value));ce("room-directory-content").addEventListener("click",i=>{const e=i.target.closest("button[data-room-id]");if(e?.dataset.roomId){const t=e.dataset.roomId;ht.includes(t)?(ht=ht.filter(n=>n!==t),Ct()):ol(t)}});ce("selected-rooms").addEventListener("click",i=>{const e=i.target.closest("button[data-remove-room]");e?.dataset.removeRoom&&(ht=ht.filter(t=>t!==e.dataset.removeRoom),Ct())});ce("clear-room-marks").addEventListener("click",()=>{ht=[],Ct()});document.querySelectorAll("[data-world]").forEach(i=>i.addEventListener("click",()=>{ce("visible").value=i.dataset.world,Ct()}));document.querySelectorAll("[data-room-floor]").forEach(i=>i.addEventListener("click",()=>{ce("floor").value=i.dataset.roomFloor,ce("floor").dispatchEvent(new Event("change"))}));ce("apply").onclick=()=>{const i=["x","y","z"].map(e=>Number(ce(e).value));if(i.some(e=>!Number.isFinite(e)||Math.abs(e)>1e3)){ce("notice").textContent="请输入-1000到1000之间的有限坐标。";return}Nn({...Yt(),probe:i})};ce("viewport").addEventListener("probe",(i=>{const e=Yt();i.detail.axes.forEach((t,n)=>e.probe[t]=Math.round(i.detail.values[n]*10)/10),Nn(e)}));function Yo(i){if(Ri?.dispose(),Ri=void 0,gn=i,i==="3d")try{Ri=hg(ce("viewport"),()=>{Yo("2d"),ce("notice").textContent="三维上下文已中断，已保留状态并切换二维。"})}catch{gn="2d",ce("notice").textContent="当前设备无法启动三维，二维推演仍可使用。"}ce("mode").textContent=gn==="2d"?"切换三维":"切换二维",ce("plane").hidden=gn==="3d",ce("separate").hidden=gn!=="3d",ce("viewhint").textContent=gn==="3d"&&Ei?"展开观察：两座建筑在画面中分开，真实叠合关系不变":"叠合观察：同态时两座建筑会完全重合",Ct()}ce("separate").onclick=()=>{Ei=!Ei,ce("separate").textContent=Ei?"切换叠合":"展开观察",ce("viewhint").textContent=Ei?"展开观察：两座建筑在画面中分开，真实叠合关系不变":"叠合观察：同态时两座建筑会完全重合",Ct()};ce("mode").onclick=()=>Yo(gn==="2d"?"3d":"2d");ce("resetview").onclick=()=>{Ri?.reset(),gn==="2d"&&(ce("plane").value="0"),Ct()};ce("base").onclick=()=>{confirm("重新开始第三案？当前设置将被替换，可以使用撤销恢复。")&&Nn({...Yt(),pack:Si,real:"OUT_LOCKED",anchor:"OUT_LOCKED",probe:[2.5,2.5,2.5],time:Ji(),entities:Qi(),rules:nr()})};ce("undo").onclick=()=>{It.length&&(Vt.push(Yt()),pe=It.pop(),ir(),Ct())};ce("redo").onclick=()=>{Vt.length&&(It.push(Yt()),pe=Vt.pop(),ir(),Ct())};ce("import").onclick=()=>ce("file").click();ce("file").onchange=async i=>{const e=i.target.files?.[0];if(e)try{if(e.size>2e7)throw Error("文件超过20MB");const t=JSON.parse(await e.text()),n=t.kind==="player-save"?uc(t,Qc):{state:{...Yt(),pack:Do(t),time:Ji(),entities:Qi(),rules:nr()},past:[],future:[]};confirm("导入将替换当前设置。请先导出备份当前方案。")&&(pe=n.state,It=n.past,Vt=n.future,ir(),Ct(),ce("notice").textContent="导入完成。所有输入仅供你自行试验。")}catch(t){ce("notice").textContent="导入失败："+t.message}finally{i.target.value=""}};ce("export").onclick=()=>{let i=Ls({state:pe,past:It,future:Vt});if(new Blob([i]).size>2e7){if(!confirm("完整历史超过20MB。是否导出只包含当前方案的精简备份？"))return;if(i=Ls({state:pe,past:[],future:[]}),new Blob([i]).size>2e7){ce("notice").textContent="当前方案超过20MB，无法导出。请删除部分内容后重试。";return}}const e=URL.createObjectURL(new Blob([i],{type:"application/json"})),t=document.createElement("a");t.href=e,t.download="我的空间假设.json",t.click(),setTimeout(()=>URL.revokeObjectURL(e),5e3)};Yo("3d");

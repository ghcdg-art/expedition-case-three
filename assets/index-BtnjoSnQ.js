(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const cl="scene-pack",ll=1,ul="0.3-reference-map",dl="case3",hl="base",fl="研究所 · 空间组合试验",pl=JSON.parse('{"rooms":[{"id":"1-1","min":[0,0,0],"max":[5,5,5]},{"id":"1-2","min":[5,0,0],"max":[15,5,5]},{"id":"1-3","min":[15,0,0],"max":[20,5,5]},{"id":"1-4","min":[0,10,0],"max":[5,15,5]},{"id":"1-5","min":[5,10,0],"max":[10,15,5]},{"id":"1-6","min":[10,10,0],"max":[15,15,5]},{"id":"1-7","min":[15,10,0],"max":[20,15,5]},{"id":"2-1","min":[0,0,5],"max":[5,5,10]},{"id":"2-2","min":[5,0,5],"max":[15,5,10]},{"id":"2-3","min":[15,0,5],"max":[20,5,10]},{"id":"2-4","min":[0,10,5],"max":[5,15,10]},{"id":"2-5","min":[5,10,5],"max":[10,15,10]},{"id":"2-6","min":[10,10,5],"max":[15,15,10]},{"id":"2-7","min":[15,10,5],"max":[20,15,10]},{"id":"3-1","min":[0,0,10],"max":[5,5,15]},{"id":"3-2","min":[5,0,10],"max":[15,5,15]},{"id":"3-3","min":[15,0,10],"max":[20,5,15]},{"id":"3-4","min":[0,10,10],"max":[5,15,15]},{"id":"3-5","min":[5,10,10],"max":[10,15,15]},{"id":"3-6","min":[10,10,10],"max":[15,15,15]},{"id":"3-7","min":[15,10,10],"max":[20,15,15]},{"id":"1-hall","min":[0,5,0],"max":[20,10,5]},{"id":"2-hall","min":[0,5,5],"max":[20,10,10]},{"id":"3-hall","min":[0,5,10],"max":[20,10,15]}],"topology":{"version":"u1-calibrated-2","panels":[{"id":"1-south-partition-15","vertices":[[15,0,0],[15,5,0],[15,5,5],[15,0,5]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"1-north-partition-5","vertices":[[5,10,0],[5,15,0],[5,15,5],[5,10,5]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"1-north-partition-10","vertices":[[10,10,0],[10,15,0],[10,15,5],[10,10,5]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"1-north-partition-15","vertices":[[15,10,0],[15,15,0],[15,15,5],[15,10,5]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"1-5-0-left","vertices":[[0,5,0],[0.1,5,0],[0.1,5,5],[0,5,5]],"source":"U1 原图门洞相对方位；宽度与精确位置为工程示意","precision":"calibrated"},{"id":"1-5-0-right","vertices":[[1.1,5,0],[5,5,0],[5,5,5],[1.1,5,5]],"source":"U1 原图门洞相对方位；宽度与精确位置为工程示意","precision":"calibrated"},{"id":"1-seal-north-east","vertices":[[10,5,0],[15,5,0],[15,5,5],[10,5,5]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"1-5-15-left","vertices":[[15,5,0],[15.1,5,0],[15.1,5,5],[15,5,5]],"source":"U1 原图门洞相对方位；宽度与精确位置为工程示意","precision":"calibrated"},{"id":"1-5-15-right","vertices":[[16.1,5,0],[20,5,0],[20,5,5],[16.1,5,5]],"source":"U1 原图门洞相对方位；宽度与精确位置为工程示意","precision":"calibrated"},{"id":"1-10-0-left","vertices":[[0,10,0],[3.9000000000000004,10,0],[3.9000000000000004,10,5],[0,10,5]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"1-10-0-right","vertices":[[4.9,10,0],[5,10,0],[5,10,5],[4.9,10,5]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"1-10-5-left","vertices":[[5,10,0],[8.9,10,0],[8.9,10,5],[5,10,5]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"1-10-5-right","vertices":[[9.9,10,0],[10,10,0],[10,10,5],[9.9,10,5]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"1-10-10-left","vertices":[[10,10,0],[13.9,10,0],[13.9,10,5],[10,10,5]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"1-10-10-right","vertices":[[14.9,10,0],[15,10,0],[15,10,5],[14.9,10,5]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"1-10-15-left","vertices":[[15,10,0],[15.1,10,0],[15.1,10,5],[15,10,5]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"1-10-15-right","vertices":[[16.1,10,0],[20,10,0],[20,10,5],[16.1,10,5]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"2-south-partition-5","vertices":[[5,0,5],[5,5,5],[5,5,10],[5,0,10]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"2-south-partition-15","vertices":[[15,0,5],[15,5,5],[15,5,10],[15,0,10]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"2-north-partition-5","vertices":[[5,10,5],[5,15,5],[5,15,10],[5,10,10]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"2-north-partition-10","vertices":[[10,10,5],[10,15,5],[10,15,10],[10,10,10]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"2-north-partition-15","vertices":[[15,10,5],[15,15,5],[15,15,10],[15,10,10]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"2-5-0-left","vertices":[[0,5,5],[3.8,5,5],[3.8,5,10],[0,5,10]],"source":"U1 原图门洞相对方位；宽度与精确位置为工程示意","precision":"calibrated"},{"id":"2-5-0-right","vertices":[[4.8,5,5],[5,5,5],[5,5,10],[4.8,5,10]],"source":"U1 原图门洞相对方位；宽度与精确位置为工程示意","precision":"calibrated"},{"id":"2-5-5-left","vertices":[[5,5,5],[8.75,5,5],[8.75,5,10],[5,5,10]],"source":"U1 原图门洞相对方位；宽度与精确位置为工程示意","precision":"calibrated"},{"id":"2-5-5-right","vertices":[[9.75,5,5],[15,5,5],[15,5,10],[9.75,5,10]],"source":"U1 原图门洞相对方位；宽度与精确位置为工程示意","precision":"calibrated"},{"id":"2-5-15-left","vertices":[[15,5,5],[15.2,5,5],[15.2,5,10],[15,5,10]],"source":"U1 原图门洞相对方位；宽度与精确位置为工程示意","precision":"calibrated"},{"id":"2-5-15-right","vertices":[[16.2,5,5],[20,5,5],[20,5,10],[16.2,5,10]],"source":"U1 原图门洞相对方位；宽度与精确位置为工程示意","precision":"calibrated"},{"id":"2-10-0-left","vertices":[[0,10,5],[3.9000000000000004,10,5],[3.9000000000000004,10,10],[0,10,10]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"2-10-0-right","vertices":[[4.9,10,5],[5,10,5],[5,10,10],[4.9,10,10]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"2-10-5-left","vertices":[[5,10,5],[8.9,10,5],[8.9,10,10],[5,10,10]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"2-10-5-right","vertices":[[9.9,10,5],[10,10,5],[10,10,10],[9.9,10,10]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"2-10-10-left","vertices":[[10,10,5],[13.9,10,5],[13.9,10,10],[10,10,10]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"2-10-10-right","vertices":[[14.9,10,5],[15,10,5],[15,10,10],[14.9,10,10]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"2-10-15-left","vertices":[[15,10,5],[15.1,10,5],[15.1,10,10],[15,10,10]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"2-10-15-right","vertices":[[16.1,10,5],[20,10,5],[20,10,10],[16.1,10,10]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"3-south-partition-5","vertices":[[5,0,10],[5,5,10],[5,5,15],[5,0,15]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"3-south-partition-15","vertices":[[15,0,10],[15,5,10],[15,5,15],[15,0,15]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"3-north-partition-5","vertices":[[5,10,10],[5,15,10],[5,15,15],[5,10,15]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"3-north-partition-10","vertices":[[10,10,10],[10,15,10],[10,15,15],[10,10,15]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"3-north-partition-15","vertices":[[15,10,10],[15,15,10],[15,15,15],[15,10,15]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"3-5-0-left","vertices":[[0,5,10],[3.8,5,10],[3.8,5,15],[0,5,15]],"source":"U1 原图门洞相对方位；宽度与精确位置为工程示意","precision":"calibrated"},{"id":"3-5-0-right","vertices":[[4.8,5,10],[5,5,10],[5,5,15],[4.8,5,15]],"source":"U1 原图门洞相对方位；宽度与精确位置为工程示意","precision":"calibrated"},{"id":"3-5-5-left","vertices":[[5,5,10],[8.75,5,10],[8.75,5,15],[5,5,15]],"source":"U1 原图门洞相对方位；宽度与精确位置为工程示意","precision":"calibrated"},{"id":"3-5-5-right","vertices":[[9.75,5,10],[15,5,10],[15,5,15],[9.75,5,15]],"source":"U1 原图门洞相对方位；宽度与精确位置为工程示意","precision":"calibrated"},{"id":"3-5-15-left","vertices":[[15,5,10],[15.2,5,10],[15.2,5,15],[15,5,15]],"source":"U1 原图门洞相对方位；宽度与精确位置为工程示意","precision":"calibrated"},{"id":"3-5-15-right","vertices":[[16.2,5,10],[20,5,10],[20,5,15],[16.2,5,15]],"source":"U1 原图门洞相对方位；宽度与精确位置为工程示意","precision":"calibrated"},{"id":"3-10-0-left","vertices":[[0,10,10],[3.9000000000000004,10,10],[3.9000000000000004,10,15],[0,10,15]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"3-10-0-right","vertices":[[4.9,10,10],[5,10,10],[5,10,15],[4.9,10,15]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"3-10-5-left","vertices":[[5,10,10],[8.9,10,10],[8.9,10,15],[5,10,15]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"3-10-5-right","vertices":[[9.9,10,10],[10,10,10],[10,10,15],[9.9,10,15]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"3-10-10-left","vertices":[[10,10,10],[13.9,10,10],[13.9,10,15],[10,10,15]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"3-10-10-right","vertices":[[14.9,10,10],[15,10,10],[15,10,15],[14.9,10,15]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"3-10-15-left","vertices":[[15,10,10],[15.1,10,10],[15.1,10,15],[15,10,15]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"3-10-15-right","vertices":[[16.1,10,10],[20,10,10],[20,10,15],[16.1,10,15]],"source":"U1/P3;位置工程标定","precision":"calibrated"},{"id":"1-outer-south","vertices":[[0,0,0],[20,0,0],[20,0,5],[0,0,5]],"source":"U1 外墙与出入口；门尺寸及精确位置为工程示意","precision":"calibrated"},{"id":"1-outer-north","vertices":[[0,15,0],[20,15,0],[20,15,5],[0,15,5]],"source":"U1 外墙与出入口；门尺寸及精确位置为工程示意","precision":"calibrated"},{"id":"1-outer-west-south","vertices":[[0,0,0],[0,7,0],[0,7,5],[0,0,5]],"source":"U1 外墙与出入口；门尺寸及精确位置为工程示意","precision":"calibrated"},{"id":"1-outer-west-gate","vertices":[[0,7,0],[0,8,0],[0,8,5],[0,7,5]],"source":"U1 外墙与出入口；门尺寸及精确位置为工程示意","precision":"calibrated"},{"id":"1-outer-west-north","vertices":[[0,8,0],[0,15,0],[0,15,5],[0,8,5]],"source":"U1 外墙与出入口；门尺寸及精确位置为工程示意","precision":"calibrated"},{"id":"1-outer-east-south","vertices":[[20,0,0],[20,7,0],[20,7,5],[20,0,5]],"source":"U1 外墙与出入口；门尺寸及精确位置为工程示意","precision":"calibrated"},{"id":"1-outer-east-gate","vertices":[[20,7,0],[20,8,0],[20,8,5],[20,7,5]],"source":"U1 外墙与出入口；门尺寸及精确位置为工程示意","precision":"calibrated"},{"id":"1-outer-east-north","vertices":[[20,8,0],[20,15,0],[20,15,5],[20,8,5]],"source":"U1 外墙与出入口；门尺寸及精确位置为工程示意","precision":"calibrated"},{"id":"2-outer-south","vertices":[[0,0,5],[20,0,5],[20,0,10],[0,0,10]],"source":"U1 外墙与出入口；门尺寸及精确位置为工程示意","precision":"calibrated"},{"id":"2-outer-north","vertices":[[0,15,5],[20,15,5],[20,15,10],[0,15,10]],"source":"U1 外墙与出入口；门尺寸及精确位置为工程示意","precision":"calibrated"},{"id":"2-outer-west","vertices":[[0,0,5],[0,15,5],[0,15,10],[0,0,10]],"source":"U1 外墙与出入口；门尺寸及精确位置为工程示意","precision":"calibrated"},{"id":"2-outer-east","vertices":[[20,0,5],[20,15,5],[20,15,10],[20,0,10]],"source":"U1 外墙与出入口；门尺寸及精确位置为工程示意","precision":"calibrated"},{"id":"3-outer-south","vertices":[[0,0,10],[20,0,10],[20,0,15],[0,0,15]],"source":"U1 外墙与出入口；门尺寸及精确位置为工程示意","precision":"calibrated"},{"id":"3-outer-north","vertices":[[0,15,10],[20,15,10],[20,15,15],[0,15,15]],"source":"U1 外墙与出入口；门尺寸及精确位置为工程示意","precision":"calibrated"},{"id":"3-outer-west","vertices":[[0,0,10],[0,15,10],[0,15,15],[0,0,15]],"source":"U1 外墙与出入口；门尺寸及精确位置为工程示意","precision":"calibrated"},{"id":"3-outer-east","vertices":[[20,0,10],[20,15,10],[20,15,15],[20,0,15]],"source":"U1 外墙与出入口；门尺寸及精确位置为工程示意","precision":"calibrated"}],"regions":[{"regionId":"1-1","lighting":"unknown","radiation":"unknown","source":"U1/P3"},{"regionId":"1-2","lighting":"unknown","radiation":"unknown","source":"U1/P3"},{"regionId":"1-3","lighting":"unlit","radiation":"unknown","source":"U1/P3"},{"regionId":"1-4","lighting":"unknown","radiation":"unknown","source":"U1/P3"},{"regionId":"1-5","lighting":"unknown","radiation":"unknown","source":"U1/P3"},{"regionId":"1-6","lighting":"unlit","radiation":"unknown","source":"U1/P3"},{"regionId":"1-7","lighting":"unlit","radiation":"unknown","source":"U1/P3"},{"regionId":"1-hall","lighting":"unlit","radiation":"strong","source":"U1/P3"},{"regionId":"2-1","lighting":"unknown","radiation":"unknown","source":"U1/P3"},{"regionId":"2-2","lighting":"unknown","radiation":"unknown","source":"U1/P3","owner":"塞西莉亚"},{"regionId":"2-3","lighting":"unknown","radiation":"unknown","source":"U1/P3"},{"regionId":"2-4","lighting":"unknown","radiation":"unknown","source":"U1/P3","owner":"柏尔齐"},{"regionId":"2-5","lighting":"unknown","radiation":"unknown","source":"U1/P3","owner":"迪帕克"},{"regionId":"2-6","lighting":"unknown","radiation":"unknown","source":"U1/P3","owner":"艾可"},{"regionId":"2-7","lighting":"unknown","radiation":"unknown","source":"U1/P3","owner":"菲娜"},{"regionId":"2-hall","lighting":"unknown","radiation":"strong","source":"U1/P3"},{"regionId":"3-1","lighting":"unknown","radiation":"strong","source":"U1/P3"},{"regionId":"3-2","lighting":"unknown","radiation":"strong","source":"U1/P3"},{"regionId":"3-3","lighting":"unknown","radiation":"strong","source":"U1/P3"},{"regionId":"3-4","lighting":"unknown","radiation":"strong","source":"U1/P3"},{"regionId":"3-5","lighting":"unknown","radiation":"strong","source":"U1/P3"},{"regionId":"3-6","lighting":"unknown","radiation":"strong","source":"U1/P3"},{"regionId":"3-7","lighting":"unknown","radiation":"strong","source":"U1/P3"},{"regionId":"3-hall","lighting":"unknown","radiation":"strong","source":"U1/P3"}],"facilities":[{"id":"platform-empty","regionId":"1-1","label":"空悬浮台","position":[2.5,2.5,2.5],"source":"U1/P3;图标位置工程标定","precision":"calibrated"},{"id":"platform-stamp","regionId":"1-4","label":"印章悬浮台","position":[2.5,12.5,2.5],"source":"U1/P3;图标位置工程标定","precision":"calibrated"},{"id":"platform-key","regionId":"1-5","label":"钥匙悬浮台","position":[7.5,12.5,2.5],"source":"U1/P3;图标位置工程标定","precision":"calibrated"},{"id":"meteor","regionId":"3-2","label":"陨石（西半）","position":[7.5,2.5,12.5],"source":"U1/P3;图标位置工程标定","precision":"calibrated"},{"id":"barrier-idle","regionId":"3-2","label":"屏障 · 未开启","position":[8.5,2.5,12.5],"source":"U1/P3;图标位置工程标定","precision":"calibrated"},{"id":"device","regionId":"1-6","label":"核弹","position":[12.5,12.5,2.5],"source":"U1/P3;图标位置工程标定","precision":"calibrated"},{"id":"barrier-active","regionId":"1-6","label":"屏障 · 已覆盖核弹","position":[12.5,12.5,2.5],"source":"U1/P3;图标位置工程标定","precision":"calibrated"},{"id":"repair-2-4","regionId":"2-4","label":"修复装置","position":[2.5,12.5,7.5],"source":"U1/P3;图标位置工程标定","precision":"calibrated"},{"id":"repair-2-5","regionId":"2-5","label":"修复装置","position":[7.5,12.5,7.5],"source":"U1/P3;图标位置工程标定","precision":"calibrated"},{"id":"repair-2-6","regionId":"2-6","label":"修复装置","position":[12.5,12.5,7.5],"source":"U1/P3;图标位置工程标定","precision":"calibrated"},{"id":"repair-2-7","regionId":"2-7","label":"修复装置","position":[17.5,12.5,7.5],"source":"U1/P3;图标位置工程标定","precision":"calibrated"},{"id":"repair-2-2","regionId":"2-2","label":"修复装置","position":[10,2.5,7.5],"source":"U1/P3;图标位置工程标定","precision":"calibrated"}]}}'),ml=[{id:"dimensions",source:"研究所地图与已发设施说明",description:"常规房5m，2号双宽；门5×5m。走廊与层高按格图标定，不用于精细碰撞判定。"},{id:"mark",source:"谜题三源页7—8",description:"印记与锁盘图案完全重合；外开只表示解锁，门扇仍在外侧。"},{id:"U1",source:"U1 · 已发研究所平面图 / P3",description:"房号与实体隔墙分离；无灯、辐射和房主各自登记。普通开口位置仅示意，不提供精细通行或角色可见性保证。"}],gl={kind:cl,schemaVersion:ll,contentVersion:ul,caseId:dl,stageId:hl,title:fl,geometry:pl,evidence:ml};function rc(i){return i.caseId==="neutral"&&i.stageId==="neutral"&&i.contentVersion==="1"&&i.geometry.rooms.length===2&&i.geometry.rooms[0].id==="甲"&&i.geometry.rooms[1].id==="乙"}function Qr(i,e){return rc(i.pack)?{...i,pack:e}:i}function _l(i){const e=JSON.stringify(i);let t=2166136261,n=2246822519;for(let r=0;r<e.length;r++){const s=e.charCodeAt(r);t=Math.imul(t^s,16777619),n=Math.imul(n^s,3266489917)}return[e.length,t>>>0,n>>>0].join(":")}const vl=new Set(["12179:3147692187:28814119","12172:324567295:2801131521"]);function xl(i){return i.caseId==="case3"&&i.stageId==="base"&&i.contentVersion==="0.2-topology"&&vl.has(_l(i))}function Ml(i,e,t){if(!xl(i.state.pack)||e.caseId!=="case3"||e.stageId!=="base"||e.contentVersion!=="0.3-reference-map")return{archive:i,status:"unchanged"};const n=i.future.at(-1);if(n&&JSON.stringify(n.pack)===JSON.stringify(e)){const{pack:r,...s}=i.state,{pack:o,...a}=n;if(JSON.stringify(s)===JSON.stringify(a))return{archive:i,status:"unchanged"}}if(i.past.length+i.future.length>=1e3)return{archive:i,status:"history-full"};try{t()}catch{return{archive:i,status:"backup-failed"}}return{archive:{state:{...i.state,pack:e},past:[...i.past,i.state],future:[...i.future]},status:"upgraded"}}function Us(i){const e=[],t=new Map,n=r=>{const s=JSON.stringify(r.pack);let o=t.get(s);o===void 0&&(o=e.length,e.push(r.pack),t.set(s,o));const{pack:a,...l}=r;return{...l,sceneRef:o}};return JSON.stringify({kind:"player-save",schemaVersion:2,appVersion:"0.4.0",scenes:e,state:n(i.state),history:{past:i.past.map(n),future:i.future.map(n)}})}function sc(i,e){if(!i||typeof i!="object")throw Error("方案文件无效");const t=i;if(t.kind==="player-save"&&t.schemaVersion===2){if(!Array.isArray(t.scenes)||t.scenes.length<1||t.scenes.length>1001||!t.history||!Array.isArray(t.history.past)||!Array.isArray(t.history.future)||t.history.past.length+t.history.future.length>1e3)throw Error("存档场景或历史格式无效");const n=r=>{if(!r||typeof r!="object")throw Error("存档记录无效");const s=r,o=s.sceneRef;if(!Number.isInteger(o)||Number(o)<0||Number(o)>=t.scenes.length)throw Error("存档场景引用无效");const{sceneRef:a,...l}=s;return e({...l,pack:t.scenes[Number(o)]})};return{state:n(t.state),past:t.history.past.map(n),future:t.history.future.map(n)}}if(t.kind==="player-save"&&t.schemaVersion!==1)throw Error("不支持的存档版本");if(t.kind==="player-save"||t.kind==="geometry-history"){const n=t.kind==="player-save"?t.history:{past:t.past,future:t.future};if(n!==void 0&&(!n||!Array.isArray(n.past)||!Array.isArray(n.future)||n.past.length+n.future.length>1e3))throw Error("历史数据无效");return{state:e(t.state),past:(n?.past??[]).map(e),future:(n?.future??[]).map(e)}}return{state:e(i),past:[],future:[]}}const Sl=36e3,er=()=>({cursor:0,events:[],sessions:[],nextSeq:1,doorHistory:[],selectedSessionId:null}),mn=i=>typeof i=="number"&&Number.isSafeInteger(i)&&Math.abs(i)<=315576e4;function oc(i,e){if(e<i.triggerAt)return;const t=i.anchorAt+e-i.triggerAt;return mn(t)?t:void 0}function ac(i,e){return i.transitions.filter(t=>t.at<=e).sort((t,n)=>t.at-n.at||t.seq-n.seq).at(-1)}function Zo(i,e){return i.filter(t=>t.at<=e).sort((t,n)=>n.at-t.at||n.seq-t.seq)[0]}function Ro(i){const e=i.selectedSessionId;if(!e)return{kind:"inactive",reason:"未选择会话"};const t=i.sessions.find(a=>a.id===e);if(!t)return{kind:"inactive",reason:"所选会话不存在"};const n=oc(t,i.cursor),r=ac(t,i.cursor);if(n===void 0||!r)return{kind:"inactive",reason:i.cursor<t.triggerAt?"所选时间早于会话触发":"锚定时间超出可计算范围"};if(r.phase==="REAL")return{kind:"inactive",reason:"此时会话已返回现实"};const s=Zo(i.doorHistory??[],i.cursor)?.state,o=Zo(i.doorHistory??[],n)?.state;return s===void 0||o===void 0?{kind:"undetermined",sessionId:e,realAt:i.cursor,anchorAt:n,real:s,anchor:o,reason:"缺少所选时间之前的门态记录"}:{kind:"determined",sessionId:e,realAt:i.cursor,anchorAt:n,real:s,anchor:o}}function Ls(i,e,t,n,r){if(!mn(e)||!Number.isSafeInteger(t))throw Error("时间或顺序无效");const s=i.transitions.at(-1);if(!s||e<s.at)throw Error("变更时间不能早于已有阶段记录");if(!{PRE_IN:["ANCHORED","REAL"],ANCHORED:["PRE_OUT","REAL"],PRE_OUT:["REAL"],REAL:[]}[s.phase].includes(n))throw Error("当前阶段不能直接切换到该阶段");if(r!==void 0&&(r!=="death"||n!=="REAL"))throw Error("阶段切换原因无效");if(s.phase==="ANCHORED"&&n==="REAL"&&r!=="death")throw Error("锚定阶段须先进入锚出准备；死亡另行记录");if(r!=="death"&&(s.phase==="PRE_IN"&&n==="ANCHORED"||s.phase==="PRE_OUT"&&n==="REAL")&&e-s.at<Sl)throw Error("准备期尚未达到10小时；死亡立即回归需单独记录");return{...i,transitions:[...i.transitions,{at:e,seq:t,phase:n,...r?{cause:r}:{}}]}}function ti(i){if(!mn(i))return"时间无效";const e=new Date(Date.UTC(2055,9,21,8,0,0)+i*1e3),t=n=>String(n).padStart(2,"0");return`${e.getUTCFullYear()}-${t(e.getUTCMonth()+1)}-${t(e.getUTCDate())} ${t(e.getUTCHours())}:${t(e.getUTCMinutes())}:${t(e.getUTCSeconds())}`}function Rn(i){const e=/^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})(?::(\d{2}))?$/.exec(i);if(!e)throw Error("请输入完整剧情日期和时间");const[t,n,r,s,o,a]=e.slice(1).map(d=>Number(d||0)),l=Date.UTC(t,n-1,r,s,o,a),c=new Date(l);if(c.getUTCFullYear()!==t||c.getUTCMonth()!==n-1||c.getUTCDate()!==r||c.getUTCHours()!==s||c.getUTCMinutes()!==o||c.getUTCSeconds()!==a)throw Error("日期或时间无效");const p=(l-Date.UTC(2055,9,21,8))/1e3;if(!mn(p))throw Error("日期超出范围");return p}function Ir(i){if(!i||typeof i!="object")throw Error("时间记录无效");const e=i;if(!mn(e.cursor)||!Number.isSafeInteger(e.nextSeq)||e.nextSeq<1||!Array.isArray(e.events)||e.events.length>1e3||!Array.isArray(e.sessions)||e.sessions.length>100)throw Error("时间记录格式无效");const t=(c,p)=>typeof c=="string"&&c.length<=p,n=new Set,r=new Set;let s=0;const o=c=>{if(!Number.isSafeInteger(c)||c<1||r.has(c))throw Error("顺序号无效");r.add(c),s=Math.max(s,c)};for(const c of e.events){if(!t(c.id,80)||!c.id||n.has(c.id)||!mn(c.at)||!t(c.actor,80)||!t(c.description,300))throw Error("事件格式无效");n.add(c.id),o(c.seq)}for(const c of e.sessions){if(!t(c.id,80)||!c.id||n.has(c.id)||!t(c.actor,80)||!mn(c.triggerAt)||!mn(c.anchorAt)||!t(c.anchorMark,80)||!t(c.returnMark,80)||!Array.isArray(c.transitions)||c.transitions.length<1||c.transitions.length>100)throw Error("会话格式无效");n.add(c.id);const p=c.transitions[0];if(p.phase!=="PRE_IN"||p.at!==c.triggerAt)throw Error("会话起始阶段无效");if(o(p.seq),p.cause!==void 0)throw Error("会话起始原因无效");let d={...c,transitions:[p]};for(const h of c.transitions.slice(1))o(h.seq),d=Ls(d,h.at,h.seq,h.phase,h.cause)}const a=e.doorHistory===void 0?[]:e.doorHistory;if(!Array.isArray(a)||a.length>1e3)throw Error("门态历史格式无效");for(const c of a){if(!c||!t(c.id,80)||!c.id||n.has(c.id)||!mn(c.at)||!["OUT_LOCKED","OUT_UNLOCKED","IN_LOCKED","IN_UNLOCKED"].includes(c.state))throw Error("门态历史字段无效");n.add(c.id),o(c.seq)}const l=e.selectedSessionId??null;if(l!==null&&(!t(l,80)||!e.sessions.some(c=>c.id===l)))throw Error("所选会话无效");if(e.nextSeq<=s)throw Error("下一顺序号无效");return structuredClone({...e,doorHistory:a,selectedSessionId:l})}const es={PRE_IN:"锚入准备",ANCHORED:"锚定世界",PRE_OUT:"锚出准备",REAL:"现实世界"};function El(i,e,t=er()){let n=Ir(t);const r=(h,f)=>{const g=document.createElement(h);return f!==void 0&&(g.textContent=f),g},s=(h,f)=>{const g=r("button",h);return g.type="button",g.onclick=f,g},o=(h,f="text",g="")=>{const _=r("label");_.textContent=h;const m=r("input");return m.type=f,m.value=g,f==="datetime-local"&&(m.step="1"),_.append(m),{wrap:_,input:m}},a=h=>ti(h).replace(" ","T");let l="";function c(h){n=Ir(h),e?.(structuredClone(n)),d()}function p(h){try{l="",h()}catch(f){l=f instanceof Error?f.message:"输入无效";const g=i.querySelector("[data-time-status]");g&&(g.textContent=l)}}function d(){const h=r("section");h.className="time-workbench";const f=r("p","记录你自己的假设。剧情时间只由你调整，关闭页面不会推进。");h.append(f);const g=r("p",l);g.setAttribute("role","status"),g.dataset.timeStatus="",h.append(g);const _=o("查看的现实时间","datetime-local",a(n.cursor));h.append(_.wrap,s("查看此刻",()=>p(()=>c({...n,cursor:Rn(_.input.value)}))));const m=r("div");for(const[$,ae]of[["+1秒",1],["+1分",60],["+1小时",3600]])m.append(s($,()=>p(()=>c({...n,cursor:n.cursor+ae}))));h.append(m),h.append(r("p",`现实时间：${ti(n.cursor)}（剧情时间）`));const u=r("details");u.append(r("summary","添加假设事件"));const R=o("事件时间","datetime-local",a(n.cursor)),A=o("人物或主体（可留空）"),E=o("事件描述");E.input.maxLength=300,A.input.maxLength=80,u.append(R.wrap,A.wrap,E.wrap,s("记录事件",()=>p(()=>{if(!E.input.value.trim())throw Error("请填写事件描述");if(n.events.length>=1e3)throw Error("事件达到上限，请导出归档");const $=n.nextSeq;c({...n,nextSeq:$+1,events:[...n.events,{id:`event-${$}`,at:Rn(R.input.value),seq:$,actor:A.input.value.trim(),description:E.input.value.trim()}]})}))),h.append(u),h.append(r("h3","假设时间线")),n.events.length||h.append(r("p","尚无事件。"));const T=r("ol");for(const $ of[...n.events].sort((ae,ge)=>ae.at-ge.at||ae.seq-ge.seq)){const ae=r("li");ae.append(r("span",`${ti($.at)} · 次序${$.seq} · ${$.actor||"主体未填写"}：${$.description}（假设） `),s("删除",()=>c({...n,events:n.events.filter(ge=>ge.id!==$.id)}))),T.append(ae)}h.append(T);const b=r("details");b.append(r("summary","记录密封门历史假设")),b.append(r("p","填写现实历史中的门态；系统按当前时间与会话的锚定时间分别查询。时间早于所有记录时保持未知。此处只记录你的假设，不代表已检查操作次数或历史可达性。"));const y=o("门态生效的剧情时间","datetime-local",a(n.cursor)),D=r("select");D.setAttribute("aria-label","假设的密封门状态");for(const[$,ae]of[["OUT_LOCKED","外锁"],["OUT_UNLOCKED","外开（仅解锁）"],["IN_LOCKED","内锁"],["IN_UNLOCKED","内开"]]){const ge=r("option",ae);ge.value=$,D.append(ge)}b.append(y.wrap,D,s("记录门态假设",()=>p(()=>{if((n.doorHistory??[]).length>=1e3)throw Error("门态历史达到上限，请导出归档");const $=n.nextSeq;c({...n,nextSeq:$+1,doorHistory:[...n.doorHistory??[],{id:`door-${$}`,at:Rn(y.input.value),seq:$,state:D.value}]})})));const M=r("ol"),x={OUT_LOCKED:"外锁",OUT_UNLOCKED:"外开",IN_LOCKED:"内锁",IN_UNLOCKED:"内开"};for(const $ of[...n.doorHistory??[]].sort((ae,ge)=>ae.at-ge.at||ae.seq-ge.seq)){const ae=r("li");ae.append(r("span",`${ti($.at)} · 次序${$.seq} · ${x[$.state]}（假设） `),s("删除门态记录",()=>c({...n,doorHistory:(n.doorHistory??[]).filter(ge=>ge.id!==$.id)}))),M.append(ae)}n.doorHistory?.length||b.append(r("p","尚无门态记录。")),b.append(M),h.append(b);const C=r("details");C.append(r("summary","建立独立会话"));const U=o("触发者（玩家填写）"),z=o("触发的现实时间","datetime-local",a(n.cursor)),k=o("锚定开始的过去时间","datetime-local"),N=o("锚定印记标识"),G=o("回归印记标识");for(const $ of[U,z,k,N,G])C.append($.wrap);C.append(s("建立会话",()=>p(()=>{if(!U.input.value.trim()||!N.input.value.trim()||!G.input.value.trim())throw Error("请填写触发者、两个印记和时间");if(n.sessions.length>=100)throw Error("会话达到上限");const $=n.nextSeq,ae=Rn(z.input.value);c({...n,nextSeq:$+1,sessions:[...n.sessions,{id:`session-${$}`,actor:U.input.value.trim(),triggerAt:ae,anchorAt:Rn(k.input.value),anchorMark:N.input.value.trim(),returnMark:G.input.value.trim(),transitions:[{at:ae,seq:$,phase:"PRE_IN"}]}]})}))),h.append(C,r("h3","独立会话"));const Y=r("select");Y.setAttribute("aria-label","选择用于空间联动的会话");const I=r("option","空间组合试验（不联动历史）");I.value="",Y.append(I);for(const $ of n.sessions){const ae=r("option",`${$.actor} · ${$.id}`);ae.value=$.id,Y.append(ae)}Y.value=n.selectedSessionId??"",Y.addEventListener("change",()=>c({...n,selectedSessionId:Y.value||null}));const j=r("label","选择空间联动模式");j.append(Y),h.append(j,r("p","选择会话进行空间联动，表示你假设该会话的两个印记均位于密封门转盘。"));const Q=Ro(n);Q.kind==="determined"?h.append(r("p",`会话门态假设：现实 ${x[Q.real]}；锚定 ${x[Q.anchor]}。`)):Q.kind==="undetermined"?h.append(r("p",`门态尚未确定：${Q.reason}。`)):n.selectedSessionId&&h.append(r("p",Q.reason));for(const $ of n.sessions){const ae=r("article");ae.append(r("h4",$.actor+" · 假设会话（"+$.id+"）"),r("p",`锚定印记：${$.anchorMark}；回归印记：${$.returnMark}`));const ge=ac($,n.cursor),ye=oc($,n.cursor);ae.append(r("p",ge?`当前阶段：${es[ge.phase]}；锚定时间：${ti(ye)}`:"所选时间早于本次触发；锚定时间未开始。"));const te=r("select");te.setAttribute("aria-label","目标阶段");for(const q of["ANCHORED","PRE_OUT","REAL"]){const oe=r("option",es[q]);oe.value=q,te.append(oe)}ae.append(te,s("在当前时间记录阶段切换",()=>p(()=>{const q=n.nextSeq,oe=Ls($,n.cursor,q,te.value);c({...n,nextSeq:q+1,sessions:n.sessions.map(Me=>Me.id===$.id?oe:Me)})})),s("假设死亡并立即回归",()=>p(()=>{const q=n.nextSeq,oe=Ls($,n.cursor,q,"REAL","death");c({...n,nextSeq:q+1,sessions:n.sessions.map(Me=>Me.id===$.id?oe:Me)})})),r("p","阶段切换由玩家提出；印章接触、清醒和其他条件需自行核对，当前未自动判定。"),s("删除会话",()=>c({...n,sessions:n.sessions.filter(q=>q.id!==$.id),selectedSessionId:n.selectedSessionId===$.id?null:n.selectedSessionId})));const V=r("ul");for(const q of $.transitions)V.append(r("li",`${ti(q.at)} · 次序${q.seq} · ${es[q.phase]}${q.cause==="death"?"（假设死亡）":""}`));ae.append(V),h.append(ae)}i.replaceChildren(h)}return d(),{getState:()=>structuredClone(n),setState:h=>{n=Ir(h),d()}}}function yl(i,e){if(!i||typeof i!="object")throw Error("拓扑格式无效");const t=i,n=a=>typeof a=="string"&&a.length>0&&a.length<=160,r=a=>Array.isArray(a)&&a.length===3&&a.every(l=>typeof l=="number"&&Number.isFinite(l)&&Math.abs(l)<1e4);if(!n(t.version)||!Array.isArray(t.panels)||t.panels.length>2e3||!Array.isArray(t.regions)||t.regions.length>300||!Array.isArray(t.facilities)||t.facilities.length>300)throw Error("拓扑数量或版本无效");const s=new Set;for(const a of t.panels){if(!n(a.id)||s.has(a.id)||!n(a.source)||!["calibrated","explicit"].includes(a.precision)||!Array.isArray(a.vertices)||a.vertices.length!==4||!a.vertices.every(r))throw Error("墙面数据无效");s.add(a.id)}const o=new Set;for(const a of t.regions){if(!e.has(a.regionId)||o.has(a.regionId)||!n(a.source)||!["unknown","unlit"].includes(a.lighting)||!["strong","unknown"].includes(a.radiation)||a.owner!==void 0&&!n(a.owner))throw Error("区域属性无效");o.add(a.regionId)}for(const a of t.facilities){if(!n(a.id)||s.has(a.id)||!e.has(a.regionId)||!n(a.label)||!n(a.source)||!r(a.position)||!["calibrated","explicit"].includes(a.precision))throw Error("设施数据无效");s.add(a.id)}return structuredClone({version:t.version,panels:t.panels,regions:t.regions,facilities:t.facilities})}const Un=["OUT_LOCKED","OUT_UNLOCKED","IN_LOCKED","IN_UNLOCKED"],kr=()=>[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];function bl(i,e){return Array.from({length:16},(t,n)=>{const r=Math.floor(n/4),s=n%4;return[0,1,2,3].reduce((o,a)=>o+i[r*4+a]*e[a*4+s],0)})}function Co(i){const e=kr();for(let t=0;t<3;t++){for(let n=0;n<3;n++)e[t*4+n]=i[n*4+t];e[t*4+3]=-[0,1,2].reduce((n,r)=>n+e[t*4+r]*i[r*4+3],0)}return e}function tt(i,e){return[0,1,2].map(t=>i[t*4]*e[0]+i[t*4+1]*e[1]+i[t*4+2]*e[2]+i[t*4+3])}function Is(i){switch(i){case"OUT_LOCKED":return[1,0,0,7.5,0,0,-1,5,0,1,0,2.5,0,0,0,1];case"OUT_UNLOCKED":return[0,1,0,7.5,0,0,-1,5,-1,0,0,2.5,0,0,0,1];case"IN_LOCKED":return[0,0,1,10,1,0,0,2.5,0,1,0,2.5,0,0,0,1];case"IN_UNLOCKED":return[0,0,1,10,0,1,0,2.5,-1,0,0,2.5,0,0,0,1]}}const Ns=(i,e)=>bl(Is(i),Co(Is(e)));function Po(i){if(!i||typeof i!="object")throw Error("场景必须为JSON对象");const e=i,t=r=>Array.isArray(r)&&r.length===3&&r.every(s=>typeof s=="number"&&Number.isFinite(s)&&Math.abs(s)<1e4);if(e.kind!=="scene-pack"||e.schemaVersion!==1||typeof e.title!="string"||typeof e.caseId!="string"||typeof e.stageId!="string"||typeof e.contentVersion!="string"||!Array.isArray(e.geometry?.rooms)||e.geometry.rooms.length>300||!Array.isArray(e.evidence))throw Error("不支持的场景格式");const n=new Set;for(const r of e.geometry.rooms){if(typeof r.id!="string"||r.id.length>40||n.has(r.id)||!t(r.min)||!t(r.max)||r.min.some((s,o)=>s>=r.max[o]))throw Error("房间坐标或编号无效");n.add(r.id)}if(e.evidence.some(r=>typeof r.id!="string"||typeof r.source!="string"||typeof r.description!="string"))throw Error("来源字段无效");return{kind:e.kind,schemaVersion:1,contentVersion:e.contentVersion,caseId:e.caseId,stageId:e.stageId,title:e.title.slice(0,80),geometry:{rooms:e.geometry.rooms.map(r=>({id:r.id,min:[...r.min],max:[...r.max]})),...e.geometry.topology?{topology:yl(e.geometry.topology,n)}:{}},evidence:e.evidence.map(r=>({id:r.id,source:r.source,description:r.description}))}}function cc(i,e,t=!1){const n=i.find(r=>r.min.every((s,o)=>e[o]>s+1e-6&&e[o]<r.max[o]-1e-6));if(!n)return"房间外或边界（需检查剖面）";if(t&&n.id==="3-2"){const r=e[0]-(n.min[0]+n.max[0])/2;return n.id+(Math.abs(r)<=1e-6?"（东西半区分界）":r<0?"（西半）":"（东半）")}return n.id}const tr=()=>({version:1,nextId:1,entities:[]}),ni=(i,e)=>typeof i=="string"&&i.length<=e;function lc(i){if(!i||typeof i!="object")throw Error("人物与物件数据无效");const e=i;if(e.version!==1||!Number.isSafeInteger(e.nextId)||e.nextId<1||!Array.isArray(e.entities)||e.entities.length>200)throw Error("人物与物件数据版本或数量无效");const t=new Set;for(const r of e.entities){if(!r||!ni(r.id,80)||!r.id||t.has(r.id)||!["actor","object"].includes(r.kind)||!ni(r.label,80)||!r.label.trim()||!ni(r.location,160)||!ni(r.notes,2e3)||!["unknown","real","anchor"].includes(r.world)||typeof r.wearable!="boolean"||!(r.massKg===null||typeof r.massKg=="number"&&Number.isFinite(r.massKg)&&r.massKg>0&&r.massKg<=1e5)||!r.binding||!["unknown","unbound","bound"].includes(r.binding.kind)||r.binding.kind==="bound"&&(!ni(r.binding.sessionId,80)||!r.binding.sessionId.trim()))throw Error("人物或物件字段无效");if(r.anchorSessionId!==void 0&&!ni(r.anchorSessionId,80))throw Error("锚定会话标识无效");if(r.position!==void 0&&r.position!==null&&(!Array.isArray(r.position)||r.position.length!==3||!r.position.every(s=>typeof s=="number"&&Number.isFinite(s)&&Math.abs(s)<1e4)))throw Error("人物或物件坐标无效");t.add(r.id)}const n=structuredClone(e);for(const r of n.entities)r.position??=null;return n}function Tl(i,e,t=null){return i.entities.flatMap(n=>n.world==="unknown"||!n.position||n.world==="anchor"&&(!e||!t||n.anchorSessionId!==t)?[]:[{id:n.id,kind:n.kind,label:n.label,world:n.world,position:n.world==="real"?[...n.position]:tt(e,n.position)}])}function Al(i,e,t){const n=[];let r=!1,s=!1;if(i.kind!=="actor"||e.some(a=>a.id===i.id)||new Set(e.map(a=>a.id)).size!==e.length)return{status:"undetermined",messages:["请选择携带者及其他不重复的实体，不能携带自己。"],totalKg:null};e.some(a=>!a.wearable)&&t==="no"&&(r=!0,n.push("你选择了触发时未接触；所选非衣饰物件不满足接触条件。")),e.some(a=>!a.wearable)&&t==="unknown"&&(s=!0,n.push("触发时是否接触尚未填写；衣饰可按公开例外自动纳入。")),e.some(a=>a.binding.kind==="bound")&&(r=!0,n.push("所选物件中有被假设已绑定的物件；不能同时绑定到另一会话。")),e.some(a=>a.binding.kind==="unknown")&&(s=!0,n.push("所选物件是否已绑定未知；不能当作未绑定。"));const o=e.every(a=>a.massKg!==null)?e.reduce((a,l)=>a+l.massKg,0):null;return i.massKg===null||o===null?(s=!0,n.push("人物体重或物件重量未知，无法判断质量上限。")):o>i.massKg?(r=!0,n.push(`所选物件合计 ${o} kg，超过假设体重 ${i.massKg} kg。`)):n.push(`所选物件合计 ${o} kg，未超过假设体重 ${i.massKg} kg。`),e.some(a=>a.wearable)&&n.push("已选衣物饰品计入总重量；请确认所有穿戴物均已计入。"),e.some(a=>a.kind==="actor")&&n.push("被携带的活物不因此进入主动触发冷却；会话阶段需另行记录。"),n.push("请确认穿戴衣饰及其重量均已计入。该检查只覆盖已输入条件，不判断整个方案是否可行。"),{status:r?"violated":s?"undetermined":"determined",messages:n,totalKg:o}}function wl(i,e=()=>{},t){let n=tr(),r=null,s="actor";const o=(f,g)=>{const _=document.createElement(f);return g!==void 0&&(_.textContent=g),_},a=(f,g)=>{const _=o("button",f);return _.type="button",_.addEventListener("click",g),_},l=(f,g="text")=>{const _=o("input");return _.type=g,_.value=f,_},c=(f,g)=>{const _=o("select");for(const[m,u]of f){const R=o("option",u);R.value=m,_.append(R)}return _.value=g,_},p=(f,g)=>{const _=o("label");return _.append(document.createTextNode(f),g),_};function d(){e(structuredClone(n)),h()}function h(){i.replaceChildren(),i.append(o("h2","人物与物件假设"),o("p","自行添加人物、物件和位置；所有内容均是你的假设。"));const f=o("div");n.entities.length||f.append(o("p","尚未添加人物或物件。"));for(const te of n.entities){const V=o("div"),q=o("p"),oe=te.position?te.position.join(" / "):"坐标未知";let Me="";if(te.position&&te.world!=="unknown"&&t){const ve=t();Me=" · 坐标区域："+cc(ve.rooms,te.position,ve.caseId==="case3")}q.textContent=`${te.kind==="actor"?"人物":"物件"}：${te.label} · ${te.location||"位置描述未填写"} · ${te.world==="unknown"?"世界未知":te.world==="real"?"现实":"锚定"} · ${oe}${Me} · ${te.massKg===null?"重量未知":te.massKg+" kg"} · ${te.binding.kind==="unknown"?"绑定未知":te.binding.kind==="unbound"?"假设未绑定":"假设绑定 "+te.binding.sessionId}`,V.append(q,a("编辑 "+te.label,()=>{r=te.id,h()}),a("删除 "+te.label,()=>{confirm(`删除“${te.label}”的这条假设？`)&&(n.entities=n.entities.filter(ve=>ve.id!==te.id),r===te.id&&(r=null),d())})),f.append(V)}i.append(f);const g=o("div");g.append(a("新增人物",()=>{s="actor",r=null,h()}),a("新增物件",()=>{s="object",r=null,h()})),i.append(g);const _=n.entities.find(te=>te.id===r),m=_?.kind??s,u=o("form");u.append(o("h3",_?"编辑假设":m==="actor"?"新增人物":"新增物件"));const R=l(_?.label??""),A=l(_?.massKg===null||_?.massKg===void 0?"":String(_.massKg),"number"),E=l(_?.location??""),T=o("textarea");R.required=!0,R.maxLength=80,A.min="0.001",A.max="100000",A.step="any",E.maxLength=160,T.maxLength=2e3,T.value=_?.notes??"";const b=c([["unknown","未知"],["real","现实"],["anchor","锚定"]],_?.world??"unknown"),y=[0,1,2].map(te=>{const V=l(_?.position?String(_.position[te]):"","number");return V.step="any",V.min="-9999",V.max="9999",V}),D=c([["unknown","未知"],["unbound","假设未绑定"],["bound","假设已绑定"]],_?.binding.kind??"unknown"),M=l(_?.anchorSessionId??"");M.maxLength=80;const x=l(_?.binding.kind==="bound"?_.binding.sessionId:"");x.maxLength=80;const C=l("","checkbox");C.checked=_?.wearable??!1,u.append(p("名称",R),p("重量（kg，留空为未知）",A),p("位置描述（可留空）",E),p("所在世界",b));const U=o("fieldset");U.append(o("legend","所选世界的坐标（米；全部留空为未知）")),["东向 x","北向 y","高度 z"].forEach((te,V)=>U.append(p(te,y[V]))),U.append(o("p","锚定实体只在选中对应独立会话时显示；会话标识可在时间线中查看。坐标使用所选世界自身的轴。切换世界后，请重新核对坐标；坐标未知时不会在模型上显示。")),t&&U.append(a("使用地图上的现实探针",()=>{const te=U.querySelector("[data-probe-status]");if(b.value==="unknown"){te.textContent="请先选择所在世界。";return}const V=t();if(b.value==="anchor"&&!V.anchorToReal){te.textContent="两边门态尚未确定，无法计算锚定世界的探针坐标。";return}const q=b.value==="anchor"?tt(Co(V.anchorToReal),V.probe):V.probe;y.forEach((oe,Me)=>oe.value=String(Math.round(q[Me]*1e3)/1e3)),te.textContent="已填入探针对应坐标；保存后生效。"}));const z=o("p");z.dataset.probeStatus="",z.setAttribute("role","status"),U.append(z),u.append(U,p("锚定世界所属会话标识（未知留空）",M),p("绑定状态",D),p("已绑定时填写会话标识",x)),m==="object"&&u.append(p("这是穿戴的衣物或饰品（参与总重量）",C)),u.append(p("备注（可留空）",T));const k=o("p");k.setAttribute("role","status"),u.append(k);const N=o("button",_?"保存修改":"添加假设");N.type="submit",u.append(N),u.addEventListener("submit",te=>{te.preventDefault();const V=R.value.trim(),q=A.value.trim()===""?null:Number(A.value);if(!V||q!==null&&(!Number.isFinite(q)||q<=0||q>1e5)){k.textContent="请填写名称；重量留空或填写大于0的数值。";return}const oe=y.map(P=>P.value.trim());let Me=null;if(oe.some(Boolean)){if(oe.some(je=>!je)){k.textContent="坐标需全部填写，或全部留空。";return}const P=oe.map(Number);if(P.some(je=>!Number.isFinite(je)||Math.abs(je)>=1e4)){k.textContent="坐标必须是 -10000 到 10000 之间的有限数字。";return}Me=P}let ve={kind:"unknown"};if(D.value==="unbound"&&(ve={kind:"unbound"}),D.value==="bound"){if(!x.value.trim()){k.textContent="请填写绑定会话标识。";return}ve={kind:"bound",sessionId:x.value.trim()}}if(!_&&n.entities.length>=200){k.textContent="已达到200项，请先导出归档。";return}let Ge=_?.id??`entity-${n.nextId++}`;for(;!_&&n.entities.some(P=>P.id===Ge);)Ge=`entity-${n.nextId++}`;const ft={id:Ge,kind:m,label:V,massKg:q,location:E.value.trim(),world:b.value,position:Me,anchorSessionId:M.value.trim(),binding:ve,wearable:m==="object"&&C.checked,notes:T.value};_?n.entities=n.entities.map(P=>P.id===_.id?ft:P):n.entities.push(ft),r=null,d()}),i.append(u);const G=n.entities.filter(te=>te.kind==="actor"),Y=n.entities.filter(te=>te.kind==="object"),I=o("form");I.append(o("h3","检查一次携带假设"),o("p","选择携带者和其他人物或物件，只检查你填写的重量、接触及既有绑定；不会生成角色行动。"));const j=c([["","请选择人物"],...G.map(te=>[te.id,te.label])],"");I.append(p("携带者",j));const Q=o("fieldset");Q.append(o("legend","被携带实体（包括穿戴衣饰）"));const $=[];for(const te of[...Y,...G]){const V=l("","checkbox");$.push({entity:te,control:V}),Q.append(p((te.kind==="actor"?"人物：":"物件：")+te.label,V))}$.length||Q.append(o("p","尚未添加人物或物件。")),I.append(Q);const ae=c([["unknown","未知"],["yes","假设接触"],["no","假设未接触"]],"unknown");I.append(p("触发时与非衣饰物件接触",ae));const ge=o("output");ge.setAttribute("aria-live","polite");const ye=o("button","检查已选条件");ye.type="submit",I.append(ye,ge),I.addEventListener("submit",te=>{te.preventDefault();const V=G.find(oe=>oe.id===j.value);if(!V){ge.textContent="请先选择人物。";return}const q=Al(V,$.filter(oe=>oe.control.checked).map(oe=>oe.entity),ae.value);ge.textContent={determined:"已计算局部条件",violated:"已输入条件存在冲突",undetermined:"信息不足"}[q.status]+`：
`+q.messages.join(`
`)}),i.append(I)}return h(),{getState:()=>structuredClone(n),setState:f=>{n=lc(f),r=null,h()}}}const uc=[{number:"01",real:"OUT_LOCKED",anchor:"OUT_LOCKED"},{number:"02",real:"OUT_UNLOCKED",anchor:"OUT_LOCKED"},{number:"03",real:"IN_UNLOCKED",anchor:"OUT_LOCKED"},{number:"04",real:"IN_LOCKED",anchor:"OUT_LOCKED"},{number:"05",real:"OUT_UNLOCKED",anchor:"OUT_UNLOCKED"},{number:"06",real:"OUT_LOCKED",anchor:"OUT_UNLOCKED"},{number:"07",real:"IN_UNLOCKED",anchor:"OUT_UNLOCKED"},{number:"08",real:"IN_LOCKED",anchor:"OUT_UNLOCKED"},{number:"09",real:"IN_UNLOCKED",anchor:"IN_UNLOCKED"},{number:"10",real:"OUT_LOCKED",anchor:"IN_UNLOCKED"},{number:"11",real:"OUT_UNLOCKED",anchor:"IN_UNLOCKED"},{number:"12",real:"IN_LOCKED",anchor:"IN_UNLOCKED"},{number:"13",real:"IN_LOCKED",anchor:"IN_LOCKED"},{number:"14",real:"OUT_LOCKED",anchor:"IN_LOCKED"},{number:"15",real:"OUT_UNLOCKED",anchor:"IN_LOCKED"},{number:"16",real:"IN_UNLOCKED",anchor:"IN_LOCKED"}];function Rl(i,e){return uc.find(t=>t.real===i&&t.anchor===e)}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Do="180",Ti={ROTATE:0,DOLLY:1,PAN:2},vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cl=0,Jo=1,Pl=2,dc=1,Dl=2,fn=3,Ln=0,Ut=1,Xt=2,Pn=0,Ai=1,Qo=2,ea=3,ta=4,Ul=5,Xn=100,Ll=101,Il=102,Nl=103,Ol=104,Fl=200,Bl=201,zl=202,kl=203,Os=204,Fs=205,Hl=206,Vl=207,Gl=208,Wl=209,Xl=210,ql=211,Yl=212,Kl=213,jl=214,Bs=0,zs=1,ks=2,Pi=3,Hs=4,Vs=5,Gs=6,Ws=7,hc=0,$l=1,Zl=2,Dn=0,Jl=1,Ql=2,eu=3,tu=4,nu=5,iu=6,ru=7,fc=300,Di=301,Ui=302,Xs=303,qs=304,Yr=306,Ys=1e3,Yn=1001,Ks=1002,en=1003,su=1004,cr=1005,rn=1006,ts=1007,Kn=1008,vn=1009,pc=1010,mc=1011,Ki=1012,Uo=1013,jn=1014,gn=1015,nr=1016,Lo=1017,Io=1018,ji=1020,gc=35902,_c=35899,vc=1021,xc=1022,Qt=1023,$i=1026,Zi=1027,Mc=1028,No=1029,Sc=1030,Oo=1031,Fo=1033,Nr=33776,Or=33777,Fr=33778,Br=33779,js=35840,$s=35841,Zs=35842,Js=35843,Qs=36196,eo=37492,to=37496,no=37808,io=37809,ro=37810,so=37811,oo=37812,ao=37813,co=37814,lo=37815,uo=37816,ho=37817,fo=37818,po=37819,mo=37820,go=37821,_o=36492,vo=36494,xo=36495,Mo=36283,So=36284,Eo=36285,yo=36286,ou=3200,au=3201,cu=0,lu=1,Cn="",Gt="srgb",Li="srgb-linear",Hr="linear",Je="srgb",ii=7680,na=519,uu=512,du=513,hu=514,Ec=515,fu=516,pu=517,mu=518,gu=519,ia=35044,ra="300 es",sn=2e3,Vr=2001;class Qn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sa=1234567;const qi=Math.PI/180,Ji=180/Math.PI;function Ni(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function We(i,e,t){return Math.max(e,Math.min(t,i))}function Bo(i,e){return(i%e+e)%e}function _u(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function vu(i,e,t){return i!==e?(t-i)/(e-i):0}function Yi(i,e,t){return(1-t)*i+t*e}function xu(i,e,t,n){return Yi(i,e,1-Math.exp(-t*n))}function Mu(i,e=1){return e-Math.abs(Bo(i,e*2)-e)}function Su(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Eu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function yu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function bu(i,e){return i+Math.random()*(e-i)}function Tu(i){return i*(.5-Math.random())}function Au(i){i!==void 0&&(sa=i);let e=sa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wu(i){return i*qi}function Ru(i){return i*Ji}function Cu(i){return(i&i-1)===0&&i!==0}function Pu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Du(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Uu(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),p=o((e+n)/2),d=s((e-n)/2),h=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*p,l*d,l*h,a*c);break;case"YZY":i.set(l*h,a*p,l*d,a*c);break;case"ZXZ":i.set(l*d,l*h,a*p,a*c);break;case"XZX":i.set(a*p,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*p,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*p,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function _i(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const yc={DEG2RAD:qi,RAD2DEG:Ji,generateUUID:Ni,clamp:We,euclideanModulo:Bo,mapLinear:_u,inverseLerp:vu,lerp:Yi,damp:xu,pingpong:Mu,smoothstep:Su,smootherstep:Eu,randInt:yu,randFloat:bu,randFloatSpread:Tu,seededRandom:Au,degToRad:wu,radToDeg:Ru,isPowerOfTwo:Cu,ceilPowerOfTwo:Pu,floorPowerOfTwo:Du,setQuaternionFromProperEuler:Uu,normalize:bt,denormalize:_i};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $n{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],p=n[r+2],d=n[r+3];const h=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=p,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==h||c!==f||p!==g){let m=1-a;const u=l*h+c*f+p*g+d*_,R=u>=0?1:-1,A=1-u*u;if(A>Number.EPSILON){const T=Math.sqrt(A),b=Math.atan2(T,u*R);m=Math.sin(m*b)/T,a=Math.sin(a*b)/T}const E=a*R;if(l=l*m+h*E,c=c*m+f*E,p=p*m+g*E,d=d*m+_*E,m===1-a){const T=1/Math.sqrt(l*l+c*c+p*p+d*d);l*=T,c*=T,p*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=p,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],p=n[r+3],d=s[o],h=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+p*d+l*f-c*h,e[t+1]=l*g+p*h+c*d-a*f,e[t+2]=c*g+p*f+a*h-l*d,e[t+3]=p*g-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),p=a(r/2),d=a(s/2),h=l(n/2),f=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*p*d+c*f*g,this._y=c*f*d-h*p*g,this._z=c*p*g+h*f*d,this._w=c*p*d-h*f*g;break;case"YXZ":this._x=h*p*d+c*f*g,this._y=c*f*d-h*p*g,this._z=c*p*g-h*f*d,this._w=c*p*d+h*f*g;break;case"ZXY":this._x=h*p*d-c*f*g,this._y=c*f*d+h*p*g,this._z=c*p*g+h*f*d,this._w=c*p*d-h*f*g;break;case"ZYX":this._x=h*p*d-c*f*g,this._y=c*f*d+h*p*g,this._z=c*p*g-h*f*d,this._w=c*p*d+h*f*g;break;case"YZX":this._x=h*p*d+c*f*g,this._y=c*f*d+h*p*g,this._z=c*p*g-h*f*d,this._w=c*p*d-h*f*g;break;case"XZY":this._x=h*p*d-c*f*g,this._y=c*f*d-h*p*g,this._z=c*p*g+h*f*d,this._w=c*p*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],p=t[6],d=t[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(p-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(p-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+p)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+p)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,p=t._w;return this._x=n*p+o*a+r*c-s*l,this._y=r*p+o*l+s*a-n*c,this._z=s*p+o*c+n*l-r*a,this._w=o*p-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),p=Math.atan2(c,a),d=Math.sin((1-t)*p)/c,h=Math.sin(t*p)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(oa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(oa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),p=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+l*c+o*d-a*p,this.y=n+l*p+a*c-s*d,this.z=r+l*d+s*p-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ns.copy(this).projectOnVector(e),this.sub(ns)}reflect(e){return this.sub(ns.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ns=new B,oa=new $n;class ze{constructor(e,t,n,r,s,o,a,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const p=this.elements;return p[0]=e,p[1]=r,p[2]=a,p[3]=t,p[4]=s,p[5]=l,p[6]=n,p[7]=o,p[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],p=n[4],d=n[7],h=n[2],f=n[5],g=n[8],_=r[0],m=r[3],u=r[6],R=r[1],A=r[4],E=r[7],T=r[2],b=r[5],y=r[8];return s[0]=o*_+a*R+l*T,s[3]=o*m+a*A+l*b,s[6]=o*u+a*E+l*y,s[1]=c*_+p*R+d*T,s[4]=c*m+p*A+d*b,s[7]=c*u+p*E+d*y,s[2]=h*_+f*R+g*T,s[5]=h*m+f*A+g*b,s[8]=h*u+f*E+g*y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],p=e[8];return t*o*p-t*a*c-n*s*p+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],p=e[8],d=p*o-a*c,h=a*l-p*s,f=c*s-o*l,g=t*d+n*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-p*n)*_,e[2]=(a*n-r*o)*_,e[3]=h*_,e[4]=(p*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(is.makeScale(e,t)),this}rotate(e){return this.premultiply(is.makeRotation(-e)),this}translate(e,t){return this.premultiply(is.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const is=new ze;function bc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lu(){const i=Gr("canvas");return i.style.display="block",i}const aa={};function Qi(i){i in aa||(aa[i]=!0,console.warn(i))}function Iu(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const ca=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),la=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nu(){const i={enabled:!0,workingColorSpace:Li,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Je&&(r.r=_n(r.r),r.g=_n(r.g),r.b=_n(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Je&&(r.r=wi(r.r),r.g=wi(r.g),r.b=wi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Cn?Hr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Qi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Qi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Li]:{primaries:e,whitePoint:n,transfer:Hr,toXYZ:ca,fromXYZ:la,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:Je,toXYZ:ca,fromXYZ:la,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),i}const Ye=Nu();function _n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ri;class Ou{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ri===void 0&&(ri=Gr("canvas")),ri.width=e.width,ri.height=e.height;const r=ri.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ri}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=_n(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_n(t[n]/255)*255):t[n]=_n(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fu=0;class zo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=Ni(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(rs(r[o].image)):s.push(rs(r[o]))}else s=rs(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function rs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ou.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bu=0;const ss=new B;class Lt extends Qn{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=Yn,r=Yn,s=rn,o=Kn,a=Qt,l=vn,c=Lt.DEFAULT_ANISOTROPY,p=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=Ni(),this.name="",this.source=new zo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ss).x}get height(){return this.source.getSize(ss).y}get depth(){return this.source.getSize(ss).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ys:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case Ks:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ys:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case Ks:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=fc;Lt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],p=l[4],d=l[8],h=l[1],f=l[5],g=l[9],_=l[2],m=l[6],u=l[10];if(Math.abs(p-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(p+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,E=(f+1)/2,T=(u+1)/2,b=(p+h)/4,y=(d+_)/4,D=(g+m)/4;return A>E&&A>T?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=b/n,s=y/n):E>T?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=b/r,s=D/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=y/s,r=D/s),this.set(n,r,s,t),this}let R=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-p)*(h-p));return Math.abs(R)<.001&&(R=1),this.x=(m-g)/R,this.y=(d-_)/R,this.z=(h-p)/R,this.w=Math.acos((c+f+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zu extends Qn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Lt(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new zo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends zu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Tc extends Lt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ku extends Lt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oi{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kt):Kt.fromBufferAttribute(s,o),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lr.copy(n.boundingBox)),lr.applyMatrix4(e.matrixWorld),this.union(lr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zi),ur.subVectors(this.max,zi),si.subVectors(e.a,zi),oi.subVectors(e.b,zi),ai.subVectors(e.c,zi),Mn.subVectors(oi,si),Sn.subVectors(ai,oi),Bn.subVectors(si,ai);let t=[0,-Mn.z,Mn.y,0,-Sn.z,Sn.y,0,-Bn.z,Bn.y,Mn.z,0,-Mn.x,Sn.z,0,-Sn.x,Bn.z,0,-Bn.x,-Mn.y,Mn.x,0,-Sn.y,Sn.x,0,-Bn.y,Bn.x,0];return!os(t,si,oi,ai,ur)||(t=[1,0,0,0,1,0,0,0,1],!os(t,si,oi,ai,ur))?!1:(dr.crossVectors(Mn,Sn),t=[dr.x,dr.y,dr.z],os(t,si,oi,ai,ur))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const cn=[new B,new B,new B,new B,new B,new B,new B,new B],Kt=new B,lr=new Oi,si=new B,oi=new B,ai=new B,Mn=new B,Sn=new B,Bn=new B,zi=new B,ur=new B,dr=new B,zn=new B;function os(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){zn.fromArray(i,s);const a=r.x*Math.abs(zn.x)+r.y*Math.abs(zn.y)+r.z*Math.abs(zn.z),l=e.dot(zn),c=t.dot(zn),p=n.dot(zn);if(Math.max(-Math.max(l,c,p),Math.min(l,c,p))>a)return!1}return!0}const Hu=new Oi,ki=new B,as=new B;class Kr{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Hu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ki.subVectors(e,this.center);const t=ki.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ki,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(as.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ki.copy(e.center).add(as)),this.expandByPoint(ki.copy(e.center).sub(as))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ln=new B,cs=new B,hr=new B,En=new B,ls=new B,fr=new B,us=new B;class ko{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ln.copy(this.origin).addScaledVector(this.direction,t),ln.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){cs.copy(e).add(t).multiplyScalar(.5),hr.copy(t).sub(e).normalize(),En.copy(this.origin).sub(cs);const s=e.distanceTo(t)*.5,o=-this.direction.dot(hr),a=En.dot(this.direction),l=-En.dot(hr),c=En.lengthSq(),p=Math.abs(1-o*o);let d,h,f,g;if(p>0)if(d=o*l-a,h=o*a-l,g=s*p,d>=0)if(h>=-g)if(h<=g){const _=1/p;d*=_,h*=_,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(cs).addScaledVector(hr,h),f}intersectSphere(e,t){ln.subVectors(e.center,this.origin);const n=ln.dot(this.direction),r=ln.dot(ln)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,p=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),p>=0?(s=(e.min.y-h.y)*p,o=(e.max.y-h.y)*p):(s=(e.max.y-h.y)*p,o=(e.min.y-h.y)*p),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ln)!==null}intersectTriangle(e,t,n,r,s){ls.subVectors(t,e),fr.subVectors(n,e),us.crossVectors(ls,fr);let o=this.direction.dot(us),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;En.subVectors(this.origin,e);const l=a*this.direction.dot(fr.crossVectors(En,fr));if(l<0)return null;const c=a*this.direction.dot(ls.cross(En));if(c<0||l+c>o)return null;const p=-a*En.dot(us);return p<0?null:this.at(p/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,n,r,s,o,a,l,c,p,d,h,f,g,_,m){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,p,d,h,f,g,_,m)}set(e,t,n,r,s,o,a,l,c,p,d,h,f,g,_,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=p,u[10]=d,u[14]=h,u[3]=f,u[7]=g,u[11]=_,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ci.setFromMatrixColumn(e,0).length(),s=1/ci.setFromMatrixColumn(e,1).length(),o=1/ci.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),p=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*p,f=o*d,g=a*p,_=a*d;t[0]=l*p,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*p,f=l*d,g=c*p,_=c*d;t[0]=h+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*p,t[9]=-a,t[2]=f*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*p,f=l*d,g=c*p,_=c*d;t[0]=h-_*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*p,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*p,f=o*d,g=a*p,_=a*d;t[0]=l*p,t[4]=g*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*p,t[4]=_-h*d,t[8]=g*d+f,t[1]=d,t[5]=o*p,t[9]=-a*p,t[2]=-c*p,t[6]=f*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*p,t[4]=-d,t[8]=c*p,t[1]=h*d+_,t[5]=o*p,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*p,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vu,e,Gu)}lookAt(e,t,n){const r=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),yn.crossVectors(n,Ft),yn.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),yn.crossVectors(n,Ft)),yn.normalize(),pr.crossVectors(Ft,yn),r[0]=yn.x,r[4]=pr.x,r[8]=Ft.x,r[1]=yn.y,r[5]=pr.y,r[9]=Ft.y,r[2]=yn.z,r[6]=pr.z,r[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],p=n[1],d=n[5],h=n[9],f=n[13],g=n[2],_=n[6],m=n[10],u=n[14],R=n[3],A=n[7],E=n[11],T=n[15],b=r[0],y=r[4],D=r[8],M=r[12],x=r[1],C=r[5],U=r[9],z=r[13],k=r[2],N=r[6],G=r[10],Y=r[14],I=r[3],j=r[7],Q=r[11],$=r[15];return s[0]=o*b+a*x+l*k+c*I,s[4]=o*y+a*C+l*N+c*j,s[8]=o*D+a*U+l*G+c*Q,s[12]=o*M+a*z+l*Y+c*$,s[1]=p*b+d*x+h*k+f*I,s[5]=p*y+d*C+h*N+f*j,s[9]=p*D+d*U+h*G+f*Q,s[13]=p*M+d*z+h*Y+f*$,s[2]=g*b+_*x+m*k+u*I,s[6]=g*y+_*C+m*N+u*j,s[10]=g*D+_*U+m*G+u*Q,s[14]=g*M+_*z+m*Y+u*$,s[3]=R*b+A*x+E*k+T*I,s[7]=R*y+A*C+E*N+T*j,s[11]=R*D+A*U+E*G+T*Q,s[15]=R*M+A*z+E*Y+T*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],p=e[2],d=e[6],h=e[10],f=e[14],g=e[3],_=e[7],m=e[11],u=e[15];return g*(+s*l*d-r*c*d-s*a*h+n*c*h+r*a*f-n*l*f)+_*(+t*l*f-t*c*h+s*o*h-r*o*f+r*c*p-s*l*p)+m*(+t*c*d-t*a*f-s*o*d+n*o*f+s*a*p-n*c*p)+u*(-r*a*p-t*l*d+t*a*h+r*o*d-n*o*h+n*l*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],p=e[8],d=e[9],h=e[10],f=e[11],g=e[12],_=e[13],m=e[14],u=e[15],R=d*m*c-_*h*c+_*l*f-a*m*f-d*l*u+a*h*u,A=g*h*c-p*m*c-g*l*f+o*m*f+p*l*u-o*h*u,E=p*_*c-g*d*c+g*a*f-o*_*f-p*a*u+o*d*u,T=g*d*l-p*_*l-g*a*h+o*_*h+p*a*m-o*d*m,b=t*R+n*A+r*E+s*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/b;return e[0]=R*y,e[1]=(_*h*s-d*m*s-_*r*f+n*m*f+d*r*u-n*h*u)*y,e[2]=(a*m*s-_*l*s+_*r*c-n*m*c-a*r*u+n*l*u)*y,e[3]=(d*l*s-a*h*s-d*r*c+n*h*c+a*r*f-n*l*f)*y,e[4]=A*y,e[5]=(p*m*s-g*h*s+g*r*f-t*m*f-p*r*u+t*h*u)*y,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*u-t*l*u)*y,e[7]=(o*h*s-p*l*s+p*r*c-t*h*c-o*r*f+t*l*f)*y,e[8]=E*y,e[9]=(g*d*s-p*_*s-g*n*f+t*_*f+p*n*u-t*d*u)*y,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*u+t*a*u)*y,e[11]=(p*a*s-o*d*s-p*n*c+t*d*c+o*n*f-t*a*f)*y,e[12]=T*y,e[13]=(p*_*r-g*d*r+g*n*h-t*_*h-p*n*m+t*d*m)*y,e[14]=(g*a*r-o*_*r-g*n*l+t*_*l+o*n*m-t*a*m)*y,e[15]=(o*d*r-p*a*r+p*n*l-t*d*l-o*n*h+t*a*h)*y,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,p=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,p*a+n,p*l-r*o,0,c*l-r*a,p*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,p=o+o,d=a+a,h=s*c,f=s*p,g=s*d,_=o*p,m=o*d,u=a*d,R=l*c,A=l*p,E=l*d,T=n.x,b=n.y,y=n.z;return r[0]=(1-(_+u))*T,r[1]=(f+E)*T,r[2]=(g-A)*T,r[3]=0,r[4]=(f-E)*b,r[5]=(1-(h+u))*b,r[6]=(m+R)*b,r[7]=0,r[8]=(g+A)*y,r[9]=(m-R)*y,r[10]=(1-(h+_))*y,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=ci.set(r[0],r[1],r[2]).length();const o=ci.set(r[4],r[5],r[6]).length(),a=ci.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],jt.copy(this);const c=1/s,p=1/o,d=1/a;return jt.elements[0]*=c,jt.elements[1]*=c,jt.elements[2]*=c,jt.elements[4]*=p,jt.elements[5]*=p,jt.elements[6]*=p,jt.elements[8]*=d,jt.elements[9]*=d,jt.elements[10]*=d,t.setFromRotationMatrix(jt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=sn,l=!1){const c=this.elements,p=2*s/(t-e),d=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===sn)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Vr)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=p,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=sn,l=!1){const c=this.elements,p=2/(t-e),d=2/(n-r),h=-(t+e)/(t-e),f=-(n+r)/(n-r);let g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===sn)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===Vr)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=p,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ci=new B,jt=new dt,Vu=new B(0,0,0),Gu=new B(1,1,1),yn=new B,pr=new B,Ft=new B,ua=new dt,da=new $n;class xn{constructor(e=0,t=0,n=0,r=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],p=r[9],d=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-p,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-p,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ua.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ua,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return da.setFromEuler(this),this.setFromQuaternion(da,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class Ac{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wu=0;const ha=new B,li=new $n,un=new dt,mr=new B,Hi=new B,Xu=new B,qu=new $n,fa=new B(1,0,0),pa=new B(0,1,0),ma=new B(0,0,1),ga={type:"added"},Yu={type:"removed"},ui={type:"childadded",child:null},ds={type:"childremoved",child:null};class It extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new B,t=new xn,n=new $n,r=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new ze}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ac,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.multiply(li),this}rotateOnWorldAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.premultiply(li),this}rotateX(e){return this.rotateOnAxis(fa,e)}rotateY(e){return this.rotateOnAxis(pa,e)}rotateZ(e){return this.rotateOnAxis(ma,e)}translateOnAxis(e,t){return ha.copy(e).applyQuaternion(this.quaternion),this.position.add(ha.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fa,e)}translateY(e){return this.translateOnAxis(pa,e)}translateZ(e){return this.translateOnAxis(ma,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?mr.copy(e):mr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(Hi,mr,this.up):un.lookAt(mr,Hi,this.up),this.quaternion.setFromRotationMatrix(un),r&&(un.extractRotation(r.matrixWorld),li.setFromRotationMatrix(un),this.quaternion.premultiply(li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ga),ui.child=e,this.dispatchEvent(ui),ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yu),ds.child=e,this.dispatchEvent(ds),ds.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),un.multiply(e.parent.matrixWorld)),e.applyMatrix4(un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ga),ui.child=e,this.dispatchEvent(ui),ui.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,e,Xu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,qu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,p=l.length;c<p;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),p=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),p.length>0&&(n.images=p),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const p=a[c];delete p.metadata,l.push(p)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}It.DEFAULT_UP=new B(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $t=new B,dn=new B,hs=new B,hn=new B,di=new B,hi=new B,_a=new B,fs=new B,ps=new B,ms=new B,gs=new ut,_s=new ut,vs=new ut;class Jt{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),$t.subVectors(e,t),r.cross($t);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){$t.subVectors(r,t),dn.subVectors(n,t),hs.subVectors(e,t);const o=$t.dot($t),a=$t.dot(dn),l=$t.dot(hs),c=dn.dot(dn),p=dn.dot(hs),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-a*p)*h,g=(o*p-a*l)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,hn.x),l.addScaledVector(o,hn.y),l.addScaledVector(a,hn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return gs.setScalar(0),_s.setScalar(0),vs.setScalar(0),gs.fromBufferAttribute(e,t),_s.fromBufferAttribute(e,n),vs.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(gs,s.x),o.addScaledVector(_s,s.y),o.addScaledVector(vs,s.z),o}static isFrontFacing(e,t,n,r){return $t.subVectors(n,t),dn.subVectors(e,t),$t.cross(dn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),$t.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Jt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;di.subVectors(r,n),hi.subVectors(s,n),fs.subVectors(e,n);const l=di.dot(fs),c=hi.dot(fs);if(l<=0&&c<=0)return t.copy(n);ps.subVectors(e,r);const p=di.dot(ps),d=hi.dot(ps);if(p>=0&&d<=p)return t.copy(r);const h=l*d-p*c;if(h<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(n).addScaledVector(di,o);ms.subVectors(e,s);const f=di.dot(ms),g=hi.dot(ms);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(hi,a);const m=p*g-f*d;if(m<=0&&d-p>=0&&f-g>=0)return _a.subVectors(s,r),a=(d-p)/(d-p+(f-g)),t.copy(r).addScaledVector(_a,a);const u=1/(m+_+h);return o=_*u,a=h*u,t.copy(n).addScaledVector(di,o).addScaledVector(hi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},gr={h:0,s:0,l:0};function xs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ye.workingColorSpace){if(e=Bo(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=xs(o,s,e+1/3),this.g=xs(o,s,e),this.b=xs(o,s,e-1/3)}return Ye.colorSpaceToWorking(this,r),this}setStyle(e,t=Gt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const n=wc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_n(e.r),this.g=_n(e.g),this.b=_n(e.b),this}copyLinearToSRGB(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return Ye.workingToColorSpace(Et.copy(this),e),Math.round(We(Et.r*255,0,255))*65536+Math.round(We(Et.g*255,0,255))*256+Math.round(We(Et.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(Et.copy(this),t);const n=Et.r,r=Et.g,s=Et.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const p=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=p<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=p,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Gt){Ye.workingToColorSpace(Et.copy(this),e);const t=Et.r,n=Et.g,r=Et.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(bn),this.setHSL(bn.h+e,bn.s+t,bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(gr);const n=Yi(bn.h,gr.h,t),r=Yi(bn.s,gr.s,t),s=Yi(bn.l,gr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new $e;$e.NAMES=wc;let Ku=0;class ir extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=Ai,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Os,this.blendDst=Fs,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Pi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=na,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Os&&(n.blendSrc=this.blendSrc),this.blendDst!==Fs&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==na&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class An extends ir{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new B,_r=new Ve;let ju=0;class on{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ju++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ia,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_r.fromBufferAttribute(this,t),_r.applyMatrix3(e),this.setXY(t,_r.x,_r.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ia&&(e.usage=this.usage),e}}class Rc extends on{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Cc extends on{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mt extends on{constructor(e,t,n){super(new Float32Array(e),t,n)}}let $u=0;const Vt=new dt,Ms=new It,fi=new B,Bt=new Oi,Vi=new Oi,xt=new B;class Mt extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bc(e)?Cc:Rc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,n){return Vt.makeTranslation(e,t,n),this.applyMatrix4(Vt),this}scale(e,t,n){return Vt.makeScale(e,t,n),this.applyMatrix4(Vt),this}lookAt(e){return Ms.lookAt(e),Ms.updateMatrix(),this.applyMatrix4(Ms.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new mt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Bt.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Vi.setFromBufferAttribute(a),this.morphTargetsRelative?(xt.addVectors(Bt.min,Vi.min),Bt.expandByPoint(xt),xt.addVectors(Bt.max,Vi.max),Bt.expandByPoint(xt)):(Bt.expandByPoint(Vi.min),Bt.expandByPoint(Vi.max))}Bt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)xt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(xt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,p=a.count;c<p;c++)xt.fromBufferAttribute(a,c),l&&(fi.fromBufferAttribute(e,c),xt.add(fi)),r=Math.max(r,n.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new B,l[D]=new B;const c=new B,p=new B,d=new B,h=new Ve,f=new Ve,g=new Ve,_=new B,m=new B;function u(D,M,x){c.fromBufferAttribute(n,D),p.fromBufferAttribute(n,M),d.fromBufferAttribute(n,x),h.fromBufferAttribute(s,D),f.fromBufferAttribute(s,M),g.fromBufferAttribute(s,x),p.sub(c),d.sub(c),f.sub(h),g.sub(h);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(_.copy(p).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(C),m.copy(d).multiplyScalar(f.x).addScaledVector(p,-g.x).multiplyScalar(C),a[D].add(_),a[M].add(_),a[x].add(_),l[D].add(m),l[M].add(m),l[x].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let D=0,M=R.length;D<M;++D){const x=R[D],C=x.start,U=x.count;for(let z=C,k=C+U;z<k;z+=3)u(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const A=new B,E=new B,T=new B,b=new B;function y(D){T.fromBufferAttribute(r,D),b.copy(T);const M=a[D];A.copy(M),A.sub(T.multiplyScalar(T.dot(M))).normalize(),E.crossVectors(b,M);const C=E.dot(l[D])<0?-1:1;o.setXYZW(D,A.x,A.y,A.z,C)}for(let D=0,M=R.length;D<M;++D){const x=R[D],C=x.start,U=x.count;for(let z=C,k=C+U;z<k;z+=3)y(e.getX(z+0)),y(e.getX(z+1)),y(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,c=new B,p=new B,d=new B;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),p.subVectors(o,s),d.subVectors(r,s),p.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(p),l.add(p),c.add(p),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),p.subVectors(o,s),d.subVectors(r,s),p.cross(d),n.setXYZ(h+0,p.x,p.y,p.z),n.setXYZ(h+1,p.x,p.y,p.z),n.setXYZ(h+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(a,l){const c=a.array,p=a.itemSize,d=a.normalized,h=new c.constructor(l.length*p);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*p;for(let u=0;u<p;u++)h[g++]=c[f++]}return new on(h,p,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mt,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let p=0,d=c.length;p<d;p++){const h=c[p],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],p=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];p.push(f.toJSON(e.data))}p.length>0&&(r[l]=p,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const p=r[c];this.setAttribute(c,p.clone(t))}const s=e.morphAttributes;for(const c in s){const p=[],d=s[c];for(let h=0,f=d.length;h<f;h++)p.push(d[h].clone(t));this.morphAttributes[c]=p}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,p=o.length;c<p;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const va=new dt,kn=new ko,vr=new Kr,xa=new B,xr=new B,Mr=new B,Sr=new B,Ss=new B,Er=new B,Ma=new B,yr=new B;class wt extends It{constructor(e=new Mt,t=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Er.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const p=a[l],d=s[l];p!==0&&(Ss.fromBufferAttribute(d,e),o?Er.addScaledVector(Ss,p):Er.addScaledVector(Ss.sub(t),p))}t.add(Er)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere),vr.applyMatrix4(s),kn.copy(e.ray).recast(e.near),!(vr.containsPoint(kn.origin)===!1&&(kn.intersectSphere(vr,xa)===null||kn.origin.distanceToSquared(xa)>(e.far-e.near)**2))&&(va.copy(s).invert(),kn.copy(e.ray).applyMatrix4(va),!(n.boundingBox!==null&&kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,kn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,p=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],u=o[m.materialIndex],R=Math.max(m.start,f.start),A=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let E=R,T=A;E<T;E+=3){const b=a.getX(E),y=a.getX(E+1),D=a.getX(E+2);r=br(this,u,e,n,c,p,d,b,y,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,u=_;m<u;m+=3){const R=a.getX(m),A=a.getX(m+1),E=a.getX(m+2);r=br(this,o,e,n,c,p,d,R,A,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],u=o[m.materialIndex],R=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let E=R,T=A;E<T;E+=3){const b=E,y=E+1,D=E+2;r=br(this,u,e,n,c,p,d,b,y,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,u=_;m<u;m+=3){const R=m,A=m+1,E=m+2;r=br(this,o,e,n,c,p,d,R,A,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Zu(i,e,t,n,r,s,o,a){let l;if(e.side===Ut?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Ln,a),l===null)return null;yr.copy(a),yr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(yr);return c<t.near||c>t.far?null:{distance:c,point:yr.clone(),object:i}}function br(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,xr),i.getVertexPosition(l,Mr),i.getVertexPosition(c,Sr);const p=Zu(i,e,t,n,xr,Mr,Sr,Ma);if(p){const d=new B;Jt.getBarycoord(Ma,xr,Mr,Sr,d),r&&(p.uv=Jt.getInterpolatedAttribute(r,a,l,c,d,new Ve)),s&&(p.uv1=Jt.getInterpolatedAttribute(s,a,l,c,d,new Ve)),o&&(p.normal=Jt.getInterpolatedAttribute(o,a,l,c,d,new B),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new B,materialIndex:0};Jt.getNormal(xr,Mr,Sr,h.normal),p.face=h,p.barycoord=d}return p}class Jn extends Mt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],p=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(p,3)),this.setAttribute("uv",new mt(d,2));function g(_,m,u,R,A,E,T,b,y,D,M){const x=E/y,C=T/D,U=E/2,z=T/2,k=b/2,N=y+1,G=D+1;let Y=0,I=0;const j=new B;for(let Q=0;Q<G;Q++){const $=Q*C-z;for(let ae=0;ae<N;ae++){const ge=ae*x-U;j[_]=ge*R,j[m]=$*A,j[u]=k,c.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[u]=b>0?1:-1,p.push(j.x,j.y,j.z),d.push(ae/y),d.push(1-Q/D),Y+=1}}for(let Q=0;Q<D;Q++)for(let $=0;$<y;$++){const ae=h+$+N*Q,ge=h+$+N*(Q+1),ye=h+($+1)+N*(Q+1),te=h+($+1)+N*Q;l.push(ae,ge,te),l.push(ge,ye,te),I+=6}a.addGroup(f,I,M),f+=I,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ii(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Tt(i){const e={};for(let t=0;t<i.length;t++){const n=Ii(i[t]);for(const r in n)e[r]=n[r]}return e}function Ju(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Pc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const Qu={clone:Ii,merge:Tt};var ed=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,td=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends ir{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ed,this.fragmentShader=td,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.uniformsGroups=Ju(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Dc extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tn=new B,Sa=new Ve,Ea=new Ve;class Wt extends Dc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ji*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ji*2*Math.atan(Math.tan(qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z)}getViewSize(e,t){return this.getViewBounds(e,Sa,Ea),t.subVectors(Ea,Sa)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const pi=-90,mi=1;class nd extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Wt(pi,mi,e,t);r.layers=this.layers,this.add(r);const s=new Wt(pi,mi,e,t);s.layers=this.layers,this.add(s);const o=new Wt(pi,mi,e,t);o.layers=this.layers,this.add(o);const a=new Wt(pi,mi,e,t);a.layers=this.layers,this.add(a);const l=new Wt(pi,mi,e,t);l.layers=this.layers,this.add(l);const c=new Wt(pi,mi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===sn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,p]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,p),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Uc extends Lt{constructor(e=[],t=Di,n,r,s,o,a,l,c,p){super(e,t,n,r,s,o,a,l,c,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class id extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Uc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Jn(5,5,5),s=new In({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:Pn});s.uniforms.tEquirect.value=t;const o=new wt(r,s),a=t.minFilter;return t.minFilter===Kn&&(t.minFilter=rn),new nd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class Wi extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rd={type:"move"};class Es{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),u=this._getHandJoint(c,_);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const p=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=p.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rd)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Wi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class sd extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ys=new B,od=new B,ad=new ze;class wn{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ys.subVectors(n,t).cross(od.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ys),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ad.getNormalMatrix(e),r=this.coplanarPoint(ys).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new Kr,cd=new Ve(.5,.5),Tr=new B;class Lc{constructor(e=new wn,t=new wn,n=new wn,r=new wn,s=new wn,o=new wn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=sn,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],p=s[4],d=s[5],h=s[6],f=s[7],g=s[8],_=s[9],m=s[10],u=s[11],R=s[12],A=s[13],E=s[14],T=s[15];if(r[0].setComponents(c-o,f-p,u-g,T-R).normalize(),r[1].setComponents(c+o,f+p,u+g,T+R).normalize(),r[2].setComponents(c+a,f+d,u+_,T+A).normalize(),r[3].setComponents(c-a,f-d,u-_,T-A).normalize(),n)r[4].setComponents(l,h,m,E).normalize(),r[5].setComponents(c-l,f-h,u-m,T-E).normalize();else if(r[4].setComponents(c-l,f-h,u-m,T-E).normalize(),t===sn)r[5].setComponents(c+l,f+h,u+m,T+E).normalize();else if(t===Vr)r[5].setComponents(l,h,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(e){Hn.center.set(0,0,0);const t=cd.distanceTo(e.center);return Hn.radius=.7071067811865476+t,Hn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Tr.x=r.normal.x>0?e.max.x:e.min.x,Tr.y=r.normal.y>0?e.max.y:e.min.y,Tr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xi extends ir{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wr=new B,Xr=new B,ya=new dt,Gi=new ko,Ar=new Kr,bs=new B,ba=new B;class bo extends It{constructor(e=new Mt,t=new xi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Wr.fromBufferAttribute(t,r-1),Xr.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Wr.distanceTo(Xr);e.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(r),Ar.radius+=s,e.ray.intersectsSphere(Ar)===!1)return;ya.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(ya);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,p=n.index,h=n.attributes.position;if(p!==null){const f=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const u=p.getX(_),R=p.getX(_+1),A=wr(this,e,Gi,l,u,R,_);A&&t.push(A)}if(this.isLineLoop){const _=p.getX(g-1),m=p.getX(f),u=wr(this,e,Gi,l,_,m,g-1);u&&t.push(u)}}else{const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const u=wr(this,e,Gi,l,_,_+1,_);u&&t.push(u)}if(this.isLineLoop){const _=wr(this,e,Gi,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function wr(i,e,t,n,r,s,o){const a=i.geometry.attributes.position;if(Wr.fromBufferAttribute(a,r),Xr.fromBufferAttribute(a,s),t.distanceSqToSegment(Wr,Xr,bs,ba)>n)return;bs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(bs);if(!(c<e.near||c>e.far))return{distance:c,point:ba.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Ta=new B,Aa=new B;class Rr extends bo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Ta.fromBufferAttribute(t,r),Aa.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Ta.distanceTo(Aa);e.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ic extends Lt{constructor(e,t,n=jn,r,s,o,a=en,l=en,c,p=$i,d=1){if(p!==$i&&p!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,r,s,o,a,l,p,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Nc extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class jr extends Mt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,p=l+1,d=e/a,h=t/l,f=[],g=[],_=[],m=[];for(let u=0;u<p;u++){const R=u*h-o;for(let A=0;A<c;A++){const E=A*d-s;g.push(E,-R,0),_.push(0,0,1),m.push(A/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let R=0;R<a;R++){const A=R+c*u,E=R+c*(u+1),T=R+1+c*(u+1),b=R+1+c*u;f.push(A,E,b),f.push(E,T,b)}this.setIndex(f),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ho extends Mt{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],l=[],c=[],p=[];let d=e;const h=(t-e)/r,f=new B,g=new Ve;for(let _=0;_<=r;_++){for(let m=0;m<=n;m++){const u=s+m/n*o;f.x=d*Math.cos(u),f.y=d*Math.sin(u),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,p.push(g.x,g.y)}d+=h}for(let _=0;_<r;_++){const m=_*(n+1);for(let u=0;u<n;u++){const R=u+m,A=R,E=R+n+1,T=R+n+2,b=R+1;a.push(A,E,b),a.push(E,T,b)}}this.setIndex(a),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Mi extends Mt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const p=[],d=new B,h=new B,f=[],g=[],_=[],m=[];for(let u=0;u<=n;u++){const R=[],A=u/n;let E=0;u===0&&o===0?E=.5/t:u===n&&l===Math.PI&&(E=-.5/t);for(let T=0;T<=t;T++){const b=T/t;d.x=-e*Math.cos(r+b*s)*Math.sin(o+A*a),d.y=e*Math.cos(o+A*a),d.z=e*Math.sin(r+b*s)*Math.sin(o+A*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(b+E,1-A),R.push(c++)}p.push(R)}for(let u=0;u<n;u++)for(let R=0;R<t;R++){const A=p[u][R+1],E=p[u][R],T=p[u+1][R],b=p[u+1][R+1];(u!==0||o>0)&&f.push(A,E,b),(u!==n-1||l<Math.PI)&&f.push(E,T,b)}this.setIndex(f),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ld extends ir{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ud extends ir{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Cr extends xi{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class dd extends Dc{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=p*this.view.offsetY,l=a-p*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class hd extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class wa{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=We(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(We(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class fd extends Qn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Ra(i,e,t,n){const r=pd(n);switch(t){case vc:return i*e;case Mc:return i*e/r.components*r.byteLength;case No:return i*e/r.components*r.byteLength;case Sc:return i*e*2/r.components*r.byteLength;case Oo:return i*e*2/r.components*r.byteLength;case xc:return i*e*3/r.components*r.byteLength;case Qt:return i*e*4/r.components*r.byteLength;case Fo:return i*e*4/r.components*r.byteLength;case Nr:case Or:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fr:case Br:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $s:case Js:return Math.max(i,16)*Math.max(e,8)/4;case js:case Zs:return Math.max(i,8)*Math.max(e,8)/2;case Qs:case eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case to:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case no:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case io:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ro:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case so:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case oo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ao:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case co:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case lo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case uo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ho:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case fo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case po:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case mo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case go:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case _o:case vo:case xo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Mo:case So:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Eo:case yo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pd(i){switch(i){case vn:case pc:return{byteLength:1,components:1};case Ki:case mc:case nr:return{byteLength:2,components:1};case Lo:case Io:return{byteLength:2,components:4};case jn:case Uo:case gn:return{byteLength:4,components:1};case gc:case _c:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Do}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Do);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Oc(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function md(i){const e=new WeakMap;function t(a,l){const c=a.array,p=a.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,p),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const p=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,p);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];i.bufferSubData(c,_.start*p.BYTES_PER_ELEMENT,p,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const p=e.get(a);(!p||p.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var gd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_d=`#ifdef USE_ALPHAHASH
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
#endif`,vd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Md=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ed=`#ifdef USE_AOMAP
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
#endif`,yd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bd=`#ifdef USE_BATCHING
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
#endif`,Td=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ad=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cd=`#ifdef USE_IRIDESCENCE
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
#endif`,Pd=`#ifdef USE_BUMPMAP
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
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zd=`#define PI 3.141592653589793
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
} // validated`,kd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hd=`vec3 transformedNormal = objectNormal;
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
#endif`,Vd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kd=`#ifdef USE_ENVMAP
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
#endif`,jd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$d=`#ifdef USE_ENVMAP
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
#endif`,Zd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jd=`#ifdef USE_ENVMAP
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
#endif`,Qd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,th=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ih=`#ifdef USE_GRADIENTMAP
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
}`,rh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ah=`uniform bool receiveShadow;
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
#endif`,ch=`#ifdef USE_ENVMAP
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
#endif`,lh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fh=`PhysicalMaterial material;
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
#endif`,ph=`struct PhysicalMaterial {
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
}`,mh=`
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
#endif`,gh=`#if defined( RE_IndirectDiffuse )
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
#endif`,_h=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Eh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Th=`#if defined( USE_POINTS_UV )
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
#endif`,Ah=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ch=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ph=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dh=`#ifdef USE_MORPHTARGETS
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
#endif`,Uh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ih=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Oh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bh=`#ifdef USE_NORMALMAP
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
#endif`,zh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$h=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ef=`float getShadowMask() {
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
}`,tf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nf=`#ifdef USE_SKINNING
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
#endif`,rf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sf=`#ifdef USE_SKINNING
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
#endif`,of=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,af=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uf=`#ifdef USE_TRANSMISSION
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
#endif`,df=`#ifdef USE_TRANSMISSION
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
#endif`,hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_f=`uniform sampler2D t2D;
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
}`,vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ef=`#include <common>
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
}`,yf=`#if DEPTH_PACKING == 3200
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
}`,bf=`#define DISTANCE
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
}`,Tf=`#define DISTANCE
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
}`,Af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rf=`uniform float scale;
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
}`,Cf=`uniform vec3 diffuse;
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
}`,Pf=`#include <common>
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
}`,Df=`uniform vec3 diffuse;
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
}`,Uf=`#define LAMBERT
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
}`,Lf=`#define LAMBERT
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
}`,If=`#define MATCAP
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
}`,Nf=`#define MATCAP
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
}`,Of=`#define NORMAL
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
}`,Ff=`#define NORMAL
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
}`,Bf=`#define PHONG
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
}`,zf=`#define PHONG
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
}`,kf=`#define STANDARD
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
}`,Hf=`#define STANDARD
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
}`,Vf=`#define TOON
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
}`,Gf=`#define TOON
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
}`,Wf=`uniform float size;
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
}`,Xf=`uniform vec3 diffuse;
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
}`,qf=`#include <common>
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
}`,Yf=`uniform vec3 color;
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
}`,Kf=`uniform float rotation;
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
}`,jf=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:gd,alphahash_pars_fragment:_d,alphamap_fragment:vd,alphamap_pars_fragment:xd,alphatest_fragment:Md,alphatest_pars_fragment:Sd,aomap_fragment:Ed,aomap_pars_fragment:yd,batching_pars_vertex:bd,batching_vertex:Td,begin_vertex:Ad,beginnormal_vertex:wd,bsdfs:Rd,iridescence_fragment:Cd,bumpmap_pars_fragment:Pd,clipping_planes_fragment:Dd,clipping_planes_pars_fragment:Ud,clipping_planes_pars_vertex:Ld,clipping_planes_vertex:Id,color_fragment:Nd,color_pars_fragment:Od,color_pars_vertex:Fd,color_vertex:Bd,common:zd,cube_uv_reflection_fragment:kd,defaultnormal_vertex:Hd,displacementmap_pars_vertex:Vd,displacementmap_vertex:Gd,emissivemap_fragment:Wd,emissivemap_pars_fragment:Xd,colorspace_fragment:qd,colorspace_pars_fragment:Yd,envmap_fragment:Kd,envmap_common_pars_fragment:jd,envmap_pars_fragment:$d,envmap_pars_vertex:Zd,envmap_physical_pars_fragment:ch,envmap_vertex:Jd,fog_vertex:Qd,fog_pars_vertex:eh,fog_fragment:th,fog_pars_fragment:nh,gradientmap_pars_fragment:ih,lightmap_pars_fragment:rh,lights_lambert_fragment:sh,lights_lambert_pars_fragment:oh,lights_pars_begin:ah,lights_toon_fragment:lh,lights_toon_pars_fragment:uh,lights_phong_fragment:dh,lights_phong_pars_fragment:hh,lights_physical_fragment:fh,lights_physical_pars_fragment:ph,lights_fragment_begin:mh,lights_fragment_maps:gh,lights_fragment_end:_h,logdepthbuf_fragment:vh,logdepthbuf_pars_fragment:xh,logdepthbuf_pars_vertex:Mh,logdepthbuf_vertex:Sh,map_fragment:Eh,map_pars_fragment:yh,map_particle_fragment:bh,map_particle_pars_fragment:Th,metalnessmap_fragment:Ah,metalnessmap_pars_fragment:wh,morphinstance_vertex:Rh,morphcolor_vertex:Ch,morphnormal_vertex:Ph,morphtarget_pars_vertex:Dh,morphtarget_vertex:Uh,normal_fragment_begin:Lh,normal_fragment_maps:Ih,normal_pars_fragment:Nh,normal_pars_vertex:Oh,normal_vertex:Fh,normalmap_pars_fragment:Bh,clearcoat_normal_fragment_begin:zh,clearcoat_normal_fragment_maps:kh,clearcoat_pars_fragment:Hh,iridescence_pars_fragment:Vh,opaque_fragment:Gh,packing:Wh,premultiplied_alpha_fragment:Xh,project_vertex:qh,dithering_fragment:Yh,dithering_pars_fragment:Kh,roughnessmap_fragment:jh,roughnessmap_pars_fragment:$h,shadowmap_pars_fragment:Zh,shadowmap_pars_vertex:Jh,shadowmap_vertex:Qh,shadowmask_pars_fragment:ef,skinbase_vertex:tf,skinning_pars_vertex:nf,skinning_vertex:rf,skinnormal_vertex:sf,specularmap_fragment:of,specularmap_pars_fragment:af,tonemapping_fragment:cf,tonemapping_pars_fragment:lf,transmission_fragment:uf,transmission_pars_fragment:df,uv_pars_fragment:hf,uv_pars_vertex:ff,uv_vertex:pf,worldpos_vertex:mf,background_vert:gf,background_frag:_f,backgroundCube_vert:vf,backgroundCube_frag:xf,cube_vert:Mf,cube_frag:Sf,depth_vert:Ef,depth_frag:yf,distanceRGBA_vert:bf,distanceRGBA_frag:Tf,equirect_vert:Af,equirect_frag:wf,linedashed_vert:Rf,linedashed_frag:Cf,meshbasic_vert:Pf,meshbasic_frag:Df,meshlambert_vert:Uf,meshlambert_frag:Lf,meshmatcap_vert:If,meshmatcap_frag:Nf,meshnormal_vert:Of,meshnormal_frag:Ff,meshphong_vert:Bf,meshphong_frag:zf,meshphysical_vert:kf,meshphysical_frag:Hf,meshtoon_vert:Vf,meshtoon_frag:Gf,points_vert:Wf,points_frag:Xf,shadow_vert:qf,shadow_frag:Yf,sprite_vert:Kf,sprite_frag:jf},de={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},nn={basic:{uniforms:Tt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Tt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new $e(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Tt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Tt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Tt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new $e(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Tt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Tt([de.points,de.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Tt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Tt([de.common,de.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Tt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Tt([de.sprite,de.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Tt([de.common,de.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Tt([de.lights,de.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};nn.physical={uniforms:Tt([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Pr={r:0,b:0,g:0},Vn=new xn,$f=new dt;function Zf(i,e,t,n,r,s,o){const a=new $e(0);let l=s===!0?0:1,c,p,d=null,h=0,f=null;function g(A){let E=A.isScene===!0?A.background:null;return E&&E.isTexture&&(E=(A.backgroundBlurriness>0?t:e).get(E)),E}function _(A){let E=!1;const T=g(A);T===null?u(a,l):T&&T.isColor&&(u(T,1),E=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(A,E){const T=g(E);T&&(T.isCubeTexture||T.mapping===Yr)?(p===void 0&&(p=new wt(new Jn(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Ii(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(b,y,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),Vn.copy(E.backgroundRotation),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),p.material.uniforms.envMap.value=T,p.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4($f.makeRotationFromEuler(Vn)),p.material.toneMapped=Ye.getTransfer(T.colorSpace)!==Je,(d!==T||h!==T.version||f!==i.toneMapping)&&(p.material.needsUpdate=!0,d=T,h=T.version,f=i.toneMapping),p.layers.enableAll(),A.unshift(p,p.geometry,p.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new wt(new jr(2,2),new In({name:"BackgroundMaterial",uniforms:Ii(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(T.colorSpace)!==Je,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||h!==T.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=T,h=T.version,f=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function u(A,E){A.getRGB(Pr,Pc(i)),n.buffers.color.setClear(Pr.r,Pr.g,Pr.b,E,o)}function R(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,E=1){a.set(A),l=E,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,u(a,l)},render:_,addToRenderList:m,dispose:R}}function Jf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,o=!1;function a(x,C,U,z,k){let N=!1;const G=d(z,U,C);s!==G&&(s=G,c(s.object)),N=f(x,z,U,k),N&&g(x,z,U,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,E(x,C,U,z),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function p(x){return i.deleteVertexArray(x)}function d(x,C,U){const z=U.wireframe===!0;let k=n[x.id];k===void 0&&(k={},n[x.id]=k);let N=k[C.id];N===void 0&&(N={},k[C.id]=N);let G=N[z];return G===void 0&&(G=h(l()),N[z]=G),G}function h(x){const C=[],U=[],z=[];for(let k=0;k<t;k++)C[k]=0,U[k]=0,z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:z,object:x,attributes:{},index:null}}function f(x,C,U,z){const k=s.attributes,N=C.attributes;let G=0;const Y=U.getAttributes();for(const I in Y)if(Y[I].location>=0){const Q=k[I];let $=N[I];if($===void 0&&(I==="instanceMatrix"&&x.instanceMatrix&&($=x.instanceMatrix),I==="instanceColor"&&x.instanceColor&&($=x.instanceColor)),Q===void 0||Q.attribute!==$||$&&Q.data!==$.data)return!0;G++}return s.attributesNum!==G||s.index!==z}function g(x,C,U,z){const k={},N=C.attributes;let G=0;const Y=U.getAttributes();for(const I in Y)if(Y[I].location>=0){let Q=N[I];Q===void 0&&(I==="instanceMatrix"&&x.instanceMatrix&&(Q=x.instanceMatrix),I==="instanceColor"&&x.instanceColor&&(Q=x.instanceColor));const $={};$.attribute=Q,Q&&Q.data&&($.data=Q.data),k[I]=$,G++}s.attributes=k,s.attributesNum=G,s.index=z}function _(){const x=s.newAttributes;for(let C=0,U=x.length;C<U;C++)x[C]=0}function m(x){u(x,0)}function u(x,C){const U=s.newAttributes,z=s.enabledAttributes,k=s.attributeDivisors;U[x]=1,z[x]===0&&(i.enableVertexAttribArray(x),z[x]=1),k[x]!==C&&(i.vertexAttribDivisor(x,C),k[x]=C)}function R(){const x=s.newAttributes,C=s.enabledAttributes;for(let U=0,z=C.length;U<z;U++)C[U]!==x[U]&&(i.disableVertexAttribArray(U),C[U]=0)}function A(x,C,U,z,k,N,G){G===!0?i.vertexAttribIPointer(x,C,U,k,N):i.vertexAttribPointer(x,C,U,z,k,N)}function E(x,C,U,z){_();const k=z.attributes,N=U.getAttributes(),G=C.defaultAttributeValues;for(const Y in N){const I=N[Y];if(I.location>=0){let j=k[Y];if(j===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(j=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(j=x.instanceColor)),j!==void 0){const Q=j.normalized,$=j.itemSize,ae=e.get(j);if(ae===void 0)continue;const ge=ae.buffer,ye=ae.type,te=ae.bytesPerElement,V=ye===i.INT||ye===i.UNSIGNED_INT||j.gpuType===Uo;if(j.isInterleavedBufferAttribute){const q=j.data,oe=q.stride,Me=j.offset;if(q.isInstancedInterleavedBuffer){for(let ve=0;ve<I.locationSize;ve++)u(I.location+ve,q.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ve=0;ve<I.locationSize;ve++)m(I.location+ve);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let ve=0;ve<I.locationSize;ve++)A(I.location+ve,$/I.locationSize,ye,Q,oe*te,(Me+$/I.locationSize*ve)*te,V)}else{if(j.isInstancedBufferAttribute){for(let q=0;q<I.locationSize;q++)u(I.location+q,j.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let q=0;q<I.locationSize;q++)m(I.location+q);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let q=0;q<I.locationSize;q++)A(I.location+q,$/I.locationSize,ye,Q,$*te,$/I.locationSize*q*te,V)}}else if(G!==void 0){const Q=G[Y];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(I.location,Q);break;case 3:i.vertexAttrib3fv(I.location,Q);break;case 4:i.vertexAttrib4fv(I.location,Q);break;default:i.vertexAttrib1fv(I.location,Q)}}}}R()}function T(){D();for(const x in n){const C=n[x];for(const U in C){const z=C[U];for(const k in z)p(z[k].object),delete z[k];delete C[U]}delete n[x]}}function b(x){if(n[x.id]===void 0)return;const C=n[x.id];for(const U in C){const z=C[U];for(const k in z)p(z[k].object),delete z[k];delete C[U]}delete n[x.id]}function y(x){for(const C in n){const U=n[C];if(U[x.id]===void 0)continue;const z=U[x.id];for(const k in z)p(z[k].object),delete z[k];delete U[x.id]}}function D(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:y,initAttributes:_,enableAttribute:m,disableUnusedAttributes:R}}function Qf(i,e,t){let n;function r(c){n=c}function s(c,p){i.drawArrays(n,c,p),t.update(p,n,1)}function o(c,p,d){d!==0&&(i.drawArraysInstanced(n,c,p,d),t.update(p,n,d))}function a(c,p,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,p,0,d);let f=0;for(let g=0;g<d;g++)f+=p[g];t.update(f,n,1)}function l(c,p,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],p[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,p,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=p[_]*h[_];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ep(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(y){return!(y!==Qt&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){const D=y===nr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==vn&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==gn&&!D)}function l(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const p=l(c);p!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",p,"instead."),c=p);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:R,maxVaryings:A,maxFragmentUniforms:E,vertexTextures:T,maxSamples:b}}function tp(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new wn,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||r;return r=h,n=d.length,f},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=p(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!r||g===null||g.length===0||s&&!m)s?p(null):c();else{const R=s?0:n,A=R*4;let E=u.clippingState||null;l.value=E,E=p(g,h,A,f);for(let T=0;T!==A;++T)E[T]=t[T];u.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(d,h,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const u=f+_*4,R=h.matrixWorldInverse;a.getNormalMatrix(R),(m===null||m.length<u)&&(m=new Float32Array(u));for(let A=0,E=f;A!==_;++A,E+=4)o.copy(d[A]).applyMatrix4(R,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function np(i){let e=new WeakMap;function t(o,a){return a===Xs?o.mapping=Di:a===qs&&(o.mapping=Ui),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xs||a===qs)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new id(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Si=4,Ca=[.125,.215,.35,.446,.526,.582],qn=20,Ts=new dd,Pa=new $e;let As=null,ws=0,Rs=0,Cs=!1;const Wn=(1+Math.sqrt(5))/2,gi=1/Wn,Da=[new B(-Wn,gi,0),new B(Wn,gi,0),new B(-gi,0,Wn),new B(gi,0,Wn),new B(0,Wn,-gi),new B(0,Wn,gi),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],ip=new B;class Ua{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=ip}=s;As=this._renderer.getRenderTarget(),ws=this._renderer.getActiveCubeFace(),Rs=this._renderer.getActiveMipmapLevel(),Cs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Na(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ia(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(As,ws,Rs),this._renderer.xr.enabled=Cs,e.scissorTest=!1,Dr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Di||e.mapping===Ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),As=this._renderer.getRenderTarget(),ws=this._renderer.getActiveCubeFace(),Rs=this._renderer.getActiveMipmapLevel(),Cs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:nr,format:Qt,colorSpace:Li,depthBuffer:!1},r=La(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=La(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rp(s)),this._blurMaterial=sp(s,e,t)}return r}_compileMaterial(e){const t=new wt(this._lodPlanes[0],e);this._renderer.compile(t,Ts)}_sceneToCubeUV(e,t,n,r,s){const l=new Wt(90,1,t,n),c=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Pa),d.toneMapping=Dn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const _=new An({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),m=new wt(new Jn,_);let u=!1;const R=e.background;R?R.isColor&&(_.color.copy(R),e.background=null,u=!0):(_.color.copy(Pa),u=!0);for(let A=0;A<6;A++){const E=A%3;E===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+p[A],s.y,s.z)):E===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+p[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+p[A]));const T=this._cubeSize;Dr(r,E*T,A>2?T:0,T,T),d.setRenderTarget(r),u&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=R}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Di||e.mapping===Ui;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Na()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ia());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new wt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Dr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ts)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Da[(r-s-1)%Da.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,d=new wt(this._lodPlanes[r],c),h=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*qn-1),_=s/g,m=isFinite(s)?1+Math.floor(p*_):qn;m>qn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qn}`);const u=[];let R=0;for(let y=0;y<qn;++y){const D=y/_,M=Math.exp(-D*D/2);u.push(M),y===0?R+=M:y<m&&(R+=2*M)}for(let y=0;y<u.length;y++)u[y]=u[y]/R;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:A}=this;h.dTheta.value=g,h.mipInt.value=A-n;const E=this._sizeLods[r],T=3*E*(r>A-Si?r-A+Si:0),b=4*(this._cubeSize-E);Dr(t,T,b,3*E,2*E),l.setRenderTarget(t),l.render(d,Ts)}}function rp(i){const e=[],t=[],n=[];let r=i;const s=i-Si+1+Ca.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Si?l=Ca[o-i+Si-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),p=-c,d=1+c,h=[p,p,d,p,d,d,p,p,d,d,p,d],f=6,g=6,_=3,m=2,u=1,R=new Float32Array(_*g*f),A=new Float32Array(m*g*f),E=new Float32Array(u*g*f);for(let b=0;b<f;b++){const y=b%3*2/3-1,D=b>2?0:-1,M=[y,D,0,y+2/3,D,0,y+2/3,D+1,0,y,D,0,y+2/3,D+1,0,y,D+1,0];R.set(M,_*g*b),A.set(h,m*g*b);const x=[b,b,b,b,b,b];E.set(x,u*g*b)}const T=new Mt;T.setAttribute("position",new on(R,_)),T.setAttribute("uv",new on(A,m)),T.setAttribute("faceIndex",new on(E,u)),e.push(T),r>Si&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function La(i,e,t){const n=new Zn(i,e,t);return n.texture.mapping=Yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Dr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function sp(i,e,t){const n=new Float32Array(qn),r=new B(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vo(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Ia(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vo(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Na(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Vo(){return`

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
	`}function op(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Xs||l===qs,p=l===Di||l===Ui;if(c||p){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Ua(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||p&&f&&r(f)?(t===null&&(t=new Ua(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let p=0;p<c;p++)a[p]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ap(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Qi("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function cp(i,e,t,n){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],i.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const R=f.array;_=f.version;for(let A=0,E=R.length;A<E;A+=3){const T=R[A+0],b=R[A+1],y=R[A+2];h.push(T,b,b,y,y,T)}}else if(g!==void 0){const R=g.array;_=g.version;for(let A=0,E=R.length/3-1;A<E;A+=3){const T=A+0,b=A+1,y=A+2;h.push(T,b,b,y,y,T)}}else return;const m=new(bc(h)?Cc:Rc)(h,1);m.version=_;const u=s.get(d);u&&e.remove(u),s.set(d,m)}function p(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:p}}function lp(i,e,t){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){i.drawElements(n,f,s,h*o),t.update(f,n,1)}function c(h,f,g){g!==0&&(i.drawElementsInstanced(n,f,s,h*o,g),t.update(f,n,g))}function p(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,g);let m=0;for(let u=0;u<g;u++)m+=f[u];t.update(m,n,1)}function d(h,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<h.length;u++)c(h[u]/o,f[u],_[u]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,h,0,_,0,g);let u=0;for(let R=0;R<g;R++)u+=f[R]*_[R];t.update(u,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=p,this.renderMultiDrawInstances=d}function up(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function dp(i,e,t){const n=new WeakMap,r=new ut;function s(o,a,l){const c=o.morphTargetInfluences,p=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=p!==void 0?p.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let x=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var f=x;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],R=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),_===!0&&(E=2),m===!0&&(E=3);let T=a.attributes.position.count*E,b=1;T>e.maxTextureSize&&(b=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const y=new Float32Array(T*b*4*d),D=new Tc(y,T,b,d);D.type=gn,D.needsUpdate=!0;const M=E*4;for(let C=0;C<d;C++){const U=u[C],z=R[C],k=A[C],N=T*b*4*C;for(let G=0;G<U.count;G++){const Y=G*M;g===!0&&(r.fromBufferAttribute(U,G),y[N+Y+0]=r.x,y[N+Y+1]=r.y,y[N+Y+2]=r.z,y[N+Y+3]=0),_===!0&&(r.fromBufferAttribute(z,G),y[N+Y+4]=r.x,y[N+Y+5]=r.y,y[N+Y+6]=r.z,y[N+Y+7]=0),m===!0&&(r.fromBufferAttribute(k,G),y[N+Y+8]=r.x,y[N+Y+9]=r.y,y[N+Y+10]=r.z,y[N+Y+11]=k.itemSize===4?r.w:1)}}h={count:d,texture:D,size:new Ve(T,b)},n.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function hp(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,p=l.geometry,d=e.get(l,p);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Fc=new Lt,Oa=new Ic(1,1),Bc=new Tc,zc=new ku,kc=new Uc,Fa=[],Ba=[],za=new Float32Array(16),ka=new Float32Array(9),Ha=new Float32Array(4);function Fi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Fa[r];if(s===void 0&&(s=new Float32Array(r),Fa[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function $r(i,e){let t=Ba[e];t===void 0&&(t=new Int32Array(e),Ba[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function fp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function pp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2fv(this.addr,e),_t(t,e)}}function mp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;i.uniform3fv(this.addr,e),_t(t,e)}}function gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4fv(this.addr,e),_t(t,e)}}function _p(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;Ha.set(n),i.uniformMatrix2fv(this.addr,!1,Ha),_t(t,n)}}function vp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;ka.set(n),i.uniformMatrix3fv(this.addr,!1,ka),_t(t,n)}}function xp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;za.set(n),i.uniformMatrix4fv(this.addr,!1,za),_t(t,n)}}function Mp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2iv(this.addr,e),_t(t,e)}}function Ep(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3iv(this.addr,e),_t(t,e)}}function yp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4iv(this.addr,e),_t(t,e)}}function bp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Tp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2uiv(this.addr,e),_t(t,e)}}function Ap(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3uiv(this.addr,e),_t(t,e)}}function wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4uiv(this.addr,e),_t(t,e)}}function Rp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Oa.compareFunction=Ec,s=Oa):s=Fc,t.setTexture2D(e||s,r)}function Cp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||zc,r)}function Pp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||kc,r)}function Dp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Bc,r)}function Up(i){switch(i){case 5126:return fp;case 35664:return pp;case 35665:return mp;case 35666:return gp;case 35674:return _p;case 35675:return vp;case 35676:return xp;case 5124:case 35670:return Mp;case 35667:case 35671:return Sp;case 35668:case 35672:return Ep;case 35669:case 35673:return yp;case 5125:return bp;case 36294:return Tp;case 36295:return Ap;case 36296:return wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Rp;case 35679:case 36299:case 36307:return Cp;case 35680:case 36300:case 36308:case 36293:return Pp;case 36289:case 36303:case 36311:case 36292:return Dp}}function Lp(i,e){i.uniform1fv(this.addr,e)}function Ip(i,e){const t=Fi(e,this.size,2);i.uniform2fv(this.addr,t)}function Np(i,e){const t=Fi(e,this.size,3);i.uniform3fv(this.addr,t)}function Op(i,e){const t=Fi(e,this.size,4);i.uniform4fv(this.addr,t)}function Fp(i,e){const t=Fi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Bp(i,e){const t=Fi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function zp(i,e){const t=Fi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function kp(i,e){i.uniform1iv(this.addr,e)}function Hp(i,e){i.uniform2iv(this.addr,e)}function Vp(i,e){i.uniform3iv(this.addr,e)}function Gp(i,e){i.uniform4iv(this.addr,e)}function Wp(i,e){i.uniform1uiv(this.addr,e)}function Xp(i,e){i.uniform2uiv(this.addr,e)}function qp(i,e){i.uniform3uiv(this.addr,e)}function Yp(i,e){i.uniform4uiv(this.addr,e)}function Kp(i,e,t){const n=this.cache,r=e.length,s=$r(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Fc,s[o])}function jp(i,e,t){const n=this.cache,r=e.length,s=$r(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||zc,s[o])}function $p(i,e,t){const n=this.cache,r=e.length,s=$r(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||kc,s[o])}function Zp(i,e,t){const n=this.cache,r=e.length,s=$r(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Bc,s[o])}function Jp(i){switch(i){case 5126:return Lp;case 35664:return Ip;case 35665:return Np;case 35666:return Op;case 35674:return Fp;case 35675:return Bp;case 35676:return zp;case 5124:case 35670:return kp;case 35667:case 35671:return Hp;case 35668:case 35672:return Vp;case 35669:case 35673:return Gp;case 5125:return Wp;case 36294:return Xp;case 36295:return qp;case 36296:return Yp;case 35678:case 36198:case 36298:case 36306:case 35682:return Kp;case 35679:case 36299:case 36307:return jp;case 35680:case 36300:case 36308:case 36293:return $p;case 36289:case 36303:case 36311:case 36292:return Zp}}class Qp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Up(t.type)}}class em{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jp(t.type)}}class tm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Ps=/(\w+)(\])?(\[|\.)?/g;function Va(i,e){i.seq.push(e),i.map[e.id]=e}function nm(i,e,t){const n=i.name,r=n.length;for(Ps.lastIndex=0;;){const s=Ps.exec(n),o=Ps.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Va(t,c===void 0?new Qp(a,i,e):new em(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new tm(a),Va(t,d)),t=d}}}class zr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);nm(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Ga(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const im=37297;let rm=0;function sm(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Wa=new ze;function om(i){Ye._getMatrix(Wa,Ye.workingColorSpace,i);const e=`mat3( ${Wa.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(i)){case Hr:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Xa(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+sm(i.getShaderSource(e),a)}else return s}function am(i,e){const t=om(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function cm(i,e){let t;switch(e){case Jl:t="Linear";break;case Ql:t="Reinhard";break;case eu:t="Cineon";break;case tu:t="ACESFilmic";break;case iu:t="AgX";break;case ru:t="Neutral";break;case nu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ur=new B;function lm(){Ye.getLuminanceCoefficients(Ur);const i=Ur.x.toFixed(4),e=Ur.y.toFixed(4),t=Ur.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function um(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xi).join(`
`)}function dm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Xi(i){return i!==""}function qa(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ya(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fm=/^[ \t]*#include +<([\w\d./]+)>/gm;function To(i){return i.replace(fm,mm)}const pm=new Map;function mm(i,e){let t=He[e];if(t===void 0){const n=pm.get(e);if(n!==void 0)t=He[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return To(t)}const gm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ka(i){return i.replace(gm,_m)}function _m(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ja(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function vm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===dc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Dl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fn&&(e="SHADOWMAP_TYPE_VSM"),e}function xm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Di:case Ui:e="ENVMAP_TYPE_CUBE";break;case Yr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ui:e="ENVMAP_MODE_REFRACTION";break}return e}function Sm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hc:e="ENVMAP_BLENDING_MULTIPLY";break;case $l:e="ENVMAP_BLENDING_MIX";break;case Zl:e="ENVMAP_BLENDING_ADD";break}return e}function Em(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ym(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=vm(t),c=xm(t),p=Mm(t),d=Sm(t),h=Em(t),f=um(t),g=dm(s),_=r.createProgram();let m,u,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xi).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xi).join(`
`),u.length>0&&(u+=`
`)):(m=[ja(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xi).join(`
`),u=[ja(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+p:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?He.tonemapping_pars_fragment:"",t.toneMapping!==Dn?cm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,am("linearToOutputTexel",t.outputColorSpace),lm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xi).join(`
`)),o=To(o),o=qa(o,t),o=Ya(o,t),a=To(a),a=qa(a,t),a=Ya(a,t),o=Ka(o),a=Ka(a),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===ra?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ra?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const A=R+m+o,E=R+u+a,T=Ga(r,r.VERTEX_SHADER,A),b=Ga(r,r.FRAGMENT_SHADER,E);r.attachShader(_,T),r.attachShader(_,b),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function y(C){if(i.debug.checkShaderErrors){const U=r.getProgramInfoLog(_)||"",z=r.getShaderInfoLog(T)||"",k=r.getShaderInfoLog(b)||"",N=U.trim(),G=z.trim(),Y=k.trim();let I=!0,j=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(I=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,T,b);else{const Q=Xa(r,T,"vertex"),$=Xa(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+Q+`
`+$)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(G===""||Y==="")&&(j=!1);j&&(C.diagnostics={runnable:I,programLog:N,vertexShader:{log:G,prefix:m},fragmentShader:{log:Y,prefix:u}})}r.deleteShader(T),r.deleteShader(b),D=new zr(r,_),M=hm(r,_)}let D;this.getUniforms=function(){return D===void 0&&y(this),D};let M;this.getAttributes=function(){return M===void 0&&y(this),M};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(_,im)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=b,this}let bm=0;class Tm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Am(e),t.set(e,n)),n}}class Am{constructor(e){this.id=bm++,this.code=e,this.usedTimes=0}}function wm(i,e,t,n,r,s,o){const a=new Ac,l=new Tm,c=new Set,p=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,x,C,U,z){const k=U.fog,N=z.geometry,G=M.isMeshStandardMaterial?U.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||G),I=Y&&Y.mapping===Yr?Y.image.height:null,j=g[M.type];M.precision!==null&&(f=r.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const Q=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,$=Q!==void 0?Q.length:0;let ae=0;N.morphAttributes.position!==void 0&&(ae=1),N.morphAttributes.normal!==void 0&&(ae=2),N.morphAttributes.color!==void 0&&(ae=3);let ge,ye,te,V;if(j){const Ke=nn[j];ge=Ke.vertexShader,ye=Ke.fragmentShader}else ge=M.vertexShader,ye=M.fragmentShader,l.update(M),te=l.getVertexShaderID(M),V=l.getFragmentShaderID(M);const q=i.getRenderTarget(),oe=i.state.buffers.depth.getReversed(),Me=z.isInstancedMesh===!0,ve=z.isBatchedMesh===!0,Ge=!!M.map,ft=!!M.matcap,P=!!Y,je=!!M.aoMap,Fe=!!M.lightMap,Ie=!!M.bumpMap,be=!!M.normalMap,rt=!!M.displacementMap,Te=!!M.emissiveMap,ke=!!M.metalnessMap,vt=!!M.roughnessMap,lt=M.anisotropy>0,w=M.clearcoat>0,v=M.dispersion>0,H=M.iridescence>0,Z=M.sheen>0,ee=M.transmission>0,K=lt&&!!M.anisotropyMap,Ce=w&&!!M.clearcoatMap,le=w&&!!M.clearcoatNormalMap,Ae=w&&!!M.clearcoatRoughnessMap,we=H&&!!M.iridescenceMap,re=H&&!!M.iridescenceThicknessMap,me=Z&&!!M.sheenColorMap,Le=Z&&!!M.sheenRoughnessMap,Re=!!M.specularMap,he=!!M.specularColorMap,Be=!!M.specularIntensityMap,L=ee&&!!M.transmissionMap,se=ee&&!!M.thicknessMap,ue=!!M.gradientMap,xe=!!M.alphaMap,ne=M.alphaTest>0,J=!!M.alphaHash,Ee=!!M.extensions;let Oe=Dn;M.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Oe=i.toneMapping);const nt={shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:ge,fragmentShader:ye,defines:M.defines,customVertexShaderID:te,customFragmentShaderID:V,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:ve,batchingColor:ve&&z._colorsTexture!==null,instancing:Me,instancingColor:Me&&z.instanceColor!==null,instancingMorph:Me&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Li,alphaToCoverage:!!M.alphaToCoverage,map:Ge,matcap:ft,envMap:P,envMapMode:P&&Y.mapping,envMapCubeUVHeight:I,aoMap:je,lightMap:Fe,bumpMap:Ie,normalMap:be,displacementMap:h&&rt,emissiveMap:Te,normalMapObjectSpace:be&&M.normalMapType===lu,normalMapTangentSpace:be&&M.normalMapType===cu,metalnessMap:ke,roughnessMap:vt,anisotropy:lt,anisotropyMap:K,clearcoat:w,clearcoatMap:Ce,clearcoatNormalMap:le,clearcoatRoughnessMap:Ae,dispersion:v,iridescence:H,iridescenceMap:we,iridescenceThicknessMap:re,sheen:Z,sheenColorMap:me,sheenRoughnessMap:Le,specularMap:Re,specularColorMap:he,specularIntensityMap:Be,transmission:ee,transmissionMap:L,thicknessMap:se,gradientMap:ue,opaque:M.transparent===!1&&M.blending===Ai&&M.alphaToCoverage===!1,alphaMap:xe,alphaTest:ne,alphaHash:J,combine:M.combine,mapUv:Ge&&_(M.map.channel),aoMapUv:je&&_(M.aoMap.channel),lightMapUv:Fe&&_(M.lightMap.channel),bumpMapUv:Ie&&_(M.bumpMap.channel),normalMapUv:be&&_(M.normalMap.channel),displacementMapUv:rt&&_(M.displacementMap.channel),emissiveMapUv:Te&&_(M.emissiveMap.channel),metalnessMapUv:ke&&_(M.metalnessMap.channel),roughnessMapUv:vt&&_(M.roughnessMap.channel),anisotropyMapUv:K&&_(M.anisotropyMap.channel),clearcoatMapUv:Ce&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:me&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Le&&_(M.sheenRoughnessMap.channel),specularMapUv:Re&&_(M.specularMap.channel),specularColorMapUv:he&&_(M.specularColorMap.channel),specularIntensityMapUv:Be&&_(M.specularIntensityMap.channel),transmissionMapUv:L&&_(M.transmissionMap.channel),thicknessMapUv:se&&_(M.thicknessMap.channel),alphaMapUv:xe&&_(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(be||lt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!N.attributes.uv&&(Ge||xe),fog:!!k,useFog:M.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:oe,skinning:z.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:ae,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ge&&M.map.isVideoTexture===!0&&Ye.getTransfer(M.map.colorSpace)===Je,decodeVideoTextureEmissive:Te&&M.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(M.emissiveMap.colorSpace)===Je,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Xt,flipSided:M.side===Ut,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ee&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&M.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function u(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)x.push(C),x.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(R(x,M),A(x,M),x.push(i.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function R(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function A(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function E(M){const x=g[M.type];let C;if(x){const U=nn[x];C=Qu.clone(U.uniforms)}else C=M.uniforms;return C}function T(M,x){let C;for(let U=0,z=p.length;U<z;U++){const k=p[U];if(k.cacheKey===x){C=k,++C.usedTimes;break}}return C===void 0&&(C=new ym(i,x,M,s),p.push(C)),C}function b(M){if(--M.usedTimes===0){const x=p.indexOf(M);p[x]=p[p.length-1],p.pop(),M.destroy()}}function y(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:E,acquireProgram:T,releaseProgram:b,releaseShaderCache:y,programs:p,dispose:D}}function Rm(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Cm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function $a(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Za(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,h,f,g,_,m){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=f,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=m),e++,u}function a(d,h,f,g,_,m){const u=o(d,h,f,g,_,m);f.transmission>0?n.push(u):f.transparent===!0?r.push(u):t.push(u)}function l(d,h,f,g,_,m){const u=o(d,h,f,g,_,m);f.transmission>0?n.unshift(u):f.transparent===!0?r.unshift(u):t.unshift(u)}function c(d,h){t.length>1&&t.sort(d||Cm),n.length>1&&n.sort(h||$a),r.length>1&&r.sort(h||$a)}function p(){for(let d=e,h=i.length;d<h;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:p,sort:c}}function Pm(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Za,i.set(n,[o])):r>=s.length?(o=new Za,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Dm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new $e};break;case"SpotLight":t={position:new B,direction:new B,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function Um(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Lm=0;function Im(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Nm(i){const e=new Dm,t=Um(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const r=new B,s=new dt,o=new dt;function a(c){let p=0,d=0,h=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,_=0,m=0,u=0,R=0,A=0,E=0,T=0,b=0,y=0;c.sort(Im);for(let M=0,x=c.length;M<x;M++){const C=c[M],U=C.color,z=C.intensity,k=C.distance,N=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)p+=U.r*z,d+=U.g*z,h+=U.b*z;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],z);y++}else if(C.isDirectionalLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Y=C.shadow,I=t.get(C);I.shadowIntensity=Y.intensity,I.shadowBias=Y.bias,I.shadowNormalBias=Y.normalBias,I.shadowRadius=Y.radius,I.shadowMapSize=Y.mapSize,n.directionalShadow[f]=I,n.directionalShadowMap[f]=N,n.directionalShadowMatrix[f]=C.shadow.matrix,R++}n.directional[f]=G,f++}else if(C.isSpotLight){const G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(U).multiplyScalar(z),G.distance=k,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[_]=G;const Y=C.shadow;if(C.map&&(n.spotLightMap[T]=C.map,T++,Y.updateMatrices(C),C.castShadow&&b++),n.spotLightMatrix[_]=Y.matrix,C.castShadow){const I=t.get(C);I.shadowIntensity=Y.intensity,I.shadowBias=Y.bias,I.shadowNormalBias=Y.normalBias,I.shadowRadius=Y.radius,I.shadowMapSize=Y.mapSize,n.spotShadow[_]=I,n.spotShadowMap[_]=N,E++}_++}else if(C.isRectAreaLight){const G=e.get(C);G.color.copy(U).multiplyScalar(z),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=G,m++}else if(C.isPointLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const Y=C.shadow,I=t.get(C);I.shadowIntensity=Y.intensity,I.shadowBias=Y.bias,I.shadowNormalBias=Y.normalBias,I.shadowRadius=Y.radius,I.shadowMapSize=Y.mapSize,I.shadowCameraNear=Y.camera.near,I.shadowCameraFar=Y.camera.far,n.pointShadow[g]=I,n.pointShadowMap[g]=N,n.pointShadowMatrix[g]=C.shadow.matrix,A++}n.point[g]=G,g++}else if(C.isHemisphereLight){const G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(z),G.groundColor.copy(C.groundColor).multiplyScalar(z),n.hemi[u]=G,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=d,n.ambient[2]=h;const D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==u||D.numDirectionalShadows!==R||D.numPointShadows!==A||D.numSpotShadows!==E||D.numSpotMaps!==T||D.numLightProbes!==y)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=E+T-b,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=y,D.directionalLength=f,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=u,D.numDirectionalShadows=R,D.numPointShadows=A,D.numSpotShadows=E,D.numSpotMaps=T,D.numLightProbes=y,n.version=Lm++)}function l(c,p){let d=0,h=0,f=0,g=0,_=0;const m=p.matrixWorldInverse;for(let u=0,R=c.length;u<R;u++){const A=c[u];if(A.isDirectionalLight){const E=n.directional[d];E.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(A.isSpotLight){const E=n.spot[f];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(A.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(A.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(A.width*.5,0,0),E.halfHeight.set(0,A.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(A.isPointLight){const E=n.point[h];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(m),h++}else if(A.isHemisphereLight){const E=n.hemi[_];E.direction.setFromMatrixPosition(A.matrixWorld),E.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Ja(i){const e=new Nm(i),t=[],n=[];function r(p){c.camera=p,t.length=0,n.length=0}function s(p){t.push(p)}function o(p){n.push(p)}function a(){e.setup(t)}function l(p){e.setupView(t,p)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Om(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ja(i),e.set(r,[a])):s>=o.length?(a=new Ja(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Fm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bm=`uniform sampler2D shadow_pass;
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
}`;function zm(i,e,t){let n=new Lc;const r=new Ve,s=new Ve,o=new ut,a=new ld({depthPacking:au}),l=new ud,c={},p=t.maxTextureSize,d={[Ln]:Ut,[Ut]:Ln,[Xt]:Xt},h=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:Fm,fragmentShader:Bm}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Mt;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new wt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dc;let u=this.type;this.render=function(b,y,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const M=i.getRenderTarget(),x=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Pn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=u!==fn&&this.type===fn,k=u===fn&&this.type!==fn;for(let N=0,G=b.length;N<G;N++){const Y=b[N],I=Y.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const j=I.getFrameExtents();if(r.multiply(j),s.copy(I.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/j.x),r.x=s.x*j.x,I.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/j.y),r.y=s.y*j.y,I.mapSize.y=s.y)),I.map===null||z===!0||k===!0){const $=this.type!==fn?{minFilter:en,magFilter:en}:{};I.map!==null&&I.map.dispose(),I.map=new Zn(r.x,r.y,$),I.map.texture.name=Y.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();const Q=I.getViewportCount();for(let $=0;$<Q;$++){const ae=I.getViewport($);o.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),U.viewport(o),I.updateMatrices(Y,$),n=I.getFrustum(),E(y,D,I.camera,Y,this.type)}I.isPointLightShadow!==!0&&this.type===fn&&R(I,D),I.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(M,x,C)};function R(b,y){const D=e.update(_);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Zn(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(y,null,D,h,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(y,null,D,f,_,null)}function A(b,y,D,M){let x=null;const C=D.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)x=C;else if(x=D.isPointLight===!0?l:a,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){const U=x.uuid,z=y.uuid;let k=c[U];k===void 0&&(k={},c[U]=k);let N=k[z];N===void 0&&(N=x.clone(),k[z]=N,y.addEventListener("dispose",T)),x=N}if(x.visible=y.visible,x.wireframe=y.wireframe,M===fn?x.side=y.shadowSide!==null?y.shadowSide:y.side:x.side=y.shadowSide!==null?y.shadowSide:d[y.side],x.alphaMap=y.alphaMap,x.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,x.map=y.map,x.clipShadows=y.clipShadows,x.clippingPlanes=y.clippingPlanes,x.clipIntersection=y.clipIntersection,x.displacementMap=y.displacementMap,x.displacementScale=y.displacementScale,x.displacementBias=y.displacementBias,x.wireframeLinewidth=y.wireframeLinewidth,x.linewidth=y.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const U=i.properties.get(x);U.light=D}return x}function E(b,y,D,M,x){if(b.visible===!1)return;if(b.layers.test(y.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===fn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,b.matrixWorld);const z=e.update(b),k=b.material;if(Array.isArray(k)){const N=z.groups;for(let G=0,Y=N.length;G<Y;G++){const I=N[G],j=k[I.materialIndex];if(j&&j.visible){const Q=A(b,j,M,x);b.onBeforeShadow(i,b,y,D,z,Q,I),i.renderBufferDirect(D,null,z,Q,b,I),b.onAfterShadow(i,b,y,D,z,Q,I)}}}else if(k.visible){const N=A(b,k,M,x);b.onBeforeShadow(i,b,y,D,z,N,null),i.renderBufferDirect(D,null,z,N,b,null),b.onAfterShadow(i,b,y,D,z,N,null)}}const U=b.children;for(let z=0,k=U.length;z<k;z++)E(U[z],y,D,M,x)}function T(b){b.target.removeEventListener("dispose",T);for(const D in c){const M=c[D],x=b.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const km={[Bs]:zs,[ks]:Gs,[Hs]:Ws,[Pi]:Vs,[zs]:Bs,[Gs]:ks,[Ws]:Hs,[Vs]:Pi};function Hm(i,e){function t(){let L=!1;const se=new ut;let ue=null;const xe=new ut(0,0,0,0);return{setMask:function(ne){ue!==ne&&!L&&(i.colorMask(ne,ne,ne,ne),ue=ne)},setLocked:function(ne){L=ne},setClear:function(ne,J,Ee,Oe,nt){nt===!0&&(ne*=Oe,J*=Oe,Ee*=Oe),se.set(ne,J,Ee,Oe),xe.equals(se)===!1&&(i.clearColor(ne,J,Ee,Oe),xe.copy(se))},reset:function(){L=!1,ue=null,xe.set(-1,0,0,0)}}}function n(){let L=!1,se=!1,ue=null,xe=null,ne=null;return{setReversed:function(J){if(se!==J){const Ee=e.get("EXT_clip_control");J?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),se=J;const Oe=ne;ne=null,this.setClear(Oe)}},getReversed:function(){return se},setTest:function(J){J?q(i.DEPTH_TEST):oe(i.DEPTH_TEST)},setMask:function(J){ue!==J&&!L&&(i.depthMask(J),ue=J)},setFunc:function(J){if(se&&(J=km[J]),xe!==J){switch(J){case Bs:i.depthFunc(i.NEVER);break;case zs:i.depthFunc(i.ALWAYS);break;case ks:i.depthFunc(i.LESS);break;case Pi:i.depthFunc(i.LEQUAL);break;case Hs:i.depthFunc(i.EQUAL);break;case Vs:i.depthFunc(i.GEQUAL);break;case Gs:i.depthFunc(i.GREATER);break;case Ws:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=J}},setLocked:function(J){L=J},setClear:function(J){ne!==J&&(se&&(J=1-J),i.clearDepth(J),ne=J)},reset:function(){L=!1,ue=null,xe=null,ne=null,se=!1}}}function r(){let L=!1,se=null,ue=null,xe=null,ne=null,J=null,Ee=null,Oe=null,nt=null;return{setTest:function(Ke){L||(Ke?q(i.STENCIL_TEST):oe(i.STENCIL_TEST))},setMask:function(Ke){se!==Ke&&!L&&(i.stencilMask(Ke),se=Ke)},setFunc:function(Ke,an,tn){(ue!==Ke||xe!==an||ne!==tn)&&(i.stencilFunc(Ke,an,tn),ue=Ke,xe=an,ne=tn)},setOp:function(Ke,an,tn){(J!==Ke||Ee!==an||Oe!==tn)&&(i.stencilOp(Ke,an,tn),J=Ke,Ee=an,Oe=tn)},setLocked:function(Ke){L=Ke},setClear:function(Ke){nt!==Ke&&(i.clearStencil(Ke),nt=Ke)},reset:function(){L=!1,se=null,ue=null,xe=null,ne=null,J=null,Ee=null,Oe=null,nt=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let p={},d={},h=new WeakMap,f=[],g=null,_=!1,m=null,u=null,R=null,A=null,E=null,T=null,b=null,y=new $e(0,0,0),D=0,M=!1,x=null,C=null,U=null,z=null,k=null;const N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Y=0;const I=i.getParameter(i.VERSION);I.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(I)[1]),G=Y>=1):I.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),G=Y>=2);let j=null,Q={};const $=i.getParameter(i.SCISSOR_BOX),ae=i.getParameter(i.VIEWPORT),ge=new ut().fromArray($),ye=new ut().fromArray(ae);function te(L,se,ue,xe){const ne=new Uint8Array(4),J=i.createTexture();i.bindTexture(L,J),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ee=0;Ee<ue;Ee++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,ne):i.texImage2D(se+Ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ne);return J}const V={};V[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),V[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),V[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),q(i.DEPTH_TEST),o.setFunc(Pi),Ie(!1),be(Jo),q(i.CULL_FACE),je(Pn);function q(L){p[L]!==!0&&(i.enable(L),p[L]=!0)}function oe(L){p[L]!==!1&&(i.disable(L),p[L]=!1)}function Me(L,se){return d[L]!==se?(i.bindFramebuffer(L,se),d[L]=se,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=se),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=se),!0):!1}function ve(L,se){let ue=f,xe=!1;if(L){ue=h.get(se),ue===void 0&&(ue=[],h.set(se,ue));const ne=L.textures;if(ue.length!==ne.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let J=0,Ee=ne.length;J<Ee;J++)ue[J]=i.COLOR_ATTACHMENT0+J;ue.length=ne.length,xe=!0}}else ue[0]!==i.BACK&&(ue[0]=i.BACK,xe=!0);xe&&i.drawBuffers(ue)}function Ge(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const ft={[Xn]:i.FUNC_ADD,[Ll]:i.FUNC_SUBTRACT,[Il]:i.FUNC_REVERSE_SUBTRACT};ft[Nl]=i.MIN,ft[Ol]=i.MAX;const P={[Fl]:i.ZERO,[Bl]:i.ONE,[zl]:i.SRC_COLOR,[Os]:i.SRC_ALPHA,[Xl]:i.SRC_ALPHA_SATURATE,[Gl]:i.DST_COLOR,[Hl]:i.DST_ALPHA,[kl]:i.ONE_MINUS_SRC_COLOR,[Fs]:i.ONE_MINUS_SRC_ALPHA,[Wl]:i.ONE_MINUS_DST_COLOR,[Vl]:i.ONE_MINUS_DST_ALPHA,[ql]:i.CONSTANT_COLOR,[Yl]:i.ONE_MINUS_CONSTANT_COLOR,[Kl]:i.CONSTANT_ALPHA,[jl]:i.ONE_MINUS_CONSTANT_ALPHA};function je(L,se,ue,xe,ne,J,Ee,Oe,nt,Ke){if(L===Pn){_===!0&&(oe(i.BLEND),_=!1);return}if(_===!1&&(q(i.BLEND),_=!0),L!==Ul){if(L!==m||Ke!==M){if((u!==Xn||E!==Xn)&&(i.blendEquation(i.FUNC_ADD),u=Xn,E=Xn),Ke)switch(L){case Ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qo:i.blendFunc(i.ONE,i.ONE);break;case ea:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ta:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ea:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ta:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}R=null,A=null,T=null,b=null,y.set(0,0,0),D=0,m=L,M=Ke}return}ne=ne||se,J=J||ue,Ee=Ee||xe,(se!==u||ne!==E)&&(i.blendEquationSeparate(ft[se],ft[ne]),u=se,E=ne),(ue!==R||xe!==A||J!==T||Ee!==b)&&(i.blendFuncSeparate(P[ue],P[xe],P[J],P[Ee]),R=ue,A=xe,T=J,b=Ee),(Oe.equals(y)===!1||nt!==D)&&(i.blendColor(Oe.r,Oe.g,Oe.b,nt),y.copy(Oe),D=nt),m=L,M=!1}function Fe(L,se){L.side===Xt?oe(i.CULL_FACE):q(i.CULL_FACE);let ue=L.side===Ut;se&&(ue=!ue),Ie(ue),L.blending===Ai&&L.transparent===!1?je(Pn):je(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const xe=L.stencilWrite;a.setTest(xe),xe&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Te(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(L){x!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),x=L)}function be(L){L!==Cl?(q(i.CULL_FACE),L!==C&&(L===Jo?i.cullFace(i.BACK):L===Pl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):oe(i.CULL_FACE),C=L}function rt(L){L!==U&&(G&&i.lineWidth(L),U=L)}function Te(L,se,ue){L?(q(i.POLYGON_OFFSET_FILL),(z!==se||k!==ue)&&(i.polygonOffset(se,ue),z=se,k=ue)):oe(i.POLYGON_OFFSET_FILL)}function ke(L){L?q(i.SCISSOR_TEST):oe(i.SCISSOR_TEST)}function vt(L){L===void 0&&(L=i.TEXTURE0+N-1),j!==L&&(i.activeTexture(L),j=L)}function lt(L,se,ue){ue===void 0&&(j===null?ue=i.TEXTURE0+N-1:ue=j);let xe=Q[ue];xe===void 0&&(xe={type:void 0,texture:void 0},Q[ue]=xe),(xe.type!==L||xe.texture!==se)&&(j!==ue&&(i.activeTexture(ue),j=ue),i.bindTexture(L,se||V[L]),xe.type=L,xe.texture=se)}function w(){const L=Q[j];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(L){ge.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ge.copy(L))}function Le(L){ye.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ye.copy(L))}function Re(L,se){let ue=c.get(se);ue===void 0&&(ue=new WeakMap,c.set(se,ue));let xe=ue.get(L);xe===void 0&&(xe=i.getUniformBlockIndex(se,L.name),ue.set(L,xe))}function he(L,se){const xe=c.get(se).get(L);l.get(se)!==xe&&(i.uniformBlockBinding(se,xe,L.__bindingPointIndex),l.set(se,xe))}function Be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},j=null,Q={},d={},h=new WeakMap,f=[],g=null,_=!1,m=null,u=null,R=null,A=null,E=null,T=null,b=null,y=new $e(0,0,0),D=0,M=!1,x=null,C=null,U=null,z=null,k=null,ge.set(0,0,i.canvas.width,i.canvas.height),ye.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:q,disable:oe,bindFramebuffer:Me,drawBuffers:ve,useProgram:Ge,setBlending:je,setMaterial:Fe,setFlipSided:Ie,setCullFace:be,setLineWidth:rt,setPolygonOffset:Te,setScissorTest:ke,activeTexture:vt,bindTexture:lt,unbindTexture:w,compressedTexImage2D:v,compressedTexImage3D:H,texImage2D:we,texImage3D:re,updateUBOMapping:Re,uniformBlockBinding:he,texStorage2D:le,texStorage3D:Ae,texSubImage2D:Z,texSubImage3D:ee,compressedTexSubImage2D:K,compressedTexSubImage3D:Ce,scissor:me,viewport:Le,reset:Be}}function Vm(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,p=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return f?new OffscreenCanvas(w,v):Gr("canvas")}function _(w,v,H){let Z=1;const ee=lt(w);if((ee.width>H||ee.height>H)&&(Z=H/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const K=Math.floor(Z*ee.width),Ce=Math.floor(Z*ee.height);d===void 0&&(d=g(K,Ce));const le=v?g(K,Ce):d;return le.width=K,le.height=Ce,le.getContext("2d").drawImage(w,0,0,K,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+K+"x"+Ce+")."),le}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),w;return w}function m(w){return w.generateMipmaps}function u(w){i.generateMipmap(w)}function R(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(w,v,H,Z,ee=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let K=v;if(v===i.RED&&(H===i.FLOAT&&(K=i.R32F),H===i.HALF_FLOAT&&(K=i.R16F),H===i.UNSIGNED_BYTE&&(K=i.R8)),v===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.R8UI),H===i.UNSIGNED_SHORT&&(K=i.R16UI),H===i.UNSIGNED_INT&&(K=i.R32UI),H===i.BYTE&&(K=i.R8I),H===i.SHORT&&(K=i.R16I),H===i.INT&&(K=i.R32I)),v===i.RG&&(H===i.FLOAT&&(K=i.RG32F),H===i.HALF_FLOAT&&(K=i.RG16F),H===i.UNSIGNED_BYTE&&(K=i.RG8)),v===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RG8UI),H===i.UNSIGNED_SHORT&&(K=i.RG16UI),H===i.UNSIGNED_INT&&(K=i.RG32UI),H===i.BYTE&&(K=i.RG8I),H===i.SHORT&&(K=i.RG16I),H===i.INT&&(K=i.RG32I)),v===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RGB8UI),H===i.UNSIGNED_SHORT&&(K=i.RGB16UI),H===i.UNSIGNED_INT&&(K=i.RGB32UI),H===i.BYTE&&(K=i.RGB8I),H===i.SHORT&&(K=i.RGB16I),H===i.INT&&(K=i.RGB32I)),v===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),H===i.UNSIGNED_INT&&(K=i.RGBA32UI),H===i.BYTE&&(K=i.RGBA8I),H===i.SHORT&&(K=i.RGBA16I),H===i.INT&&(K=i.RGBA32I)),v===i.RGB&&(H===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),v===i.RGBA){const Ce=ee?Hr:Ye.getTransfer(Z);H===i.FLOAT&&(K=i.RGBA32F),H===i.HALF_FLOAT&&(K=i.RGBA16F),H===i.UNSIGNED_BYTE&&(K=Ce===Je?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function E(w,v){let H;return w?v===null||v===jn||v===ji?H=i.DEPTH24_STENCIL8:v===gn?H=i.DEPTH32F_STENCIL8:v===Ki&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===jn||v===ji?H=i.DEPTH_COMPONENT24:v===gn?H=i.DEPTH_COMPONENT32F:v===Ki&&(H=i.DEPTH_COMPONENT16),H}function T(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==en&&w.minFilter!==rn?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function b(w){const v=w.target;v.removeEventListener("dispose",b),D(v),v.isVideoTexture&&p.delete(v)}function y(w){const v=w.target;v.removeEventListener("dispose",y),x(v)}function D(w){const v=n.get(w);if(v.__webglInit===void 0)return;const H=w.source,Z=h.get(H);if(Z){const ee=Z[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&M(w),Object.keys(Z).length===0&&h.delete(H)}n.remove(w)}function M(w){const v=n.get(w);i.deleteTexture(v.__webglTexture);const H=w.source,Z=h.get(H);delete Z[v.__cacheKey],o.memory.textures--}function x(w){const v=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let ee=0;ee<v.__webglFramebuffer[Z].length;ee++)i.deleteFramebuffer(v.__webglFramebuffer[Z][ee]);else i.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[Z]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const H=w.textures;for(let Z=0,ee=H.length;Z<ee;Z++){const K=n.get(H[Z]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(H[Z])}n.remove(w)}let C=0;function U(){C=0}function z(){const w=C;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),C+=1,w}function k(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function N(w,v){const H=n.get(w);if(w.isVideoTexture&&ke(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&H.__version!==w.version){const Z=w.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(H,w,v);return}}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+v)}function G(w,v){const H=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){V(H,w,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+v)}function Y(w,v){const H=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){V(H,w,v);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+v)}function I(w,v){const H=n.get(w);if(w.version>0&&H.__version!==w.version){q(H,w,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+v)}const j={[Ys]:i.REPEAT,[Yn]:i.CLAMP_TO_EDGE,[Ks]:i.MIRRORED_REPEAT},Q={[en]:i.NEAREST,[su]:i.NEAREST_MIPMAP_NEAREST,[cr]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[ts]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},$={[uu]:i.NEVER,[gu]:i.ALWAYS,[du]:i.LESS,[Ec]:i.LEQUAL,[hu]:i.EQUAL,[mu]:i.GEQUAL,[fu]:i.GREATER,[pu]:i.NOTEQUAL};function ae(w,v){if(v.type===gn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===rn||v.magFilter===ts||v.magFilter===cr||v.magFilter===Kn||v.minFilter===rn||v.minFilter===ts||v.minFilter===cr||v.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,j[v.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,j[v.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,j[v.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,Q[v.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,Q[v.minFilter]),v.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,$[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===en||v.minFilter!==cr&&v.minFilter!==Kn||v.type===gn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ge(w,v){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",b));const Z=v.source;let ee=h.get(Z);ee===void 0&&(ee={},h.set(Z,ee));const K=k(v);if(K!==w.__cacheKey){ee[K]===void 0&&(ee[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ee[K].usedTimes++;const Ce=ee[w.__cacheKey];Ce!==void 0&&(ee[w.__cacheKey].usedTimes--,Ce.usedTimes===0&&M(v)),w.__cacheKey=K,w.__webglTexture=ee[K].texture}return H}function ye(w,v,H){return Math.floor(Math.floor(w/H)/v)}function te(w,v,H,Z){const K=w.updateRanges;if(K.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,H,Z,v.data);else{K.sort((re,me)=>re.start-me.start);let Ce=0;for(let re=1;re<K.length;re++){const me=K[Ce],Le=K[re],Re=me.start+me.count,he=ye(Le.start,v.width,4),Be=ye(me.start,v.width,4);Le.start<=Re+1&&he===Be&&ye(Le.start+Le.count-1,v.width,4)===he?me.count=Math.max(me.count,Le.start+Le.count-me.start):(++Ce,K[Ce]=Le)}K.length=Ce+1;const le=i.getParameter(i.UNPACK_ROW_LENGTH),Ae=i.getParameter(i.UNPACK_SKIP_PIXELS),we=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let re=0,me=K.length;re<me;re++){const Le=K[re],Re=Math.floor(Le.start/4),he=Math.ceil(Le.count/4),Be=Re%v.width,L=Math.floor(Re/v.width),se=he,ue=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Be),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,Be,L,se,ue,H,Z,v.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,le),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ae),i.pixelStorei(i.UNPACK_SKIP_ROWS,we)}}function V(w,v,H){let Z=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=i.TEXTURE_3D);const ee=ge(w,v),K=v.source;t.bindTexture(Z,w.__webglTexture,i.TEXTURE0+H);const Ce=n.get(K);if(K.version!==Ce.__version||ee===!0){t.activeTexture(i.TEXTURE0+H);const le=Ye.getPrimaries(Ye.workingColorSpace),Ae=v.colorSpace===Cn?null:Ye.getPrimaries(v.colorSpace),we=v.colorSpace===Cn||le===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let re=_(v.image,!1,r.maxTextureSize);re=vt(v,re);const me=s.convert(v.format,v.colorSpace),Le=s.convert(v.type);let Re=A(v.internalFormat,me,Le,v.colorSpace,v.isVideoTexture);ae(Z,v);let he;const Be=v.mipmaps,L=v.isVideoTexture!==!0,se=Ce.__version===void 0||ee===!0,ue=K.dataReady,xe=T(v,re);if(v.isDepthTexture)Re=E(v.format===Zi,v.type),se&&(L?t.texStorage2D(i.TEXTURE_2D,1,Re,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Re,re.width,re.height,0,me,Le,null));else if(v.isDataTexture)if(Be.length>0){L&&se&&t.texStorage2D(i.TEXTURE_2D,xe,Re,Be[0].width,Be[0].height);for(let ne=0,J=Be.length;ne<J;ne++)he=Be[ne],L?ue&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,he.width,he.height,me,Le,he.data):t.texImage2D(i.TEXTURE_2D,ne,Re,he.width,he.height,0,me,Le,he.data);v.generateMipmaps=!1}else L?(se&&t.texStorage2D(i.TEXTURE_2D,xe,Re,re.width,re.height),ue&&te(v,re,me,Le)):t.texImage2D(i.TEXTURE_2D,0,Re,re.width,re.height,0,me,Le,re.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){L&&se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Re,Be[0].width,Be[0].height,re.depth);for(let ne=0,J=Be.length;ne<J;ne++)if(he=Be[ne],v.format!==Qt)if(me!==null)if(L){if(ue)if(v.layerUpdates.size>0){const Ee=Ra(he.width,he.height,v.format,v.type);for(const Oe of v.layerUpdates){const nt=he.data.subarray(Oe*Ee/he.data.BYTES_PER_ELEMENT,(Oe+1)*Ee/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,Oe,he.width,he.height,1,me,nt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,re.depth,me,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Re,he.width,he.height,re.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ue&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,re.depth,me,Le,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Re,he.width,he.height,re.depth,0,me,Le,he.data)}else{L&&se&&t.texStorage2D(i.TEXTURE_2D,xe,Re,Be[0].width,Be[0].height);for(let ne=0,J=Be.length;ne<J;ne++)he=Be[ne],v.format!==Qt?me!==null?L?ue&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,he.width,he.height,me,he.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Re,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ue&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,he.width,he.height,me,Le,he.data):t.texImage2D(i.TEXTURE_2D,ne,Re,he.width,he.height,0,me,Le,he.data)}else if(v.isDataArrayTexture)if(L){if(se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Re,re.width,re.height,re.depth),ue)if(v.layerUpdates.size>0){const ne=Ra(re.width,re.height,v.format,v.type);for(const J of v.layerUpdates){const Ee=re.data.subarray(J*ne/re.data.BYTES_PER_ELEMENT,(J+1)*ne/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,re.width,re.height,1,me,Le,Ee)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,me,Le,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,re.width,re.height,re.depth,0,me,Le,re.data);else if(v.isData3DTexture)L?(se&&t.texStorage3D(i.TEXTURE_3D,xe,Re,re.width,re.height,re.depth),ue&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,me,Le,re.data)):t.texImage3D(i.TEXTURE_3D,0,Re,re.width,re.height,re.depth,0,me,Le,re.data);else if(v.isFramebufferTexture){if(se)if(L)t.texStorage2D(i.TEXTURE_2D,xe,Re,re.width,re.height);else{let ne=re.width,J=re.height;for(let Ee=0;Ee<xe;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,Re,ne,J,0,me,Le,null),ne>>=1,J>>=1}}else if(Be.length>0){if(L&&se){const ne=lt(Be[0]);t.texStorage2D(i.TEXTURE_2D,xe,Re,ne.width,ne.height)}for(let ne=0,J=Be.length;ne<J;ne++)he=Be[ne],L?ue&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,me,Le,he):t.texImage2D(i.TEXTURE_2D,ne,Re,me,Le,he);v.generateMipmaps=!1}else if(L){if(se){const ne=lt(re);t.texStorage2D(i.TEXTURE_2D,xe,Re,ne.width,ne.height)}ue&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,Le,re)}else t.texImage2D(i.TEXTURE_2D,0,Re,me,Le,re);m(v)&&u(Z),Ce.__version=K.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function q(w,v,H){if(v.image.length!==6)return;const Z=ge(w,v),ee=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+H);const K=n.get(ee);if(ee.version!==K.__version||Z===!0){t.activeTexture(i.TEXTURE0+H);const Ce=Ye.getPrimaries(Ye.workingColorSpace),le=v.colorSpace===Cn?null:Ye.getPrimaries(v.colorSpace),Ae=v.colorSpace===Cn||Ce===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const we=v.isCompressedTexture||v.image[0].isCompressedTexture,re=v.image[0]&&v.image[0].isDataTexture,me=[];for(let J=0;J<6;J++)!we&&!re?me[J]=_(v.image[J],!0,r.maxCubemapSize):me[J]=re?v.image[J].image:v.image[J],me[J]=vt(v,me[J]);const Le=me[0],Re=s.convert(v.format,v.colorSpace),he=s.convert(v.type),Be=A(v.internalFormat,Re,he,v.colorSpace),L=v.isVideoTexture!==!0,se=K.__version===void 0||Z===!0,ue=ee.dataReady;let xe=T(v,Le);ae(i.TEXTURE_CUBE_MAP,v);let ne;if(we){L&&se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,Be,Le.width,Le.height);for(let J=0;J<6;J++){ne=me[J].mipmaps;for(let Ee=0;Ee<ne.length;Ee++){const Oe=ne[Ee];v.format!==Qt?Re!==null?L?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee,0,0,Oe.width,Oe.height,Re,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee,Be,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee,0,0,Oe.width,Oe.height,Re,he,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee,Be,Oe.width,Oe.height,0,Re,he,Oe.data)}}}else{if(ne=v.mipmaps,L&&se){ne.length>0&&xe++;const J=lt(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,Be,J.width,J.height)}for(let J=0;J<6;J++)if(re){L?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,me[J].width,me[J].height,Re,he,me[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Be,me[J].width,me[J].height,0,Re,he,me[J].data);for(let Ee=0;Ee<ne.length;Ee++){const nt=ne[Ee].image[J].image;L?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee+1,0,0,nt.width,nt.height,Re,he,nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee+1,Be,nt.width,nt.height,0,Re,he,nt.data)}}else{L?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Re,he,me[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Be,Re,he,me[J]);for(let Ee=0;Ee<ne.length;Ee++){const Oe=ne[Ee];L?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee+1,0,0,Re,he,Oe.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee+1,Be,Re,he,Oe.image[J])}}}m(v)&&u(i.TEXTURE_CUBE_MAP),K.__version=ee.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function oe(w,v,H,Z,ee,K){const Ce=s.convert(H.format,H.colorSpace),le=s.convert(H.type),Ae=A(H.internalFormat,Ce,le,H.colorSpace),we=n.get(v),re=n.get(H);if(re.__renderTarget=v,!we.__hasExternalTextures){const me=Math.max(1,v.width>>K),Le=Math.max(1,v.height>>K);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,K,Ae,me,Le,v.depth,0,Ce,le,null):t.texImage2D(ee,K,Ae,me,Le,0,Ce,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),Te(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,ee,re.__webglTexture,0,rt(v)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,ee,re.__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(w,v,H){if(i.bindRenderbuffer(i.RENDERBUFFER,w),v.depthBuffer){const Z=v.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,K=E(v.stencilBuffer,ee),Ce=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=rt(v);Te(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,K,v.width,v.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,K,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,K,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,w)}else{const Z=v.textures;for(let ee=0;ee<Z.length;ee++){const K=Z[ee],Ce=s.convert(K.format,K.colorSpace),le=s.convert(K.type),Ae=A(K.internalFormat,Ce,le,K.colorSpace),we=rt(v);H&&Te(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,Ae,v.width,v.height):Te(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,Ae,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ve(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(v.depthTexture);Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),N(v.depthTexture,0);const ee=Z.__webglTexture,K=rt(v);if(v.depthTexture.format===$i)Te(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(v.depthTexture.format===Zi)Te(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ge(w){const v=n.get(w),H=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const Z=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){const ee=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),v.__depthDisposeCallback=ee}v.__boundDepthTexture=Z}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const Z=w.texture.mipmaps;Z&&Z.length>0?ve(v.__webglFramebuffer[0],w):ve(v.__webglFramebuffer,w)}else if(H){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=i.createRenderbuffer(),Me(v.__webglDepthbuffer[Z],w,!1);else{const ee=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,K)}}else{const Z=w.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Me(v.__webglDepthbuffer,w,!1);else{const ee=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,K)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(w,v,H){const Z=n.get(w);v!==void 0&&oe(Z.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Ge(w)}function P(w){const v=w.texture,H=n.get(w),Z=n.get(v);w.addEventListener("dispose",y);const ee=w.textures,K=w.isWebGLCubeRenderTarget===!0,Ce=ee.length>1;if(Ce||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=v.version,o.memory.textures++),K){H.__webglFramebuffer=[];for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[le]=[];for(let Ae=0;Ae<v.mipmaps.length;Ae++)H.__webglFramebuffer[le][Ae]=i.createFramebuffer()}else H.__webglFramebuffer[le]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let le=0;le<v.mipmaps.length;le++)H.__webglFramebuffer[le]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let le=0,Ae=ee.length;le<Ae;le++){const we=n.get(ee[le]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&Te(w)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let le=0;le<ee.length;le++){const Ae=ee[le];H.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[le]);const we=s.convert(Ae.format,Ae.colorSpace),re=s.convert(Ae.type),me=A(Ae.internalFormat,we,re,Ae.colorSpace,w.isXRRenderTarget===!0),Le=rt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,me,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,H.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(H.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),ae(i.TEXTURE_CUBE_MAP,v);for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ae=0;Ae<v.mipmaps.length;Ae++)oe(H.__webglFramebuffer[le][Ae],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae);else oe(H.__webglFramebuffer[le],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(v)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let le=0,Ae=ee.length;le<Ae;le++){const we=ee[le],re=n.get(we);let me=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(me=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,re.__webglTexture),ae(me,we),oe(H.__webglFramebuffer,w,we,i.COLOR_ATTACHMENT0+le,me,0),m(we)&&u(me)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(le=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,Z.__webglTexture),ae(le,v),v.mipmaps&&v.mipmaps.length>0)for(let Ae=0;Ae<v.mipmaps.length;Ae++)oe(H.__webglFramebuffer[Ae],w,v,i.COLOR_ATTACHMENT0,le,Ae);else oe(H.__webglFramebuffer,w,v,i.COLOR_ATTACHMENT0,le,0);m(v)&&u(le),t.unbindTexture()}w.depthBuffer&&Ge(w)}function je(w){const v=w.textures;for(let H=0,Z=v.length;H<Z;H++){const ee=v[H];if(m(ee)){const K=R(w),Ce=n.get(ee).__webglTexture;t.bindTexture(K,Ce),u(K),t.unbindTexture()}}}const Fe=[],Ie=[];function be(w){if(w.samples>0){if(Te(w)===!1){const v=w.textures,H=w.width,Z=w.height;let ee=i.COLOR_BUFFER_BIT;const K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(w),le=v.length>1;if(le)for(let we=0;we<v.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const Ae=w.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let we=0;we<v.length;we++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[we]);const re=n.get(v[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,H,Z,0,0,H,Z,ee,i.NEAREST),l===!0&&(Fe.length=0,Ie.length=0,Fe.push(i.COLOR_ATTACHMENT0+we),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Fe.push(K),Ie.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ie)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let we=0;we<v.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[we]);const re=n.get(v[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const v=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function rt(w){return Math.min(r.maxSamples,w.samples)}function Te(w){const v=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ke(w){const v=o.render.frame;p.get(w)!==v&&(p.set(w,v),w.update())}function vt(w,v){const H=w.colorSpace,Z=w.format,ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||H!==Li&&H!==Cn&&(Ye.getTransfer(H)===Je?(Z!==Qt||ee!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),v}function lt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=U,this.setTexture2D=N,this.setTexture2DArray=G,this.setTexture3D=Y,this.setTextureCube=I,this.rebindTextures=ft,this.setupRenderTarget=P,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Te}function Gm(i,e){function t(n,r=Cn){let s;const o=Ye.getTransfer(r);if(n===vn)return i.UNSIGNED_BYTE;if(n===Lo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Io)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_c)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===pc)return i.BYTE;if(n===mc)return i.SHORT;if(n===Ki)return i.UNSIGNED_SHORT;if(n===Uo)return i.INT;if(n===jn)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===nr)return i.HALF_FLOAT;if(n===vc)return i.ALPHA;if(n===xc)return i.RGB;if(n===Qt)return i.RGBA;if(n===$i)return i.DEPTH_COMPONENT;if(n===Zi)return i.DEPTH_STENCIL;if(n===Mc)return i.RED;if(n===No)return i.RED_INTEGER;if(n===Sc)return i.RG;if(n===Oo)return i.RG_INTEGER;if(n===Fo)return i.RGBA_INTEGER;if(n===Nr||n===Or||n===Fr||n===Br)if(o===Je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Nr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Or)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Nr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Or)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Br)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===js||n===$s||n===Zs||n===Js)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===js)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$s)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Js)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qs||n===eo||n===to)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Qs||n===eo)return o===Je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===to)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===no||n===io||n===ro||n===so||n===oo||n===ao||n===co||n===lo||n===uo||n===ho||n===fo||n===po||n===mo||n===go)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===no)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===io)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ro)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===so)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oo)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ao)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===co)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lo)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===uo)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ho)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fo)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===po)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mo)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===go)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_o||n===vo||n===xo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===_o)return o===Je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mo||n===So||n===Eo||n===yo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Mo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===So)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Eo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ji?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Wm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xm=`
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

}`;class qm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Nc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new In({vertexShader:Wm,fragmentShader:Xm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new jr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ym extends Qn{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,p=null,d=null,h=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new qm,u={},R=t.getContextAttributes();let A=null,E=null;const T=[],b=[],y=new Ve;let D=null;const M=new Wt;M.viewport=new ut;const x=new Wt;x.viewport=new ut;const C=[M,x],U=new hd;let z=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let q=T[V];return q===void 0&&(q=new Es,T[V]=q),q.getTargetRaySpace()},this.getControllerGrip=function(V){let q=T[V];return q===void 0&&(q=new Es,T[V]=q),q.getGripSpace()},this.getHand=function(V){let q=T[V];return q===void 0&&(q=new Es,T[V]=q),q.getHandSpace()};function N(V){const q=b.indexOf(V.inputSource);if(q===-1)return;const oe=T[q];oe!==void 0&&(oe.update(V.inputSource,V.frame,c||o),oe.dispatchEvent({type:V.type,data:V.inputSource}))}function G(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",Y);for(let V=0;V<T.length;V++){const q=b[V];q!==null&&(b[V]=null,T[V].disconnect(q))}z=null,k=null,m.reset();for(const V in u)delete u[V];e.setRenderTarget(A),f=null,h=null,d=null,r=null,E=null,te.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",G),r.addEventListener("inputsourceschange",Y),R.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(y),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Me=null,ve=null;R.depth&&(ve=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=R.stencil?Zi:$i,Me=R.stencil?ji:jn);const Ge={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Ge),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new Zn(h.textureWidth,h.textureHeight,{format:Qt,type:vn,depthTexture:new Ic(h.textureWidth,h.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const oe={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new Zn(f.framebufferWidth,f.framebufferHeight,{format:Qt,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),te.setContext(r),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(V){for(let q=0;q<V.removed.length;q++){const oe=V.removed[q],Me=b.indexOf(oe);Me>=0&&(b[Me]=null,T[Me].disconnect(oe))}for(let q=0;q<V.added.length;q++){const oe=V.added[q];let Me=b.indexOf(oe);if(Me===-1){for(let Ge=0;Ge<T.length;Ge++)if(Ge>=b.length){b.push(oe),Me=Ge;break}else if(b[Ge]===null){b[Ge]=oe,Me=Ge;break}if(Me===-1)break}const ve=T[Me];ve&&ve.connect(oe)}}const I=new B,j=new B;function Q(V,q,oe){I.setFromMatrixPosition(q.matrixWorld),j.setFromMatrixPosition(oe.matrixWorld);const Me=I.distanceTo(j),ve=q.projectionMatrix.elements,Ge=oe.projectionMatrix.elements,ft=ve[14]/(ve[10]-1),P=ve[14]/(ve[10]+1),je=(ve[9]+1)/ve[5],Fe=(ve[9]-1)/ve[5],Ie=(ve[8]-1)/ve[0],be=(Ge[8]+1)/Ge[0],rt=ft*Ie,Te=ft*be,ke=Me/(-Ie+be),vt=ke*-Ie;if(q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(vt),V.translateZ(ke),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),ve[10]===-1)V.projectionMatrix.copy(q.projectionMatrix),V.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const lt=ft+ke,w=P+ke,v=rt-vt,H=Te+(Me-vt),Z=je*P/w*lt,ee=Fe*P/w*lt;V.projectionMatrix.makePerspective(v,H,Z,ee,lt,w),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function $(V,q){q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let q=V.near,oe=V.far;m.texture!==null&&(m.depthNear>0&&(q=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),U.near=x.near=M.near=q,U.far=x.far=M.far=oe,(z!==U.near||k!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),z=U.near,k=U.far),U.layers.mask=V.layers.mask|6,M.layers.mask=U.layers.mask&3,x.layers.mask=U.layers.mask&5;const Me=V.parent,ve=U.cameras;$(U,Me);for(let Ge=0;Ge<ve.length;Ge++)$(ve[Ge],Me);ve.length===2?Q(U,M,x):U.projectionMatrix.copy(M.projectionMatrix),ae(V,U,Me)};function ae(V,q,oe){oe===null?V.matrix.copy(q.matrixWorld):(V.matrix.copy(oe.matrixWorld),V.matrix.invert(),V.matrix.multiply(q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(q.projectionMatrix),V.projectionMatrixInverse.copy(q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ji*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(V){l=V,h!==null&&(h.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(V){return u[V]};let ge=null;function ye(V,q){if(p=q.getViewerPose(c||o),g=q,p!==null){const oe=p.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let Me=!1;oe.length!==U.cameras.length&&(U.cameras.length=0,Me=!0);for(let P=0;P<oe.length;P++){const je=oe[P];let Fe=null;if(f!==null)Fe=f.getViewport(je);else{const be=d.getViewSubImage(h,je);Fe=be.viewport,P===0&&(e.setRenderTargetTextures(E,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(E))}let Ie=C[P];Ie===void 0&&(Ie=new Wt,Ie.layers.enable(P),Ie.viewport=new ut,C[P]=Ie),Ie.matrix.fromArray(je.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(je.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),P===0&&(U.matrix.copy(Ie.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Me===!0&&U.cameras.push(Ie)}const ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const P=d.getDepthInformation(oe[0]);P&&P.isValid&&P.texture&&m.init(P,r.renderState)}if(ve&&ve.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let P=0;P<oe.length;P++){const je=oe[P].camera;if(je){let Fe=u[je];Fe||(Fe=new Nc,u[je]=Fe);const Ie=d.getCameraImage(je);Fe.sourceTexture=Ie}}}}for(let oe=0;oe<T.length;oe++){const Me=b[oe],ve=T[oe];Me!==null&&ve!==void 0&&ve.update(Me,q,c||o)}ge&&ge(V,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}const te=new Oc;te.setAnimationLoop(ye),this.setAnimationLoop=function(V){ge=V},this.dispose=function(){}}}const Gn=new xn,Km=new dt;function jm(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Pc(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,R,A,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),p(m,u)):u.isMeshStandardMaterial?(s(m,u),h(m,u),u.isMeshPhysicalMaterial&&f(m,u,E)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),_(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,R,A):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Ut&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Ut&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const R=e.get(u),A=R.envMap,E=R.envMapRotation;A&&(m.envMap.value=A,Gn.copy(E),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),m.envMapRotation.value.setFromMatrix4(Km.makeRotationFromEuler(Gn)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,R,A){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*R,m.scale.value=A*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function p(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,R){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ut&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function _(m,u){const R=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function $m(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,A){const E=A.program;n.uniformBlockBinding(R,E)}function c(R,A){let E=r[R.id];E===void 0&&(g(R),E=p(R),r[R.id]=E,R.addEventListener("dispose",m));const T=A.program;n.updateUBOMapping(R,T);const b=e.render.frame;s[R.id]!==b&&(h(R),s[R.id]=b)}function p(R){const A=d();R.__bindingPointIndex=A;const E=i.createBuffer(),T=R.__size,b=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,T,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,E),E}function d(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(R){const A=r[R.id],E=R.uniforms,T=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let b=0,y=E.length;b<y;b++){const D=Array.isArray(E[b])?E[b]:[E[b]];for(let M=0,x=D.length;M<x;M++){const C=D[M];if(f(C,b,M,T)===!0){const U=C.__offset,z=Array.isArray(C.value)?C.value:[C.value];let k=0;for(let N=0;N<z.length;N++){const G=z[N],Y=_(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,U+k,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,k),k+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(R,A,E,T){const b=R.value,y=A+"_"+E;if(T[y]===void 0)return typeof b=="number"||typeof b=="boolean"?T[y]=b:T[y]=b.clone(),!0;{const D=T[y];if(typeof b=="number"||typeof b=="boolean"){if(D!==b)return T[y]=b,!0}else if(D.equals(b)===!1)return D.copy(b),!0}return!1}function g(R){const A=R.uniforms;let E=0;const T=16;for(let y=0,D=A.length;y<D;y++){const M=Array.isArray(A[y])?A[y]:[A[y]];for(let x=0,C=M.length;x<C;x++){const U=M[x],z=Array.isArray(U.value)?U.value:[U.value];for(let k=0,N=z.length;k<N;k++){const G=z[k],Y=_(G),I=E%T,j=I%Y.boundary,Q=I+j;E+=j,Q!==0&&T-Q<Y.storage&&(E+=T-Q),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=E,E+=Y.storage}}}const b=E%T;return b>0&&(E+=T-b),R.__size=E,R.__cache={},this}function _(R){const A={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(A.boundary=4,A.storage=4):R.isVector2?(A.boundary=8,A.storage=8):R.isVector3||R.isColor?(A.boundary=16,A.storage=12):R.isVector4?(A.boundary=16,A.storage=16):R.isMatrix3?(A.boundary=48,A.storage=48):R.isMatrix4?(A.boundary=64,A.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),A}function m(R){const A=R.target;A.removeEventListener("dispose",m);const E=o.indexOf(A.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function u(){for(const R in r)i.deleteBuffer(r[R]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Zm{constructor(e={}){const{canvas:t=Lu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,u=null;const R=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let T=!1;this._outputColorSpace=Gt;let b=0,y=0,D=null,M=-1,x=null;const C=new ut,U=new ut;let z=null;const k=new $e(0);let N=0,G=t.width,Y=t.height,I=1,j=null,Q=null;const $=new ut(0,0,G,Y),ae=new ut(0,0,G,Y);let ge=!1;const ye=new Lc;let te=!1,V=!1;const q=new dt,oe=new B,Me=new ut,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function ft(){return D===null?I:1}let P=n;function je(S,O){return t.getContext(S,O)}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:p,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Do}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",ne,!1),P===null){const O="webgl2";if(P=je(O,S),P===null)throw je(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Fe,Ie,be,rt,Te,ke,vt,lt,w,v,H,Z,ee,K,Ce,le,Ae,we,re,me,Le,Re,he,Be;function L(){Fe=new ap(P),Fe.init(),Re=new Gm(P,Fe),Ie=new ep(P,Fe,e,Re),be=new Hm(P,Fe),Ie.reversedDepthBuffer&&h&&be.buffers.depth.setReversed(!0),rt=new up(P),Te=new Rm,ke=new Vm(P,Fe,be,Te,Ie,Re,rt),vt=new np(E),lt=new op(E),w=new md(P),he=new Jf(P,w),v=new cp(P,w,rt,he),H=new hp(P,v,w,rt),re=new dp(P,Ie,ke),le=new tp(Te),Z=new wm(E,vt,lt,Fe,Ie,he,le),ee=new jm(E,Te),K=new Pm,Ce=new Om(Fe),we=new Zf(E,vt,lt,be,H,f,l),Ae=new zm(E,H,Ie),Be=new $m(P,rt,Ie,be),me=new Qf(P,Fe,rt),Le=new lp(P,Fe,rt),rt.programs=Z.programs,E.capabilities=Ie,E.extensions=Fe,E.properties=Te,E.renderLists=K,E.shadowMap=Ae,E.state=be,E.info=rt}L();const se=new Ym(E,P);this.xr=se,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const S=Fe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Fe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(S){S!==void 0&&(I=S,this.setSize(G,Y,!1))},this.getSize=function(S){return S.set(G,Y)},this.setSize=function(S,O,W=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=S,Y=O,t.width=Math.floor(S*I),t.height=Math.floor(O*I),W===!0&&(t.style.width=S+"px",t.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(G*I,Y*I).floor()},this.setDrawingBufferSize=function(S,O,W){G=S,Y=O,I=W,t.width=Math.floor(S*W),t.height=Math.floor(O*W),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(C)},this.getViewport=function(S){return S.copy($)},this.setViewport=function(S,O,W,X){S.isVector4?$.set(S.x,S.y,S.z,S.w):$.set(S,O,W,X),be.viewport(C.copy($).multiplyScalar(I).round())},this.getScissor=function(S){return S.copy(ae)},this.setScissor=function(S,O,W,X){S.isVector4?ae.set(S.x,S.y,S.z,S.w):ae.set(S,O,W,X),be.scissor(U.copy(ae).multiplyScalar(I).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(S){be.setScissorTest(ge=S)},this.setOpaqueSort=function(S){j=S},this.setTransparentSort=function(S){Q=S},this.getClearColor=function(S){return S.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(S=!0,O=!0,W=!0){let X=0;if(S){let F=!1;if(D!==null){const ie=D.texture.format;F=ie===Fo||ie===Oo||ie===No}if(F){const ie=D.texture.type,fe=ie===vn||ie===jn||ie===Ki||ie===ji||ie===Lo||ie===Io,Se=we.getClearColor(),_e=we.getClearAlpha(),Ue=Se.r,Ne=Se.g,Pe=Se.b;fe?(g[0]=Ue,g[1]=Ne,g[2]=Pe,g[3]=_e,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Ue,_[1]=Ne,_[2]=Pe,_[3]=_e,P.clearBufferiv(P.COLOR,0,_))}else X|=P.COLOR_BUFFER_BIT}O&&(X|=P.DEPTH_BUFFER_BIT),W&&(X|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),we.dispose(),K.dispose(),Ce.dispose(),Te.dispose(),vt.dispose(),lt.dispose(),H.dispose(),he.dispose(),Be.dispose(),Z.dispose(),se.dispose(),se.removeEventListener("sessionstart",tn),se.removeEventListener("sessionend",Xo),On.stop()};function ue(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const S=rt.autoReset,O=Ae.enabled,W=Ae.autoUpdate,X=Ae.needsUpdate,F=Ae.type;L(),rt.autoReset=S,Ae.enabled=O,Ae.autoUpdate=W,Ae.needsUpdate=X,Ae.type=F}function ne(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function J(S){const O=S.target;O.removeEventListener("dispose",J),Ee(O)}function Ee(S){Oe(S),Te.remove(S)}function Oe(S){const O=Te.get(S).programs;O!==void 0&&(O.forEach(function(W){Z.releaseProgram(W)}),S.isShaderMaterial&&Z.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,W,X,F,ie){O===null&&(O=ve);const fe=F.isMesh&&F.matrixWorld.determinant()<0,Se=nl(S,O,W,X,F);be.setMaterial(X,fe);let _e=W.index,Ue=1;if(X.wireframe===!0){if(_e=v.getWireframeAttribute(W),_e===void 0)return;Ue=2}const Ne=W.drawRange,Pe=W.attributes.position;let Xe=Ne.start*Ue,Ze=(Ne.start+Ne.count)*Ue;ie!==null&&(Xe=Math.max(Xe,ie.start*Ue),Ze=Math.min(Ze,(ie.start+ie.count)*Ue)),_e!==null?(Xe=Math.max(Xe,0),Ze=Math.min(Ze,_e.count)):Pe!=null&&(Xe=Math.max(Xe,0),Ze=Math.min(Ze,Pe.count));const ct=Ze-Xe;if(ct<0||ct===1/0)return;he.setup(F,X,Se,W,_e);let it,et=me;if(_e!==null&&(it=w.get(_e),et=Le,et.setIndex(it)),F.isMesh)X.wireframe===!0?(be.setLineWidth(X.wireframeLinewidth*ft()),et.setMode(P.LINES)):et.setMode(P.TRIANGLES);else if(F.isLine){let De=X.linewidth;De===void 0&&(De=1),be.setLineWidth(De*ft()),F.isLineSegments?et.setMode(P.LINES):F.isLineLoop?et.setMode(P.LINE_LOOP):et.setMode(P.LINE_STRIP)}else F.isPoints?et.setMode(P.POINTS):F.isSprite&&et.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Qi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),et.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))et.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const De=F._multiDrawStarts,ot=F._multiDrawCounts,qe=F._multiDrawCount,Nt=_e?w.get(_e).bytesPerElement:1,ei=Te.get(X).currentProgram.getUniforms();for(let Ot=0;Ot<qe;Ot++)ei.setValue(P,"_gl_DrawID",Ot),et.render(De[Ot]/Nt,ot[Ot])}else if(F.isInstancedMesh)et.renderInstances(Xe,ct,F.count);else if(W.isInstancedBufferGeometry){const De=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ot=Math.min(W.instanceCount,De);et.renderInstances(Xe,ct,ot)}else et.render(Xe,ct)};function nt(S,O,W){S.transparent===!0&&S.side===Xt&&S.forceSinglePass===!1?(S.side=Ut,S.needsUpdate=!0,ar(S,O,W),S.side=Ln,S.needsUpdate=!0,ar(S,O,W),S.side=Xt):ar(S,O,W)}this.compile=function(S,O,W=null){W===null&&(W=S),u=Ce.get(W),u.init(O),A.push(u),W.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),S!==W&&S.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),u.setupLights();const X=new Set;return S.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ie=F.material;if(ie)if(Array.isArray(ie))for(let fe=0;fe<ie.length;fe++){const Se=ie[fe];nt(Se,W,F),X.add(Se)}else nt(ie,W,F),X.add(ie)}),u=A.pop(),X},this.compileAsync=function(S,O,W=null){const X=this.compile(S,O,W);return new Promise(F=>{function ie(){if(X.forEach(function(fe){Te.get(fe).currentProgram.isReady()&&X.delete(fe)}),X.size===0){F(S);return}setTimeout(ie,10)}Fe.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Ke=null;function an(S){Ke&&Ke(S)}function tn(){On.stop()}function Xo(){On.start()}const On=new Oc;On.setAnimationLoop(an),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(S){Ke=S,se.setAnimationLoop(S),S===null?On.stop():On.start()},se.addEventListener("sessionstart",tn),se.addEventListener("sessionend",Xo),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(O),O=se.getCamera()),S.isScene===!0&&S.onBeforeRender(E,S,O,D),u=Ce.get(S,A.length),u.init(O),A.push(u),q.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ye.setFromProjectionMatrix(q,sn,O.reversedDepth),V=this.localClippingEnabled,te=le.init(this.clippingPlanes,V),m=K.get(S,R.length),m.init(),R.push(m),se.enabled===!0&&se.isPresenting===!0){const ie=E.xr.getDepthSensingMesh();ie!==null&&Zr(ie,O,-1/0,E.sortObjects)}Zr(S,O,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(j,Q),Ge=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Ge&&we.addToRenderList(m,S),this.info.render.frame++,te===!0&&le.beginShadows();const W=u.state.shadowsArray;Ae.render(W,S,O),te===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,F=m.transmissive;if(u.setupLights(),O.isArrayCamera){const ie=O.cameras;if(F.length>0)for(let fe=0,Se=ie.length;fe<Se;fe++){const _e=ie[fe];Yo(X,F,S,_e)}Ge&&we.render(S);for(let fe=0,Se=ie.length;fe<Se;fe++){const _e=ie[fe];qo(m,S,_e,_e.viewport)}}else F.length>0&&Yo(X,F,S,O),Ge&&we.render(S),qo(m,S,O);D!==null&&y===0&&(ke.updateMultisampleRenderTarget(D),ke.updateRenderTargetMipmap(D)),S.isScene===!0&&S.onAfterRender(E,S,O),he.resetDefaultState(),M=-1,x=null,A.pop(),A.length>0?(u=A[A.length-1],te===!0&&le.setGlobalState(E.clippingPlanes,u.state.camera)):u=null,R.pop(),R.length>0?m=R[R.length-1]:m=null};function Zr(S,O,W,X){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)u.pushLight(S),S.castShadow&&u.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ye.intersectsSprite(S)){X&&Me.setFromMatrixPosition(S.matrixWorld).applyMatrix4(q);const fe=H.update(S),Se=S.material;Se.visible&&m.push(S,fe,Se,W,Me.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ye.intersectsObject(S))){const fe=H.update(S),Se=S.material;if(X&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Me.copy(S.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Me.copy(fe.boundingSphere.center)),Me.applyMatrix4(S.matrixWorld).applyMatrix4(q)),Array.isArray(Se)){const _e=fe.groups;for(let Ue=0,Ne=_e.length;Ue<Ne;Ue++){const Pe=_e[Ue],Xe=Se[Pe.materialIndex];Xe&&Xe.visible&&m.push(S,fe,Xe,W,Me.z,Pe)}}else Se.visible&&m.push(S,fe,Se,W,Me.z,null)}}const ie=S.children;for(let fe=0,Se=ie.length;fe<Se;fe++)Zr(ie[fe],O,W,X)}function qo(S,O,W,X){const F=S.opaque,ie=S.transmissive,fe=S.transparent;u.setupLightsView(W),te===!0&&le.setGlobalState(E.clippingPlanes,W),X&&be.viewport(C.copy(X)),F.length>0&&or(F,O,W),ie.length>0&&or(ie,O,W),fe.length>0&&or(fe,O,W),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Yo(S,O,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[X.id]===void 0&&(u.state.transmissionRenderTarget[X.id]=new Zn(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?nr:vn,minFilter:Kn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const ie=u.state.transmissionRenderTarget[X.id],fe=X.viewport||C;ie.setSize(fe.z*E.transmissionResolutionScale,fe.w*E.transmissionResolutionScale);const Se=E.getRenderTarget(),_e=E.getActiveCubeFace(),Ue=E.getActiveMipmapLevel();E.setRenderTarget(ie),E.getClearColor(k),N=E.getClearAlpha(),N<1&&E.setClearColor(16777215,.5),E.clear(),Ge&&we.render(W);const Ne=E.toneMapping;E.toneMapping=Dn;const Pe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),u.setupLightsView(X),te===!0&&le.setGlobalState(E.clippingPlanes,X),or(S,W,X),ke.updateMultisampleRenderTarget(ie),ke.updateRenderTargetMipmap(ie),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Ze=0,ct=O.length;Ze<ct;Ze++){const it=O[Ze],et=it.object,De=it.geometry,ot=it.material,qe=it.group;if(ot.side===Xt&&et.layers.test(X.layers)){const Nt=ot.side;ot.side=Ut,ot.needsUpdate=!0,Ko(et,W,X,De,ot,qe),ot.side=Nt,ot.needsUpdate=!0,Xe=!0}}Xe===!0&&(ke.updateMultisampleRenderTarget(ie),ke.updateRenderTargetMipmap(ie))}E.setRenderTarget(Se,_e,Ue),E.setClearColor(k,N),Pe!==void 0&&(X.viewport=Pe),E.toneMapping=Ne}function or(S,O,W){const X=O.isScene===!0?O.overrideMaterial:null;for(let F=0,ie=S.length;F<ie;F++){const fe=S[F],Se=fe.object,_e=fe.geometry,Ue=fe.group;let Ne=fe.material;Ne.allowOverride===!0&&X!==null&&(Ne=X),Se.layers.test(W.layers)&&Ko(Se,O,W,_e,Ne,Ue)}}function Ko(S,O,W,X,F,ie){S.onBeforeRender(E,O,W,X,F,ie),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(E,O,W,X,S,ie),F.transparent===!0&&F.side===Xt&&F.forceSinglePass===!1?(F.side=Ut,F.needsUpdate=!0,E.renderBufferDirect(W,O,X,F,S,ie),F.side=Ln,F.needsUpdate=!0,E.renderBufferDirect(W,O,X,F,S,ie),F.side=Xt):E.renderBufferDirect(W,O,X,F,S,ie),S.onAfterRender(E,O,W,X,F,ie)}function ar(S,O,W){O.isScene!==!0&&(O=ve);const X=Te.get(S),F=u.state.lights,ie=u.state.shadowsArray,fe=F.state.version,Se=Z.getParameters(S,F.state,ie,O,W),_e=Z.getProgramCacheKey(Se);let Ue=X.programs;X.environment=S.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(S.isMeshStandardMaterial?lt:vt).get(S.envMap||X.environment),X.envMapRotation=X.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,Ue===void 0&&(S.addEventListener("dispose",J),Ue=new Map,X.programs=Ue);let Ne=Ue.get(_e);if(Ne!==void 0){if(X.currentProgram===Ne&&X.lightsStateVersion===fe)return $o(S,Se),Ne}else Se.uniforms=Z.getUniforms(S),S.onBeforeCompile(Se,E),Ne=Z.acquireProgram(Se,_e),Ue.set(_e,Ne),X.uniforms=Se.uniforms;const Pe=X.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Pe.clippingPlanes=le.uniform),$o(S,Se),X.needsLights=rl(S),X.lightsStateVersion=fe,X.needsLights&&(Pe.ambientLightColor.value=F.state.ambient,Pe.lightProbe.value=F.state.probe,Pe.directionalLights.value=F.state.directional,Pe.directionalLightShadows.value=F.state.directionalShadow,Pe.spotLights.value=F.state.spot,Pe.spotLightShadows.value=F.state.spotShadow,Pe.rectAreaLights.value=F.state.rectArea,Pe.ltc_1.value=F.state.rectAreaLTC1,Pe.ltc_2.value=F.state.rectAreaLTC2,Pe.pointLights.value=F.state.point,Pe.pointLightShadows.value=F.state.pointShadow,Pe.hemisphereLights.value=F.state.hemi,Pe.directionalShadowMap.value=F.state.directionalShadowMap,Pe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Pe.spotShadowMap.value=F.state.spotShadowMap,Pe.spotLightMatrix.value=F.state.spotLightMatrix,Pe.spotLightMap.value=F.state.spotLightMap,Pe.pointShadowMap.value=F.state.pointShadowMap,Pe.pointShadowMatrix.value=F.state.pointShadowMatrix),X.currentProgram=Ne,X.uniformsList=null,Ne}function jo(S){if(S.uniformsList===null){const O=S.currentProgram.getUniforms();S.uniformsList=zr.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function $o(S,O){const W=Te.get(S);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function nl(S,O,W,X,F){O.isScene!==!0&&(O=ve),ke.resetTextureUnits();const ie=O.fog,fe=X.isMeshStandardMaterial?O.environment:null,Se=D===null?E.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Li,_e=(X.isMeshStandardMaterial?lt:vt).get(X.envMap||fe),Ue=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ne=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Pe=!!W.morphAttributes.position,Xe=!!W.morphAttributes.normal,Ze=!!W.morphAttributes.color;let ct=Dn;X.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ct=E.toneMapping);const it=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,et=it!==void 0?it.length:0,De=Te.get(X),ot=u.state.lights;if(te===!0&&(V===!0||S!==x)){const yt=S===x&&X.id===M;le.setState(X,S,yt)}let qe=!1;X.version===De.__version?(De.needsLights&&De.lightsStateVersion!==ot.state.version||De.outputColorSpace!==Se||F.isBatchedMesh&&De.batching===!1||!F.isBatchedMesh&&De.batching===!0||F.isBatchedMesh&&De.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&De.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&De.instancing===!1||!F.isInstancedMesh&&De.instancing===!0||F.isSkinnedMesh&&De.skinning===!1||!F.isSkinnedMesh&&De.skinning===!0||F.isInstancedMesh&&De.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&De.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&De.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&De.instancingMorph===!1&&F.morphTexture!==null||De.envMap!==_e||X.fog===!0&&De.fog!==ie||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==le.numPlanes||De.numIntersection!==le.numIntersection)||De.vertexAlphas!==Ue||De.vertexTangents!==Ne||De.morphTargets!==Pe||De.morphNormals!==Xe||De.morphColors!==Ze||De.toneMapping!==ct||De.morphTargetsCount!==et)&&(qe=!0):(qe=!0,De.__version=X.version);let Nt=De.currentProgram;qe===!0&&(Nt=ar(X,O,F));let ei=!1,Ot=!1,Bi=!1;const at=Nt.getUniforms(),kt=De.uniforms;if(be.useProgram(Nt.program)&&(ei=!0,Ot=!0,Bi=!0),X.id!==M&&(M=X.id,Ot=!0),ei||x!==S){be.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),at.setValue(P,"projectionMatrix",S.projectionMatrix),at.setValue(P,"viewMatrix",S.matrixWorldInverse);const Rt=at.map.cameraPosition;Rt!==void 0&&Rt.setValue(P,oe.setFromMatrixPosition(S.matrixWorld)),Ie.logarithmicDepthBuffer&&at.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&at.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),x!==S&&(x=S,Ot=!0,Bi=!0)}if(F.isSkinnedMesh){at.setOptional(P,F,"bindMatrix"),at.setOptional(P,F,"bindMatrixInverse");const yt=F.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),at.setValue(P,"boneTexture",yt.boneTexture,ke))}F.isBatchedMesh&&(at.setOptional(P,F,"batchingTexture"),at.setValue(P,"batchingTexture",F._matricesTexture,ke),at.setOptional(P,F,"batchingIdTexture"),at.setValue(P,"batchingIdTexture",F._indirectTexture,ke),at.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&at.setValue(P,"batchingColorTexture",F._colorsTexture,ke));const Ht=W.morphAttributes;if((Ht.position!==void 0||Ht.normal!==void 0||Ht.color!==void 0)&&re.update(F,W,Nt),(Ot||De.receiveShadow!==F.receiveShadow)&&(De.receiveShadow=F.receiveShadow,at.setValue(P,"receiveShadow",F.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(kt.envMap.value=_e,kt.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(kt.envMapIntensity.value=O.environmentIntensity),Ot&&(at.setValue(P,"toneMappingExposure",E.toneMappingExposure),De.needsLights&&il(kt,Bi),ie&&X.fog===!0&&ee.refreshFogUniforms(kt,ie),ee.refreshMaterialUniforms(kt,X,I,Y,u.state.transmissionRenderTarget[S.id]),zr.upload(P,jo(De),kt,ke)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(zr.upload(P,jo(De),kt,ke),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&at.setValue(P,"center",F.center),at.setValue(P,"modelViewMatrix",F.modelViewMatrix),at.setValue(P,"normalMatrix",F.normalMatrix),at.setValue(P,"modelMatrix",F.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const yt=X.uniformsGroups;for(let Rt=0,Jr=yt.length;Rt<Jr;Rt++){const Fn=yt[Rt];Be.update(Fn,Nt),Be.bind(Fn,Nt)}}return Nt}function il(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function rl(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(S,O,W){const X=Te.get(S);X.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Te.get(S.texture).__webglTexture=O,Te.get(S.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,O){const W=Te.get(S);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0};const sl=P.createFramebuffer();this.setRenderTarget=function(S,O=0,W=0){D=S,b=O,y=W;let X=!0,F=null,ie=!1,fe=!1;if(S){const _e=Te.get(S);if(_e.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(P.FRAMEBUFFER,null),X=!1;else if(_e.__webglFramebuffer===void 0)ke.setupRenderTarget(S);else if(_e.__hasExternalTextures)ke.rebindTextures(S,Te.get(S.texture).__webglTexture,Te.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Pe=S.depthTexture;if(_e.__boundDepthTexture!==Pe){if(Pe!==null&&Te.has(Pe)&&(S.width!==Pe.image.width||S.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(S)}}const Ue=S.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(fe=!0);const Ne=Te.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ne[O])?F=Ne[O][W]:F=Ne[O],ie=!0):S.samples>0&&ke.useMultisampledRTT(S)===!1?F=Te.get(S).__webglMultisampledFramebuffer:Array.isArray(Ne)?F=Ne[W]:F=Ne,C.copy(S.viewport),U.copy(S.scissor),z=S.scissorTest}else C.copy($).multiplyScalar(I).floor(),U.copy(ae).multiplyScalar(I).floor(),z=ge;if(W!==0&&(F=sl),be.bindFramebuffer(P.FRAMEBUFFER,F)&&X&&be.drawBuffers(S,F),be.viewport(C),be.scissor(U),be.setScissorTest(z),ie){const _e=Te.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,_e.__webglTexture,W)}else if(fe){const _e=O;for(let Ue=0;Ue<S.textures.length;Ue++){const Ne=Te.get(S.textures[Ue]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ue,Ne.__webglTexture,W,_e)}}else if(S!==null&&W!==0){const _e=Te.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,_e.__webglTexture,W)}M=-1},this.readRenderTargetPixels=function(S,O,W,X,F,ie,fe,Se=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Te.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(_e=_e[fe]),_e){be.bindFramebuffer(P.FRAMEBUFFER,_e);try{const Ue=S.textures[Se],Ne=Ue.format,Pe=Ue.type;if(!Ie.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-X&&W>=0&&W<=S.height-F&&(S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Se),P.readPixels(O,W,X,F,Re.convert(Ne),Re.convert(Pe),ie))}finally{const Ue=D!==null?Te.get(D).__webglFramebuffer:null;be.bindFramebuffer(P.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(S,O,W,X,F,ie,fe,Se=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Te.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(_e=_e[fe]),_e)if(O>=0&&O<=S.width-X&&W>=0&&W<=S.height-F){be.bindFramebuffer(P.FRAMEBUFFER,_e);const Ue=S.textures[Se],Ne=Ue.format,Pe=Ue.type;if(!Ie.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Xe),P.bufferData(P.PIXEL_PACK_BUFFER,ie.byteLength,P.STREAM_READ),S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Se),P.readPixels(O,W,X,F,Re.convert(Ne),Re.convert(Pe),0);const Ze=D!==null?Te.get(D).__webglFramebuffer:null;be.bindFramebuffer(P.FRAMEBUFFER,Ze);const ct=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Iu(P,ct,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Xe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ie),P.deleteBuffer(Xe),P.deleteSync(ct),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,O=null,W=0){const X=Math.pow(2,-W),F=Math.floor(S.image.width*X),ie=Math.floor(S.image.height*X),fe=O!==null?O.x:0,Se=O!==null?O.y:0;ke.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,fe,Se,F,ie),be.unbindTexture()};const ol=P.createFramebuffer(),al=P.createFramebuffer();this.copyTextureToTexture=function(S,O,W=null,X=null,F=0,ie=null){ie===null&&(F!==0?(Qi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=F,F=0):ie=0);let fe,Se,_e,Ue,Ne,Pe,Xe,Ze,ct;const it=S.isCompressedTexture?S.mipmaps[ie]:S.image;if(W!==null)fe=W.max.x-W.min.x,Se=W.max.y-W.min.y,_e=W.isBox3?W.max.z-W.min.z:1,Ue=W.min.x,Ne=W.min.y,Pe=W.isBox3?W.min.z:0;else{const Ht=Math.pow(2,-F);fe=Math.floor(it.width*Ht),Se=Math.floor(it.height*Ht),S.isDataArrayTexture?_e=it.depth:S.isData3DTexture?_e=Math.floor(it.depth*Ht):_e=1,Ue=0,Ne=0,Pe=0}X!==null?(Xe=X.x,Ze=X.y,ct=X.z):(Xe=0,Ze=0,ct=0);const et=Re.convert(O.format),De=Re.convert(O.type);let ot;O.isData3DTexture?(ke.setTexture3D(O,0),ot=P.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(ke.setTexture2DArray(O,0),ot=P.TEXTURE_2D_ARRAY):(ke.setTexture2D(O,0),ot=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);const qe=P.getParameter(P.UNPACK_ROW_LENGTH),Nt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ei=P.getParameter(P.UNPACK_SKIP_PIXELS),Ot=P.getParameter(P.UNPACK_SKIP_ROWS),Bi=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,it.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,it.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ue),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ne),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Pe);const at=S.isDataArrayTexture||S.isData3DTexture,kt=O.isDataArrayTexture||O.isData3DTexture;if(S.isDepthTexture){const Ht=Te.get(S),yt=Te.get(O),Rt=Te.get(Ht.__renderTarget),Jr=Te.get(yt.__renderTarget);be.bindFramebuffer(P.READ_FRAMEBUFFER,Rt.__webglFramebuffer),be.bindFramebuffer(P.DRAW_FRAMEBUFFER,Jr.__webglFramebuffer);for(let Fn=0;Fn<_e;Fn++)at&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Te.get(S).__webglTexture,F,Pe+Fn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Te.get(O).__webglTexture,ie,ct+Fn)),P.blitFramebuffer(Ue,Ne,fe,Se,Xe,Ze,fe,Se,P.DEPTH_BUFFER_BIT,P.NEAREST);be.bindFramebuffer(P.READ_FRAMEBUFFER,null),be.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(F!==0||S.isRenderTargetTexture||Te.has(S)){const Ht=Te.get(S),yt=Te.get(O);be.bindFramebuffer(P.READ_FRAMEBUFFER,ol),be.bindFramebuffer(P.DRAW_FRAMEBUFFER,al);for(let Rt=0;Rt<_e;Rt++)at?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ht.__webglTexture,F,Pe+Rt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ht.__webglTexture,F),kt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,yt.__webglTexture,ie,ct+Rt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,yt.__webglTexture,ie),F!==0?P.blitFramebuffer(Ue,Ne,fe,Se,Xe,Ze,fe,Se,P.COLOR_BUFFER_BIT,P.NEAREST):kt?P.copyTexSubImage3D(ot,ie,Xe,Ze,ct+Rt,Ue,Ne,fe,Se):P.copyTexSubImage2D(ot,ie,Xe,Ze,Ue,Ne,fe,Se);be.bindFramebuffer(P.READ_FRAMEBUFFER,null),be.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else kt?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(ot,ie,Xe,Ze,ct,fe,Se,_e,et,De,it.data):O.isCompressedArrayTexture?P.compressedTexSubImage3D(ot,ie,Xe,Ze,ct,fe,Se,_e,et,it.data):P.texSubImage3D(ot,ie,Xe,Ze,ct,fe,Se,_e,et,De,it):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ie,Xe,Ze,fe,Se,et,De,it.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ie,Xe,Ze,it.width,it.height,et,it.data):P.texSubImage2D(P.TEXTURE_2D,ie,Xe,Ze,fe,Se,et,De,it);P.pixelStorei(P.UNPACK_ROW_LENGTH,qe),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Nt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ei),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ot),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Bi),ie===0&&O.generateMipmaps&&P.generateMipmap(ot),be.unbindTexture()},this.initRenderTarget=function(S){Te.get(S).__webglFramebuffer===void 0&&ke.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ke.setTextureCube(S,0):S.isData3DTexture?ke.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ke.setTexture2DArray(S,0):ke.setTexture2D(S,0),be.unbindTexture()},this.resetState=function(){b=0,y=0,D=null,be.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}const Qa={type:"change"},Go={type:"start"},Hc={type:"end"},Lr=new ko,ec=new wn,Jm=Math.cos(70*yc.DEG2RAD),pt=new B,Ct=2*Math.PI,Qe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ds=1e-6;class Qm extends fd{constructor(e,t=null){super(e,t),this.state=Qe.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ti.ROTATE,MIDDLE:Ti.DOLLY,RIGHT:Ti.PAN},this.touches={ONE:vi.ROTATE,TWO:vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new $n,this._lastTargetPosition=new B,this._quat=new $n().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new wa,this._sphericalDelta=new wa,this._scale=1,this._panOffset=new B,this._rotateStart=new Ve,this._rotateEnd=new Ve,this._rotateDelta=new Ve,this._panStart=new Ve,this._panEnd=new Ve,this._panDelta=new Ve,this._dollyStart=new Ve,this._dollyEnd=new Ve,this._dollyDelta=new Ve,this._dollyDirection=new B,this._mouse=new Ve,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=tg.bind(this),this._onPointerDown=eg.bind(this),this._onPointerUp=ng.bind(this),this._onContextMenu=lg.bind(this),this._onMouseWheel=sg.bind(this),this._onKeyDown=og.bind(this),this._onTouchStart=ag.bind(this),this._onTouchMove=cg.bind(this),this._onMouseDown=ig.bind(this),this._onMouseMove=rg.bind(this),this._interceptControlDown=ug.bind(this),this._interceptControlUp=dg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Qa),this.update(),this.state=Qe.NONE}update(e=null){const t=this.object.position;pt.copy(t).sub(this.target),pt.applyQuaternion(this._quat),this._spherical.setFromVector3(pt),this.autoRotate&&this.state===Qe.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Ct:n>Math.PI&&(n-=Ct),r<-Math.PI?r+=Ct:r>Math.PI&&(r-=Ct),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(pt.setFromSpherical(this._spherical),pt.applyQuaternion(this._quatInverse),t.copy(this.target).add(pt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=pt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new B(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=pt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Lr.origin.copy(this.object.position),Lr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Lr.direction))<Jm?this.object.lookAt(this.target):(ec.setFromNormalAndCoplanarPoint(this.object.up,this.target),Lr.intersectPlane(ec,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ds||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ds||this._lastTargetPosition.distanceToSquared(this.target)>Ds?(this.dispatchEvent(Qa),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ct/60*this.autoRotateSpeed*e:Ct/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){pt.setFromMatrixColumn(t,0),pt.multiplyScalar(-e),this._panOffset.add(pt)}_panUp(e,t){this.screenSpacePanning===!0?pt.setFromMatrixColumn(t,1):(pt.setFromMatrixColumn(t,0),pt.crossVectors(this.object.up,pt)),pt.multiplyScalar(e),this._panOffset.add(pt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;pt.copy(r).sub(this.target);let s=pt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ct*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ct*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ct*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ct*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ct*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ct*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ct*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ct*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ve,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function eg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function tg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function ng(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hc),this.state=Qe.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ig(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ti.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Qe.DOLLY;break;case Ti.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qe.ROTATE}break;case Ti.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qe.PAN}break;default:this.state=Qe.NONE}this.state!==Qe.NONE&&this.dispatchEvent(Go)}function rg(i){switch(this.state){case Qe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Qe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Qe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function sg(i){this.enabled===!1||this.enableZoom===!1||this.state!==Qe.NONE||(i.preventDefault(),this.dispatchEvent(Go),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Hc))}function og(i){this.enabled!==!1&&this._handleKeyDown(i)}function ag(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case vi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Qe.TOUCH_ROTATE;break;case vi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Qe.TOUCH_PAN;break;default:this.state=Qe.NONE}break;case 2:switch(this.touches.TWO){case vi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Qe.TOUCH_DOLLY_PAN;break;case vi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Qe.TOUCH_DOLLY_ROTATE;break;default:this.state=Qe.NONE}break;default:this.state=Qe.NONE}this.state!==Qe.NONE&&this.dispatchEvent(Go)}function cg(i){switch(this._trackPointer(i),this.state){case Qe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Qe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Qe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Qe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Qe.NONE}}function lg(i){this.enabled!==!1&&i.preventDefault()}function ug(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function dg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Vc(i){const t=i==="IN_LOCKED"||i==="IN_UNLOCKED"?[[10,5,0],[10,0,0],[10,0,5],[10,5,5]]:[[10,5,0],[5,5,0],[5,5,5],[10,5,5]],n=Is(i),r=tt(n,[0,0,0]),s=Array.from({length:33},(o,a)=>{const l=a*2*Math.PI/32;return tt(n,[.45*Math.cos(l),.45*Math.sin(l),0])});return{corners:t,hinge:[[10,5,0],[10,5,5]],mark:r,notch:tt(n,[0,.65,0]),ring:s}}function Pt(i,e,t,n,r,s="unknown"){const o=e<=3?5:10,a=(i-1)*5,l=`${i}-${e}`;return{id:`map-door-${l}`,room:l,floor:i-1,start:[t,o,a],end:[n,o,a],hinge:s,state:r,opensToward:r==="open"&&s!=="unknown"?"inside":"unknown",source:"U1 平面图示意；非当前时刻的门状态；门高及精确门位未知"}}const hg=[Pt(1,1,.1,1.1,"open","start"),Pt(1,3,15.1,16.1,"open","start"),Pt(1,4,3.9,4.9,"open","end"),Pt(1,5,8.9,9.9,"open","end"),Pt(1,6,13.9,14.9,"closed"),Pt(1,7,15.1,16.1,"closed"),...[2,3].flatMap(i=>[Pt(i,1,3.8,4.8,"closed"),Pt(i,2,8.75,9.75,"closed"),Pt(i,3,15.2,16.2,"closed"),Pt(i,4,3.9,4.9,"closed"),i===2?Pt(i,5,8.9,9.9,"open","end"):Pt(i,5,8.9,9.9,"closed"),Pt(i,6,13.9,14.9,"closed"),Pt(i,7,15.1,16.1,"closed")])],st=["#155a9d","#555e68"],At="#a83f00",Gc=[[0,1],[0,2],[0,4],[1,3],[1,5],[2,3],[2,6],[3,7],[4,5],[4,6],[5,7],[6,7]];function qr(i,e){return Array.from({length:8},(t,n)=>[n&1?e[0]:i[0],n&2?e[1]:i[1],n&4?e[2]:i[2]])}function Wc(i){return i.startsWith("platform-")?"platform":i==="meteor"?"meteor":i.startsWith("barrier-")?"barrier":i==="device"?"device":"repair"}function Xc(i,e){const t=i.geometry.rooms.find(n=>n.id===e.regionId);return[e.position[0],e.position[1],(t?.min[2]??e.position[2])+.35]}function qc(i){return i.caseId==="case3"&&i.contentVersion==="0.3-reference-map"?hg:[]}function Yc(i){if(i.state!=="open"||i.hinge==="unknown"||i.opensToward!=="inside")return[i.start,i.end];const e=i.hinge==="start"?i.start:i.end,t=Number(i.room.split("-")[1]),n=t<=3?-1:1;return[e,[e[0],e[1]+n*Math.abs(i.end[0]-i.start[0]),e[2]]]}function fg(i,e,t){const n=i.geometry.rooms.flatMap(l=>qr(l.min,l.max).map(c=>tt(e,c))),r=n.length?Math.min(...n.map(l=>l[0])):0,s=i.geometry.rooms.length?Math.max(...i.geometry.rooms.map(l=>l.max[0])):20,o=t?s+6-r:0,a=e.slice();return a[3]+=o,{matrix:a,offset:o}}function pg(i,e,t,n,r,s,o,a="OUT_LOCKED",l="OUT_LOCKED",c=[],p=null){const d=document.createElementNS("http://www.w3.org/2000/svg","svg");d.setAttribute("role","img"),d.setAttribute("aria-label","双世界辅助剖面");const h=r===0?[0,1]:r===1?[0,2]:[1,2],f=E=>[E[h[0]],-E[h[1]]];let g=[];const _=[];[kr(),t].forEach((E,T)=>{if(!(o==="real"&&T===1||o==="anchor"&&T===0))for(const b of e.geometry.rooms){if(s>=0&&Math.floor(b.min[2]/5)!==s)continue;const y=qr(b.min,b.max).map(D=>f(tt(E,D)));g.push(...y);for(const[D,M]of Gc)_.push({a:y[D],b:y[M],color:st[T],dash:T===1})}}),g.push(f(n),...c.map(E=>f(E.position))),g.length||(g=[[0,0],[10,10]]);const m=[0,1].map(E=>Math.min(...g.map(T=>T[E]))-3),u=[0,1].map(E=>Math.max(...g.map(T=>T[E]))+3);d.setAttribute("viewBox",`${m[0]} ${m[1]} ${u[0]-m[0]} ${u[1]-m[1]}`);for(const E of _){const T=document.createElementNS(d.namespaceURI,"line");for(const[b,y]of Object.entries({x1:E.a[0],y1:E.a[1],x2:E.b[0],y2:E.b[1],stroke:E.dash?At:E.color,"stroke-width":E.dash?.075:.05,"stroke-dasharray":E.dash?"0.5 0.25":"0.1 0.15"}))T.setAttribute(b,String(y));d.append(T)}[kr(),t].forEach((E,T)=>{if(!(o==="real"&&T===1||o==="anchor"&&T===0)){for(const b of e.geometry.topology?.panels??[]){if(s>=0&&Math.floor(b.vertices[0][2]/5)!==s)continue;const y=document.createElementNS(d.namespaceURI,"polygon");y.setAttribute("points",b.vertices.map(D=>f(tt(E,D)).join(",")).join(" ")),y.setAttribute("fill","none"),y.setAttribute("stroke",T?At:st[T]),y.setAttribute("stroke-width",T?".16":".14"),T&&y.setAttribute("stroke-dasharray",".55 .3"),d.append(y)}for(const b of qc(e)){if(s>=0&&b.floor!==s)continue;const[y,D]=Yc(b).map(C=>f(tt(E,C))),M=document.createElementNS(d.namespaceURI,"line");for(const[C,U]of Object.entries({x1:y[0],y1:y[1],x2:D[0],y2:D[1],stroke:T?At:st[T],"stroke-width":".2"}))M.setAttribute(C,String(U));(b.state==="unknown"||b.state==="open"&&b.hinge==="unknown"||T)&&M.setAttribute("stroke-dasharray",".22 .12");const x=document.createElementNS(d.namespaceURI,"title");x.textContent=b.room+"门 · 地图示意，实际状态由玩家记录",M.append(x),d.append(M)}for(const b of e.geometry.topology?.facilities??[]){const y=e.geometry.rooms.find(U=>U.id===b.regionId);if(s>=0&&(!y||Math.floor(y.min[2]/5)!==s))continue;const D=f(tt(E,Xc(e,b))),M=Wc(b.id),x=document.createElementNS(d.namespaceURI,M==="platform"||M==="repair"?"rect":"circle");x.tagName==="rect"?(x.setAttribute("x",String(D[0]-.32)),x.setAttribute("y",String(D[1]-.32)),x.setAttribute("width",".64"),x.setAttribute("height",".64")):(x.setAttribute("cx",String(D[0])),x.setAttribute("cy",String(D[1])),x.setAttribute("r",M==="barrier"?".58":".32")),x.setAttribute("fill",M==="barrier"?"none":M==="meteor"||M==="device"?"#a8392f":"#fff"),x.setAttribute("stroke",T?At:st[T]),x.setAttribute("stroke-width",M==="barrier"?".12":".1"),(M==="barrier"||T)&&x.setAttribute("stroke-dasharray",".18 .12"),x.setAttribute("aria-label",b.label+"（位置示意）");const C=document.createElementNS(d.namespaceURI,"title");C.textContent=b.label+"（位置示意）",x.append(C),d.append(x)}if(e.caseId==="case3"&&(s<0||s===0)){const b=Vc(T?l:a),y=document.createElementNS(d.namespaceURI,"polygon");y.setAttribute("points",b.corners.map(z=>f(tt(E,z)).join(",")).join(" ")),y.setAttribute("fill","none"),y.setAttribute("stroke",T?At:st[T]),y.setAttribute("stroke-width",".24"),y.setAttribute("stroke-dasharray",T?".55 .3":""),y.setAttribute("aria-label",T?"锚定密封门":"现实密封门"),d.append(y);const D=document.createElementNS(d.namespaceURI,"polyline");D.setAttribute("points",b.ring.map(z=>f(tt(E,z)).join(",")).join(" ")),D.setAttribute("fill","none"),D.setAttribute("stroke",st[T]),D.setAttribute("stroke-width",".12"),d.append(D);const M=f(tt(E,b.mark)),x=f(tt(E,b.notch)),C=document.createElementNS(d.namespaceURI,"line");for(const[z,k]of Object.entries({x1:M[0],y1:M[1],x2:x[0],y2:x[1],stroke:st[T],"stroke-width":".18"}))C.setAttribute(z,String(k));d.append(C);const U=document.createElementNS(d.namespaceURI,"circle");U.setAttribute("cx",String(M[0])),U.setAttribute("cy",String(M[1])),U.setAttribute("r",".16"),U.setAttribute("fill",st[T]),d.append(U)}if(e.caseId==="case3"){const b=f(tt(E,[0,0,0]));for(const[y,D]of[[[0,0,3],"上"],[[0,0,-3],"重力"]]){const M=f(tt(E,y));if(Math.hypot(M[0]-b[0],M[1]-b[1])<1e-6)continue;const x=document.createElementNS(d.namespaceURI,"line");for(const[U,z]of Object.entries({x1:b[0],y1:b[1],x2:M[0],y2:M[1],stroke:st[T],"stroke-width":".15"}))x.setAttribute(U,String(z));d.append(x);const C=document.createElementNS(d.namespaceURI,"text");C.setAttribute("x",String(M[0])),C.setAttribute("y",String(M[1])),C.setAttribute("font-size",".8"),C.setAttribute("fill",st[T]),C.textContent=(T?"锚":"现")+D,d.append(C)}}for(const b of e.geometry.rooms){if(!p||b.id!==p||s>=0&&Math.floor(b.min[2]/5)!==s)continue;const y=b.min.map((z,k)=>(z+b.max[k])/2),D=f(tt(E,y)),M=document.createElementNS(d.namespaceURI,"text"),x=e.geometry.topology?.regions.find(z=>z.regionId===b.id),C=e.geometry.topology?.facilities.find(z=>z.regionId===b.id),U=x?.owner?x.owner+"房":e.caseId==="case3"&&b.id==="1-2"?"密封门(地图)":C?C.label+"(地图)":"";M.setAttribute("x",String(D[0])),M.setAttribute("y",String(D[1]+(T?.8:-.8))),M.setAttribute("fill",T?At:st[T]),M.setAttribute("font-size",".85"),M.setAttribute("font-weight","700"),M.setAttribute("text-anchor","middle"),M.setAttribute("data-room-id",b.id),M.setAttribute("data-room-world",T?"anchor":"real"),M.textContent=b.id+(U?" · "+U:""),d.append(M)}}});for(const E of c){const T=f(E.position),b=document.createElementNS(d.namespaceURI,"circle");b.setAttribute("cx",String(T[0])),b.setAttribute("cy",String(T[1])),b.setAttribute("r",E.kind==="actor"?".32":".23"),b.setAttribute("fill",E.world==="real"?"#075a92":"#4c4c4c"),b.setAttribute("stroke","white"),b.setAttribute("stroke-width",".08"),d.append(b);const y=document.createElementNS(d.namespaceURI,"text");y.setAttribute("x",String(T[0]+.4)),y.setAttribute("y",String(T[1])),y.setAttribute("font-size",".8"),y.textContent=E.label+"（假设）",d.append(y)}const R=f(n),A=document.createElementNS(d.namespaceURI,"circle");A.setAttribute("cx",String(R[0])),A.setAttribute("cy",String(R[1])),A.setAttribute("r",".25"),A.setAttribute("fill","#193447"),d.append(A),d.addEventListener("click",E=>{const T=d.createSVGPoint();T.x=E.clientX,T.y=E.clientY;const b=d.getScreenCTM();if(!b)return;const y=T.matrixTransform(b.inverse());i.dispatchEvent(new CustomEvent("probe",{detail:{axes:h,values:[y.x,-y.y]}}))}),i.replaceChildren(d)}function mg(i,e){const t=new Zm({antialias:!0});t.setPixelRatio(Math.min(devicePixelRatio,1.5)),t.setClearColor("#f1f5f6"),i.replaceChildren(t.domElement);const n=new sd,r=new Wt(40,1,.1,1e3);r.up.set(0,0,1),r.position.set(38,-38,36);const s=new Qm(r,t.domElement);s.target.set(10,7,6),s.update();const o=new Wi;n.add(o);let a=[];const l=()=>{for(const f of a)f.element.remove();a=[]},c=()=>{t.render(n,r);const f=i.getBoundingClientRect(),g=[];for(const _ of a){const m=_.position.clone().project(r),u=_.element;if(m.z<-1||m.z>1){u.hidden=!0;continue}let R=(m.x+1)*f.width/2,A=(1-m.y)*f.height/2;if(R<0||R>f.width||A<0||A>f.height){u.hidden=!0;continue}u.hidden=!1;const E=u.offsetWidth,T=u.offsetHeight,b={left:R-E/2,right:R+E/2,top:A-T/2,bottom:A+T/2};if(g.some(y=>b.left<y.right+2&&b.right>y.left-2&&b.top<y.bottom+2&&b.bottom>y.top-2)){u.hidden=!0;continue}g.push(b),u.style.left=R+"px",u.style.top=A+"px"}};s.addEventListener("change",c);let p="";const d=()=>{const f=new Oi().setFromObject(o);if(f.isEmpty())return;const g=f.getCenter(new B),_=i.getBoundingClientRect(),m=Math.max(.1,_.width/Math.max(1,_.height)),u=Math.tan(yc.degToRad(r.fov)/2),R=u*m,A=new B(28,-45,30).normalize();s.target.copy(g),r.position.copy(g).add(A),r.lookAt(g);const E=r.quaternion.clone().invert();let T=10;for(const b of qr([f.min.x,f.min.y,f.min.z],[f.max.x,f.max.y,f.max.z])){const y=new B(...b).sub(g).applyQuaternion(E);T=Math.max(T,y.z+Math.abs(y.x)/R,y.z+Math.abs(y.y)/u)}r.position.copy(g).addScaledVector(A,T*1.12),s.update()},h=new ResizeObserver(()=>{const f=i.getBoundingClientRect();t.setSize(f.width,f.height),r.aspect=f.width/Math.max(1,f.height),r.updateProjectionMatrix(),d(),c()});return h.observe(i),t.domElement.addEventListener("webglcontextlost",f=>{f.preventDefault(),e()}),{update(f,g,_,m,u,R="OUT_LOCKED",A="OUT_LOCKED",E=[],T=!1,b=null){for(const k of[...o.children]){o.remove(k);const N=k;N.geometry?.dispose(),N.material?.dispose()}const y=T&&u==="both",D=fg(f,g,y),M=D.offset,x=[kr(),D.matrix];l();for(const[k,N]of x.entries())if(!(u==="real"&&k===1||u==="anchor"&&k===0))for(const G of f.geometry.rooms){if(!b||G.id!==b||m>=0&&Math.floor(G.min[2]/5)!==m)continue;const Y=f.geometry.topology?.regions.find(V=>V.regionId===G.id),j=(f.geometry.topology?.facilities??[]).filter(V=>V.regionId===G.id).map(V=>V.label);f.caseId==="case3"&&G.id==="1-2"&&!j.some(V=>V.includes("密封门"))&&j.push("密封门");const Q=G.id.endsWith("-hall")?G.id.replace("-hall","层走廊"):G.id,$=Y?.owner?Y.owner+"房":j[0]?j[0]+"(地图)":"",ae=$?Q+" · "+$:Q,ge=[Q,Y?.owner?"房间归属："+Y.owner:"",j.length?"地图注记："+j.join(" / "):""].filter(Boolean).join(" · "),ye=document.createElement("span");ye.textContent=ae,ye.title=ge,ye.dataset.roomId=G.id,ye.dataset.roomWorld=k?"anchor":"real",ye.setAttribute("aria-label","房间 "+ge),Object.assign(ye.style,{position:"absolute",zIndex:"1",pointerEvents:"none",whiteSpace:"nowrap",padding:"1px 3px",borderRadius:"3px",border:"1px solid "+(k?At:st[k]),background:"rgba(255,255,255,.94)",color:k?At:st[k],font:'600 12px/1.3 system-ui, "Microsoft YaHei", sans-serif',transform:"translate(-50%,-50%)"}),i.append(ye);const te=G.min.map((V,q)=>(V+G.max[q])/2);a.push({element:ye,position:new B(...tt(N,te)),world:k})}x.forEach((k,N)=>{if(!(u==="real"&&N===1||u==="anchor"&&N===0))for(const G of f.geometry.rooms){if(m>=0&&Math.floor(G.min[2]/5)!==m)continue;const Y=qr(G.min,G.max).map(ge=>tt(k,ge)),I=new Mt;I.setAttribute("position",new mt([0,1,3,0,3,2].flatMap(ge=>Y[ge]),3)),I.computeVertexNormals();const j=new wt(I,new An({color:st[N],side:Xt,transparent:!0,opacity:N?.06:.1,depthWrite:!1}));o.add(j);const Q=Gc.flatMap(([ge,ye])=>[...Y[ge],...Y[ye]]),$=new Mt;$.setAttribute("position",new mt(Q,3));const ae=new Rr($,new Cr({color:N?At:st[N],dashSize:N?.65:.18,gapSize:N?.3:.14,transparent:!0,opacity:N?.85:.55}));ae.computeLineDistances(),o.add(ae)}}),x.forEach((k,N)=>{if(u==="real"&&N===1||u==="anchor"&&N===0)return;for(const I of f.geometry.topology?.panels??[]){if(m>=0&&Math.floor(I.vertices[0][2]/5)!==m)continue;const j=I.vertices.map(te=>tt(k,te)),Q=new Mt;Q.setAttribute("position",new mt([0,1,2,0,2,3].flatMap(te=>j[te]),3)),Q.computeVertexNormals(),o.add(new wt(Q,new An({color:st[N],side:Xt,transparent:!0,opacity:N?.08:.16,depthWrite:!1})));const $=[0,1,1,2,2,3,3,0].flatMap(te=>j[te]),ae=new Mt;ae.setAttribute("position",new mt($,3));const ge=N?new Cr({color:At,dashSize:.65,gapSize:.3}):new xi({color:st[N]}),ye=new Rr(ae,ge);N&&ye.computeLineDistances(),o.add(ye)}for(const I of qc(f)){if(m>=0&&I.floor!==m)continue;const[j,Q]=Yc(I),$=2,ge=[j,Q,[Q[0],Q[1],Q[2]+$],[j[0],j[1],j[2]+$],j].map(oe=>new B(...tt(k,oe))),ye=new Mt().setFromPoints(ge),te=I.state==="unknown"||I.state==="open"&&I.hinge==="unknown",V=N||te?new Cr({color:N?At:st[N],dashSize:.25,gapSize:.14}):new xi({color:st[N]}),q=new bo(ye,V);(N||te)&&q.computeLineDistances(),q.userData={doorId:I.id,referenceOnly:!0},o.add(q)}for(const I of f.geometry.topology?.facilities??[]){const j=f.geometry.rooms.find(te=>te.id===I.regionId);if(m>=0&&(!j||Math.floor(j.min[2]/5)!==m))continue;const Q=Wc(I.id),$=Xc(f,I),ae=Q==="platform"||Q==="repair"?new Jn(.7,.7,.18):Q==="barrier"?new Ho(.46,.53,20):new Mi(.32,12,8),ge=new An({color:Q==="meteor"||Q==="device"?"#a8392f":N?At:st[N],side:Xt,transparent:Q==="barrier",opacity:Q==="barrier"?.8:1}),ye=new wt(ae,ge);ye.position.set(...$),ye.applyMatrix4(new dt().set(...k)),ye.userData={facilityId:I.id,label:I.label,world:N?"anchor":"real"},o.add(ye)}if(f.caseId==="case3"&&(m<0||m===0)){const I=Vc(N?A:R),j=(ge,ye=!1)=>{const te=ge.map(Me=>new B(...tt(k,Me))),V=new Mt().setFromPoints(te),q=N?new Cr({color:At,dashSize:.55,gapSize:.25}):new xi({color:st[N],linewidth:2}),oe=ye?new Rr(V,q):new bo(V,q);N&&oe.computeLineDistances(),o.add(oe)};j([...I.corners,I.corners[0]]),j(I.ring),j([I.mark,I.notch]),j(I.hinge,!0);const Q=new Mi(.13,10,8),$=new An({color:st[N]}),ae=new wt(Q,$);ae.position.set(...tt(k,I.mark)),o.add(ae)}const G=m<0?0:m*5;[[[0,0,G],[0,0,G+4]],[[0,0,G],[0,0,G-3]]].forEach(([I,j],Q)=>{const $=tt(k,I),ae=tt(k,j),ge=new Mt().setFromPoints([new B(...$),new B(...ae)]);o.add(new Rr(ge,new xi({color:Q?"#a14f35":N?At:st[N]})));const ye=document.createElement("span");ye.textContent=Q?"重力":"上",ye.setAttribute("aria-label",(N?"锚定":"现实")+ye.textContent+"方向"),Object.assign(ye.style,{position:"absolute",zIndex:"1",pointerEvents:"none",padding:"1px 3px",borderRadius:"3px",background:"rgba(255,255,255,.9)",color:Q?"#843b28":N?At:st[N],font:'600 12px/1.3 system-ui, "Microsoft YaHei", sans-serif',transform:"translate(-50%,-50%)"}),i.append(ye),a.push({element:ye,position:new B(...ae),world:N})})});for(const k of E){const N=k.kind==="actor"?new Mi(.28,12,8):new Jn(.4,.4,.4),G=new wt(N,new An({color:k.world==="real"?"#075a92":"#4c4c4c"}));G.position.set(k.position[0]+(k.world==="anchor"?M:0),k.position[1],k.position[2]),o.add(G)}const C=new Mi(.22,12,8),U=new wt(C,new An({color:"#193447"}));U.position.set(..._),o.add(U);const z=[f.caseId,f.contentVersion,m,u,R,A,y].join("|");z!==p&&(p=z,d()),c()},reset(){d(),c()},dispose(){h.disconnect(),s.dispose(),l(),t.dispose(),i.replaceChildren()}}}const Ri=i=>typeof i=="number"&&Number.isSafeInteger(i)&&Math.abs(i)<=315576e4;function gg(i,e){if(i===null)return{status:"undetermined",message:"累计暴露时间未知。"};if(!Ri(i)||i<0)throw Error("辐射累计必须是非负整数秒");return i>3600?{status:"determined",message:`已记录 ${i} 秒，超过1小时；按公开规则进入濒死。`}:e?{status:"determined",message:`按玩家填写的完整累计 ${i} 秒，尚未超过1小时。`}:{status:"undetermined",message:`已记录 ${i} 秒；玩家未确认记录完整，无法确定累计总量。`}}function _g(i,e){if(!Ri(e)||!Array.isArray(i)||i.length>500)throw Error("时间或记录数量无效");const t=i.map(({start:o,end:a})=>{if(!Ri(o)||!Ri(a)||a<o)throw Error("内开区间起止时间无效");return{start:Math.max(o,e-86400),end:Math.min(a,e)}}).filter(o=>o.end>o.start).sort((o,a)=>o.start-a.start||o.end-a.end);let n=0,r,s;for(const o of t){if(r===void 0){r=o.start,s=o.end;continue}o.start<=s?s=Math.max(s,o.end):(n+=s-r,r=o.start,s=o.end)}return n+(r===void 0?0:s-r)}function vg(i,e,t){if(e===null)return{status:"undetermined",message:"未填写检查时刻。"};const n=_g(i,e);return n>14400?{status:"determined",message:`该时刻之前滚动24小时，已记录内开 ${n} 秒，超过4小时；按公开规则失去气密性。`}:t?{status:"determined",message:`按玩家确认的完整记录，滚动24小时内开 ${n} 秒，尚未超过4小时。`}:{status:"undetermined",message:`已记录内开 ${n} 秒；窗口内记录尚未确认完整，不能确定累计总量。`}}function xg(i,e){if(i===null||e===null)return{status:"undetermined",message:"请填写本次计时起点和检查时间。"};if(!Ri(i)||!Ri(e)||e<i)throw Error("检查时间不得早于打开时间");const t=e-i;return t>=600?{status:"determined",message:`距本次计时起点 ${t} 秒，已到10分钟自动关闭时点；如有其他关门或重开事件需单独考虑。`}:{status:"determined",message:`距本次计时起点 ${t} 秒，尚未到本次10分钟自动关闭时点；提前关门或重开需另行考虑。`}}function Mg(i,e,t){if(i!==null&&(!Number.isFinite(i)||i<0||i>1e5))throw Error("距离必须是有效的非负米数");return e!=="real"?{status:"undetermined",message:"未确认印章在现实世界；当前公开口径下不能推断该世界的召回结果。"}:t==="no"?{status:"determined",message:"按玩家假设，印章无人使用；符合公开召回条件。"}:i!==null&&i>5?{status:"determined",message:"按玩家假设，现实世界中的垂直距离超过5米；符合公开召回条件。"}:t==="unknown"||i===null?{status:"undetermined",message:"使用状态或垂直距离未知，无法确定是否触发召回。"}:{status:"determined",message:"按玩家填写的使用状态及垂直距离，上述两个召回条件均未触发。"}}const rr=()=>({version:1,radiation:"",radiationComplete:!1,intervals:[],windowAt:"",sealComplete:!1,doorStart:"",doorAt:"",distance:"",world:"unknown",use:"unknown"});function Ao(i){if(!i||typeof i!="object")throw Error("规则检查数据格式无效");const e=i,t=n=>typeof n=="string"&&n.length<=40;if(e.version!==1||!t(e.radiation)||typeof e.radiationComplete!="boolean"||!Array.isArray(e.intervals)||e.intervals.length>100||!e.intervals.every(n=>n&&t(n.start)&&t(n.end))||!t(e.windowAt)||typeof e.sealComplete!="boolean"||!t(e.doorStart)||!t(e.doorAt)||!t(e.distance)||!["unknown","real","anchor"].includes(e.world)||!["unknown","yes","no"].includes(e.use))throw Error("规则检查字段无效");return structuredClone(e)}function Sg(i,e=()=>{}){let t=rr(),n=[],r="";const s=(d,h)=>{const f=document.createElement(d);return h!==void 0&&(f.textContent=h),f},o=(d,h="text")=>{const f=s("input");return f.type=h,f.value=d,h==="datetime-local"&&(f.step="1"),f},a=(d,h)=>{const f=s("label");return f.append(document.createTextNode(d),h),f},l=(d,h)=>{const f=s("select");for(const[g,_]of d){const m=s("option",_);m.value=g,f.append(m)}return f.value=h,f},c=(d,h)=>{const f=s("button",d);return f.type="button",f.onclick=h,f};function p(){const d=s("section");d.append(s("h2","公开条件检查"),s("p","仅计算你填写的假设，不判断完整方案；未确认的条件保持未知。"));const h=s("form"),f=o(t.radiation,"number");f.min="0",f.step="1";const g=o("","checkbox");g.checked=t.radiationComplete,h.append(s("h3","强辐射累计"),a("已记录累计秒数（留空为未知）",f),a("我已确认累计记录完整",g),s("p","原文：强辐射累计超过1小时；P3源页6。")),h.append(s("h3","密封门内开累计"),s("p","填写你假设的内开起止时间。24小时按检查时刻向前滚动；重叠区间只计一次。P3源页8。"));const _=[];function m(){return Ao({version:1,radiation:f.value,radiationComplete:g.checked,intervals:_.map(C=>({start:C.start.value,end:C.end.value})),windowAt:R.value,sealComplete:A.checked,doorStart:E.value,doorAt:T.value,distance:b.value,world:y.value,use:D.value})}const u=s("div");t.intervals.forEach((C,U)=>{const z=s("div"),k=o(C.start,"datetime-local"),N=o(C.end,"datetime-local");_.push({start:k,end:N}),z.append(a(`区间${U+1}开始`,k),a(`区间${U+1}结束`,N),c("删除此区间",()=>{const G=m();G.intervals.splice(U,1),t=G,e(structuredClone(t)),n=[],p()})),u.append(z)}),h.append(u,c("增加内开区间",()=>{const C=m();if(C.intervals.length>=100){r="最多记录100个区间。",p();return}C.intervals.push({start:"",end:""}),t=C,e(structuredClone(t)),n=[],p()}));const R=o(t.windowAt,"datetime-local"),A=o("","checkbox");A.checked=t.sealComplete,h.append(a("检查时刻",R),a("我已确认该24小时内的门态记录完整",A));const E=o(t.doorStart,"datetime-local"),T=o(t.doorAt,"datetime-local");h.append(s("h3","10分钟自动关闭"),s("p","这里只算一次计时周期：3-2从解锁开始，1-6门与普通舱盖从打开开始。提前关闭、重新解锁或重开须另行考虑。"),a("本次计时起点",E),a("检查时间",T));const b=o(t.distance,"number");b.min="0",b.step="any";const y=l([["unknown","未知"],["real","现实世界"],["anchor","锚定世界"]],t.world),D=l([["unknown","未知"],["yes","有人使用"],["no","无人使用"]],t.use);h.append(s("h3","印章召回条件"),a("印章所在世界",y),a("使用状态",D),a("与悬浮台的垂直距离（米；留空为未知）",b),s("p","按当前公开文字判断现实世界；P3源页7。"));const M=s("button","保存并计算已填条件");M.type="submit",h.append(M),h.onsubmit=C=>{C.preventDefault();try{const U=m(),z=Y=>Y.trim()?Rn(Y):null,k=Y=>{if(!Y.trim())return null;const I=Number(Y);if(!Number.isFinite(I))throw Error("数字无效");return I},N=Y=>{try{return Y()}catch(I){return{status:"undetermined",message:I instanceof Error?I.message:"该项输入无效"}}},G=[N(()=>gg(k(U.radiation),U.radiationComplete)),N(()=>{const Y=U.intervals.map(I=>{if(!I.start||!I.end)throw Error("请填写每个内开区间的开始和结束时间，或删除未完成的区间");return{start:Rn(I.start),end:Rn(I.end)}});return vg(Y,z(U.windowAt),U.sealComplete)}),N(()=>xg(z(U.doorStart),z(U.doorAt))),N(()=>Mg(k(U.distance),U.world,U.use))];t=U,n=G,r="",e(structuredClone(t)),p()}catch(U){r=U instanceof Error?U.message:"输入无效";const z=i.querySelector("[data-rules-error]");z&&(z.textContent=r)}},d.append(h);const x=s("p",r);if(x.setAttribute("role","status"),x.dataset.rulesError="",d.append(x),n.length){const C=s("ol");for(const[U,z]of n.entries())C.append(s("li",`${["强辐射","内开累计","自动关闭","印章召回"][U]}：${z.message}`));d.append(s("h3","本次局部结果"),C)}i.replaceChildren(d)}return p(),{getState:()=>structuredClone(t),setState:d=>{const h=Ao(d);JSON.stringify(h)!==JSON.stringify(t)&&(n=[],r=""),t=h,p()}}}const Eg="",yg=document.querySelector("#app");yg.innerHTML=`<header><div><h1>空间推演工作台</h1><p id="title"></p></div><div class="bar">${Eg}<span id="packInfo" class="hint" style="margin-right:8px"></span><button id="base">重新开始第三案</button><button id="import">导入场景 / 方案</button><button id="export">导出方案</button><input hidden type="file" id="file" accept=".json,application/json"></div></header><div id="notice" role="status">空间辅助视图 · 只计算当前设置，不判断完整方案。</div><main><section class="stage"><div class="bar"><button id="mode">切换三维</button><select id="plane" aria-label="剖面方向"><option value="0">俯视 · 东西 / 南北</option><option value="1">侧视 · 东西 / 高度</option><option value="2">侧视 · 南北 / 高度</option></select><button id="separate" title="仅改变画面排布，不改变空间关系">切换叠合</button><button id="resetview">复位视角</button></div><div id="spacewarning" role="status" hidden></div><div id="viewport"></div><div class="room-chooser" id="room-chooser" hidden><label for="room-select">查看某个房间</label><select id="room-select"><option value="">不显示房间标记</option></select><p id="room-selected-description" class="hint">选择房间后，模型只标出所选房间；其他房间保持清爽。</p></div><div class="world-controls" role="group" aria-label="选择显示的世界"><button type="button" data-world="both" aria-pressed="true">同时显示</button><button type="button" data-world="real" aria-pressed="false">仅现实</button><button type="button" data-world="anchor" aria-pressed="false">仅锚定</button></div><div class="legend"><span class="world-key real"><i aria-hidden="true"></i>现实世界 · 蓝色实线</span><span class="world-key anchor"><i aria-hidden="true"></i>锚定世界 · 灰色／橙色虚线</span><span id="viewhint">展开观察：两座建筑在画面中分开，真实叠合关系不变</span><span>较浅细线表示房间编号范围，较粗轮廓表示墙面</span></div><details class="room-directory" id="room-directory" hidden><summary>查看房间与设施</summary><p class="hint">房号和用途来自已发地图；设施位置为示意，不代表某一时刻的实际状态。可先选择一层，再在模型中查看。</p><div class="room-floor-controls" role="group" aria-label="选择查看楼层"><button type="button" data-room-floor="-1" aria-pressed="true">全部</button><button type="button" data-room-floor="0" aria-pressed="false">一层</button><button type="button" data-room-floor="1" aria-pressed="false">二层</button><button type="button" data-room-floor="2" aria-pressed="false">三层</button></div><div id="room-directory-content"></div></details><p class="hint">三维中拖动旋转、双指或滚轮缩放；可在“显示世界”选择双世界叠合。二维中点击放置探针，也可直接输入坐标。普通门按参考图示意；门高与精确位置未给出，门扇不随时间自动变化。</p></section><aside><label for="pair">选择门态组合（16种）</label><select id="pair"></select><label for="real">现实门状态（假设）</label><select id="real"></select><label for="anchor">锚定门状态（假设）</label><select id="anchor"></select><label for="visible">显示世界</label><select id="visible"><option value="both" selected>显示两个世界</option><option value="real">仅现实</option><option value="anchor">仅锚定</option></select><label for="floor">显示楼层</label><select id="floor"><option value="-1" selected>全部</option><option value="0">一层</option><option value="1">二层</option><option value="2">三层</option></select><label>现实探针坐标（米）</label><div class="coords"><input id="x" aria-label="东向x坐标" type="number" step="0.1"><input id="y" aria-label="北向y坐标" type="number" step="0.1"><input id="z" aria-label="高度z坐标" type="number" step="0.1"></div><button id="apply">应用坐标</button><output id="result"></output><div class="bar" style="margin-top:16px"><button id="undo">撤销</button><button id="redo">重做</button></div><p id="saved" class="hint"></p><details><summary>来源与使用边界</summary><div id="sources"></div><div id="regioninfo"></div><h3>设施位置（地图示意）</h3><div id="facilityinfo"></div><p class="hint">当前是几何辅助模式。透明轮廓不代表人物实际视野；未检查人物权限、行动历史和碰撞安全。当前设置都是你的假设。</p></details></aside></main><section class="workbench" id="workbench" hidden><details><summary>人物与物件</summary><div id="entities-panel"></div></details><details><summary>规则条件检查</summary><div id="rules-panel"></div></details><details><summary>时间线与独立会话</summary><div id="time-panel"></div></details></section>`;const ce=i=>document.getElementById(i),wo=["外锁","外开（仅解锁）","内锁","内开"];for(const i of["real","anchor"])for(let e=0;e<Un.length;e++){const t=document.createElement("option");t.value=Un[e],t.textContent=wo[e],ce(i).append(t)}for(const i of uc){const e=document.createElement("option");e.value=i.real+"|"+i.anchor,e.textContent=i.number+" · 现实 "+wo[Un.indexOf(i.real)]+" / 锚定 "+wo[Un.indexOf(i.anchor)],ce("pair").append(e)}{const i=document.createElement("option");i.value="UNKNOWN",i.textContent="未知（会话历史未完整）",i.hidden=!0,i.disabled=!0,ce("pair").append(i)}for(const i of["real","anchor"]){const e=document.createElement("option");e.value="UNKNOWN",e.textContent="未知（未填写）",e.disabled=!0,e.hidden=!0,ce(i).append(e)}const Ei=Po(gl);let pe={pack:Ei,real:"OUT_LOCKED",anchor:"OUT_LOCKED",probe:[2.5,2.5,2.5],time:er(),entities:tr(),rules:rr()},Dt=[],zt=[],pn="2d",yi=!0,Zt=null,Ci;const Yt=()=>structuredClone(pe);function Kc(i){if(!i||typeof i!="object")throw Error("方案格式无效");const e=i;if(!Un.includes(e.real)||!Un.includes(e.anchor)||!Array.isArray(e.probe)||e.probe.length!==3||!e.probe.every(t=>typeof t=="number"&&Number.isFinite(t)&&Math.abs(t)<1e4))throw Error("方案坐标或状态无效");return{pack:Po(e.pack),real:e.real,anchor:e.anchor,probe:[...e.probe],time:e.time===void 0?er():Ir(e.time),entities:e.entities===void 0?tr():lc(e.entities),rules:e.rules===void 0?rr():Ao(e.rules)}}let bi=!0,jc=!1,$c=!1;try{const i=localStorage.getItem("expedition-geometry-v1");if(i){const e=sc(JSON.parse(i),Kc);if(pe=e.state,Dt=e.past,zt=e.future,rc(pe.pack)){try{let n="expedition-neutral-backup-"+Date.now(),r=0;for(;localStorage.getItem(n)!==null;)n="expedition-neutral-backup-"+Date.now()+"-"+ ++r;localStorage.setItem(n,i)}catch{bi=!1}pe=Qr(pe,Ei),Dt=Dt.map(n=>Qr(n,Ei)),zt=zt.map(n=>Qr(n,Ei)),jc=!0,ce("notice").textContent=bi?"已打开第三案研究所，原有设置已保留。":"已打开第三案；浏览器存储空间不足，原存档未覆盖，请先导出备份。"}const t=Ml({state:pe,past:Dt,future:zt},Ei,()=>{let n="expedition-case3-map-backup-"+Date.now(),r=0;for(;localStorage.getItem(n)!==null;)n="expedition-case3-map-backup-"+Date.now()+"-"+ ++r;localStorage.setItem(n,i)});t.status==="upgraded"&&({state:pe,past:Dt,future:zt}=t.archive,$c=!0,ce("notice").textContent="研究所地图已更新，原方案已备份，现有设置与历史均已保留；可撤销此次更新。"),t.status==="backup-failed"&&(bi=!1,ce("notice").textContent="无法备份原方案，地图未自动更新；请先导出备份。"),t.status==="history-full"&&(ce("notice").textContent="原方案的历史已满，地图未自动更新；请先导出备份。")}}catch{bi=!1,ce("notice").textContent="未能恢复原有自动存档，已保留原文件；请先导入备份，或导出当前方案。"}const Zc=El(ce("time-panel"),i=>Nn({...Yt(),time:i})),Jc=wl(ce("entities-panel"),i=>Nn({...Yt(),entities:i}),()=>({rooms:pe.pack.geometry.rooms,anchorToReal:el(),probe:pe.probe,caseId:pe.pack.caseId})),Qc=Sg(ce("rules-panel"),i=>Nn({...Yt(),rules:i}));let tc=JSON.stringify(pe.time),nc=JSON.stringify(pe.entities),ic=JSON.stringify(pe.rules);Zc.setState(pe.time);Jc.setState(pe.entities);Qc.setState(pe.rules);function el(){const i=Ro(pe.time);return pe.time.selectedSessionId?i.kind==="determined"?Ns(i.real,i.anchor):null:Ns(pe.real,pe.anchor)}function sr(){if(!bi){ce("saved").textContent="未覆盖原存档，请导出方案备份。";return}try{localStorage.setItem("expedition-geometry-v1",Us({state:pe,past:Dt,future:zt})),ce("saved").textContent="已保存到此浏览器 · "+new Date().toLocaleTimeString()}catch{ce("saved").textContent="自动保存不可用，请导出方案备份。"}}(jc||$c)&&bi&&sr();function Nn(i){if(Dt.length>=1e3){ce("notice").textContent="当前已记录1000步，请导出归档后再继续。";return}Dt.push(Yt()),zt=[],pe=i,sr(),qt()}function qt(){ce("workbench").hidden=pe.pack.caseId!=="case3";const i=JSON.stringify(pe.time),e=JSON.stringify(pe.entities),t=JSON.stringify(pe.rules);i!==tc&&(tc=i,Zc.setState(pe.time)),e!==nc&&(nc=e,Jc.setState(pe.entities)),t!==ic&&(ic=t,Qc.setState(pe.rules));const n=Ro(pe.time),r=!!pe.time.selectedSessionId,s=el(),o=ce("spacewarning");o.hidden=!!s,o.textContent=s?"":n.kind==="undetermined"?n.reason:"当前会话没有可显示的叠合",ce("viewport").hidden=!s,ce("real").disabled=r,ce("anchor").disabled=r,ce("pair").disabled=r;const a=s??Ns(pe.real,pe.anchor),l=n.kind==="determined"?n.real:pe.real,c=n.kind==="determined"?n.anchor:pe.anchor,p=r?n.kind==="determined"?n.real:n.kind==="undetermined"?n.real??"UNKNOWN":"UNKNOWN":pe.real,d=r?n.kind==="determined"?n.anchor:n.kind==="undetermined"?n.anchor??"UNKNOWN":"UNKNOWN":pe.anchor;ce("title").textContent=pe.pack.title;const h=document.getElementById("packInfo");h&&(h.textContent=pe.pack.contentVersion+" · "+pe.pack.caseId),ce("real").value=p,ce("anchor").value=d,ce("pair").value=p==="UNKNOWN"||d==="UNKNOWN"?"UNKNOWN":p+"|"+d,["x","y","z"].forEach((y,D)=>ce(y).value=String(pe.probe[D]));const f=tt(Co(a),pe.probe),g=tt(a,[0,0,-1]).map((y,D)=>y-a[D*4+3]);ce("result").textContent=s?"对应锚定坐标："+f.map(y=>y.toFixed(2)).join(" / ")+`
锚定区域：`+cc(pe.pack.geometry.rooms,f,pe.pack.caseId==="case3")+`
锚定重力方向：`+g.map(y=>y.toFixed(0)).join(" / "):"门态资料不足，不能计算空间对应。",ce("undo").disabled=!Dt.length,ce("redo").disabled=!zt.length;const _=s&&pe.pack.caseId==="case3"?Rl(l,c):void 0;_&&(_.number==="08"||_.number==="15")&&(o.hidden=!1,o.textContent="此组合的空间模型与参考图中部分房间对应存在待核差异，请结合参考图核对。");const m=Number(ce("floor").value),u=ce("visible").value;document.querySelectorAll("[data-world]").forEach(y=>y.setAttribute("aria-pressed",String(y.dataset.world===u))),document.querySelectorAll("[data-room-floor]").forEach(y=>y.setAttribute("aria-pressed",String(Number(y.dataset.roomFloor)===m))),ce("room-directory").hidden=pe.pack.caseId!=="case3",ce("room-chooser").hidden=pe.pack.caseId!=="case3",Zt&&!pe.pack.geometry.rooms.some(y=>y.id===Zt)&&(Zt=null);const R=ce("room-select");R.replaceChildren();const A=document.createElement("option");A.value="",A.textContent="不显示房间标记",R.append(A);for(const y of pe.pack.geometry.rooms.filter(D=>/^\d-[1-7]$/.test(D.id))){const D=pe.pack.geometry.topology?.regions.find(C=>C.regionId===y.id),M=(pe.pack.geometry.topology?.facilities??[]).find(C=>C.regionId===y.id),x=document.createElement("option");x.value=y.id,x.textContent=y.id+" · "+(D?.owner?D.owner+"的房间":y.id==="1-2"?"密封门":M?M.label:"地图未注明用途"),R.append(x)}R.value=Zt??"";const E=R.selectedOptions[0];ce("room-selected-description").textContent=Zt&&E?"已选 "+E.textContent+"；物件为地图标注，不代表实际时刻状态。":"选择房间后，模型只标出所选房间；其他房间保持清爽。";const T=ce("room-directory-content");if(T.replaceChildren(),pe.pack.caseId==="case3")for(let y=0;y<3;y++){if(m>=0&&m!==y)continue;const D=document.createElement("section"),M=document.createElement("h3"),x=document.createElement("ul");M.textContent=["一层","二层","三层"][y],D.append(M);const C=pe.pack.geometry.rooms.filter(U=>Math.floor(U.min[2]/5)===y);for(const U of C){const z=pe.pack.geometry.topology?.regions.find(j=>j.regionId===U.id),k=(pe.pack.geometry.topology?.facilities??[]).filter(j=>j.regionId===U.id).map(j=>j.label);U.id==="1-2"&&!k.some(j=>j.includes("密封门"))&&k.unshift("密封门");const N=[];z?.owner&&N.push(z.owner+"的房间"),k.length&&N.push([...new Set(k)].join("、")),z?.lighting==="unlit"&&N.push("无灯"),z?.radiation==="strong"&&N.push("强辐射"),N.length||N.push("地图未注明用途");const G=document.createElement("li"),Y=/^\d-[1-7]$/.test(U.id),I=Y?document.createElement("button"):document.createElement("strong");if(Y){const j=I;j.type="button",j.className="room-entry",j.dataset.roomId=U.id,j.textContent=U.id+"房间",j.setAttribute("aria-label","在模型中查看"+U.id+"房间")}else I.textContent=U.id.endsWith("-hall")?"走廊":U.id;G.append(I,document.createTextNode("："+N.join("；"))),x.append(G)}D.append(x),T.append(D)}const b=s?Tl(pe.entities,a,pe.time.selectedSessionId??null).filter(y=>(u==="both"||y.world===u)&&(m<0||Math.floor((pe.entities.entities.find(D=>D.id===y.id)?.position?.[2]??-999)/5)===m)):[];s&&(pn==="3d"&&Ci?Ci.update(pe.pack,a,pe.probe,m,u,l,c,b,yi,Zt):pg(ce("viewport"),pe.pack,a,pe.probe,Number(ce("plane").value),m,u,l,c,b,Zt)),ce("regioninfo").replaceChildren(...(pe.pack.geometry.topology?.regions??[]).map(y=>{const D=document.createElement("p");return D.textContent=y.regionId+(y.owner?" · 房主 "+y.owner:"")+" · "+(y.lighting==="unlit"?"无灯":"光照未确认")+" · "+(y.radiation==="strong"?"强辐射":"辐射等级未确认"),D})),ce("facilityinfo").replaceChildren(...(pe.pack.geometry.topology?.facilities??[]).map(y=>{const D=document.createElement("p");return D.textContent=y.regionId+" · "+y.label+"（位置示意）",D})),ce("sources").replaceChildren(...pe.pack.evidence.map(y=>{const D=document.createElement("p");return D.textContent=y.source+"："+y.description,D}))}for(const i of["real","anchor"])ce(i).addEventListener("change",()=>Nn({...Yt(),[i]:ce(i).value}));ce("pair").addEventListener("change",()=>{const[i,e]=ce("pair").value.split("|");Un.includes(i)&&Un.includes(e)&&Nn({...Yt(),real:i,anchor:e})});for(const i of["plane","visible"])ce(i).addEventListener("change",qt);ce("floor").addEventListener("change",()=>{const i=Number(ce("floor").value),e=pe.pack.geometry.rooms.find(t=>t.id===Zt);e&&i>=0&&Math.floor(e.min[2]/5)!==i&&(Zt=null),qt()});function tl(i){const e=pe.pack.geometry.rooms.find(t=>t.id===i);if(!e){Zt=null,qt();return}Zt=i,ce("floor").value=String(Math.floor(e.min[2]/5)),qt()}ce("room-select").addEventListener("change",()=>tl(ce("room-select").value));ce("room-directory-content").addEventListener("click",i=>{const e=i.target.closest("button[data-room-id]");e?.dataset.roomId&&tl(e.dataset.roomId)});document.querySelectorAll("[data-world]").forEach(i=>i.addEventListener("click",()=>{ce("visible").value=i.dataset.world,qt()}));document.querySelectorAll("[data-room-floor]").forEach(i=>i.addEventListener("click",()=>{ce("floor").value=i.dataset.roomFloor,ce("floor").dispatchEvent(new Event("change"))}));ce("apply").onclick=()=>{const i=["x","y","z"].map(e=>Number(ce(e).value));if(i.some(e=>!Number.isFinite(e)||Math.abs(e)>1e3)){ce("notice").textContent="请输入-1000到1000之间的有限坐标。";return}Nn({...Yt(),probe:i})};ce("viewport").addEventListener("probe",(i=>{const e=Yt();i.detail.axes.forEach((t,n)=>e.probe[t]=Math.round(i.detail.values[n]*10)/10),Nn(e)}));function Wo(i){if(Ci?.dispose(),Ci=void 0,pn=i,i==="3d")try{Ci=mg(ce("viewport"),()=>{Wo("2d"),ce("notice").textContent="三维上下文已中断，已保留状态并切换二维。"})}catch{pn="2d",ce("notice").textContent="当前设备无法启动三维，二维推演仍可使用。"}ce("mode").textContent=pn==="2d"?"切换三维":"切换二维",ce("plane").hidden=pn==="3d",ce("separate").hidden=pn!=="3d",ce("viewhint").textContent=pn==="3d"&&yi?"展开观察：两座建筑在画面中分开，真实叠合关系不变":"叠合观察：同态时两座建筑会完全重合",qt()}ce("separate").onclick=()=>{yi=!yi,ce("separate").textContent=yi?"切换叠合":"展开观察",ce("viewhint").textContent=yi?"展开观察：两座建筑在画面中分开，真实叠合关系不变":"叠合观察：同态时两座建筑会完全重合",qt()};ce("mode").onclick=()=>Wo(pn==="2d"?"3d":"2d");ce("resetview").onclick=()=>{Ci?.reset(),pn==="2d"&&(ce("plane").value="0"),qt()};ce("base").onclick=()=>{confirm("重新开始第三案？当前设置将被替换，可以使用撤销恢复。")&&Nn({...Yt(),pack:Ei,real:"OUT_LOCKED",anchor:"OUT_LOCKED",probe:[2.5,2.5,2.5],time:er(),entities:tr(),rules:rr()})};ce("undo").onclick=()=>{Dt.length&&(zt.push(Yt()),pe=Dt.pop(),sr(),qt())};ce("redo").onclick=()=>{zt.length&&(Dt.push(Yt()),pe=zt.pop(),sr(),qt())};ce("import").onclick=()=>ce("file").click();ce("file").onchange=async i=>{const e=i.target.files?.[0];if(e)try{if(e.size>2e7)throw Error("文件超过20MB");const t=JSON.parse(await e.text()),n=t.kind==="player-save"?sc(t,Kc):{state:{...Yt(),pack:Po(t),time:er(),entities:tr(),rules:rr()},past:[],future:[]};confirm("导入将替换当前设置。请先导出备份当前方案。")&&(pe=n.state,Dt=n.past,zt=n.future,sr(),qt(),ce("notice").textContent="导入完成。所有输入仅供你自行试验。")}catch(t){ce("notice").textContent="导入失败："+t.message}finally{i.target.value=""}};ce("export").onclick=()=>{let i=Us({state:pe,past:Dt,future:zt});if(new Blob([i]).size>2e7){if(!confirm("完整历史超过20MB。是否导出只包含当前方案的精简备份？"))return;if(i=Us({state:pe,past:[],future:[]}),new Blob([i]).size>2e7){ce("notice").textContent="当前方案超过20MB，无法导出。请删除部分内容后重试。";return}}const e=URL.createObjectURL(new Blob([i],{type:"application/json"})),t=document.createElement("a");t.href=e,t.download="我的空间假设.json",t.click(),setTimeout(()=>URL.revokeObjectURL(e),5e3)};Wo("3d");

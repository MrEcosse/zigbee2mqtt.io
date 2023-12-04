"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[95237],{728014:(e,t,i)=>{i.r(t),i.d(t,{data:()=>r});const r=JSON.parse('{"key":"v-8956223c","path":"/devices/ti.router.html","title":"Custom devices (DiY) ti.router control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Custom devices (DiY) ti.router control via MQTT","description":"Integrate your Custom devices (DiY) ti.router via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-01-31T22:24:43.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Firmware","slug":"firmware","link":"#firmware","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Transmit power (numeric)","slug":"transmit-power-numeric","link":"#transmit-power-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1701719208000},"filePathRelative":"devices/ti.router.md"}')},850923:(e,t,i)=>{i.r(t),i.d(t,{default:()=>w});var r=i(166252);const o=(0,r._)("h1",{id:"custom-devices-diy-ti-router",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#custom-devices-diy-ti-router","aria-hidden":"true"},"#"),(0,r.Uk)(" Custom devices (DiY) ti.router")],-1),a=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th"),(0,r._)("th")])],-1),n=(0,r._)("tr",null,[(0,r._)("td",null,"Model"),(0,r._)("td",null,"ti.router")],-1),s=(0,r._)("td",null,"Vendor",-1),d=(0,r._)("tr",null,[(0,r._)("td",null,"Description"),(0,r._)("td",null,"Texas Instruments router")],-1),l=(0,r._)("tr",null,[(0,r._)("td",null,"Exposes"),(0,r._)("td",null,"transmit_power, linkquality")],-1),u=(0,r._)("tr",null,[(0,r._)("td",null,"Picture"),(0,r._)("td",null,[(0,r._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ti.router.jpg",alt:"Custom devices (DiY) ti.router"})])],-1),c=(0,r._)("h2",{id:"notes",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,r.Uk)(" Notes")],-1),h=(0,r._)("h3",{id:"firmware",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#firmware","aria-hidden":"true"},"#"),(0,r.Uk)(" Firmware")],-1),m=(0,r._)("p",null,"This is a Texas Instruments CC1352P-2, CC2652RB or CC2652R flashed with the following firmware: https://github.com/Koenkk/Z-Stack-firmware/tree/master/router/Z-Stack_3.x.0/bin",-1),p=(0,r.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="transmit-power-numeric" tabindex="-1"><a class="header-anchor" href="#transmit-power-numeric" aria-hidden="true">#</a> Transmit power (numeric)</h3><p>Transmit power, supported from firmware 20221102. The max for CC1352 is 20 dBm and 5 dBm for CC2652 (any higher value is converted to 5dBm). Value can be found in the published state on the <code>transmit_power</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;transmit_power&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;transmit_power&quot;: NEW_VALUE}</code>. The minimal value is <code>-20</code> and the maximum value is <code>20</code>. The unit of this value is <code>dBm</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',5),v={},w=(0,i(983744).Z)(v,[["render",function(e,t){const i=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.kq)(" !!!! "),(0,r.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,r.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,r.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,r.kq)(" !!!! "),o,(0,r._)("table",null,[a,(0,r._)("tbody",null,[n,(0,r._)("tr",null,[s,(0,r._)("td",null,[(0,r.Wm)(i,{to:"/supported-devices/#v=Custom%20devices%20(DiY)"},{default:(0,r.w5)((()=>[(0,r.Uk)("Custom devices (DiY)")])),_:1})])]),d,l,u])]),(0,r.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),c,h,m,(0,r.kq)(" Notes END: Do not edit below this line "),p])}]])}}]);
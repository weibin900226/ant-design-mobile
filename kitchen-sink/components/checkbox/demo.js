webpackJsonp([17,144],{6:function(n,a,t){"use strict";t(14),t(13)},13:function(n,a){},14:function(n,a){},17:function(n,a){"use strict";a.__esModule=!0,a["default"]=function(n,a){var t={};for(var e in n)a.indexOf(e)>=0||Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t}},18:function(n,a,t){"use strict";t(6),t(23)},23:function(n,a){},60:function(n,a,t){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var s=t(2),o=e(s),p=t(7),c=e(p),l=t(3),u=e(l),r=t(5),i=e(r),f=t(4),d=e(f),k="/Users/jiangkai/github/ant-design-mobile/components/flex/Flex.tsx",b=t(1),m=e(b),h=t(8),g=e(h),y=function(n,a){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&a.indexOf(e)<0&&(t[e]=n[e]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,e=Object.getOwnPropertySymbols(n);s<e.length;s++)a.indexOf(e[s])<0&&(t[e[s]]=n[e[s]]);return t},v=function(n){function a(){return(0,u["default"])(this,a),(0,i["default"])(this,n.apply(this,arguments))}return(0,d["default"])(a,n),a.prototype.render=function(){var n,a=this.props,t=a.direction,e=a.wrap,s=a.justify,p=a.align,l=a.alignContent,u=a.className,r=a.children,i=a.prefixCls,f=a.style,d=y(a,["direction","wrap","justify","align","alignContent","className","children","prefixCls","style"]),b=(0,g["default"])((n={},(0,c["default"])(n,i,!0),(0,c["default"])(n,i+"-dir-row","row"===t),(0,c["default"])(n,i+"-dir-row-reverse","row-reverse"===t),(0,c["default"])(n,i+"-dir-column","column"===t),(0,c["default"])(n,i+"-dir-column-reverse","column-reverse"===t),(0,c["default"])(n,i+"-nowrap","nowrap"===e),(0,c["default"])(n,i+"-wrap","wrap"===e),(0,c["default"])(n,i+"-wrap-reverse","wrap-reverse"===e),(0,c["default"])(n,i+"-justify-start","start"===s),(0,c["default"])(n,i+"-justify-end","end"===s),(0,c["default"])(n,i+"-justify-center","center"===s),(0,c["default"])(n,i+"-justify-between","between"===s),(0,c["default"])(n,i+"-justify-around","around"===s),(0,c["default"])(n,i+"-align-start","start"===p),(0,c["default"])(n,i+"-align-center","center"===p),(0,c["default"])(n,i+"-align-end","end"===p),(0,c["default"])(n,i+"-align-baseline","baseline"===p),(0,c["default"])(n,i+"-align-stretch","stretch"===p),(0,c["default"])(n,i+"-align-content-start","start"===l),(0,c["default"])(n,i+"-align-content-end","end"===l),(0,c["default"])(n,i+"-align-content-center","center"===l),(0,c["default"])(n,i+"-align-content-between","between"===l),(0,c["default"])(n,i+"-align-content-around","around"===l),(0,c["default"])(n,i+"-align-content-stretch","stretch"===l),(0,c["default"])(n,u,u),n));return m["default"].createElement("div",(0,o["default"])({className:b,style:f},d,{__source:{fileName:k,lineNumber:42}}),r)},a}(m["default"].Component);a["default"]=v,v.defaultProps={prefixCls:"am-flexbox",align:"center"},n.exports=a["default"]},61:function(n,a,t){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var s=t(2),o=e(s),p=t(7),c=e(p),l=t(3),u=e(l),r=t(5),i=e(r),f=t(4),d=e(f),k="/Users/jiangkai/github/ant-design-mobile/components/flex/FlexItem.tsx",b=t(1),m=e(b),h=t(8),g=e(h),y=function(n,a){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&a.indexOf(e)<0&&(t[e]=n[e]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,e=Object.getOwnPropertySymbols(n);s<e.length;s++)a.indexOf(e[s])<0&&(t[e[s]]=n[e[s]]);return t},v=function(n){function a(){return(0,u["default"])(this,a),(0,i["default"])(this,n.apply(this,arguments))}return(0,d["default"])(a,n),a.prototype.render=function(){var n,a=this.props,t=a.children,e=a.className,s=a.prefixCls,p=a.style,l=y(a,["children","className","prefixCls","style"]),u=(0,g["default"])((n={},(0,c["default"])(n,s+"-item",!0),(0,c["default"])(n,e,e),n));return m["default"].createElement("div",(0,o["default"])({className:u,style:p},l,{__source:{fileName:k,lineNumber:19}}),t)},a}(m["default"].Component);a["default"]=v,v.defaultProps={prefixCls:"am-flexbox"},n.exports=a["default"]},62:function(n,a,t){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var s=t(60),o=e(s),p=t(61),c=e(p);o["default"].Item=c["default"],a["default"]=o["default"],n.exports=a["default"]},63:function(n,a,t){"use strict";t(6),t(64)},64:function(n,a){},115:function(n,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=function(n){return Object.keys(n).reduce(function(a,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(a[t]=n[t]),a},{})},n.exports=a["default"]},258:function(n,a){function t(n){return!!n&&"object"==typeof n}function e(n,a){var t=null==n?void 0:n[a];return p(t)?t:void 0}function s(n){return o(n)&&f.call(n)==c}function o(n){var a=typeof n;return!!n&&("object"==a||"function"==a)}function p(n){return null!=n&&(s(n)?d.test(r.call(n)):t(n)&&l.test(n))}var c="[object Function]",l=/^\[object .+?Constructor\]$/,u=Object.prototype,r=Function.prototype.toString,i=u.hasOwnProperty,f=u.toString,d=RegExp("^"+r.call(i).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");n.exports=e},259:function(n,a){function t(n){return s(n)&&k.call(n,"callee")&&(!m.call(n,"callee")||b.call(n)==r)}function e(n){return null!=n&&p(n.length)&&!o(n)}function s(n){return l(n)&&e(n)}function o(n){var a=c(n)?b.call(n):"";return a==i||a==f}function p(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=u}function c(n){var a=typeof n;return!!n&&("object"==a||"function"==a)}function l(n){return!!n&&"object"==typeof n}var u=9007199254740991,r="[object Arguments]",i="[object Function]",f="[object GeneratorFunction]",d=Object.prototype,k=d.hasOwnProperty,b=d.toString,m=d.propertyIsEnumerable;n.exports=t},260:function(n,a){function t(n){return!!n&&"object"==typeof n}function e(n,a){var t=null==n?void 0:n[a];return c(t)?t:void 0}function s(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=h}function o(n){return p(n)&&k.call(n)==u}function p(n){var a=typeof n;return!!n&&("object"==a||"function"==a)}function c(n){return null!=n&&(o(n)?b.test(f.call(n)):t(n)&&r.test(n))}var l="[object Array]",u="[object Function]",r=/^\[object .+?Constructor\]$/,i=Object.prototype,f=Function.prototype.toString,d=i.hasOwnProperty,k=i.toString,b=RegExp("^"+f.call(d).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),m=e(Array,"isArray"),h=9007199254740991,g=m||function(n){return t(n)&&s(n.length)&&k.call(n)==l};n.exports=g},261:function(n,a,t){function e(n){return function(a){return null==a?void 0:a[n]}}function s(n){return null!=n&&p(g(n))}function o(n,a){return n="number"==typeof n||d.test(n)?+n:-1,a=null==a?h:a,n>-1&&n%1==0&&n<a}function p(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=h}function c(n){for(var a=u(n),t=a.length,e=t&&n.length,s=!!e&&p(e)&&(f(n)||i(n)),c=-1,l=[];++c<t;){var r=a[c];(s&&o(r,e)||b.call(n,r))&&l.push(r)}return l}function l(n){var a=typeof n;return!!n&&("object"==a||"function"==a)}function u(n){if(null==n)return[];l(n)||(n=Object(n));var a=n.length;a=a&&p(a)&&(f(n)||i(n))&&a||0;for(var t=n.constructor,e=-1,s="function"==typeof t&&t.prototype===n,c=Array(a),u=a>0;++e<a;)c[e]=e+"";for(var r in n)u&&o(r,a)||"constructor"==r&&(s||!b.call(n,r))||c.push(r);return c}var r=t(258),i=t(259),f=t(260),d=/^\d+$/,k=Object.prototype,b=k.hasOwnProperty,m=r(Object,"keys"),h=9007199254740991,g=e("length"),y=m?function(n){var a=null==n?void 0:n.constructor;return"function"==typeof a&&a.prototype===n||"function"!=typeof n&&s(n)?c(n):l(n)?m(n):[]}:c;n.exports=y},262:function(n,a,t){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var s=t(2),o=e(s),p=t(7),c=e(p),l=t(17),u=e(l),r=t(3),i=e(r),f=t(12),d=e(f),k=t(5),b=e(k),m=t(4),h=e(m),g=t(1),y=e(g),v=t(11),x=e(v),C=t(271),j=e(C),O=t(8),_=e(O),w=function(n){function a(n){(0,i["default"])(this,a);var t=(0,b["default"])(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,n));P.call(t);var e="checked"in n?n.checked:n.defaultChecked;return t.state={checked:e},t}return(0,h["default"])(a,n),(0,d["default"])(a,[{key:"componentWillReceiveProps",value:function(n){"checked"in n&&this.setState({checked:n.checked})}},{key:"shouldComponentUpdate",value:function(){for(var n=arguments.length,a=Array(n),t=0;t<n;t++)a[t]=arguments[t];return j["default"].shouldComponentUpdate.apply(this,a)}},{key:"render",value:function(){var n,a=this.props,t=a.prefixCls,e=a.className,s=a.style,p=a.name,l=a.type,r=a.disabled,i=a.readOnly,f=a.tabIndex,d=a.onClick,k=a.onFocus,b=a.onBlur,m=(0,u["default"])(a,["prefixCls","className","style","name","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur"]),h=Object.keys(m).reduce(function(n,a){return"aria-"!==a.substr(0,5)&&"data-"!==a.substr(0,5)&&"role"!==a||(n[a]=m[a]),n},{}),g=this.state.checked,v=(0,_["default"])(t,e,(n={},(0,c["default"])(n,t+"-checked",g),(0,c["default"])(n,t+"-disabled",r),n));return y["default"].createElement("span",{className:v,style:s},y["default"].createElement("input",(0,o["default"])({name:p,type:l,readOnly:i,disabled:r,tabIndex:f,className:t+"-input",checked:!!g,onClick:d,onFocus:k,onBlur:b,onChange:this.handleChange},h)),y["default"].createElement("span",{className:t+"-inner"}))}}]),a}(y["default"].Component);w.propTypes={prefixCls:x["default"].string,className:x["default"].string,style:x["default"].object,name:x["default"].string,type:x["default"].string,defaultChecked:x["default"].oneOfType([x["default"].number,x["default"].bool]),checked:x["default"].oneOfType([x["default"].number,x["default"].bool]),disabled:x["default"].bool,onFocus:x["default"].func,onBlur:x["default"].func,onChange:x["default"].func,onClick:x["default"].func,tabIndex:x["default"].string,readOnly:x["default"].bool},w.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){}};var P=function(){var n=this;this.handleChange=function(a){var t=n.props;t.disabled||("checked"in t||n.setState({checked:a.target.checked}),t.onChange({target:(0,o["default"])({},t,{checked:a.target.checked}),stopPropagation:function(){a.stopPropagation()},preventDefault:function(){a.preventDefault()}}))}};a["default"]=w,n.exports=a["default"]},263:function(n,a,t){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var s=t(262);Object.defineProperty(a,"default",{enumerable:!0,get:function(){return e(s)["default"]}}),n.exports=a["default"]},271:function(n,a,t){"use strict";function e(n,a,t){return!s(n.props,a)||!s(n.state,t)}var s=t(273),o={shouldComponentUpdate:function(n,a){return e(this,n,a)}};n.exports=o},273:function(n,a,t){"use strict";var e=t(261);n.exports=function(n,a,t,s){var o=t?t.call(s,n,a):void 0;if(void 0!==o)return!!o;if(n===a)return!0;if("object"!=typeof n||null===n||"object"!=typeof a||null===a)return!1;var p=e(n),c=e(a),l=p.length;if(l!==c.length)return!1;s=s||null;for(var u=Object.prototype.hasOwnProperty.bind(a),r=0;r<l;r++){var i=p[r];if(!u(i))return!1;var f=n[i],d=a[i],k=t?t.call(s,f,d,i):void 0;if(k===!1||void 0===k&&f!==d)return!1}return!0}},308:function(n,a,t){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var s=t(2),o=e(s),p=t(7),c=e(p),l=t(3),u=e(l),r=t(5),i=e(r),f=t(4),d=e(f),k="/Users/jiangkai/github/ant-design-mobile/components/checkbox/Checkbox.tsx",b=t(1),m=e(b),h=t(263),g=e(h),y=t(38),v=e(y),x=t(8),C=e(x),j=function(n){function a(){return(0,u["default"])(this,a),(0,i["default"])(this,n.apply(this,arguments))}return(0,d["default"])(a,n),a.prototype.render=function(){var n,a=this.props,t=a.prefixCls,e=a.className,s=a.style,p=a.children,l=(0,C["default"])((n={},(0,c["default"])(n,e,!!e),(0,c["default"])(n,t+"-wrapper",!0),n)),u=m["default"].createElement("label",{className:l,style:s,__source:{fileName:k,lineNumber:12}},m["default"].createElement(g["default"],(0,o["default"])({},(0,v["default"])(this.props,["className","style"]),{__source:{fileName:k,lineNumber:13}})),p);return this.props.wrapLabel?u:m["default"].createElement(g["default"],(0,o["default"])({},this.props,{__source:{fileName:k,lineNumber:19}}))},a}(m["default"].Component);a["default"]=j,j.defaultProps={prefixCls:"am-checkbox",wrapLabel:!0},n.exports=a["default"]},309:function(n,a,t){"use strict";t(6),t(18),t(345)},345:function(n,a){},505:function(n,a,t){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/checkbox/demo/basic.md",id:"components-checkbox-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> List<span class="token punctuation">,</span> Checkbox<span class="token punctuation">,</span> Flex <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> CheckboxItem <span class="token operator">=</span> Checkbox<span class="token punctuation">.</span>CheckboxItem<span class="token punctuation">;</span>\n<span class="token keyword">const</span> AgreeItem <span class="token operator">=</span> Checkbox<span class="token punctuation">.</span>AgreeItem<span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'Ph.D.\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'Bachelor\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'college diploma\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'CheckboxItem demo\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>i <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CheckboxItem</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>i<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            <span class="token punctuation">{</span>i<span class="token punctuation">.</span>label<span class="token punctuation">}</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CheckboxItem</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CheckboxItem</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>disabled<span class="token punctuation">"</span></span> <span class="token attr-name">data-seed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>logId<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span> <span class="token attr-name">defaultChecked</span> <span class="token attr-name">multipleLine</span><span class="token punctuation">></span></span>\n          undergraduate<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item.Brief</span><span class="token punctuation">></span></span>Auxiliary text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item.Brief</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CheckboxItem</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Flex</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Flex.Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AgreeItem</span> <span class="token attr-name">data-seed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>logId<span class="token punctuation">"</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'checkbox\'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            Agree <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'agree it\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>agreement<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AgreeItem</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Flex.Item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Flex</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Test</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function a(n,a){for(var t=Object.getOwnPropertyNames(a),e=0;e<t.length;e++){var s=t[e],o=Object.getOwnPropertyDescriptor(a,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function e(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function s(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function o(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):a(n,t))}var p=t(1),c=(t(9),t(63),t(62)),l=n(c),u=(t(18),t(27)),r=n(u),i=(t(309),t(656)),f=n(i),d=f["default"].CheckboxItem,k=f["default"].AgreeItem,b=function(n){function a(){var t,o,p;e(this,a);for(var c=arguments.length,l=Array(c),u=0;u<c;u++)l[u]=arguments[u];return t=o=s(this,n.call.apply(n,[this].concat(l))),o.onChange=function(n){console.log(n)},p=t,s(o,p)}return o(a,n),a.prototype.render=function(){var n=this,a=[{value:0,label:"Ph.D."},{value:1,label:"Bachelor"},{value:2,label:"college diploma"}];return p.createElement("div",null,p.createElement(r["default"],{renderHeader:function(){return"CheckboxItem demo"}},a.map(function(a){return p.createElement(d,{key:a.value,onChange:function(){return n.onChange(a.value)}},a.label)}),p.createElement(d,{key:"disabled","data-seed":"logId",disabled:!0,defaultChecked:!0,multipleLine:!0},"undergraduate",p.createElement(r["default"].Item.Brief,null,"Auxiliary text"))),p.createElement(l["default"],null,p.createElement(l["default"].Item,null,p.createElement(k,{"data-seed":"logId",onChange:function(n){return console.log("checkbox",n)}},"Agree ",p.createElement("a",{onClick:function(n){n.preventDefault(),alert("agree it")}},"agreement")))))},a}(p.Component);return p.createElement(b,null)},style:".am-checkbox-agree .am-checkbox-agree-label a {\n  color: #108ee9;\n  transition: color .3s ease;\n}\n.am-checkbox-agree .am-checkbox-agree-label a:active,\n.am-checkbox-agree .am-checkbox-agree-label a:hover {\n    color: #1284d6;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.am-checkbox-agree</span> <span class="token class">.am-checkbox-agree-label</span> a </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#108ee9</span><span class="token punctuation">;</span>\n  <span class="token property">transition</span><span class="token punctuation">:</span> color <span class="token number">.3</span>s ease<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.am-checkbox-agree</span> <span class="token class">.am-checkbox-agree-label</span> a<span class="token pseudo-class">:active</span>,\n<span class="token class">.am-checkbox-agree</span> <span class="token class">.am-checkbox-agree-label</span> a<span class="token pseudo-class">:hover</span> </span><span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#1284d6</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},654:function(n,a,t){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var s=t(2),o=e(s),p=t(7),c=e(p),l=t(3),u=e(l),r=t(5),i=e(r),f=t(4),d=e(f),k="/Users/jiangkai/github/ant-design-mobile/components/checkbox/AgreeItem.tsx",b=t(1),m=e(b),h=t(8),g=e(h),y=t(308),v=e(y),x=t(115),C=e(x),j=t(38),O=e(j),_=function(n){function a(){return(0,u["default"])(this,a),(0,i["default"])(this,n.apply(this,arguments))}return(0,d["default"])(a,n),a.prototype.render=function(){var n,a=this.props,t=a.prefixCls,e=a.style,s=a.className,p=(0,g["default"])((n={},(0,c["default"])(n,t+"-agree",!0),(0,c["default"])(n,s,s),n));return m["default"].createElement("div",(0,o["default"])({},(0,C["default"])(this.props),{className:p,style:e,__source:{fileName:k,lineNumber:13}}),m["default"].createElement(v["default"],(0,o["default"])({},(0,O["default"])(this.props,["style"]),{className:t+"-agree-label",__source:{fileName:k,lineNumber:14}})))},a}(m["default"].Component);a["default"]=_,_.defaultProps={prefixCls:"am-checkbox"},n.exports=a["default"]},655:function(n,a,t){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}function s(){}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var o=t(2),p=e(o),c=t(7),l=e(c),u=t(3),r=e(u),i=t(5),f=e(i),d=t(4),k=e(d),b="/Users/jiangkai/github/ant-design-mobile/components/checkbox/CheckboxItem.tsx",m=t(1),h=e(m),g=t(8),y=e(g),v=t(27),x=e(v),C=t(308),j=e(C),O=t(38),_=e(O),w=x["default"].Item,P=function(n){function a(){return(0,r["default"])(this,a),(0,f["default"])(this,n.apply(this,arguments))}return(0,k["default"])(a,n),a.prototype.render=function(){var n,a=this,t=this.props,e=t.prefixCls,o=t.listPrefixCls,c=t.className,u=t.children,r=t.disabled,i=t.checkboxProps,f=void 0===i?{}:i,d=(0,y["default"])((n={},(0,l["default"])(n,e+"-item",!0),(0,l["default"])(n,e+"-item-disabled",r===!0),(0,l["default"])(n,c,c),n)),k=(0,_["default"])(this.props,["listPrefixCls","onChange","disabled","checkboxProps"]);r?delete k.onClick:k.onClick=k.onClick||s;var m={};return["name","defaultChecked","checked","onChange","disabled"].forEach(function(n){n in a.props&&(m[n]=a.props[n])}),h["default"].createElement(w,(0,p["default"])({},k,{prefixCls:o,className:d,thumb:h["default"].createElement(j["default"],(0,p["default"])({},f,m,{__source:{fileName:b,lineNumber:30}})),__source:{fileName:b,lineNumber:30}}),u)},a}(h["default"].Component);a["default"]=P,P.defaultProps={prefixCls:"am-checkbox",listPrefixCls:"am-list"},n.exports=a["default"]},656:function(n,a,t){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var s=t(308),o=e(s),p=t(655),c=e(p),l=t(654),u=e(l);o["default"].CheckboxItem=c["default"],o["default"].AgreeItem=u["default"],a["default"]=o["default"],n.exports=a["default"]},718:function(n,a,t){n.exports={basic:t(505)}}});
module.exports=[358657,a=>{"use strict";a.i(594272);var b=a.i(619397),c=a.i(198733);a.i(253842);var d=a.i(54377),e=a.i(755098),f=a.i(926119),g=a.i(400620),h=a.i(471696);a.i(757114);var i=a.i(434488);a.i(878821);var j=b,k=a.i(465149);a.i(180242);var l=a.i(423485),m=a.i(496507),n=a.i(621297),o=a.i(394406),p=a.i(402242),q=a.i(433927);a.i(764868);var r=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let s=class extends j.LitElement{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=o.ConnectorController.state.connectors,this.count=e.ApiController.state.count,this.filteredCount=e.ApiController.state.filteredWallets.length,this.isFetchingRecommendedWallets=e.ApiController.state.isFetchingRecommendedWallets,this.unsubscribe.push(o.ConnectorController.subscribeKey("connectors",a=>this.connectors=a),e.ApiController.subscribeKey("count",a=>this.count=a),e.ApiController.subscribeKey("filteredWallets",a=>this.filteredCount=a.length),e.ApiController.subscribeKey("isFetchingRecommendedWallets",a=>this.isFetchingRecommendedWallets=a))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let a=this.connectors.find(a=>"walletConnect"===a.id),{allWallets:b}=g.OptionsController.state;if(!a||"HIDE"===b||"ONLY_MOBILE"===b&&!f.CoreHelperUtil.isMobile())return null;let d=e.ApiController.state.featured.length,h=this.count+d,i=h<10?h:10*Math.floor(h/10),j=this.filteredCount>0?this.filteredCount:i,k=`${j}`;this.filteredCount>0?k=`${this.filteredCount}`:j<h&&(k=`${j}+`);let o=n.ConnectionController.hasAnyConnection(m.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT);return c.html`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${k}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${(0,l.ifDefined)(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${o}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){p.EventsController.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),q.RouterController.push("AllWallets",{redirectView:q.RouterController.state.data?.redirectView})}};r([(0,k.property)()],s.prototype,"tabIdx",void 0),r([(0,d.state)()],s.prototype,"connectors",void 0),r([(0,d.state)()],s.prototype,"count",void 0),r([(0,d.state)()],s.prototype,"filteredCount",void 0),r([(0,d.state)()],s.prototype,"isFetchingRecommendedWallets",void 0),s=r([(0,i.customElement)("w3m-all-wallets-widget")],s);var t=b,u=a.i(82239),v=a.i(32035),w=a.i(539802),x=a.i(974766),y=a.i(228265);let z=y.css`
  :host {
    margin-top: ${({spacing:a})=>a["1"]};
  }
  wui-separator {
    margin: ${({spacing:a})=>a["3"]} calc(${({spacing:a})=>a["3"]} * -1)
      ${({spacing:a})=>a["2"]} calc(${({spacing:a})=>a["3"]} * -1);
    width: calc(100% + ${({spacing:a})=>a["3"]} * 2);
  }
`;var A=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let B=class extends t.LitElement{constructor(){super(),this.unsubscribe=[],this.connectors=o.ConnectorController.state.connectors,this.recommended=e.ApiController.state.recommended,this.featured=e.ApiController.state.featured,this.explorerWallets=e.ApiController.state.explorerWallets,this.connections=n.ConnectionController.state.connections,this.connectorImages=u.AssetController.state.connectorImages,this.loadingTelegram=!1,this.unsubscribe.push(o.ConnectorController.subscribeKey("connectors",a=>this.connectors=a),n.ConnectionController.subscribeKey("connections",a=>this.connections=a),u.AssetController.subscribeKey("connectorImages",a=>this.connectorImages=a),e.ApiController.subscribeKey("recommended",a=>this.recommended=a),e.ApiController.subscribeKey("featured",a=>this.featured=a),e.ApiController.subscribeKey("explorerFilteredWallets",a=>{this.explorerWallets=a?.length?a:e.ApiController.state.explorerWallets}),e.ApiController.subscribeKey("explorerWallets",a=>{this.explorerWallets?.length||(this.explorerWallets=a)})),f.CoreHelperUtil.isTelegram()&&f.CoreHelperUtil.isIos()&&(this.loadingTelegram=!n.ConnectionController.state.wcUri,this.unsubscribe.push(n.ConnectionController.subscribeKey("wcUri",a=>this.loadingTelegram=!a)))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){return c.html`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}mapConnectorsToExplorerWallets(a,b){return a.map(a=>{if("MULTI_CHAIN"===a.type&&a.connectors){let c=a.connectors.map(a=>a.id),d=a.connectors.map(a=>a.name),e=a.connectors.map(a=>a.info?.rdns);return a.explorerWallet=b?.find(a=>c.includes(a.id)||d.includes(a.name)||a.rdns&&(e.includes(a.rdns)||c.includes(a.rdns)))??a.explorerWallet,a}let c=b?.find(b=>b.id===a.id||b.rdns===a.info?.rdns||b.name===a.name);return a.explorerWallet=c??a.explorerWallet,a})}processConnectorsByType(a,b=!0){let c=x.ConnectorUtil.sortConnectorsByExplorerWallet([...a]);return b?c.filter(x.ConnectorUtil.showConnector):c}connectorListTemplate(){let a=this.mapConnectorsToExplorerWallets(this.connectors,this.explorerWallets??[]),b=x.ConnectorUtil.getConnectorsByType(a,this.recommended,this.featured),c=this.processConnectorsByType(b.announced.filter(a=>"walletConnect"!==a.id)),d=this.processConnectorsByType(b.injected),e=this.processConnectorsByType(b.multiChain.filter(a=>"WalletConnect"!==a.name),!1),g=b.custom,h=b.recent,i=this.processConnectorsByType(b.external.filter(a=>a.id!==m.ConstantsUtil.CONNECTOR_ID.COINBASE_SDK)),j=b.recommended,k=b.featured,l=x.ConnectorUtil.getConnectorTypeOrder({custom:g,recent:h,announced:c,injected:d,multiChain:e,recommended:j,featured:k,external:i}),n=this.connectors.find(a=>"walletConnect"===a.id),o=f.CoreHelperUtil.isMobile(),p=[];for(let a of l)switch(a){case"walletConnect":!o&&n&&p.push({kind:"connector",subtype:"walletConnect",connector:n});break;case"recent":x.ConnectorUtil.getFilteredRecentWallets().forEach(a=>p.push({kind:"wallet",subtype:"recent",wallet:a}));break;case"injected":e.forEach(a=>p.push({kind:"connector",subtype:"multiChain",connector:a})),c.forEach(a=>p.push({kind:"connector",subtype:"announced",connector:a})),d.forEach(a=>p.push({kind:"connector",subtype:"injected",connector:a}));break;case"featured":k.forEach(a=>p.push({kind:"wallet",subtype:"featured",wallet:a}));break;case"custom":x.ConnectorUtil.getFilteredCustomWallets(g??[]).forEach(a=>p.push({kind:"wallet",subtype:"custom",wallet:a}));break;case"external":i.forEach(a=>p.push({kind:"connector",subtype:"external",connector:a}));break;case"recommended":x.ConnectorUtil.getCappedRecommendedWallets(j).forEach(a=>p.push({kind:"wallet",subtype:"recommended",wallet:a}));break;default:console.warn(`Unknown connector type: ${a}`)}return p.map((a,b)=>"connector"===a.kind?this.renderConnector(a,b):this.renderWallet(a,b))}renderConnector(a,b){let d,e,f=a.connector,g=v.AssetUtil.getConnectorImage(f)||this.connectorImages[f?.imageId??""],h=(this.connections.get(f.chain)??[]).some(a=>w.HelpersUtil.isLowerCaseMatch(a.connectorId,f.id));"multiChain"===a.subtype?(d="multichain",e="info"):"walletConnect"===a.subtype?(d="qr code",e="accent"):"injected"===a.subtype||"announced"===a.subtype?(d=h?"connected":"installed",e=h?"info":"success"):(d=void 0,e=void 0);let i=n.ConnectionController.hasAnyConnection(m.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT),j=("walletConnect"===a.subtype||"external"===a.subtype)&&i;return c.html`
      <w3m-list-wallet
        displayIndex=${b}
        imageSrc=${(0,l.ifDefined)(g)}
        .installed=${!0}
        name=${f.name??"Unknown"}
        .tagVariant=${e}
        tagLabel=${(0,l.ifDefined)(d)}
        data-testid=${`wallet-selector-${f.id.toLowerCase()}`}
        size="sm"
        @click=${()=>this.onClickConnector(a)}
        tabIdx=${(0,l.ifDefined)(this.tabIdx)}
        ?disabled=${j}
        rdnsId=${(0,l.ifDefined)(f.explorerWallet?.rdns||void 0)}
        walletRank=${(0,l.ifDefined)(f.explorerWallet?.order)}
      >
      </w3m-list-wallet>
    `}onClickConnector(a){let b=q.RouterController.state.data?.redirectView;if("walletConnect"===a.subtype){o.ConnectorController.setActiveConnector(a.connector),f.CoreHelperUtil.isMobile()?q.RouterController.push("AllWallets"):q.RouterController.push("ConnectingWalletConnect",{redirectView:b});return}if("multiChain"===a.subtype){o.ConnectorController.setActiveConnector(a.connector),q.RouterController.push("ConnectingMultiChain",{redirectView:b});return}if("injected"===a.subtype){o.ConnectorController.setActiveConnector(a.connector),q.RouterController.push("ConnectingExternal",{connector:a.connector,redirectView:b,wallet:a.connector.explorerWallet});return}if("announced"===a.subtype)return"walletConnect"===a.connector.id?void(f.CoreHelperUtil.isMobile()?q.RouterController.push("AllWallets"):q.RouterController.push("ConnectingWalletConnect",{redirectView:b})):(q.RouterController.push("ConnectingExternal",{connector:a.connector,redirectView:b,wallet:a.connector.explorerWallet}),void 0);q.RouterController.push("ConnectingExternal",{connector:a.connector,redirectView:b})}renderWallet(a,b){let d=a.wallet,e=v.AssetUtil.getWalletImage(d),f=n.ConnectionController.hasAnyConnection(m.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT),g=this.loadingTelegram,h="recent"===a.subtype?"recent":void 0,i="recent"===a.subtype?"info":void 0;return c.html`
      <w3m-list-wallet
        displayIndex=${b}
        imageSrc=${(0,l.ifDefined)(e)}
        name=${d.name??"Unknown"}
        @click=${()=>this.onClickWallet(a)}
        size="sm"
        data-testid=${`wallet-selector-${d.id}`}
        tabIdx=${(0,l.ifDefined)(this.tabIdx)}
        ?loading=${g}
        ?disabled=${f}
        rdnsId=${(0,l.ifDefined)(d.rdns||void 0)}
        walletRank=${(0,l.ifDefined)(d.order)}
        tagLabel=${(0,l.ifDefined)(h)}
        .tagVariant=${i}
      >
      </w3m-list-wallet>
    `}onClickWallet(a){let b=q.RouterController.state.data?.redirectView;if("featured"===a.subtype)return void o.ConnectorController.selectWalletConnector(a.wallet);if("recent"===a.subtype){if(this.loadingTelegram)return;o.ConnectorController.selectWalletConnector(a.wallet);return}if("custom"===a.subtype){if(this.loadingTelegram)return;q.RouterController.push("ConnectingWalletConnect",{wallet:a.wallet,redirectView:b});return}if(this.loadingTelegram)return;let c=o.ConnectorController.getConnector({id:a.wallet.id,rdns:a.wallet.rdns});c?q.RouterController.push("ConnectingExternal",{connector:c,redirectView:b}):q.RouterController.push("ConnectingWalletConnect",{wallet:a.wallet,redirectView:b})}};B.styles=z,A([(0,k.property)({type:Number})],B.prototype,"tabIdx",void 0),A([(0,d.state)()],B.prototype,"connectors",void 0),A([(0,d.state)()],B.prototype,"recommended",void 0),A([(0,d.state)()],B.prototype,"featured",void 0),A([(0,d.state)()],B.prototype,"explorerWallets",void 0),A([(0,d.state)()],B.prototype,"connections",void 0),A([(0,d.state)()],B.prototype,"connectorImages",void 0),A([(0,d.state)()],B.prototype,"loadingTelegram",void 0),B=A([(0,i.customElement)("w3m-connector-list")],B);var C=b,D=a.i(47460),E=a.i(572373),F=a.i(363882),G=a.i(764993),H=a.i(774263),I=a.i(376913),J=b,K=b,L=a.i(201976),M=b;a.i(51933),a.i(295210);let N=y.css`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({spacing:a})=>a[1]} ${({spacing:a})=>a[2]};
    column-gap: ${({spacing:a})=>a[1]};
    color: ${({tokens:a})=>a.theme.textSecondary};
    border-radius: ${({borderRadius:a})=>a[20]};
    background-color: transparent;
    transition: background-color ${({durations:a})=>a.lg}
      ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({tokens:a})=>a.theme.textPrimary};
    background-color: ${({tokens:a})=>a.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({tokens:a})=>a.theme.textPrimary};
    }
  }
`;var O=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let P={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},Q={lg:"md",md:"sm",sm:"sm"},R=class extends M.LitElement{constructor(){super(...arguments),this.icon="mobile",this.size="md",this.label="",this.active=!1}render(){return c.html`
      <button data-active=${this.active}>
        ${this.icon?c.html`<wui-icon size=${Q[this.size]} name=${this.icon}></wui-icon>`:""}
        <wui-text variant=${P[this.size]}> ${this.label} </wui-text>
      </button>
    `}};R.styles=[L.resetStyles,L.elementStyles,N],O([(0,k.property)()],R.prototype,"icon",void 0),O([(0,k.property)()],R.prototype,"size",void 0),O([(0,k.property)()],R.prototype,"label",void 0),O([(0,k.property)({type:Boolean})],R.prototype,"active",void 0),R=O([(0,i.customElement)("wui-tab-item")],R);let S=y.css`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    border-radius: ${({borderRadius:a})=>a[32]};
    padding: ${({spacing:a})=>a["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;var T=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let U=class extends K.LitElement{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size="md",this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map((a,b)=>{let d=b===this.activeTab;return c.html`
        <wui-tab-item
          @click=${()=>this.onTabClick(b)}
          icon=${a.icon}
          size=${this.size}
          label=${a.label}
          ?active=${d}
          data-active=${d}
          data-testid="tab-${a.label?.toLowerCase()}"
        ></wui-tab-item>
      `})}onTabClick(a){this.activeTab=a,this.onTabChange(a)}};U.styles=[L.resetStyles,L.elementStyles,S],T([(0,k.property)({type:Array})],U.prototype,"tabs",void 0),T([(0,k.property)()],U.prototype,"onTabChange",void 0),T([(0,k.property)()],U.prototype,"size",void 0),T([(0,d.state)()],U.prototype,"activeTab",void 0),U=T([(0,i.customElement)("wui-tabs")],U);var V=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let W=class extends J.LitElement{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(a=>a())}render(){let a=this.generateTabs();return c.html`
      <wui-flex justifyContent="center" .padding=${["0","0","4","0"]}>
        <wui-tabs .tabs=${a} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){let a=this.platforms.map(a=>{if("browser"===a)return{label:"Browser",icon:"extension",platform:"browser"};if("mobile"===a)return{label:"Mobile",icon:"mobile",platform:"mobile"};if("qrcode"===a)return{label:"Mobile",icon:"mobile",platform:"qrcode"};if("web"===a)return{label:"Webapp",icon:"browser",platform:"web"};if("desktop"===a)return{label:"Desktop",icon:"desktop",platform:"desktop"};return{label:"Browser",icon:"extension",platform:"unsupported"}});return this.platformTabs=a.map(({platform:a})=>a),a}onTabChange(a){let b=this.platformTabs[a];b&&this.onSelectPlatfrom?.(b)}};V([(0,k.property)({type:Array})],W.prototype,"platforms",void 0),V([(0,k.property)()],W.prototype,"onSelectPlatfrom",void 0),W=V([(0,i.customElement)("w3m-connecting-header")],W);var X=b,Y=a.i(384701),Z=b;a.i(790658);let $=y.css`
  :host {
    width: var(--local-width);
  }

  button {
    width: var(--local-width);
    white-space: nowrap;
    column-gap: ${({spacing:a})=>a[2]};
    transition:
      scale ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-1"]},
      background-color ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]},
      border-radius ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-1"]};
    will-change: scale, background-color, border-radius;
    cursor: pointer;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='sm'] {
    border-radius: ${({borderRadius:a})=>a[2]};
    padding: 0 ${({spacing:a})=>a[2]};
    height: 28px;
  }

  button[data-size='md'] {
    border-radius: ${({borderRadius:a})=>a[3]};
    padding: 0 ${({spacing:a})=>a[4]};
    height: 38px;
  }

  button[data-size='lg'] {
    border-radius: ${({borderRadius:a})=>a[4]};
    padding: 0 ${({spacing:a})=>a[5]};
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent-primary'] {
    background-color: ${({tokens:a})=>a.core.backgroundAccentPrimary};
    color: ${({tokens:a})=>a.theme.textInvert};
  }

  button[data-variant='accent-secondary'] {
    background-color: ${({tokens:a})=>a.core.foregroundAccent010};
    color: ${({tokens:a})=>a.core.textAccentPrimary};
  }

  button[data-variant='neutral-primary'] {
    background-color: ${({tokens:a})=>a.theme.backgroundInvert};
    color: ${({tokens:a})=>a.theme.textInvert};
  }

  button[data-variant='neutral-secondary'] {
    background-color: transparent;
    border: 1px solid ${({tokens:a})=>a.theme.borderSecondary};
    color: ${({tokens:a})=>a.theme.textPrimary};
  }

  button[data-variant='neutral-tertiary'] {
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    color: ${({tokens:a})=>a.theme.textPrimary};
  }

  button[data-variant='error-primary'] {
    background-color: ${({tokens:a})=>a.core.textError};
    color: ${({tokens:a})=>a.theme.textInvert};
  }

  button[data-variant='error-secondary'] {
    background-color: ${({tokens:a})=>a.core.backgroundError};
    color: ${({tokens:a})=>a.core.textError};
  }

  button[data-variant='shade'] {
    background: var(--wui-color-gray-glass-002);
    color: var(--wui-color-fg-200);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-size='sm']:focus-visible:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:focus-visible:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:focus-visible:enabled {
    border-radius: 48px;
  }
  button[data-variant='shade']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button[data-size='sm']:hover:enabled {
      border-radius: 28px;
    }

    button[data-size='md']:hover:enabled {
      border-radius: 38px;
    }

    button[data-size='lg']:hover:enabled {
      border-radius: 48px;
    }

    button[data-variant='shade']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='shade']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }
  }

  button[data-size='sm']:active:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:active:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:active:enabled {
    border-radius: 48px;
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    opacity: 0.3;
  }
`;var _=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let aa={lg:"lg-regular-mono",md:"md-regular-mono",sm:"sm-regular-mono"},ab={lg:"md",md:"md",sm:"sm"},ac=class extends Z.LitElement{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="accent-primary"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
     `;let a=this.textVariant??aa[this.size];return c.html`
      <button data-variant=${this.variant} data-size=${this.size} ?disabled=${this.disabled}>
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${a} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){if(this.loading){let a=ab[this.size],b="neutral-primary"===this.variant||"accent-primary"===this.variant?"invert":"primary";return c.html`<wui-loading-spinner color=${b} size=${a}></wui-loading-spinner>`}return null}};ac.styles=[L.resetStyles,L.elementStyles,$],_([(0,k.property)()],ac.prototype,"size",void 0),_([(0,k.property)({type:Boolean})],ac.prototype,"disabled",void 0),_([(0,k.property)({type:Boolean})],ac.prototype,"fullWidth",void 0),_([(0,k.property)({type:Boolean})],ac.prototype,"loading",void 0),_([(0,k.property)()],ac.prototype,"variant",void 0),_([(0,k.property)()],ac.prototype,"textVariant",void 0),ac=_([(0,i.customElement)("wui-button")],ac),a.i(113468),a.i(920963),a.i(992455);var ad=b;let ae=y.css`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${a=>a.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var af=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let ag=class extends ad.LitElement{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let a=this.radius>50?50:this.radius,b=36-a;return c.html`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${a}
          stroke-dasharray="${116+b} ${245+b}"
          stroke-dashoffset=${360+1.75*b}
        />
      </svg>
    `}};ag.styles=[L.resetStyles,ae],af([(0,k.property)({type:Number})],ag.prototype,"radius",void 0),ag=af([(0,i.customElement)("wui-loading-thumbnail")],ag),a.i(970524),a.i(242462);var ah=b,ai=a.i(512026),aj=b;a.i(180055);let ak=y.css`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    border-radius: ${({borderRadius:a})=>a[5]};
    padding-left: ${({spacing:a})=>a[3]};
    padding-right: ${({spacing:a})=>a[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:a})=>a[6]};
  }

  wui-text {
    color: ${({tokens:a})=>a.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;var al=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let am=class extends aj.LitElement{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return c.html`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};am.styles=[L.resetStyles,L.elementStyles,ak],al([(0,k.property)({type:Boolean})],am.prototype,"disabled",void 0),al([(0,k.property)()],am.prototype,"label",void 0),al([(0,k.property)()],am.prototype,"buttonLabel",void 0),am=al([(0,i.customElement)("wui-cta-button")],am);let an=y.css`
  :host {
    display: block;
    padding: 0 ${({spacing:a})=>a["5"]} ${({spacing:a})=>a["5"]};
  }
`;var ao=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let ap=class extends ah.LitElement{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:a,app_store:b,play_store:d,chrome_store:e,homepage:g}=this.wallet,h=f.CoreHelperUtil.isMobile(),i=f.CoreHelperUtil.isIos(),j=f.CoreHelperUtil.isAndroid(),k=[b,d,g,e].filter(Boolean).length>1,l=ai.UiHelperUtil.getTruncateString({string:a,charsStart:12,charsEnd:0,truncate:"end"});return k&&!h?c.html`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${()=>q.RouterController.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!k&&g?c.html`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:b&&i?c.html`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:d&&j?c.html`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&f.CoreHelperUtil.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&f.CoreHelperUtil.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&f.CoreHelperUtil.openHref(this.wallet.homepage,"_blank")}};ap.styles=[an],ao([(0,k.property)({type:Object})],ap.prototype,"wallet",void 0),ap=ao([(0,i.customElement)("w3m-mobile-download-links")],ap);let aq=y.css`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:a})=>a["1"]} * -1);
    bottom: calc(${({spacing:a})=>a["1"]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({durations:a})=>a.lg};
    transition-timing-function: ${({easings:a})=>a["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:a})=>a["4"]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:a})=>a["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;var ar=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};class as extends X.LitElement{constructor(){super(),this.wallet=q.RouterController.state.data?.wallet,this.connector=q.RouterController.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=v.AssetUtil.getConnectorImage(this.connector)??v.AssetUtil.getWalletImage(this.wallet),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=n.ConnectionController.state.wcUri,this.error=n.ConnectionController.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(n.ConnectionController.subscribeKey("wcUri",a=>{this.uri=a,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),n.ConnectionController.subscribeKey("wcError",a=>this.error=a)),(f.CoreHelperUtil.isTelegram()||f.CoreHelperUtil.isSafari())&&f.CoreHelperUtil.isIos()&&n.ConnectionController.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(a=>a()),n.ConnectionController.setWcError(!1),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let a=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,b="";return this.label?b=this.label:(b=`Continue in ${this.name}`,this.error&&(b="Connection declined")),c.html`
      <wui-flex
        data-error=${(0,l.ifDefined)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,l.ifDefined)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","0","0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?"error":"primary"}>
            ${b}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${a}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?c.html`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `:null}
      </wui-flex>

      ${this.isWalletConnect?c.html`
              <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let a=this.shadowRoot?.querySelector("wui-button");a?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){n.ConnectionController.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.()}loaderTemplate(){let a=Y.ThemeController.state.themeVariables["--w3m-border-radius-master"],b=a?parseInt(a.replace("px",""),10):4;return c.html`<wui-loading-thumbnail radius=${9*b}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(f.CoreHelperUtil.copyToClopboard(this.uri),H.SnackController.showSuccess("Link copied"))}catch{H.SnackController.showError("Failed to copy")}}}as.styles=aq,ar([(0,d.state)()],as.prototype,"isRetrying",void 0),ar([(0,d.state)()],as.prototype,"uri",void 0),ar([(0,d.state)()],as.prototype,"error",void 0),ar([(0,d.state)()],as.prototype,"ready",void 0),ar([(0,d.state)()],as.prototype,"showRetry",void 0),ar([(0,d.state)()],as.prototype,"label",void 0),ar([(0,d.state)()],as.prototype,"secondaryBtnLabel",void 0),ar([(0,d.state)()],as.prototype,"secondaryLabel",void 0),ar([(0,d.state)()],as.prototype,"isLoading",void 0),ar([(0,k.property)({type:Boolean})],as.prototype,"isMobile",void 0),ar([(0,k.property)()],as.prototype,"onRetry",void 0);let at=class extends as{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),p.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:q.RouterController.state.view}})}async onConnectProxy(){try{this.error=!1;let{connectors:a}=o.ConnectorController.state,b=a.find(a=>"ANNOUNCED"===a.type&&a.info?.rdns===this.wallet?.rdns||"INJECTED"===a.type||a.name===this.wallet?.name);if(b)await n.ConnectionController.connectExternal(b,b.chain);else throw Error("w3m-connecting-wc-browser: No connector found");G.ModalController.close(),p.EventsController.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown",view:q.RouterController.state.view,walletRank:this.wallet?.order}})}catch(a){a instanceof E.AppKitError&&a.originalName===D.ErrorUtil.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?p.EventsController.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:a.message}}):p.EventsController.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:a?.message??"Unknown"}}),this.error=!0}}};at=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,i.customElement)("w3m-connecting-wc-browser")],at);let au=class extends as{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),p.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:q.RouterController.state.view}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:a,name:b}=this.wallet,{redirect:c,href:d}=f.CoreHelperUtil.formatNativeUrl(a,this.uri);n.ConnectionController.setWcLinking({name:b,href:d}),n.ConnectionController.setRecentWallet(this.wallet),f.CoreHelperUtil.openHref(c,"_blank")}catch{this.error=!0}}};au=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,i.customElement)("w3m-connecting-wc-desktop")],au);var av=a.i(68202),aw=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let ax=class extends as{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=g.OptionsController.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:a,link_mode:b,name:c}=this.wallet,{redirect:d,redirectUniversalLink:e,href:g}=f.CoreHelperUtil.formatNativeUrl(a,this.uri,b);this.redirectDeeplink=d,this.redirectUniversalLink=e,this.target=f.CoreHelperUtil.isIframe()?"_top":"_self",n.ConnectionController.setWcLinking({name:c,href:g}),n.ConnectionController.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?f.CoreHelperUtil.openHref(this.redirectUniversalLink,this.target):f.CoreHelperUtil.openHref(this.redirectDeeplink,this.target)}catch(a){p.EventsController.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:a instanceof Error?a.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=av.ConstantsUtil.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(n.ConnectionController.subscribeKey("wcUri",()=>{this.onHandleURI()})),p.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:q.RouterController.state.view}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onTryAgain(){n.ConnectionController.setWcError(!1),this.onConnect?.()}};aw([(0,d.state)()],ax.prototype,"redirectDeeplink",void 0),aw([(0,d.state)()],ax.prototype,"redirectUniversalLink",void 0),aw([(0,d.state)()],ax.prototype,"target",void 0),aw([(0,d.state)()],ax.prototype,"preferUniversalLinks",void 0),aw([(0,d.state)()],ax.prototype,"isLoading",void 0),ax=aw([(0,i.customElement)("w3m-connecting-wc-mobile")],ax);var ay=b;a.i(349067);var az=a.i(857595);function aA(a,b,c){return a!==b&&(a-b<0?b-a:a-b)<=c+.1}let aB={generate({uri:a,size:b,logoSize:d,padding:e=8,dotColor:f="var(--apkt-colors-black)"}){let g,h,i=[],j=(h=Math.sqrt((g=Array.prototype.slice.call(az.default.create(a,{errorCorrectionLevel:"Q"}).modules.data,0)).length),g.reduce((a,b,c)=>(c%h==0?a.push([b]):a[a.length-1].push(b))&&a,[])),k=(b-2*e)/j.length,l=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];l.forEach(({x:a,y:b})=>{let d=(j.length-7)*k*a+e,g=(j.length-7)*k*b+e;for(let a=0;a<l.length;a+=1){let b=k*(7-2*a);i.push(c.svg`
            <rect
              fill=${2===a?"var(--apkt-colors-black)":"var(--apkt-colors-white)"}
              width=${0===a?b-10:b}
              rx= ${0===a?(b-10)*.45:.45*b}
              ry= ${0===a?(b-10)*.45:.45*b}
              stroke=${f}
              stroke-width=${10*(0===a)}
              height=${0===a?b-10:b}
              x= ${0===a?g+k*a+5:g+k*a}
              y= ${0===a?d+k*a+5:d+k*a}
            />
          `)}});let m=Math.floor((d+25)/k),n=j.length/2-m/2,o=j.length/2+m/2-1,p=[];j.forEach((a,b)=>{a.forEach((a,c)=>{!j[b][c]||b<7&&c<7||b>j.length-8&&c<7||b<7&&c>j.length-8||b>n&&b<o&&c>n&&c<o||p.push([b*k+k/2+e,c*k+k/2+e])})});let q={};return p.forEach(([a,b])=>{q[a]?q[a]?.push(b):q[a]=[b]}),Object.entries(q).map(([a,b])=>{let c=b.filter(a=>b.every(b=>!aA(a,b,k)));return[Number(a),c]}).forEach(([a,b])=>{b.forEach(b=>{i.push(c.svg`<circle cx=${a} cy=${b} fill=${f} r=${k/2.5} />`)})}),Object.entries(q).filter(([a,b])=>b.length>1).map(([a,b])=>{let c=b.filter(a=>b.some(b=>aA(a,b,k)));return[Number(a),c]}).map(([a,b])=>{b.sort((a,b)=>a<b?-1:1);let c=[];for(let a of b){let b=c.find(b=>b.some(b=>aA(a,b,k)));b?b.push(a):c.push([a])}return[a,c.map(a=>[a[0],a[a.length-1]])]}).forEach(([a,b])=>{b.forEach(([b,d])=>{i.push(c.svg`
              <line
                x1=${a}
                x2=${a}
                y1=${b}
                y2=${d}
                stroke=${f}
                stroke-width=${k/1.25}
                stroke-linecap="round"
              />
            `)})}),i}},aC=y.css`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({colors:a})=>a.white};
    border: 1px solid ${({tokens:a})=>a.theme.borderPrimary};
  }

  :host {
    border-radius: ${({borderRadius:a})=>a[4]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${({tokens:a})=>a.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({tokens:a})=>a.theme.backgroundPrimary};
    border-radius: ${({borderRadius:a})=>a[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({borderRadius:a})=>a[2]};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`;var aD=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let aE=class extends ay.LitElement{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,c.html`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`}templateSvg(){return c.svg`
      <svg height=${this.size} width=${this.size}>
        ${aB.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){return this.imageSrc?c.html`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?c.html`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:c.html`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};aE.styles=[L.resetStyles,aC],aD([(0,k.property)()],aE.prototype,"uri",void 0),aD([(0,k.property)({type:Number})],aE.prototype,"size",void 0),aD([(0,k.property)()],aE.prototype,"theme",void 0),aD([(0,k.property)()],aE.prototype,"imageSrc",void 0),aD([(0,k.property)()],aE.prototype,"alt",void 0),aD([(0,k.property)({type:Boolean})],aE.prototype,"arenaClear",void 0),aD([(0,k.property)({type:Boolean})],aE.prototype,"farcaster",void 0),aE=aD([(0,i.customElement)("wui-qr-code")],aE);var aF=b;let aG=y.css`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({tokens:a})=>a.theme.foregroundSecondary} 0%,
      ${({tokens:a})=>a.theme.foregroundTertiary} 50%,
      ${({tokens:a})=>a.theme.foregroundSecondary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1s ease-in-out infinite;
    border-radius: ${({borderRadius:a})=>a[2]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:a})=>a[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;var aH=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let aI=class extends aF.LitElement{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
    `,this.dataset.rounded=this.rounded?"true":"false",c.html`<slot></slot>`}};aI.styles=[aG],aH([(0,k.property)()],aI.prototype,"width",void 0),aH([(0,k.property)()],aI.prototype,"height",void 0),aH([(0,k.property)()],aI.prototype,"variant",void 0),aH([(0,k.property)({type:Boolean})],aI.prototype,"rounded",void 0),aI=aH([(0,i.customElement)("wui-shimmer")],aI),a.i(500083);let aJ=y.css`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:a})=>a[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:a})=>a.xl};
    animation-timing-function: ${({easings:a})=>a["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var aK=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let aL=class extends as{constructor(){super(),this.basic=!1,this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate)}firstUpdated(){this.basic||p.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:q.RouterController.state.view}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach(a=>a()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),c.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","5","5","5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let a=this.getBoundingClientRect().width-40,b=this.wallet?this.wallet.name:void 0;n.ConnectionController.setWcLinking(void 0),n.ConnectionController.setRecentWallet(this.wallet);let d=this.uri;if(this.wallet?.mobile_link){let{redirect:a}=f.CoreHelperUtil.formatNativeUrl(this.wallet?.mobile_link,this.uri,null);d=a}return c.html` <wui-qr-code
      size=${a}
      theme=${Y.ThemeController.state.themeMode}
      uri=${d}
      imageSrc=${(0,l.ifDefined)(v.AssetUtil.getWalletImage(this.wallet))}
      color=${(0,l.ifDefined)(Y.ThemeController.state.themeVariables["--w3m-qr-color"])}
      alt=${(0,l.ifDefined)(b)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){let a=!this.uri||!this.ready;return c.html`<wui-button
      .disabled=${a}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};aL.styles=aJ,aK([(0,k.property)({type:Boolean})],aL.prototype,"basic",void 0),aL=aK([(0,i.customElement)("w3m-connecting-wc-qrcode")],aL);var aM=b;let aN=class extends aM.LitElement{constructor(){if(super(),this.wallet=q.RouterController.state.data?.wallet,!this.wallet)throw Error("w3m-connecting-wc-unsupported: No wallet provided");p.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:q.RouterController.state.view}})}render(){return c.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,l.ifDefined)(v.AssetUtil.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};aN=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,i.customElement)("w3m-connecting-wc-unsupported")],aN);var aO=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let aP=class extends as{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=av.ConstantsUtil.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(n.ConnectionController.subscribeKey("wcUri",()=>{this.updateLoadingState()})),p.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:q.RouterController.state.view}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:a,name:b}=this.wallet,{redirect:c,href:d}=f.CoreHelperUtil.formatUniversalUrl(a,this.uri);n.ConnectionController.setWcLinking({name:b,href:d}),n.ConnectionController.setRecentWallet(this.wallet),f.CoreHelperUtil.openHref(c,"_blank")}catch{this.error=!0}}};aO([(0,d.state)()],aP.prototype,"isLoading",void 0),aP=aO([(0,i.customElement)("w3m-connecting-wc-web")],aP);let aQ=y.css`
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`;var aR=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let aS=class extends C.LitElement{constructor(){super(),this.wallet=q.RouterController.state.data?.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!g.OptionsController.state.siwx,this.remoteFeatures=g.OptionsController.state.remoteFeatures,this.displayBranding=!0,this.basic=!1,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(g.OptionsController.subscribeKey("remoteFeatures",a=>this.remoteFeatures=a))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){return g.OptionsController.state.enableMobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),c.html`
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding&&this.displayBranding?c.html`<wui-ux-by-reown></wui-ux-by-reown>`:null}async initializeConnection(a=!1){if("browser"!==this.platform&&(!g.OptionsController.state.manualWCControl||a))try{let{wcPairingExpiry:b,status:c}=n.ConnectionController.state,{redirectView:d}=q.RouterController.state.data??{};if(a||g.OptionsController.state.enableEmbedded||f.CoreHelperUtil.isPairingExpired(b)||"connecting"===c){let a=n.ConnectionController.getConnections(F.ChainController.state.activeChain),b=this.remoteFeatures?.multiWallet,c=a.length>0;await n.ConnectionController.connectWalletConnect({cache:"never"}),this.isSiwxEnabled||(c&&b?(q.RouterController.replace("ProfileWallets"),H.SnackController.showSuccess("New Wallet Added")):d?q.RouterController.replace(d):G.ModalController.close())}}catch(a){if(a instanceof Error&&a.message.includes("An error occurred when attempting to switch chain")&&!g.OptionsController.state.enableNetworkSwitch&&F.ChainController.state.activeChain){F.ChainController.setActiveCaipNetwork(I.CaipNetworksUtil.getUnsupportedNetwork(`${F.ChainController.state.activeChain}:${F.ChainController.state.activeCaipNetwork?.id}`)),F.ChainController.showUnsupportedChainUI();return}a instanceof E.AppKitError&&a.originalName===D.ErrorUtil.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?p.EventsController.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:a.message}}):p.EventsController.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:a?.message??"Unknown"}}),n.ConnectionController.setWcError(!0),H.SnackController.showError(a.message??"Connection error"),n.ConnectionController.resetWcConnection(),q.RouterController.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;let{mobile_link:a,desktop_link:b,webapp_link:c,injected:d,rdns:e}=this.wallet,h=d?.map(({injected_id:a})=>a).filter(Boolean),i=[...e?[e]:h??[]],j=!g.OptionsController.state.isUniversalProvider&&i.length,k=n.ConnectionController.checkInstalled(i),l=j&&k,m=b&&!f.CoreHelperUtil.isMobile();l&&!F.ChainController.state.noAdapters&&this.platforms.push("browser"),a&&this.platforms.push(f.CoreHelperUtil.isMobile()?"mobile":"qrcode"),c&&this.platforms.push("web"),m&&this.platforms.push("desktop"),l||!j||F.ChainController.state.noAdapters||this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return c.html`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return c.html`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return c.html`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return c.html`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return c.html`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;default:return c.html`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?c.html`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(a){let b=this.shadowRoot?.querySelector("div");b&&(await b.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=a,b.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};aS.styles=aQ,aR([(0,d.state)()],aS.prototype,"platform",void 0),aR([(0,d.state)()],aS.prototype,"platforms",void 0),aR([(0,d.state)()],aS.prototype,"isSiwxEnabled",void 0),aR([(0,d.state)()],aS.prototype,"remoteFeatures",void 0),aR([(0,k.property)({type:Boolean})],aS.prototype,"displayBranding",void 0),aR([(0,k.property)({type:Boolean})],aS.prototype,"basic",void 0),aS=aR([(0,i.customElement)("w3m-connecting-wc-view")],aS);var aT=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let aU=class extends b.LitElement{constructor(){super(),this.unsubscribe=[],this.isMobile=f.CoreHelperUtil.isMobile(),this.remoteFeatures=g.OptionsController.state.remoteFeatures,this.unsubscribe.push(g.OptionsController.subscribeKey("remoteFeatures",a=>this.remoteFeatures=a))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){if(this.isMobile){let{featured:a,recommended:b}=e.ApiController.state,{customWallets:d}=g.OptionsController.state,f=h.StorageUtil.getRecentWallets(),i=a.length||b.length||d?.length||f.length;return c.html`<wui-flex flexDirection="column" gap="2" .margin=${["1","3","3","3"]}>
        ${i?c.html`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return c.html`<wui-flex flexDirection="column" .padding=${["0","0","4","0"]}>
        <w3m-connecting-wc-view ?basic=${!0} .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","3","0","3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding?c.html` <wui-flex flexDirection="column" .padding=${["1","0","1","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};aT([(0,d.state)()],aU.prototype,"isMobile",void 0),aT([(0,d.state)()],aU.prototype,"remoteFeatures",void 0),aU=aT([(0,i.customElement)("w3m-connecting-wc-basic-view")],aU),a.s(["W3mConnectingWcBasicView",()=>aU],902746);var aV=b,aW=b,aX=b;let{I:aY}=c._$LH;var aZ=a.i(83137);let a$=(a,b)=>{let c=a._$AN;if(void 0===c)return!1;for(let a of c)a._$AO?.(b,!1),a$(a,b);return!0},a_=a=>{let b,c;do{if(void 0===(b=a._$AM))break;(c=b._$AN).delete(a),a=b}while(0===c?.size)},a0=a=>{for(let b;b=a._$AM;a=b){let c=b._$AN;if(void 0===c)b._$AN=c=new Set;else if(c.has(a))break;c.add(a),a3(b)}};function a1(a){void 0!==this._$AN?(a_(this),this._$AM=a,a0(this)):this._$AM=a}function a2(a,b=!1,c=0){let d=this._$AH,e=this._$AN;if(void 0!==e&&0!==e.size)if(b)if(Array.isArray(d))for(let a=c;a<d.length;a++)a$(d[a],!1),a_(d[a]);else null!=d&&(a$(d,!1),a_(d));else a$(this,a)}let a3=a=>{a.type==aZ.PartType.CHILD&&(a._$AP??=a2,a._$AQ??=a1)};class a4 extends aZ.Directive{constructor(){super(...arguments),this._$AN=void 0}_$AT(a,b,c){super._$AT(a,b,c),a0(this),this.isConnected=a._$AU}_$AO(a,b=!0){a!==this.isConnected&&(this.isConnected=a,a?this.reconnected?.():this.disconnected?.()),b&&(a$(this,a),a_(this))}setValue(a){if(void 0===this._$Ct.strings)this._$Ct._$AI(a,this);else{let b=[...this._$Ct._$AH];b[this._$Ci]=a,this._$Ct._$AI(b,this,0)}}disconnected(){}reconnected(){}}let a5=()=>new a6;class a6{}let a7=new WeakMap,a8=(0,aZ.directive)(class extends a4{render(a){return c.nothing}update(a,[b]){let d=b!==this.G;return d&&void 0!==this.G&&this.rt(void 0),(d||this.lt!==this.ct)&&(this.G=b,this.ht=a.options?.host,this.rt(this.ct=a.element)),c.nothing}rt(a){if(this.isConnected||(a=void 0),"function"==typeof this.G){let b=this.ht??globalThis,c=a7.get(b);void 0===c&&(c=new WeakMap,a7.set(b,c)),void 0!==c.get(this.G)&&this.G.call(this.ht,void 0),c.set(this.G,a),void 0!==a&&this.G.call(this.ht,a)}else this.G.value=a}get lt(){return"function"==typeof this.G?a7.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),a9=y.css`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]},
      color ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]},
      border ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]},
      box-shadow ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]},
      width ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]},
      height ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]},
      transform ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]},
      opacity ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({colors:a})=>a.neutrals300};
    border-radius: ${({borderRadius:a})=>a.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]},
      color ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]},
      border ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]},
      box-shadow ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]},
      width ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]},
      height ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]},
      transform ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]},
      opacity ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({colors:a})=>a.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({tokens:a})=>a.core.iconAccentPrimary};
    background-color: ${({tokens:a})=>a.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({tokens:a})=>a.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({tokens:a})=>a.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({colors:a})=>a.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({colors:a})=>a.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({colors:a})=>a.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({colors:a})=>a.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({colors:a})=>a.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({tokens:a})=>a.theme.textTertiary};
  }
`;var ba=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let bb=class extends aX.LitElement{constructor(){super(...arguments),this.inputElementRef=a5(),this.checked=!1,this.disabled=!1,this.size="md"}render(){return c.html`
      <label data-size=${this.size}>
        <input
          ${a8(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};bb.styles=[L.resetStyles,L.elementStyles,a9],ba([(0,k.property)({type:Boolean})],bb.prototype,"checked",void 0),ba([(0,k.property)({type:Boolean})],bb.prototype,"disabled",void 0),ba([(0,k.property)()],bb.prototype,"size",void 0),bb=ba([(0,i.customElement)("wui-toggle")],bb);let bc=y.css`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({spacing:a})=>a["2"]};
    padding: ${({spacing:a})=>a["2"]} ${({spacing:a})=>a["3"]};
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    border-radius: ${({borderRadius:a})=>a["4"]};
    box-shadow: inset 0 0 0 1px ${({tokens:a})=>a.theme.foregroundPrimary};
    transition: background-color ${({durations:a})=>a.lg}
      ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var bd=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let be=class extends aW.LitElement{constructor(){super(...arguments),this.checked=!1}render(){return c.html`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(a){a.stopPropagation(),this.checked=a.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("certifiedSwitchChange",{detail:this.checked,bubbles:!0,composed:!0}))}};be.styles=[L.resetStyles,L.elementStyles,bc],bd([(0,k.property)({type:Boolean})],be.prototype,"checked",void 0),be=bd([(0,i.customElement)("wui-certified-switch")],be);var bf=b,bg=b;let bh=y.css`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${({spacing:a})=>a[3]};
    color: ${({tokens:a})=>a.theme.textPrimary};
    caret-color: ${({tokens:a})=>a.core.textAccentPrimary};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${({borderRadius:a})=>a[4]};
    color: inherit;
    background: transparent;
    border: 1px solid ${({tokens:a})=>a.theme.borderPrimary};
    caret-color: ${({tokens:a})=>a.core.textAccentPrimary};
    padding: ${({spacing:a})=>a[3]} ${({spacing:a})=>a[3]}
      ${({spacing:a})=>a[3]} ${({spacing:a})=>a[10]};
    font-size: ${({textSize:a})=>a.large};
    line-height: ${({typography:a})=>a["lg-regular"].lineHeight};
    letter-spacing: ${({typography:a})=>a["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:a})=>a.regular};
    font-family: ${({fontFamily:a})=>a.regular};
  }

  input[data-size='lg'] {
    padding: ${({spacing:a})=>a[4]} ${({spacing:a})=>a[3]}
      ${({spacing:a})=>a[4]} ${({spacing:a})=>a[10]};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${({tokens:a})=>a.theme.borderSecondary};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${({tokens:a})=>a.theme.borderPrimary};
  }

  input::placeholder {
    color: ${({tokens:a})=>a.theme.textSecondary};
  }

  input:focus:enabled {
    border: 1px solid ${({tokens:a})=>a.theme.borderSecondary};
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:a})=>a.core.foregroundAccent040};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:a})=>a.core.foregroundAccent040};
    box-shadow: 0px 0px 0px 4px ${({tokens:a})=>a.core.foregroundAccent040};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${({spacing:a})=>a[4]};
    color: ${({tokens:a})=>a.theme.iconDefault};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:a})=>a[3]};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${({borderRadius:a})=>a[2]};
    color: ${({tokens:a})=>a.core.textAccentPrimary};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${({tokens:a})=>a.core.foregroundAccent010};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${({spacing:a})=>a[12]};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;var bi=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let bj=class extends bg.LitElement{constructor(){super(...arguments),this.inputElementRef=a5(),this.disabled=!1,this.loading=!1,this.placeholder="",this.type="text",this.value="",this.size="md"}render(){return c.html` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${a8(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${(0,l.ifDefined)(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value||""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`}templateLeftIcon(){return this.icon?c.html`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}templateSubmitButton(){return this.onSubmit?c.html`<button
        class="wui-input-text-submit-button ${this.loading?"loading":""}"
        @click=${this.onSubmit?.bind(this)}
        ?disabled=${this.disabled||this.loading}
      >
        ${this.loading?c.html`<wui-icon name="spinner" size="md"></wui-icon>`:c.html`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`:null}templateError(){return this.errorText?c.html`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`:null}templateWarning(){return this.warningText?c.html`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};bj.styles=[L.resetStyles,L.elementStyles,bh],bi([(0,k.property)()],bj.prototype,"icon",void 0),bi([(0,k.property)({type:Boolean})],bj.prototype,"disabled",void 0),bi([(0,k.property)({type:Boolean})],bj.prototype,"loading",void 0),bi([(0,k.property)()],bj.prototype,"placeholder",void 0),bi([(0,k.property)()],bj.prototype,"type",void 0),bi([(0,k.property)()],bj.prototype,"value",void 0),bi([(0,k.property)()],bj.prototype,"errorText",void 0),bi([(0,k.property)()],bj.prototype,"warningText",void 0),bi([(0,k.property)()],bj.prototype,"onSubmit",void 0),bi([(0,k.property)()],bj.prototype,"size",void 0),bi([(0,k.property)({attribute:!1})],bj.prototype,"onKeyDown",void 0),bj=bi([(0,i.customElement)("wui-input-text")],bj);let bk=y.css`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:a})=>a[3]};
    color: ${({tokens:a})=>a.theme.iconDefault};
    cursor: pointer;
    padding: ${({spacing:a})=>a[2]};
    background-color: transparent;
    border-radius: ${({borderRadius:a})=>a[4]};
    transition: background-color ${({durations:a})=>a.lg}
      ${({easings:a})=>a["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    }
  }
`;var bl=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let bm=class extends bf.LitElement{constructor(){super(...arguments),this.inputComponentRef=a5(),this.inputValue=""}render(){return c.html`
      <wui-input-text
        ${a8(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?c.html`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(a){this.inputValue=a.detail||""}clearValue(){let a=this.inputComponentRef.value,b=a?.inputElementRef.value;b&&(b.value="",this.inputValue="",b.focus(),b.dispatchEvent(new Event("input")))}};bm.styles=[L.resetStyles,bk],bl([(0,k.property)()],bm.prototype,"inputValue",void 0),bm=bl([(0,i.customElement)("wui-search-bar")],bm);var bn=b,bo=b;let bp=c.svg`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,bq=y.css`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({spacing:a})=>a[2]};
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    border-radius: ${({borderRadius:a})=>a[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({tokens:a})=>a.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var br=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let bs=class extends bo.LitElement{constructor(){super(...arguments),this.type="wallet"}render(){return c.html`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?c.html` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${bp}`:c.html`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};bs.styles=[L.resetStyles,L.elementStyles,bq],br([(0,k.property)()],bs.prototype,"type",void 0),bs=br([(0,i.customElement)("wui-card-select-loader")],bs);var bt=b,bu=a.i(192845);let bv=bu.css`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var bw=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let bx=class extends bt.LitElement{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding&&ai.UiHelperUtil.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&ai.UiHelperUtil.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&ai.UiHelperUtil.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&ai.UiHelperUtil.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&ai.UiHelperUtil.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&ai.UiHelperUtil.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&ai.UiHelperUtil.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&ai.UiHelperUtil.getSpacingStyles(this.margin,3)};
    `,c.html`<slot></slot>`}};bx.styles=[L.resetStyles,bv],bw([(0,k.property)()],bx.prototype,"gridTemplateRows",void 0),bw([(0,k.property)()],bx.prototype,"gridTemplateColumns",void 0),bw([(0,k.property)()],bx.prototype,"justifyItems",void 0),bw([(0,k.property)()],bx.prototype,"alignItems",void 0),bw([(0,k.property)()],bx.prototype,"justifyContent",void 0),bw([(0,k.property)()],bx.prototype,"alignContent",void 0),bw([(0,k.property)()],bx.prototype,"columnGap",void 0),bw([(0,k.property)()],bx.prototype,"rowGap",void 0),bw([(0,k.property)()],bx.prototype,"gap",void 0),bw([(0,k.property)()],bx.prototype,"padding",void 0),bw([(0,k.property)()],bx.prototype,"margin",void 0),bx=bw([(0,i.customElement)("wui-grid")],bx);var by=a.i(458277),bz=b;let bA=y.css`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({spacing:a})=>a["2"]};
    padding: ${({spacing:a})=>a["3"]} ${({spacing:a})=>a["0"]};
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({borderRadius:a})=>a["4"]}, 20px);
    transition:
      color ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-1"]},
      background-color ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-1"]},
      border-radius ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-1"]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({tokens:a})=>a.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({tokens:a})=>a.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({colors:a})=>a.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({colors:a})=>a.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({colors:a})=>a.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var bB=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let bC=class extends bz.LitElement{constructor(){super(),this.observer=new IntersectionObserver(()=>void 0),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.isImpressed=!1,this.explorerId="",this.walletQuery="",this.certified=!1,this.displayIndex=0,this.wallet=void 0,this.observer=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting?(this.visible=!0,this.fetchImageSrc(),this.sendImpressionEvent()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){let a=this.wallet?.badge_type==="certified";return c.html`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${(0,l.ifDefined)(a?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${a?c.html`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return(this.visible||this.imageSrc)&&!this.imageLoading?c.html`
      <wui-wallet-image
        size="lg"
        imageSrc=${(0,l.ifDefined)(this.imageSrc)}
        name=${(0,l.ifDefined)(this.wallet?.name)}
        .installed=${this.wallet?.installed??!1}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `:this.shimmerTemplate()}shimmerTemplate(){return c.html`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}async fetchImageSrc(){!this.wallet||(this.imageSrc=v.AssetUtil.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await v.AssetUtil.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}sendImpressionEvent(){this.wallet&&!this.isImpressed&&(this.isImpressed=!0,p.EventsController.sendWalletImpressionEvent({name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.explorerId,view:q.RouterController.state.view,query:this.walletQuery,certified:this.certified,displayIndex:this.displayIndex}))}};bC.styles=bA,bB([(0,d.state)()],bC.prototype,"visible",void 0),bB([(0,d.state)()],bC.prototype,"imageSrc",void 0),bB([(0,d.state)()],bC.prototype,"imageLoading",void 0),bB([(0,d.state)()],bC.prototype,"isImpressed",void 0),bB([(0,k.property)()],bC.prototype,"explorerId",void 0),bB([(0,k.property)()],bC.prototype,"walletQuery",void 0),bB([(0,k.property)()],bC.prototype,"certified",void 0),bB([(0,k.property)()],bC.prototype,"displayIndex",void 0),bB([(0,k.property)({type:Object})],bC.prototype,"wallet",void 0),bC=bB([(0,i.customElement)("w3m-all-wallets-list-item")],bC);let bD=y.css`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({durations:a})=>a.xl};
    animation-timing-function: ${({easings:a})=>a["ease-inout-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({spacing:a})=>a["4"]};
    padding-bottom: ${({spacing:a})=>a["4"]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var bE=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let bF="local-paginator",bG=class extends bn.LitElement{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!e.ApiController.state.wallets.length,this.wallets=e.ApiController.state.wallets,this.recommended=e.ApiController.state.recommended,this.featured=e.ApiController.state.featured,this.filteredWallets=e.ApiController.state.filteredWallets,this.mobileFullScreen=g.OptionsController.state.enableMobileFullScreen,this.unsubscribe.push(e.ApiController.subscribeKey("wallets",a=>this.wallets=a),e.ApiController.subscribeKey("recommended",a=>this.recommended=a),e.ApiController.subscribeKey("featured",a=>this.featured=a),e.ApiController.subscribeKey("filteredWallets",a=>this.filteredWallets=a))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(a=>a()),this.paginationObserver?.disconnect()}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),c.html`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","3","3","3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;let a=this.shadowRoot?.querySelector("wui-grid");a&&(await e.ApiController.fetchWalletsByPage({page:1}),await a.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,a.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(a,b){return[...Array(a)].map(()=>c.html`
        <wui-card-select-loader type="wallet" id=${(0,l.ifDefined)(b)}></wui-card-select-loader>
      `)}getWallets(){let a=[...this.featured,...this.recommended];this.filteredWallets?.length>0?a.push(...this.filteredWallets):a.push(...this.wallets);let b=f.CoreHelperUtil.uniqueBy(a,"id"),c=by.WalletUtil.markWalletsAsInstalled(b);return by.WalletUtil.markWalletsWithDisplayIndex(c)}walletsTemplate(){return this.getWallets().map((a,b)=>c.html`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${a.id}"
          @click=${()=>this.onConnectWallet(a)}
          .wallet=${a}
          explorerId=${a.id}
          certified=${"certified"===this.badge}
          displayIndex=${b}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){let{wallets:a,recommended:b,featured:c,count:d,mobileFilteredOutWalletsLength:f}=e.ApiController.state,g=window.innerWidth<352?3:4,h=a.length+b.length,i=Math.ceil(h/g)*g-h+g;return(i-=a.length?c.length%g:0,0===d&&c.length>0)?null:0===d||[...c,...a,...b].length<d-(f??0)?this.shimmerTemplate(i,bF):null}createPaginationObserver(){let a=this.shadowRoot?.querySelector(`#${bF}`);a&&(this.paginationObserver=new IntersectionObserver(([a])=>{if(a?.isIntersecting&&!this.loading){let{page:a,count:b,wallets:c}=e.ApiController.state;c.length<b&&e.ApiController.fetchWalletsByPage({page:a+1})}}),this.paginationObserver.observe(a))}onConnectWallet(a){o.ConnectorController.selectWalletConnector(a)}};bG.styles=bD,bE([(0,d.state)()],bG.prototype,"loading",void 0),bE([(0,d.state)()],bG.prototype,"wallets",void 0),bE([(0,d.state)()],bG.prototype,"recommended",void 0),bE([(0,d.state)()],bG.prototype,"featured",void 0),bE([(0,d.state)()],bG.prototype,"filteredWallets",void 0),bE([(0,d.state)()],bG.prototype,"badge",void 0),bE([(0,d.state)()],bG.prototype,"mobileFullScreen",void 0),bG=bE([(0,i.customElement)("w3m-all-wallets-list")],bG);var bH=b;let bI=bu.css`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
    height: auto;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var bJ=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let bK=class extends bH.LitElement{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.mobileFullScreen=g.OptionsController.state.enableMobileFullScreen,this.query=""}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.onSearch(),this.loading?c.html`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await e.ApiController.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){let{search:a}=e.ApiController.state,b=by.WalletUtil.markWalletsAsInstalled(a);return a.length?c.html`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","3","3","3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${b.map((a,b)=>c.html`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(a)}
              .wallet=${a}
              data-testid="wallet-search-item-${a.id}"
              explorerId=${a.id}
              certified=${"certified"===this.badge}
              walletQuery=${this.query}
              displayIndex=${b}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:c.html`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(a){o.ConnectorController.selectWalletConnector(a)}};bK.styles=bI,bJ([(0,d.state)()],bK.prototype,"loading",void 0),bJ([(0,d.state)()],bK.prototype,"mobileFullScreen",void 0),bJ([(0,k.property)()],bK.prototype,"query",void 0),bJ([(0,k.property)()],bK.prototype,"badge",void 0),bK=bJ([(0,i.customElement)("w3m-all-wallets-search")],bK);var bL=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let bM=class extends aV.LitElement{constructor(){super(...arguments),this.search="",this.badge=void 0,this.onDebouncedSearch=f.CoreHelperUtil.debounce(a=>{this.search=a})}render(){let a=this.search.length>=2;return c.html`
      <wui-flex .padding=${["1","3","3","3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${"certified"===this.badge}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${a||this.badge?c.html`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:c.html`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(a){this.onDebouncedSearch(a.detail)}onCertifiedSwitchChange(a){a.detail?(this.badge="certified",H.SnackController.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return f.CoreHelperUtil.isMobile()?c.html`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){q.RouterController.push("ConnectingWalletConnect")}};bL([(0,d.state)()],bM.prototype,"search",void 0),bL([(0,d.state)()],bM.prototype,"badge",void 0),bM=bL([(0,i.customElement)("w3m-all-wallets-view")],bM),a.s(["W3mAllWalletsView",()=>bM],577735);var bN=b,bO=b;let bP=y.css`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:a})=>a[3]};
    width: 100%;
    background-color: ${({tokens:a})=>a.theme.backgroundPrimary};
    border-radius: ${({borderRadius:a})=>a[4]};
    transition:
      background-color ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]},
      scale ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({tokens:a})=>a.theme.textPrimary};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var bQ=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let bR=class extends bO.LitElement{constructor(){super(...arguments),this.imageSrc="google",this.loading=!1,this.disabled=!1,this.rightIcon=!0,this.rounded=!1,this.fullSize=!1}render(){return this.dataset.rounded=this.rounded?"true":"false",c.html`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        tabindex=${(0,l.ifDefined)(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `}templateLeftIcon(){return this.icon?c.html`<wui-image
        icon=${this.icon}
        iconColor=${(0,l.ifDefined)(this.iconColor)}
        ?boxed=${!0}
        ?rounded=${this.rounded}
      ></wui-image>`:c.html`<wui-image
      ?boxed=${!0}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      src=${this.imageSrc}
    ></wui-image>`}templateRightIcon(){return this.rightIcon?this.loading?c.html`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:c.html`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`:null}};bR.styles=[L.resetStyles,L.elementStyles,bP],bQ([(0,k.property)()],bR.prototype,"imageSrc",void 0),bQ([(0,k.property)()],bR.prototype,"icon",void 0),bQ([(0,k.property)()],bR.prototype,"iconColor",void 0),bQ([(0,k.property)({type:Boolean})],bR.prototype,"loading",void 0),bQ([(0,k.property)()],bR.prototype,"tabIdx",void 0),bQ([(0,k.property)({type:Boolean})],bR.prototype,"disabled",void 0),bQ([(0,k.property)({type:Boolean})],bR.prototype,"rightIcon",void 0),bQ([(0,k.property)({type:Boolean})],bR.prototype,"rounded",void 0),bQ([(0,k.property)({type:Boolean})],bR.prototype,"fullSize",void 0),bR=bQ([(0,i.customElement)("wui-list-item")],bR);let bS=class extends bN.LitElement{constructor(){super(...arguments),this.wallet=q.RouterController.state.data?.wallet}render(){if(!this.wallet)throw Error("w3m-downloads-view");return c.html`
      <wui-flex gap="2" flexDirection="column" .padding=${["3","3","4","3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?c.html`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?c.html`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?c.html`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?c.html`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}openStore(a){a.href&&this.wallet&&(p.EventsController.sendEvent({type:"track",event:"GET_WALLET",properties:{name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.wallet.id,type:a.type}}),f.CoreHelperUtil.openHref(a.href,"_blank"))}onChromeStore(){this.wallet?.chrome_store&&this.openStore({href:this.wallet.chrome_store,type:"chrome_store"})}onAppStore(){this.wallet?.app_store&&this.openStore({href:this.wallet.app_store,type:"app_store"})}onPlayStore(){this.wallet?.play_store&&this.openStore({href:this.wallet.play_store,type:"play_store"})}onHomePage(){this.wallet?.homepage&&this.openStore({href:this.wallet.homepage,type:"homepage"})}};bS=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,i.customElement)("w3m-downloads-view")],bS),a.s(["W3mDownloadsView",()=>bS],312946),a.s([],163359),a.i(163359),a.i(902746),a.i(577735),a.i(312946),a.s(["W3mAllWalletsView",()=>bM,"W3mConnectingWcBasicView",()=>aU,"W3mDownloadsView",()=>bS],358657)}];

//# sourceMappingURL=daac2_%40reown_appkit-scaffold-ui_dist_esm_exports_basic_f93d53b8.js.map
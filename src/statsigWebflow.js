window["StatsigWebflowAdapter"] = window["StatsigWebflowAdapter"] || {
  addSdkScriptTag: function() {
    const script = document.createElement('script');
    script.setAttribute('id', 'statsigSdk');
    script.setAttribute('src', 'https://cdn.jsdelivr.net/npm/statsig-js@4.50.0/build/statsig-prod-web-sdk.min.js');
    document.head.appendChild(script);
  },

  applyStatsigConfigToTab: function(tab) {
    const gateId = tab.dataset.gateid;
    const tabContent = tab.children[0];
    if (tabContent.children.length < 2) {
      return;
    }
    if (statsig.checkGate(gateId)) {
      tabContent.children[1].classList.add('w--tab-active');
      tabContent.children[0].classList.remove('w--tab-active');
    } else {
      tabContent.children[0].classList.add('w--tab-active');
      tabContent.children[1].classList.remove('w--tab-active');
    }
  },

  applyStatsigConfigToDom: function() {
    for (let ii = 0; ii < this.statsigTabs.length; ii++) {
      const tab = this.statsigTabs[ii];
      this.applyStatsigConfigToTab(tab);
    }
  },

  enumerateStatsigTabs: function() {
    this.statsigTabs = [];
    const allTabs = document.querySelectorAll('div[data-gateid]');
    for (let ii = 0; ii < allTabs.length; ii++) {
      const tab = allTabs[ii];
      this.statsigTabs.push(tab);
    }
  },

  getSdkKey: function() {
    const url = new URL(document.currentScript.src);
    if (!url) {
      return null;
    }
    return url.searchParams.get('key');    
  },

  initialize: function() {
    const sdkScript = document.head.querySelector('#statsigSdk');
    if (!sdkScript) {
      this.addSdkScriptTag();
    }

    this.initSDK();
  },

  initSDK: function() {
    const sdkKey = this.getSdkKey();
    if (!sdkKey) {
      console.error('Missing Statsig SDK key');
      return false;
    }

    document.addEventListener("DOMContentLoaded", () => {
      this.enumerateStatsigTabs();
    });

    window.addEventListener('load', () => {
      statsig.initialize(sdkKey, {}).then(() => {
        this.applyStatsigConfigToDom();
      });
    });
  }
};

StatsigWebflowAdapter.initialize();
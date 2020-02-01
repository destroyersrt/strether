(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{UO6m:function(e,t,i){"use strict";i.d(t,"a",function(){return r});var s=i("i+c7"),n=i("XGgE"),r=(i("OLhb"),i("U/Bw"),i("eikZ"),i("BuZO"),i("PG31"),function(){function e(e,t,i,s,n,r){this.http=e,this.route=t,this.restService=i,this.router=s,this.dataService=n,this.authService=r,this.settingsReceived=!1,this.licenseStatus="Getting license status",this.licenseStatusReceiving=!1,this.displayWarning=!0,this.isEnterpriseEdition=!1,this.logLevelDebug="DEBUG",this.logLevelInfo="INFO",this.logLevelWarn="WARN",this.logLevelError="ERROR",this.logLevelOff="OFF",this.allLicensesUsedError="ALL_LICENSES_ARE_USED",this.noLicenseFounrError="NO_LICENSE_FOUND",this.licenseExpireError="LICENSE_EXPIRED",this.licenseServerRequestError="serverRequestError"}return Object.defineProperty(e.prototype,"messageReceived",{get:function(){return this._messageReceived},set:function(e){this._messageReceived=e},enumerable:!0,configurable:!0}),e.prototype.ngOnInit=function(){this.serverSettings=new s.b(null,null,!1),this.getLogLevel()},e.prototype.ngAfterViewInit=function(){var e=this;this.restService.isEnterpriseEdition().subscribe(function(t){e.isEnterpriseEdition=t.success,e.getServerSettings()})},e.prototype.ngOnDestroy=function(){},e.prototype.getLogLevel=function(){var e=this;this.restService.getLogLevel().subscribe(function(t){e.currentLogLevel=t.logLevel})},e.prototype.logLevelChanged=function(e){e==this.logLevelDebug&&(this.currentLogLevel=this.logLevelDebug),e==this.logLevelInfo&&(this.currentLogLevel=this.logLevelInfo),e==this.logLevelWarn&&(this.currentLogLevel=this.logLevelWarn),e==this.logLevelError&&(this.currentLogLevel=this.logLevelError),e==this.logLevelOff&&(this.currentLogLevel=this.logLevelOff)},e.prototype.changeLogLevel=function(e){e&&this.restService.changeLogLevel(this.currentLogLevel).subscribe(function(e){1==e.success?$.notify({icon:"ti-save",message:n.a.getLocaleInterface().settings_saved},{type:"success",delay:900,placement:{from:"top",align:"right"}}):$.notify({icon:"ti-alert",message:n.a.getLocaleInterface().settings_not_saved},{type:"warning",delay:1900,placement:{from:"top",align:"right"}})})},e.prototype.getLastLicenseStatus=function(){var e=this;this.isEnterpriseEdition&&(this.licenseStatusReceiving=!0,this.restService.getLastLicenseStatus().subscribe(function(t){e.licenseStatusReceiving=!1,e.evaluateLicenseStatus(t)}))},e.prototype.getLicenseStatus=function(){var e=this;return this.licenseStatusReceiving=!0,this.isEnterpriseEdition&&(this.serverSettings.licenceKey=this.serverSettings.licenceKey.trim(),this.restService.getLicenseStatus(this.serverSettings.licenceKey).subscribe(function(t){e.licenseStatusReceiving=!1,e.evaluateLicenseStatus(t)})),this.currentLicence},e.prototype.evaluateLicenseStatus=function(e){var t=this,i="Invalid License",s="Please Validate Your License";if(null!=e&&(this.currentLicence=e),null==this.currentLicence||null==this.currentLicence.licenceId)this.licenseStatus="Invalid",console.log("invalid license"),this.currentLicence.status==this.licenseServerRequestError?(i="Could Not Connect To License Server",s="Please Check Your Connection"):JSON.parse(this.currentLicence.status,function(e,i){"refreshInterval"==e&&(s="Your license is granted to another instance, please close your other instances, wait "+i+" minutes and try again."),"result"==e&&i==t.licenseExpireError&&(s="Your license is expired, please renew it.")}),this.authService.licenceWarningDisplay&&!this.serverSettings.buildForMarket&&swal({title:i,text:s,type:"error",confirmButtonColor:"#3085d6",confirmButtonText:"OK",onClose:function(){}}).then(function(){}).catch(function(){});else{this.licenseStatus="Valid",this.authService.licenceWarningDisplay=!1;var n=this.currentLicence.endDate;this.leftDays=this.differenceInDays((new Date).getTime(),new Date(n).getTime()),this.leftDays<16&&this.authService.licenceWarningDisplay&&(console.log("Your license expires in "+this.leftDays+" days"),swal({title:"Your license expires in "+this.leftDays+" days",text:"Please Renew Your License ",type:"info",confirmButtonColor:"#3085d6",confirmButtonText:"OK",onClose:function(){}}).then(function(){}).catch(function(){}),this.authService.licenceWarningDisplay=!1)}},e.prototype.changeServerSettings=function(e){var t=this;e&&this.restService.changeServerSettings(this.serverSettings).subscribe(function(e){1==e.success?($.notify({icon:"ti-save",message:n.a.getLocaleInterface().settings_saved},{type:"success",delay:900,placement:{from:"top",align:"right"}}),t.authService.serverSettings=t.serverSettings):$.notify({icon:"ti-alert",message:n.a.getLocaleInterface().settings_not_saved},{type:"warning",delay:1900,placement:{from:"top",align:"right"}}),t.authService.licenceWarningDisplay=!0,t.serverSettings.buildForMarket||t.getLicenseStatus()})},e.prototype.getServerSettings=function(){var e=this;this.restService.getServerSettings().subscribe(function(t){e.serverSettings=t,e.settingsReceived=!0,e.serverSettings.buildForMarket||e.getLastLicenseStatus()})},e.prototype.differenceInDays=function(e,t){return Math.round((t-e)/864e5)},e}())}}]);
webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/modules/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/modules/accounts/accounts.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var account_add_component_1 = __webpack_require__("../../../../../src/modules/accounts/components/account-add/account-add.component.ts");
var account_edit_component_1 = __webpack_require__("../../../../../src/modules/accounts/components/account-edit/account-edit.component.ts");
var account_list_component_1 = __webpack_require__("../../../../../src/modules/accounts/components/account-list/account-list.component.ts");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var accounts_routing_module_1 = __webpack_require__("../../../../../src/modules/accounts/accounts.routing.module.ts");
var AccountsModule = /** @class */ (function () {
    function AccountsModule() {
    }
    AccountsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                accounts_routing_module_1.AccountRoutingModule
            ],
            declarations: [
                account_add_component_1.AccountAddComponent,
                account_edit_component_1.AccountEditComponent,
                account_list_component_1.AccountListComponent
            ],
            providers: [data_service_1.DataService]
        })
    ], AccountsModule);
    return AccountsModule;
}());
exports.AccountsModule = AccountsModule;


/***/ }),

/***/ "../../../../../src/modules/accounts/accounts.routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var account_add_component_1 = __webpack_require__("../../../../../src/modules/accounts/components/account-add/account-add.component.ts");
var account_edit_component_1 = __webpack_require__("../../../../../src/modules/accounts/components/account-edit/account-edit.component.ts");
var account_list_component_1 = __webpack_require__("../../../../../src/modules/accounts/components/account-list/account-list.component.ts");
var accountsRoutes = [
    {
        path: 'accounts',
        component: account_list_component_1.AccountListComponent,
        children: [
            {
                path: 'account-add', component: account_add_component_1.AccountAddComponent
            },
            { path: 'account-edit/:id', component: account_edit_component_1.AccountEditComponent }
        ]
    }
];
var AccountRoutingModule = /** @class */ (function () {
    function AccountRoutingModule() {
    }
    AccountRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(accountsRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AccountRoutingModule);
    return AccountRoutingModule;
}());
exports.AccountRoutingModule = AccountRoutingModule;


/***/ }),

/***/ "../../../../../src/modules/accounts/components/account-add/account-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n\r\nlabel{\r\n  width:100px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/accounts/components/account-add/account-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"accountAdd\">\r\n  <h4>Add</h4>\r\n\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\r\n    <label>Type</label>\r\n    <input type='radio' name=\"acctType\" formControlName=\"acctType\" value=\"Asset\" /> Asset\r\n    <input type='radio' name=\"acctType\" formControlName=\"acctType\" value=\"Liability\" /> Liability <br />\r\n    <label>Name</label>\r\n    <input type='text' name=\"name\" formControlName=\"name\" /> <br />\r\n    <label>Institution</label>\r\n    <input type='text' name=\"institution\" formControlName=\"institution\" /> <br />\r\n    <label>Number</label>\r\n    <input type='text' name=\"number\" formControlName=\"number\" /> <br />\r\n    <label>Interest Rate</label>\r\n    <input type='number' name=\"interest\" formControlName=\"interest\" />% <br />\r\n    <label>Limit<span class=\"pull-right\">$</span></label>\r\n    <input type='number' name=\"limit\" formControlName=\"limit\" /> <br />\r\n    <input type='submit' value=\"Add\" />\r\n    <button routerLink=\"/accounts\">Cancel</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/accounts/components/account-add/account-add.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var AccountAddComponent = /** @class */ (function () {
    function AccountAddComponent(route, dataService, location) {
        this.route = route;
        this.dataService = dataService;
        this.location = location;
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
        this.displayAsPercent = function (value) { return value.toFixed(2) + "%"; };
    }
    AccountAddComponent.prototype.ngOnInit = function () {
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].setAttribute("disabled", "true");
        }
        ;
        document.getElementById("addlink").setAttribute("disabled", "true");
        this.newAccount = this.freshNewAccount();
        this.form = new forms_1.FormGroup({
            acctType: new forms_1.FormControl(this.newAccount.acctType),
            institution: new forms_1.FormControl(this.newAccount.institution),
            interest: new forms_1.FormControl(this.newAccount.interest),
            limit: new forms_1.FormControl(this.newAccount.limit),
            name: new forms_1.FormControl(this.newAccount.name),
            number: new forms_1.FormControl(this.newAccount.number),
        });
    };
    AccountAddComponent.prototype.ngOnDestroy = function () {
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].removeAttribute("disabled");
        }
        ;
        document.getElementById("addlink").removeAttribute("disabled");
    };
    AccountAddComponent.prototype.freshNewAccount = function () {
        return { id: null, balance: 0, acctType: "Asset", institution: '', interest: 0, limit: 0, name: 'New Account', number: '', owned: true };
    };
    AccountAddComponent.prototype.goBack = function () {
        this.location.back();
    };
    AccountAddComponent.prototype.onSubmit = function () {
        this.newAccount.acctType = this.form.get('acctType').value;
        this.newAccount.institution = this.form.get('institution').value;
        this.newAccount.interest = this.form.get('interest').value;
        this.newAccount.limit = this.form.get('limit').value;
        this.newAccount.name = this.form.get('name').value;
        this.newAccount.number = this.form.get('number').value;
        this.dataService.addAccount(this.newAccount);
        //reset
        this.ngOnInit();
        this.goBack();
    };
    AccountAddComponent = __decorate([
        core_1.Component({
            selector: 'account-add',
            template: __webpack_require__("../../../../../src/modules/accounts/components/account-add/account-add.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/accounts/components/account-add/account-add.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            data_service_1.DataService,
            common_1.Location])
    ], AccountAddComponent);
    return AccountAddComponent;
}()); //class
exports.AccountAddComponent = AccountAddComponent;


/***/ }),

/***/ "../../../../../src/modules/accounts/components/account-edit/account-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n\r\nlabel {\r\n  width: 100px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/accounts/components/account-edit/account-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"accountEdit\">\r\n  <h4>Edit</h4>\r\n\r\n  <form *ngIf=\"form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\r\n    <label>Type</label>\r\n    <input type='radio' name=\"acctType\" value=\"Asset\" formControlName=\"acctType\" /> Asset\r\n    <input type='radio' name=\"acctType\" value=\"Liability\" formControlName=\"acctType\" /> Liability <br />\r\n    <label>Name</label>\r\n    <input type='text' name=\"name\" formControlName=\"name\" /> <br />\r\n    <label>Institution</label>\r\n    <input type='text' name=\"institution\" formControlName=\"institution\" /> <br />\r\n    <label>Number</label>\r\n    <input type='text' name=\"number\" formControlName=\"number\" /> <br />\r\n    <label>Interest Rate</label>\r\n    <input type='number' name=\"interest\" formControlName=\"interest\" />% <br />\r\n    <label>Limit<span class=\"pull-right\">$</span></label>\r\n    <input type='number' name=\"limit\" formControlName=\"limit\" /> <br />\r\n    <input type='submit' value=\"Update\" />\r\n    <button routerLink=\"/accounts\">Cancel</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/accounts/components/account-edit/account-edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var AccountEditComponent = /** @class */ (function () {
    function AccountEditComponent(dataService, route, location) {
        this.dataService = dataService;
        this.route = route;
        this.location = location;
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
        this.displayAsPercent = function (value) { return value.toFixed(2) + "%"; };
    }
    AccountEditComponent.prototype.ngOnInit = function () {
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].setAttribute("disabled", "true");
        }
        ;
        document.getElementById("addlink").setAttribute("disabled", "true");
        var id = +this.route.snapshot.paramMap.get('id');
        this.createForm(id);
    };
    AccountEditComponent.prototype.ngOnDestroy = function () {
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].removeAttribute("disabled");
        }
        ;
        document.getElementById("addlink").removeAttribute("disabled");
    };
    AccountEditComponent.prototype.createForm = function (id) {
        var _this = this;
        this.dataService.getAccount(id).subscribe(function (account) {
            _this.editAccount = account;
            _this.defineForm();
        }, function (error) { return alert("there was an error getting account."); });
    };
    AccountEditComponent.prototype.defineForm = function () {
        this.form = new forms_1.FormGroup({
            acctType: new forms_1.FormControl(this.editAccount.acctType),
            institution: new forms_1.FormControl(this.editAccount.institution),
            interest: new forms_1.FormControl(this.editAccount.interest),
            limit: new forms_1.FormControl(this.editAccount.limit),
            name: new forms_1.FormControl(this.editAccount.name),
            number: new forms_1.FormControl(this.editAccount.number),
        });
    };
    AccountEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    AccountEditComponent.prototype.onSubmit = function () {
        this.editAccount.acctType = this.form.get('acctType').value;
        this.editAccount.institution = this.form.get('institution').value;
        this.editAccount.interest = this.form.get('interest').value;
        this.editAccount.limit = this.form.get('limit').value;
        this.editAccount.name = this.form.get('name').value;
        this.editAccount.number = this.form.get('number').value;
        this.dataService.updateAccount(this.editAccount);
        //reset
        this.goBack();
    };
    AccountEditComponent = __decorate([
        core_1.Component({
            selector: 'account-edit',
            template: __webpack_require__("../../../../../src/modules/accounts/components/account-edit/account-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/accounts/components/account-edit/account-edit.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            router_1.ActivatedRoute,
            common_1.Location])
    ], AccountEditComponent);
    return AccountEditComponent;
}()); //class
exports.AccountEditComponent = AccountEditComponent;


/***/ }),

/***/ "../../../../../src/modules/accounts/components/account-list/account-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n\r\n.red {\r\n    color: red;\r\n}\r\n\r\n.greyed{\r\n    color:lightgray;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/accounts/components/account-list/account-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"accounts\">\r\n  <p *ngIf=\"!accounts\"><em>Loading...</em></p>\r\n\r\n  <table>\r\n    <caption>Accounts</caption>\r\n    <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>Type</th>\r\n        <th>Name</th>\r\n        <th>Institution</th>\r\n        <th>Number</th>\r\n        <th>Interest</th>\r\n        <th>Limit</th>\r\n        <th>Balance</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let account of accounts\">\r\n        <td>{{account.id}}</td>\r\n        <td>{{account.acctType}}</td>\r\n        <td>{{account.name}}</td>\r\n        <td>{{account.institution}}</td>\r\n        <td>{{account.number}}</td>\r\n        <td class='right'>{{displayAsPercent(account.interest)}}</td>\r\n        <td class='right'>{{account.limit ? displayAsDollar(account.limit) : '--'}}</td>\r\n        <td class='right'>{{displayAsDollar(account.balance)}}</td>\r\n        <td><a class=\"btn btn-xs editlink\" routerLink=\"./account-edit/{{account.id}}\">Edit</a></td>\r\n        <td><a class=\"btn btn-xs deletelink\" (click)=\"onDelete(account.id);\">Delete</a></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <a class=\"btn\" id=\"addlink\" routerLink=\"./account-add\">Add New Account</a>\r\n  <br />\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/accounts/components/account-list/account-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var AccountListComponent = /** @class */ (function () {
    function AccountListComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
        this.displayAsPercent = function (value) { return value.toFixed(2) + "%"; };
        this.dataService.accountAdded.subscribe(function (data) {
            console.log("accountAdded received from data.service: " + JSON.stringify(data));
            if (data === null) {
                alert("There was a problem adding.");
            }
            else {
                _this.accounts.push(data);
            }
        }, function (error) { return alert("There was a problem adding."); });
        this.dataService.accountDeleted.subscribe(function (data) {
            console.log("accountDeleted received from data.service: " + JSON.stringify(data));
            if (data === null) {
                alert("There was a problem deleting.");
            }
            else {
                var indextToDelete = _this.accounts.findIndex(function (element) { return element.id === data.id; });
                _this.accounts.splice(indextToDelete, 1);
            }
        }, function (error) { return alert("There was a problem deleting."); });
        this.dataService.accountUpdated.subscribe(function (data) {
            console.log("accountUpdated received from data.service: " + JSON.stringify(data));
            if (data === null) {
                alert("There was a problem updating.");
            }
            else {
                var indexToUpdate = _this.accounts.findIndex(function (element) { return element.id == data.id; });
                _this.accounts[indexToUpdate] = data;
            }
        }, function (error) { return alert("There was a problem updating."); });
    } //ctor
    AccountListComponent.prototype.ngOnInit = function () {
        this.getAccounts();
    };
    AccountListComponent.prototype.getAccounts = function () {
        var _this = this;
        this.dataService.getAccounts().subscribe(function (accounts) { return _this.accounts = accounts; }, function (error) { return alert("there was an error getting accounts."); });
    };
    AccountListComponent.prototype.onDelete = function (id) {
        var result;
        var indextToDelete = this.accounts.findIndex(function (element) { return element.id === id; });
        var nameToDelete = this.accounts[indextToDelete].name;
        var confirmation = confirm('are you sure you want to delete ' + this.accounts[indextToDelete].name + '?');
        if (confirmation) {
            this.dataService.deleteAccount(id);
        }
        ;
    };
    AccountListComponent = __decorate([
        core_1.Component({
            selector: 'account-list',
            template: __webpack_require__("../../../../../src/modules/accounts/components/account-list/account-list.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/accounts/components/account-list/account-list.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], AccountListComponent);
    return AccountListComponent;
}()); //class
exports.AccountListComponent = AccountListComponent;


/***/ }),

/***/ "../../../../../src/modules/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var app_home_component_1 = __webpack_require__("../../../../../src/modules/app/components/app-home/app-home.component.ts");
var not_found_component_1 = __webpack_require__("../../../../../src/modules/app/components/not-found/not-found.component.ts");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: app_home_component_1.HomeComponent },
    { path: 'Home/Main', redirectTo: 'home', pathMatch: 'full' },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: not_found_component_1.PageNotFoundComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(appRoutes, { enableTracing: true } // for debugging
                )
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/modules/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var accounts_module_1 = __webpack_require__("../../../../../src/modules/accounts/accounts.module.ts");
var app_routing_module_1 = __webpack_require__("../../../../../src/modules/app/app-routing.module.ts");
var categories_module_1 = __webpack_require__("../../../../../src/modules/categories/categories.module.ts");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var reports_module_1 = __webpack_require__("../../../../../src/modules/reports/reports.module.ts");
var transactions_module_1 = __webpack_require__("../../../../../src/modules/transactions/transactions.module.ts");
var users_module_1 = __webpack_require__("../../../../../src/modules/users/users.module.ts");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var app_root_component_1 = __webpack_require__("../../../../../src/modules/app/components/app-root/app-root.component.ts");
var app_home_component_1 = __webpack_require__("../../../../../src/modules/app/components/app-home/app-home.component.ts");
var nav_menu_component_1 = __webpack_require__("../../../../../src/modules/app/components/nav-menu/nav-menu.component.ts");
var not_found_component_1 = __webpack_require__("../../../../../src/modules/app/components/not-found/not-found.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                common_1.CommonModule,
                http_1.HttpClientModule,
                forms_1.ReactiveFormsModule,
                accounts_module_1.AccountsModule,
                categories_module_1.CategoriesModule,
                reports_module_1.ReportsModule,
                transactions_module_1.TransactionsModule,
                users_module_1.UsersModule,
                app_routing_module_1.AppRoutingModule,
            ],
            declarations: [
                app_root_component_1.AppComponent,
                app_home_component_1.HomeComponent,
                nav_menu_component_1.NavMenuComponent,
                not_found_component_1.PageNotFoundComponent
            ],
            providers: [
                { provide: 'BASE_URL', useFactory: getBaseUrl },
                data_service_1.DataService
            ],
            bootstrap: [app_root_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
exports.getBaseUrl = getBaseUrl;


/***/ }),

/***/ "../../../../../src/modules/app/components/app-home/app-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/app/components/app-home/app-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mainTitle\">\r\n    <p class=\"mainTitle-sub\">Chris Carter's</p>\r\n    <p class=\"mainTitle-main\">PersonalLedger</p>\r\n</div>\r\n<div class=\"center lime\">\r\n    <p>A home bookkeeping application, using traditional debit-credit methodology, built as a hybrid MVC/SPA using:</p>\r\n    <ul class=\"unstyledList left indented35\">\r\n        <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\r\n        <li><a>IdentityCore</a> for authentication and security</li>\r\n        <li><a>EntityFrameworkCore</a> for relational object mapping</li>\r\n        <li><a>XUnit</a>, <a>Karma</a> and <a>Protractor</a> for testing</li>\r\n        <li><a href='https://angular.io/'>Angular 5</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\r\n        <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\r\n    </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/app/components/app-home/app-home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.title = 'PLA5 Home';
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/modules/app/components/app-home/app-home.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/app/components/app-home/app-home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "../../../../../src/modules/app/components/app-root/app-root.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body-content {\r\n    margin-top: 50px;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n    .body-content {\r\n        padding-top: 50px;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/app/components/app-root/app-root.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\r\n    <div class='row'>\r\n        <div class='col-sm-2 nav-menu'>\r\n            <nav-menu></nav-menu>\r\n        </div>\r\n        <div class='col-sm-10 body-content'>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/app/components/app-root/app-root.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Personal Ledger';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/modules/app/components/app-root/app-root.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/app/components/app-root/app-root.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/modules/app/components/nav-menu/nav-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li .glyphicon {\r\n    margin-right: 10px;\r\n}\r\n\r\n/* Highlighting rules for nav menu items */\r\n\r\nli.link-active a,\r\nli.link-active a:hover,\r\nli.link-active a:focus {\r\n    background-color: #4189C7;\r\n    color: white;\r\n}\r\n\r\n/* Keep the nav menu independent of scrolling and on top of other items */\r\n\r\n.main-nav {\r\n    position: fixed;\r\n    top: 50px;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    /* On small screens, convert the nav menu to a vertical sidebar */\r\n    .main-nav {\r\n        height: 100%;\r\n        width: calc(16% - 20px);\r\n    }\r\n    .navbar {\r\n        border-radius: 0px;\r\n        border-width: 0px;\r\n        height: 100%;\r\n    }\r\n    .navbar-header {\r\n        float: none;\r\n    }\r\n    .navbar-collapse {\r\n        border-top: 1px solid #444;\r\n        padding: 0px;\r\n    }\r\n    .navbar ul {\r\n        float: none;\r\n    }\r\n    .navbar li {\r\n        float: none;\r\n        font-size: 15px;\r\n        margin: 6px;\r\n    }\r\n    .navbar li a {\r\n        padding: 10px 16px;\r\n        border-radius: 4px;\r\n    }\r\n    .navbar a {\r\n        /* If a menu item's text is too long, truncate it */\r\n        width: 100%;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/app/components/nav-menu/nav-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class='main-nav'>\r\n    <div class='navbar navbar-inverse'>\r\n        <div class='navbar-header'>\r\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n                <span class='sr-only'>Toggle navigation</span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n            </button>\r\n        </div>\r\n        <div class='clearfix'></div>\r\n        <div class='navbar-collapse collapse'>\r\n            <ul class='nav navbar-nav'>\r\n                <li routerLinkActive=\"link-active\">\r\n                    <a routerLink=\"/home\">\r\n                        <span class='glyphicon glyphicon-home'></span> Home\r\n                    </a>\r\n                </li>\r\n                <li routerLinkActive=\"link-active\">\r\n                    <a routerLink=\"/accounts\">\r\n                        <span class='glyphicon glyphicon-credit-card'></span> Accounts\r\n                    </a>\r\n                </li>\r\n                <li routerLinkActive=\"link-active\">\r\n                    <a routerLink=\"/categories\">\r\n                        <span class='glyphicon glyphicon-list-alt'></span> Categories\r\n                    </a>\r\n                </li>\r\n                <li routerLinkActive=\"link-active\">\r\n                    <a routerLink=\"/transactions\">\r\n                        <span class='glyphicon glyphicon-transfer'></span> Transactions\r\n                    </a>\r\n                </li>\r\n                <li routerLinkActive=\"link-active\">\r\n                    <a routerLink=\"/reports\">\r\n                        <span class='glyphicon glyphicon-stats'></span> Reports\r\n                    </a>\r\n                </li>\r\n                <li routerLinkActive=\"link-active\">\r\n                    <a routerLink=\"/users\">\r\n                        <span class='glyphicon glyphicon-user'></span> Users\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/modules/app/components/nav-menu/nav-menu.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent() {
    }
    NavMenuComponent = __decorate([
        core_1.Component({
            selector: 'nav-menu',
            template: __webpack_require__("../../../../../src/modules/app/components/nav-menu/nav-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/app/components/nav-menu/nav-menu.component.css")]
        })
    ], NavMenuComponent);
    return NavMenuComponent;
}());
exports.NavMenuComponent = NavMenuComponent;


/***/ }),

/***/ "../../../../../src/modules/app/components/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/app/components/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <meta charset=\"utf-8\" />\r\n    <title></title>\r\n</head>\r\n<body>\r\n  <h1>Error 404 - Page Not Found</h1>\r\n  <h3>Sorry, the page you requested was not found.</h3>\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "../../../../../src/modules/app/components/not-found/not-found.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        core_1.Component({
            selector: 'not-found',
            template: __webpack_require__("../../../../../src/modules/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/app/components/not-found/not-found.component.css")]
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
exports.PageNotFoundComponent = PageNotFoundComponent;


/***/ }),

/***/ "../../../../../src/modules/categories/categories.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var category_list_component_1 = __webpack_require__("../../../../../src/modules/categories/components/category-list/category-list.component.ts");
var category_add_component_1 = __webpack_require__("../../../../../src/modules/categories/components/category-add/category-add.component.ts");
var category_edit_component_1 = __webpack_require__("../../../../../src/modules/categories/components/category-edit/category-edit.component.ts");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var categories_routing_module_1 = __webpack_require__("../../../../../src/modules/categories/categories.routing.module.ts");
var CategoriesModule = /** @class */ (function () {
    function CategoriesModule() {
    }
    CategoriesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                categories_routing_module_1.CategoryRoutingModule
            ],
            declarations: [
                category_add_component_1.CategoryAddComponent,
                category_edit_component_1.CategoryEditComponent,
                category_list_component_1.CategoryListComponent
            ],
            providers: [data_service_1.DataService]
        })
    ], CategoriesModule);
    return CategoriesModule;
}());
exports.CategoriesModule = CategoriesModule;


/***/ }),

/***/ "../../../../../src/modules/categories/categories.routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var category_list_component_1 = __webpack_require__("../../../../../src/modules/categories/components/category-list/category-list.component.ts");
var category_add_component_1 = __webpack_require__("../../../../../src/modules/categories/components/category-add/category-add.component.ts");
var category_edit_component_1 = __webpack_require__("../../../../../src/modules/categories/components/category-edit/category-edit.component.ts");
var categoriesRoutes = [
    {
        path: 'categories',
        component: category_list_component_1.CategoryListComponent,
        children: [
            { path: 'category-add', component: category_add_component_1.CategoryAddComponent },
            { path: 'category-edit/:id', component: category_edit_component_1.CategoryEditComponent }
        ]
    }
];
var CategoryRoutingModule = /** @class */ (function () {
    function CategoryRoutingModule() {
    }
    CategoryRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(categoriesRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], CategoryRoutingModule);
    return CategoryRoutingModule;
}());
exports.CategoryRoutingModule = CategoryRoutingModule;


/***/ }),

/***/ "../../../../../src/modules/categories/components/category-add/category-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n\r\nlabel {\r\n  width: 100px;\r\n}\r\n\r\nselect {\r\n  width: 160px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/categories/components/category-add/category-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"categoryAdd\">\r\n  <h4>Add</h4>\r\n\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\r\n    <label>Name</label>\r\n    <input type='text' name=\"name\" formControlName=\"name\" /> <br />\r\n    <label>Type</label>\r\n    <select name=\"type\" formControlName=\"type\">\r\n      <option value=\"Expense\">Expense</option>\r\n      <option value=\"Income\">Income</option>\r\n      <option value=\"Other\">Other</option>\r\n    </select> <br />\r\n    <!--<input type='text' name=\"type\" formControlName=\"type\" /> <br />-->\r\n    <label>Tax</label>\r\n    <input type='checkbox' name=\"tax\" value=\"true\" formControlName=\"tax\" /> <br />\r\n    <input type='submit' value=\"Add\" />\r\n    <button routerLink=\"/categories\">Cancel</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/categories/components/category-add/category-add.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var CategoryAddComponent = /** @class */ (function () {
    function CategoryAddComponent(route, dataService, location) {
        this.route = route;
        this.dataService = dataService;
        this.location = location;
    }
    CategoryAddComponent.prototype.ngOnInit = function () {
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].setAttribute("disabled", "true");
        }
        ;
        document.getElementById("addlink").setAttribute("disabled", "true");
        this.newCategory = this.freshNewCategory();
        this.form = new forms_1.FormGroup({
            name: new forms_1.FormControl(this.newCategory.name),
            tax: new forms_1.FormControl(this.newCategory.tax),
            type: new forms_1.FormControl(this.newCategory.type),
        });
    };
    CategoryAddComponent.prototype.ngOnDestroy = function () {
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].removeAttribute("disabled");
        }
        ;
        document.getElementById("addlink").removeAttribute("disabled");
    };
    CategoryAddComponent.prototype.freshNewCategory = function () {
        return { id: null, name: 'New Category', tax: false, type: 'Expense' };
    };
    CategoryAddComponent.prototype.goBack = function () {
        this.location.back();
    };
    CategoryAddComponent.prototype.onSubmit = function () {
        this.newCategory.name = this.form.get('name').value;
        this.newCategory.tax = this.form.get('tax').value;
        this.newCategory.type = this.form.get('type').value;
        this.dataService.addCategory(this.newCategory);
        //reset
        this.ngOnInit();
        this.goBack();
    };
    CategoryAddComponent = __decorate([
        core_1.Component({
            selector: 'category-add',
            template: __webpack_require__("../../../../../src/modules/categories/components/category-add/category-add.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/categories/components/category-add/category-add.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            data_service_1.DataService,
            common_1.Location])
    ], CategoryAddComponent);
    return CategoryAddComponent;
}());
exports.CategoryAddComponent = CategoryAddComponent;


/***/ }),

/***/ "../../../../../src/modules/categories/components/category-edit/category-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n\r\nlabel {\r\n  width: 100px;\r\n}\r\n\r\nselect {\r\n  width: 160px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/categories/components/category-edit/category-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"categoryEdit\">\r\n  <h4>Edit</h4>\r\n\r\n  <form *ngIf=\"form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\r\n    <label>Name</label>\r\n    <input type='text' name=\"name\" formControlName=\"name\" /> <br />\r\n    <label>Type</label>\r\n    <select name=\"type\" formControlName=\"type\">\r\n      <option value=\"Expense\">Expense</option>\r\n      <option value=\"Income\">Income</option>\r\n      <option value=\"Other\">Other</option>\r\n    </select> <br />\r\n    <!--<input type='text' name=\"type\" formControlName=\"type\" /> <br />-->\r\n    <label>Tax</label>\r\n    <input type='checkbox' name=\"tax\" value=\"true\" formControlName=\"tax\" /> <br />\r\n    <input type='submit' value=\"Update\" />\r\n    <button routerLink=\"/categories\">Cancel</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/categories/components/category-edit/category-edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var CategoryEditComponent = /** @class */ (function () {
    function CategoryEditComponent(dataService, route, location) {
        this.dataService = dataService;
        this.route = route;
        this.location = location;
    }
    CategoryEditComponent.prototype.ngOnInit = function () {
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].setAttribute("disabled", "true");
        }
        ;
        document.getElementById("addlink").setAttribute("disabled", "true");
        var id = +this.route.snapshot.paramMap.get('id');
        this.createForm(id);
    };
    CategoryEditComponent.prototype.ngOnDestroy = function () {
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].removeAttribute("disabled");
        }
        ;
        document.getElementById("addlink").removeAttribute("disabled");
    };
    CategoryEditComponent.prototype.createForm = function (id) {
        var _this = this;
        this.dataService.getCategory(id).subscribe(function (category) {
            _this.editCategory = category;
            _this.defineForm();
        }, function (error) { return alert("there was an error getting category."); });
    };
    CategoryEditComponent.prototype.defineForm = function () {
        this.form = new forms_1.FormGroup({
            name: new forms_1.FormControl(this.editCategory.name),
            tax: new forms_1.FormControl(this.editCategory.tax),
            type: new forms_1.FormControl(this.editCategory.type),
        });
    };
    CategoryEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    CategoryEditComponent.prototype.onSubmit = function () {
        this.editCategory.name = this.form.get('name').value;
        this.editCategory.tax = this.form.get('tax').value;
        this.editCategory.type = this.form.get('type').value;
        this.dataService.updateCategory(this.editCategory);
        //reset
        this.goBack();
    };
    CategoryEditComponent = __decorate([
        core_1.Component({
            selector: 'category-edit',
            template: __webpack_require__("../../../../../src/modules/categories/components/category-edit/category-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/categories/components/category-edit/category-edit.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            router_1.ActivatedRoute,
            common_1.Location])
    ], CategoryEditComponent);
    return CategoryEditComponent;
}());
exports.CategoryEditComponent = CategoryEditComponent;


/***/ }),

/***/ "../../../../../src/modules/categories/components/category-list/category-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n\r\ntable{\r\n  display:block;\r\n  max-height:60vh;\r\n  overflow-y:auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/categories/components/category-list/category-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"categories\">\r\n  <p *ngIf=\"!categories\"><em>Loading...</em></p>\r\n\r\n  <table>\r\n    <caption>Categories</caption>\r\n    <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>Name</th>\r\n        <th>Tax?</th>\r\n        <th>Type</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let category of categories\">\r\n        <td>{{category.id}}</td>\r\n        <td>{{category.name}}</td>\r\n        <td>&nbsp;<span *ngIf=\"category.tax\" class='glyphicon glyphicon-record' style='color:green;'></span></td>\r\n        <td>{{category.type}}</td>\r\n        <td><a class=\"btn btn-xs editlink\" routerLink=\"./category-edit/{{category.id}}\">Edit</a></td>\r\n        <td><a class=\"btn btn-xs deletelink\" (click)=\"onDelete(category.id);\">Delete</a></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <a class=\"btn\" id=\"addlink\" routerLink=\"./category-add\">Add New Category</a>\r\n  <br />\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/categories/components/category-list/category-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var CategoryListComponent = /** @class */ (function () {
    function CategoryListComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.dataService.categoryAdded.subscribe(function (data) {
            console.log("categoryAdded received from data.service: " + JSON.stringify(data));
            if (data === null) {
                alert("There was a problem adding.");
            }
            else {
                _this.categories.push(data);
            }
        }, function (error) { return alert("There was a problem adding."); });
        this.dataService.categoryDeleted.subscribe(function (data) {
            console.log("categoryDeleted received from data.service: " + JSON.stringify(data));
            if (data === null) {
                alert("There was a problem deleting.");
            }
            else {
                var indextToDelete = _this.categories.findIndex(function (element) { return element.id === data.id; });
                _this.categories.splice(indextToDelete, 1);
            }
        }, function (error) { return alert("There was a problem deleting."); });
        this.dataService.categoryUpdated.subscribe(function (data) {
            console.log("categoryUpdated received from data.service: " + JSON.stringify(data));
            if (data === null) {
                alert("There was a problem updating.");
            }
            else {
                var indexToUpdate = _this.categories.findIndex(function (element) { return element.id == data.id; });
                _this.categories[indexToUpdate] = data;
            }
        }, function (error) { return alert("There was a problem updating."); });
    } //ctor
    CategoryListComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    CategoryListComponent.prototype.getCategories = function () {
        var _this = this;
        this.dataService.getCategories().subscribe(function (categories) { return _this.categories = categories; }, function (error) { return alert("there was an error getting categories."); });
    };
    CategoryListComponent.prototype.onDelete = function (id) {
        var result;
        var indextToDelete = this.categories.findIndex(function (element) { return element.id === id; });
        var nameToDelete = this.categories[indextToDelete].name;
        var confirmation = confirm('are you sure you want to delete ' + this.categories[indextToDelete].name + '?');
        if (confirmation) {
            this.dataService.deleteCategory(id);
        }
        ;
    };
    CategoryListComponent = __decorate([
        core_1.Component({
            selector: 'category-list',
            template: __webpack_require__("../../../../../src/modules/categories/components/category-list/category-list.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/categories/components/category-list/category-list.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], CategoryListComponent);
    return CategoryListComponent;
}());
exports.CategoryListComponent = CategoryListComponent;


/***/ }),

/***/ "../../../../../src/modules/reports/components/report-list/report-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/reports/components/report-list/report-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"reports\">\r\n    <h1>This feature not yet supported.</h1>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/reports/components/report-list/report-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var ReportListComponent = /** @class */ (function () {
    function ReportListComponent(dataService) {
        this.dataService = dataService;
    } //ctor
    ReportListComponent.prototype.ngOnInit = function () {
    };
    ReportListComponent = __decorate([
        core_1.Component({
            selector: 'report-list',
            template: __webpack_require__("../../../../../src/modules/reports/components/report-list/report-list.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/reports/components/report-list/report-list.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], ReportListComponent);
    return ReportListComponent;
}());
exports.ReportListComponent = ReportListComponent;


/***/ }),

/***/ "../../../../../src/modules/reports/reports.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var report_list_component_1 = __webpack_require__("../../../../../src/modules/reports/components/report-list/report-list.component.ts");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var reports_routing_module_1 = __webpack_require__("../../../../../src/modules/reports/reports.routing.module.ts");
var ReportsModule = /** @class */ (function () {
    function ReportsModule() {
    }
    ReportsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                reports_routing_module_1.ReportRoutingModule
            ],
            declarations: [
                report_list_component_1.ReportListComponent
            ],
            providers: [data_service_1.DataService]
        })
    ], ReportsModule);
    return ReportsModule;
}());
exports.ReportsModule = ReportsModule;


/***/ }),

/***/ "../../../../../src/modules/reports/reports.routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var report_list_component_1 = __webpack_require__("../../../../../src/modules/reports/components/report-list/report-list.component.ts");
var reportsRoutes = [
    {
        path: 'reports',
        component: report_list_component_1.ReportListComponent
    }
];
var ReportRoutingModule = /** @class */ (function () {
    function ReportRoutingModule() {
    }
    ReportRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(reportsRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], ReportRoutingModule);
    return ReportRoutingModule;
}());
exports.ReportRoutingModule = ReportRoutingModule;


/***/ }),

/***/ "../../../../../src/modules/shared/data.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//This class is responsible for all interation with the data API (a .NET Core WebAPI, which in turn interacts with a repository), and emitting notifications when data changes 
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        // --Events--
        this.accountAdded = new core_1.EventEmitter();
        this.accountDeleted = new core_1.EventEmitter();
        this.accountUpdated = new core_1.EventEmitter();
        this.categoryAdded = new core_1.EventEmitter();
        this.categoryDeleted = new core_1.EventEmitter();
        this.categoryUpdated = new core_1.EventEmitter();
        this.transactionAdded = new core_1.EventEmitter();
        this.transactionDeleted = new core_1.EventEmitter();
        this.transactionUpdated = new core_1.EventEmitter();
        this.userDeleted = new core_1.EventEmitter();
        this.userDemoted = new core_1.EventEmitter();
        this.userPromoted = new core_1.EventEmitter();
        this.userReset = new core_1.EventEmitter();
    }
    // --Accounts--
    DataService.prototype.getAccounts = function () {
        console.log("data.service.getAccounts...");
        return this.http.get('/api/Accounts');
    };
    DataService.prototype.getAccount = function (id) {
        console.log("data.service.getAccount...");
        return this.http.get('/api/Accounts/' + id);
    };
    DataService.prototype.addAccount = function (accountToAdd) {
        var _this = this;
        console.log("data.service.addAccount received: " + JSON.stringify(accountToAdd));
        var response = this.http.post('/api/Accounts', accountToAdd)
            .toPromise()
            .then(function (result) {
            _this.accountAdded.emit(result);
        });
    };
    DataService.prototype.deleteAccount = function (id) {
        var _this = this;
        console.log("data.service.deleteAccount received: " + id);
        var response = this.http.delete('/api/Accounts/' + id)
            .toPromise()
            .then(function (result) {
            _this.accountDeleted.emit(result);
        });
    };
    DataService.prototype.updateAccount = function (accountToUpdate) {
        var _this = this;
        console.log("data.service.updateAccount received: " + JSON.stringify(accountToUpdate));
        var response = this.http.put('/api/Accounts', accountToUpdate)
            .toPromise()
            .then(function (result) {
            _this.accountUpdated.emit(result);
        });
    };
    // --Categories--
    DataService.prototype.getCategories = function () {
        console.log("data.service.getCategories...");
        return this.http.get('/api/Categories');
    };
    DataService.prototype.getCategory = function (id) {
        console.log("data.service.getCategory...");
        return this.http.get('/api/Categories/' + id);
    };
    DataService.prototype.addCategory = function (categoryToAdd) {
        var _this = this;
        var response = this.http.post('/api/Categories', categoryToAdd)
            .toPromise()
            .then(function (result) {
            _this.categoryAdded.emit(result);
        });
    };
    DataService.prototype.deleteCategory = function (id) {
        var _this = this;
        var response = this.http.delete('/api/Categories/' + id)
            .toPromise()
            .then(function (result) {
            _this.categoryDeleted.emit(result);
        });
    };
    DataService.prototype.updateCategory = function (categoryToUpdate) {
        var _this = this;
        var response = this.http.put('/api/Categories', categoryToUpdate)
            .toPromise()
            .then(function (result) {
            _this.categoryUpdated.emit(result);
        });
    };
    // --Transactions--
    DataService.prototype.getTransactions = function () {
        console.log("data.service.getTransactions...");
        return this.http.get('/api/Transactions');
    };
    DataService.prototype.getTransaction = function (id) {
        console.log("data.service.getTransaction...");
        return this.http.get('/api/Transactions/' + id);
    };
    DataService.prototype.addTransaction = function (transactionToAdd) {
        var _this = this;
        var response = this.http.post('/api/Transactions', transactionToAdd)
            .toPromise()
            .then(function (result) {
            _this.transactionAdded.emit(result);
        });
    };
    DataService.prototype.deleteTransaction = function (id) {
        var _this = this;
        var response = this.http.delete('/api/Transactions/' + id)
            .toPromise()
            .then(function (result) {
            _this.transactionDeleted.emit(result);
        });
    };
    DataService.prototype.updateTransaction = function (transactionToUpdate) {
        var _this = this;
        var response = this.http.put('/api/Transactions', transactionToUpdate)
            .toPromise()
            .then(function (result) {
            _this.transactionUpdated.emit(result);
        });
    };
    // --Users--
    DataService.prototype.getUsers = function () {
        return this.http.get('/api/Users');
    };
    DataService.prototype.getUser = function (id) {
        console.log("data.service.getUser...");
        return this.http.get('/api/User/' + id);
    };
    DataService.prototype.makeAdmin = function (id) {
        var _this = this;
        var response = this.http.put('/api/Users/Admin/' + id, id)
            .toPromise()
            .then(function (result) {
            _this.userPromoted.emit(result);
        });
    };
    DataService.prototype.unmakeAdmin = function (id) {
        var _this = this;
        var response = this.http.put('/api/Users/NoAdmin/' + id, id)
            .toPromise()
            .then(function (result) {
            _this.userDemoted.emit(result);
        });
    };
    DataService.prototype.resetPassword = function (id, newPassword) {
        var _this = this;
        var response = this.http.put('/api/Users/Reset' + id, newPassword)
            .toPromise()
            .then(function (result) {
            _this.userReset.emit(result);
        });
    };
    DataService.prototype.deleteUser = function (id) {
        var _this = this;
        var response = this.http.delete('/api/Users' + id)
            .toPromise()
            .then(function (result) {
            _this.userDeleted.emit(result);
        });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "accountAdded", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "accountDeleted", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "accountUpdated", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "categoryAdded", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "categoryDeleted", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "categoryUpdated", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "transactionAdded", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "transactionDeleted", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "transactionUpdated", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "userDeleted", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "userDemoted", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "userPromoted", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "userReset", void 0);
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;


/***/ }),

/***/ "../../../../../src/modules/transactions/components/transaction-add/transaction-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n\r\nlabel {\r\n  width: 120px;\r\n}\r\n\r\nselect {\r\n    width: 160px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/transactions/components/transaction-add/transaction-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"transactionAdd\">\r\n  <h4>Add</h4>\r\n    <p *ngIf=\"!form\">Loading...</p>\r\n\r\n  <form *ngIf=\"form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\r\n      <label>Date</label>\r\n      <input type='date' name=\"date\" formControlName=\"date\" /> <br />\r\n      <label>Category</label>\r\n      <select name=\"category\" formControlName=\"category\">\r\n          <option *ngFor=\"let category of categories\" value=\"{{category.id}}\">{{category.name}}</option>\r\n      </select> <br />\r\n      <label>Amount<span class=\"pull-right\">$</span></label>\r\n      <input type='number' name=\"amount\" formControlName=\"amount\" /> <br />\r\n      <label>Debit Account</label>\r\n      <select name=\"drAcct\" formControlName=\"drAcct\">\r\n          <option *ngFor=\"let account of accounts\" value=\"{{account.id}}\">{{account.name}}</option>\r\n      </select> <br />\r\n      <label>Credit Account</label>\r\n      <select name=\"crAcct\" formControlName=\"crAcct\">\r\n          <option *ngFor=\"let account of accounts\" value=\"{{account.id}}\">{{account.name}}</option>\r\n      </select> <br />\r\n      <label>Tax</label>\r\n      <input type='checkbox' name=\"tax\" value=\"true\" formControlName=\"tax\" />\r\n      <input type='submit' value=\"Add\" />\r\n      <button routerLink=\"/transactions\">Cancel</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/transactions/components/transaction-add/transaction-add.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var TransactionAddComponent = /** @class */ (function () {
    function TransactionAddComponent(route, dataService, location) {
        this.route = route;
        this.dataService = dataService;
        this.location = location;
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
    }
    TransactionAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].setAttribute("disabled", "true");
        }
        ;
        document.getElementById("addlink").setAttribute("disabled", "true");
        this.newTransaction = this.freshNewTransaction();
        Promise.all([this.getAccounts(), this.getCategories()])
            .then(function () { return _this.defineForm(); });
    };
    ;
    TransactionAddComponent.prototype.ngOnDestroy = function () {
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].removeAttribute("disabled");
        }
        ;
        document.getElementById("addlink").removeAttribute("disabled");
    };
    TransactionAddComponent.prototype.accountName = function (accountId) {
        return this.accounts.find(function (element) { return element.id === accountId; }).name;
    };
    TransactionAddComponent.prototype.categoryName = function (categoryId) {
        return this.categories.find(function (element) { return element.id === categoryId; }).name;
    };
    TransactionAddComponent.prototype.defineForm = function () {
        this.form = new forms_1.FormGroup({
            amount: new forms_1.FormControl(this.newTransaction.amount),
            category: new forms_1.FormControl(this.newTransaction.category),
            crAcct: new forms_1.FormControl(this.newTransaction.crAcct),
            date: new forms_1.FormControl(this.newTransaction.date),
            drAcct: new forms_1.FormControl(this.newTransaction.drAcct),
            tax: new forms_1.FormControl(this.newTransaction.tax),
        });
    };
    TransactionAddComponent.prototype.freshNewTransaction = function () {
        return { id: null, amount: 0, category: 0, crAcct: 0, date: new Date().toLocaleDateString(), drAcct: 0, tax: false };
    };
    TransactionAddComponent.prototype.getAccounts = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.dataService.getAccounts().subscribe(function (accounts) {
                _this.accounts = accounts;
                resolve(accounts);
            }, function (error) {
                alert("there was an error getting accounts.");
            });
        });
    };
    TransactionAddComponent.prototype.getCategories = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.dataService.getCategories().subscribe(function (categories) {
                _this.categories = categories;
                resolve(categories);
            }, function (error) {
                alert("there was an error getting categories.");
            });
        });
    };
    TransactionAddComponent.prototype.goBack = function () {
        this.location.back();
    };
    TransactionAddComponent.prototype.onSubmit = function () {
        this.newTransaction.amount = this.form.get('amount').value;
        this.newTransaction.category = this.form.get('category').value;
        this.newTransaction.crAcct = this.form.get('crAcct').value;
        this.newTransaction.date = this.form.get('date').value;
        this.newTransaction.drAcct = this.form.get('drAcct').value;
        this.newTransaction.tax = this.form.get('tax').value;
        this.dataService.addTransaction(this.newTransaction);
        //reset
        this.ngOnInit();
        this.goBack();
    };
    TransactionAddComponent = __decorate([
        core_1.Component({
            selector: 'transaction-add',
            template: __webpack_require__("../../../../../src/modules/transactions/components/transaction-add/transaction-add.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/transactions/components/transaction-add/transaction-add.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            data_service_1.DataService,
            common_1.Location])
    ], TransactionAddComponent);
    return TransactionAddComponent;
}());
exports.TransactionAddComponent = TransactionAddComponent;


/***/ }),

/***/ "../../../../../src/modules/transactions/components/transaction-edit/transaction-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n\r\nlabel {\r\n  width: 120px;\r\n}\r\n\r\nselect {\r\n    width: 160px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/transactions/components/transaction-edit/transaction-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"transactionEdit\">\r\n  <h4>Edit</h4>\r\n\r\n  <form *ngIf=\"form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\r\n      <label>Date</label>\r\n      <input type='date' name=\"date\" formControlName=\"date\" /> <br />\r\n      <label>Category</label>\r\n      <select name=\"category\" formControlName=\"category\">\r\n          <option *ngFor=\"let category of categories\" value=\"{{category.id}}\">{{category.name}}</option>\r\n      </select> <br />\r\n      <label>Amount<span class=\"pull-right\">$</span></label>\r\n      <input type='number' name=\"amount\" formControlName=\"amount\" /> <br />\r\n      <label>Debit Account</label>\r\n      <select name=\"drAcct\" formControlName=\"drAcct\">\r\n          <option *ngFor=\"let account of accounts\" value=\"{{account.id}}\">{{account.name}}</option>\r\n      </select> <br />\r\n      <label>Credit Account</label>\r\n      <select name=\"crAcct\" formControlName=\"crAcct\">\r\n          <option *ngFor=\"let account of accounts\" value=\"{{account.id}}\">{{account.name}}</option>\r\n      </select> <br />\r\n      <label>Tax</label>\r\n      <input type='checkbox' name=\"tax\" value=\"true\" formControlName=\"tax\" />\r\n      <input type='submit' value=\"Update\" />\r\n      <button routerLink=\"/transactions\">Cancel</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/transactions/components/transaction-edit/transaction-edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var TransactionEditComponent = /** @class */ (function () {
    function TransactionEditComponent(dataService, route, location) {
        this.dataService = dataService;
        this.route = route;
        this.location = location;
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
    }
    TransactionEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].setAttribute("disabled", "true");
        }
        ;
        document.getElementById("addlink").setAttribute("disabled", "true");
        this.getAccounts();
        this.getCategories();
        var id = +this.route.snapshot.paramMap.get('id');
        Promise.all([this.getAccounts(), this.getCategories(), this.getTransaction(id)])
            .then(function () { return _this.defineForm(); });
    };
    TransactionEditComponent.prototype.ngOnDestroy = function () {
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].removeAttribute("disabled");
        }
        ;
        document.getElementById("addlink").removeAttribute("disabled");
    };
    TransactionEditComponent.prototype.accountName = function (accountId) {
        return this.accounts.find(function (element) { return element.id === accountId; }).name;
    };
    TransactionEditComponent.prototype.categoryName = function (categoryId) {
        return this.categories.find(function (element) { return element.id === categoryId; }).name;
    };
    TransactionEditComponent.prototype.defineForm = function () {
        this.form = new forms_1.FormGroup({
            amount: new forms_1.FormControl(this.editTransaction.amount),
            category: new forms_1.FormControl(this.editTransaction.category),
            crAcct: new forms_1.FormControl(this.editTransaction.crAcct),
            date: new forms_1.FormControl(this.editTransaction.date),
            drAcct: new forms_1.FormControl(this.editTransaction.drAcct),
            tax: new forms_1.FormControl(this.editTransaction.tax),
        });
    };
    TransactionEditComponent.prototype.getAccounts = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.dataService.getAccounts().subscribe(function (accounts) {
                _this.accounts = accounts;
                resolve(accounts);
            }, function (error) {
                alert("there was an error getting accounts.");
            });
        });
    };
    TransactionEditComponent.prototype.getCategories = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.dataService.getCategories().subscribe(function (categories) {
                _this.categories = categories;
                resolve(categories);
            }, function (error) {
                alert("there was an error getting categories.");
            });
        });
    };
    TransactionEditComponent.prototype.getTransaction = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.dataService.getTransaction(id).subscribe(function (transaction) {
                _this.editTransaction = transaction;
                resolve(transaction);
            }, function (error) {
                alert("there was an error getting transaction.");
            });
        });
    };
    TransactionEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    TransactionEditComponent.prototype.onSubmit = function () {
        this.editTransaction.amount = this.form.get('amount').value;
        this.editTransaction.category = this.form.get('category').value;
        this.editTransaction.crAcct = this.form.get('crAcct').value;
        this.editTransaction.date = this.form.get('date').value;
        this.editTransaction.drAcct = this.form.get('drAcct').value;
        this.editTransaction.tax = this.form.get('tax').value;
        this.dataService.updateTransaction(this.editTransaction);
        //reset
        this.goBack();
    };
    TransactionEditComponent = __decorate([
        core_1.Component({
            selector: 'transaction-edit',
            template: __webpack_require__("../../../../../src/modules/transactions/components/transaction-edit/transaction-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/transactions/components/transaction-edit/transaction-edit.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            router_1.ActivatedRoute,
            common_1.Location])
    ], TransactionEditComponent);
    return TransactionEditComponent;
}());
exports.TransactionEditComponent = TransactionEditComponent;


/***/ }),

/***/ "../../../../../src/modules/transactions/components/transaction-list/transaction-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/transactions/components/transaction-list/transaction-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"transactions\">\r\n  <p *ngIf=\"!transactions\"><em>Loading...</em></p>\r\n\r\n  <table>\r\n    <caption>Transactions</caption>\r\n    <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>Date</th>\r\n        <th>Amount</th>\r\n        <th>Category</th>\r\n        <th>Debit Account</th>\r\n        <th>Credit Account</th>\r\n        <th>Tax?</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let transaction of transactions\">\r\n        <td>{{transaction.id}}</td>\r\n        <td>{{transaction.date | date}}</td>\r\n        <td className='right'>{{displayAsDollar(transaction.amount)}}</td>\r\n        <td>{{categoryName(transaction.category)}}</td>\r\n        <td>{{accountName(transaction.drAcct)}}</td>\r\n        <td>{{accountName(transaction.crAcct)}}</td>\r\n        <td>&nbsp;<span *ngIf=\"transaction.tax\" class='glyphicon glyphicon-copy' style='color:green;'></span></td>\r\n        <td><a class=\"btn btn-xs editlink\" routerLink=\"./transaction-edit/{{transaction.id}}\">Edit</a></td>\r\n        <td><a class=\"btn btn-xs deletelink\" (click)=\"onDelete(transaction.id);\">Delete</a></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <a class=\"btn\" id=\"addlink\" routerLink=\"./transaction-add\">Add New Transaction</a>\r\n  <br />\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/transactions/components/transaction-list/transaction-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var TransactionListComponent = /** @class */ (function () {
    function TransactionListComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
        this.dataService.transactionAdded.subscribe(function (data) {
            console.log("transactionAdded received from data.service: " + JSON.stringify(data));
            if (data === null) {
                alert("There was a problem adding.");
            }
            else {
                _this.transactions.push(data);
            }
        }, function (error) { return alert("There was a problem adding."); });
        this.dataService.transactionDeleted.subscribe(function (data) {
            console.log("transactionDeleted received from data.service: " + JSON.stringify(data));
            if (data === null) {
                alert("There was a problem deleting.");
            }
            else {
                var indextToDelete = _this.transactions.findIndex(function (element) { return element.id === data.id; });
                _this.transactions.splice(indextToDelete, 1);
            }
        }, function (error) { return alert("There was a problem deleting."); });
        this.dataService.transactionUpdated.subscribe(function (data) {
            console.log("transactionUpdated received from data.service: " + JSON.stringify(data));
            if (data === null) {
                alert("There was a problem updating.");
            }
            else {
                var indexToUpdate = _this.transactions.findIndex(function (element) { return element.id == data.id; });
                _this.transactions[indexToUpdate] = data;
            }
        }, function (error) { return alert("There was a problem updating."); });
    } //ctor
    TransactionListComponent.prototype.ngOnInit = function () {
        this.getAccounts();
        this.getCategories();
        this.getTransactions();
    };
    TransactionListComponent.prototype.accountName = function (accountId) {
        return this.accounts.find(function (element) { return element.id === accountId; }).name;
    };
    TransactionListComponent.prototype.categoryName = function (categoryId) {
        return this.categories.find(function (element) { return element.id === categoryId; }).name;
    };
    TransactionListComponent.prototype.getAccounts = function () {
        var _this = this;
        this.dataService.getAccounts().subscribe(function (accounts) { return _this.accounts = accounts; }, function (error) { return alert("there was an error getting accounts."); });
    };
    TransactionListComponent.prototype.getCategories = function () {
        var _this = this;
        this.dataService.getCategories().subscribe(function (categories) { return _this.categories = categories; }, function (error) { return alert("there was an error getting categories."); });
    };
    TransactionListComponent.prototype.getTransactions = function () {
        var _this = this;
        this.dataService.getTransactions().subscribe(function (transactions) { return _this.transactions = transactions; }, function (error) { return alert("there was an error getting transactions."); });
    };
    TransactionListComponent.prototype.onDelete = function (id) {
        var result;
        var indextToDelete = this.transactions.findIndex(function (element) { return element.id === id; });
        var dateToDelete = this.transactions[indextToDelete].date;
        var confirmation = confirm('Are you sure you want to delete transaction on ' + dateToDelete + '?');
        if (confirmation) {
            this.dataService.deleteAccount(id);
        }
        ;
    };
    TransactionListComponent = __decorate([
        core_1.Component({
            selector: 'transaction-list',
            template: __webpack_require__("../../../../../src/modules/transactions/components/transaction-list/transaction-list.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/transactions/components/transaction-list/transaction-list.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], TransactionListComponent);
    return TransactionListComponent;
}());
exports.TransactionListComponent = TransactionListComponent;


/***/ }),

/***/ "../../../../../src/modules/transactions/transactions.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var transaction_add_component_1 = __webpack_require__("../../../../../src/modules/transactions/components/transaction-add/transaction-add.component.ts");
var transaction_edit_component_1 = __webpack_require__("../../../../../src/modules/transactions/components/transaction-edit/transaction-edit.component.ts");
var transaction_list_component_1 = __webpack_require__("../../../../../src/modules/transactions/components/transaction-list/transaction-list.component.ts");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var transactions_routing_module_1 = __webpack_require__("../../../../../src/modules/transactions/transactions.routing.module.ts");
var TransactionsModule = /** @class */ (function () {
    function TransactionsModule() {
    }
    TransactionsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                transactions_routing_module_1.TransactionRoutingModule
            ],
            declarations: [
                transaction_add_component_1.TransactionAddComponent,
                transaction_edit_component_1.TransactionEditComponent,
                transaction_list_component_1.TransactionListComponent
            ],
            providers: [data_service_1.DataService]
        })
    ], TransactionsModule);
    return TransactionsModule;
}());
exports.TransactionsModule = TransactionsModule;


/***/ }),

/***/ "../../../../../src/modules/transactions/transactions.routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var transaction_add_component_1 = __webpack_require__("../../../../../src/modules/transactions/components/transaction-add/transaction-add.component.ts");
var transaction_edit_component_1 = __webpack_require__("../../../../../src/modules/transactions/components/transaction-edit/transaction-edit.component.ts");
var transaction_list_component_1 = __webpack_require__("../../../../../src/modules/transactions/components/transaction-list/transaction-list.component.ts");
var transactionsRoutes = [
    {
        path: 'transactions',
        component: transaction_list_component_1.TransactionListComponent,
        children: [
            { path: 'transaction-add', component: transaction_add_component_1.TransactionAddComponent },
            { path: 'transaction-edit/:id', component: transaction_edit_component_1.TransactionEditComponent }
        ]
    }
];
var TransactionRoutingModule = /** @class */ (function () {
    function TransactionRoutingModule() {
    }
    TransactionRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(transactionsRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], TransactionRoutingModule);
    return TransactionRoutingModule;
}());
exports.TransactionRoutingModule = TransactionRoutingModule;


/***/ }),

/***/ "../../../../../src/modules/users/components/user-list/user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/users/components/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"users\">\r\n  <p *ngIf=\"!users\"><em>Loading...</em></p>\r\n\r\n  <table>\r\n    <caption>Users</caption>\r\n    <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>Username</th>\r\n        <th>Admin</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let user of users\">\r\n        <td>{{user.id}}</td>\r\n        <td>{{user.userName}}</td>\r\n        <td><input type='checkbox' checked={{user.admin}} (Change)=\"onToggleAdmin(user.id)\" /></td>\r\n        <td><a (click)=\"onReset(user.id);\">Reset Password</a></td>\r\n        <td><a (click)=\"onDelete(user.id);\">Delete</a></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/users/components/user-list/user-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var UserListComponent = /** @class */ (function () {
    function UserListComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.dataService.userDeleted.subscribe(function (data) {
            console.log("accountDeleted received from data.service: " + JSON.stringify(data));
            if (data === null) {
                alert("There was a problem deleting.");
            }
            else {
                var indextToDelete = _this.users.findIndex(function (element) { return element.id === data.id; });
                _this.users.splice(indextToDelete, 1);
            }
        }, function (error) { return alert("There was a problem deleting."); });
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserListComponent.prototype.getUsers = function () {
        var _this = this;
        this.dataService.getUsers().subscribe(function (users) { return _this.users = users; });
    };
    UserListComponent.prototype.onDelete = function (id) {
        var confirmation = confirm('are you sure you want to delete ' + this.users.find(function (element) { return element.id == id; }).userName + '?');
        if (confirmation) {
            this.dataService.deleteUser(id);
        }
        ;
    };
    UserListComponent.prototype.onToggleAdmin = function (id) {
        var indexToToggle = this.users.findIndex(function (element) { return element.id === id; });
        if (this.users[indexToToggle].admin === true) {
            this.users[indexToToggle].admin = false;
            this.dataService.unmakeAdmin(id);
        }
        else {
            this.users[indexToToggle].admin = true;
            this.dataService.makeAdmin(id);
        }
    };
    UserListComponent.prototype.onReset = function (id) {
        this.dataService.resetPassword(id, "Password?123");
    };
    UserListComponent = __decorate([
        core_1.Component({
            selector: 'user-list',
            template: __webpack_require__("../../../../../src/modules/users/components/user-list/user-list.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/users/components/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;


/***/ }),

/***/ "../../../../../src/modules/users/users.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var user_list_component_1 = __webpack_require__("../../../../../src/modules/users/components/user-list/user-list.component.ts");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var users_routing_module_1 = __webpack_require__("../../../../../src/modules/users/users.routing.module.ts");
var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                users_routing_module_1.UserRoutingModule
            ],
            declarations: [
                user_list_component_1.UserListComponent
            ],
            providers: [data_service_1.DataService]
        })
    ], UsersModule);
    return UsersModule;
}());
exports.UsersModule = UsersModule;


/***/ }),

/***/ "../../../../../src/modules/users/users.routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_list_component_1 = __webpack_require__("../../../../../src/modules/users/components/user-list/user-list.component.ts");
var usersRoutes = [
    { path: 'users', component: user_list_component_1.UserListComponent }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(usersRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());
exports.UserRoutingModule = UserRoutingModule;


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
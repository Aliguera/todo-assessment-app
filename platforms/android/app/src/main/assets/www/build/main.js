webpackJsonp([2],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTodoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_view_controller__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_loading_loading_controller__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_alert_alert_controller__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//Prividers

//Native

var CreateTodoPage = /** @class */ (function () {
    function CreateTodoPage(navCtrl, navParams, storageProvider, viewCtrl, geolocation, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storageProvider = storageProvider;
        this.viewCtrl = viewCtrl;
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.todo = { id: new Date().getTime(), name: "", description: "", date: "", done: false, position: {} };
    }
    CreateTodoPage.prototype.createTodo = function () {
        if (!this.todo.name) {
            this.presentAlert('Error', 'You have to insert at least a name for the todo before creating one');
            return;
        }
        if (this.todo.date !== "") {
            this.todo.date = this.formatDate(this.todo.date);
        }
        this.storageProvider.createTodo(this.todo.id, this.todo);
        this.viewCtrl.dismiss();
    };
    CreateTodoPage.prototype.closeCreateTodoModal = function () {
        this.viewCtrl.dismiss();
    };
    CreateTodoPage.prototype.formatDate = function (inputDate) {
        var date = new Date(inputDate);
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var time = hours + ":" + minutes;
        if (day < 10) {
            day = '0' + day;
        }
        if (month < 10) {
            month = '0' + month;
        }
        return { date: day + '/' + month + '/' + date.getFullYear(), time: time };
    };
    CreateTodoPage.prototype.getCurrentPosition = function () {
        var _this = this;
        var positionLoader = this.loadingCtrl.create({
            content: 'Loading your current position...'
        });
        positionLoader.present();
        this.geolocation.getCurrentPosition().then(function (res) {
            _this.todo.position = { lat: res.coords.latitude, long: res.coords.longitude };
            positionLoader.dismiss();
            _this.presentAlert('Location', 'Location saved');
        }, function (err) {
            console.log("Error getting your position: ", err);
        });
    };
    CreateTodoPage.prototype.presentAlert = function (title, subtitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    CreateTodoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-todo',template:/*ion-inline-start:"/Users/ratobranco/todo-assessment-app/src/pages/create-todo/create-todo.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="closeCreateTodoModal()">\n        <ion-icon class="close-icon" slot="icon-only" name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Create Todo</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label>Todo name</ion-label>\n    <ion-input [(ngModel)]="todo.name"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Todo description</ion-label>\n    <ion-textarea [(ngModel)]="todo.description" ></ion-textarea>\n  </ion-item>\n  <ion-item>\n    <ion-label>Todo date</ion-label>\n    <ion-datetime [(ngModel)]="todo.date" min="2019" max="2100" displayFormat="DD MM YYYY HH:mm"></ion-datetime>\n  </ion-item>\n  <ion-row margin-top>\n    <ion-col style="width: 100%; text-align: center">\n      <button ion-button color="secondary" round (click)="getCurrentPosition()">Save your position</button>\n    </ion-col>\n  </ion-row>\n  <button (click)="createTodo()" margin-top ion-button full solid color="primary">Submit</button>\n</ion-content>\n'/*ion-inline-end:"/Users/ratobranco/todo-assessment-app/src/pages/create-todo/create-todo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_view_controller__["a" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
    ], CreateTodoPage);
    return CreateTodoPage;
}());

//# sourceMappingURL=create-todo.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Native


var TodoDetailsPage = /** @class */ (function () {
    function TodoDetailsPage(navCtrl, navParams, geo, launchNavigator) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geo = geo;
        this.launchNavigator = launchNavigator;
        this.todo = { date: {}, position: { lat: "", long: "" } };
    }
    TodoDetailsPage.prototype.ionViewWillEnter = function () {
        this.todo = this.navParams.get('data');
        console.log(this.todo.position);
    };
    TodoDetailsPage.prototype.loadGoogleMaps = function () {
        var _this = this;
        this.geo.getCurrentPosition().then(function (resp) {
            var startPosition = [resp.coords.latitude, resp.coords.longitude];
            _this.launchNavigator.navigate([_this.todo.position.lat, _this.todo.position.long], {
                start: startPosition
            });
        }).catch(function (err) {
            console.log("Error getting your position: ", err); //error in case position is not found
        });
    };
    TodoDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-todo-details',template:/*ion-inline-start:"/Users/ratobranco/todo-assessment-app/src/pages/todo-details/todo-details.html"*/'<!--\n  Generated template for the TodoDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Todo Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="todo-content">\n    <h3>{{ todo.name }}</h3>\n    <p *ngIf="todo.description" >{{ todo.description }}</p>\n    <small *ngIf="todo.date.date" >{{ todo.date.date }}</small><br>\n    <small *ngIf="todo.date.time" >{{ todo.date.time }}</small>\n    <button ion-button block color="primary" *ngIf="todo.position.lat"  (click)="loadGoogleMaps()">Directions</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/ratobranco/todo-assessment-app/src/pages/todo-details/todo-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__["a" /* LaunchNavigator */]])
    ], TodoDetailsPage);
    return TodoDetailsPage;
}());

//# sourceMappingURL=todo-details.js.map

/***/ }),

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/create-todo/create-todo.module": [
		279,
		1
	],
	"../pages/todo-details/todo-details.module": [
		280,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_modal_modal_controller__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_todo_create_todo__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__todo_details_todo_details__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_alert_alert_controller__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Pages


//Providers


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, modalCtrl, storageProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.storageProvider = storageProvider;
        this.alertCtrl = alertCtrl;
        this.todoList = [];
        this.todoDoneList = [];
        this.allTodos = [];
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.getTodos();
    };
    //Open modal to create a todo
    HomePage.prototype.createTodo = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__create_todo_create_todo__["a" /* CreateTodoPage */]);
        modal.present();
        modal.onDidDismiss(function () {
            _this.getTodos();
        });
    };
    //Get todos from storage
    HomePage.prototype.getTodos = function () {
        var _this = this;
        var allTodos = this.storageProvider.getTodos("todos");
        this.allTodos = allTodos;
        this.todoList = [];
        this.todoDoneList = [];
        allTodos.forEach(function (todo) {
            if (todo.done) {
                _this.todoDoneList.push(todo);
            }
            else {
                _this.todoList.push(todo);
            }
        });
    };
    //Save todos
    HomePage.prototype.saveTodos = function (todos) {
        this.storageProvider.saveTodos(todos);
    };
    //Togle todo done variable for todos list
    HomePage.prototype.toggleTodo = function (index) {
        this.todoList[index].done = !this.todoList[index].done;
        var concatTodos = this.todoList.concat(this.todoDoneList);
        this.saveTodos(concatTodos);
        this.getTodos();
    };
    //Togle todo done variable for todos done list
    HomePage.prototype.toggleTodoDone = function (index) {
        this.todoDoneList[index].done = !this.todoDoneList[index].done;
        var concatTodos = this.todoList.concat(this.todoDoneList);
        this.saveTodos(concatTodos);
        this.getTodos();
    };
    //Dele todo done item
    HomePage.prototype.deleteTodo = function (index) {
        this.todoDoneList.splice(index, 1);
        var concatTodos = this.todoList.concat(this.todoDoneList);
        this.saveTodos(concatTodos);
        this.getTodos();
    };
    HomePage.prototype.presentAlert = function (index) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Are you sure?',
            subTitle: 'If you tap Ok you will not be able to see this Todo again',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        return;
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        _this.deleteTodo(index);
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.seeTodoDetails = function (index, list) {
        var data;
        console.log("List type: ", list);
        if (list === "todoList") {
            data = this.todoList[index];
        }
        else {
            data = this.todoDoneList[index];
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__todo_details_todo_details__["a" /* TodoDetailsPage */], { data: data });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/ratobranco/todo-assessment-app/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n        Alick\'s Todo List\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="createTodo()">\n        <ion-icon class="add-todo-icon" slot="icon-only" name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <!-- Todo list -->\n    <div class="div-list">\n      <ion-label class="todo-list-label-title">Todo list ({{ todoList.length }})</ion-label>\n      <ion-label class="no-todo-label" *ngIf="todoList.length === 0">No todo added yet</ion-label>\n      <div *ngFor="let todo of todoList; let i = index">\n        <ion-item-sliding #item *ngIf="todoList.length > 0" >\n          <ion-item *ngIf="todoList.length > 0">\n            <ion-checkbox start color="primary" [checked]="todo.done" (click)="toggleTodo(i)"></ion-checkbox>\n            <ion-label class="todo-list-label">{{ todo.name }}</ion-label>\n            <ion-label class="todo-list-label" end>{{ todo.date.date }}</ion-label>\n          </ion-item>\n          <ion-item-options side="right">\n            <button ion-button color="info" (click)="seeTodoDetails(i, \'todoList\')">View</button>\n          </ion-item-options>\n        </ion-item-sliding>\n      </div>\n    </div>\n    \n    <br>\n\n    <!-- Done todo list -->\n    <div class="div-list">\n      <ion-label class="done-list-label-title">Done todo list ({{ todoDoneList.length }})</ion-label>\n      <ion-label class="no-todo-label" *ngIf="todoDoneList.length == 0">No todo done yet</ion-label>\n      <div *ngFor="let todoDone of todoDoneList; let i = index" >\n        <ion-item-sliding #item *ngIf="todoDoneList.length > 0" >\n          <ion-item>\n              <ion-checkbox start color="primary" [checked]="todoDone.done" (click)="toggleTodoDone(i)"></ion-checkbox>\n              <ion-label class="done-list-label">{{ todoDone.name }}</ion-label>\n              <ion-label class="done-list-label" end>{{ todoDone.date.date }}</ion-label>\n          </ion-item>\n          <ion-item-options side="right">\n            <button ion-button color="info" (click)="seeTodoDetails(i, \'todoDoneList\')">View</button>\n            <button ion-button color="danger" (click)="presentAlert(i)">Delete</button>\n          </ion-item-options>\n        </ion-item-sliding>\n      </div>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/ratobranco/todo-assessment-app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_modal_modal_controller__["a" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_create_todo_create_todo__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_todo_details_todo_details__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_storage_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_launch_navigator__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//Page



//Providers

//Native


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_create_todo_create_todo__["a" /* CreateTodoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_todo_details_todo_details__["a" /* TodoDetailsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/create-todo/create-todo.module#CreateTodoPageModule', name: 'CreateTodoPage', segment: 'create-todo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/todo-details/todo-details.module#TodoDetailsPageModule', name: 'TodoDetailsPage', segment: 'todo-details', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_create_todo_create_todo__["a" /* CreateTodoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_todo_details_todo_details__["a" /* TodoDetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_storage_storage__["a" /* StorageProvider */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_launch_navigator__["a" /* LaunchNavigator */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/ratobranco/todo-assessment-app/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/ratobranco/todo-assessment-app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StorageProvider = /** @class */ (function () {
    function StorageProvider(http) {
        this.http = http;
    }
    StorageProvider.prototype.createTodo = function (id, todo) {
        var todoList = [];
        if (!window.localStorage.getItem("todos")) {
            window.localStorage.setItem("todos", JSON.stringify(todoList));
        }
        else {
            var todoListStorage = JSON.parse(window.localStorage.getItem("todos"));
            todoList = todoListStorage;
        }
        todoList.push(todo);
        var todoJSON = JSON.stringify(todoList);
        window.localStorage.setItem('todos', todoJSON);
    };
    StorageProvider.prototype.getTodos = function (key) {
        if (window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key));
        }
        else {
            return [];
        }
    };
    StorageProvider.prototype.saveTodos = function (todosList) {
        window.localStorage.setItem('todos', JSON.stringify(todosList));
    };
    StorageProvider.prototype.deleteTodo = function (index) {
        var todoListStorage = JSON.parse(window.localStorage.getItem("todos"));
        todoListStorage.splice(index, 1);
        this.saveTodos(todoListStorage);
    };
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClientModule */]])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map
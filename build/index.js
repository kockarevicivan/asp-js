"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var obj = {
    username: 'ivan',
    email: 'admin@admin.com'
};
function myDecorator(target, propertyKey) {
    console.log(JSON.stringify(target) + '     ' + propertyKey);
}
function serverMethod() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(args);
    return;
}
var Test = /** @class */ (function () {
    function Test() {
        this.metoda = function () {
            console.log('\n\nmetoda\n\n');
        };
    }
    __decorate([
        serverMethod
    ], Test.prototype, "metoda", void 0);
    return Test;
}());
new Test().metoda();
// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// let controllers = [];
// fs.readdirSync('./build/controllers').map((file) => {
//     if (file.toLowerCase().endsWith('controller.js')) {
//         let controller = file.slice(0, -13).toLowerCase();
//         import('./controllers/' + file)
//         .then((c) => {
//             let methods = Object.getOwnPropertyNames(c['default']['prototype']);
//             for(let key in methods)
//             {
//                 console.log('/' + controller + '/' + methods[key]);
//                 app.get('/' + controller + '/' + methods[key], (req, res) => {
//                     console.log(JSON.stringify(req.query));
//                     c['default']['prototype'][methods[key]](req, res);
//                     // treba ...req.params
//                 });   
//             }
//         })
//         .catch((err) => {
//             console.error('Controllers cannot be parsed.');
//         });
//     }
// });
// app.listen(constants.PORT, () => {
//     console.log(`Server running on http://localhost:${constants.PORT}`);
// });

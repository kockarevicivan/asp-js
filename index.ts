
import express from 'express';
import bodyParser from 'body-parser';
import constants from './Constants';
import fs from 'fs';
import { prototype } from 'stream';


let obj = {
    username: 'ivan',
    email: 'admin@admin.com'
};

function myDecorator(target: any, propertyKey?: string) {
    console.log(JSON.stringify(target) + '     ' + propertyKey);
}


function serverMethod(...args : any) : any {
    console.log(args);

    return;
}


class Test {
    @serverMethod
    metoda = () : void => {
        console.log('\n\nmetoda\n\n');
    }
}

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
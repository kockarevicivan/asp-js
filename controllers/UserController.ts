export default class UserController {
    public index(req : any, res : any) {
        res.send('/user/index');
    }

    public get(req : any, res : any) {
        res.send('/user/get');
    }
}
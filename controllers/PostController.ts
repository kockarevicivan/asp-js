export default class PostController {
    public index(req : any, res : any) {
        res.send('/post/index');
    }

    public get(req : any, res : any) {
        res.send('/post/get');
    }
}
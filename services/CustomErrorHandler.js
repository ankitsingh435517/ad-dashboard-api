class CustomErrorHandler extends Error{
    constructor(){
        super();
    }

    static notFound(msg="404 resource not found"){
        return new CustomErrorHandler(404, msg);
    }
}

export default CustomErrorHandler;
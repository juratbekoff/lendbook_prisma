export function handlerError(err: any) : any {
    return {
        message: 'Error! While sending pupils to client!',
        error:err
    }
}
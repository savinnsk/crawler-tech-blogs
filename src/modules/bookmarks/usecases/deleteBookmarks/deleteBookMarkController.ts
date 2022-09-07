import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteBookMarkUseCase } from "./deleteBookMarkUseCase";

class DeleteBookmarkController {
    
    async handle(request , response : Response){

    
    try{
        const bookmark_id = request.params.id
        const user_id = request.user.id

        const deleteBookMarkUseCase = container.resolve(DeleteBookMarkUseCase)

        await deleteBookMarkUseCase.execute(user_id , bookmark_id )

        return response.status(201).json({
            message:"bookmark was deleted with success"
        })

    }catch{
        return response.status(400).send(new Error("Server Error"))
    }
    }
}

export {DeleteBookmarkController}
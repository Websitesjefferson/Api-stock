import {Request, Response} from 'express'
import { ListCategoryService } from '../../services/category/ListCategoryService'

class ListCategoryController{
  async handle(req: Request, res: Response){
    const id = req.query.id as string
    
    const listCategoryService = new ListCategoryService();

   
    const category = await listCategoryService.execute({
      id
    });
    

    return res.json(category);
    

  }
}

export { ListCategoryController }
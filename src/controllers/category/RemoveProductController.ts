import {Request, Response} from 'express'
import { RemoveCategory } from '../../services/category/RemoveProduct'

class RemoveCategoryController{
  async handle(req: Request, res: Response){
    const  item_id = req.query.item_id as string

    const removeProduct = new RemoveCategory ();

    const product = await removeProduct.execute({
      item_id
    });
    
    return res.json(product); 

  }
}

export { RemoveCategoryController }


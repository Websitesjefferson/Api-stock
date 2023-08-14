import {Request, Response} from 'express'
import { RemoveProductbrand } from '../../services/Productbrand/RemoveProductbrand'

class RemoveProductBrandController{
  async handle(req: Request, res: Response){
    const  item_id = req.query.item_id as string

    const removeProduct = new RemoveProductbrand ();

    const product = await removeProduct.execute({
      item_id
    });
    
    return res.json(product); 

  }
}

export { RemoveProductBrandController }


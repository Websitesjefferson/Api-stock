import {Request, Response} from 'express'
import { ListProductBrandService } from '../../services/Productbrand/ListProductbrandService'

class ListProductBrandController{
  async handle(req: Request, res: Response){
    const id = req.query.id as string
    
    const listProductBrandService = new ListProductBrandService();

   
    const category = await listProductBrandService.execute({
      id
    });
    

    return res.json(category);
    

  }
}

export { ListProductBrandController }
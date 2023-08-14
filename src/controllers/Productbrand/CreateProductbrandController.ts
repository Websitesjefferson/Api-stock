import {Request, Response} from 'express'
import { CreateProductBrandService } from '../../services/Productbrand/CreateProductbrandService'

class CreateProductBrandController{
  async handle(req: Request, res: Response){
    const { name } = req.body;

    const createProductBrandService = new CreateProductBrandService();

    if(!req.file){
      throw new Error("error upload file")
    }else{

      const { originalname, filename: name } = req.file;
   
      const Supplier = await createProductBrandService.execute({
      name
    });

    return res.json(Supplier);
  
  }
}  
}

export { CreateProductBrandController } 
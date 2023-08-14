import {Request, Response } from 'express'
import { CreateProductService } from '../../services/product/CreateProductService'

class CreateProductController{
  async handle(req: Request, res: Response){
    const { name, price, amount, categoryId,description, banner,  productbtandId  } = req.body;
    //const file = req.file as UploadedAws;
    const createProductService = new CreateProductService();


    if(!req.file){
      throw new Error("error upload file")
    }else{

      const { originalname, filename: banner } = req.file;
      
   const product = await createProductService.execute({
        name,
        price,
        amount,
        banner,
        categoryId,
        productbtandId,
        description
       });
      
      return res.json(product)
    }
    }

  
}

export { CreateProductController }

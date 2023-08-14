import { Request, Response } from 'express';
import { RemoveProduct } from '../../services/product/RemoveProduct';


class RemoveProductController {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;
    const removeProduct = new RemoveProduct();
    const product = await removeProduct.execute({ id });



   return res.json(product);
  } 
  
}

export { RemoveProductController };
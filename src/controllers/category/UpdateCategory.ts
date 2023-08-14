
import { Request, Response } from 'express';
import { UpdatesCategory } from '../../services/category/UpdatesCategory'


class CategoryUpdate {
  async handle(req: Request, res: Response) {
    const { id, name  } = req.body;
    const sendOrder = new UpdatesCategory();

 


    const order = await sendOrder.execute({
      id,
      name,
   
    });

   
    

    return res.json(order);
  }
}

export { CategoryUpdate };




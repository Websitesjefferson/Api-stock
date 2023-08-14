import {prisma} from "../../lib";

interface OrderRequest{
  item_id: string;
}

class RemoveCategory {
  async execute({ item_id }: OrderRequest){

   const product = await prisma.category.delete({
    where:{
      id: item_id
    }
   })
    
    
    return product
  }
}

export { RemoveCategory }
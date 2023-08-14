import {prisma} from "../../lib";

interface OrderRequest{
  id: string;
  
}

class RemoveProduct{
  async execute({ id }: OrderRequest){

   const product = await prisma.product.delete({
    where:{
      id: id
    }
   })

   
    
    
    return product
  }
}

export { RemoveProduct }
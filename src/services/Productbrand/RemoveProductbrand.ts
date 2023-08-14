import {prisma} from "../../lib";

interface OrderRequest{
  item_id: string;
}

class RemoveProductbrand {
  async execute({ item_id }: OrderRequest){

   const product = await prisma.productbrand.delete({
    where:{
      id: item_id
    }
   })
    
    
    return product
  }
}

export { RemoveProductbrand }
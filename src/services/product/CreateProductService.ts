
import {prisma} from "../../lib";

interface ProductRequest{
  name: string;
  price: string;
  banner: string;
  description: string
  categoryId: string;
  productbtandId: string;
  amount: string
  
}

class CreateProductService{
  async execute({name, price,  banner, categoryId, amount,  productbtandId, description }: ProductRequest){

    const product = await prisma.product.create({
      data:{
        name: name,
        price: price,
        amount: amount,
        banner: banner,
        categoryId: categoryId,
        productbtandId: productbtandId,
        description: description
     
        
      },

    })

    return product;

  }
 
  


}

export { CreateProductService }


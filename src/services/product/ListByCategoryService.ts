import {prisma} from "../../lib";

interface ProductRequest{
  categoryId: string;
  productbtandId: string
 
}

class ListByCategoryService{
  async execute({ categoryId, productbtandId }: ProductRequest){
    
    const findByCategory = await prisma.product.findMany({
      where:{
        categoryId: categoryId,
        productbtandId: productbtandId
    },
    

    })
    
    return findByCategory;

  }
}

export { ListByCategoryService }
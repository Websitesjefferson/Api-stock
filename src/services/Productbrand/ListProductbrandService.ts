import {prisma} from "../../lib";

interface Company{
   id: string
}


class ListProductBrandService{
  async execute({id}: Company){

    const category = await prisma.productbrand.findMany({
      where:{
        id: id
      }, 
    select:{
        id: true,
        name: true,
  
        
        
      }
    })

    return category;

  }
}

export { ListProductBrandService }
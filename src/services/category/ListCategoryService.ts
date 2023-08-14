import {prisma} from "../../lib";

interface Company{
   id: string
}


class ListCategoryService{
  async execute({id}: Company){

    const category = await prisma.category.findMany({
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

export { ListCategoryService }
import {prisma} from "../../lib";

interface CategoryRequest{
  name: string;
 
  
}

class CreateProductBrandService{
  async execute({ name }: CategoryRequest){
    
    if(name === ''){
      throw new Error('Name invalid')
    }

    const category = await prisma.productbrand.create({
      data:{
        name: name,
    },
      select:{
        id: true,
        name: true,
      
    }
    })


    return category;

  }



  
}

export { CreateProductBrandService }
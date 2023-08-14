import {prisma} from "../../lib";

interface OrderRequest{
  id: string;
  name: string;
}

class UpdatesCategory{
  async execute({ id, name }: OrderRequest){
    const order = await prisma.category.update({
      where:{
        id: id
      },
      data:{
        name: name,
       
      }
    })

    return order;

  }
}

export {  UpdatesCategory }
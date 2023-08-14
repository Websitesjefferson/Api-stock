import {prisma} from "../../lib";

interface OrderRequest{
  id: string;
  name: string;
  price: string;
  amount: string
  banner: string
  description: string


}

class UpdateProduct{
  async execute({ id, name, price, amount, banner, description}: OrderRequest){
    const order = await prisma.product.update({
      where:{
        id: id
      },
      data:{
        name: name,
        price: price,
        amount: amount,
        banner: banner,
        description: description
      }
    })

    return order;

  }
}

export { UpdateProduct }
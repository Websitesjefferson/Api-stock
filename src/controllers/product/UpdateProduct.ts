import { Request, Response } from 'express';
import { UpdateProduct } from '../../services/product/UpdateProduct';

class ProductUpdate {
  async handle(req: Request, res: Response) {
    const { id, name, price, amount, description } = req.body;
    const sendOrder = new UpdateProduct();

    try {
      let bannerFileName = ''; // Variável para armazenar o nome do arquivo de imagem

      if (req.file) {
        // Se houver um arquivo de imagem na requisição, atualiza a variável bannerFileName
        bannerFileName = req.file.filename;
      }

      const order = await sendOrder.execute({
        id,
        name,
        price,
        amount,
        banner: bannerFileName, // Usa o nome do arquivo como o valor para a propriedade banner
        description,
      });

      return res.json(order);
    } catch (error) {
      console.error('Erro ao atualizar o produto:', error);
      return res.status(500).json({ error: 'Erro ao atualizar o produto' });
    }
  }
}

export { ProductUpdate };

import express from 'express';
import { prisma } from './lib';
import multer from 'multer';
const router = express.Router();
import uploadConfig from './config/multer'
const upload = multer(uploadConfig.upload("./tmp"));

import { CreateCategoryController } from './controllers/category/CreateCategoryController'
import { ListCategoryController } from './controllers/category/ListCategoryController'
import { RemoveCategoryController } from './controllers/category/RemoveProductController'

import { CreateProductBrandController } from './controllers/Productbrand/CreateProductbrandController'
import { ListProductBrandController } from './controllers/Productbrand/ListProductbrandController'
import { RemoveProductBrandController } from './controllers/Productbrand/RemoveProductbrandController'


import { CreateProductController } from './controllers/product/CreateProductController'
import { RemoveProductController } from './controllers/product/RemoveProductController'
import { ListByCategoryController } from './controllers/product/ListByCategoryController'
import { ProductUpdate } from './controllers/product/UpdateProduct';
import { CategoryUpdate } from './controllers/category/UpdateCategory';

 
router.post('/category',  new CreateCategoryController().handle )
router.get('/category',  new ListCategoryController().handle )
router.put("/category/update", new CategoryUpdate().handle)
router.delete('/category/delete',  new RemoveCategoryController().handle ) 

router.post('/brand',upload.single('file'),  new CreateProductBrandController().handle )
router.get('/brand',  new ListProductBrandController().handle )
router.delete('/brand/delete',  new RemoveProductBrandController().handle ) 

router.post('/product', upload.single('file'), new CreateProductController().handle )
router.delete('/product/delete',  new RemoveProductController().handle )
router.put('/product/update',upload.single('file'), new ProductUpdate().handle )
router.get('/category/product', new ListByCategoryController().handle )

export default router;

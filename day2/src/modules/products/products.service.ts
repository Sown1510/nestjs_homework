import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class ProductsService {
  private products:any[];
  constructor(){
    this.loadProducts();
  }

  private loadProducts() {
    const filePath = path.resolve(process.cwd(), 'src/db/products.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    this.products = JSON.parse(data);
  }

  private saveProducts() {
    const filePath = path.resolve(process.cwd(), 'src/db/products.json');
    fs.writeFileSync(filePath, JSON.stringify(this.products, null, 2), 'utf-8');
  }

  create(productData: any) {
    this.products.push(productData);
    this.saveProducts();
    return this.products;

  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const result = this.products.find(product => product.id == id) 
    return result
  }

  update(id: number, body: any) {
    const newProducts = this.products.map(product => {
      if(product.id == id) {
        const {id, ...productUpdate} = body;
        product = {...product, ...productUpdate}
      }
      return product;
    })
    this.products = newProducts;
    this.saveProducts();
    return this.products;
  }

  remove(id: number) {
    const productDelete   = this.products.find(p => p.id == id)
    const categoriesRequire = ['electronics'];
    if(!productDelete) {
      throw new Error('San pham khong ton tai');
    }
    if(categoriesRequire.includes(productDelete.category)) {
      throw new Error(`Khong duoc xoa san pham co danh muc ${categoriesRequire.join(', ')}`);
    }
    this.products = this.products.filter((product) => 
      product.id != id
    )
    this.saveProducts()
    return this.products;
  }
}

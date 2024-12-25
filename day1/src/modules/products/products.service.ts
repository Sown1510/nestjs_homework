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
    const filePath = '/Users/sown/Downloads/nestJs/day1/src/data/products.json';
    const data = fs.readFileSync(filePath, 'utf-8');
    this.products = JSON.parse(data);
  }

  private saveProducts() {
    const filePath = '/Users/sown/Downloads/nestJs/day1/src/data/products.json';
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
    console.log(id);
    let isExist = false;
    const result = this.products.filter(product => {
      if(product.id == id)  isExist = true;
      return product.id != id
    })
    if(isExist) {
      this.products = result;
      this.saveProducts();
      return this.products;
    }
    console.log(`${id} Not exist`);
    return this.products;
  }
}

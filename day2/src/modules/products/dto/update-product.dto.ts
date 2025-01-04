import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsIn, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, Min, MinLength } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @IsOptional()
    @IsNotEmpty({message: 'Ten san pham khong duoc de trong'})
    @MinLength(5, {message: 'Do dai tu 5-50 ky tu'})
    @MaxLength(50, {message: 'Do dai tu 5-50 ky tu'})
    name: string;

    @IsOptional()
    @MinLength(20, {message: 'Do dai tu 20-200 ky tu'})
    @MaxLength(200, {message: 'Do dai tu 20-200 ky tu'})
    description: string;

    @IsOptional()
    @IsNotEmpty({message: 'Gia san pham khong duoc de trong'})
    @IsNumber({}, {message: 'Gia phai la mot so'})
    @Min(1, {message: 'Gia phai la mot so lon hon 0'})
    price: number;

    @IsOptional()
    @IsNotEmpty({message: 'Danh muc san pham khong duoc de trong'})
    @IsIn(['electronics', 'furniture', 'clothing'], {message: 'Danh muc phai nam trong danh sach cho phep: electronics,furniture,clothing'})
    category: string;

    @IsOptional()
    @IsString({each: true, message: 'Moi tu khoa phai la mot chuoi'})
    @MaxLength(10, {each: true, message: 'Moi tag khong duoc qua 10 ky tu'})
    tags: string[];
}


// 2. Cập nhật sản phẩm (Update Product):
// - Các trường tương tự như thêm sản phẩm nhưng tất cả là tùy chọn.
// - ID sản phẩm (id) phải là số hợp lệ đã tồn tại trong 1 mảng cho trước.
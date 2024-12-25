import { ArrayMaxSize, IsIn, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, Min, MinLength } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty({message: 'Ten san pham khong duoc de trong'})
    @MinLength(5, {message: 'Do dai tu 5-50 ky tu'})
    @MaxLength(50, {message: 'Do dai tu 5-50 ky tu'})
    name: string;

    @IsOptional()
    @MinLength(20, {message: 'Do dai tu 20-200 ky tu'})
    @MaxLength(200, {message: 'Do dai tu 20-200 ky tu'})
    description: string;

    @IsNotEmpty({message: 'Gia san pham khong duoc de trong'})
    @IsNumber({}, {message: 'Gia phai la mot so'})
    @Min(1, {message: 'Gia phai la mot so lon hon 0'})
    price: number;

    @IsNotEmpty({message: 'Danh muc san pham khong duoc de trong'})
    @IsIn(['electronics', 'furniture', 'clothing'], {message: 'Danh muc phai nam trong danh sach cho phep: electronics,furniture,clothing'})
    category: string;

    @IsOptional()
    @IsString({each: true, message: 'Moi tu khoa phai la mot chuoi'})
    @MaxLength(10, {each: true, message: 'Moi tag khong duoc qua 10 ky tu'})
    tags: string[];
}

// - Tên sản phẩm (name) không được để trống, độ dài từ 5-50 ký tự.
// - Mô tả (description) không bắt buộc, nhưng nếu có phải từ 20-200 ký tự.
// - Giá (price) phải là số dương lớn hơn 0.
// - Danh mục (category) phải thuộc danh sách cho phép: ['electronics', 'furniture', 'clothing'].
// - Mỗi sản phẩm có thể có danh sách các từ khóa (tags) dưới dạng mảng chuỗi, mỗi từ khóa không quá 10 ký tự.

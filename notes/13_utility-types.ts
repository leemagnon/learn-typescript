/* 유틸리티 타입 : 이미 정의해 놓은 타입을 변환할 때 사용하기 좋은 타입. */

// Partial : 특정 타입의 부분 집합을 만족하는 타입 정의

// Pick : 특정 타입에서 몇 개의 속성을 선택(pick)하여 타입 정의
interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {
    // .. 
}

// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>;

function displayProductDetail(shoppingItem: ShoppingItem) {

}

// interface UpdateProduct {
//     id?: number;
//     name?: string;
//     price?: number;
//     brand?: string;
//     stock?: number;
// }
    
type UpdateProduct = Partial<Product>;
// 3. 특정 상품 정보를 업데이트하는 함수
function updateProductItem(productItem: UpdateProduct) {

}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
    username: string;
    email: string;
    profilePhotoUrl: string;
}

// interface UserProfileUpdate {
//     username?: string;
//     email?: string;
//     profilePhotoUrl?: string;
// }

// #1
// type UserProfileUpdate = {
//     username?: UserProfile['username'];
//     email?: UserProfile['email'];
//     profilePhotoUrl?: UserProfile['profilePhotoUrl'];
// }

// #2
// type UserProfileUpdate = {
//     [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p];
// }

// #3
type UserProfileKeys = keyof UserProfile;

type UserProfileUpdate = {
    [p in UserProfileKeys]?: UserProfile[p];
}

// #4 => Partial<T>
type Subset<T> = {
    [p in keyof T]?: T[p];
}

const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
        stock: 25,
        description: 'Descripcion de Iphone 12'
    },
    {
        id: '2',
        name: 'Xiaomi 12 Lite',
        price: 800,
        category: 'notebook',
        img: 'https://cbafederal.net/wp-content/uploads/2022/09/fee_786_587_png.webp',
        stock: 25,
        description: 'Descripcion de Xiaomi 12 Lite'
    },
    {
        id: '3',
        name: 'Tablet Apple Ipad Pro 12.9',
        price: 1200,
        category: 'tablet',
        img: 'https://cbafederal.net/wp-content/uploads/2021/09/Apple-iPad-Pro-129-inch-5th-gen-Space-Gray-frontimage.png',
        stock: 25,
        description: 'Descripcion de Tablet Apple Ipad Pro 12.9'
    },

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}



export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
  })     
}

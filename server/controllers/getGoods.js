export const getGoods = () => {
  const Goods = [
    {shoes: [
      {id: 1, 
        title: 'Nike Air', price: 102, imgURL: 'good1.png', brand: 'Nike', discount: false, type: 'shoes'},
      {id: 2, 
        title: 'Adidas Stan Smith', price: 227, imgURL: 'good1.png', brand: 'Adidas', discount: false, type: 'shoes'},
      {id: 3, 
        title: 'Adidas OZWEEGO CELOX W', price: 169, imgURL: 'good1.png', brand: 'Adidas', discount: false, type: 'shoes'},
      {id: 4, 
        title: 'New Balance 725 Radically classic', price: 323, imgURL: 'good1.png', brand: 'Nike', discount: false, type: 'shoes'},
      {id: 5, 
        title: 'Jordan Max Aura 4', price: 440, imgURL: 'good1.png', brand: 'Jordan', discount: false, type: 'shoes'},
    ]},
    {
      clothes: [
        {id: 6, 
          title: 'T-shirt NIKE W NSW', price: 87, imgURL: 'good1.png', brand: 'Nike', discount: false, type: 'clothes'},
        {id: 7, 
          title: 'Sweatshirt Convers GAME CLOUDS CREW', price: 241, imgURL: 'good1.png', brand: 'Converse', discount: false, type: 'clothes'},
        {id: 8, 
          title: 'Sweatshirt Jordan M J ESS HOL PLD FLC', price: 154, imgURL: 'good1.png', brand: 'Jordan', discount: false, type: 'clothes'},
        {id: 9, 
          title: 'Sweatshirt Jordan M J FLT MVP STMT', price: 150, imgURL: 'good1.png', brand: 'Jordan', discount: false, type: 'clothes'},
        {id: 10, 
          title: 'Sweershirt Nike M NSW REPEAT SW', price: 219, imgURL: 'good1.png', brand: 'Nike', discount: false, type: 'clothes'},
      ]
    }
  ];
  return Goods;
};
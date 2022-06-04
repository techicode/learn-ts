interface IceCream {
  flavor: string;
  scoops: number;
  instruction?: string;
}

const lemon: IceCream = {
  flavor: 'Lemon',
  scoops: 2,
  instruction: 'Please use a plastic cone',
};

const chocolito: IceCream = {
  flavor: 'Chocolate',
  scoops: 5,
};

const tooManyScoops = (dessert: IceCream) => {
  if (dessert.scoops >= 4) return `${dessert.scoops} is too many scoops!`;
  return `Your order will be ready soon.`;
};

console.log(tooManyScoops(lemon));
console.log(tooManyScoops(chocolito));


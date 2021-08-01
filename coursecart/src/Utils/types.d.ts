type Course = {
  id:number,
  title : string,
  author: string,
  price: string,
  discountedPrice: string,
  isAddedToCart: boolean
};

type ToggleComplete = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;

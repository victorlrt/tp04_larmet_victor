export class Mushroom {
  id = 0;
  name = "";
  edible = false;
  poisonous = false;
  img = '';
  description = "";
  toxicity = "";
  favorite = false;

  constructor(id: number, name: string, edible: boolean, poisonous: boolean, img: string, description: string, toxicity: string, favorite: boolean) {
    this.id = id;
    this.name = name;
    this.edible = edible;
    this.poisonous = poisonous;
    this.img = img;
    this.description = description;
    this.toxicity = toxicity;
    this.favorite = favorite;
  }
}

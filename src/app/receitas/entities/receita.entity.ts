export class Receita {
    id: number;
    author?: any;
    authorId: number;
    category: number;
    excerpt: string;
    ingredients: Array<any>;
    likeCount?: number;
    pictureUri:	string;
    preparationTime: number;
    serves: number;
    steps: Array<any>;
    title: string;
}

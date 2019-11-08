import { ReceitaIngredientes } from './receita-ingredientes.entity';
import { ReceitaEtapa } from './receita-etapa.entity';

export class Receita {
    id: number;
    author?: any;
    authorId: number;
    category: number;
    excerpt: string;
    ingredients: Array<ReceitaIngredientes> = [];
    likeCount?: number;
    pictureUri:	string;
    preparationTime: number;
    serves: number;
    steps: Array<ReceitaEtapa> = [];
    title: string;
}

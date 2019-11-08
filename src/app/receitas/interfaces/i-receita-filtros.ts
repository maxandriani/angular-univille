export interface IReceitaFiltros {
    search?: string;
    categories?: Array<number>;
    serves?: number;
    authors?: Array<number>;
    ingredients?: Array<number>;
    minTime?: number;
    maxTime?: number;
    sorting?: string;
    skipCount?: number;
    maxResultCount?: number;
}

export class Pager {
  offset:number; // l’index du premier élément retourné par la requête.
  limit:number; // l’index du dernier élément retourné par la requête.
  count:number; // le nombre total d’élément que contient la collection.
  sizeOptions: Array<number> = [5, 10, 25, 100];
  collection: Array<any>;
}

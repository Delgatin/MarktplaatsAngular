import {Categorie} from './categorie';
import {Bezorgwijzen} from './bezorgwijzen';
import {Verkoper} from './verkoper';

export interface Product {
  id: number;
  artikelNaam: string;
  prijs: number;
  omschrijving: string;
  bod: boolean;
  categories: Categorie[];
  bezorgwijzen: Bezorgwijzen[];
  verkoper: Verkoper;
}

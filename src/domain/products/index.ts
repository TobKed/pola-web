import { getGuid } from '../../utils/data/random-number';
import { isNotEmpty } from '../../utils/string';

export interface ICompany {
  name: string;
}

export interface IBrand {
  name: string;
}

export interface IProductData {
  id: string;
  code: string;
  name: string;
  score: number;
  polishCapital: number;
  company?: ICompany;
  brand?: IBrand;
}

interface IDonate {
  show_button: boolean;
  title: string;
  url: string;
}

export interface IProductEAN {
  product_id: number;
  name: string;
  data?: IProductData;

  card_type?: string;
  altText?: string;
  plCapital?: string;
  plCapital_notes?: string;
  plWorkers?: string;
  plWorkers_notes?: string;
  plRnD?: string;
  plRnD_notes?: string;
  plRegistered?: string;
  plRegistered_notes?: string;
  plNotGlobEnt?: string;
  plNotGlobEnt_notes?: string;
  plScore: number;
  report_text: string;
  report_button_type: string;
  report_button_text: string;
  donate: IDonate;
}

export interface IProductMock {
  id: string;
  title: string;
  description: string;
  category: string;
  image: URL;
}

export class ProductMock implements IProductMock {
  public id: string;
  public image: URL;

  constructor(public title: string, public description: string, public category: string, imageSrc: string) {
    this.id = getGuid();
    this.image = new URL(imageSrc);
  }
}

export const EAN8_PATTERN = /(?<=\s)\d{8}(?=\s)/g;
export const EAN12_PATTERN = /(?<=\s)\d{12}(?=\s)/g;
export const EAN13_PATTERN = /(?<=\s)\d{13}(?=\s)/g;

export function isEANCode(text: string): boolean {
  if (isNotEmpty(text)) {
    const regex = new RegExp(EAN13_PATTERN);
    return regex.test(text.trim());
  }
  return false;
}

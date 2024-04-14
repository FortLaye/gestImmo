export interface Image{
  id?: number;
  name?: string;
  imageData?: string;
}

export interface Bien {
    id?: number;
    nom: string;
    description: string;
    prix: number;
    address: string;
    status: string;
    imagesBien: Image[];
}


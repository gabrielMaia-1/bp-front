import { Posto } from "./Posto";
import { TipoCombustivel } from "./TipoCombustivel";

export interface Combustivel {
    id: number | null;
    posto: Posto | null;
    tipo: TipoCombustivel | null;
    preco: number;
}
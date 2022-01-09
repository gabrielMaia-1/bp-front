import { Combustivel } from "./interfaces/Combustivel"
import { Posto } from "./interfaces/Posto"

/* Modal */
export const MODAL_MD = { width: '540px', height: '440px'}
export const MODAL_LG = { width: '720px', height: '460px'}

/* Dados */
export const DEFAULT_INSERT_POSTO: Posto = {id: null, nome: '', latitude: -20.46477167905963, longitude: -54.61623430252075}
export const DEFAULT_INSERT_COMBUSTIVEL: Combustivel = {id: null, posto: null, tipo: null , preco: 2.25}
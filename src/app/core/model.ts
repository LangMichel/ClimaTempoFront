export class Endereco {
  ds_Logradouro: string;
  nr_Numero: number;
  ds_Complemento: string;
  ds_Bairro: string;
  nr_Cep: number;
  ds_Cidade: string;
  ds_Estado: string;
}

export class Cidade {
  cd_Cidade: number;
  nm_Cidade: string;
  nm_Pais: string;
  sg_Pais: string;

 }

 export class Cliente {
  cd_Cliente: number;
  nm_Cliente: string;
  email: string;

 }

 export class Clima {
  tempDia: number;
  tempMax: number;
  tempMin: number;
  linkIcone: string;
  dataClima: Date;
  umidade: number;
  chuva: number;
  clima: string;
 }

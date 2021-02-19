import { Api } from './Api';

export class CommonApi {
  static getCommonData = <T>() => Api.get<T>('api/get-common-data/');
}

import { Api } from './Api';

export class CommonApi {
  static getData = <T>() => Api.get<T>('api/get-common-data/');
}

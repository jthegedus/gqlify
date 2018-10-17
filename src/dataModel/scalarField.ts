import Field from './field';
import { GraphqlType } from './type';

export default class ScalarField extends Field {
  constructor({
    name,
    type,
    nonNull,
    list,
    nonNullItem,
    unique,
    readOnly,
    autoGen,
  }: {
    name: string,
    type: GraphqlType,
    nonNull?: boolean,
    list?: boolean,
    nonNullItem?: boolean,
    unique?: boolean,
    readOnly?: boolean,
    autoGen?: boolean,
  }) {
    super({
      name,
      type,
      nonNull,
      list,
      nonNullItem,
      unique,
      readOnly,
      autoGen,
    });
  }
}

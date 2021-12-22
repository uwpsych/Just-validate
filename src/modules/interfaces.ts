export interface GlobalConfigInterface {
  errorFieldStyle: Partial<CSSStyleDeclaration>;
  errorFieldCssClass: string;
  errorLabelStyle: Partial<CSSStyleDeclaration>;
  errorLabelCssClass: string;
  lockForm: boolean;
  testingMode: boolean;
  focusInvalidField?: boolean;
  tooltip?: TooltipConfigInterface;
}

export enum Rules {
  Required = 'required',
  Email = 'email',
  MinLength = 'minLength',
  MaxLength = 'maxLength',
  Password = 'password',
  Number = 'number',
  MaxNumber = 'maxNumber',
  MinNumber = 'minNumber',
  StrongPassword = 'strongPassword',
  CustomRegexp = 'customRegexp',
}

export type TooltipPositionType = 'left' | 'top' | 'right' | 'bottom';

export interface TooltipConfigInterface {
  position: TooltipPositionType;
}

export enum GroupRules {
  Required = 'required',
}

type ValidatorReturn = boolean | (() => Promise<boolean>);

export interface FieldRuleInterface {
  rule?: Rules;
  errorMessage?: string;
  validator?: (
    value: string | boolean,
    context: FieldsInterface
  ) => ValidatorReturn;
  value?: number | string | RegExp;
}

export interface GroupRuleInterface {
  rule?: GroupRules;
  errorMessage?: string;
}

export interface FieldConfigInterface
  extends Partial<
    Pick<
      GlobalConfigInterface,
      | 'errorFieldStyle'
      | 'errorFieldCssClass'
      | 'errorLabelStyle'
      | 'errorLabelCssClass'
      | 'tooltip'
    >
  > {}

export interface FieldInterface {
  rules: FieldRuleInterface[];
  elem: HTMLInputElement;
  isValid?: boolean;
  errorMessage?: string;
  config?: FieldConfigInterface;
}

export type GroupFieldType = 'radio' | 'checkbox';

export interface GroupFieldInterface {
  type: GroupFieldType;
  rules: GroupRuleInterface[];
  groupElem: HTMLElement;
  elems: HTMLInputElement[];
  isValid?: boolean;
  isDirty: boolean;
  errorMessage?: string;
  config?: FieldConfigInterface;
}

export interface FieldsInterface {
  [field: string]: FieldInterface;
}

export interface GroupFieldsInterface {
  [groupField: string]: GroupFieldInterface;
}

export interface EventListenerInterface {
  type: string;
  elem: HTMLInputElement | Document | HTMLFormElement;
  func: (ev: Event) => void;
}

export interface LocaleDictInterface {
  [localeKey: string]: string;
}

export interface LocaleInterface {
  key: string;
  dict: LocaleDictInterface;
}

export enum CustomStyleTagIds {
  Label = 'label',
  LabelArrow = 'labelArrow',
}

export interface TooltipInstance {
  refresh: () => void;
}

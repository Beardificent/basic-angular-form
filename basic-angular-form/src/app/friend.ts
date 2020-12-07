export class Friend {
  private _firstName: string;
  private _lastName: string;
  private _email: string;
  private _phoneNumber: number;
  private _language: object;


  constructor(firstName: string, lastName: string, email: string, phoneNumber: number, language: object) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
    this._phoneNumber = phoneNumber;
    this._language = language;
  }


  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get phoneNumber(): number {
    return this._phoneNumber;
  }

  set phoneNumber(value: number) {
    this._phoneNumber = value;
  }

  get language(): object {
    return this._language;
  }

  set language(value: object) {
    this._language = value;
  }
}

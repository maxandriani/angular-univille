export interface UserEntity {
  id: number;

  creationTime?: Date;
  emailAddress: string;
  fullName: string;
  isActive: boolean;
  lastLoginTime?: Date;
  name: string;
  roleNames: Array<string>;
  surname: string;
  userName: string;
}

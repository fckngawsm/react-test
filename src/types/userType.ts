export type UserType = {
  readonly id: number;
  readonly password?: string | null;
  readonly email: string;
  name: string;
  lastname: string;
  isAdmin: boolean;
  token: string;
};

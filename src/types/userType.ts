export type UserType = {
  readonly id: number;
  name: string;
  lastname: string;
  email: string;
  isAdmin: boolean;
  password?: string | null;
};

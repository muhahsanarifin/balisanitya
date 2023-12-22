// Auth API
export type registerBody = {
  username: string;
  bu_email: string;
  bu_password: string;
  bu_confirmPassword: string;
  bu_role: string;
};

export type loginBody = {
  bu_email: string;
  bu_password: string;
};

// Token
export type token = string;

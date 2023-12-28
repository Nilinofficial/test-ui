export interface dashboardDataType {
  key: number;
  projectName: string;
  fixableIssues: FixableIssue[];
  actions: string;
}

export interface FixableIssue {
  value: number;
  situation: string;
}

export interface DashboardLink {
  id: number;
  name: string;
  icon: any;
  route?: string;
}

export interface reportDataType {
  key: React.Key;
  score: number;
  issueType: any;
  issue: string;
  cve: string;
  cwe: string;
  project: string;
  exploitMaturity: any;
  autoFixable: any;
  introduced: any;
  matterbayProduct: any;
}

export type registerFormData = {
  email: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  password: string;
  confirmPassword: string;
  receiveMails: boolean;
  otp: string;
  planStatus:number;
};

export type loginFormData = {
  email: string;
  password: string;
  otp:string
};

export type checkoutFormData = {
  firstName: string;
  lastName: string;
  companyName: string;
  companyWebsiteURL: string;
  email: string;
  mobileNumber: string;
  addressline1: string;
  addressline2: string;
  city: string;
  zipCode: string;
  country: string;
  state: string;
};

export type changePasswordFormData = {
  password: string;
  confirmPassword: string;
};

export type userDetailsFormData = {
  companyName: string;
  website: string;
  guestLogin: string;
  guestPassword: string;
  environment: string;
  preferredTime: string;
};

import { progressStatus } from "../progressStatus"

export interface UserObject{
  id: string, 
  name: string,
  email: string,
  createdAt: Date,
  updatedAt: Date,
  access_token: string,
  refresh_token: string,
  token_expiry: Date,
  received_applications: number
}

/** For failed forms: */
export enum FormError {
  JOB_TITLE = "Job Title",
  COMPANY_NAME = "Company Name",
  LOCATION = "Location",
  PROGRESS = "Progress"
}

export interface UserFailedForms{
  FailedForms: FailedForm[]
}

export interface FailedForm {
  email: string,
  changed_portion: FormError,
  progress_expected?: progressStatus,
  progress_actual?: progressStatus
}

export interface Form{
  companyName: string,
  jobTitle: string,
  location: string,
  progressStatus: progressStatus,
  email: string,
  formId: string, // unique identifier for the form
  createdAt: Date,
  updatedAt: Date
}


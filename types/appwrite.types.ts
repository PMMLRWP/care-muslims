import { Models } from "node-appwrite";
import { Gender, Status } from ".";

export interface Members extends Models.Document {
  userId: string;
  name: string;
  email: string;
  phone: string;
  father_husband_name: string;
  gender: Gender;
  religion: string | undefined;
  cnic: any;
  age: any;
  address: string
  uc_nc_vc: string;
  ward: string;
  block_code: string;
  na_pp: string;
  District: string;
  Education: string;
  Blood_Gp: string;
  occupation: string;
  phone_no: string;
  privacyConsent: boolean;
}

export interface Appointment extends Models.Document {
  member: Members;
  schedule: Date;
  status: Status;
  primaryPhysician: string;
  reason: string;
  note: string;
  userId: string;
  cancellationReason: string | null;
}
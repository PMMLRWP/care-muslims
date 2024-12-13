/* eslint-disable no-unused-vars */

import { string } from "zod";

declare type SearchParamProps = {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };
  
  declare type Gender = "Male" | "Female" | "Other";
  declare type Status = "pending" | "scheduled" | "cancelled";
  
  declare interface CreateUserParams {
    name: string;
    email: string;
    phone: string;
  }
  declare interface User extends CreateUserParams {
    $id: string;
  }
  
  declare interface RegisterUserParams extends CreateUserParams {
    userId: string;
    date: Date;
    father_husband_name: string;
    gender: Gender;
    religion: string | undefined;
    cnic: integer;
    age: integer;
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

  };
  
//   declare type CreateAppointmentParams = {
//     userId: string;
//     patient: string;
//     primaryPhysician: string;
//     reason: string;
//     schedule: Date;
//     status: Status;
//     note: string | undefined;
//   };
  
//   declare type UpdateAppointmentParams = {
//     appointmentId: string;
//     userId: string;
//     appointment: Appointment;
//     type: string;
//   };
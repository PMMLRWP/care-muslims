
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomForm from "../ui/CustomForm"
import SubmitButton from "../ui/SubmitButton"
import { useState } from "react"
import { UserFormValidaton } from "@/lib/validation"
import { useRouter } from "next/navigation"
import { createUser } from "@/lib/actions/member.actions"
import Image from "next/image"
import { User } from "@/types"
import { FormFieldType } from "./PForm"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { GenderOptions } from "@/constants"
import { Label } from "@radix-ui/react-label"




const RegisterForm = ({ user }: { user: User }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);


    // 1. Define your form.


    const form = useForm<z.infer<typeof UserFormValidaton>>({
        resolver: zodResolver(UserFormValidaton),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
    })

    // 2. Define a submit handler.
    async function onSubmit({ name, email, phone }: z.infer<typeof UserFormValidaton>) {
        setIsLoading(true);

        try {
            const userData = { name, email, phone };

            const user = await createUser(userData);
            console.log(user);

            if (user) router.push(`/members/${user.$id}/register`)

        } catch (error) {
            console.log(error)
        }
        setIsLoading(false);

    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12 flex-1 text-white ">
                <section className="mb-12 space-y-4">
                    <h1 className="header text-6xl">Aitkaf Registration Form 👋</h1>
                    <p className="text-dark-700 text-3xl">Let us know more about yourself</p>
                </section>

                <section className="space-y-1">
                    <div className="mb-9 space-y-1">
                        <h2 className="sub-header text-white text-2xl">Personal Information</h2>
                    </div>
                </section>

                <CustomForm
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="name"
                    label="Full name"
                    placeholder="Abdul Qudoos"
                    // iconSrc=""
                    // iconSrc="/assets/logo/pmml-logo.svg"
                    iconAlt="user"
                />
                {/* Father/Husband name and Religion */}
                <div className="flex flex-col gap-6 xl:flex-row">
                    {/* Custom Form Input the information  */}

                    <CustomForm
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="father_husband_name"
                        label="Father / Husband Name"
                        // placeholder="mediateamrwp@gmail.com"
                        // iconSrc=""
                        // iconSrc="/assets/logo/pmml-logo.svg"
                        iconAlt="email"
                    />

                    <CustomForm
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="religion"
                        label="Religion"
                        placeholder="Islam"
                        // iconSrc=""
                        // iconSrc="/assets/logo/pmml-logo.svg"
                        iconAlt="email"
                    />


                </div>


                {/* BirthDate & Gender */}
                <div className="flex flex-col gap-6 xl:flex-row bg-red-300">
                    <CustomForm
                        fieldType={FormFieldType.DATE_PICKER}
                        control={form.control}
                        name="birthDate"
                        label="Date of birth"
                
                    />

                    <CustomForm
                        fieldType={FormFieldType.SKELETON}
                        control={form.control}
                        name="gender"
                        label="Gender"
                        renderSkeleton={(field) => (
                            <FormControl>
                                <RadioGroup
                                    className="flex h-11 gap-6 xl:justify-between"
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    {GenderOptions.map((option, i) => (
                                        <div key={option + i} className="radio-group">
                                            <RadioGroupItem value={option} id={option} />
                                            <Label htmlFor={option} className="cursor-pointer">
                                                {option}
                                            </Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        )}
                    />
                </div>


                {/* CNIC and Age  */}

                <div className="flex flex-col gap-6 xl:flex-row">
                    {/* Custom Form Input the information  */}

                    <CustomForm
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="cnic"
                        label="CNIC"
                        placeholder="CNIC"
                    />

                    <CustomForm
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="age"
                        label="Age"
                        placeholder="Age "
                    />
                </div>

                {/* Address */}

                <div className="flex flex-col gap-6 xl:flex-row">
                    {/* Custom Form Input the information  */}

                    <CustomForm
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="address"
                        label="Addres"
                        placeholder="Address"
                    />
                </div>

                {/* UC/NC/VC and Ward No  */}

                <div className="flex flex-col gap-6 xl:flex-row">
                    {/* Custom Form Input the information  */}

                    <CustomForm
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="block_code"
                        label="Block Code"
                        placeholder="Block Code"
                    />

                    <CustomForm
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="na_pp"
                        label="National / Parlimany Assembly"
                        placeholder="National / Parlimany Assembly "
                    />

                    <CustomForm
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="District"
                        label="District"
                        placeholder="District "
                    />
                </div>

                {/* Education and Blood Group */}
                <div className="flex flex-col gap-6 xl:flex-row">
                    {/* Custom Form Input the information  */}
                    <CustomForm
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="Education"
                        label="Education"
                        placeholder="Education"
                    />
                    <CustomForm
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="Blood_Gp"
                        label="Blood Group"
                        placeholder="Blood Group"
                    />
                </div>


                {/* Occupation and Phone no */}
                <div className="flex flex-col gap-6 xl:flex-row">
                    {/* Custom Form Input the information  */}
                    <CustomForm
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="occupation"
                        label="Occupation"
                        placeholder="Occupation"
                    />
                    <CustomForm
                        fieldType={FormFieldType.PHONE_INPUT}
                        control={form.control}
                        name="phone"
                        label="Phone number"
                        placeholder="+923032476951"
                    />
                </div>




                <SubmitButton isLoading={isLoading}> Get Started </SubmitButton>
            </form>
        </Form>
    )
}

export default RegisterForm
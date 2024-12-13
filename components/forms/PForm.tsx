
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

export enum FormFieldType {
    INPUT = 'input',
    TEXTAREA = 'textarea',
    PHONE_INPUT = 'phoneInput',
    CHECKBOX = 'checkbox',
    DATE_PICKER = 'datePicker',
    SELECT = 'select',
    SKELETON = 'skeleton',
}


const ProfileForm = () => {
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

            if(user) router.push(`/members/${user.$id}/register`)

        } catch (error) {
            console.log(error)
        }
        setIsLoading(false);
    
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
                <section className="mb-12 space-y-4">
                    <h1 className="header text-6xl">Welcome 👋</h1>
                    <p className="text-dark-700 text-3xl">Get Registered</p>


                </section>

                {/* <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                /> */}

                {/* Custom Form Input the information  */}
                <CustomForm
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="name"
                    label="Full name"
                    placeholder="Abdul Qudoos"
                    // iconSrc=""
                    iconSrc="assets/logo/pmml-logo.svg"
                    iconAlt="user"
                />

                <CustomForm
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="email"
                    label="Email"
                    placeholder="mediateamrwp@gmail.com"
                    // iconSrc=""
                    iconSrc="assets/logo/pmml-logo.svg"
                    iconAlt="email"
                />

                <CustomForm
                    fieldType={FormFieldType.PHONE_INPUT}
                    control={form.control}
                    name="phone"
                    label="Phone number"
                    placeholder="+923032476951"
                />




                <SubmitButton isLoading={isLoading}> Get Started </SubmitButton>
            </form>
        </Form>
    )
}

export default ProfileForm
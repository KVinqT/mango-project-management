"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema } from "@/lib/formSchemas";
import { z } from "zod";
import { Button } from "../buttons/Button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from "./Form";
import { Input } from "../input";
import { useForm } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "../radio/Radio";
import UsageSelect from "../select/UsageSelect";
import CarrierSelect from "../select/CarrierSelect";
import { useRouter } from "next/navigation";

const CreateAccountForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      userName: "",
      phoneNumber: "",
      gender: undefined,
      dateOfBirth: "",
      useMangoFor: "",
      carrier: "",
    },
  });

  //user register form submit handler
  function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log("submitted values", values);
  }

  return (
    <div className="min-w-[70%] m-auto mt-[40px] border rounded-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-10">
          <div className="flex justify-around">
            {/* user name field */}
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem className="archivo-font">
                  <FormLabel className="raleway-font font-semibold">
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter username" {...field} />
                  </FormControl>
                  <FormDescription className="">
                    This is your mango account username.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* phone number field*/}
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="archivo-font">
                  <FormLabel className="raleway-font font-semibold">
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter phone number" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your current phone number.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* date of birth field*/}
            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem className="archivo-font">
                  <FormLabel className="raleway-font font-semibold">
                    Date of birth
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="YYYY/MM/DD" {...field} />
                  </FormControl>
                  <FormDescription>This is your birthday date.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col ml-8">
            {/* carrier field */}
            <CarrierSelect form={form} />
            <br />
            {/* why use mango field */}
            <UsageSelect form={form} />
          </div>
          {/* gender field */}
          <div className="ml-8">
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="space-y-3 archivo-font">
                  <FormLabel className="raleway-font font-semibold">
                    Gender
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="male" />
                        </FormControl>
                        <FormLabel className="font-normal">Male </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="female" />
                        </FormControl>
                        <FormLabel className="font-normal">Female</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="archivo-font font-semibold mt-6"
              onClick={() => {
                router.replace("/work-space");
              }}
            >
              Create account
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateAccountForm;

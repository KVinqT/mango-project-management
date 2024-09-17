import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./Select";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormControl,
  FormDescription,
  FormMessage,
} from "../form/Form";

const CarrierSelect = ({
  form,
}: {
  form: UseFormReturn<
    {
      userName: string;
      phoneNumber: string;
      gender: "male" | "female";
      dateOfBirth: string;
      useMangoFor: string | null;
      carrier: string;
    },
    any,
    undefined
  >;
}) => {
  return (
    <>
      <FormField
        control={form.control}
        name="carrier"
        render={({ field }) => (
          <FormItem className="archivo-font">
            <Select onValueChange={field.onChange}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select who you are" />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="archivo-font">
                <SelectItem value="Student">Student</SelectItem>
                <SelectItem value="Office Employee">Office Employee</SelectItem>
                <SelectItem value="UI/UX Designer">UI/UX Designer</SelectItem>
                <SelectItem value="Software Engineer">
                  Software Engineer
                </SelectItem>
                <SelectItem value="Software Tester">Software Tester</SelectItem>
                <SelectItem value="Data Analyst">Data Analyst</SelectItem>
                <SelectItem value="Project Manager">Project Manager</SelectItem>
                <SelectItem value="Frontend Developer">
                  Frontend Developer
                </SelectItem>
                <SelectItem value="Backend Developer">
                  Backend Developer
                </SelectItem>
                <SelectItem value="Android Developer">
                  Android Developer
                </SelectItem>
                <SelectItem value="IOS Developer">IOS Developer</SelectItem>
                <SelectItem value="Tech Lead">Tech Lead</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
            <FormDescription>Please select your field</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default CarrierSelect;

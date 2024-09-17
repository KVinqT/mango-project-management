import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./Select";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "../form/Form";
import { UseFormReturn } from "react-hook-form";

const UsageSelect = ({
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
        name="useMangoFor"
        render={({ field }) => (
          <FormItem className="archivo-font">
            <Select onValueChange={field.onChange}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select why use mango for" />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="archivo-font">
                <SelectItem value="Educational purpose">
                  Educational purpose
                </SelectItem>
                <SelectItem value="Business purpose">
                  Business purpose
                </SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
            <FormDescription>
              Let us know why you want to use mango.{" "}
              <span className="text-red-500">(Optional)</span>
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default UsageSelect;

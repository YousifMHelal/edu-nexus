"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { TeacherValidation } from "@/lib/validation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ChangeEvent, useState } from "react";

interface TeacherData {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  bloodType: string;
  birthday: string | Date;
  sex: "male" | "female";
  img?: string | File;
}

type Inputs = z.infer<typeof TeacherValidation>;

const TeacherForm = ({
  type,
  data,
}: {
  type: "create" | "update" | "delete";
  data?: TeacherData;
}) => {
  const [selectedImage, setSelectedImage] = useState<File | undefined>(
    undefined
  );

  const form = useForm<Inputs>({
    resolver: zodResolver(TeacherValidation),
    defaultValues: {
      username: data?.username || "",
      email: data?.email || "",
      password: "",
      firstName: data?.firstName || "",
      lastName: data?.lastName || "",
      phone: data?.phone || "",
      address: data?.address || "",
      bloodType: data?.bloodType || "A",
      birthday: data?.birthday ? new Date(data.birthday) : undefined,
      sex: data?.sex || "male",
      img: undefined,
    },
  });

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      form.setValue("img", file); // set file in form state
    }
  };

  const onSubmit = form.handleSubmit((values) => {
    const formData = new FormData();
    formData.append("username", values.username);
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("firstName", values.firstName);
    formData.append("lastName", values.lastName);
    formData.append("phone", values.phone);
    formData.append("address", values.address);
    formData.append("bloodType", values.bloodType);
    formData.append("birthday", values.birthday.toString());
    formData.append("sex", values.sex);
    if (selectedImage) {
      formData.append("img", selectedImage);
    }

    // Handle form submission logic here
    console.log(values); // replace this with actual submission logic
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-8">
        <h1 className="text-xl font-semibold">
          {type === "create" ? "Create a new teacher" : "Edit teacher details"}
        </h1>

        {/* Authentication Information */}
        <span className="text-xs text-muted-foreground font-medium">
          Authentication Information
        </span>
        <div className="flex flex-wrap gap-x-20 gap-y-4">
          {/* Username */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="w-full md:w-5/12">
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full md:w-5/12">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full md:w-5/12">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Personal Information */}
        <span className="text-xs text-muted-foreground font-medium">
          Personal Information
        </span>
        <div className="flex flex-wrap gap-x-20 gap-y-4">
          {/* First Name */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full md:w-5/12">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Last Name */}
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full md:w-5/12">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full md:w-5/12">
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="+123456789" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Address */}
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="w-full md:w-5/12">
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="123 Main St." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Blood Type */}
          <FormField
            control={form.control}
            name="bloodType"
            render={({ field }) => (
              <FormItem className="w-full md:w-5/12">
                <FormLabel>Blood Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select blood type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="A">A</SelectItem>
                    <SelectItem value="B">B</SelectItem>
                    <SelectItem value="AB">AB</SelectItem>
                    <SelectItem value="O">O</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Birthday */}
          <FormField
            control={form.control}
            name="birthday"
            render={({ field }) => (
              <FormItem className="w-full md:w-5/12">
                <FormLabel>Birthday</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Sex */}
          <FormField
            control={form.control}
            name="sex"
            render={({ field }) => (
              <FormItem className="w-full md:w-5/12">
                <FormLabel>Sex</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select sex" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Upload Image */}
          <FormField
            control={form.control}
            name="img"
            render={() => (
              <FormItem className="w-full md:w-5/12">
                <FormLabel>Upload a Photo</FormLabel>
                <label className="cursor-pointer flex items-center gap-2">
                  <Image
                    src="/upload.png"
                    alt="Upload icon"
                    width={24}
                    height={24}
                  />
                  <span>Upload Image</span>
                  <Input
                    type="file"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </label>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" className="text-white py-4 px-20 rounded-md">
          {type === "create" ? "Create" : "Update"}
        </Button>
      </form>
    </Form>
  );
};

export default TeacherForm;

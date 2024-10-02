"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import TeachersForm from "./forms/TeachersForm";
import StudentForm from "./forms/StudentForm";

interface TeacherData {
  id: number;
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  bloodType: string;
  birthday: string;
  sex: "male" | "female";
  img?: string | File;
}

interface StudentData {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  bloodType: string;
  birthday: string | Date;
  sex: "male" | "female";
  img?: File;
}

type FormModalProps = {
  table: "teacher" | "student" | "parent" | "class";
  type: "create" | "update" | "delete";
  data?: TeacherData | StudentData;
};

const FormModal = ({ table, type, data }: FormModalProps) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          {type === "create" ? (
            <Image
              src="/plus.png"
              alt="Add"
              width={16}
              height={16}
              className="cursor-pointer"
            />
          ) : (
            <Image
              src="/update.png"
              alt="Update"
              width={16}
              height={16}
              className="cursor-pointer"
            />
          )}
        </DialogTrigger>
        <DialogContent className="p-4 rounded-md max-h-[80%] max-w-[800px] w-11/12 overflow-auto">
          <DialogHeader>
            {table === "teacher" && (
              <TeachersForm type={type} data={data as TeacherData} />
            )}
            {table === "student" && (
              <StudentForm type={type} data={data as StudentData} />
            )}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FormModal;

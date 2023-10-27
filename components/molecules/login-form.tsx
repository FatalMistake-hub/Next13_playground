/* eslint-disable react-hooks/rules-of-hooks */

import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import axios from "axios";
import React, { FormEvent, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { signIn, signOut, useSession } from "next-auth/react";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { ReloadIcon } from "@radix-ui/react-icons";
import { SafeUser } from "@/app/types";
import { DefaultSession } from "next-auth";
interface UserMenuProps {
  // currentUser?: SafeUser | null;
  session?: DefaultSession | null;
}

const LoginForm: React.FC<UserMenuProps> = ({ session }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const registerForm = (defaultValues: {}) => {
    const { register, formState, handleSubmit } =
      useForm<FieldValues>(defaultValues);
    return { register, formState, handleSubmit };
  };
  const { toast } = useToast();
  const router = useRouter();
  const forms = {
    login: registerForm({
      email: "",
      password: "",
    }),
    register: registerForm({
      email: "",
      password: "",
      name: "",
    }),
  };
  const handleRegister: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then((res) => {
        toast({
          description: "Account created successfully",
          variant: "success",
          duration: 5000,
        });

        signIn("credentials", {
          ...data,
          redirect: false,
        }).then((res) => {
          if (res?.ok) {
            setOpen(false);
            router.push("/listings");
            toast({
              description: "Logged in successfully!",
              variant: "success",
              duration: 5000,
            });
          } else {
            toast({
              title: "Register failed",
              description: "Something went wrong!",
              variant: "destructive",
              duration: 5000,
            });
          }
        });
      })
      .catch((err) => {
        toast({
          variant: "destructive",
          duration: 5000,
          description:
            err.response.data.message ||
            err.response.data.error ||
            err.message ||
            "Something went wrong",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleLogin: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((res) => {
      setIsLoading(false);
      if (res?.ok) {
        setOpen(false);
        toast({
          title: "Login success",
          description: "You are now logged in",
          variant: "success",
          duration: 5000,
        });
        router.push("/listings");
        setOpen(false);
      } else {
        toast({
          title: "Login failed",
          description: "Please check your email and password",
          variant: "destructive",
          duration: 5000,
        });
      }
    });
  };
  return session ? (
    <Button
      variant={"destructive"}
      onClick={() => {
        setIsLoading(true);
        signOut({ redirect: false }).then(() => {
          setIsLoading(false);
          router.push("/");
        });
      }}
    >
      {isLoading ? (
        <>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin-slow" />
          Please wait...
        </>
      ) : (
        "Logout"
      )}
    </Button>
  ) : (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="space-y-1">
          <DialogTitle className="text-2xl">Login</DialogTitle>
          <DialogDescription>
            Enter email and password to login your account
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="account" className="grid gap-4 py-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Login</TabsTrigger>
            <TabsTrigger value="password">Register</TabsTrigger>
          </TabsList>
          <form onSubmit={forms.login.handleSubmit(handleLogin)}>
            <TabsContent value="account">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  {...forms.login.register("email", { required: true })}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  {...forms.login.register("password", { required: true })}
                />
              </div>
              <div className="space-y-1 pt-8 flex justify-end">
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <ReloadIcon className="mr-2 h-4 w-4 animate-spin-slow" />
                      Please wait...
                    </>
                  ) : (
                    "Login"
                  )}
                </Button>
              </div>
            </TabsContent>
          </form>
          <form onSubmit={forms.register.handleSubmit(handleRegister)}>
            <TabsContent value="password">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  {...forms.register.register("name", { required: true })}
                  id="name"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  {...forms.register.register("email", { required: true })}
                  id="email"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  {...forms.register.register("password", { required: true })}
                  id="password"
                  type="password"
                />
              </div>
              <div className="space-y-1 pt-8 flex justify-end">
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                      Please wait...
                    </>
                  ) : (
                    "Register"
                  )}
                </Button>
              </div>
            </TabsContent>
          </form>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
export default LoginForm;

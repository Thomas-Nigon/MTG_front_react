import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { MdOutlineMailOutline, MdLockOutline } from "react-icons/md";
import { loginUser } from "@/lib/login";
import { Link } from "react-router-dom";

export default function LoginComponent() {
  const formSchema = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/\d/, { message: "Password must contain at least one number" })
      .regex(/[\W_]/, {
        message: "Password must contain at least one special character",
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("on submit,", values);
    const user = {
      email: values.email,
      password: values.password,
    };
    try {
      const response = await loginUser(user);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    console.log(user);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <article className="flex items-center gap-2 text-3xl">
                    <Input
                      type="email"
                      placeholder="Enter your email..."
                      {...field}
                    />
                    <MdOutlineMailOutline />
                  </article>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <article className="flex items-center gap-2 text-3xl">
                    <Input type="password" placeholder="Password" {...field} />
                    <MdLockOutline />
                  </article>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>

      <p className="mt-5">
        Need an account? click
        <Link className="underline text-primary" to="/register">
          here
        </Link>
      </p>
    </>
  );
}

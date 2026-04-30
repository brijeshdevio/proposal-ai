import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useRegisterFacade } from "@/features/auth/auth.hooks";
import { Link } from "react-router-dom";

export default function Register() {
  const { register, handleSubmit, submit, errors, isPending } =
    useRegisterFacade();

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="text-center">
          <h1 className="text-2xl font-bold">Create an account</h1>
          <p className="text-muted-foreground">
            Join high performance freelancer today.
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <form className="space-y-3" onSubmit={handleSubmit(submit)}>
          <Input
            label="Full Name"
            placeholder="John Doe"
            {...register("name")}
            error={errors.name}
          />
          <Input
            label="Email Address"
            type="email"
            placeholder="lX5Zs@example.com"
            {...register("email")}
            error={errors.email}
          />
          <Input
            label="Password"
            type="password"
            placeholder="*********"
            {...register("password")}
            error={errors.password}
          />
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label className="text-muted-foreground" htmlFor="terms">
              I agree to the{" "}
              <span className="text-primary hover:underline">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-primary hover:underline">
                Privacy Policy
              </span>{" "}
              .
            </label>
          </div>
          <Button type="submit" className="btn w-full" isLoading={isPending}>
            Create Account
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        <div className="mx-auto">
          <p>
            Already have an account?
            <Link to="/login" className="text-primary hover:underline">
              {" "}
              Log in
            </Link>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}

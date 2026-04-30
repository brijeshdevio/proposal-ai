import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useLoginFacade } from "@/features/auth/auth.hooks";

export default function Login() {
  const { handleSubmit, submit, register, errors, isPending } =
    useLoginFacade();

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="text-center">
          <h1 className="text-2xl font-bold">Welcome back </h1>
          <p className="text-muted-foreground">
            Join high performance freelancer today.
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <form className="space-y-3" onSubmit={handleSubmit(submit)}>
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
            leftEle={
              <Link
                to="/forgot-password"
                className="text-primary hover:underline"
              >
                Forgot password?
              </Link>
            }
            {...register("password")}
            error={errors.password}
          />
          <Button type="submit" className="btn w-full" isLoading={isPending}>
            Log in
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        <div className="mx-auto">
          <p>
            Don&apos;t have an account?
            <Link to="/register" className="text-primary hover:underline">
              {" "}
              Sign up
            </Link>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}

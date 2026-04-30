import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthService } from "./auth.service";
import {
  LoginSchema,
  RegisterSchema,
  type LoginDto,
  type RegisterDto,
} from "./auth.schema";
import { notifyError, notifySuccess } from "@/utils/notify";
import { errorTransform } from "@/utils/error-transform";

// ============ MUTATIONS ============
export const useRegisterMutation = () =>
  useMutation({
    mutationKey: ["auth", "register"],
    mutationFn: AuthService.register,
    onSuccess: notifySuccess,
    onError: notifyError,
  });

export const useLoginMutation = () =>
  useMutation({
    mutationKey: ["auth", "login"],
    mutationFn: AuthService.login,
    onSuccess: () => {
      window.location.href = "/dashboard";
    },
    onError: notifyError,
  });

export const useLogoutMutation = () =>
  useMutation({
    mutationKey: ["auth", "logout"],
    mutationFn: AuthService.logout,
    onSuccess: notifySuccess,
    onError: notifyError,
  });

// ============ FACADE ============
export const useRegisterFacade = () => {
  const { mutate, isPending, error } = useRegisterMutation();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterDto>({
    resolver: zodResolver(RegisterSchema),
  });

  function submit(data: RegisterDto) {
    mutate(data);
  }

  return {
    submit,
    isPending,
    register,
    handleSubmit,
    errors: errorTransform(errors, error),
  };
};

export const useLoginFacade = () => {
  const { mutate, isPending, error } = useLoginMutation();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginDto>({
    resolver: zodResolver(LoginSchema),
  });

  function submit(data: LoginDto) {
    mutate(data);
  }

  return {
    submit,
    isPending,
    register,
    handleSubmit,
    errors: errorTransform(errors, error),
  };
};

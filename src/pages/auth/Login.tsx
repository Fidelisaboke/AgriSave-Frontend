import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, Leaf, Cloud, Droplets, Eye, EyeClosed } from 'lucide-react';
import { loginSchema, type LoginCredentials} from '@/schemas/login';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isLoading } = useAuth();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  interface LocationState {
    from?: {
      pathname?: string;
    };
  }

  const from = (location.state as LocationState)?.from?.pathname || '/dashboard';

  const processLogin = async (data: LoginCredentials) => {
    try {
      await login(data);
      navigate(from, { replace: true });
    } catch {
      // Error handled by AuthContext
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 p-4">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Leaf className="absolute top-20 left-10 text-emerald-200 w-16 h-16 animate-pulse" />
        <Cloud className="absolute top-40 right-20 text-teal-200 w-20 h-20 opacity-50" />
        <Droplets className="absolute bottom-32 left-1/4 text-blue-200 w-12 h-12" />
        <Leaf className="absolute bottom-20 right-1/3 text-green-200 w-14 h-14 rotate-45" />
      </div>

      <Card className="w-full max-w-md shadow-2xl border-emerald-100 relative z-10 bg-white/95 backdrop-blur">
        <CardHeader className="space-y-3 text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
            <Leaf className="w-9 h-9 text-white" />
          </div>
          <CardTitle className="p-1 text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Welcome to AgriSave!
          </CardTitle>
          <CardDescription className="text-base text-gray-700">
            Sign in to access your climate resilience dashboard
          </CardDescription>
        </CardHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(processLogin)}>
            <CardContent className="space-y-4">
              {/* Username */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-emerald-900 font-medium">Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your username"
                        className="border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-sm text-destructive" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-emerald-900 font-medium">Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="••••••••"
                          className="border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500"
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-400 hover:text-emerald-600 focus:outline-none"
                          tabIndex={-1}
                        >
                          {showPassword ? <Eye /> : <EyeClosed />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-sm text-destructive" />
                  </FormItem>
                )}
              />
            </CardContent>
          </form>
        </Form>
        <CardFooter className="flex flex-col gap-3">
          <Button
            className="w-full bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500"
            onClick={form.handleSubmit(processLogin)}
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : null}
            Sign In
          </Button>
          <p className="text-sm text-center text-emerald-700">
            Don't have an account?{' '}
            <Link
              to="/register"
              className="text-emerald-600 hover:underline font-medium"
            >
              Sign Up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
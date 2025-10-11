import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Loader2, Leaf, Sprout, Sun } from 'lucide-react';
import { registerSchema, type RegisterData } from '@/schemas/register';
import { LocationAutocomplete } from '@/components/ui/LocationAutocomplete';

export default function Register() {
  const navigate = useNavigate();
  const { register: registerUser, isLoading } = useAuth();

  // Form state
  const form = useForm<RegisterData>({
    resolver: zodResolver(registerSchema) as any,
    defaultValues: {
      email: '',
      username: '',
      password: '',
      password2: '',
      first_name: '',
      last_name: '',
      phone_number: '',
      location: '',
      farm_size: 0,
    }
  });

  const processRegistration = async (data: RegisterData) => {
    try {
      await registerUser(data);
      navigate('/dashboard', { replace: true });
    } catch {
      // Error handled by AuthContext
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 p-4">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Sprout className="absolute top-20 right-10 text-emerald-200 w-16 h-16 animate-pulse" />
        <Sun className="absolute top-1/4 left-10 text-yellow-200 w-20 h-20 opacity-50" />
        <Leaf className="absolute bottom-32 right-1/4 text-teal-200 w-12 h-12" />
        <Sprout className="absolute bottom-20 left-1/3 text-green-200 w-14 h-14 rotate-12" />
      </div>

      <Card className="w-full max-w-md shadow-2xl border-emerald-100 relative z-10 bg-white/95 backdrop-blur">
        <CardHeader className="space-y-3 text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
            <Leaf className="w-9 h-9 text-white" />
          </div>
          <CardTitle className="p-1 text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Join AgriSave
          </CardTitle>
          <CardDescription className="text-base">
            Create your account and start building climate resilience!
          </CardDescription>
        </CardHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(processRegistration)}>
            <CardContent className="space-y-4">

              {/* First and Last Name Fields Side by Side */}
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-emerald-900 font-medium">First Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John"
                          className="border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-destructive mt-1" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-emerald-900 font-medium">Last Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Doe"
                          className="border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-destructive mt-1" />
                    </FormItem>
                  )}
                />
              </div>

              
              {/* Username Field */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-emerald-900 font-medium">Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="johndoe"
                        className="border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-sm text-destructive mt-1" />
                  </FormItem>
                )}
              />


              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-emerald-900 font-medium">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        className="border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-sm text-destructive mt-1" />
                  </FormItem>
                )}
              />


              {/* Phone Number Field */}
              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-emerald-900 font-medium">Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="+254 712 345 678"
                        className="border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-sm text-destructive mt-1" />
                  </FormItem>
                )}
              />


              {/* Location Field */}
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-emerald-900 font-medium">Location</FormLabel>
                    <FormControl>
                      <LocationAutocomplete field={field} />
                    </FormControl>
                    <FormMessage className="text-sm text-destructive mt-1" />
                    <p className="text-xs text-slate-500">
                      Needed for localized climate advisories.
                    </p>
                  </FormItem>
                )}
              />

              {/* Farm Size Field */}
              <FormField
                control={form.control}
                name="farm_size"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-emerald-900 font-medium">Farm Size (in Acres)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="e.g., 5.5"
                        min="0"
                        step="0.1"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-sm text-destructive mt-1" />
                  </FormItem>
                )}
              />

              {/* Password Fields */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-emerald-900 font-medium">Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        className="border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-sm text-destructive mt-1" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-emerald-900 font-medium">Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        className="border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-sm text-destructive mt-1" />
                  </FormItem>
                )}
              />
            </CardContent>
          </form>
        </Form>

        {/* Submit Button and Login Link */}
        <CardFooter className="flex flex-col gap-3">
          <Button
            onClick={form.handleSubmit(processRegistration)}
            disabled={isLoading}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-md"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Creating Account...
              </>
            ) : (
              'Create Account'
            )}
          </Button>
          <div className="text-sm text-slate-600">
            Already have an account?{' '}
            <Link to="/login" className="text-emerald-600 hover:underline font-medium">
              Log in
            </Link>
          </div>
        </CardFooter>
        
      </Card>
    </div>
  );
}

'use client'

import { SIGN_IN_FIELDS } from '@/features/auth/_const'
import { SignInSchema } from '@/features/auth/SignInSchema'
import { PAGE_ROUTES } from '@/shared/_constants/page'
import { Container } from '@/shared/components/Container'
import { Button } from '@/shared/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/shared/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/shared/components/ui/form'
import { Input } from '@/shared/components/ui/input'
import { signIn } from '@/shared/lib/auth-client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

const SignIn = () => {
  const router = useRouter()
  const tCommon = useTranslations('Common')

  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = async (data: z.infer<typeof SignInSchema>) => {
    startTransition(async () => {
      const validatedData = SignInSchema.parse(data)

      await signIn.email(
        {
          email: validatedData.email,
          password: validatedData.password
        },
        {
          onSuccess: () => {
            router.push(PAGE_ROUTES.admin.home)

            toast.success('Success ! You are now connected', {
              action: {
                label: tCommon('close'),
                onClick: () => toast.dismiss()
              }
            })
          },
          onError: () => {
            toast.error('There was an error during sign in.', {
              action: {
                label: tCommon('close'),
                onClick: () => toast.dismiss()
              }
            })
          }
        }
      )
    })
  }

  return (
    <Container className='flex items-center justify-center h-full'>
      <Card className='w-[400px]'>
        <CardHeader>
          <CardTitle>Connexion</CardTitle>
          <CardDescription>
            Entrez vos identifiants pour accéder à votre compte
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <FormField
                control={form.control}
                name={SIGN_IN_FIELDS.email}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder='exemple@email.com' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={SIGN_IN_FIELDS.password}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mot de passe</FormLabel>
                    <FormControl>
                      <Input type='password' placeholder='••••••' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
        <CardFooter className='flex flex-col gap-4'>
          <Button
            className='w-full'
            onClick={form.handleSubmit(onSubmit)}
            disabled={isPending}
          >
            Se connecter
          </Button>
        </CardFooter>
      </Card>
    </Container>
  )
}

export default SignIn

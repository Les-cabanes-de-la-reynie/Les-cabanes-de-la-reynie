'use client'

import { Container } from '@/components/Container'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { postSignIn } from '@/features/auth/infrastructure/actions/signIn'
import { SignInSchema } from '@/features/auth/SignInSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { startTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

const SignIn = () => {
  const tCommon = useTranslations('Common')
  const router = useRouter()

  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = (data: z.infer<typeof SignInSchema>) => {
    startTransition(async () => {
      const res = await postSignIn(data)

      if (res?.validationErrors) {
        toast.error('There was an error during sign in.', {
          action: {
            label: tCommon('close'),
            onClick: () => toast.dismiss()
          }
        })
        return
      }

      if (res?.serverError) {
        toast.error(res.serverError, {
          action: {
            label: tCommon('close'),
            onClick: () => toast.dismiss()
          }
        })
        return
      }

      router.push('/admin')

      toast.success('Success ! You are now connected', {
        action: {
          label: tCommon('close'),
          onClick: () => toast.dismiss()
        }
      })
    })
  }

  return (
    <Container className='flex items-center justify-center'>
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
                name='email'
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
                name='password'
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
          <Button className='w-full' onClick={form.handleSubmit(onSubmit)}>
            Se connecter
          </Button>
        </CardFooter>
      </Card>
    </Container>
  )
}

export default SignIn

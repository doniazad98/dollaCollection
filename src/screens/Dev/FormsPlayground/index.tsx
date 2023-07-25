// import React, { useState } from 'react'
// import { FormProvider, useForm } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup'
// import * as yup from 'yup'
// import type { FieldValues, SubmitHandler } from 'react-hook-form'
// import { View } from 'components/base/View'
// import { FormSubmitButton } from 'components/form/FormSubmitButton'
// import { FormTextInput } from 'components/form/FormTextInput'
// import { FormPasswordInput } from 'components/form/FormPasswordInput'
// import { Text } from 'components/base/Text'
// import styles from 'screens/Dev/FormsPlayground/styles'
// import { FormPasswordRequirements } from 'components/form/FormPasswordRequirements'

// interface FormData extends FieldValues {
//   email: string
//   password: string
//   confirmationPassword: string
// }

// const validationSchema = yup.object().shape({
//   confirmationPassword: yup
//     .string()
//     .required('This field is required')
//     .oneOf([yup.ref('password')], 'Passwords must match'),
//   email: yup.string().email('Invalid email').required('Email is required'),
//   password: yup
//     .string()
//     .required('This field is required')
//     .matches(/[A-Z]+/, 'Password must meet the below conditions')
//     .matches(/[a-z]+/, 'Password must meet the below conditions')
//     .matches(/[0-9]+/, 'Password must meet the below conditions')
//     .matches(/.{8,}/, 'Password must meet the below conditions')
//     .min(8, 'Password must have the below requirements'),
// })

// const FormsPlayground = () => {
//   const [formResult, setFormResult] = useState<SubmitHandler<FormData> | null>(null)
//   const methods = useForm<FormData>({
//     resolver: yupResolver(validationSchema),
//   })

//   const onSubmit = (data: SubmitHandler<FormData>) => {
//     setFormResult(data)
//   }
//   return (
//     <View flex style={styles.container}>
//       <FormProvider {...methods}>
//         <FormTextInput placeholder={'Your e-mail address'} name={'email'} />
//         <FormPasswordInput top={20} placeholder={'Password'} name={'password'} />
//         <FormPasswordRequirements name={'password'} />

//         <FormPasswordInput
//           top={20}
//           placeholder={'Confirm Password '}
//           name={'confirmationPassword'}
//         />
//         <FormSubmitButton top={20} onSubmit={onSubmit} />
//         <View top={40}>
//           <Text variant={'text1'}>{JSON.stringify(formResult)}</Text>
//         </View>
//       </FormProvider>
//     </View>
//   )
// }
// export default FormsPlayground
